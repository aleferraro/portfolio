"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import type { Dictionary, Locale } from "@/i18n/types";

const languages: { locale: Locale; href: string; label: string; name: string }[] = [
  { locale: "it", href: "/", label: "IT", name: "Italiano" },
  { locale: "en", href: "/en", label: "EN", name: "English" },
];

function LanguageSwitch({ locale }: { locale: Locale }) {
  return (
    <div className="flex items-center gap-1 text-sm font-mono">
      {languages.map((lang, i) => (
        <span key={lang.locale} className="flex items-center gap-1">
          {i > 0 && <span className="text-card-border">/</span>}
          {lang.locale === locale ? (
            <span className="text-foreground font-semibold" aria-current="true" title={lang.name}>
              {lang.label}
            </span>
          ) : (
            <a href={lang.href} hrefLang={lang.locale} lang={lang.locale} className="text-muted hover:text-accent transition-colors" title={lang.name} aria-label={lang.name}>
              {lang.label}
            </a>
          )}
        </span>
      ))}
    </div>
  );
}

export default function Navbar({ locale, links, a11y }: { locale: Locale; links: Dictionary["nav"]; a11y: Dictionary["a11y"] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight">
          <span className="text-accent">A</span>F
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-muted hover:text-foreground transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <span className="h-4 w-px bg-card-border" aria-hidden="true" />
          <LanguageSwitch locale={locale} />
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-5">
          <LanguageSwitch locale={locale} />
          <button className="text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? a11y.closeMenu : a11y.openMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden border-t border-card-border bg-background/95 backdrop-blur-md">
            <ul className="flex flex-col px-6 py-4 gap-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
