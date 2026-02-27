"use client";

import Image from "next/image";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// ── Data ──────────────────────────────────────────────────────────────────────

const BRAND_COLORS = [
    { name: "Bluewave Cyan", hex: "#00F6FF", usage: "Primary accent, glows, CTAs" },
    { name: "Deep Navy", hex: "#0B0F14", usage: "Primary background" },
    { name: "Platform Black", hex: "#000000", usage: "Ultimate dark base layer" },
    { name: "Signal White", hex: "#FFFFFF", usage: "Primary text on dark" },
];

const assets = [
    {
        category: "App Icon",
        items: [
            { id: "icon-neon", name: "Icon — Neon Glow", description: "For app stores and dark presentations", file: "/brand/icon-neon-dark.png", bg: "#0B0F14" },
            { id: "icon-cyan", name: "Icon — Cyan", description: "Flat cyan icon, use on white backgrounds", file: "/brand/icon-cyan-light.png", bg: "#ffffff" },
            { id: "icon-gray", name: "Icon — Monochrome", description: "Gray variant for print and monochrome", file: "/brand/icon-gray-light.png", bg: "#F9FAFB" },
        ],
    },
    {
        category: "Horizontal Logo",
        items: [
            { id: "logo-cyan-dark", name: "Logo — Cyan on Black", description: "Primary logo for dark backgrounds", file: "/brand/logo-cyan-dark.png", bg: "#000000" },
            { id: "logo-white-dark", name: "Logo — White on Dark", description: "White logo for dark or colored backgrounds", file: "/brand/logo-white-dark.png", bg: "#0B0F14" },
            { id: "logo-gray-light", name: "Logo — Monochrome", description: "Gray logo for light or print backgrounds", file: "/brand/logo-gray-light.png", bg: "#ffffff" },
        ],
    },
];

// ── Copy Button ───────────────────────────────────────────────────────────────

function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);
    return (
        <button
            onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
            style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "none", border: "1px solid rgba(255,255,255,0.12)",
                color: copied ? "var(--bw-accent)" : "rgba(255,255,255,0.45)",
                padding: "4px 12px", borderRadius: 6,
                fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", cursor: "pointer",
                transition: "all 0.25s ease", whiteSpace: "nowrap"
            }}
        >
            {copied ? "✓ Copied" : `Copy ${text}`}
        </button>
    );
}

// ── Asset Card ────────────────────────────────────────────────────────────────

