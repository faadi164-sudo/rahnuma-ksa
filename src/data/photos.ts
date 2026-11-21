// Header photos. Free Pexels photos (pexels.com/license), stored in scripts/photos/ and
// resized by scripts/make-photos.py into public/img/photos/.
// `pos` is the CSS object-position that keeps the subject in view in wide headers.
export type PhotoKey =
  | 'home' | 'home-rtl' | 'iqama' | 'visas' | 'absher' | 'work' | 'driving' | 'money'
  | 'housing' | 'family' | 'health' | 'hajj-umrah' | 'telecom' | 'embassy';

export const PHOTOS: Record<PhotoKey, { pos: string; pexelsId: number }> = {
  home: { pos: '70% 45%', pexelsId: 39470846 },
  // Same photo cropped so the tower sits on the left, behind no Urdu text.
  'home-rtl': { pos: '30% 45%', pexelsId: 39470846 },
  iqama: { pos: '50% 72%', pexelsId: 39470841 },
  visas: { pos: '50% 45%', pexelsId: 19803978 },
  absher: { pos: '50% 50%', pexelsId: 7641426 },
  work: { pos: '50% 32%', pexelsId: 7984734 },
  driving: { pos: '50% 55%', pexelsId: 35068847 },
  money: { pos: '50% 45%', pexelsId: 7534796 },
  housing: { pos: '50% 35%', pexelsId: 34365480 },
  family: { pos: '50% 38%', pexelsId: 6482351 },
  health: { pos: '50% 28%', pexelsId: 6129450 },
  'hajj-umrah': { pos: '50% 60%', pexelsId: 26436656 },
  telecom: { pos: '50% 50%', pexelsId: 11341268 },
  embassy: { pos: '50% 55%', pexelsId: 4452530 },
};

export function photoKey(slug: string): PhotoKey {
  return (slug in PHOTOS ? slug : 'home') as PhotoKey;
}
