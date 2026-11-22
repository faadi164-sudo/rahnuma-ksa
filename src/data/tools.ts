export interface Tool {
  slug: string;
  icon: 'idcard' | 'calculator' | 'pin' | 'calendar' | 'send' | 'clock' | 'sun';
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
    ur: 'اینڈ آف سروس کیلکولیٹر',
    desc: 'Your end-of-service award under the Saudi labor law, for resignation or termination.',
    descUr: 'استعفیٰ یا برطرفی پر سعودی لیبر قانون کے مطابق آپ کا اینڈ آف سروس ایوارڈ۔',
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
  {
    slug: 'exit-reentry-visa-fee-calculator',
    icon: 'send',
    en: 'Exit re-entry visa fee calculator',
    ur: 'ایگزٹ ری انٹری ویزا فیس کیلکولیٹر',
    desc: 'Single or multiple visa fee for any number of months and people, and the doubled fee to extend from abroad.',
    descUr: 'سنگل یا ملٹی پل ویزا کی فیس، مہینوں اور افراد کے حساب سے، اور بیرونِ ملک سے توسیع کی دگنی فیس۔',
  },
  {
    slug: 'overtime-calculator',
    icon: 'clock',
    en: 'Overtime pay calculator',
    ur: 'اوور ٹائم کیلکولیٹر',
    desc: 'Overtime pay under Article 107: your hourly wage plus 50% of basic, including holiday hours.',
    descUr: 'دفعہ 107 کے مطابق اوور ٹائم: فی گھنٹہ اجرت اور بنیادی تنخواہ کا 50%، چھٹی کے گھنٹوں سمیت۔',
  },
  {
    slug: 'annual-leave-calculator',
    icon: 'sun',
    en: 'Annual leave calculator',
    ur: 'سالانہ چھٹی کیلکولیٹر',
    desc: 'Your 21 or 30 days of annual leave, the leave pay, and the cash value of unused days when you leave.',
    descUr: 'آپ کی 21 یا 30 دن کی سالانہ چھٹی، چھٹی کی تنخواہ، اور ملازمت چھوڑنے پر بچی چھٹیوں کی رقم۔',
  },
];
