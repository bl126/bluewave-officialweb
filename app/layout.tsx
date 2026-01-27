import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bluewave - The Human Presence Layer on TON",
  description: "Bluewave verify human presence, own consistency, and build verifiable on-chain reputation. The future of decentralized human signals on the TON ecosystem.",
  keywords: ["Bluewave", "TON", "Web3", "Human Presence", "On-chain Reputation", "Digital Identity", "Blockchain"],
  openGraph: {
    title: "Bluewave - The Human Presence Layer on TON",
    description: "Verify human presence and own your consistency in the Web3 ecosystem.",
    type: "website",
    url: "https://bluewave.network", // Placeholder or actual if known
  },
  twitter: {
    card: "summary_large_image",
    title: "Bluewave — The Human Presence Layer on TON",
    description: "The Human Presence Layer on TON.",
  },
  icons: {
    icon: "/bluewave-icon.png",
    apple: "/bluewave-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
