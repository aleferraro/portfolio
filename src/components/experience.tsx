"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import Section from "./section";

const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "EDT S.r.l.",
    type: "Full-time",
    period: "Gen 2025 - Presente",
    location: "Torino - Ibrido",
    description: "Sviluppo full-stack delle testate digitali di EDT (Lonely Planet Italia, Il Giornale della Musica, Guide Marco Polo). Ricostruzione end-to-end di giornaledellamusica.it (Drupal → Laravel) e re-architettura di Lonely Planet Italia verso un'architettura headless con gateway GraphQL e front-end Nuxt SSR.",
    skills: ["Laravel", "GraphQL", "Node.js", "Nuxt", "Vue.js", "React", "Filament", "Tailwind CSS", "PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    role: "Full Stack Web Developer",
    company: "Primo Group S.p.A.",
    type: "Full-time",
    period: "Apr 2021 - Dic 2024",
    location: "Torino",
    description: "Sviluppo full-stack di PrimoUp, il CRM gestionale della rete di cliniche dentistiche: moduli core, ricerca Elasticsearch e integrazioni con il Sistema Tessera Sanitaria e i principali portali assicurativi sanitari.",
    skills: ["Laravel", "Vue.js", "Elasticsearch", "MySQL", "PHP", "JavaScript"],
  },
];

export default function Experience() {
  return (
    <Section id="experience" title="Esperienza">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-card-border" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative pl-12 md:pl-20">
              {/* Timeline dot */}
              <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full bg-accent border-2 border-background" />

              <div className="p-6 rounded-xl bg-card border border-card-border hover:border-accent/30 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <p className="text-accent flex items-center gap-2">
                      <Briefcase size={14} />
                      {exp.company} <span className="text-muted text-sm">&middot; {exp.type}</span>
                    </p>
                  </div>
                  <div className="text-right text-sm text-muted">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <p className="text-muted text-sm mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
