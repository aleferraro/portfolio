"use client";

import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-accent font-mono text-lg">#</span>
          {title}
          <span className="flex-1 h-px bg-card-border" />
        </motion.h2>
        {children}
      </div>
    </section>
  );
}
