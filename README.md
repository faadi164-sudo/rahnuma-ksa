# Rahnuma KSA

Step-by-step guides for expats in Saudi Arabia, in English and Urdu. Built with [Astro](https://astro.build) and published free on GitHub Pages.

## Run it on your computer

```bash
npm install
npm run dev      # http://localhost:4321/rahnuma-ksa/  (drafts are visible here)
npm run build    # builds the live site into dist/ (drafts are left out)
```

## Publish

Every push to `main` builds and publishes the site through GitHub Actions (`.github/workflows/deploy.yml`).

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

### Custom domain (later)

1. Buy the domain (e.g. on Porkbun) and point it to GitHub Pages (Settings → Pages → Custom domain shows the DNS records).
2. Add a repository variable `CUSTOM_DOMAIN` (Settings → Secrets and variables → Actions → Variables), e.g. `rahnumaksa.com`.
3. Push any change; the site rebuilds at the new address.

## Add a guide

1. Copy `src/content/guides/_template.md` to `src/content/guides/en/<url-slug>.md` (Urdu: `ur/`).
2. Fill in the front matter: title, description, hub, quick answer, dates, sources, FAQ.
3. Write the steps in Markdown.
4. Check every step and fee against the official source, set `lastChecked` to today and `draft: false`.
5. Commit and push. The guide appears on its topic page, the homepage and in search.

Link an English guide and its Urdu version by giving both the same `translationKey`.

News items use `type: news` and appear under **Latest rule changes**.

## Settings to change before launch

`src/site.ts`: site name, your name, contact email, WhatsApp channel link, and `adsEnabled` (after AdSense approval).

## Structure

| Path | What it is |
| --- | --- |
| `src/content/guides/` | All guides, as Markdown |
| `src/data/hubs.ts` | The 12 topics |
| `src/data/home.ts` | Homepage tiles, seasonal banner, first-90-days steps |
| `src/components/` | Homepage, guide page, topic page, header, footer |
| `src/pages/` | Routes, policy pages, search, robots.txt |
| `src/styles/global.css` | Colours, fonts and layout |
