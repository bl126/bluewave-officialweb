"use client";

import React from "react";
import Image from "next/image";
import Container from "./core/Container";
import Button from "./core/Button";
import Badge from "./core/Badge";
import Globe from "./core/Globe";

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
            <Globe className="main-hero-globe" size={480} />
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

        @media (max-width: 1024px) {
            .hero-layout {
                grid-template-columns: 1fr;
                text-align: center;
                gap: 20px;
            }

            .hero-visual-anchor {
                order: 1 !important;
                height: 320px !important;
                margin-top: -20px;
                margin-bottom: 0;
            }

            .hero-content-stack {
                order: 2 !important;
                align-items: center !important;
            }
        }
       `}</style>
    </section>
  );
}
