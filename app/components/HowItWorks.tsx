"use client";
import React from "react";
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

            <Container>
                <div style={{ textAlign: "center", marginBottom: "80px" }}>
                    <Badge>How It Works</Badge>
                    <h2 style={{ marginTop: "24px" }}>The Presence Flow</h2>
                </div>

                <div className="architecture-layout" style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: "900px",
                    margin: "0 auto"
                }}>
                    <div className="technical-steps-stack" style={{ width: "100%" }}>
                        {steps.map((step, i) => (
                            <div key={i} className="tech-step-item" style={{ marginBottom: "56px", position: "relative" }}>
                                <div style={{
                                    position: "absolute",
                                    left: "-48px",
                                    top: "0",
                                    bottom: "-56px",
                                    width: "1px",
                                    background: i === steps.length - 1 ? "linear-gradient(to bottom, var(--bw-accent), transparent)" : "var(--bw-accent)",
                                    opacity: 0.3
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

                                <h4 style={{ color: "var(--bw-accent)", fontSize: "18px", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>{step.title}</h4>
                                <p style={{ fontSize: "17px", color: "var(--bw-text-secondary)", marginBottom: "16px", lineHeight: 1.6 }}>{step.desc}</p>
                                <div style={{ fontSize: "11px", color: "var(--bw-text-muted)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.15em" }}>{step.detail}</div>
                            </div>
                        ))}
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
