# Kamil Zieliński — portfolio

One-page Astro site in English (`/`) and Polish (`/pl/`), light and dark.

```sh
nvm use          # Node 24 (Astro 7 needs ≥ 22.12)
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

`dist/` is plain static files: Cloudflare Pages, Netlify or GitHub Pages
(build command `npm run build`, output directory `dist`).

## Editing

- **Facts** (project names, dates, stacks, filter tags): `src/data/projects.ts`
- **Words**: `src/i18n/en.ts` and `src/i18n/pl.ts` — same shape, one per language.
  Polish strings get non-breaking spaces after one-letter words automatically.
- **Colours, type, spacing, motion**: `src/styles/tokens.css`. Every colour is a
  `light-dark()` pair built from the palette #1B262C · #0F4C75 · #3282B8 · #BBE1FA.
- **CV**: replace `public/Kamil_Zielinski_CV_EN.pdf` (and the size in `projects.ts` if it changes).

## Before going live

1. Set `site` in `astro.config.mjs` to the real domain. That switches on absolute
   share-image URLs (LinkedIn needs them), canonical and hreflang links.
2. Share images live in `public/og/en.png` and `public/og/pl.png` (1200 × 630).
   After changing the headline, regenerate them: run `npm run build && npm run preview`,
   open `/og/en/` and `/og/pl/` in a 1200 × 630 window, and screenshot each into `public/og/`.

## Behaviour notes

- Theme follows the system until the visitor clicks the toggle; the choice is kept in
  `localStorage` and applied before first paint (no flash).
- Motion (hero reveal, theme wipe, timeline rail, filter reflow) is skipped or reduced
  under `prefers-reduced-motion`. The rail and the wipe need browsers with scroll-driven
  animations / View Transitions; elsewhere the page simply doesn't animate them.
- Fonts (Cabinet Grotesk, Switzer — Fontshare, free licence) are downloaded at build
  time and self-hosted; visitors never hit a font CDN.
