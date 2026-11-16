"use client";

import { motion } from "framer-motion";
import Section from "./section";

const aboutParagraphs = [
  "Lavoro come Senior Full Stack Developer e seguo prodotti web end-to-end: analisi del problema, architettura, implementazione e miglioramento continuo. Mi trovo bene in contesti in cui serve tenere insieme velocità di esecuzione, qualità del codice e visione di prodotto.",
  "La mia forza è unire back-end con Laravel e front-end con Vue / React / Nuxt e TypeScript per costruire piattaforme affidabili, interfacce curate e basi tecniche facili da mantenere. Oggi porto questo approccio su progetti editoriali e gestionali usati in produzione, anche con architetture headless e GraphQL.",
  "Valuto sia opportunità senior in azienda sia collaborazioni mirate dove posso contribuire con ownership tecnica, execution solida e attenzione al dettaglio.",
];

export default function About() {
  return (
    <Section id="about" title="Chi sono">
      <div className="grid md:grid-cols-3 gap-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-2 space-y-4 text-muted leading-relaxed">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-4">
          <div className="p-4 rounded-xl bg-card border border-card-border">
            <p className="text-3xl font-bold text-accent">5+</p>
            <p className="text-sm text-muted">anni di esperienza su prodotti digitali</p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-card-border">
            <p className="text-3xl font-bold text-accent">1M+</p>
            <p className="text-sm text-muted">pazienti gestiti dal CRM PrimoUp</p>
          </div>
          <div className="p-4 rounded-xl bg-card border border-card-border">
            <p className="text-3xl font-bold text-accent">End-to-end</p>
            <p className="text-sm text-muted">dal back-end alla UX tecnica</p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
