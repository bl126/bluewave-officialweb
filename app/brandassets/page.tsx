"use client";

import Image from "next/image";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const assets = [
    {
        category: "App Icon",
        items: [
            {
                id: "icon-neon",
                name: "Bluewave Icon (Neon Glow)",
                description: "Primary icon — ideal for app stores and dark presentations",
                file: "/brand/icon-neon-dark.png",
                bg: "#0A0E1A",
                light: false,
            },
            {
                id: "icon-cyan",
                name: "Bluewave Icon (Cyan)",
                description: "Flat cyan icon for use on white backgrounds",
                file: "/brand/icon-cyan-light.png",
                bg: "#FFFFFF",
                light: true,
            },
            {
                id: "icon-gray",
                name: "Bluewave Icon (Monochrome)",
                description: "Gray icon variant — for print and monochrome use",
                file: "/brand/icon-gray-light.png",
                bg: "#F9FAFB",
                light: true,
            },
        ]
    },
    {
        category: "Horizontal Logo",
        items: [
            {
                id: "logo-cyan-dark",
                name: "Bluewave Logo (Cyan — Dark BG)",
                description: "Primary horizontal logo for dark backgrounds",
                file: "/brand/logo-cyan-dark.png",
                bg: "#000000",
                light: false,
            },
            {
                id: "logo-white-dark",
                name: "Bluewave Logo (White — Dark BG)",
                description: "White horizontal logo for dark or colored backgrounds",
                file: "/brand/logo-white-dark.png",
                bg: "#0A0A0F",
                light: false,
            },
            {
                id: "logo-gray-light",
                name: "Bluewave Logo (Monochrome — Light BG)",
                description: "Gray logo for light, neutral, or print backgrounds",
                file: "/brand/logo-gray-light.png",
                bg: "#FFFFFF",
                light: true,
            },
        ]
    }
];

const BRAND_COLORS = [
    { name: "Bluewave Cyan", hex: "#00F6FF", usage: "Primary accent, glows, CTAs" },
    { name: "Deep Navy", hex: "#0A0E1A", usage: "Primary background, dark surfaces" },
    { name: "Platform Black", hex: "#000000", usage: "Ultimate dark base layer" },
    { name: "Signal White", hex: "#FFFFFF", usage: "Primary text on dark backgrounds" },
];

function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);
    return (
        <button
            onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
            style={{
                display: "flex", alignItems: "center", gap: "6px",
                background: "none", border: "1px solid rgba(255,255,255,0.1)",
                color: copied ? "#00F6FF" : "rgba(255,255,255,0.5)",
                padding: "4px 10px", borderRadius: "6px",
                fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", cursor: "pointer", transition: "all 0.3s ease"
            }}
        >
            {copied ? "✓ Copied" : `Copy ${text}`}
        </button>
    );
}

