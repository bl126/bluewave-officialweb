"use client";

import React from "react";
import Container from "./core/Container";
import Badge from "./core/Badge";
import GlassCard from "./core/GlassCard";
import Image from "next/image";

export default function BwaveScan() {
    const features = [
        {
            title: "Epoch Settlement",
            desc: "Every 24 hours, BwaveScan settles all presence signals into finalized cryptographic records, creating an immutable timeline of human activity.",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
            )
        },
        {
            title: "BW ID Verification",
            desc: "Every participant has a unique BW ID, a privacy-preserving credential anchored to verifiable human presence, not invasive identity documents.",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
            )
        },
        {
            title: "Signal Integrity",
            desc: "Multi-variate signal consensus filters automated noise with 99.9% human-origin confidence, preventing Sybil inflation and farming attacks.",
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
            )
        }
    ];

    return (
        <section id="bwavescan" className="section-padding" style={{ position: "relative", overflow: "hidden" }}>
            <Container>
                {/* Header */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "80px" }}>
                    <Badge variant="primary">Infrastructure Layer</Badge>

                    <div style={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "40px", marginBottom: "32px" }}>
                        <div style={{ width: "80px", height: "80px", position: "relative", flexShrink: 0 }}>
                            <Image src="/bwavescan-logo.png" alt="BwaveScan" fill style={{ objectFit: "contain" }} />
                        </div>
                        <h2 style={{ margin: 0 }}>BwaveScan</h2>
                    </div>

                    <p style={{
                        fontSize: "clamp(18px, 1.5vw, 22px)",
                        color: "var(--bw-text-secondary)",
                        lineHeight: 1.6,
                        maxWidth: "720px"
                    }}>
                        BwaveScan is the definitive infrastructure for the <strong style={{ color: "#FFFFFF" }}>Human Presence Ledger</strong>.
                        It transforms digital consistency into a verifiable, portable asset, acting as the core settlement
                        and exploration layer for the entire Bluewave Protocol ecosystem.
                    </p>

                    <a
                        href="http://bwavescan.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bwavescan-cta-btn"
                        style={{
                            marginTop: "40px",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "10px",
                            padding: "16px 36px",
                            fontSize: "14px",
                            fontWeight: "600",
                            textTransform: "uppercase" as const,
                            letterSpacing: "0.15em",
                            color: "#FFFFFF",
                            background: "linear-gradient(135deg, rgba(0, 246, 255, 0.15) 0%, rgba(0, 246, 255, 0.05) 100%)",
                            border: "1px solid var(--bw-accent)",
                            borderRadius: "14px",
                            textDecoration: "none",
                            transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                            boxShadow: "0 0 30px rgba(0, 246, 255, 0.1)"
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--bw-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                        </svg>
                        Explore the Ledger
                    </a>
                </div>

                {/* Feature Cards */}
                <div className="bwavescan-features-grid" style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "32px"
                }}>
                    {features.map((feature, i) => (
                        <GlassCard key={i} className="bwavescan-feature-card" style={{ textAlign: "left", padding: "48px 32px" }}>
                            <div style={{
                                width: "64px",
                                height: "64px",
                                borderRadius: "16px",
                                background: "rgba(0, 246, 255, 0.08)",
                                border: "1px solid rgba(0, 246, 255, 0.15)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginBottom: "28px",
                                color: "var(--bw-accent)"
                            }}>
                                {feature.icon}
                            </div>
                            <h4 style={{ fontSize: "20px", color: "#FFFFFF", marginBottom: "16px" }}>{feature.title}</h4>
                            <p style={{ fontSize: "15px", color: "var(--bw-text-muted)", lineHeight: 1.7 }}>{feature.desc}</p>
                        </GlassCard>
                    ))}
                </div>

                <style jsx>{`
                    .bwavescan-cta-btn:hover {
                        background: linear-gradient(135deg, rgba(0, 246, 255, 0.25) 0%, rgba(0, 246, 255, 0.1) 100%) !important;
                        transform: translateY(-3px);
                        box-shadow: 0 15px 40px rgba(0, 246, 255, 0.2) !important;
                    }
                    @media (max-width: 768px) {
                        .bwavescan-features-grid {
                            grid-template-columns: 1fr !important;
                        }
                    }
                `}</style>
            </Container>
        </section>
    );
}
