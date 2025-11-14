"use client";
import { motion } from "framer-motion";

export function PageHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div>
      <motion.h1
        className="text-3xl md:text-4xl tracking-tight"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      {subtitle ? (
        <motion.p
          className="text-muted mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}
