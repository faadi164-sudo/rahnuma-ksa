// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages serves a project site at https://<user>.github.io/<repo>/.
// The deploy workflow sets SITE_URL and BASE_PATH. With a custom domain,
// it sets BASE_PATH to "/".
const site = process.env.SITE_URL || 'https://faadi164-sudo.github.io';
const base = process.env.BASE_PATH || '/rahnuma-ksa';

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
