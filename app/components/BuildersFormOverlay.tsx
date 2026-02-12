"use client";

import React, { useState } from "react";
import Button from "./core/Button";

interface BuildersFormOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BuildersFormOverlay({ isOpen, onClose }: BuildersFormOverlayProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        telegramHandle: "",
        xHandle: "",
        role: "",
        otherRole: "",
        experience: "",
        portfolio: "",
        activityLevel: "",
        additionalInfo: ""
    });
    const [error, setError] = useState<string | null>(null);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch("/api/send-telegram", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to send application. Please try again.");
            }

            setIsSuccess(true);
        } catch (err: any) {
            console.error("Submission error:", err);
            setError(err.message || "Something went wrong. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(4, 7, 10, 0.9)",
                backdropFilter: "blur(20px)",
                zIndex: 1000,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px"
            }}>
                <div style={{
                    width: "100%",
                    maxWidth: "540px",
                    background: "var(--bw-glass)",
                    border: "1px solid var(--bw-glass-border)",
                    borderRadius: "24px",
                    padding: "48px",
                    textAlign: "center",
                    boxShadow: "0 40px 100px rgba(0,0,0,0.6)"
                }}>
                    <div style={{
                        width: "64px",
                        height: "64px",
                        background: "var(--bw-accent)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 32px",
                        boxShadow: "0 0 30px rgba(0, 246, 255, 0.3)"
                    }}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                    <h2 style={{ fontSize: "28px", color: "#FFF", marginBottom: "20px" }}>Application Received</h2>
                    <p style={{ color: "var(--bw-text-secondary)", lineHeight: 1.6, fontSize: "17px", marginBottom: "40px" }}>
                        Thank you! We've received your application. We'll review it within the next few days and DM you on Telegram if it's a fit. Keep building — consistency wins 🌊
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <a href="https://t.me/bwaveprotocol" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                            <Button variant="primary" style={{ width: "100%", justifyContent: "center" }}>
                                <img src="/telegram-transparent.png" alt="Telegram" width="24" height="24" />
                                <span>Join Bluewave Tg Community</span>
                            </Button>
                        </a>
                        <Button variant="secondary" onClick={onClose} style={{ width: "100%", justifyContent: "center" }}>
                            <span>Back to Site</span>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(4, 7, 10, 0.85)",
            backdropFilter: "blur(15px)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px"
        }}>
            <div style={{
                width: "100%",
                maxWidth: "680px",
                maxHeight: "90vh",
                background: "var(--bw-glass)",
                border: "1px solid var(--bw-glass-border)",
                borderRadius: "24px",
                padding: "40px",
                position: "relative",
                overflowY: "auto",
                boxShadow: "0 40px 100px rgba(0,0,0,0.6)"
            }}>
                <button
                    onClick={onClose}
                    style={{ position: "absolute", top: "24px", right: "24px", background: "none", border: "none", color: "#FFF", fontSize: "24px", cursor: "pointer", opacity: 0.6 }}
                >
                    ×
                </button>

                <div style={{ marginBottom: "32px" }}>
                    <h2 style={{ fontSize: "28px", color: "var(--bw-accent)", marginBottom: "16px" }}>Join the Bluewave Builders Team</h2>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", lineHeight: 1.6 }}>
                        Shape the future of PresenceFi on TON together. Active contributors earn $BWAVE Team allocation. Spots are limited — priority for early & consistent builders.
                    </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: "grid", gap: "24px" }}>
                    <div className="form-group">
                        <label style={labelStyle}>Full Name *</label>
                        <input
                            required
                            type="text"
                            style={inputStyle}
                            placeholder="Your simple identification"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="form-row-mobile">
                        <div className="form-group">
                            <label style={labelStyle}>Telegram Handle *</label>
                            <input
                                required
                                type="text"
                                style={inputStyle}
                                placeholder="@username"
                                value={formData.telegramHandle}
                                onChange={(e) => setFormData({ ...formData, telegramHandle: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label style={labelStyle}>X (Twitter) Handle *</label>
                            <input
                                required
                                type="text"
                                style={inputStyle}
                                placeholder="@username"
                                value={formData.xHandle}
                                onChange={(e) => setFormData({ ...formData, xHandle: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label style={labelStyle}>Which role are you applying for? *</label>
                        <select
                            required
                            style={inputStyle}
                            value={formData.role}
                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        >
                            <option value="" disabled>Select a role</option>
                            <option value="X Ambassador">X Ambassador – 5000+ followers, active posting</option>
                            <option value="Web3 Graphics Designer">Web3 Graphics Designer</option>
                            <option value="Content Writer / Educator">Content Writer / Educator</option>
                            <option value="Frontend Developer">Frontend Developer</option>
                            <option value="Other">Other (please specify)</option>
                        </select>
                        {formData.role === "Other" && (
                            <input
                                type="text"
                                style={{ ...inputStyle, marginTop: "12px" }}
                                placeholder="Specify your role"
                                value={formData.otherRole}
                                onChange={(e) => setFormData({ ...formData, otherRole: e.target.value })}
                            />
                        )}
                    </div>

                    <div className="form-group">
                        <label style={labelStyle}>Tell us about yourself & your experience *</label>
                        <textarea
                            required
                            style={{ ...inputStyle, minHeight: "100px", resize: "vertical" }}
                            placeholder="Why do you want to join? Any relevant skills?"
                            value={formData.experience}
                            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label style={labelStyle}>Portfolio / Examples (Optional)</label>
                        <textarea
                            style={{ ...inputStyle, minHeight: "80px", resize: "vertical" }}
                            placeholder="Link to X profile, Behance, past designs, etc."
                            value={formData.portfolio}
                            onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label style={labelStyle}>How active can you be? *</label>
                        <div style={{ display: "grid", gap: "12px" }}>
                            {["Daily / Very active", "A few times per week", "Occasionally"].map((opt) => (
                                <label key={opt} style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--bw-text-secondary)", cursor: "pointer" }}>
                                    <input
                                        type="radio"
                                        name="activity"
                                        required
                                        value={opt}
                                        checked={formData.activityLevel === opt}
                                        onChange={(e) => setFormData({ ...formData, activityLevel: e.target.value })}
                                        style={{ accentColor: "var(--bw-accent)" }}
                                    />
                                    <span>{opt}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="form-group">
                        <label style={labelStyle}>Anything else you'd like us to know?</label>
                        <textarea
                            style={{ ...inputStyle, minHeight: "80px", resize: "vertical" }}
                            placeholder="Extra motivation or ideas"
                            value={formData.additionalInfo}
                            onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                        ></textarea>
                    </div>

                    {error && (
                        <div style={{
                            padding: "16px",
                            background: "rgba(255, 59, 48, 0.1)",
                            border: "1px solid rgba(255, 59, 48, 0.2)",
                            borderRadius: "12px",
                            color: "#FF3B30",
                            fontSize: "14px",
                            textAlign: "center"
                        }}>
                            {error}
                        </div>
                    )}

                    <Button variant="primary" type="submit" style={{ width: "100%", justifyContent: "center", marginTop: "12px" }} disabled={isSubmitting}>
                        <span>{isSubmitting ? "Submitting..." : error ? "TRY AGAIN" : "SUBMIT APPLICATION"}</span>
                    </Button>
                </form>
            </div>

            <style jsx>{`
                input::placeholder, textarea::placeholder {
                    color: rgba(255,255,255,0.2);
                }
                @media (max-width: 600px) {
                    .form-row-mobile {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </div>
    );
}

const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "14px",
    fontWeight: "600",
    color: "#FFF",
    marginBottom: "10px",
    textTransform: "uppercase",
    letterSpacing: "0.05em"
};

const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 18px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px",
    color: "#FFF",
    fontSize: "16px",
    outline: "none",
    transition: "all 0.3s ease",
};
