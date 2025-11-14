"use client";
import { motion } from "framer-motion";

const pubs = [
  {
    title: "Uncertainty-aware decoding of neural population activity",
    venue: "NeurIPS",
    year: 2024,
  },
  {
    title: "State-space models for real-time neural control",
    venue: "Nature Neuroscience",
    year: 2023,
  },
  {
    title: "Inferring latent dynamics from large-scale imaging",
    venue: "ICLR",
    year: 2022,
  },
];

export function PublicationsPreview() {
  return (
    <div className="divide-y divide-white/5 neural-card">
      {pubs.map((p, i) => (
        <motion.div
          key={p.title}
          className="p-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
        >
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-sm tracking-tight">{p.title}</h3>
            <span className="text-xs text-muted">{p.venue} ? {p.year}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
