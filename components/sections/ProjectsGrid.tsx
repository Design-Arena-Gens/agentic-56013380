"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Latent Neural State-Space Models",
    desc: "Inferring hidden dynamics from population activity in real time.",
  },
  {
    title: "Closed-loop BCI Experiments",
    desc: "Adaptive stimulation and decoding with principled uncertainty.",
  },
  {
    title: "Cortical Flow Fields",
    desc: "Vector field analysis of mesoscale imaging data.",
  },
  {
    title: "Neural Manifolds",
    desc: "Topology-aware embeddings of cortical activity.",
  },
  {
    title: "Biophysical RL",
    desc: "Learning controllers constrained by membrane dynamics.",
  },
  {
    title: "Anatomy ? Function",
    desc: "Structure-informed priors for neural inference.",
  },
];

export function ProjectsGrid({ full = false }: { full?: boolean }) {
  const items = full ? projects : projects.slice(0, 6);
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
      {items.map((p, i) => (
        <motion.div
          key={p.title}
          className="neural-card p-5 group"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: i * 0.04 }}
        >
          <h3 className="text-base tracking-tight group-hover:text-foreground transition-colors">
            {p.title}
          </h3>
          <p className="text-sm text-muted mt-1">{p.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
