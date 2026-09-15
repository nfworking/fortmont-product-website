import React from "react";
import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { PageTransition } from "@/components/landing/page-transition";
import "./globals.css";

const instrumentSans = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument" });
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-instrument-serif" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  metadataBase: new URL("https://meshscale.cloud"),
  title: "MeshScale — Deploy applications, not infrastructure",
  description: "MeshScale builds applications from GitHub, runs them on regional cloud infrastructure, and gives every deployment a clear path to production.",
  generator: "Next.js",
  alternates: { canonical: "https://meshscale.cloud" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}><PageTransition>{children}</PageTransition><Analytics /></body></html>;
}
