"use client";

import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import HowItWorks from "./components/HowItWorks";
import Marketplace from "./components/Marketplace";
import Builders from "./components/Builders";
import Stats from "./components/Stats";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import LegalOverlay from "./components/LegalOverlay";
import BuildersFormOverlay from "./components/BuildersFormOverlay";

export default function Home() {
  const [isBuildersFormOpen, setBuildersFormOpen] = useState(false);
  const [legalOverlay, setLegalOverlay] = useState<{ isOpen: boolean; type: "terms" | "privacy" }>({
    isOpen: false,
    type: "terms"
  });

  return (
    <main className="bw-root" style={{ minHeight: "100vh" }}>
      <div className="bg-atmosphere">
        <div className="ambient-blob blob-hero-top"></div>
        <div className="ambient-blob blob-mid-right"></div>
        <div className="ambient-blob blob-bottom-left"></div>
      </div>

      <Header />

      <Hero />

      <div className="divider-glow"></div>
      <Vision />

      <div className="divider-glow"></div>
      <HowItWorks />

      <div className="divider-glow"></div>
      <Marketplace />

      <div className="divider-glow"></div>
      <Builders onApply={() => setBuildersFormOpen(true)} />

      <div className="divider-glow"></div>
      <Stats />

      <div className="divider-glow"></div>
      <FAQ />

      <Footer onOpenLegal={(type) => setLegalOverlay({ isOpen: true, type })} />

      {/* Legal Content Overlays */}
      <LegalOverlay
        isOpen={legalOverlay.isOpen}
        type={legalOverlay.type}
        onClose={() => setLegalOverlay({ ...legalOverlay, isOpen: false })}
      />

      <BuildersFormOverlay
        isOpen={isBuildersFormOpen}
        onClose={() => setBuildersFormOpen(false)}
      />

    </main>
  );
}
