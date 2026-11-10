import type { HubSlug } from './hubs';

type IconName = 'idcard' | 'send' | 'family' | 'car' | 'calculator' | 'transfer' | 'pin' | 'exit';

// Quick-task tiles. Point `href` at the guide once it is published; until then they open the topic page.
export const TASKS: { icon: IconName; hub: HubSlug; en: string; enDesc: string; ur: string; urDesc: string; href?: string }[] = [
  { icon: 'idcard', hub: 'iqama', en: 'Renew your iqama', enDesc: 'Fees, Absher steps and late fines', ur: 'اقامہ کی تجدید', urDesc: 'فیس، ابشر کا طریقہ اور جرمانے' },
  { icon: 'send', hub: 'visas', en: 'Issue an exit re-entry visa', enDesc: 'Single or multiple, fees and validity', ur: 'ایگزٹ ری انٹری ویزا', urDesc: 'سنگل یا ملٹیپل، فیس اور مدت' },
  { icon: 'family', hub: 'visas', en: 'Bring your family', enDesc: 'Visit and permanent family visas', ur: 'فیملی کو بلائیں', urDesc: 'وزٹ اور مستقل فیملی ویزا' },
  { icon: 'car', hub: 'driving', en: 'Check traffic fines', enDesc: 'Look up, pay or object', ur: 'ٹریفک جرمانے', urDesc: 'چیک کریں، ادا کریں یا اعتراض کریں' },
  { icon: 'calculator', hub: 'work', en: 'End-of-service benefit', enDesc: 'Calculate what you are owed', ur: 'اختتامِ سروس کی رقم', urDesc: 'اپنا حق حساب کریں' },
  { icon: 'transfer', hub: 'work', en: 'Change your job', enDesc: 'Qiwa transfer and your rights', ur: 'ملازمت کی تبدیلی', urDesc: 'قوی پر ٹرانسفر اور آپ کے حقوق' },
  { icon: 'pin', hub: 'absher', en: 'Find a postal code', enDesc: 'Every city and district', ur: 'پوسٹل کوڈ', urDesc: 'ہر شہر اور محلے کا کوڈ' },
  { icon: 'exit', hub: 'visas', en: 'Leave Saudi Arabia', enDesc: 'Final exit checklist', ur: 'سعودی عرب سے واپسی', urDesc: 'فائنل ایگزٹ کی چیک لسٹ' },
];

export const POPULAR: { en: string; ur: string }[] = [
  { en: 'Iqama fees 2026', ur: 'اقامہ فیس' },
  { en: 'Exit re-entry', ur: 'ایگزٹ ری انٹری' },
  { en: 'Family visit visa', ur: 'فیملی وزٹ ویزا' },
  { en: 'Traffic fines', ur: 'ٹریفک جرمانے' },
  { en: 'Newborn iqama', ur: 'نومولود کا اقامہ' },
  { en: 'Final exit', ur: 'فائنل ایگزٹ' },
];

// Seasonal banner. Update it before each season (see the seasonal calendar in the plan).
export const SEASONAL = {
  show: true,
  hub: 'hajj-umrah' as HubSlug,
  en: {
    kicker: 'COMING UP',
    title: 'Ramadan 1448 is expected to begin around 8 February 2027',
    text: 'Working hours for private and government sectors, Umrah permits in Ramadan, iftar times and Eid holiday dates. The date depends on the moon sighting.',
    cta: 'Ramadan and Umrah guides',
  },
  ur: {
    kicker: 'جلد آ رہا ہے',
    title: 'رمضان 1448 کا آغاز تقریباً 8 فروری 2027 کو متوقع ہے',
    text: 'سرکاری اور نجی شعبے کے اوقاتِ کار، رمضان میں عمرہ پرمٹ، افطار کے اوقات اور عید کی چھٹیاں۔ حتمی تاریخ چاند دیکھنے پر منحصر ہے۔',
    cta: 'رمضان اور عمرہ کی رہنمائی',
  },
};

export const FIRST_90_DAYS: { hub: HubSlug; en: string; enDesc: string; ur: string }[] = [
  { hub: 'iqama', en: 'Receive your iqama', enDesc: 'Your employer issues it; check its status on Absher', ur: 'اقامہ حاصل کریں' },
  { hub: 'absher', en: 'Activate Absher', enDesc: 'You need it for almost every government service', ur: 'ابشر فعال کریں' },
  { hub: 'absher', en: 'Register on Nafath', enDesc: 'Your digital ID for logging in to services', ur: 'نفاذ پر رجسٹر کریں' },
  { hub: 'telecom', en: 'Get a SIM on your iqama', enDesc: 'And check no extra SIMs are registered to you', ur: 'اپنے اقامہ پر سم لیں' },
  { hub: 'money', en: 'Open a bank account', enDesc: 'For your salary and a Mada card', ur: 'بینک اکاؤنٹ کھولیں' },
  { hub: 'absher', en: 'Register your national address', enDesc: 'Needed for deliveries and many services', ur: 'نیشنل ایڈریس رجسٹر کریں' },
  { hub: 'driving', en: 'Convert your driving licence', enDesc: "If your home country's licence is eligible", ur: 'ڈرائیونگ لائسنس تبدیل کروائیں' },
];
