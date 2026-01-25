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
            <div className="mesh-container">
              <div className="mesh-3d">
                {/* Longitudinal Rings */}
                <div className="mesh-ring ring-v-1"></div>
                <div className="mesh-ring ring-v-2"></div>
                <div className="mesh-ring ring-v-3"></div>
                {/* Latitudinal Rings */}
                <div className="mesh-ring ring-h-1"></div>
                <div className="mesh-ring ring-h-2"></div>
                {/* Orbit Rings */}
                <div className="mesh-orbit orbit-1"></div>
                <div className="mesh-orbit orbit-2"></div>

                <div className="mesh-sphere"></div>
                <div className="mesh-glow"></div>
              </div>
            </div>
          </div>

          <div className="hero-content-stack" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            {/* Same content stack as before */}
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
            position: relative;
        }

        .mesh-container {
            width: 480px;
            height: 480px;
            position: relative;
            perspective: 1200px;
            display: flex;
            justify-content: center;
            align-items: center;
            aspect-ratio: 1 / 1;
        }

        .mesh-3d {
            width: 300px;
            height: 300px;
            position: relative;
            transform-style: preserve-3d;
            animation: rotateGlobe 30s linear infinite;
        }

        .mesh-ring {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 1px solid rgba(0, 246, 255, 0.2);
            border-radius: 50%;
            pointer-events: none;
        }

        /* Vertical Rings (Longitudinal) */
        .ring-v-1 { transform: rotateY(0deg); }
        .ring-v-2 { transform: rotateY(60deg); }
        .ring-v-3 { transform: rotateY(120deg); }

        /* Horizontal Rings (Latitudinal) */
        .ring-h-1 { transform: rotateX(90deg) scale(0.85); border-width: 1.5px; opacity: 0.6; }
        .ring-h-2 { transform: rotateX(90deg) translateY(60px) scale(0.6); opacity: 0.4; }
        .ring-h-2::after { content: ''; position: absolute; inset: 0; border: 1px solid rgba(0, 246, 255, 0.2); border-radius: 50%; transform: translateY(-120px) scale(1); }

        .mesh-orbit {
            position: absolute;
            top: -10%;
            left: -10%;
            width: 120%;
            height: 120%;
            border: 1px dashed rgba(0, 246, 255, 0.3);
            border-radius: 50%;
            animation: rotateOrbit 15s linear infinite;
        }

        .orbit-2 {
            top: -20%;
            left: -20%;
            width: 140%;
            height: 140%;
            border: 1px solid rgba(0, 246, 255, 0.1);
            animation: rotateOrbit 25s linear infinite reverse;
        }

        .mesh-sphere {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 140px;
            height: 140px;
            background: radial-gradient(circle at 30% 30%, var(--bw-accent), transparent 70%);
            border-radius: 50%;
            opacity: 0.2;
            filter: blur(8px);
            box-shadow: 0 0 60px rgba(0, 246, 255, 0.4);
        }

        .mesh-glow {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 450px;
            height: 450px;
            background: radial-gradient(circle, rgba(0, 246, 255, 0.1) 0%, transparent 70%);
            filter: blur(60px);
            z-index: -1;
        }

        @keyframes rotateGlobe {
            0% { transform: rotateX(-15deg) rotateY(0deg); }
            100% { transform: rotateX(-15deg) rotateY(360deg); }
        }

        @keyframes rotateOrbit {
            0% { transform: rotateZ(0deg) rotateX(65deg); }
            100% { transform: rotateZ(360deg) rotateX(65deg); }
        }

        @media (max-width: 1024px) {
            .hero-layout {
                grid-template-columns: 1fr;
                text-align: center;
                gap: 20px;
            }

            .hero-visual-anchor {
                order: 1 !important;
                height: 280px !important;
                margin-bottom: 0px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .mesh-container {
                width: 240px !important;
                height: 240px !important;
                aspect-ratio: 1 / 1;
            }

            .mesh-3d {
                width: 160px !important;
                height: 160px !important;
            }

            .mesh-sphere {
                width: 80px;
                height: 80px;
            }

            .mesh-glow {
                width: 300px;
                height: 300px;
            }
        }
       `}</style>
    </section>
  );
}
