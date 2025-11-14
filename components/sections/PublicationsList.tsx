"use client";
import { motion } from "framer-motion";

const pubs = [
  {
    title: "Uncertainty-aware decoding of neural population activity",
    authors: "Surname, A.*, Surname, B.*, You, C.",
    venue: "NeurIPS",
    year: 2024,
  },
  {
    title: "State-space models for real-time neural control",
    authors: "You, C., Surname, D.",
    venue: "Nature Neuroscience",
    year: 2023,
  },
  {
    title: "Inferring latent dynamics from large-scale imaging",
    authors: "Surname, E., You, C.",
    venue: "ICLR",
    year: 2022,
  },
];

export function PublicationsList() {
  return (
    <div className="mt-8 divide-y divide-white/5 neural-card">
      {pubs.map((p, i) => (
        <motion.div
          key={p.title}
          className="p-6"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.03 }}
        >
          <h3 className="text-base tracking-tight">{p.title}</h3>
          <p className="text-sm text-muted mt-1">{p.authors}</p>
          <p className="text-xs text-muted mt-1">{p.venue} ? {p.year}</p>
        </motion.div>
      ))}
    </div>
  );
}
