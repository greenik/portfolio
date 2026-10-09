// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  // Set this to the live domain once you have it (e.g. 'https://kamilzielinski.dev').
  // It turns on absolute share-image URLs and hreflang links, which LinkedIn and Google need.
  site: undefined,
  build: { inlineStylesheets: 'always' },
  // Fontshare faces (ITF free licence) are downloaded at build time and self-hosted:
  // no visitor ever hits a font CDN. Astro adds metric-matched fallbacks and preload links.
  fonts: [
    {
      provider: fontProviders.fontshare(),
      name: 'Cabinet Grotesk',
      cssVariable: '--font-cabinet',
      weights: [500, 700, 800],
      styles: ['normal'],
      fallbacks: ['Arial', 'sans-serif'],
    },
    {
      provider: fontProviders.fontshare(),
      name: 'Switzer',
      cssVariable: '--font-switzer',
      weights: [400, 500, 600],
      styles: ['normal'],
      fallbacks: ['Arial', 'sans-serif'],
    },
  ],
});
