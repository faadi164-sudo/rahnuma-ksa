export interface Tool {
  slug: string;
  icon: 'idcard' | 'calculator' | 'pin' | 'calendar';
  en: string;
  ur: string;
  desc: string;
  descUr: string;
}

export const TOOLS: Tool[] = [
  {
    slug: 'iqama-fee-calculator',
    icon: 'idcard',
    en: 'Iqama and dependent fee calculator',
    ur: 'اقامہ اور فیملی فیس کیلکولیٹر',
    desc: 'What you and your employer pay for the iqama, work permit and each family member.',
    descUr: 'آپ اور آپ کا ادارہ اقامہ، ورک پرمٹ اور فیملی کے ہر فرد کے لیے کتنا ادا کرتے ہیں۔',
  },
  {
    slug: 'end-of-service-calculator',
    icon: 'calculator',
    en: 'End-of-service calculator',
    ur: 'اختتامِ سروس کیلکولیٹر',
    desc: 'Your end-of-service award under the Saudi labor law, for resignation or termination.',
    descUr: 'استعفیٰ یا برطرفی پر سعودی لیبر قانون کے مطابق آپ کا اختتامِ سروس ایوارڈ۔',
  },
  {
    slug: 'postal-code-finder',
    icon: 'pin',
    en: 'Postal code finder',
    ur: 'پوسٹل کوڈ تلاش کریں',
    desc: 'Find the postal region for any city or district, decode a code, and get your exact one.',
    descUr: 'کسی بھی شہر یا محلے کا پوسٹل ریجن معلوم کریں اور اپنا درست کوڈ حاصل کریں۔',
  },
  {
    slug: 'hijri-converter',
    icon: 'calendar',
    en: 'Hijri and Gregorian converter',
    ur: 'ہجری اور عیسوی تاریخ',
    desc: 'Convert dates on the Umm al-Qura calendar and count the days left on your iqama.',
    descUr: 'ام القریٰ کیلنڈر پر تاریخ تبدیل کریں اور اقامہ کے باقی دن گنیں۔',
  },
];
