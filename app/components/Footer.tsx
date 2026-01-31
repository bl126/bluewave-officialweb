"use client";

import React from "react";
import Container from "./core/Container";
import Image from "next/image";

export default function Footer({ onOpenLegal }: { onOpenLegal?: (type: "terms" | "privacy") => void }) {
    return (
        <footer className="footer" style={{
            position: "relative",
            borderTop: "1px solid var(--bw-glass-border)",
            padding: "80px 0 60px"
        }}>
            {/* ... atmospheric elements ... */}

            <Container>
                <div className="footer-layout" style={{
                    display: "grid",
                    gridTemplateColumns: "1.3fr 2fr",
                    gap: "120px",
                    marginBottom: "80px"
                }}>

                    <div className="footer-brand-column">
                        <a href="#" className="logo" style={{ marginBottom: "40px" }}>
                            <Image src="/bluewave-icon.png" alt="Bluewave" width={40} height={40} />
                            <span className="logo-text" style={{ fontSize: "26px", color: "#FFFFFF" }}>Bluewave</span>
                        </a>
                        <p style={{ fontSize: "17px", color: "var(--bw-text-muted)", maxWidth: "340px", lineHeight: 1.8 }}>
                            The Future Of Presence Ownership & Monetization on TON.
                        </p>
                    </div>

                    <div className="footer-links-ecosystem" style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "64px"
                    }}>
                        <div className="link-group">
                            <h4 style={{ fontSize: "13px", color: "#FFFFFF", marginBottom: "32px", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: "600" }}>Protocol</h4>
                            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                <a href="#vision" className="footer-link-action">Vision</a>
                                <a href="#how-it-works" className="footer-link-action">How It Works</a>
                                <a href="#marketplace" className="footer-link-action">Marketplace</a>
                            </div>
                        </div>
                        <div className="link-group">
                            <h4 style={{ fontSize: "13px", color: "#FFFFFF", marginBottom: "32px", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: "600" }}>Connect</h4>
                            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                                {/* X Icon */}
                                <a href="https://x.com/bluewavefx7" target="_blank" rel="noopener noreferrer" className="social-icon-glass">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                                {/* Telegram Icon */}
                                <a href="https://t.me/bluewaveprotocol" target="_blank" rel="noopener noreferrer" className="social-icon-glass">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                                    </svg>
                                </a>
                                {/* Email/Gmail Icon */}
                                <a href="mailto:bluewavefx7@gmail.com" className="social-icon-glass">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-tier" style={{
                    paddingTop: "40px",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "13px",
                    color: "var(--bw-text-muted)"
                }}>
                    <p>© 2026 Bluewave Protocol.</p>
                    <div className="footer-legal" style={{ display: "flex", gap: "32px" }}>
                        <button
                            onClick={() => onOpenLegal?.("terms")}
                            style={{ background: "none", border: "none", color: "inherit", fontSize: "inherit", cursor: "pointer", transition: "color 0.3s ease" }}
                            onMouseEnter={(e) => e.currentTarget.style.color = "var(--bw-accent)"}
                            onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}
                        >
                            Terms & Conditions
                        </button>
                        <button
                            onClick={() => onOpenLegal?.("privacy")}
                            style={{ background: "none", border: "none", color: "inherit", fontSize: "inherit", cursor: "pointer", transition: "color 0.3s ease" }}
                            onMouseEnter={(e) => e.currentTarget.style.color = "var(--bw-accent)"}
                            onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}
                        >
                            Privacy Policy
                        </button>
                    </div>
                </div>
            </Container>

            <style jsx>{`
        .social-icon-glass {
          width: 44px;
          height: 44px;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--bw-glass-border);
          border-radius: 12px;
          color: var(--bw-text-secondary);
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          backdrop-filter: blur(8px);
        }
        .footer-link-action {
          display: block;
          color: var(--bw-text-muted);
          text-decoration: none;
          font-size: 16px;
          transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
          font-weight: 500;
        }
        .footer-link-action:hover {
          color: var(--bw-accent) !important;
          transform: translateX(6px);
        }
        .social-icon-glass:hover {
          background: rgba(0, 246, 255, 0.1);
          border-color: var(--bw-accent);
          color: var(--bw-accent);
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(0, 246, 255, 0.15);
        }
      `}</style>
        </footer>
    );
}
