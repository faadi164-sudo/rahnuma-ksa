// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The site lives at https://livingksa.com (GitHub Pages custom domain).
// The deploy workflow sets SITE_URL and BASE_PATH from the CUSTOM_DOMAIN
// repository variable; these defaults match it for local builds.
const site = process.env.SITE_URL || 'https://livingksa.com';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', ur: 'ur' } },
      filter: (page) => !page.includes('/search/') && !page.includes('/404'),
    }),
  ],
});
