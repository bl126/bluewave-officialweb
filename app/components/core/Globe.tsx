"use client";

import React, { useEffect, useRef, useState } from "react";

interface GlobeProps {
    className?: string;
    size?: number;
}

const ACTIVE_COUNTRIES = [
    { id: "AF", lat: 33.93911, lon: 67.709953 },
    { id: "AU", lat: -25.274398, lon: 133.775136 },
    { id: "EE", lat: 58.595272, lon: 25.013607 },
    { id: "GE", lat: 42.315407, lon: 43.356892 },
    { id: "GH", lat: 7.946527, lon: -1.023194 },
    { id: "ID", lat: -0.789275, lon: 113.921327 },
    { id: "IN", lat: 20.593684, lon: 78.96288 },
    { id: "ML", lat: 17.570692, lon: -3.996166 },
    { id: "NA", lat: -22.95764, lon: 18.49041 },
    { id: "NG", lat: 9.081999, lon: 8.675277 },
    { id: "NP", lat: 28.394857, lon: 84.124008 },
    { id: "RU", lat: 61.52401, lon: 105.318756 },
    { id: "TR", lat: 38.963745, lon: 35.243322 },
    { id: "TZ", lat: -6.369028, lon: 34.888822 },
    { id: "UA", lat: 48.379433, lon: 31.16558 },
    { id: "US", lat: 37.09024, lon: -95.712891 },
    { id: "ZW", lat: -19.015438, lon: 29.154857 },
];

export default function Globe({ className = "", size = 600 }: GlobeProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [rings, setRings] = useState<number[][][]>([]);
    const rotationRef = useRef(0);

    useEffect(() => {
        // Fetch GeoJSON borders
        fetch("/data/countries.geojson")
            .then(res => res.json())
            .then(data => {
                const flattenedRings: number[][][] = [];
                data.features.forEach((feature: any) => {
                    const { geometry } = feature;
                    if (!geometry) return;

                    const coords = geometry.coordinates;
                    if (geometry.type === "Polygon") {
                        coords.forEach((ring: any) => flattenedRings.push(ring));
                    } else if (geometry.type === "MultiPolygon") {
                        coords.forEach((polygon: any) => {
                            polygon.forEach((ring: any) => flattenedRings.push(ring));
                        });
                    }
                });
                // Optional: Decimate to improve performance if file is too dense
                // For now, use all points but simplified structure
                setRings(flattenedRings);
            })
            .catch(err => console.error("Error loading globe data:", err));
    }, []);

    useEffect(() => {
        if (!canvasRef.current || rings.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;

        const project = (lat: number, lon: number, rotation: number) => {
            const λ = (lon + rotation) * (Math.PI / 180);
            const φ = lat * (Math.PI / 180);
            const r = (canvas.width / 2) * 0.85;

            const x = r * Math.cos(φ) * Math.sin(λ);
            const y = -r * Math.sin(φ);
            const z = r * Math.cos(φ) * Math.cos(λ);

            return { x, y, z };
        };

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            rotationRef.current += 0.3; // Slower, smoother rotation

            // Draw Background Atmosphere
            const glow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, canvas.width / 2);
            glow.addColorStop(0, "rgba(0, 246, 255, 0.08)");
            glow.addColorStop(0.8, "rgba(0, 246, 255, 0.03)");
            glow.addColorStop(1, "transparent");
            ctx.fillStyle = glow;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Sphere Surface
            ctx.beginPath();
            ctx.arc(centerX, centerY, (canvas.width / 2) * 0.85, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(4, 7, 10, 0.7)";
            ctx.fill();
            ctx.strokeStyle = "rgba(0, 246, 255, 0.1)";
            ctx.stroke();

            // Render Borders (Optimized Loop)
            ctx.strokeStyle = "rgba(0, 246, 255, 0.35)";
            ctx.lineWidth = 1;

            rings.forEach(ring => {
                let drawing = false;
                ctx.beginPath();

                for (let i = 0; i < ring.length; i++) {
                    const [lon, lat] = ring[i];
                    const pos = project(lat, lon, rotationRef.current);

                    if (pos.z > 0) {
                        if (!drawing) {
                            ctx.moveTo(centerX + pos.x, centerY + pos.y);
                            drawing = true;
                        } else {
                            ctx.lineTo(centerX + pos.x, centerY + pos.y);
                        }
                    } else {
                        if (drawing) {
                            ctx.stroke();
                            ctx.beginPath();
                            drawing = false;
                        }
                    }
                }
                if (drawing) ctx.stroke();
            });

            // Render Active Country Dots
            ACTIVE_COUNTRIES.forEach(country => {
                const pos = project(country.lat, country.lon, rotationRef.current);
                if (pos.z > 10) { // Slight buffer to prevent dots exactly on edge from flickering
                    ctx.beginPath();
                    ctx.arc(centerX + pos.x, centerY + pos.y, 4, 0, Math.PI * 2);
                    ctx.fillStyle = "#00F6FF";
                    ctx.fill();

                    ctx.beginPath();
                    ctx.arc(centerX + pos.x, centerY + pos.y, 10, 0, Math.PI * 2);
                    ctx.fillStyle = "rgba(0, 246, 255, 0.25)";
                    ctx.fill();
                }
            });

            animationId = requestAnimationFrame(render);
        };

        render();
        return () => cancelAnimationFrame(animationId);
    }, [rings]);

    return (
        <div className={`globe-wrapper ${className}`} style={{ width: size, height: size, position: "relative" }}>
            <canvas
                ref={canvasRef}
                width={size * 2} // Double for sharp rendering
                height={size * 2}
                style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
            />
            {/* Overlay a subtle glass shine */}
            <div style={{
                position: "absolute",
                top: "15%",
                left: "15%",
                width: "40%",
                height: "40%",
                background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.05), transparent 70%)",
                borderRadius: "50%",
                pointerEvents: "none"
            }} />
        </div>
    );
}
