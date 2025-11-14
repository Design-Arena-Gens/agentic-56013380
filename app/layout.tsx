import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode, useEffect } from "react";
import { CursorAura } from "@/components/ui/CursorAura";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cognitive Waves ? Portfolio",
  description:
    "Minimal, atmospheric portfolio for a computational neuroscience researcher.",
  metadataBase: new URL("https://agentic-56013380.vercel.app"),
  openGraph: {
    title: "Cognitive Waves ? Portfolio",
    description:
      "Minimal, atmospheric portfolio for a computational neuroscience researcher.",
    url: "https://agentic-56013380.vercel.app",
    siteName: "Cognitive Waves",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cognitive Waves ? Portfolio",
    description:
      "Minimal, atmospheric portfolio for a computational neuroscience researcher.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased relative`}>        
        <CursorAura />
        <div className="relative z-10 min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
