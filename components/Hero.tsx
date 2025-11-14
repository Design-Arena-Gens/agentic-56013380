"use client";
import { motion } from "framer-motion";
import { NeuralBackground } from "@/components/ui/NeuralBackground";
import { Magnetic } from "@/components/ui/Magnetic";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <NeuralBackground />
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 md:px-10 pt-20 pb-16">
        <motion.h1
          className="text-4xl md:text-6xl font-medium tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        >
          Computational Neuroscience
          <br />
          with Calm Intelligence
        </motion.h1>
        <motion.p
          className="mt-5 max-w-2xl text-muted"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Modeling neural dynamics, building principled systems, designing experiments that listen to the brain.
        </motion.p>
        <div className="mt-8 flex items-center gap-3">
          <Magnetic>
            <Link
              href="/projects"
              className="px-5 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-foreground transition-colors"
            >
              Explore Projects
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              href="/publications"
              className="px-5 py-2 rounded-md border border-white/10 hover:border-white/20 text-foreground/90 hover:text-foreground transition-colors"
            >
              Publications
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
