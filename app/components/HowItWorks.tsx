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
                <div className="architecture-layout-optimized">
                    {/* Visual Anchor (Appears FIRST on Mobile) */}
                    <div className="mesh-anchor">
                        <div className="mesh-container">
                            <div className="cube">
                                <div className="face front"></div>
                                <div className="face back"></div>
                                <div className="face right"></div>
                                <div className="face left"></div>
                                <div className="face top"></div>
                                <div className="face bottom"></div>
                            </div>
                        </div>
                    </div>

                    {/* Content Stack */}
                    <div className="content-stack">
                        <div className="architecture-header" style={{ marginBottom: "80px" }}>
                            <Badge variant="primary">How It Works</Badge>
                            <h2 style={{ marginTop: "32px", fontSize: "clamp(40px, 5vw, 64px)" }}>The Presence Flow</h2>
                        </div>

                        <div className="technical-steps-stack">
                            {steps.map((step, i) => (
                                <div key={i} className="tech-step-item" style={{ marginBottom: "72px", position: "relative" }}>
                                    <div style={{
                                        position: "absolute",
                                        left: "-32px",
                                        top: "0",
                                        bottom: "-72px",
                                        width: "1px",
                                        background: "linear-gradient(to bottom, var(--bw-accent), transparent)"
                                    }}></div>
                                    <div style={{
                                        position: "absolute",
                                        left: "-36px",
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
                    </div>
                </div>
            </Container>

            <style jsx>{`
        .architecture-layout-optimized {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
        }

        .mesh-anchor {
            order: 2; /* Desktop: Mesh on right */
        }
        
        .content-stack {
            order: 1; /* Desktop: Content on left */
        }

        /* 3D CUBE STYLES */
        .mesh-container {
            width: 300px;
            height: 300px;
            perspective: 1000px;
            margin: 0 auto;
            animation: floatMesh 6s ease-in-out infinite;
        }

        .cube {
            width: 100%;
            height: 100%;
            position: relative;
            transform-style: preserve-3d;
            animation: rotateMesh 20s linear infinite;
        }

        .face {
            position: absolute;
            width: 300px;
            height: 300px;
            border: 2px solid rgba(0, 246, 255, 0.4);
            background: rgba(0, 246, 255, 0.05);
            box-shadow: 0 0 40px rgba(0, 246, 255, 0.1) inset;
        }

        .front  { transform: rotateY(0deg) translateZ(150px); }
        .back   { transform: rotateY(180deg) translateZ(150px); }
        .right  { transform: rotateY(90deg) translateZ(150px); }
        .left   { transform: rotateY(-90deg) translateZ(150px); }
        .top    { transform: rotateX(90deg) translateZ(150px); }
        .bottom { transform: rotateX(-90deg) translateZ(150px); }

        @media (max-width: 968px) {
            .architecture-layout-optimized {
                grid-template-columns: 1fr;
                gap: 60px;
                text-align: center;
            }

            .mesh-anchor {
                order: 1 !important; /* Mobile: Mesh FIRST */
                margin-bottom: 40px;
            }

            .content-stack {
                order: 2 !important; /* Mobile: Content SECOND */
            }

            .mesh-container {
                width: 220px;
                height: 220px;
            }
            
            .face {
                width: 220px;
                height: 220px;
            }

            .front  { transform: rotateY(0deg) translateZ(110px); }
            .back   { transform: rotateY(180deg) translateZ(110px); }
            .right  { transform: rotateY(90deg) translateZ(110px); }
            .left   { transform: rotateY(-90deg) translateZ(110px); }
            .top    { transform: rotateX(90deg) translateZ(110px); }
            .bottom { transform: rotateX(-90deg) translateZ(110px); }
            
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
