import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteTitle = "Alessandro Ferraro | Senior Full Stack Developer";
const siteDescription =
  "Portfolio di Alessandro Ferraro, Senior Full Stack Developer specializzato in Laravel, Vue, React, Nuxt e TypeScript per prodotti web, piattaforme editoriali e gestionali, con architetture headless e GraphQL.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  applicationName: "Alessandro Ferraro Portfolio",
  keywords: [
    "Full Stack Developer",
    "Senior Full Stack Developer",
    "Laravel",
    "Vue.js",
    "React",
    "Nuxt",
    "TypeScript",
    "GraphQL",
    "Filament",
    "Portfolio sviluppatore",
    "Torino",
  ],
  authors: [{ name: "Alessandro Ferraro" }],
  creator: "Alessandro Ferraro",
  category: "technology",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "it_IT",
    siteName: "Alessandro Ferraro Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alessandro Ferraro",
    jobTitle: "Senior Full Stack Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Torino",
      addressCountry: "IT",
    },
    sameAs: ["https://www.linkedin.com/in/alessandro-ferraro/", "https://github.com/aleferraro"],
    knowsAbout: ["Laravel", "Vue.js", "React", "Nuxt", "TypeScript", "GraphQL", "Filament", "Product development"],
  };

  return (
    <html lang="it" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Salta al contenuto principale
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}
