import type { SiteData } from "@/types/site";

export const beautySite: SiteData = {
  slug: "beauty",
  siteName: "private salon Luana",
  businessType: "ネイル・エステサロン",
  templateKind: "booking",
  tagline: "わたしを、いちばん好きになる時間。",
  description: "完全予約制・女性専用のプライベートサロン「private salon Luana」の公式サイトです。",
  logoText: "private salon Luana",
  noindex: true,

  theme: {
    primary: "#A45543",
    secondary: "#E7C9BE",
    accent: "#92713F",
    background: "#FFF9F6",
    surface: "#F7EAE3",
    text: "#3A2C28",
    muted: "#7B675F",
  },

  contact: {
    phone: "0345678901",
    phoneDisplay: "03-4567-8901",
    email: "info@salon-luana.example.com",
    lineUrl: "https://line.me/R/ti/p/@example-luana",
    reservationUrl: "https://beauty.hotpepper.jp/example-luana/",
    reservationLabel: "ネット予約",
    instagramUrl: "https://www.instagram.com/example_luana/",
  },

  address: {
    postalCode: "150-0021",
    prefecture: "東京都",
    city: "渋谷区恵比寿",
    street: "4-4-4 Luanaレジデンス3F",
    mapEmbedUrl: "https://www.google.com/maps?q=渋谷区恵比寿&output=embed",
  },

  openingHours: [
    { label: "平日", time: "11:00〜21:00（最終受付19:30）" },
    { label: "土・日・祝", time: "10:00〜18:00（最終受付16:30）" },
  ],
  holidays: "毎週月曜日",

  hero: {
    title: "完全予約制・女性専用の\nプライベートサロン。",
    subtitle: "ネイル・まつげ・フェイシャルエステで、内側から輝く \"わたし\" へ。",
    image: "/images/beauty/hero.webp",
    primaryButtonText: "ネット予約はこちら",
    primaryButtonHref: "https://beauty.hotpepper.jp/example-luana/",
    secondaryButtonText: "メニューを見る",
    secondaryButtonHref: "#price",
  },

  features: [
    { title: "完全予約制", description: "お客様一人ひとりの時間を大切にするため、完全予約制で運営しています。", icon: "CalendarCheck" },
    { title: "女性専用サロン", description: "女性スタッフのみが施術を担当。安心してお過ごしいただけます。", icon: "UserCheck" },
    { title: "個室スペース完備", description: "周りを気にせずリラックスできる個室をご用意しています。", icon: "DoorClosed" },
    { title: "上質なオーガニック製品", description: "肌に優しいオーガニック素材を使用したメニューをご用意しています。", icon: "Leaf" },
  ],

  services: [],

  menuItems: [],

  priceItems: [
    { name: "ジェルネイル（フルカラー）", price: "¥7,000〜", duration: "約90分" },
    { name: "ネイルオフ", price: "¥1,500〜", duration: "約20分" },
    { name: "まつげエクステ（フラット120本）", price: "¥8,500", duration: "約90分" },
    { name: "フェイシャルエステ（60分コース）", price: "¥11,000", duration: "約60分" },
    { name: "フェイシャル＋デコルテケア", price: "¥15,000", duration: "約90分" },
    { name: "【初回限定】フェイシャル体験", price: "¥6,000", description: "初めてのお客様限定のお試しコースです。", duration: "約60分" },
  ],

  staff: [
    { name: "架空 るな", role: "オーナー / エステティシャン", message: "お客様の肌の悩みに寄り添った施術をご提案します。", image: "/images/beauty/staff-1.webp" },
    { name: "架空 かのん", role: "ネイリスト", message: "トレンドを取り入れつつ、長持ちするデザインが得意です。", image: "/images/beauty/staff-2.webp" },
  ],

  gallery: [
    { image: "/images/beauty/gallery-1.webp" },
    { image: "/images/beauty/gallery-2.webp" },
    { image: "/images/beauty/gallery-3.webp" },
    { image: "/images/beauty/gallery-4.webp" },
    { image: "/images/beauty/gallery-5.webp" },
    { image: "/images/beauty/gallery-6.webp" },
    { image: "/images/beauty/gallery-7.webp" },
    { image: "/images/beauty/gallery-8.webp" },
  ],

  works: [],

  flow: [
    { step: 1, title: "ご予約", description: "ネット予約・LINE・お電話のいずれかでご希望の日時をご予約ください。" },
    { step: 2, title: "カウンセリング", description: "肌やお爪の状態、ご希望の仕上がりを丁寧にお伺いします。" },
    { step: 3, title: "施術", description: "リラックスできる個室空間で施術を行います。" },
    { step: 4, title: "アフターカウンセリング", description: "自宅でのケア方法やおすすめの来店周期をご案内します。" },
  ],

  faq: [
    { question: "完全予約制とのことですが、当日予約は可能ですか？", answer: "空き状況によりご案内可能です。まずはLINEまたはお電話にてお問い合わせください。" },
    { question: "男性の利用はできますか？", answer: "当サロンは女性専用サロンのため、男性のご利用はご遠慮いただいております。" },
    { question: "施術中に痛みはありますか？", answer: "個人差がありますが、お客様の体調に合わせて施術強度を調整いたしますのでご安心ください。" },
    { question: "駐車場はありますか？", answer: "専用駐車場はございません。近隣のコインパーキングをご利用ください。" },
  ],

  company: {
    name: "private salon Luana",
    representative: "架空 るな",
    business: "ネイル・エステサロン運営",
    area: "東京都渋谷区",
  },

  mobileCtaLabel: "ネット予約",
  mobileCtaHref: "https://beauty.hotpepper.jp/example-luana/",
};
