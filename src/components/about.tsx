"use client";

import { motion } from "framer-motion";
import Section from "./section";
import type { Dictionary } from "@/i18n/types";

export default function About({ t }: { t: Dictionary["about"] }) {
  return (
    <Section id="about" title={t.title}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl space-y-4 text-muted leading-relaxed">
        {t.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </motion.div>
    </Section>
  );
}
