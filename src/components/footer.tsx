import type { Dictionary } from "@/i18n/types";

export default function Footer({ t }: { t: Dictionary["footer"] }) {
  return (
    <footer className="py-8 px-6 border-t border-card-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Alessandro Ferraro. {t.rights}</p>
        <p className="text-center md:text-right">{t.tagline}</p>
      </div>
    </footer>
  );
}
