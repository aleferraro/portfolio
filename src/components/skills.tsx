"use client";

import { motion } from "framer-motion";
import Section from "./section";
import type { Dictionary } from "@/i18n/types";

export default function Skills({ t }: { t: Dictionary["skills"] }) {
  return (
    <Section id="skills" title={t.title}>
      <div className="grid md:grid-cols-2 gap-8">
        {t.groups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-xl bg-card border border-card-border"
          >
            <h3 className="text-lg font-semibold mb-4 text-accent">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="text-sm px-4 py-2 rounded-lg bg-background border border-card-border hover:border-accent/30 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
