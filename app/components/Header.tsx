"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Container from "./core/Container";
import Button from "./core/Button";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Vision", href: "#vision" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Marketplace", href: "#marketplace" },
        { name: "Builders", href: "#builders" },
        { name: "FAQ", href: "#faq" },
        { name: "Whitepaper", href: "https://drive.google.com/file/d/1BVdfgYF2ap5KS9PrgMtqT9ptlBx6404c/view?usp=drivesdk" },
    ];

    return (
        <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
            <Container className="header-container" style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                maxWidth: "var(--container-header)"
            }}>
                <a href="#" className="logo">
                    <Image src="/bluewave-icon.png" alt="Bluewave" width={32} height={32} />
                    <span className="logo-text hide-mobile">Bluewave</span>
                </a>

                <nav className="nav-desktop">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-link"
                            target={link.name === "Whitepaper" ? "_blank" : undefined}
                            rel={link.name === "Whitepaper" ? "noopener noreferrer" : undefined}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="header-actions" style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                    <div className="hide-mobile">
                        <a href="https://t.me/Bluewave_Ecosystem_bot?start=ref_5023869471" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                            <Button variant="primary" style={{ padding: "12px 24px", fontSize: "14px" }}>
                                <Image src="/telegram-transparent.png" alt="Telegram" width={18} height={18} />
                                <span>Launch Mini App</span>
                            </Button>
                        </a>
                    </div>

                    <button
                        className="hamburger"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        style={{
                            display: "none", // Controlled via global media queries but including inline fallback
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
                        target={link.name === "Whitepaper" ? "_blank" : undefined}
                        rel={link.name === "Whitepaper" ? "noopener noreferrer" : undefined}
                    >
                        {link.name}
                    </a>
                ))}
                <a href="https://t.me/Bluewave_Ecosystem_bot?start=ref_5023869471" target="_blank" rel="noopener noreferrer" style={{ width: "100%", textDecoration: "none" }}>
                    <Button variant="primary" style={{ marginTop: "20px", width: "100%" }}>
                        <span>Launch Mini App</span>
                    </Button>
                </a>
            </div>
        </header>
    );
}
