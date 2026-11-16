# Portfolio

Portfolio personale di Alessandro Ferraro, Senior Full Stack Developer.

Il sito è sviluppato con Next.js App Router, React, TypeScript, Tailwind CSS e Framer Motion.

## Avvio locale

Il progetto usa Bun. Per avviare l'ambiente di sviluppo:

```bash
bun dev
```

Per eseguire il lint:

```bash
bun run lint
```

Apri http://localhost:3000 per visualizzare il sito.

## Struttura

- `src/app`: route e stili globali. Il sito ha due layout principali tramite route group: `(it)` serve la versione italiana su `/`, `(en)` quella inglese su `/en`. Ognuno ha la propria immagine Open Graph.
  `sitemap.ts` e `robots.ts` generano `/sitemap.xml` (con i collegamenti `hreflang` tra le due lingue) e `/robots.txt`.
- `src/i18n`: tutti i testi del sito. `it.ts` e `en.ts` contengono i contenuti (stessa struttura, tipizzata in `types.ts`); `index.ts` espone il dizionario e i metadata (canonical, hreflang, Open Graph) per lingua. Per modificare un testo si interviene qui, in entrambe le lingue.
- `src/components`: sezioni del portfolio; ricevono i testi come props. `site-shell.tsx` è il layout HTML comune, `home.tsx` compone la pagina, `motion-provider.tsx` disattiva le animazioni di movimento per chi ha attivato "riduci movimento" nel sistema operativo.
- `src/lib/og-image.tsx`: generazione dell'immagine di anteprima social, localizzata.
- `assets`: font usati per generare l'immagine di anteprima.
- `public`: asset statici pubblici.

## Obiettivo del sito

Il portfolio è pensato per presentare:

- posizionamento come Senior Full Stack Developer;
- esperienza su prodotti editoriali, gestionali e piattaforme web;
- casi studio selezionati con focus su contributo tecnico e impatto.
