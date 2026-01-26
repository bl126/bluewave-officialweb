"use client";

import React, { useState } from "react";
import Container from "./core/Container";
import Badge from "./core/Badge";
import Button from "./core/Button";
import Image from "next/image";

interface FAQItemProps {
    question: string;
    answer: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
    return (
        <div
            className="faq-item"
            style={{
                borderBottom: "1px solid var(--bw-glass-border)",
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)"
            }}
        >
            <button
                onClick={onClick}
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "32px 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    outline: "none"
                }}
            >
                <span style={{
                    fontSize: "clamp(18px, 2vw, 22px)",
                    color: isOpen ? "var(--bw-accent)" : "#FFF",
                    fontWeight: "500",
                    transition: "color 0.3s ease"
                }}>
                    {question}
                </span>
                <div style={{
                    width: "24px",
                    height: "24px",
                    position: "relative",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)"
                }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke={isOpen ? "var(--bw-accent)" : "rgba(255,255,255,0.4)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </button>
            <div style={{
                maxHeight: isOpen ? "500px" : "0",
                opacity: isOpen ? 1 : 0,
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                paddingBottom: isOpen ? "32px" : "0"
            }}>
                <div style={{
                    fontSize: "17px",
                    color: "var(--bw-text-secondary)",
                    lineHeight: 1.7,
                    maxWidth: "800px"
                }}>
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "How do I join Bluewave?",
            answer: "Click the Launch button to launch the mini app. Join with your Telegram ID only (no KYC, no personal data required). Start completing daily missions and building streaks and networks to earn your presence score and $BWAVE points. It’s free, and takes seconds to begin."
        },
        {
            question: "Is Bluewave really safe and private?",
            answer: "Yes, privacy is at the core. We only use your Telegram ID to link your presence ID, we never collect any sensitive info. AI PvP verification ensures a 100% human ecosystem (no bots). Future on-chain features will use zero-knowledge proofs (ZKPs) so you can prove your score without revealing anything. Your presence stays yours."
        },
        {
            question: "How do I (or my brand) get value from Bluewave?",
            answer: (
                <>
                    <p style={{ marginBottom: "12px" }}><strong>Users:</strong> Earn $BWAVE points for consistent participation (missions, streaks, networks). Later convert to tokens & also monetize your presence/skills in the marketplace.</p>
                    <p style={{ marginBottom: "12px" }}><strong>Brands & Products:</strong> Sponsor targeted missions to get verifiable real human presence, better ROI than traditional attention metrics, bot-free, 100% human zone.</p>
                    <p>Marketplace launches in Phase 2.  Early builders & partners get priority.</p>
                </>
            )
        },
        {
            question: "When will the marketplace and $BWAVE token launch?",
            answer: "Both are coming in Phase 2, after we hit key milestones: on-chain presence ledger live and 500,000+ active users. This ensures real adoption before launch. The token ($BWAVE) will be distributed fairly (50% to community rewards) and utility-first (rewards, staking, marketplace payments). We’ll share updates in the app and on X, read Whitepaper for more details."
        },
        {
            question: "How can I join the Builders Team or collaborate?",
            answer: "We’re actively growing our community of X Ambassadors, web3 designers, moderators, and early contributors. Active builders earn meaningful Team allocation. If you have skills (5000+ X followers, web3 designer, content creators, frontend Developers), apply to join Builders team with your handle/portfolio. Early collaborators get priority."
        }
    ];

    return (
        <section id="faq" className="section-padding" style={{ position: "relative" }}>
            <Container>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1.5fr",
                    gap: "80px",
                    alignItems: "start"
                }} className="faq-layout">

                    <div className="faq-header" style={{ position: "sticky", top: "140px" }}>
                        <Badge variant="primary">FAQ</Badge>
                        <h2 style={{ marginTop: "32px", marginBottom: "32px" }}>Frequently Asked <br />Questions.</h2>
                        <p style={{
                            fontSize: "18px",
                            color: "var(--bw-text-secondary)",
                            marginBottom: "48px",
                            lineHeight: 1.6,
                            maxWidth: "400px"
                        }}>
                            Understanding the human presence layer, $BWAVE tokenomics, and ecosystem mechanics.
                        </p>

                        {/* Desktop Support Card */}
                        <div className="hide-mobile" style={{
                            padding: "32px",
                            background: "var(--bw-glass)",
                            border: "1px solid var(--bw-glass-border)",
                            borderRadius: "20px",
                            backdropFilter: "blur(12px)"
                        }}>
                            <div style={{ fontSize: "16px", color: "#FFF", fontWeight: "600", marginBottom: "12px" }}>More Questions?</div>
                            <p style={{ fontSize: "14px", color: "var(--bw-text-secondary)", marginBottom: "24px" }}>
                                Connect with our technical moderators on Telegram for real-time support.
                            </p>
                            <Button variant="primary" href="https://t.me/Bluewavef" external style={{ width: "100%", justifyContent: "center" }}>
                                <Image src="/telegram-transparent.png" alt="Telegram" width={18} height={18} />
                                <span>Contact Support</span>
                            </Button>
                        </div>
                    </div>

                    <div className="faq-list-container">
                        <div className="faq-list">
                            {faqs.map((faq, index) => (
                                <FAQItem
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={openIndex === index}
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                />
                            ))}
                        </div>

                        {/* Mobile Support Card */}
                        <div className="show-mobile-only" style={{
                            padding: "32px",
                            background: "var(--bw-glass)",
                            border: "1px solid var(--bw-glass-border)",
                            borderRadius: "20px",
                            backdropFilter: "blur(12px)",
                            marginTop: "60px"
                        }}>
                            <div style={{ fontSize: "16px", color: "#FFF", fontWeight: "600", marginBottom: "12px" }}>More Questions?</div>
                            <p style={{ fontSize: "14px", color: "var(--bw-text-secondary)", marginBottom: "24px" }}>
                                Connect with our technical moderators on Telegram for real-time support.
                            </p>
                            <Button variant="primary" href="https://t.me/Bluewavef" external style={{ width: "100%", justifyContent: "center" }}>
                                <Image src="/telegram-transparent.png" alt="Telegram" width={18} height={18} />
                                <span>Contact Support</span>
                            </Button>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
