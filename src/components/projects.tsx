"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Section from "./section";
import type { Dictionary } from "@/i18n/types";

export default function Projects({ t }: { t: Dictionary["projects"] }) {
  return (
    <Section id="projects" title={t.title}>
      <div className="max-w-3xl mb-10 text-muted leading-relaxed">
        <p>{t.intro}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {t.items.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group relative p-6 rounded-xl bg-card border border-card-border hover:border-accent/30 transition-all flex flex-col"
          >
            <div className="mb-4 overflow-hidden rounded-xl border border-card-border">
              <Image src={project.image} alt={`${t.labels.preview} ${project.title}`} width={1200} height={800} className="h-56 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
            </div>

            <div className="mb-4 rounded-xl border border-card-border bg-linear-to-br from-accent/20 via-accent/5 to-transparent p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">{t.labels.surface}</p>
              <p className="text-sm text-foreground">{project.surface}</p>
            </div>

            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-sm text-muted">{project.company}</p>
              </div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors" aria-label={`${t.labels.visit} ${project.title}`}>
                  <ExternalLink size={18} />
                </a>
              )}
            </div>

            <span className="text-xs text-accent font-mono">{project.status}</span>

            <p className="text-xs uppercase tracking-[0.2em] text-muted mt-3 mb-2">{t.labels.role}</p>
            <p className="text-sm text-foreground mb-4">{project.role}</p>

            <p className="text-muted text-sm leading-relaxed mb-4">{project.summary}</p>

            {project.facts && (
              <dl
                className="mb-4 grid gap-px overflow-hidden rounded-lg border border-accent/20 bg-accent/20"
                style={{ gridTemplateColumns: `repeat(${project.facts.length}, minmax(0, 1fr))` }}
              >
                {project.facts.map((fact) => (
                  <div key={fact.label} className="bg-card">
                    <div className="h-full bg-accent/5 p-3">
                      <dt className="text-[10px] uppercase tracking-[0.2em] text-accent">{fact.label}</dt>
                      <dd className="mt-1 text-xl font-semibold text-foreground">{fact.value}</dd>
                      {fact.unit && <dd className="text-xs text-muted">{fact.unit}</dd>}
                    </div>
                  </div>
                ))}
              </dl>
            )}

            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted mb-3">{t.labels.contribution}</p>
              <ul className="space-y-2 text-sm text-muted leading-relaxed">
                {project.contribution.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
