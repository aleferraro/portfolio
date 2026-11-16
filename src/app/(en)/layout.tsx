import SiteShell from "@/components/site-shell";
import { buildMetadata } from "@/i18n";
import "../globals.css";

export const metadata = buildMetadata("en");

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
