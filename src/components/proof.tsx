"use client";

import { motion } from "framer-motion";

const proofMetrics = [
  {
    value: "170+",
    label: "cliniche operative",
    detail: "Gestionale PrimoUp utilizzato in produzione su rete nazionale.",
  },
  {
    value: "1M+",
    label: "pazienti gestiti",
    detail: "Dati gestiti dal CRM PrimoUp da circa 10-15k utenti.",
  },
  {
    value: "300k+",
    label: "visualizzazioni/mese",
    detail: "Portale travel Lonely Planet Italia.",
  },
  {
    value: "13k+",
    label: "articoli migrati",
    detail: "Migrazione Drupal → Laravel del Giornale della Musica.",
  },
];

const deliveryAreas = ["Ecosistema Laravel", "Architetture headless & GraphQL", "Front-end Nuxt / React", "Integrazioni API e processi core"];

export default function Proof() {
  return (
    <section id="proof" className="py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-card-border bg-card/70 p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.25em] text-accent mb-2">In numeri</p>
              <h2 className="text-2xl md:text-3xl font-semibold leading-tight">Segnali concreti di impatto su prodotti reali, non solo un elenco di tecnologie.</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {deliveryAreas.map((area) => (
                <span key={area} className="px-3 py-1.5 rounded-full border border-card-border bg-background text-sm text-muted">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {proofMetrics.map((metric, index) => (
              <motion.div key={metric.label + metric.value} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-xl border border-card-border bg-background/60 p-4">
                <p className="text-3xl font-bold text-accent mb-1">{metric.value}</p>
                <p className="text-sm font-medium text-foreground">{metric.label}</p>
                <p className="text-xs text-muted mt-2 leading-relaxed">{metric.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}