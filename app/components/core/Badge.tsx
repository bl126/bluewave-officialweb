"use client";

import React from "react";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "primary" | "outline";
    className?: string;
}

export default function Badge({ children, variant = "outline", className = "" }: BadgeProps) {
    const variantClass = variant === "primary" ? "badge-primary" : "badge-outline";

    return (
        <span className={`badge ${variantClass} ${className}`}>
            {children}
        </span>
    );
}
