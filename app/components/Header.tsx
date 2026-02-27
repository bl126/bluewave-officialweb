"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Container from "./core/Container";
import Button from "./core/Button";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [docsOpen, setDocsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!docsOpen) return;
        const handleClickOutside = (e: MouseEvent) => {
            const wrapper = document.querySelector(".docs-dropdown-wrapper");
            if (wrapper && !wrapper.contains(e.target as Node)) {
                setDocsOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [docsOpen]);

    const navLinks = [
        { name: "Vision", href: "/#vision" },
        { name: "How It Works", href: "/#how-it-works" },
        { name: "BwaveScan", href: "/#bwavescan" },
        { name: "Marketplace", href: "/#marketplace" },
        { name: "Builders", href: "/#builders" },
        { name: "FAQ", href: "/#faq" },
    ];

    const docsLinks = [
        { name: "Bluewave Whitepaper", href: "https://drive.google.com/file/d/1BVdfgYF2ap5KS9PrgMtqT9ptlBx6404c/view?usp=drivesdk", external: true },
        { name: "BwaveScan Whitepaper", href: "http://bwavescan.xyz/whitepaper", external: true },
        { name: "API Documentation", href: "http://bwavescan.xyz/api-docs", external: true },
    ];

    return (
        <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
            <Container className="header-container" style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                maxWidth: "var(--container-header)"
            }}>
                <a href="/" className="logo">
                    <Image src="/bluewave-icon.png" alt="Bluewave" width={32} height={32} />
                    <span className="logo-text hide-mobile">Bluewave</span>
                </a>

                <nav className="nav-desktop">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-link"
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Docs Dropdown */}
                    <div
                        className="docs-dropdown-wrapper"
                        style={{ position: "relative" }}
                    >
                        <button
                            className="nav-link"
                            onClick={() => setDocsOpen(!docsOpen)}
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "6px",
                                fontSize: "inherit",
                                fontFamily: "inherit",
                                fontWeight: "inherit",
                                color: "inherit",
                                padding: 0,
                            }}
                        >
                            Docs
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "transform 0.2s", transform: docsOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </button>
                        {docsOpen && (
                            <div style={{
                                position: "absolute",
                                top: "100%",
                                left: "50%",
                                transform: "translateX(-50%)",
                                marginTop: "12px",
                                minWidth: "220px",
                                background: "rgba(11, 15, 20, 0.95)",
                                backdropFilter: "blur(20px)",
                                border: "1px solid var(--bw-glass-border)",
                                borderRadius: "14px",
                                padding: "8px",
                                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                                zIndex: 500,
                            }}>
                                {docsLinks.map((doc) => (
                                    <a
                                        key={doc.name}
                                        href={doc.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="docs-dropdown-link"
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                            padding: "12px 16px",
                                            fontSize: "14px",
                                            color: "var(--bw-text-secondary)",
                                            textDecoration: "none",
                                            borderRadius: "10px",
                                            transition: "all 0.2s ease",
                                        }}
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--bw-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                            <polyline points="14 2 14 8 20 8" />
                                        </svg>
                                        {doc.name}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </nav>

                <div className="header-actions" style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                    <div className="hide-mobile">
                        <a href="https://t.me/bwaveprotocol" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                            <Button variant="primary" style={{ padding: "12px 24px", fontSize: "14px" }}>
                                <Image src="/telegram-transparent.png" alt="Telegram" width={18} height={18} />
                                <span>Join Community</span>
                            </Button>
                        </a>
                    </div>

                    <button
                        className="hamburger"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        style={{
                            display: "none",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            flexDirection: "column",
                            gap: "6px"
                        }}
                    >
                        <span style={{ width: "24px", height: "1.5px", background: "#FFF" }}></span>
                        <span style={{ width: "24px", height: "1.5px", background: "#FFF" }}></span>
                    </button>
                </div>
            </Container>

            {/* Mobile Nav Overlay */}
            <style jsx>{`
                @media (max-width: 968px) {
                    .hamburger { display: flex !important; }
                }
                .docs-dropdown-link:hover {
                    background: rgba(0, 246, 255, 0.08) !important;
                    color: #FFFFFF !important;
                }
            `}</style>

            <div className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`} style={{
                position: "fixed",
                top: 0,
                right: 0,
                width: "100%",
                height: "100vh",
                background: "var(--bw-bg)",
                backgroundImage: "var(--bw-gradient-main)",
                zIndex: 300,
                display: mobileMenuOpen ? "flex" : "none",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "32px",
                padding: "40px"
            }}>
                <button
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ position: "absolute", top: "40px", right: "40px", background: "none", border: "none", color: "#FFF", fontSize: "32px", cursor: "pointer" }}
                >
                    ×
                </button>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="mobile-nav-link"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{ fontSize: "28px", color: "var(--bw-text-primary)", textDecoration: "none", fontWeight: "500" }}
                    >
                        {link.name}
                    </a>
                ))}
                {/* Mobile Docs Links */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.1)", width: "100%" }}>
                    <span style={{ fontSize: "13px", color: "var(--bw-accent)", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: "600" }}>Documentation</span>
                    {docsLinks.map((doc) => (
                        <a
                            key={doc.name}
                            href={doc.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileMenuOpen(false)}
                            style={{ fontSize: "20px", color: "var(--bw-text-secondary)", textDecoration: "none", fontWeight: "400" }}
                        >
                            {doc.name}
                        </a>
                    ))}
                </div>
                <a href="https://t.me/bwaveprotocol" target="_blank" rel="noopener noreferrer" style={{ width: "100%", textDecoration: "none" }}>
                    <Button variant="primary" style={{ marginTop: "20px", width: "100%" }}>
                        <span>Join Community</span>
                    </Button>
                </a>
            </div>
        </header>
    );
}
