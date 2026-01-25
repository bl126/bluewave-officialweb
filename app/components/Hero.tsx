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
                <div className="mesh-ring ring-1"></div>
                <div className="mesh-ring ring-2"></div>
                <div className="mesh-ring ring-3"></div>
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
            width: 500px;
            height: 500px;
            position: relative;
            perspective: 1000px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .mesh-3d {
            width: 320px;
            height: 320px;
            position: relative;
            transform-style: preserve-3d;
            animation: rotateMesh 20s linear infinite, floatMesh 6s ease-in-out infinite;
        }

        .mesh-ring {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 1px solid rgba(0, 246, 255, 0.15);
            border-radius: 50%;
            box-shadow: 0 0 20px rgba(0, 246, 255, 0.05);
        }

        .ring-1 { transform: rotateX(70deg) rotateY(0deg); }
        .ring-2 { transform: rotateX(70deg) rotateY(60deg); }
        .ring-3 { transform: rotateX(70deg) rotateY(120deg); }

        .mesh-sphere {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 120px;
            height: 120px;
            background: radial-gradient(circle at 30% 30%, var(--bw-accent), transparent 70%);
            border-radius: 50%;
            opacity: 0.15;
            filter: blur(5px);
            box-shadow: 0 0 50px var(--bw-accent);
        }

        .mesh-glow {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(0, 246, 255, 0.1) 0%, transparent 70%);
            filter: blur(40px);
            z-index: -1;
        }

        @media (max-width: 1024px) {
            .hero-layout {
                grid-template-columns: 1fr;
                text-align: center;
                gap: 40px;
            }

            .hero-visual-anchor {
                order: 1 !important;
                margin-bottom: 20px;
            }

            .hero-content-stack {
                order: 2 !important;
                align-items: center !important;
            }

            .mesh-container {
                width: 320px;
                height: 320px;
            }

            .mesh-3d {
                width: 220px;
                height: 220px;
            }
        }
       `}</style>
    </section>
  );
}
