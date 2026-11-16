import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Alessandro Ferraro | Senior Full Stack Developer",
    description:
      "Portfolio of Alessandro Ferraro, a Senior Full Stack Developer specialized in Laravel, Vue, React, Nuxt and TypeScript for web products, editorial platforms and management systems, with headless and GraphQL architectures.",
    ogLocale: "en_US",
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
      "Developer portfolio",
      "Remote developer",
      "Turin",
    ],
  },
  og: {
    alt: "Alessandro Ferraro — Senior Full Stack Developer",
    eyebrow: "Senior Full Stack Developer · Turin / Remote",
    tagline: "I build web platforms that are solid, scalable and easy to evolve.",
  },
  a11y: {
    skipLink: "Skip to main content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    scrollDown: "Scroll down",
  },
  nav: [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ],
  hero: {
    eyebrow: "Senior Full Stack Developer · Turin / Remote",
    headline: "I build web platforms that are solid, scalable and easy to evolve.",
    description:
      "I help product teams and companies design, build and grow web applications with Laravel, Vue/React, Nuxt and TypeScript, with a focus on architecture, performance and delivery quality. I currently build the editorial platforms of EDT S.r.l. (Lonely Planet Italia, Il Giornale della Musica).",
    linkedin: "Contact me on LinkedIn",
    github: "See my projects on GitHub",
    chips: ["5+ years on web products", "Laravel · Vue / React / Nuxt", "Editorial, B2B and management systems", "Headless & GraphQL architectures"],
  },
  about: {
    title: "About me",
    paragraphs: [
      "I work as a Senior Full Stack Developer and take web products end to end: problem analysis, architecture, implementation and continuous improvement. I do my best work where speed of execution, code quality and product thinking have to go together.",
      "My strength is combining a Laravel back end with a Vue / React / Nuxt and TypeScript front end to build reliable platforms, polished interfaces and technical foundations that are easy to maintain. Today I bring this approach to editorial and management products running in production, including headless and GraphQL architectures.",
      "I'm open both to senior roles within a company and to focused collaborations where I can bring technical ownership, solid execution and attention to detail.",
    ],
  },
  experience: {
    title: "Experience",
    items: [
      {
        role: "Senior Full Stack Developer",
        company: "EDT S.r.l.",
        type: "Full-time",
        period: "Jan 2025 - Present",
        location: "Turin - Hybrid",
        description:
          "Full-stack development of EDT's digital titles (Lonely Planet Italia, Il Giornale della Musica, Marco Polo Guides). End-to-end rebuild of giornaledellamusica.it (Drupal → Laravel) and re-architecture of Lonely Planet Italia towards a headless architecture with a GraphQL gateway and a Nuxt SSR front end.",
        skills: ["Laravel", "GraphQL", "Node.js", "Nuxt", "Vue.js", "React", "Filament", "Tailwind CSS", "PostgreSQL", "MySQL", "MongoDB", "Redis"],
      },
      {
        role: "Full Stack Web Developer",
        company: "Primo Group S.p.A.",
        type: "Full-time",
        period: "Apr 2021 - Dec 2024",
        location: "Turin - Hybrid",
        description:
          "Full-stack development of PrimoUp, the management CRM of a network of dental clinics: core modules, Elasticsearch search and integrations with the Italian Health Card System (Sistema Tessera Sanitaria) and the main health-insurance portals.",
        skills: ["Laravel", "Vue.js", "Elasticsearch", "MySQL", "PHP", "JavaScript"],
      },
    ],
  },
  projects: {
    title: "Projects",
    intro:
      "A selection of products in production and personal projects. I picked cases that show my technical contribution rather than a simple showcase of tech stacks.",
    labels: {
      surface: "Product type",
      role: "Role",
      contribution: "My contribution",
      preview: "Preview of",
      visit: "Visit",
    },
    items: [
      {
        title: "Lonely Planet Italia",
        role: "Senior Full Stack Developer",
        image: "/projects/lonely-planet-cover.jpg",
        summary: "Travel editorial platform with guides, in-depth content and a shop tied to the Lonely Planet Italia brand.",
        tech: ["Laravel", "GraphQL", "Node.js", "Nuxt", "Vue.js", "TypeScript", "PostgreSQL", "Redis"],
        surface: "Travel publishing + shop",
        link: "https://www.lonelyplanetitalia.it",
        status: "Jan 2025 - Present · Evolving",
        company: "EDT Srl",
        facts: [{ label: "Traffic", value: "~580,000", unit: "page views/month" }],
        contribution: [
          "Re-architecture from a Laravel 5 monolith into 3 decoupled services.",
          "Headless Laravel 13 back end (domain-driven) + GraphQL gateway (Bun/Apollo) with Redis caching.",
          "Nuxt 4 front end with server-side rendering.",
        ],
      },
      {
        title: "Il Giornale della Musica",
        role: "Senior Full Stack Developer",
        image: "/projects/giornale-musica-cover.jpg",
        summary: "Editorial platform for news, features and events from the music world, with a structured back office for the newsroom.",
        tech: ["Laravel", "Filament", "Vue.js", "React", "TypeScript", "MySQL", "PHP"],
        surface: "Newsroom workflow platform",
        link: "https://www.giornaledellamusica.it",
        status: "Jan 2025 - Present",
        company: "EDT Srl",
        facts: [{ label: "Traffic", value: "~70,000", unit: "page views/month" }],
        contribution: [
          "End-to-end rebuild of the site, migrating 13,000+ articles from Drupal to Laravel.",
          "Filament admin area for editorial content and data.",
          "Analytics dashboard on Plausible data for management.",
        ],
      },
      {
        title: "PrimoUp",
        role: "Full Stack Web Developer",
        image: "/projects/primoup-cover.jpg",
        summary: "Proprietary system for running dental clinics day to day: administrative processes, patients, inventory and external integrations.",
        tech: ["Laravel", "Vue.js", "Elasticsearch", "MySQL", "PHP", "JavaScript"],
        surface: "Healthcare operations management",
        link: "https://www.centridentisticiprimo.it",
        status: "Apr 2021 - Dec 2024",
        company: "Primo Group S.p.A.",
        facts: [
          { label: "Clinics", value: "170+" },
          { label: "Users", value: "10-15,000" },
          { label: "Patients", value: "1M+" },
        ],
        contribution: [
          "Advanced, high-performance search with Elasticsearch.",
          "Integration with the Italian Health Card System and health-insurance portals (UniSalute, Previmedical).",
          "Core modules: inventory, accounting, patients, invoices and doctors' compensation.",
        ],
      },
      {
        title: "Binance Trading Bot",
        role: "Personal project",
        image: "/projects/binance-bot-cover.png",
        summary:
          "Algorithmic trading bot for Binance in Python: market scanner, momentum and delta-neutral funding-carry strategies, web dashboard and a backtesting engine with statistical validation.",
        tech: ["Python", "FastAPI", "pandas", "Binance API", "Pytest"],
        surface: "Algorithmic trading + backtesting",
        link: "https://github.com/aleferraro/binance-bot",
        status: "Personal project · Open source (MIT)",
        company: "Personal project",
        contribution: [
          "Backtesting engine faithful to live behavior, with parameter sweeps, walk-forward and K-fold validation.",
          "Delta-neutral funding-carry strategy (long spot + short perp) to capture the funding rate.",
          "Real-time FastAPI dashboard and Telegram notifications.",
        ],
      },
    ],
  },
  skills: {
    title: "Skills",
    groups: [
      {
        category: "Back-end & Database",
        skills: ["PHP", "Laravel", "Filament", "Livewire", "Node.js", "Python", "GraphQL", "REST API", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
      },
      {
        category: "Front-end",
        skills: ["Vue.js", "React", "Next.js", "Nuxt", "TypeScript", "JavaScript", "Tailwind CSS", "SASS/SCSS", "HTML5", "CSS3"],
      },
      {
        category: "DevOps & Tools",
        skills: ["Docker", "Git", "GitHub Actions", "Nginx", "Bun", "Vite", "Composer", "Postman"],
      },
      {
        category: "Methodologies",
        skills: ["Agile / Scrum", "Code review", "SOLID", "Design patterns", "Problem solving"],
      },
    ],
  },
  education: {
    title: "Education & Certifications",
    educationTitle: "Education",
    certificationsTitle: "Certifications",
    languagesTitle: "Languages",
    education: [
      {
        title: "Full Stack Web Developer",
        institution: "Boolean Careers",
        period: "2020 - 2021",
        description: "HTML, CSS, SASS/SCSS, JavaScript, SQL, PHP, Laravel. Intensive full-stack training program.",
      },
      {
        title: "Bachelor's Degree in Business Economics (Administration, Finance and Control)",
        institution: "University of Turin",
        period: "2011 - 2016",
        description: "A degree that strengthened my analytical approach, organization and understanding of business processes.",
      },
    ],
    certifications: [
      { title: "EF SET English Certificate — C1", issuer: "EF SET", date: "Dec 2025" },
      { title: "Next.js", issuer: "Vercel", date: "Dec 2025" },
      { title: "Full Stack Web Developer", issuer: "Boolean Careers", date: "Mar 2021" },
    ],
    languages: [
      { name: "Italian", level: "Native" },
      { name: "English", level: "C1 · EF SET" },
      { name: "Spanish", level: "B1" },
      { name: "French", level: "A2" },
    ],
  },
  contact: {
    title: "Contact",
    lead: "I'm open to senior developer roles and focused collaborations on web products, editorial platforms and management applications.",
    details: "If you're looking for someone who can contribute across architecture, delivery and product quality, reach out on LinkedIn.",
    linkedin: "Contact me on LinkedIn",
    github: "See my projects on GitHub",
    location: "Turin, Italy · Available remotely or hybrid",
  },
  footer: {
    rights: "All rights reserved.",
    tagline: "Senior Full Stack Developer for selected roles and focused collaborations.",
  },
};
