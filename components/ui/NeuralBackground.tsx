"use client";
import { motion } from "framer-motion";

export function NeuralBackground() {
  return (
    <div className="absolute inset-0">
      {/* Soft gradient shapes */}
      <div className="absolute -top-20 right-[-10%] h-[40rem] w-[40rem] rounded-full opacity-40 blur-3xl" style={{ background: "radial-gradient(circle at 30% 30%, rgba(126,214,245,0.35), transparent 60%)" }} />
      <div className="absolute top-40 left-[-20%] h-[36rem] w-[36rem] rounded-full opacity-30 blur-3xl" style={{ background: "radial-gradient(circle at 70% 70%, rgba(194,167,255,0.35), transparent 60%)" }} />

      {/* Neural wave lines */}
      <svg className="absolute inset-x-0 -bottom-10 w-full" height="260" viewBox="0 0 1440 260" preserveAspectRatio="none">
        {[0, 1, 2].map((i) => (
          <motion.path
            key={i}
            d="M0,120 C180,160 320,60 540,90 C760,120 940,40 1200,80 C1280,92 1360,120 1440,110"
            stroke={i % 2 ? "url(#g1)" : "url(#g2)"}
            strokeWidth={i === 1 ? 1.2 : 0.8}
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{ duration: 2.4 + i * 0.4, ease: "easeInOut" }}
            style={{ filter: "drop-shadow(0 1px 6px rgba(126,214,245,0.2))" }}
          />
        ))}
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#7ed6f5" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#c2a7ff" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="g2" x1="1" x2="0">
            <stop offset="0%" stopColor="#c2a7ff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#7ed6f5" stopOpacity="0.35" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
