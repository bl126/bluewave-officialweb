"use client";

import React from "react";
import Container from "./core/Container";
import GlassCard from "./core/GlassCard";
import Badge from "./core/Badge";

export default function Vision() {
  const cards = [
    {
      title: "The Signal Deficit",
      desc: "Digital signals are easily faked. Platforms, products & brands struggle to identify real humans and high-value consistency among the noise across web3.",
      tag: "The Challenge"
    },
    {
      title: "Verifiable Presence",
      desc: "Bluewave transforms everyday human behavior into an on-chain asset, turning simple presence into a portable signal of trust and reputation.",
      tag: "The Solution"
    }
  ];

  return (
    <section id="vision" className="section-padding" style={{ position: "relative" }}>
      {/* Strategic Background Light */}
      <div style={{
        position: "absolute",
        top: "40%",
        right: "-10vw",
        width: "600px",
        height: "600px",
        background: "rgba(0, 246, 255, 0.05)",
        filter: "blur(200px)",
        opacity: 0.12,
        zIndex: -1
      }}></div>

      <Container>
        <div className="vision-header" style={{ marginBottom: "120px", maxWidth: "720px" }}>
          <Badge variant="primary">The Vision</Badge>
          <h2 style={{ marginTop: "40px", marginBottom: "48px" }}>
            The Foundation of <br />
            verifiable Human Presence
          </h2>
          <p style={{ fontSize: "clamp(18px, 1.5vw, 22px)", color: "var(--bw-text-secondary)", lineHeight: 1.6 }}>
            In a decentralized future, "Presence" is the ultimate metric. We provide the infrastructure for users to build, own, and monetize their presence across the entire web3 ecosystem.
          </p>
        </div>

        <div className="vision-cards-layout" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px"
        }}>
          {cards.map((card, i) => (
            <GlassCard key={i} className="vision-card">
              <span style={{
                fontSize: "12px",
                color: "var(--bw-accent)",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                display: "block",
                marginBottom: "28px"
              }}>{card.tag}</span>
              <h3 style={{ marginBottom: "24px", fontSize: "28px" }}>{card.title}</h3>
              <p style={{ fontSize: "17px", color: "var(--bw-text-secondary)", lineHeight: 1.7 }}>{card.desc}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
