// One place for site-wide settings. Change these before launch.
export const SITE = {
  name: 'Rahnuma KSA',
  tagline: 'Saudi expat guide',
  description:
    'Step-by-step guides for expats in Saudi Arabia: iqama, visas, Absher, labor law and daily life. Official sources and a last-checked date on every guide. In English and Urdu.',
  descriptionUr:
    'سعودی عرب میں مقیم افراد کے لیے مرحلہ وار رہنمائی: اقامہ، ویزا، ابشر اور لیبر قانون۔ ہر رہنمائی میں سرکاری ذریعہ اور آخری تصدیق کی تاریخ۔',
  // TODO before launch: your real details.
  owner: '[Your name]',
  email: 'hello@example.com',
  whatsappUrl: '#whatsapp',
  // Turn on only after AdSense approval.
  adsEnabled: false,
};

/** Build a link that works both on GitHub Pages (/repo/...) and on a custom domain. */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.replace(/^\//, '');
  return `${base}/${clean}`;
}

export function formatDate(date: Date, lang: 'en' | 'ur' = 'en'): string {
  return new Intl.DateTimeFormat(lang === 'ur' ? 'ur-PK' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}
