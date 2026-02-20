"use client";

import React, { useState, useEffect } from "react";
import Container from "./core/Container";

const BACKEND_URL = "https://bluewave-backend-wj70.onrender.com";

interface StatsData {
    total_users: number;
    total_presence_vol: number;
}

export default function Stats() {
    const [stats, setStats] = useState([
        { label: "Total Users", value: "—" },
        { label: "Active Countries", value: "21" },
        { label: "Total Continents", value: "5" },
        { label: "Missions Completed", value: "—" },
    ]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchStats() {
            try {
                const res = await fetch(`${BACKEND_URL}/api/v1/ledger/stats`);
                if (!res.ok) throw new Error("Failed to fetch stats");
                const data: StatsData = await res.json();

                setStats([
                    { label: "Total Users", value: data.total_users ? `${data.total_users.toLocaleString()}+` : "420+" },
                    { label: "Active Countries", value: "21" },
                    { label: "Total Continents", value: "5" },
                    { label: "Missions Completed", value: data.total_presence_vol ? `${data.total_presence_vol.toLocaleString()}+` : "6,500+" },
                ]);
            } catch (err) {
                console.error("Stats fetch error:", err);
                // Fallback to hardcoded values
                setStats([
                    { label: "Total Users", value: "420+" },
                    { label: "Active Countries", value: "21" },
                    { label: "Total Continents", value: "5" },
                    { label: "Missions Completed", value: "6,500+" },
                ]);
            } finally {
                setLoading(false);
            }
        }
        fetchStats();
    }, []);

    return (
        <section id="stats" className="section-padding" style={{ position: "relative" }}>

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
                            <div style={{
                                fontSize: "52px",
                                fontWeight: "500",
                                color: "#FFFFFF",
                                letterSpacing: "-0.04em",
                                opacity: loading ? 0.3 : 1,
                                transition: "opacity 0.5s ease"
                            }}>
                                {loading ? "..." : stat.value}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
