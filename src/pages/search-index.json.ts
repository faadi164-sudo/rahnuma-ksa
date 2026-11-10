import type { APIRoute } from 'astro';
import { getGuides, guidePath } from '../lib/guides';
import { url } from '../site';
import { hubBySlug } from '../data/hubs';

export const GET: APIRoute = async () => {
  const all = [...(await getGuides('en')), ...(await getGuides('ur'))];
  const items = all.map((g) => ({
    t: g.data.title,
    d: g.data.description,
    u: url(guidePath(g)),
    h: hubBySlug(g.data.hub)?.en ?? '',
    l: g.data.lang,
  }));
  return new Response(JSON.stringify(items), { headers: { 'Content-Type': 'application/json' } });
};
