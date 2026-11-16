"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Section from "./section";

const projectsIntro =
  "Una selezione di prodotti in produzione e progetti personali. Ho privilegiato casi che mostrano il mio contributo tecnico più che una semplice vetrina di stack.";

const projects = [
  {
    title: "Lonely Planet Italia",
    role: "Senior Full Stack Developer",
    image: "/projects/lonely-planet-cover.jpg",
    summary: "Piattaforma editoriale dedicata al mondo dei viaggi con contenuti, approfondimenti e shop collegato al brand Lonely Planet Italia.",
    tech: ["Laravel", "GraphQL", "Nuxt", "Vue.js", "TypeScript", "PostgreSQL", "Redis"],
    surface: "Editoria di viaggio + shop",
    link: "https://www.lonelyplanetitalia.it",
    status: "Gen 2025 - Presente · In evoluzione",
    company: "EDT Srl",
    impact: "Portale travel con oltre 300.000 visualizzazioni/mese.",
    contribution: [
      "Re-architettura da monolite Laravel 5 a 3 servizi disaccoppiati.",
      "Backend headless in Laravel 13 (domain-driven) + gateway GraphQL (Bun/Apollo) con cache Redis.",
      "Front-end in Nuxt 4 con server-side rendering.",
    ],
  },
  {
    title: "Il Giornale della Musica",
    role: "Senior Full Stack Developer",
    image: "/projects/giornale-musica-cover.jpg",
    summary: "Piattaforma editoriale per notizie, approfondimenti e appuntamenti del mondo musicale, con back office strutturato per la redazione.",
    tech: ["Laravel", "Filament", "Vue.js", "React", "TypeScript", "MySQL", "PHP"],
    surface: "Piattaforma per il lavoro redazionale",
    link: "https://www.giornaledellamusica.it",
    status: "Gen 2025 - Presente",
    company: "EDT Srl",
    impact: "Migrazione di oltre 13.000 articoli (Drupal → Laravel), ~60.000 visualizzazioni/mese.",
    contribution: [
      "Ricostruzione end-to-end del sito con migrazione da Drupal a Laravel.",
      "Area amministrativa in Filament per contenuti e dati editoriali.",
      "Dashboard di analytics sui dati Plausible per il management.",
    ],
  },
  {
    title: "PrimoUp",
    role: "Full Stack Web Developer",
    image: "/projects/primoup-cover.jpg",
    summary: "Gestionale proprietario per la gestione operativa di cliniche dentistiche, con processi amministrativi, pazienti, magazzino e integrazioni esterne.",
    tech: ["Laravel", "Vue.js", "Elasticsearch", "MySQL", "PHP", "JavaScript"],
    surface: "Gestionale sanitario operativo",
    link: "https://www.centridentisticiprimo.it",
    status: "Apr 2021 - Dic 2024",
    company: "Primo Group S.p.A.",
    impact: "Usato da ~10-15.000 utenti per oltre 1 milione di pazienti, in 170+ cliniche.",
    contribution: [
      "Ricerca avanzata e performante con Elasticsearch.",
      "Integrazione con il Sistema Tessera Sanitaria e i portali assicurativi (UniSalute, Previmedical).",
      "Moduli core: magazzino, contabilità, pazienti, fatture e compensi dei medici.",
    ],
  },
  {
    title: "Binance Trading Bot",
    role: "Progetto personale",
    image: "/projects/binance-bot-cover.png",
    summary: "Bot di trading algoritmico per Binance in Python: scanner di mercato, strategie momentum e funding-carry delta-neutral, dashboard web e motore di backtest con validazione statistica.",
    tech: ["Python", "FastAPI", "pandas", "Binance API", "Pytest"],
    surface: "Trading algoritmico + backtest",
    link: "https://github.com/aleferraro/binance-bot",
    status: "Progetto personale · Open source (MIT)",
    company: "Progetto personale",
    impact: "~5.000 righe di Python, architettura modulare e validazione walk-forward / K-fold delle strategie.",
    contribution: [
      "Motore di backtest fedele al comportamento live, con sweep parametri, walk-forward e K-fold.",
      "Strategia funding-carry delta-neutral (long spot + short perp) per incassare il funding rate.",
      "Dashboard real-time in FastAPI e notifiche Telegram.",
    ],
  },
];

export default function Projects() {
  return (
    <Section id="projects" title="Progetti">
      <div className="max-w-3xl mb-10 text-muted leading-relaxed">
        <p>{projectsIntro}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group relative p-6 rounded-xl bg-card border border-card-border hover:border-accent/30 transition-all flex flex-col"
          >
            <div className="mb-4 overflow-hidden rounded-xl border border-card-border">
              <Image src={project.image} alt={`Anteprima ${project.title}`} width={1200} height={800} className="h-56 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
            </div>

            <div className="mb-4 rounded-xl border border-card-border bg-linear-to-br from-accent/20 via-accent/5 to-transparent p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">Tipo di prodotto</p>
              <p className="text-sm text-foreground">{project.surface}</p>
            </div>

            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-sm text-muted">{project.company}</p>
              </div>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors" aria-label={`Visita ${project.title}`}>
                  <ExternalLink size={18} />
                </a>
              )}
            </div>

            <span className="text-xs text-accent font-mono">{project.status}</span>

            <p className="text-xs uppercase tracking-[0.2em] text-muted mt-3 mb-2">Ruolo</p>
            <p className="text-sm text-foreground mb-4">{project.role}</p>

            <p className="text-muted text-sm leading-relaxed mb-4">{project.summary}</p>

            <div className="mb-4 rounded-lg border border-accent/20 bg-accent/5 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">Segnale di impatto</p>
              <p className="text-sm text-foreground leading-relaxed">{project.impact}</p>
            </div>

            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted mb-3">Mio contributo</p>
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
