import type { MetadataRoute } from "next";
import { localePaths, siteUrl } from "@/i18n";

const url = (path: string) => (path === "/" ? siteUrl : `${siteUrl}${path}`);

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { it: url(localePaths.it), en: url(localePaths.en) };

  return [
    { url: url(localePaths.it), lastModified: new Date(), changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: url(localePaths.en), lastModified: new Date(), changeFrequency: "monthly", priority: 0.9, alternates: { languages } },
  ];
}
