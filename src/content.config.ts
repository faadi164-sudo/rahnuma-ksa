import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { HUB_SLUGS } from './data/hubs';

// One Markdown file per guide, in src/content/guides/en/ or src/content/guides/ur/.
// Files starting with "_" (like _template.md) are ignored.
const guides = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    hub: z.enum(HUB_SLUGS),
    lang: z.enum(['en', 'ur']).default('en'),
    type: z.enum(['guide', 'news']).default('guide'),
    quickAnswer: z.string(),
    published: z.coerce.date(),
    lastChecked: z.coerce.date(),
    sources: z.array(z.object({ name: z.string(), url: z.url() })).min(1),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    // Same key on the English and Urdu versions links them for hreflang.
    translationKey: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guides };
