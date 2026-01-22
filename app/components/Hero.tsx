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

          <div className="hero-visual-anchor">
            <div className="globe-container">
              <div className="globe">
                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>
                <div className="ring ring-3"></div>
                <div className="ring ring-4"></div>
                <div className="core-glow"></div>
              </div>
            </div>
          </div>

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

        </div>
      </Container>
      <style jsx>{`
        .hero-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: center;
        }

        .hero-content-stack {
            order: 1;
        }

        .hero-visual-anchor {
            order: 2;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        /* 3D GLOBE ENGINE */
        .globe-container {
            width: 400px;
            height: 400px;
            perspective: 1200px;
            animation: floatMesh 7s ease-in-out infinite;
        }

        .globe {
            width: 100%;
            height: 100%;
            position: relative;
            transform-style: preserve-3d;
            animation: rotateMesh 25s linear infinite;
        }

        .ring {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border: 2px solid rgba(0, 246, 255, 0.5); /* Cyan */
            border-radius: 50%;
            box-shadow: 0 0 20px rgba(0, 246, 255, 0.2);
        }

        .ring-1 { width: 380px; height: 380px; transform: translate(-50%, -50%) rotateY(0deg); }
        .ring-2 { width: 360px; height: 360px; transform: translate(-50%, -50%) rotateY(60deg); border-color: rgba(0, 136, 255, 0.4); } /* Blue-ish */
        .ring-3 { width: 360px; height: 360px; transform: translate(-50%, -50%) rotateY(-60deg); border-color: rgba(0, 246, 255, 0.4); }
        .ring-4 { width: 400px; height: 400px; transform: translate(-50%, -50%) rotateX(90deg); border: 1px dashed rgba(255, 255, 255, 0.2); } /* Equator */

        .core-glow {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 150px;
            height: 150px;
            background: radial-gradient(circle, rgba(0,246,255,0.4) 0%, transparent 70%);
            filter: blur(40px);
        }

        @media (max-width: 1024px) {
            .hero-layout {
                grid-template-columns: 1fr;
                text-align: center;
                gap: 60px;
            }

            .hero-visual-anchor {
                order: 1 !important; /* Mobile: Globe FIRST */
                margin-bottom: 20px;
            }

            .hero-content-stack {
                order: 2 !important; /* Mobile: Text SECOND */
                align-items: center !important;
            }

            .globe-container {
                width: 280px;
                height: 280px;
            }

            .ring-1 { width: 260px; height: 260px; }
            .ring-2 { width: 240px; height: 240px; }
            .ring-3 { width: 240px; height: 240px; }
            .ring-4 { width: 280px; height: 280px; }
        }
       `}</style>
    </section>
  );
}
