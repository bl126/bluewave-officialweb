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
            <div className="human-network-container">
              <div className="network-nodes">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className={`human-node node-${i}`}>
                    <svg viewBox="0 0 100 100" className="human-silhouette">
                      <path d="M50 10C35 10 25 20 25 35C25 50 35 60 50 60C65 60 75 50 75 35C75 20 65 10 50 10ZM20 85C20 70 30 65 50 65C70 65 80 70 80 85V95H20V85Z" fill="currentColor" />
                    </svg>
                    <div className="head-glow"></div>
                  </div>
                ))}
                <svg className="connecting-lines" width="100%" height="100%">
                  <line x1="20%" y1="30%" x2="50%" y2="15%" stroke="rgba(0, 246, 255, 0.2)" strokeWidth="1" />
                  <line x1="50%" y1="15%" x2="80%" y2="30%" stroke="rgba(0, 246, 255, 0.2)" strokeWidth="1" />
                  <line x1="80%" y1="30%" x2="70%" y2="70%" stroke="rgba(0, 246, 255, 0.2)" strokeWidth="1" />
                  <line x1="70%" y1="70%" x2="30%" y2="70%" stroke="rgba(0, 246, 255, 0.2)" strokeWidth="1" />
                  <line x1="30%" y1="70%" x2="20%" y2="30%" stroke="rgba(0, 246, 255, 0.2)" strokeWidth="1" />
                  <line x1="50%" y1="15%" x2="50%" y2="50%" stroke="rgba(0, 246, 255, 0.4)" strokeWidth="1" />
                </svg>
                <div className="central-glow"></div>
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

        .human-network-container {
            width: 450px;
            height: 450px;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .network-nodes {
            width: 100%;
            height: 100%;
            position: relative;
            animation: floatNetwork 10s ease-in-out infinite;
        }

        .human-node {
            position: absolute;
            width: 60px;
            height: 80px;
            color: rgba(0, 246, 255, 0.15);
            transition: all 0.5s ease;
            filter: drop-shadow(0 0 10px rgba(0, 246, 255, 0.1));
        }

        .human-node:hover {
            color: rgba(0, 246, 255, 0.4);
            filter: drop-shadow(0 0 20px rgba(0, 246, 255, 0.3));
            transform: scale(1.1);
        }

        .node-1 { top: 15%; left: 45%; animation: pulseNode 4s infinite 0s; }
        .node-2 { top: 30%; left: 15%; animation: pulseNode 4s infinite 1s; }
        .node-3 { top: 30%; left: 75%; animation: pulseNode 4s infinite 2s; }
        .node-4 { top: 70%; left: 25%; animation: pulseNode 4s infinite 1.5s; }
        .node-5 { top: 70%; left: 65%; animation: pulseNode 4s infinite 0.5s; }

        .head-glow {
            position: absolute;
            top: 15px;
            left: 50%;
            transform: translateX(-50%);
            width: 8px;
            height: 8px;
            background: var(--bw-accent);
            border-radius: 50%;
            box-shadow: 0 0 15px var(--bw-accent), 0 0 30px var(--bw-accent);
        }

        .connecting-lines {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        }

        .central-glow {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 250px;
            height: 250px;
            background: radial-gradient(circle, rgba(0, 246, 255, 0.15) 0%, transparent 70%);
            filter: blur(40px);
            z-index: -2;
        }

        @keyframes floatNetwork {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
        }

        @keyframes pulseNode {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; filter: drop-shadow(0 0 25px rgba(0, 246, 255, 0.4)); }
        }

        @media (max-width: 1024px) {
            .hero-layout {
                grid-template-columns: 1fr;
                text-align: center;
                gap: 40px;
            }

            .hero-visual-anchor {
                order: 1 !important;
                margin-bottom: 0;
            }

            .hero-content-stack {
                order: 2 !important;
                align-items: center !important;
            }

            .human-network-container {
                width: 320px;
                height: 320px;
            }

            .human-node {
                width: 45px;
                height: 60px;
            }
        }
       `}</style>
    </section>
  );
}
