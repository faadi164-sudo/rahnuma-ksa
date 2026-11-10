export const HUB_SLUGS = [
  'iqama',
  'visas',
  'absher',
  'work',
  'driving',
  'money',
  'housing',
  'family',
  'health',
  'hajj-umrah',
  'telecom',
  'embassy',
] as const;

export type HubSlug = (typeof HUB_SLUGS)[number];

export interface Hub {
  slug: HubSlug;
  en: string;
  ur: string;
  short: string;
  shortUr: string;
  blurb: string;
}

export const HUBS: Hub[] = [
  { slug: 'iqama', en: 'Iqama and residency', ur: 'اقامہ اور رہائش', short: 'Iqama', shortUr: 'اقامہ', blurb: 'Iqama fees, renewal, expiry checks, lost iqama, huroob and Premium Residency.' },
  { slug: 'visas', en: 'Visas and travel', ur: 'ویزا اور سفر', short: 'Visas', shortUr: 'ویزا', blurb: 'Exit re-entry, final exit, family visit and permanent family visas, and travel to GCC countries.' },
  { slug: 'absher', en: 'Absher, Nafath and Jawazat', ur: 'ابشر، نفاذ اور جوازات', short: 'Absher', shortUr: 'ابشر', blurb: 'Registering and using Absher, Nafath, your national address and other government apps.' },
  { slug: 'work', en: 'Work and labor law', ur: 'ملازمت اور لیبر قانون', short: 'Labor law', shortUr: 'ملازمت', blurb: 'Your rights under Saudi labor law, Qiwa, GOSI, end-of-service benefit, job transfers and Saudization.' },
  { slug: 'driving', en: 'Driving and traffic fines', ur: 'ڈرائیونگ اور ٹریفک جرمانے', short: 'Driving', shortUr: 'ڈرائیونگ', blurb: 'Driving licences, licence conversion, traffic fines, accidents and vehicle authorisations.' },
  { slug: 'money', en: 'Money and banking', ur: 'پیسہ اور بینکنگ', short: 'Money', shortUr: 'پیسہ', blurb: 'Bank accounts, sending money home, bills and the cost of living.' },
  { slug: 'housing', en: 'Housing and Ejar', ur: 'رہائش اور ایجار', short: 'Housing', shortUr: 'رہائش', blurb: 'Renting with Ejar, utilities and the 2026 rules on expat property ownership.' },
  { slug: 'family', en: 'Family and schools', ur: 'فیملی اور اسکول', short: 'Family', shortUr: 'فیملی', blurb: 'Newborns, dependents, school admissions and family paperwork.' },
  { slug: 'health', en: 'Health insurance', ur: 'ہیلتھ انشورنس', short: 'Health', shortUr: 'صحت', blurb: 'What your health insurance covers and how to use it.' },
  { slug: 'hajj-umrah', en: 'Hajj and Umrah', ur: 'حج اور عمرہ', short: 'Hajj and Umrah', shortUr: 'حج و عمرہ', blurb: 'Umrah permits on Nusuk, Hajj rules for residents, Ramadan and Eid.' },
  { slug: 'telecom', en: 'Telecom and SIMs', ur: 'موبائل اور سم', short: 'Telecom', shortUr: 'موبائل', blurb: 'SIM cards, checking SIMs on your iqama, and mobile packages.' },
  { slug: 'embassy', en: 'Embassy services', ur: 'سفارت خانے کی خدمات', short: 'Embassy', shortUr: 'سفارت خانہ', blurb: 'Passport renewal and consulate appointments for Pakistani and Indian residents.' },
];

export const NAV_HUBS: HubSlug[] = ['iqama', 'visas', 'absher', 'work', 'driving', 'money', 'family', 'hajj-umrah'];

export function hubBySlug(slug: string): Hub | undefined {
  return HUBS.find((h) => h.slug === slug);
}
