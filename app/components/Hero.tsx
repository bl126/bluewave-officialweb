"use client";

import React from "react";
import Image from "next/image";
import Container from "./core/Container";
import Button from "./core/Button";
import Badge from "./core/Badge";
import Globe from "./core/Globe";
import Starfield from "./core/Starfield";

import { useEffect, useState } from "react";

export default function Hero() {
  const [globeSize, setGlobeSize] = useState(480);

  useEffect(() => {
    const handleResize = () => {
      setGlobeSize(window.innerWidth < 1024 ? 320 : 480);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <Starfield />
      <div className="hero-space-overlay"></div>
      {/* Dynamic Visual Atmosphere */}
      <div className="bg-atmosphere">
        <div className="ambient-blob blob-hero-top"></div>
        <div className="ambient-blob blob-mid-right"></div>
        <div className="ambient-blob blob-bottom-left"></div>
      </div>

      <Container style={{ height: "100%", display: "flex", alignItems: "center" }}>
        <div className="hero-layout" style={{ height: "auto", maxHeight: "100%", width: "100%" }}>

          <div className="hero-visual-anchor">
            <div className="globe-responsive-wrapper">
              <Globe className="main-hero-globe" size={globeSize} />
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
        .hero-section {
            position: relative;
            background: radial-gradient(circle at 50% 50%, #04070a 0%, transparent 100%);
        }

        .hero-space-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, rgba(4, 7, 10, 0.4) 0%, transparent 100%);
            pointer-events: none;
            z-index: 0;
        }

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

        .globe-responsive-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
        }

        @media (max-width: 1024px) {
            .hero-section {
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .hero-layout {
                grid-template-columns: 1fr;
                text-align: center;
                gap: 0;
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 100%;
                min-height: 500px;
            }

            .hero-visual-anchor {
                position: absolute !important;
                top: 50% !important;
                left: 50% !important;
                transform: translate(-50%, -50%) !important;
                width: 100% !important;
                height: 100% !important;
                z-index: 0 !important;
                opacity: 0.25 !important;
                pointer-events: none !important;
                display: flex !important;
                justify-content: center !important;
                align-items: center !important;
                margin: 0 !important;
            }

            .globe-responsive-wrapper {
                width: 320px !important;
                height: 320px !important;
                aspect-ratio: 1 / 1 !important;
                display: flex !important;
                justify-content: center !important;
                align-items: center !important;
                transform: none !important;
            }

            .hero-content-stack {
                position: relative !important;
                z-index: 10 !important;
                align-items: center !important;
                width: 100%;
                padding: 0 20px;
            }
        }
       `}</style>
    </section>
  );
}
