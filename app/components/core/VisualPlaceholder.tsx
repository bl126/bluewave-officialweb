"use client";

import React from "react";

interface VisualPlaceholderProps {
    label?: string;
    className?: string;
}

export default function VisualPlaceholder({ label = "System Diagram", className = "" }: VisualPlaceholderProps) {
    return (
        <div className={`glass-container ${className}`} style={{ minHeight: "300px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.01)" }}>
            <div className="placeholder-content" style={{ textAlign: "center" }}>
                <div className="placeholder-icon" style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(0, 246, 255, 0.1)", margin: "0 auto 16px", border: "1px solid rgba(0, 246, 255, 0.2)" }}></div>
                <span className="placeholder-label" style={{ fontSize: "14px", color: "var(--bw-text-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</span>
            </div>
        </div>
    );
}
