"use client";
import React from "react";
import Image from "next/image";
import Container from "./core/Container";
import Badge from "./core/Badge";

export default function HowItWorks() {
    const steps = [
        {
            title: "Presence Accumulation",
            desc: "Users build presence score by consistently completing simple daily missions & building their networks and streaks inside our telegram mini app.",
            detail: "Proof of Presence"
        },
        {
            title: "Consistency Verification",
            desc: "Behavioral patterns are analyzed to filter automation and weight long-term human consistency.",
            detail: "Systematic Verification"
        },
        {
            title: "Value Activation",
            desc: "Verified presence becomes an economic signal that users can monetize and platforms, products and brands can trust across web3 ecosystem.",
            detail: "Presence Monetization"
        }
    ];

    return (
        <section id="how-it-works" className="section-padding" style={{ position: "relative", background: "linear-gradient(to bottom, transparent, rgba(0, 246, 255, 0.04), transparent)" }}>
            {/* Central Technical Light Pool */}
            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "60vw",
                height: "450px",
                background: "rgba(0, 246, 255, 0.06)",
                filter: "blur(180px)",
                opacity: 0.15,
                zIndex: -1
            }}></div>

            <Container>
                <div className="architecture-layout" style={{
                    display: "grid",
                    gridTemplateColumns: "1.2fr 1fr",
                    gap: "100px",
                    alignItems: "center"
                }}>

                    <div className="technical-steps-stack">
                        {steps.map((step, i) => (
                            <div key={i} className="tech-step-item" style={{ marginBottom: "72px", position: "relative" }}>
                                <div style={{
                                    position: "absolute",
                                    left: "-48px",
                                    top: "0",
                                    bottom: "-72px",
                                    width: "1px",
                                    background: "linear-gradient(to bottom, var(--bw-accent), transparent)"
                                }}></div>
                                <div style={{
                                    position: "absolute",
                                    left: "-52px",
                                    top: "10px",
                                    width: "9px",
                                    height: "9px",
                                    borderRadius: "50%",
                                    background: "var(--bw-accent)",
                                    boxShadow: "0 0 15px var(--bw-accent)"
                                }}></div>

                                <h4 style={{ color: "var(--bw-accent)", fontSize: "20px", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>{step.title}</h4>
                                <p style={{ fontSize: "18px", color: "var(--bw-text-secondary)", marginBottom: "20px", maxWidth: "520px", lineHeight: 1.6 }}>{step.desc}</p>
                                <div style={{ fontSize: "12px", color: "var(--bw-text-muted)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.15em" }}>{step.detail}</div>
                            </div>
                        ))}
                    </div>

                    <div className="architecture-visual">
                        <div className="glass-panel" style={{
                            height: "580px",
                            width: "110%",
                            transform: "perspective(2500px) rotateY(18deg) rotateX(-5deg) skewY(2deg)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(0, 246, 255, 0.01) 100%)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            boxShadow: "0 80px 160px rgba(0,0,0,0.5)",
                            overflow: "hidden"
                        }}>
                            <div style={{ position: "relative", width: "100%", height: "100%" }}>
                                <Image
                                    src="/architecture-flow.png"
                                    alt="Architecture Presence Flow"
                                    fill
                                    style={{ objectFit: "cover", opacity: 0.8 }}
                                />

                                {/* System Overlay Tag */}
                                <div style={{
                                    position: "absolute",
                                    bottom: "32px",
                                    right: "32px",
                                    background: "rgba(11, 15, 20, 0.6)",
                                    backdropFilter: "blur(12px)",
                                    padding: "12px 20px",
                                    borderRadius: "8px",
                                    border: "1px solid var(--bw-glass-border)",
                                    zIndex: 2
                                }}>
                                    <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--bw-accent)", fontWeight: 600 }}>
                                        Architecture Blueprint Alpha
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>

            <style jsx>{`
        @media (max-width: 968px) {
            .architecture-layout {
                grid-template-columns: 1fr !important;
                gap: 60px !important;
                text-align: center;
            }

            .technical-steps-stack {
                order: 1;
            }

            .architecture-visual {
                order: 2;
                margin-top: 40px;
                width: 100%;
            }

            .glass-panel {
                width: 100% !important;
                transform: none !important;
            }

            .tech-step-item {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
      `}</style>
        </section>
    );
}
