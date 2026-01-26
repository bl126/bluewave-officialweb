"use client";

import React from "react";
import Container from "./core/Container";
import Badge from "./core/Badge";

export default function Marketplace() {
    const benefits = [
        { title: "Curated Incentive Layers", desc: "Exclusive airdrop access based on verifiable Tier-1 presence." },
        { title: "Alpha Ecosystem Access", desc: "Priority entry for consistent contributors across TON protocols." },
        { title: "Validator-Backed Trust", desc: "Decentralized reputation weights managed by architecture nodes." }
    ];

    return (
        <section id="marketplace" className="section-padding" style={{ position: "relative", overflow: "hidden" }}>
            <Container>
                <div className="marketplace-layout" style={{
                    display: "grid",
                    gridTemplateColumns: "0.95fr 1.05fr",
                    gap: "100px",
                    alignItems: "center"
                }}>

                    <div className="marketplace-content-stack" style={{ order: 1 }}>
                        <Badge variant="primary">Utility Layer</Badge>
                        <h2 style={{ marginTop: "40px", marginBottom: "48px" }}>The Decentralized <br />Marketplace.</h2>
                        <p style={{ fontSize: "clamp(18px, 1.5vw, 20px)", color: "var(--bw-text-secondary)", marginBottom: "56px", lineHeight: 1.6 }}>
                            Convert consistent presence into tangible ecosystem value. Bluewave acts as the bridge between high-value human signal and platform incentives.
                        </p>

                        <div className="benefits-technical-list" style={{ display: "grid", gap: "32px" }}>
                            {benefits.map((b, i) => (
                                <div key={i} style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
                                    <div style={{
                                        marginTop: "8px",
                                        width: "12px",
                                        height: "12px",
                                        borderRadius: "50%",
                                        background: "var(--bw-accent)",
                                        flexShrink: 0,
                                        boxShadow: "0 0 15px var(--bw-accent)"
                                    }}></div>
                                    <div>
                                        <h4 style={{ fontSize: "19px", marginBottom: "6px", color: "#FFFFFF" }}>{b.title}</h4>
                                        <p style={{ fontSize: "16px", color: "var(--bw-text-muted)", lineHeight: 1.5 }}>{b.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="marketplace-visual-anchor" style={{ order: 2 }}>
                        <div className="glass-panel" style={{
                            height: "480px",
                            width: "100%",
                            padding: "48px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "32px",
                            background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(0, 246, 255, 0.015) 100%)",
                            boxShadow: "0 60px 120px rgba(0,0,0,0.4)"
                        }}>
                            <div style={{ height: "40px", width: "45%", background: "rgba(255,255,255,0.07)", borderRadius: "6px" }}></div>
                            <div style={{ height: "40px", width: "75%", background: "rgba(255,255,255,0.07)", borderRadius: "6px" }}></div>
                            <div style={{ flex: 1, width: "100%", background: "rgba(0, 246, 255, 0.02)", borderRadius: "10px", border: "1px dashed rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <span style={{ fontSize: "12px", color: "var(--bw-text-muted)", textTransform: "uppercase", letterSpacing: "0.2em" }}>Marketplace coming soon</span>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
