import type { Dictionary } from "./types";

export const it: Dictionary = {
  meta: {
    title: "Alessandro Ferraro | Senior Full Stack Developer",
    description:
      "Portfolio di Alessandro Ferraro, Senior Full Stack Developer specializzato in Laravel, Vue, React, Nuxt e TypeScript per prodotti web, piattaforme editoriali e gestionali, con architetture headless e GraphQL.",
    ogLocale: "it_IT",
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
  },
  og: {
    alt: "Alessandro Ferraro — Senior Full Stack Developer",
    eyebrow: "Senior Full Stack Developer · Torino / Da remoto",
    tagline: "Costruisco piattaforme web solide, scalabili e facili da far evolvere.",
  },
  a11y: {
    skipLink: "Salta al contenuto principale",
    openMenu: "Apri menu",
    closeMenu: "Chiudi menu",
    scrollDown: "Scorri in basso",
  },
  nav: [
    { href: "#about", label: "Profilo" },
    { href: "#experience", label: "Esperienza" },
    { href: "#projects", label: "Progetti" },
    { href: "#skills", label: "Competenze" },
    { href: "#education", label: "Formazione" },
    { href: "#contact", label: "Contatti" },
  ],
  hero: {
    eyebrow: "Senior Full Stack Developer · Torino / Da remoto",
    headline: "Costruisco piattaforme web solide, scalabili e facili da far evolvere.",
    description:
      "Aiuto team di prodotto e aziende a progettare, sviluppare e far crescere applicazioni web con Laravel, Vue/React, Nuxt e TypeScript, con attenzione ad architettura, performance e qualità della delivery. Oggi sviluppo le piattaforme editoriali di EDT S.r.l. (Lonely Planet Italia, Il Giornale della Musica).",
    linkedin: "Contattami su LinkedIn",
    github: "Vedi i progetti su GitHub",
    chips: ["5+ anni su prodotti web", "Laravel · Vue / React / Nuxt", "Editoriali, B2B e gestionali", "Architetture headless & GraphQL"],
  },
  about: {
    title: "Chi sono",
    paragraphs: [
      "Lavoro come Senior Full Stack Developer e seguo prodotti web end-to-end: analisi del problema, architettura, implementazione e miglioramento continuo. Mi trovo bene in contesti in cui serve tenere insieme velocità di esecuzione, qualità del codice e visione di prodotto.",
      "La mia forza è unire back-end con Laravel e front-end con Vue / React / Nuxt e TypeScript per costruire piattaforme affidabili, interfacce curate e basi tecniche facili da mantenere. Oggi porto questo approccio su progetti editoriali e gestionali usati in produzione, anche con architetture headless e GraphQL.",
      "Valuto sia opportunità senior in azienda sia collaborazioni mirate dove posso contribuire con ownership tecnica, execution solida e attenzione al dettaglio.",
    ],
  },
  experience: {
    title: "Esperienza",
    items: [
      {
        role: "Senior Full Stack Developer",
        company: "EDT S.r.l.",
        type: "Full-time",
        period: "Gen 2025 - Presente",
        location: "Torino - Ibrido",
        description:
          "Sviluppo full-stack delle testate digitali di EDT (Lonely Planet Italia, Il Giornale della Musica, Guide Marco Polo). Ricostruzione end-to-end di giornaledellamusica.it (Drupal → Laravel) e re-architettura di Lonely Planet Italia verso un'architettura headless con gateway GraphQL e front-end Nuxt SSR.",
        skills: ["Laravel", "GraphQL", "Node.js", "Nuxt", "Vue.js", "React", "Filament", "Tailwind CSS", "PostgreSQL", "MySQL", "MongoDB", "Redis"],
      },
      {
        role: "Full Stack Web Developer",
        company: "Primo Group S.p.A.",
        type: "Full-time",
        period: "Apr 2021 - Dic 2024",
        location: "Torino - Ibrido",
        description:
          "Sviluppo full-stack di PrimoUp, il CRM gestionale della rete di cliniche dentistiche: moduli core, ricerca Elasticsearch e integrazioni con il Sistema Tessera Sanitaria e i principali portali assicurativi sanitari.",
        skills: ["Laravel", "Vue.js", "Elasticsearch", "MySQL", "PHP", "JavaScript"],
      },
    ],
  },
  projects: {
    title: "Progetti",
    intro:
      "Una selezione di prodotti in produzione e progetti personali. Ho privilegiato casi che mostrano il mio contributo tecnico più che una semplice vetrina di stack.",
    labels: {
      surface: "Tipo di prodotto",
      role: "Ruolo",
      contribution: "Mio contributo",
      preview: "Anteprima",
      visit: "Visita",
    },
    items: [
      {
        title: "Lonely Planet Italia",
        role: "Senior Full Stack Developer",
        image: "/projects/lonely-planet-cover.jpg",
        summary: "Piattaforma editoriale dedicata al mondo dei viaggi con contenuti, approfondimenti e shop collegato al brand Lonely Planet Italia.",
        tech: ["Laravel", "GraphQL", "Node.js", "Nuxt", "Vue.js", "TypeScript", "PostgreSQL", "Redis"],
        surface: "Editoria di viaggio + shop",
        link: "https://www.lonelyplanetitalia.it",
        status: "Gen 2025 - Presente · In evoluzione",
        company: "EDT Srl",
        facts: [{ label: "Traffico", value: "~580.000", unit: "visualizzazioni/mese" }],
        contribution: [
          "Re-architettura da monolite Laravel 5 a 3 servizi disaccoppiati.",
          "Backend headless in Laravel 13 (domain-driven) + gateway GraphQL (Bun/Apollo) con cache Redis.",
          "Front-end in Nuxt 4 con server-side rendering.",
        ],
      },
      {
        title: "Il Giornale della Musica",
        role: "Senior Full Stack Developer",
        image: "/projects/giornale-musica-cover.jpg",
        summary: "Piattaforma editoriale per notizie, approfondimenti e appuntamenti del mondo musicale, con back office strutturato per la redazione.",
        tech: ["Laravel", "Filament", "Vue.js", "React", "TypeScript", "MySQL", "PHP"],
        surface: "Piattaforma per il lavoro redazionale",
        link: "https://www.giornaledellamusica.it",
        status: "Gen 2025 - Presente",
        company: "EDT Srl",
        facts: [{ label: "Traffico", value: "~70.000", unit: "visualizzazioni/mese" }],
        contribution: [
          "Ricostruzione end-to-end del sito con migrazione di oltre 13.000 articoli da Drupal a Laravel.",
          "Area amministrativa in Filament per contenuti e dati editoriali.",
          "Dashboard di analytics sui dati Plausible per il management.",
        ],
      },
      {
        title: "PrimoUp",
        role: "Full Stack Web Developer",
        image: "/projects/primoup-cover.jpg",
        summary: "Gestionale proprietario per la gestione operativa di cliniche dentistiche, con processi amministrativi, pazienti, magazzino e integrazioni esterne.",
        tech: ["Laravel", "Vue.js", "Elasticsearch", "MySQL", "PHP", "JavaScript"],
        surface: "Gestionale sanitario operativo",
        link: "https://www.centridentisticiprimo.it",
        status: "Apr 2021 - Dic 2024",
        company: "Primo Group S.p.A.",
        facts: [
          { label: "Cliniche", value: "170+" },
          { label: "Utenti", value: "10-15.000" },
          { label: "Pazienti", value: "1M+" },
        ],
        contribution: [
          "Ricerca avanzata e performante con Elasticsearch.",
          "Integrazione con il Sistema Tessera Sanitaria e i portali assicurativi (UniSalute, Previmedical).",
          "Moduli core: magazzino, contabilità, pazienti, fatture e compensi dei medici.",
        ],
      },
      {
        title: "Binance Trading Bot",
        role: "Progetto personale",
        image: "/projects/binance-bot-cover.png",
        summary:
          "Bot di trading algoritmico per Binance in Python: scanner di mercato, strategie momentum e funding-carry delta-neutral, dashboard web e motore di backtest con validazione statistica.",
        tech: ["Python", "FastAPI", "pandas", "Binance API", "Pytest"],
        surface: "Trading algoritmico + backtest",
        link: "https://github.com/aleferraro/binance-bot",
        status: "Progetto personale · Open source (MIT)",
        company: "Progetto personale",
        contribution: [
          "Motore di backtest fedele al comportamento live, con sweep parametri, walk-forward e K-fold.",
          "Strategia funding-carry delta-neutral (long spot + short perp) per incassare il funding rate.",
          "Dashboard real-time in FastAPI e notifiche Telegram.",
        ],
      },
    ],
  },
  skills: {
    title: "Competenze",
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
        category: "Metodologie",
        skills: ["Agile / Scrum", "Code review", "SOLID", "Design pattern", "Problem Solving"],
      },
    ],
  },
  education: {
    title: "Formazione e Certificazioni",
    educationTitle: "Formazione",
    certificationsTitle: "Certificazioni",
    languagesTitle: "Lingue",
    education: [
      {
        title: "Full Stack Web Developer",
        institution: "Boolean Careers",
        period: "2020 - 2021",
        description: "HTML, CSS, SASS/SCSS, JavaScript, SQL, PHP, Laravel. Percorso intensivo di formazione full-stack.",
      },
      {
        title: "Laurea Triennale in Amministrazione, Finanza e Controllo",
        institution: "Università degli Studi di Torino",
        period: "2011 - 2016",
        description: "Percorso universitario che ha rafforzato approccio analitico, organizzazione e lettura dei processi.",
      },
    ],
    certifications: [
      { title: "EF SET English Certificate — C1", issuer: "EF SET", date: "Dic 2025" },
      { title: "Next.js", issuer: "Vercel", date: "Dic 2025" },
      { title: "Full Stack Web Developer", issuer: "Boolean Careers", date: "Mar 2021" },
    ],
    languages: [
      { name: "Italiano", level: "Madrelingua" },
      { name: "Inglese", level: "C1 · EF SET" },
      { name: "Spagnolo", level: "B1" },
      { name: "Francese", level: "A2" },
    ],
  },
  contact: {
    title: "Contatti",
    lead: "Valuto opportunità come senior developer e collaborazioni mirate su prodotti web, piattaforme editoriali e applicazioni gestionali.",
    details: "Se stai cercando un profilo capace di contribuire tra architettura, delivery e qualità del prodotto, contattami su LinkedIn.",
    linkedin: "Contattami su LinkedIn",
    location: "Torino, Italia · Disponibile da remoto o in modalità ibrida",
  },
  footer: {
    rights: "Tutti i diritti riservati.",
    tagline: "Senior Full Stack Developer per ruoli selezionati e collaborazioni mirate.",
  },
};
