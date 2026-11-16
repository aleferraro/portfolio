"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import type { Dictionary } from "@/i18n/types";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Hero({ t, scrollDownLabel }: { t: Dictionary["hero"]; scrollDownLabel: string }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-accent font-mono text-sm mb-4">
          {t.eyebrow}
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Alessandro Ferraro
        </motion.h1>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-2xl md:text-4xl font-semibold text-muted mb-8 leading-tight">
          {t.headline}
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-lg text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
          {t.description}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
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
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {t.chips.map((item) => (
            <span key={item} className="px-4 py-2 rounded-full border border-card-border bg-card/80 text-sm text-muted">
              {item}
            </span>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-muted hover:text-accent transition-colors"
          aria-label={scrollDownLabel}
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ArrowDown size={24} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