function AssetCard({ asset }: { asset: typeof assets[0]["items"][0] }) {
    const isDark = asset.bg === "#000000" || asset.bg === "#0B0F14";
    return (
        <div style={{
            borderRadius: 16, overflow: "hidden",
            border: "1px solid var(--bw-glass-border)",
            background: "var(--bw-glass)",
            display: "flex", flexDirection: "column",
        }}>
            {/* Preview */}
            <div style={{
                background: asset.bg, height: 180,
                display: "flex", alignItems: "center", justifyContent: "center",
                borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "#e5e7eb"}`,
                position: "relative", padding: 24
            }}>
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                    <Image src={asset.file} alt={asset.name} fill style={{ objectFit: "contain" }} />
                </div>
            </div>
            {/* Info */}
            <div style={{ padding: "20px 20px 20px", display: "flex", flexDirection: "column", gap: 12 }}>
                <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "var(--bw-text-primary)", marginBottom: 4 }}>{asset.name}</p>
                    <p style={{ fontSize: 12, color: "var(--bw-text-muted)", lineHeight: 1.5 }}>{asset.description}</p>
                </div>
                <a
                    href={asset.file}
                    download={`Bluewave_${asset.id}.png`}
                    style={{
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                        background: "rgba(0,246,255,0.08)", border: "1px solid rgba(0,246,255,0.25)",
                        color: "var(--bw-accent)", fontWeight: 700, fontSize: 11,
                        letterSpacing: "0.12em", textTransform: "uppercase",
                        padding: "10px 0", borderRadius: 10, textDecoration: "none",
                        transition: "background 0.25s ease"
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,246,255,0.15)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "rgba(0,246,255,0.08)")}
                >
                    ↓ Download PNG
                </a>
            </div>
        </div>
    );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BrandAssetsPage() {
    return (
        <div className="bw-root">
            <Header />

            <main style={{ paddingTop: 140, paddingBottom: 120 }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>

                    {/* ── Hero ── */}
                    <div style={{ marginBottom: 80 }}>
                        <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--bw-text-muted)", fontSize: 13, textDecoration: "none", marginBottom: 32, transition: "color 0.2s" }}
                            onMouseEnter={e => (e.currentTarget.style.color = "var(--bw-accent)")}
                            onMouseLeave={e => (e.currentTarget.style.color = "var(--bw-text-muted)")}
                        >
                            ← Back to Home
                        </a>
                        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--bw-accent)", marginBottom: 16 }}>Brand Resources</p>
                        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: 20, color: "var(--bw-text-primary)" }}>
                            Bluewave Brand Assets
                        </h1>
                        <p style={{ fontSize: 17, color: "var(--bw-text-muted)", maxWidth: 600, lineHeight: 1.8 }}>
                            Official Bluewave brand materials for press, partners, and builders. Download logos and follow our usage guidelines when featuring Bluewave in your work.
                        </p>
                    </div>

                    {/* ── Usage Guidelines (Etherscan style: text first) ── */}
                    <section style={{ marginBottom: 80 }}>
                        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "var(--bw-text-primary)" }}>Usage Guidelines</h2>
                        <p style={{ fontSize: 13, color: "var(--bw-text-muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 32 }}>
                            Please read before using our brand assets
                        </p>

                        {/* Badges */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 36 }}>
                            {[
                                { label: "✅ Approved for press use", color: "#22c55e", bg: "rgba(34,197,94,0.08)" },
                                { label: "❌ Do not alter or recolor", color: "#ef4444", bg: "rgba(239,68,68,0.08)" },
                                { label: "⚠️ Maintain clear space", color: "#f59e0b", bg: "rgba(245,158,11,0.08)" },
                            ].map(b => (
                                <span key={b.label} style={{ background: b.bg, border: `1px solid ${b.color}40`, borderRadius: 999, padding: "6px 14px", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: b.color }}>
                                    {b.label}
                                </span>
                            ))}
                        </div>

                        {/* Guidelines as simple list rows — clean, Etherscan-inspired */}
                        <div style={{ background: "var(--bw-glass)", border: "1px solid var(--bw-glass-border)", borderRadius: 16, overflow: "hidden" }}>
                            {[
                                { icon: "✅", rule: "Use the official logo files provided on this page." },
                                { icon: "✅", rule: "Use the dark/neon logo on dark backgrounds, and the gray logo on light backgrounds." },
                                { icon: "✅", rule: "Maintain clear space around the logo equal to the cap-height of the 'B' letterform on all sides." },
                                { icon: "✅", rule: "Link back to bluewaveprotocol.xyz when using our logos in digital media." },
                                { icon: "❌", rule: "Do not alter, recolor, stretch, rotate, or recreate any Bluewave brand mark." },
                                { icon: "❌", rule: "Do not use the logo to imply partnership or endorsement without written permission." },
                                { icon: "❌", rule: "Do not place the logo on visually busy or low-contrast backgrounds." },
                            ].map((item, i) => (
                                <div key={i} style={{
                                    display: "flex", alignItems: "flex-start", gap: 16,
                                    padding: "18px 28px",
                                    borderBottom: i < 6 ? "1px solid var(--bw-glass-border)" : "none",
                                }}>
                                    <span style={{ fontSize: 16, lineHeight: 1, marginTop: 1, flexShrink: 0 }}>{item.icon}</span>
                                    <p style={{ fontSize: 15, color: "var(--bw-text-secondary)", lineHeight: 1.6 }}>{item.rule}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Brand Colors ── */}
                    <section style={{ marginBottom: 80 }}>
                        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "var(--bw-text-primary)" }}>Brand Colors</h2>
                        <p style={{ fontSize: 13, color: "var(--bw-text-muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 32 }}>
                            Official palette — click to copy hex
                        </p>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
                            {BRAND_COLORS.map(color => (
                                <div key={color.hex} style={{ borderRadius: 14, overflow: "hidden", border: "1px solid var(--bw-glass-border)" }}>
                                    <div style={{ height: 72, background: color.hex, borderBottom: "1px solid rgba(255,255,255,0.07)" }} />
                                    <div style={{ padding: "14px 16px", background: "var(--bw-glass)", display: "flex", flexDirection: "column", gap: 8 }}>
                                        <p style={{ fontSize: 14, fontWeight: 700, color: "var(--bw-text-primary)" }}>{color.name}</p>
                                        <CopyButton text={color.hex} />
                                        <p style={{ fontSize: 11, color: "var(--bw-text-muted)" }}>{color.usage}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ── Logo Assets ── */}
                    {assets.map(section => (
                        <section key={section.category} style={{ marginBottom: 72 }}>
                            <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "var(--bw-text-primary)" }}>{section.category}</h2>
                            <p style={{ fontSize: 13, color: "var(--bw-text-muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 32 }}>
                                Click download to save
                            </p>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
                                {section.items.map(asset => <AssetCard key={asset.id} asset={asset} />)}
                            </div>
                        </section>
                    ))}

                    {/* ── Contact CTA ── */}
                    <div style={{
                        background: "rgba(0,246,255,0.04)", border: "1px solid rgba(0,246,255,0.15)",
                        borderRadius: 20, padding: "40px 48px",
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                        gap: 24, flexWrap: "wrap"
                    }}>
                        <div>
                            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: "var(--bw-text-primary)" }}>Need a different format?</h2>
                            <p style={{ color: "var(--bw-text-muted)", fontSize: 15 }}>Contact us for SVG files, custom sizes, or press enquiries.</p>
                        </div>
                        <a href="mailto:bluewavefx7@gmail.com" style={{
                            flexShrink: 0, background: "var(--bw-accent)", color: "#000",
                            fontWeight: 700, fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase",
                            padding: "14px 28px", borderRadius: 10, textDecoration: "none"
                        }}>
                            Contact Us
                        </a>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
