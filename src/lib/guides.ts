import { getCollection, type CollectionEntry } from 'astro:content';

export type Guide = CollectionEntry<'guides'>;
export type Lang = 'en' | 'ur';

/** Published guides for one language, newest check first. Drafts show only in `npm run dev`. */
export async function getGuides(lang: Lang, type?: 'guide' | 'news'): Promise<Guide[]> {
  const all = await getCollection('guides', (g) => {
    if (g.data.lang !== lang) return false;
    if (type && g.data.type !== type) return false;
    return import.meta.env.DEV ? true : !g.data.draft;
  });
  return all.sort((a, b) => b.data.lastChecked.getTime() - a.data.lastChecked.getTime());
}

export function guideSlug(g: Guide): string {
  return g.id.split('/').pop() ?? g.id;
}

/** Path without the base, e.g. "guides/renew-iqama/" or "ur/guides/renew-iqama/". */
export function guidePath(g: Guide): string {
  return g.data.lang === 'ur' ? `ur/guides/${guideSlug(g)}/` : `guides/${guideSlug(g)}/`;
}

/** The other-language version of a guide, linked by translationKey. */
export async function findTranslation(g: Guide): Promise<Guide | undefined> {
  if (!g.data.translationKey) return undefined;
  const other: Lang = g.data.lang === 'en' ? 'ur' : 'en';
  const list = await getGuides(other);
  return list.find((x) => x.data.translationKey === g.data.translationKey);
}
