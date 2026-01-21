"use client";

import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
    onClick?: (e: React.MouseEvent) => void;
    style?: React.CSSProperties;
    href?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    external?: boolean;
}

export default function Button({
    children,
    variant = "primary",
    className = "",
    onClick,
    style,
    href,
    type = "button",
    disabled = false,
    external = false
}: ButtonProps) {
    const variantClass = variant === "primary" ? "btn-primary" : "btn-secondary";

    const content = (
        <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "center" }}>
            {children}
        </div>
    );

    if (href) {
        return (
            <a
                href={href}
                className={`btn ${variantClass} ${className}`}
                style={{ ...style, opacity: disabled ? 0.5 : 1, pointerEvents: disabled ? "none" : "auto" }}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
            >
                {content}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`btn ${variantClass} ${className}`}
            style={{ ...style, opacity: disabled ? 0.5 : 1, cursor: disabled ? "not-allowed" : "pointer" }}
            disabled={disabled}
        >
            {content}
        </button>
    );
}
