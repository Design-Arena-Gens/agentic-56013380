"use client";
import { motion } from "framer-motion";

export function MotionText({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="text-foreground/90"
    >
      {children}
    </motion.p>
  );
}
