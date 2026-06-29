"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Section from "./section";

const contactLead =
  "Valuto opportunita come senior developer e collaborazioni mirate su prodotti web, piattaforme editoriali e applicazioni gestionali.";

const contactDetails =
  "Se stai cercando un profilo capace di contribuire tra architettura, delivery e qualita del prodotto, contattami su LinkedIn.";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <Section id="contact" title="Contatti">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center">
        <p className="text-muted text-lg mb-4 leading-relaxed">{contactLead}</p>

        <p className="text-muted mb-8 leading-relaxed">{contactDetails}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="https://www.linkedin.com/in/alessandro-ferraro/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
          >
            <LinkedinIcon size={18} />
            Contattami su LinkedIn
          </a>
          <a
            href="https://github.com/aleferraro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-card-border text-foreground hover:border-accent hover:text-accent transition-colors"
          >
            GitHub
          </a>
        </div>

        <p className="flex items-center justify-center gap-2 text-sm text-muted">
          <MapPin size={14} />
          Torino, Italia · Disponibile da remoto o in modalita ibrida
        </p>
      </motion.div>
    </Section>
  );
}
