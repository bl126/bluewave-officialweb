"use client";

import React from "react";
import Button from "./core/Button";

interface LegalOverlayProps {
    isOpen: boolean;
    onClose: () => void;
    type: "terms" | "privacy";
}

export default function LegalOverlay({ isOpen, onClose, type }: LegalOverlayProps) {
    if (!isOpen) return null;

    const content = type === "terms" ? (
        <>
            <h2 style={{ fontSize: "32px", marginBottom: "32px", color: "var(--bw-accent)" }}>Bluewave Terms & Conditions</h2>
            <div style={{ display: "grid", gap: "24px", color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
                <div>
                    <h3 style={{ fontSize: "18px", color: "#FFF", marginBottom: "8px" }}>1. Acceptance</h3>
                    <p>By using Bluewave (the mini app and protocol), you agree to these Terms.</p>
                </div>
                <div>
                    <h3 style={{ fontSize: "18px", color: "#FFF", marginBottom: "8px" }}>2. Eligibility</h3>
                    <p>You must be 13+ (or age of majority in your country). No KYC required.</p>
                </div>
                <div>
                    <h3 style={{ fontSize: "18px", color: "#FFF", marginBottom: "8px" }}>3. Use</h3>
                    <p>You may not use bots, spam, or violate others' rights. We may suspend access for violations.</p>
                </div>
                <div>
                    <h3 style={{ fontSize: "18px", color: "#FFF", marginBottom: "8px" }}>4. No Financial Advice</h3>
                    <p>Bluewave is not investment or financial advice. Crypto involves risks (volatility, loss). Use at your own risk.</p>
                </div>
                <div>
                    <h3 style={{ fontSize: "18px", color: "#FFF", marginBottom: "8px" }}>5. Disclaimers</h3>
                    <p>Service provided "as is". We are not liable for losses, bugs, or third-party actions.</p>
                </div>
                <div>
                    <h3 style={{ fontSize: "18px", color: "#FFF", marginBottom: "8px" }}>6. Changes</h3>
                    <p>We may update these Terms. Continued use means acceptance.</p>
                </div>
                <div>
                    <h3 style={{ fontSize: "18px", color: "#FFF", marginBottom: "8px" }}>7. Contact</h3>
                    <p>Questions? DM @bluewavef on Telegram.</p>
                </div>
                <div style={{ marginTop: "16px", fontSize: "14px", color: "var(--bw-text-muted)" }}>
                    Last updated: January 2026
                </div>
            </div>
        </>
    ) : (
        <>
            <h2 style={{ fontSize: "32px", marginBottom: "32px", color: "var(--bw-accent)" }}>Bluewave Privacy Policy</h2>
            <div style={{ display: "grid", gap: "24px", color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
                <div>
                    <h3 style={{ fontSize: "18px", color: "#FFF", marginBottom: "8px" }}>We respect your privacy.</h3>
                    <p>Data we collect: Only your Telegram ID (for authentication and presence scoring). No emails, phone numbers, or KYC data.</p>
                </div>
                <div>
                    <h3 style={{ fontSize: "18px", color: "#FFF", marginBottom: "8px" }}>How we use it</h3>
                    <p>To calculate scores, verify human activity (AI PvP), and provide rewards. No personal data is sold or shared.</p>
                </div>
                <div>
                    <h3 style={{ fontSize: "18px", color: "#FFF", marginBottom: "8px" }}>Data storage</h3>
                    <p>Secure servers (Supabase). Future on-chain data uses TON smart contracts.</p>
                </div>
                <div>
                    <h3 style={{ fontSize: "18px", color: "#FFF", marginBottom: "8px" }}>Your rights</h3>
                    <p>Contact us to request data deletion (Telegram ID removal).</p>
                </div>
                <div>
                    <h3 style={{ fontSize: "18px", color: "#FFF", marginBottom: "8px" }}>Changes</h3>
                    <p>We may update this Policy. Check back periodically.</p>
                </div>
                <div>
                    <h3 style={{ fontSize: "18px", color: "#FFF", marginBottom: "8px" }}>Contact</h3>
                    <p>DM @bluewavef on Telegram.</p>
                </div>
                <div style={{ marginTop: "16px", fontSize: "14px", color: "var(--bw-text-muted)" }}>
                    Last updated: January 2026
                </div>
            </div>
        </>
    );

    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(4, 7, 10, 0.8)",
            backdropFilter: "blur(20px)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px"
        }}>
            <div style={{
                width: "100%",
                maxWidth: "700px",
                maxHeight: "85vh",
                background: "var(--bw-glass)",
                border: "1px solid var(--bw-glass-border)",
                borderRadius: "24px",
                padding: "48px",
                position: "relative",
                overflowY: "auto",
                boxShadow: "0 40px 100px rgba(0,0,0,0.6)"
            }}>
                <button
                    onClick={onClose}
                    style={{
                        position: "absolute",
                        top: "32px",
                        right: "32px",
                        background: "none",
                        border: "none",
                        color: "#FFF",
                        fontSize: "24px",
                        cursor: "pointer",
                        opacity: 0.6,
                        transition: "opacity 0.2s"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = "0.6"}
                >
                    ×
                </button>
                {content}
                <div style={{ marginTop: "48px", display: "flex", justifyContent: "flex-end" }}>
                    <Button variant="secondary" onClick={onClose}>
                        <span>Close Document</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
