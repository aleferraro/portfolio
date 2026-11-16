"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Section from "./section";
import type { Dictionary } from "@/i18n/types";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Contact({ t }: { t: Dictionary["contact"] }) {
  return (
    <Section id="contact" title={t.title}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center">
        <p className="text-muted text-lg mb-4 leading-relaxed">{t.lead}</p>

        <p className="text-muted mb-8 leading-relaxed">{t.details}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="https://www.linkedin.com/in/alessandro-ferraro/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-colors w-full sm:w-auto"
          >
            <LinkedinIcon size={18} />
            {t.linkedin}
          </a>
          <a
            href="https://github.com/aleferraro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-card-border text-muted hover:border-accent hover:text-foreground transition-colors w-full sm:w-auto"
          >
            <GithubIcon size={18} />
            {t.github}
          </a>
        </div>

        <p className="flex items-center justify-center gap-2 text-sm text-muted">
          <MapPin size={14} />
          {t.location}
        </p>
      </motion.div>
    </Section>
  );
}
