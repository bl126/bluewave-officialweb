"use client";

import React from "react";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
}

export default function Container({ children, className = "", id, style }: ContainerProps) {
    return (
        <div id={id} className={`container ${className}`} style={style}>
            {children}
        </div>
    );
}
