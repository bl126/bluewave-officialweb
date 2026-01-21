"use client";

import React from "react";
import Image from "next/image";
import Container from "./core/Container";
import Button from "./core/Button";
import Badge from "./core/Badge";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      {/* Dynamic Visual Atmosphere */}
      <div className="bg-atmosphere">
        <div className="ambient-blob blob-hero-top"></div>
        <div className="ambient-blob blob-mid-right"></div>
        <div className="ambient-blob blob-bottom-left"></div>
      </div>

      <Container style={{ height: "100%", display: "flex", alignItems: "center" }}>
        <div className="hero-layout" style={{ height: "auto", maxHeight: "100%", width: "100%" }}>

          <div className="hero-content-stack" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>

            <h1 className="hero-main-title" style={{ marginTop: "0", marginBottom: "40px" }}>
              The Human <br />
              Presence Layer <br />
              <span style={{ color: "var(--bw-accent)", display: "inline-flex", alignItems: "center", gap: "12px" }}>
                On TON
                <div style={{
                  position: "relative",
                  width: "32px",
                  height: "32px",
                  transform: "rotate(12deg)",
                  marginLeft: "4px"
                }}>
                  <Image
                    src="/ton-transparent.png"
                    alt="TON"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </span>
            </h1>

            <p className="hero-strapline" style={{
              fontSize: "clamp(15px, 1.8vw, 18px)",
              marginBottom: "56px",
              maxWidth: "600px",
              color: "var(--bw-text-secondary)",
              lineHeight: 1.6
            }}>
              Build, Own, & Monetize Your Digital Presence. <br />
              Bluewave turns real human consistency into verifiable user owned on-chain reputation.
            </p>

            <div className="hero-cta-group" style={{ display: "flex", gap: "24px" }}>
              <a href="https://t.me/Bluewave_Ecosystem_bot?start=ref_5023869471" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <Button variant="primary">
                  <Image src="/telegram-transparent.png" alt="Telegram" width={44} height={44} />
                  <span>Launch Mini App</span>
                </Button>
              </a>

              <Button
                variant="secondary"
                href="https://drive.google.com/file/d/1BVdfgYF2ap5KS9PrgMtqT9ptlBx6404c/view?usp=drivesdk"
                external
              >
                <span>Read Whitepaper</span>
              </Button>
            </div>
          </div>

          <div className="hero-visual-anchor" style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}>
            <div className="glass-panel" style={{
              height: "380px",
              width: "115%",
              transform: "perspective(2000px) rotateY(-15deg) rotateX(10deg) skewY(-2deg)",
              boxShadow: "0 80px 160px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(0, 246, 255, 0.015) 100%)",
              marginLeft: "-10%",
              overflow: "hidden"
            }}>
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <Image
                  src="/protocol-visual.png"
                  alt="Protocol Presence Ledger"
                  fill
                  style={{ objectFit: "cover", opacity: 0.8 }}
                />

                {/* Protocol Overlay Tag */}
                <div style={{
                  position: "absolute",
                  bottom: "32px",
                  left: "32px",
                  background: "rgba(11, 15, 20, 0.6)",
                  backdropFilter: "blur(12px)",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  border: "1px solid var(--bw-glass-border)",
                  zIndex: 2
                }}>
                  <span style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--bw-accent)", fontWeight: 600 }}>
                    Presence Ledger Alpha
                  </span>
                </div>
              </div>
            </div>

            {/* Contextual Shadow Glow */}
            <div style={{
              position: "absolute",
              top: "50%",
              left: "45%",
              transform: "translate(-50%, -50%)",
              width: "450px",
              height: "450px",
              background: "var(--bw-accent)",
              filter: "blur(200px)",
              opacity: 0.12,
              zIndex: -1
            }}></div>
          </div>

        </div>
      </Container>
    </section>
  );
}
