"use client";

import React from "react";
import Container from "./core/Container";
import GlassCard from "./core/GlassCard";
import Badge from "./core/Badge";
import Button from "./core/Button";

export default function Builders({ onApply }: { onApply?: () => void }) {

    return (
        <section id="builders" className="section-padding" style={{ position: "relative" }}>
            {/* ... atmospheric elements ... */}
            <div style={{
                position: "absolute",
                bottom: "-15vh",
                left: "50%",
                transform: "translateX(-50%)",
                width: "85vw",
                height: "350px",
                background: "rgba(0, 246, 255, 0.04)",
                filter: "blur(200px)",
                opacity: 0.18,
                zIndex: -1
            }}></div>

            <Container>
                <div className="builders-header" style={{ marginBottom: "120px", maxWidth: "640px" }}>
                    <Badge variant="primary">Builders</Badge>
                    <h2 style={{ marginTop: "40px", marginBottom: "40px" }}>Bluewave <br />Builders Team.</h2>
                    <p style={{ fontSize: "19px", color: "var(--bw-text-secondary)", lineHeight: 1.6 }}>
                        Early contributors shaping the presence economy on TON
                    </p>
                </div>

                <div className="builders-grid" style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "32px"
                }}>
                    {/* Card 1: Founder */}
                    <GlassCard className="builder-card">
                        <h4 style={{ color: "var(--bw-accent)", fontSize: "20px", marginBottom: "32px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Founder</h4>

                        <div style={{ marginBottom: "24px" }}>
                            <div style={{
                                width: "80px",
                                height: "80px",
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, var(--bw-cyan-glow) 0%, transparent 100%)",
                                border: "1px solid var(--bw-glass-border)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginBottom: "20px",
                                position: "relative",
                                overflow: "hidden"
                            }}>
                                <div style={{
                                    width: "60%",
                                    height: "60%",
                                    borderRadius: "50%",
                                    background: "var(--bw-accent)",
                                    opacity: 0.2,
                                    filter: "blur(12px)"
                                }}></div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", justifyContent: "center", marginBottom: "8px" }}>
                                <div style={{ fontSize: "20px", fontWeight: "600", color: "#FFF" }}>Reuben Ezema</div>
                                <a href="https://x.com/Reuben_TON" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "24px", height: "24px", background: "rgba(255,255,255,0.05)", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.1)", transition: "all 0.3s ease" }}>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99 21.75H1.68L9.394 12.934L1.215 2.25H8.04L12.753 8.48L18.244 2.25ZM17.087 19.769H18.921L7.084 4.126H5.117L17.087 19.769Z" fill="white" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <p style={{ fontSize: "16px", color: "var(--bw-text-secondary)", lineHeight: 1.6 }}>
                            Founder & Builder. Bootstrapped Bluewave from idea to live mini app with users across 17 countries.
                        </p>
                    </GlassCard>

                    {/* Card 2: Builders Team */}
                    <GlassCard className="builder-card">
                        <h4 style={{ color: "var(--bw-accent)", fontSize: "20px", marginBottom: "32px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Builders Team</h4>
                        <p style={{ fontSize: "16px", color: "var(--bw-text-secondary)", lineHeight: 1.6 }}>
                            A growing community of Moderators, web3 designers, X ambassadors, Beta Testers, Devs and early contributors, Each members earns meaningful team allocation for consistent support.
                        </p>
                    </GlassCard>

                    {/* Card 3: Join the Team */}
                    <GlassCard className="builder-card" style={{ display: "flex", flexDirection: "column" }}>
                        <h4 style={{ color: "var(--bw-accent)", fontSize: "20px", marginBottom: "32px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Join The Builders Team</h4>
                        <p style={{ fontSize: "16px", color: "var(--bw-text-secondary)", marginBottom: "40px", lineHeight: 1.6, flex: 1 }}>
                            X community Builders, Web3 Graphics Designers & Content writers, Contribute actively and earn your role + team allocation. spots are limited - early builders gets priority.
                        </p>
                        <Button variant="primary" onClick={onApply} style={{ padding: "14px 24px", fontSize: "14px", width: "100%" }}>
                            <span>Apply Now</span>
                        </Button>
                    </GlassCard>
                </div>
            </Container>
        </section>
    );
}
