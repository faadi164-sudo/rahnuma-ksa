// Short introductions shown at the top of each topic page, in English and Urdu.
// Every fact here comes from one of the topic's guides, which carry the sources.
// `start` lists the guides to read first (guide slugs), or a calculator as 'tools/<slug>'.
import type { HubSlug } from './hubs';

export interface HubIntro {
  en: string[];
  ur: string[];
  blurbUr: string;
  start: string[];
}

export const HUB_INTROS: Record<HubSlug, HubIntro> = {
  iqama: {
    en: [
      'Your iqama is your residence permit, and almost every service in Saudi Arabia, from Absher to banks and SIM cards, checks that it is valid. A private-sector worker’s iqama fee is SAR 650 a year, paid by the employer along with the SAR 800 monthly work permit levy. Each dependent or companion on your iqama costs SAR 400 a month.',
      'The card is now valid for five years, but the residency itself is still renewed on its usual cycle through Absher or Muqeem. You don’t need to carry the plastic card: the digital iqama in the Absher app is accepted. An expired iqama brings late fines and blocks exit re-entry and final exit visas, so check the expiry date early.',
      'These guides cover fees and renewals, expiry checks, lost cards, leaving with an expired iqama, and Premium Residency for living here without an employer sponsor.',
      'Residency can be renewed for 3, 6, 9 or 12 months at a time, so many families renew every quarter and pay the dependent fee with each renewal.',
    ],
    ur: [
      'اقامہ آپ کا رہائشی اجازت نامہ ہے، اور سعودی عرب میں تقریباً ہر سروس، ابشر سے لے کر بینک اور سم کارڈ تک، اس کا کارآمد ہونا چیک کرتی ہے۔ نجی شعبے کے ملازم کی اقامہ فیس سالانہ 650 ریال ہے، جو آجر 800 ریال ماہانہ ورک پرمٹ لیوی کے ساتھ ادا کرتا ہے۔ آپ کے اقامہ پر ہر ڈیپنڈنٹ یا مرافق کی فیس 400 ریال ماہانہ ہے۔',
      'کارڈ اب پانچ سال کے لیے کارآمد ہے، لیکن رہائش کی تجدید اب بھی معمول کے مطابق ابشر یا مقیم سے ہوتی ہے۔ پلاسٹک کارڈ ساتھ رکھنا ضروری نہیں: ابشر ایپ میں ڈیجیٹل اقامہ قبول ہے۔ ختم شدہ اقامہ پر تاخیر کے جرمانے لگتے ہیں اور ایگزٹ ری انٹری اور فائنل ایگزٹ ویزا رک جاتے ہیں، اس لیے میعاد پہلے سے چیک کریں۔',
      'ان رہنمائیوں میں فیس اور تجدید، میعاد چیک کرنا، گمشدہ کارڈ، ختم شدہ اقامہ کے ساتھ ملک چھوڑنا، اور بغیر کفیل رہنے کے لیے پریمیم ریزیڈنسی شامل ہیں۔',
      'رہائش کی تجدید ایک وقت میں 3، 6، 9 یا 12 ماہ کے لیے ہو سکتی ہے، اس لیے بہت سے خاندان ہر تین ماہ بعد تجدید کراتے ہیں اور ہر تجدید کے ساتھ ڈیپنڈنٹ فیس ادا کرتے ہیں۔',
    ],
    blurbUr: 'اقامہ کی فیس، تجدید، میعاد، گمشدہ اقامہ، ہروب اور پریمیم ریزیڈنسی۔',
    start: ['iqama-fees', 'check-iqama-expiry-date', 'renew-family-iqama-absher'],
  },
  visas: {
    en: [
      'Most trips in and out of Saudi Arabia start with a visa issued against your iqama. A single exit re-entry visa costs SAR 200 for up to two months and a multiple visa SAR 500 for three months, with extra months charged on top. If you are already abroad, extending it costs double.',
      'A final exit visa is valid for 60 days and cannot be extended. It needs a passport with at least 60 days left, cleared dues and no unpaid violations. Leaving on a final exit in the normal way carries no ban on coming back.',
      'For relatives, the family visit visa applied for on the Ministry of Foreign Affairs platform is the main route, and every visitor needs medical insurance.',
      'An exit re-entry visa needs your traffic fines paid and a passport with at least 90 days left, and the fee isn’t refunded if you cancel. A family visit visa can be extended in Absher from seven days before it expires, up to 180 days in total from entry.',
    ],
    ur: [
      'سعودی عرب سے آنے جانے کے زیادہ تر سفر آپ کے اقامہ پر جاری ہونے والے ویزا سے شروع ہوتے ہیں۔ سنگل ایگزٹ ری انٹری ویزا دو ماہ تک 200 ریال کا اور ملٹیپل ویزا تین ماہ کے لیے 500 ریال کا ہے، اور اضافی مہینوں کی فیس الگ ہے۔ اگر آپ پہلے ہی بیرون ملک ہیں تو توسیع کی فیس دگنی ہوتی ہے۔',
      'فائنل ایگزٹ ویزا 60 دن کے لیے کارآمد ہے اور اس میں توسیع نہیں ہو سکتی۔ اس کے لیے پاسپورٹ کی کم از کم 60 دن میعاد، تمام واجبات کی ادائیگی اور کوئی بقایا خلاف ورزی نہ ہونا ضروری ہے۔ معمول کے مطابق فائنل ایگزٹ پر جانے سے واپسی پر کوئی پابندی نہیں لگتی۔',
      'رشتہ داروں کے لیے وزارتِ خارجہ کے پلیٹ فارم پر فیملی وزٹ ویزا بنیادی راستہ ہے، اور ہر وزیٹر کے لیے میڈیکل انشورنس ضروری ہے۔',
      'ایگزٹ ری انٹری ویزا کے لیے ٹریفک جرمانوں کی ادائیگی اور کم از کم 90 دن میعاد والا پاسپورٹ ضروری ہے، اور منسوخ کرنے پر فیس واپس نہیں ہوتی۔ فیملی وزٹ ویزا کی میعاد ختم ہونے سے سات دن پہلے سے ابشر میں توسیع ہو سکتی ہے، داخلے سے کل 180 دن تک۔',
    ],
    blurbUr: 'ایگزٹ ری انٹری، فائنل ایگزٹ، فیملی وزٹ اور مستقل فیملی ویزا۔',
    start: ['exit-re-entry-visa', 'final-exit-checklist', 'family-visit-visa'],
  },
  absher: {
    en: [
      'Absher is the Ministry of Interior’s platform for residents: your digital iqama, family visas, traffic services, reports and travel-ban checks all live there. You register with your iqama number and a Saudi mobile number in your own name, then activate the account at a self-service kiosk, a bank channel or a Jawazat office.',
      'Once Absher is active, Nafath lets you log in to other government services such as Qiwa, Najiz and the SPL National Address app. Most Absher problems come from the mobile number: it must be registered on your own iqama, and you can change it in the app before logging in, with a face check.',
      'Registering your National Address in the SPL app is free for individuals, and you need it for deliveries, banks and many government services.',
      'Absher Reports let you print official vehicle, licence, accident and violation reports, and you can check for travel restrictions in Absher before you book a trip.',
    ],
    ur: [
      'ابشر وزارتِ داخلہ کا مقیم افراد کے لیے پلیٹ فارم ہے: آپ کا ڈیجیٹل اقامہ، فیملی ویزا، ٹریفک سروسز، رپورٹس اور سفری پابندی کی جانچ سب یہیں ہیں۔ آپ اپنے اقامہ نمبر اور اپنے نام پر رجسٹرڈ سعودی موبائل نمبر سے رجسٹر کرتے ہیں، پھر سیلف سروس مشین، بینک یا جوازات کے دفتر سے اکاؤنٹ فعال کرتے ہیں۔',
      'ابشر فعال ہونے کے بعد نفاذ کے ذریعے آپ قوی، ناجز اور SPL نیشنل ایڈریس ایپ جیسی دوسری سرکاری سروسز میں لاگ ان کر سکتے ہیں۔ ابشر کے زیادہ تر مسائل موبائل نمبر سے ہوتے ہیں: نمبر آپ کے اپنے اقامہ پر رجسٹرڈ ہونا چاہیے، اور آپ لاگ ان سے پہلے ایپ میں چہرے کی تصدیق سے اسے بدل سکتے ہیں۔',
      'SPL ایپ میں نیشنل ایڈریس رجسٹر کرنا افراد کے لیے مفت ہے، اور پارسل، بینک اور بہت سی سرکاری سروسز کے لیے ضروری ہے۔',
      'ابشر رپورٹس سے آپ گاڑی، لائسنس، حادثات اور خلاف ورزیوں کی سرکاری رپورٹیں پرنٹ کر سکتے ہیں، اور سفر بک کرنے سے پہلے ابشر میں سفری پابندی بھی چیک کر سکتے ہیں۔',
    ],
    blurbUr: 'ابشر اور نفاذ میں رجسٹریشن اور استعمال، نیشنل ایڈریس اور دوسری سرکاری ایپس۔',
    start: ['absher-registration-and-nafath', 'absher-change-mobile-number', 'check-travel-ban'],
  },
  work: {
    en: [
      'Saudi labor law and the Qiwa platform decide most of your rights at work: your contract, salary, leave and how you leave a job. Check your contract on Qiwa, because that is the version that counts. Amendments in force since 19 February 2025 changed 38 articles, including a formal resignation process with 30 days’ notice.',
      'If your salary is late, the Wage Protection System (Mudad) flags it, and after 3 months unpaid you can move to a new employer without consent. Every dispute starts with the Ministry’s free friendly settlement service, which must come before court.',
      'When you leave, your end-of-service benefit is half a month’s wage for each of the first five years and a full month for each year after that, reduced if you resign early. Our free calculators work out end-of-service, overtime and annual leave.',
      'Annual leave is 21 days, rising to 30 after five years, and the law also gives sick leave, 12 weeks’ maternity leave, paternity leave and paid Hajj leave.',
    ],
    ur: [
      'سعودی لیبر قانون اور قوی پلیٹ فارم کام پر آپ کے زیادہ تر حقوق طے کرتے ہیں: معاہدہ، تنخواہ، چھٹیاں اور ملازمت چھوڑنے کا طریقہ۔ قوی پر اپنا معاہدہ چیک کریں، کیونکہ وہی نسخہ معتبر ہے۔ 19 فروری 2025 سے نافذ ترامیم نے 38 دفعات بدلیں، جن میں 30 دن کے نوٹس کے ساتھ استعفیٰ کا باقاعدہ طریقہ بھی شامل ہے۔',
      'تنخواہ میں تاخیر ہو تو ویج پروٹیکشن سسٹم (مُدد) اس کی نشاندہی کرتا ہے، اور 3 ماہ تنخواہ نہ ملنے پر آپ آجر کی رضامندی کے بغیر نئے آجر کے پاس جا سکتے ہیں۔ ہر تنازعہ وزارت کی مفت فرینڈلی سیٹلمنٹ سروس سے شروع ہوتا ہے، جو عدالت سے پہلے لازمی ہے۔',
      'ملازمت چھوڑنے پر اینڈ آف سروس پہلے پانچ سال ہر سال کی آدھی تنخواہ اور اس کے بعد ہر سال کی پوری تنخواہ ہے، جو جلد استعفیٰ کی صورت میں کم ہو جاتا ہے۔ ہمارے مفت کیلکولیٹرز اینڈ آف سروس، اوور ٹائم اور سالانہ چھٹی کا حساب لگاتے ہیں۔',
      'سالانہ چھٹی 21 دن ہے، جو پانچ سال بعد 30 دن ہو جاتی ہے، اور قانون بیماری کی چھٹی، 12 ہفتے کی میٹرنٹی، پیٹرنٹی اور تنخواہ کے ساتھ حج کی چھٹی بھی دیتا ہے۔',
    ],
    blurbUr: 'لیبر قانون کے تحت آپ کے حقوق، قوی، اینڈ آف سروس، ملازمت کی منتقلی اور سعودائزیشن۔',
    start: ['end-of-service-benefit', 'salary-delayed-what-to-do', 'job-transfer-without-employer-consent'],
  },
  driving: {
    en: [
      'Residents drive on a Saudi licence. Licences from about 48 approved countries, including the US, UK, EU and the GCC, can be swapped without a test after an Efada medical check. Pakistan and India are not on the list, so holders go through a Saudi driving school, which usually costs about SAR 2,500–3,000 for a full course.',
      'A licence costs SAR 40 a year and is renewed on Absher within 180 days of expiry, after the medical check and paying any fines. Fines are checked in Absher or Efaa; paying within 30 days earns a 25% discount. Serious violations also add points, and 24 points in a Hijri year suspend your licence.',
      'Your car’s istimara is renewed online for SAR 100 a year once its Fahas inspection and insurance are valid. After an accident with at least one insured car, report it to Najm.',
      'Visitors can drive on their foreign licence for up to a year from arrival, but residents should convert or get a Saudi licence promptly.',
    ],
    ur: [
      'مقیم افراد سعودی لائسنس پر گاڑی چلاتے ہیں۔ امریکہ، برطانیہ، یورپی یونین اور خلیجی ممالک سمیت تقریباً 48 منظور شدہ ممالک کے لائسنس افادہ میڈیکل کے بعد بغیر ٹیسٹ تبدیل ہو جاتے ہیں۔ پاکستان اور انڈیا اس فہرست میں نہیں، اس لیے انہیں سعودی ڈرائیونگ اسکول سے گزرنا پڑتا ہے، جس کے پورے کورس کا خرچ عموماً 2,500 سے 3,000 ریال ہے۔',
      'لائسنس کی فیس 40 ریال سالانہ ہے اور میعاد ختم ہونے سے 180 دن کے اندر، میڈیکل اور جرمانوں کی ادائیگی کے بعد، ابشر پر تجدید ہوتی ہے۔ جرمانے ابشر یا ایفاء میں چیک کریں؛ 30 دن کے اندر ادائیگی پر 25% رعایت ملتی ہے۔ سنگین خلاف ورزیوں پر پوائنٹس بھی لگتے ہیں، اور ایک ہجری سال میں 24 پوائنٹس پر لائسنس معطل ہو جاتا ہے۔',
      'فحص اور انشورنس کارآمد ہوں تو گاڑی کا استمارہ 100 ریال سالانہ پر آن لائن تجدید ہوتا ہے۔ اگر حادثے میں کم از کم ایک گاڑی انشورڈ ہو تو نجم کو رپورٹ کریں۔',
      'وزیٹرز آمد سے ایک سال تک اپنے غیر ملکی لائسنس پر گاڑی چلا سکتے ہیں، لیکن مقیم افراد کو جلد سعودی لائسنس بنوانا یا تبدیل کرانا چاہیے۔',
    ],
    blurbUr: 'ڈرائیونگ لائسنس، لائسنس کی تبدیلی، ٹریفک جرمانے، حادثات اور گاڑی کی رجسٹریشن۔',
    start: ['renew-driving-licence', 'traffic-violations-check-pay-object', 'convert-foreign-driving-licence'],
  },
  money: {
    en: [
      'To open a Saudi bank account you need a valid iqama, an activated Absher account, Nafath, a mobile number in your own name and a registered National Address. With those, most banks open a current account in their app in minutes.',
      'To send money home, use your bank’s app, a licensed exchange house or a licensed digital wallet, and compare the amount your family actually receives: the exchange-rate margin often costs more than the fee.',
      'For fees you pay to the government, our free calculators work out iqama and dependent fees and exit re-entry visa fees.',
      'Banks must keep 25 core services free, including opening a current account, cash withdrawals and using your mada card in Saudi Arabia, and they may not demand a minimum balance. Your salary is paid into your account through the Wage Protection System (Mudad), and government fees, electricity and water bills are paid through SADAD in your bank app.',
    ],
    ur: [
      'سعودی بینک اکاؤنٹ کھولنے کے لیے کارآمد اقامہ، فعال ابشر اکاؤنٹ، نفاذ، اپنے نام پر رجسٹرڈ موبائل نمبر اور رجسٹرڈ نیشنل ایڈریس ضروری ہیں۔ یہ سب ہوں تو زیادہ تر بینک اپنی ایپ میں چند منٹ میں کرنٹ اکاؤنٹ کھول دیتے ہیں۔',
      'گھر پیسے بھیجنے کے لیے اپنے بینک کی ایپ، لائسنس یافتہ ایکسچینج ہاؤس یا لائسنس یافتہ ڈیجیٹل والٹ استعمال کریں، اور یہ موازنہ کریں کہ آپ کے گھر والوں کو اصل میں کتنی رقم ملتی ہے: ایکسچینج ریٹ کا فرق اکثر فیس سے زیادہ مہنگا پڑتا ہے۔',
      'سرکاری فیسوں کے لیے ہمارے مفت کیلکولیٹرز اقامہ، فیملی اور ایگزٹ ری انٹری ویزا کی فیس کا حساب لگاتے ہیں۔',
      'بینکوں پر لازم ہے کہ 25 بنیادی سروسز مفت رکھیں، جن میں کرنٹ اکاؤنٹ کھولنا، نقد رقم نکالنا اور سعودی عرب میں مدی کارڈ کا استعمال شامل ہے، اور وہ کم از کم بیلنس کا مطالبہ نہیں کر سکتے۔ آپ کی تنخواہ ویج پروٹیکشن سسٹم (مُدد) کے ذریعے آپ کے اکاؤنٹ میں آتی ہے، اور سرکاری فیسیں، بجلی اور پانی کے بل بینک ایپ میں سداد سے ادا ہوتے ہیں۔',
    ],
    blurbUr: 'بینک اکاؤنٹ، گھر پیسے بھیجنا، بل اور روزمرہ اخراجات۔',
    start: ['open-bank-account-saudi-arabia', 'send-money-home-from-saudi-arabia', 'tools/iqama-fee-calculator'],
  },
  housing: {
    en: [
      'Every rental contract should be registered on Ejar. The landlord or a licensed broker creates it, and you accept it as the tenant by SMS. A registered lease also lets the electricity and water accounts move into your name.',
      'Utility prices rise from 1 January 2027: home electricity goes to 21 halalas per kWh for the first 6,000 kWh a month, and water to SAR 1 per cubic metre for the first 15 m³.',
      'Since 22 January 2026, residents can also buy property in approved zones through the Saudi Properties platform.',
      'Ejar leases renew automatically unless either side gives 60 days’ notice, and in Riyadh rents are frozen for five years from 25 September 2025, for existing and new contracts. A fixed monthly electricity charge of SAR 70 to 100 also starts in 2027, replacing the old meter fees. If the electricity account is in your name, keep unpaid bills below SAR 1,000 to avoid disconnection.',
    ],
    ur: [
      'ہر کرایہ نامہ ایجار پر رجسٹر ہونا چاہیے۔ مالک مکان یا لائسنس یافتہ بروکر اسے بناتا ہے، اور آپ کرایہ دار کی حیثیت سے SMS کے ذریعے اسے قبول کرتے ہیں۔ رجسٹرڈ کرایہ نامے سے بجلی اور پانی کے اکاؤنٹ بھی آپ کے نام منتقل ہو سکتے ہیں۔',
      'یکم جنوری 2027 سے یوٹیلیٹی کی قیمتیں بڑھ رہی ہیں: گھریلو بجلی ماہانہ پہلے 6,000 کلو واٹ گھنٹے تک 21 ہللہ فی یونٹ، اور پانی پہلے 15 مکعب میٹر تک 1 ریال فی مکعب میٹر ہوگا۔',
      '22 جنوری 2026 سے مقیم افراد سعودی پراپرٹیز پلیٹ فارم کے ذریعے منظور شدہ علاقوں میں جائیداد بھی خرید سکتے ہیں۔',
      'ایجار کرایہ نامے خودبخود تجدید ہو جاتے ہیں جب تک کوئی فریق 60 دن کا نوٹس نہ دے، اور ریاض میں 25 ستمبر 2025 سے پانچ سال کے لیے پرانے اور نئے دونوں معاہدوں پر کرائے منجمد ہیں۔ 2027 سے بجلی کا 70 سے 100 ریال ماہانہ مقررہ چارج بھی شروع ہو رہا ہے، جو پرانی میٹر فیس کی جگہ لے گا۔ اگر بجلی کا اکاؤنٹ آپ کے نام ہے تو کنکشن کٹنے سے بچنے کے لیے بقایا بل 1,000 ریال سے کم رکھیں۔',
    ],
    blurbUr: 'ایجار پر کرایہ داری، بجلی پانی کے بل، اور غیر ملکیوں کی جائیداد کے 2026 کے قواعد۔',
    start: ['ejar-rental-contract', 'electricity-account-sec', 'expats-buy-property'],
  },
  family: {
    en: [
      'Bringing your family to Saudi Arabia starts with a permanent family visa: apply in Absher, have your employer attest the form through the Chamber of Commerce, and pay the SAR 2,000 visa fee. Each dependent then costs SAR 400 a month on your iqama, including sons over 18, who move from dependent to companion.',
      'A baby born in Saudi Arabia must be registered on Absher within 30 days, then needs a passport from your embassy and an iqama. Since July 2024, a dependent wife can work in health and education through the free Ajeer dependents service without changing sponsorship.',
      'Domestic workers are hired only through Musaned, and school guides cover the Pakistani and Indian community schools.',
      'Your employer must also insure your wife, sons up to 25 and unmarried, non-working daughters. Daughters aged 18 to 25 are renewed with proof they are unmarried, and dependents over 25, other than a wife, must move to their own sponsorship to renew.',
    ],
    ur: [
      'فیملی کو سعودی عرب لانے کا آغاز مستقل فیملی ویزا سے ہوتا ہے: ابشر میں درخواست دیں، آجر سے چیمبر آف کامرس کے ذریعے فارم تصدیق کرائیں، اور 2,000 ریال ویزا فیس ادا کریں۔ پھر آپ کے اقامہ پر ہر ڈیپنڈنٹ کی فیس 400 ریال ماہانہ ہے، جن میں 18 سال سے بڑے بیٹے بھی شامل ہیں جو ڈیپنڈنٹ سے مرافق بن جاتے ہیں۔',
      'سعودی عرب میں پیدا ہونے والے بچے کی 30 دن کے اندر ابشر پر رجسٹریشن ضروری ہے، پھر اپنے سفارت خانے سے پاسپورٹ اور اقامہ بنوانا ہوتا ہے۔ جولائی 2024 سے زیرِ کفالت بیوی کفالت بدلے بغیر مفت اجیر ڈیپنڈنٹس سروس کے ذریعے صحت اور تعلیم کے شعبوں میں کام کر سکتی ہے۔',
      'گھریلو ملازم صرف مساند کے ذریعے رکھے جاتے ہیں، اور اسکولوں کی رہنمائی میں پاکستانی اور انڈین کمیونٹی اسکول شامل ہیں۔',
      'آجر پر آپ کی بیوی، 25 سال تک کے بیٹوں اور غیر شادی شدہ، غیر ملازمت پیشہ بیٹیوں کی انشورنس بھی لازم ہے۔ 18 سے 25 سال کی بیٹیوں کی تجدید غیر شادی شدہ ہونے کے ثبوت کے ساتھ ہوتی ہے، اور بیوی کے علاوہ 25 سال سے بڑے ڈیپنڈنٹس کو تجدید کے لیے اپنی کفالت منتقل کرنی ہوتی ہے۔',
    ],
    blurbUr: 'نومولود بچے، زیرِ کفالت افراد، اسکولوں میں داخلہ اور فیملی کے کاغذات۔',
    start: ['permanent-family-visa', 'newborn-born-in-saudi-arabia', 'pakistani-indian-community-schools'],
  },
  health: {
    en: [
      'You can check whether your health insurance is active with the Council of Health Insurance (CHI) inquiry or the Insurance Authority’s Check Health Insurance service, using your iqama number, a border number if you are new, or a passport number for visit, Umrah and Hajj visas.',
      'In the private sector, your employer must insure you, your wife, sons up to 25 and unmarried, non-working daughters. Parents and siblings you sponsor are not included, so you buy their policy yourself.',
      'Visitors are covered differently: every visit visa and every extension needs medical insurance, which covers emergencies only, up to SAR 100,000 per visitor, from the day they enter Saudi Arabia.',
      'Health insurance must be valid before any iqama is issued or renewed, and each person can only have one policy, so if your wife works, her own employer’s policy comes first. An employer that doesn’t insure covered staff and family must pay the premiums owed plus a fine.',
    ],
    ur: [
      'آپ کی ہیلتھ انشورنس فعال ہے یا نہیں، یہ کونسل آف ہیلتھ انشورنس (CHI) کی انکوائری یا انشورنس اتھارٹی کی چیک ہیلتھ انشورنس سروس سے معلوم کریں۔ اس کے لیے اپنا اقامہ نمبر، نئے آنے والے ہوں تو بارڈر نمبر، اور وزٹ، عمرہ یا حج ویزا کے لیے پاسپورٹ نمبر استعمال کریں۔',
      'نجی شعبے میں آجر پر لازم ہے کہ وہ آپ، آپ کی بیوی، 25 سال تک کے بیٹوں اور غیر شادی شدہ، غیر ملازمت پیشہ بیٹیوں کی انشورنس کرے۔ آپ کی کفالت میں والدین اور بہن بھائی اس میں شامل نہیں، ان کی پالیسی آپ کو خود خریدنی ہوتی ہے۔',
      'وزیٹرز کا معاملہ الگ ہے: ہر وزٹ ویزا اور ہر توسیع کے لیے میڈیکل انشورنس ضروری ہے، جو صرف ایمرجنسی کا احاطہ کرتی ہے، فی وزیٹر 100,000 ریال تک، اور سعودی عرب میں داخلے کے دن سے شروع ہوتی ہے۔',
      'کسی بھی اقامہ کے اجرا یا تجدید سے پہلے ہیلتھ انشورنس کا کارآمد ہونا ضروری ہے، اور ہر شخص کی صرف ایک پالیسی ہو سکتی ہے، اس لیے اگر آپ کی بیوی ملازمت کرتی ہیں تو ان کے اپنے آجر کی پالیسی پہلے لاگو ہوتی ہے۔ جو آجر لازمی ملازمین اور فیملی کی انشورنس نہ کرے اسے واجب پریمیم کے ساتھ جرمانہ بھی ادا کرنا پڑتا ہے۔',
    ],
    blurbUr: 'آپ کی ہیلتھ انشورنس کیا کور کرتی ہے اور اسے کیسے چیک کریں۔',
    start: ['check-health-insurance-iqama', 'visit-visa-medical-insurance'],
  },
  'hajj-umrah': {
    en: [
      'Residents don’t need a visa for Umrah, but everyone needs a Nusuk permit for a set date and time, and praying in the Rawdah in Madinah needs a separate permit. Ramadan slots, especially in the last ten nights, fill quickly.',
      'Hajj from inside the Kingdom needs a valid iqama, registration on Nusuk and a package from a licensed Hajj company, paid through SADAD. Priority goes to people who have not performed Hajj before.',
      'Ramadan 1448 is expected to begin on 8 February 2027, and in 2026 domestic Hajj registration opened in early Ramadan.',
      'Umrah permits on Nusuk are free, and visitors on any visa type, including visit visas, can perform Umrah. Employees who haven’t done Hajj before get 10 to 15 days of paid Hajj leave once, after two consecutive years with the same employer. The minimum age for domestic Hajj is 15, and the Day of Arafah in 1448 is expected on 15 May 2027.',
    ],
    ur: [
      'مقیم افراد کو عمرہ کے لیے ویزا نہیں چاہیے، لیکن ہر ایک کو مقررہ تاریخ اور وقت کے لیے نسک پرمٹ درکار ہے، اور مدینہ میں ریاض الجنہ میں نماز کے لیے الگ پرمٹ چاہیے۔ رمضان کے سلاٹ، خاص طور پر آخری دس راتوں کے، جلد بھر جاتے ہیں۔',
      'اندرونِ ملک سے حج کے لیے کارآمد اقامہ، نسک پر رجسٹریشن اور لائسنس یافتہ حج کمپنی کا پیکیج ضروری ہے، جس کی ادائیگی سداد سے ہوتی ہے۔ ترجیح ان لوگوں کو ملتی ہے جنہوں نے پہلے حج نہیں کیا۔',
      'رمضان 1448 کا آغاز 8 فروری 2027 کو متوقع ہے، اور 2026 میں اندرونِ ملک حج رجسٹریشن رمضان کے شروع میں کھلی تھی۔',
      'نسک پر عمرہ پرمٹ مفت ہیں، اور وزٹ ویزا سمیت ہر قسم کے ویزا والے عمرہ کر سکتے ہیں۔ جن ملازمین نے پہلے حج نہیں کیا انہیں ایک ہی آجر کے ساتھ لگاتار دو سال بعد ایک بار 10 سے 15 دن کی تنخواہ کے ساتھ حج کی چھٹی ملتی ہے۔ اندرونِ ملک حج کے لیے کم از کم عمر 15 سال ہے، اور 1448 میں یومِ عرفہ 15 مئی 2027 کو متوقع ہے۔',
    ],
    blurbUr: 'نسک پر عمرہ پرمٹ، مقیم افراد کے لیے حج کے قواعد، رمضان اور عید۔',
    start: ['umrah-permit-nusuk', 'hajj-for-residents', 'ramadan-2027-saudi-arabia'],
  },
  telecom: {
    en: [
      'You are legally responsible for every SIM registered under your iqama, so it is worth checking the list now and then. The Communications, Space and Technology Commission’s free Mutasil service shows every SIM on your iqama by network, and you can cancel any number you don’t recognise with that network.',
      'Absher and your bank both need a mobile number registered on your own iqama, not a family member’s or your company’s.',
      'Clear old lines before you leave on a final exit, because unpaid phone bills are among the dues that must be settled first.',
      'Every SIM has been tied to the buyer’s fingerprint since 2016. If you can’t give fingerprints, CST’s SIM authentication code works through Nafath, including when you move your number to another network. SIMs you bought for family members before they had an iqama should be replaced with SIMs in their own names. Check your SIM list again after giving your iqama copy to any shop or agent.',
    ],
    ur: [
      'آپ کے اقامہ پر رجسٹرڈ ہر سم کی قانونی ذمہ داری آپ پر ہے، اس لیے وقتاً فوقتاً فہرست چیک کرتے رہیں۔ کمیونیکیشنز، اسپیس اینڈ ٹیکنالوجی کمیشن کی مفت متصل سروس نیٹ ورک کے حساب سے آپ کے اقامہ پر ہر سم دکھاتی ہے، اور جو نمبر آپ نہ پہچانیں اسے اس نیٹ ورک سے منسوخ کرا سکتے ہیں۔',
      'ابشر اور آپ کے بینک دونوں کو ایسا موبائل نمبر چاہیے جو آپ کے اپنے اقامہ پر رجسٹرڈ ہو، فیملی کے کسی فرد یا کمپنی کا نہیں۔',
      'فائنل ایگزٹ سے پہلے پرانی لائنیں ختم کرائیں، کیونکہ فون کے بقایا بل ان واجبات میں شامل ہیں جو پہلے ادا کرنا ضروری ہیں۔',
      '2016 سے ہر سم خریدار کے فنگر پرنٹ سے جڑی ہے۔ اگر آپ فنگر پرنٹ نہ دے سکیں تو CST کا سم تصدیقی کوڈ نفاذ کے ذریعے کام کرتا ہے، نمبر دوسرے نیٹ ورک پر منتقل کرنے کے لیے بھی۔ اقامہ بننے سے پہلے فیملی کے لیے لی گئی سمز کو ان کے اپنے نام کی سمز سے بدل دینا چاہیے۔ کسی دکان یا ایجنٹ کو اقامہ کی کاپی دینے کے بعد اپنی سمز کی فہرست دوبارہ چیک کریں۔',
    ],
    blurbUr: 'سم کارڈ، اپنے اقامہ پر رجسٹرڈ سمز کی جانچ، اور موبائل پیکیجز۔',
    start: ['check-sims-registered-on-iqama', 'absher-change-mobile-number'],
  },
  embassy: {
    en: [
      'Pakistani and Indian residents can renew passports and ID documents through their missions without travelling home. Indians fill in the form on the Global Passport Seva portal and attend a VFS Global centre.',
      'Pakistanis can renew online on the DGIP portal if the passport has expired or has under a year left, with the new passport couriered to the mission, or apply in person at the embassy or consulate. NICOP is easiest through the Pak-ID app, from USD 20 for normal processing.',
      'Keep your passport valid: a final exit needs at least 60 days left on it.',
      'Indian Tatkal (urgent) passports are normally ready within three working days. Since 1 October 2026, the Pakistani consulate in Jeddah handles NADRA and passport services by appointment only. Whatever your nationality, update a new passport in Absher before you travel, and keep at least 90 days’ validity for an exit re-entry visa. If an Indian passport is lost, an Emergency Certificate allows one-way travel home.',
    ],
    ur: [
      'پاکستانی اور انڈین مقیم افراد گھر جائے بغیر اپنے مشن کے ذریعے پاسپورٹ اور شناختی دستاویزات کی تجدید کرا سکتے ہیں۔ انڈین شہری گلوبل پاسپورٹ سیوا پورٹل پر فارم بھرتے ہیں اور VFS Global سینٹر جاتے ہیں۔',
      'پاکستانی اگر پاسپورٹ ختم ہو چکا ہو یا ایک سال سے کم میعاد باقی ہو تو DGIP پورٹل پر آن لائن تجدید کر سکتے ہیں، اور نیا پاسپورٹ کورئیر سے مشن پہنچتا ہے، یا سفارت خانے یا قونصلیٹ میں خود درخواست دے سکتے ہیں۔ نائیکوپ سب سے آسانی سے پاک آئی ڈی ایپ سے بنتا ہے، نارمل پروسیسنگ 20 ڈالر سے۔',
      'پاسپورٹ کارآمد رکھیں: فائنل ایگزٹ کے لیے اس کی کم از کم 60 دن میعاد باقی ہونی چاہیے۔',
      'انڈین تتکال (فوری) پاسپورٹ عموماً تین کاروباری دنوں میں تیار ہو جاتا ہے۔ یکم اکتوبر 2026 سے جدہ میں پاکستانی قونصلیٹ نادرا اور پاسپورٹ سروسز صرف اپائنٹمنٹ پر دیتا ہے۔ آپ کی شہریت جو بھی ہو، سفر سے پہلے نیا پاسپورٹ ابشر میں اپڈیٹ کریں، اور ایگزٹ ری انٹری ویزا کے لیے پاسپورٹ کی کم از کم 90 دن میعاد رکھیں۔ انڈین پاسپورٹ گم ہو جائے تو ایمرجنسی سرٹیفکیٹ سے یک طرفہ وطن واپسی ہو سکتی ہے۔',
    ],
    blurbUr: 'پاکستانی اور انڈین مقیم افراد کے لیے پاسپورٹ کی تجدید اور قونصلیٹ اپائنٹمنٹ۔',
    start: ['pakistani-passport-renewal-saudi-arabia', 'indian-passport-renewal-saudi-arabia', 'nicop-nadra-services-saudi-arabia'],
  },
};
