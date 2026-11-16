"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const heroDescription =
  "Aiuto team di prodotto e aziende a progettare, sviluppare e far crescere applicazioni web con Laravel, Vue/React, Nuxt e TypeScript, con attenzione ad architettura, performance e qualità della delivery. Oggi sviluppo le piattaforme editoriali di EDT S.r.l. (Lonely Planet Italia, Il Giornale della Musica).";

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-accent font-mono text-sm mb-4">
          Senior Full Stack Developer · Torino / Da remoto
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Alessandro Ferraro
        </motion.h1>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-2xl md:text-4xl font-semibold text-muted mb-8 leading-tight">
          Costruisco piattaforme web solide, scalabili e facili da far evolvere.
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-lg text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
          {heroDescription}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="https://www.linkedin.com/in/alessandro-ferraro/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-colors w-full sm:w-auto"
          >
            <LinkedinIcon size={18} />
            Contattami su LinkedIn
          </a>
          <a
            href="https://github.com/aleferraro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-card-border text-muted hover:border-accent hover:text-foreground transition-colors w-full sm:w-auto"
          >
            <GithubIcon size={18} />
            Vedi i progetti su GitHub
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {["5+ anni su prodotti web", "Laravel · Vue / React / Nuxt", "Editoriali, B2B e gestionali", "Architetture headless & GraphQL"].map((item) => (
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
          aria-label="Scorri in basso"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ArrowDown size={24} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
