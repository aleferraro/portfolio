import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getDictionary, siteUrl, localePaths, type Locale } from "@/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function SiteShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const dict = getDictionary(locale);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alessandro Ferraro",
    jobTitle: "Senior Full Stack Developer",
    url: `${siteUrl}${localePaths[locale] === "/" ? "" : localePaths[locale]}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: locale === "it" ? "Torino" : "Turin",
      addressCountry: "IT",
    },
    sameAs: ["https://www.linkedin.com/in/alessandro-ferraro/", "https://github.com/aleferraro"],
    knowsAbout: ["Laravel", "Vue.js", "React", "Nuxt", "TypeScript", "Node.js", "GraphQL", "Filament", "Product development"],
  };

  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          {dict.a11y.skipLink}
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
