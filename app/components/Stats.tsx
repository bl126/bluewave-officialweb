"use client";

import React from "react";
import Container from "./core/Container";

export default function Stats() {
    const stats = [
        { label: "Current total users", value: "250+" },
        { label: "Current total countries", value: "17" },
        { label: "current total continents", value: "5" },
        { label: "Current total missions completed", value: "1000+" },
    ];

    return (
        <section id="stats" className="section-padding" style={{ position: "relative" }}>
            {/* Dynamic Dashboard Glow */}
            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "75vw",
                height: "350px",
                background: "rgba(0, 246, 255, 0.05)",
                filter: "blur(200px)",
                opacity: 0.12,
                zIndex: -1
            }}></div>

            <Container>
                <div style={{ textAlign: "center", marginBottom: "80px" }}>
                    <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "600", color: "#FFFFFF" }}>Current Traction</h2>
                </div>
                <div className="stats-dashboard-grid" style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "1px",
                    background: "var(--bw-border-glow)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "1px solid var(--bw-glass-border)",
                    boxShadow: "0 60px 120px rgba(0,0,0,0.4)"
                }}>
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card" style={{
                            background: "rgba(11, 15, 20, 0.65)",
                            backdropFilter: "blur(12px)",
                            padding: "72px 48px",
                            textAlign: "center"
                        }}>
                            <div style={{ fontSize: "12px", color: "var(--bw-accent)", textTransform: "uppercase", letterSpacing: "0.25em", marginBottom: "24px", fontWeight: "600" }}>{stat.label}</div>
                            <div style={{ fontSize: "52px", fontWeight: "500", color: "#FFFFFF", letterSpacing: "-0.04em" }}>{stat.value}</div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
