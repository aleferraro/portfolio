import type { Metadata } from "next";
import { en } from "./en";
import { it } from "./it";
import type { Dictionary, Locale } from "./types";

export type { Dictionary, Locale } from "./types";

export const siteUrl = "https://alessandroferraro.vercel.app";

export const localePaths: Record<Locale, string> = { it: "/", en: "/en" };

const dictionaries: Record<Locale, Dictionary> = { it, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function buildMetadata(locale: Locale): Metadata {
  const { meta } = getDictionary(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    applicationName: "Alessandro Ferraro Portfolio",
    keywords: meta.keywords,
    authors: [{ name: "Alessandro Ferraro" }],
    creator: "Alessandro Ferraro",
    category: "technology",
    robots: { index: true, follow: true },
    alternates: {
      canonical: localePaths[locale],
      languages: { it: localePaths.it, en: localePaths.en, "x-default": localePaths.it },
    },
    openGraph: {
      url: localePaths[locale],
      title: meta.title,
      description: meta.description,
      type: "website",
      locale: meta.ogLocale,
      alternateLocale: locale === "it" ? ["en_US"] : ["it_IT"],
      siteName: "Alessandro Ferraro Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}
