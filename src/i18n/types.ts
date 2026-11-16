export type Locale = "it" | "en";

export type Fact = { label: string; value: string; unit?: string };

export type Project = {
  title: string;
  role: string;
  image: string;
  summary: string;
  tech: string[];
  surface: string;
  link: string;
  status: string;
  company: string;
  facts?: Fact[];
  contribution: string[];
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    ogLocale: string;
    keywords: string[];
  };
  og: {
    alt: string;
    eyebrow: string;
    tagline: string;
  };
  a11y: {
    skipLink: string;
    openMenu: string;
    closeMenu: string;
    scrollDown: string;
  };
  nav: { href: string; label: string }[];
  hero: {
    eyebrow: string;
    headline: string;
    description: string;
    linkedin: string;
    github: string;
    chips: string[];
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  experience: {
    title: string;
    items: {
      role: string;
      company: string;
      type: string;
      period: string;
      location: string;
      description: string;
      skills: string[];
    }[];
  };
  projects: {
    title: string;
    intro: string;
    labels: {
      surface: string;
      role: string;
      contribution: string;
      preview: string;
      visit: string;
    };
    items: Project[];
  };
  skills: {
    title: string;
    groups: { category: string; skills: string[] }[];
  };
  education: {
    title: string;
    educationTitle: string;
    certificationsTitle: string;
    languagesTitle: string;
    education: { title: string; institution: string; period: string; description: string }[];
    certifications: { title: string; issuer: string; date: string }[];
    languages: { name: string; level: string }[];
  };
  contact: {
    title: string;
    lead: string;
    details: string;
    linkedin: string;
    github: string;
    location: string;
  };
  footer: {
    rights: string;
    tagline: string;
  };
};
