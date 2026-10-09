# Kamil Zieliński — portfolio

One-page Astro site in English (`/`) and Polish (`/pl/`), light and dark.

```sh
nvm use          # Node 24 (Astro 7 needs ≥ 22.12)
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Deploying (Cloudflare Workers, static assets)

The site is an assets-only Worker named `portfolio`, connected to GitHub through Workers Builds:
every push to `main` deploys to production. Config: `wrangler.jsonc` (its `name` must match the
Worker name in the dashboard).

Workers Builds settings (dashboard → Worker → Settings → Build):

- Build command: `npm run build` (Workers Builds ignores build settings in `wrangler.jsonc`)
- Deploy command: `npx wrangler deploy`
- Root directory: `/` · Node: build image default (24), pinned by `.nvmrc`

Locally:

- `npm run preview:worker` — build, then serve `dist/` with Cloudflare's runtime (headers, 404, redirects).
- `npm run deploy` — manual deploy from this machine (needs `npx wrangler login` once).

`public/_headers` sets security headers and long-term caching for hashed assets in `/_astro/`.
`src/pages/404.astro` becomes `dist/404.html`, served with a 404 status (`not_found_handling: "404-page"`).

Custom domain: Workers only accept domains whose DNS is on Cloudflare (nameservers moved to
Cloudflare). Add it under Worker → Settings → Domains & Routes, then set `site` in `astro.config.mjs`.

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
