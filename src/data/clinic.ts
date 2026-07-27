import type { SiteData } from "@/types/site";

export const clinicSite: SiteData = {
  slug: "clinic",
  siteName: "ひなた整骨院",
  businessType: "整骨院・整体院",
  templateKind: "booking",
  tagline: "地域のみなさまの \"動ける毎日\" を支えます。",
  description: "腰痛・肩こり・産後ケアなど幅広い施術に対応する地域密着型整骨院「ひなた整骨院」の公式サイトです。",
  logoText: "ひなた整骨院",
  noindex: true,

  theme: {
    primary: "#2F6690",
    secondary: "#7FB3D5",
    accent: "#41835A",
    background: "#FFFFFF",
    surface: "#EEF5F9",
    text: "#1F2937",
    muted: "#63717B",
  },

  contact: {
    phone: "0355556666",
    phoneDisplay: "03-5555-6666",
    email: "info@hinata-seikotsu.example.com",
    lineUrl: "https://line.me/R/ti/p/@example-hinata",
    reservationUrl: "https://www.google.com/maps/reserve",
    reservationLabel: "Web予約",
  },

  address: {
    postalCode: "156-0043",
    prefecture: "東京都",
    city: "世田谷区松原",
    street: "5-5-5 ひなたビル1F",
    mapEmbedUrl: "https://www.google.com/maps?q=世田谷区松原&output=embed",
  },

  openingHours: [
    { label: "月・火・木・金", time: "9:00〜12:30 / 15:00〜20:00" },
    { label: "土", time: "9:00〜15:00（土曜は昼休みなし）" },
  ],
  holidays: "水曜日・日曜日・祝日",

  hero: {
    title: "その痛み、\n一人で抱えていませんか。",
    subtitle: "腰痛・肩こり・産後の不調・スポーツ外傷まで、地域密着で丁寧に向き合います。",
    image: "/images/clinic/hero.webp",
    primaryButtonText: "電話で予約する",
    primaryButtonHref: "tel:0355556666",
    secondaryButtonText: "施術内容を見る",
    secondaryButtonHref: "#services",
  },

  features: [
    { title: "丁寧なカウンセリング", description: "施術前に体の状態や生活習慣を詳しくお伺いし、原因を一緒に探ります。", icon: "Stethoscope" },
    { title: "交通事故対応", description: "交通事故によるケガの施術に対応しています（保険会社との調整もサポート）。", icon: "Car" },
    { title: "産後ケアメニュー", description: "骨盤まわりの不調に悩む産後のお母様向けメニューをご用意しています。", icon: "Baby" },
    { title: "地域密着30年（想定）", description: "地域のみなさまに長く通っていただける、身近な整骨院を目指しています。", icon: "MapPin" },
  ],

  services: [
    { title: "腰痛・肩こり施術", description: "日常生活の姿勢や生活習慣からくる慢性的な不調にアプローチします。" },
    { title: "産後骨盤ケア", description: "出産後の骨盤の歪みや不調に合わせた施術プランをご提案します。" },
    { title: "スポーツ外傷施術", description: "捻挫・肉離れなど運動によるケガの施術に対応しています。" },
    { title: "交通事故施術", description: "むちうちなど交通事故によるケガの施術・保険手続きのサポートを行います。" },
  ],

  menuItems: [],

  priceItems: [
    { name: "初検料（初回のみ）", price: "¥1,000" },
    { name: "施術料（保険適用）", price: "自己負担分（3割の場合 目安¥500〜）", description: "症状により変動します。" },
    { name: "自費施術（骨盤矯正など）", price: "¥3,000〜", duration: "約20分" },
    { name: "産後骨盤ケアコース", price: "¥4,000〜", duration: "約30分" },
  ],

  staff: [
    { name: "架空 陽介", role: "院長 / 柔道整復師", message: "一人ひとりの体の状態に合わせた施術を心がけています。断定的な効果の保証はできませんが、できる限り改善のお手伝いをいたします。", image: "/images/clinic/staff-1.webp" },
    { name: "架空 さくら", role: "柔道整復師", message: "産後ケア・女性特有の不調のご相談も承っております。", image: "/images/clinic/staff-2.webp" },
  ],

  gallery: [
    { image: "/images/clinic/gallery-1.webp" },
    { image: "/images/clinic/gallery-2.webp" },
    { image: "/images/clinic/gallery-3.webp" },
    { image: "/images/clinic/gallery-4.webp" },
    { image: "/images/clinic/gallery-5.webp" },
    { image: "/images/clinic/gallery-6.webp" },
  ],

  works: [],

  flow: [
    { step: 1, title: "ご予約・ご来院", description: "お電話・LINE・Web予約からご都合の良い時間をご予約ください。" },
    { step: 2, title: "カウンセリング・検査", description: "症状や生活習慣を詳しくお伺いし、体の状態を確認します。" },
    { step: 3, title: "施術", description: "検査結果をもとに、お一人おひとりに合わせた施術を行います。" },
    { step: 4, title: "今後の通院プランのご案内", description: "無理のない通院ペースと、自宅でできるセルフケアをご案内します。" },
  ],

  faq: [
    { question: "保険は使えますか？", answer: "外傷性の症状（ねんざ・打撲・肉離れなど）は保険適用が可能です。詳しくはご来院時にご相談ください。" },
    { question: "初めてでも予約は必要ですか？", answer: "予約優先制です。当日ご予約なしでも空きがあればご案内可能ですので、お気軽にお電話ください。" },
    { question: "交通事故の施術は対応していますか？", answer: "対応しております。保険会社との調整についてもサポートいたしますのでご相談ください。" },
    { question: "施術は痛いですか？", answer: "強い刺激を避け、お身体の状態に合わせた施術を行いますのでご安心ください。" },
  ],

  company: {
    name: "ひなた整骨院",
    representative: "架空 陽介",
    business: "整骨院運営",
    area: "東京都世田谷区",
  },

  mobileCtaLabel: "電話で予約",
  mobileCtaHref: "tel:0355556666",
};
