// One place for site-wide settings. Change these before launch.
export const SITE = {
  name: 'Living KSA',
  tagline: 'Saudi expat guide',
  description:
    'Step-by-step guides for expats in Saudi Arabia: iqama, visas, Absher, labor law and daily life. Official sources and a last-checked date on every guide. In English and Urdu.',
  descriptionUr:
    'سعودی عرب میں مقیم افراد کے لیے مرحلہ وار رہنمائی: اقامہ، ویزا، ابشر اور لیبر قانون۔ ہر رہنمائی میں سرکاری ذریعہ اور آخری تصدیق کی تاریخ۔',
  // TODO before launch: your real details.
  owner: 'Fawad Ahmed',
  // Leave empty until real ones exist; the site hides email and WhatsApp links while they are empty.
  email: '',
  whatsappUrl: '',
  // Google tag (Google Analytics 4 property "Living KSA (livingksa.com)").
  googleTagId: 'GTM-P3CLL7QQ',
  // Turn on only after AdSense approval.
  adsEnabled: false,
};

export const HAS_EMAIL = SITE.email.includes('@');
export const HAS_WHATSAPP = /^https?:\/\//.test(SITE.whatsappUrl);

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

/** A mailto link when a contact email is set, otherwise the contact page. */
export function contactHref(subject = '', body = ''): string {
  if (!HAS_EMAIL) return url('contact/');
  const q = [subject && `subject=${encodeURIComponent(subject)}`, body && `body=${encodeURIComponent(body)}`].filter(Boolean).join('&');
  return `mailto:${SITE.email}${q ? '?' + q : ''}`;
}

/** WhatsApp share link with a prefilled message. */
export function waShare(text: string, link: string): string {
  return `https://wa.me/?text=${encodeURIComponent(text + '\n' + link)}`;
}
