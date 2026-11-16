"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Languages } from "lucide-react";
import Section from "./section";
import type { Dictionary } from "@/i18n/types";

export default function Education({ t }: { t: Dictionary["education"] }) {
  return (
    <Section id="education" title={t.title}>
      <div className="grid md:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-6">
            <GraduationCap size={20} className="text-accent" />
            {t.educationTitle}
          </h3>
          <div className="space-y-6">
            {t.education.map((edu, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-5 rounded-xl bg-card border border-card-border">
                <h4 className="font-semibold">{edu.title}</h4>
                <p className="text-accent text-sm">{edu.institution}</p>
                <p className="text-muted text-xs mb-2">{edu.period}</p>
                <p className="text-muted text-sm">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold mb-6">
            <Award size={20} className="text-accent" />
            {t.certificationsTitle}
          </h3>
          <div className="space-y-4">
            {t.certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-xl bg-card border border-card-border flex items-center justify-between"
              >
                <div>
                  <h4 className="font-semibold text-sm">{cert.title}</h4>
                  <p className="text-accent text-xs">{cert.issuer}</p>
                </div>
                <p className="text-muted text-xs whitespace-nowrap ml-4">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Languages */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12">
        <h3 className="flex items-center gap-2 text-lg font-semibold mb-6">
          <Languages size={20} className="text-accent" />
          {t.languagesTitle}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.languages.map((lang) => (
            <div key={lang.name} className="p-4 rounded-xl bg-card border border-card-border text-center">
              <p className="font-semibold mb-1">{lang.name}</p>
              <p className="text-xs text-muted">{lang.level}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
