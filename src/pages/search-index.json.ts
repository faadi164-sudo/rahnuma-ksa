import type { APIRoute } from 'astro';
import { getGuides, guidePath } from '../lib/guides';
import { url } from '../site';
import { hubBySlug } from '../data/hubs';
import { TOOLS } from '../data/tools';

export const GET: APIRoute = async () => {
  const all = [...(await getGuides('en')), ...(await getGuides('ur'))];
  const items = all.map((g) => ({
    t: g.data.title,
    d: g.data.description,
    u: url(guidePath(g)),
    h: hubBySlug(g.data.hub)?.en ?? '',
    l: g.data.lang,
  }));
  for (const tool of TOOLS) {
    items.push({ t: tool.en, d: tool.desc, u: url(`tools/${tool.slug}/`), h: 'Free tools', l: 'en' });
  }
  return new Response(JSON.stringify(items), { headers: { 'Content-Type': 'application/json' } });
};
