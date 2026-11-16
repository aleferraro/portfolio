import SiteShell from "@/components/site-shell";
import { buildMetadata } from "@/i18n";
import "../globals.css";

export const metadata = buildMetadata("it");

export default function ItalianLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteShell locale="it">{children}</SiteShell>;
}
