"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Latent Neural State-Space Models",
    desc: "Inferring hidden dynamics from population activity in real time.",
    href: "/projects",
  },
  {
    title: "Closed-loop BCI Experiments",
    desc: "Adaptive stimulation and decoding with principled uncertainty.",
    href: "/projects",
  },
  {
    title: "Cortical Flow Fields",
    desc: "Vector field analysis of mesoscale imaging data.",
    href: "/projects",
  },
];

export function ProjectsPreview() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {projects.map((p, i) => (
        <motion.div
          key={p.title}
          className="neural-card p-5 group"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
        >
          <Link href={p.href} className="block">
            <h3 className="text-base tracking-tight group-hover:text-foreground transition-colors">
              {p.title}
            </h3>
            <p className="text-sm text-muted mt-1">{p.desc}</p>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