export default function BrandAssetsPage() {
    return (
        <div className="bw-root">
            <Header />
            <main style={{ minHeight: "100vh", background: "var(--bw-bg, #0A0E1A)", color: "#fff", paddingTop: "120px", paddingBottom: "100px" }}>
                <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>

                    {/* Header */}
                    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "48px", marginBottom: "72px" }}>
                        <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#00F6FF", marginBottom: "16px" }}>Brand Resources</p>
                        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: "20px" }}>Bluewave Brand Assets</h1>
                        <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.55)", maxWidth: "600px", lineHeight: 1.8, marginBottom: "32px" }}>
                            Official Bluewave logos and brand materials for press, partners, and builders. Please follow our usage guidelines when featuring Bluewave in your work.
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                            {[
                                { label: "✅ Approved for press use", color: "#22c55e", bg: "rgba(34,197,94,0.1)" },
                                { label: "❌ Do not alter or recolor logos", color: "#ef4444", bg: "rgba(239,68,68,0.1)" },
                                { label: "⚠️ Maintain clear space around logo", color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
                            ].map(b => (
                                <div key={b.label} style={{ background: b.bg, border: `1px solid ${b.color}40`, borderRadius: "999px", padding: "6px 14px" }}>
                                    <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: b.color }}>{b.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Asset Sections */}
                    {assets.map((section) => (
                        <section key={section.category} style={{ marginBottom: "72px" }}>
                            <h2 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "8px" }}>{section.category}</h2>
                            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "32px" }}>
                                Click the download button to save each asset
                            </p>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
                                {section.items.map((asset) => (
                                    <div key={asset.id} style={{
                                        borderRadius: "16px", overflow: "hidden",
                                        border: "1px solid rgba(255,255,255,0.07)",
                                        background: "rgba(255,255,255,0.03)",
                                        transition: "transform 0.3s ease, box-shadow 0.3s ease"
                                    }}
                                        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 40px rgba(0,246,255,0.08)"; }}
                                        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
                                    >
                                        {/* Preview */}
                                        <div style={{ background: asset.bg, display: "flex", alignItems: "center", justifyContent: "center", height: "180px", position: "relative" }}>
                                            <div style={{ position: "relative", width: "80%", height: "120px" }}>
                                                <Image src={asset.file} alt={asset.name} fill style={{ objectFit: "contain" }} />
                                            </div>
                                        </div>
                                        {/* Info */}
                                        <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "16px" }}>
                                            <div>
                                                <p style={{ fontSize: "14px", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>{asset.name}</p>
                                                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>{asset.description}</p>
                                            </div>
                                            <a
                                                href={asset.file}
                                                download={asset.name.replace(/ /g, "_") + ".png"}
                                                style={{
                                                    display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                                                    background: "rgba(0,246,255,0.08)", border: "1px solid rgba(0,246,255,0.25)",
                                                    color: "#00F6FF", fontWeight: 700, fontSize: "11px",
                                                    letterSpacing: "0.12em", textTransform: "uppercase",
                                                    padding: "10px", borderRadius: "10px", textDecoration: "none",
                                                    transition: "all 0.3s ease"
                                                }}
                                                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,246,255,0.15)"; }}
                                                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,246,255,0.08)"; }}
                                            >
                                                ↓ Download PNG
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}

                    {/* Brand Colors */}
                    <section style={{ marginBottom: "72px" }}>
                        <h2 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "8px" }}>Brand Colors</h2>
                        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "32px" }}>
                            Official palette — click to copy hex code
                        </p>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px" }}>
                            {BRAND_COLORS.map(color => (
                                <div key={color.hex} style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)" }}>
                                    <div style={{ height: "80px", background: color.hex }} />
                                    <div style={{ padding: "16px", background: "rgba(255,255,255,0.02)", display: "flex", flexDirection: "column", gap: "8px" }}>
                                        <p style={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>{color.name}</p>
                                        <CopyButton text={color.hex} />
                                        <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)" }}>{color.usage}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Usage Guidelines */}
                    <section style={{ marginBottom: "72px" }}>
                        <h2 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "32px" }}>Usage Guidelines</h2>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                            {[
                                { title: "✅ Do", color: "#22c55e", items: ["Use official logo files provided on this page", "Maintain clear space around the logo equal to the height of the 'B' wordmark", "Use dark logos on bright backgrounds, light logos on dark backgrounds", "Link to bluewaveprotocol.xyz when using our brand assets"] },
                                { title: "❌ Don't", color: "#ef4444", items: ["Alter, recolor, stretch, or distort the logo", "Use the logo to imply partnership without written permission", "Place the logo on busy or low-contrast backgrounds", "Recreate or 'redesign' any Bluewave brand mark"] },
                            ].map(block => (
                                <div key={block.title} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "16px", padding: "28px" }}>
                                    <h3 style={{ fontSize: "14px", fontWeight: 700, color: block.color, marginBottom: "20px" }}>{block.title}</h3>
                                    <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                        {block.items.map(item => (
                                            <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
                                                <span style={{ marginTop: "6px", width: "6px", height: "6px", background: "#00F6FF", borderRadius: "50%", flexShrink: 0 }} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Contact CTA */}
                    <div style={{ background: "rgba(0,246,255,0.04)", border: "1px solid rgba(0,246,255,0.15)", borderRadius: "20px", padding: "40px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                        <div>
                            <h2 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "8px" }}>Need a different format?</h2>
                            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px" }}>Contact us for SVG files, custom sizes, or press inquiries.</p>
                        </div>
                        <a href="mailto:bluewavefx7@gmail.com" style={{
                            flexShrink: 0,
                            background: "#00F6FF", color: "#000", fontWeight: 700,
                            fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase",
                            padding: "14px 28px", borderRadius: "10px", textDecoration: "none",
                            transition: "opacity 0.3s"
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
