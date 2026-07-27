import type { SiteData } from "@/types/site";

export const cafeSite: SiteData = {
  slug: "cafe",
  siteName: "Cafe KOMOREBI",
  businessType: "カフェ",
  templateKind: "store",
  tagline: "木漏れ日の下で、ゆっくりとした時間を。",
  description:
    "自家焙煎コーヒーと季節の焼き菓子が楽しめる、ナチュラルテイストのカフェ「Cafe KOMOREBI」の公式サイトです。",
  logoText: "Cafe KOMOREBI",
  noindex: true,

  theme: {
    primary: "#7C5C3E",
    secondary: "#C9A227",
    accent: "#996E32",
    background: "#FBF6EE",
    surface: "#F3E9DA",
    text: "#3B2E22",
    muted: "#756757",
  },

  contact: {
    phone: "0312345678",
    phoneDisplay: "03-1234-5678",
    email: "info@cafe-komorebi.example.com",
    lineUrl: "https://line.me/R/ti/p/@example-komorebi",
    reservationUrl: "https://www.google.com/maps/reserve",
    reservationLabel: "Google予約",
    instagramUrl: "https://www.instagram.com/example_komorebi/",
  },

  address: {
    postalCode: "150-0001",
    prefecture: "東京都",
    city: "渋谷区神宮前",
    street: "3-3-3 木漏れ日ビル1F",
    mapEmbedUrl: "https://www.google.com/maps?q=渋谷区神宮前&output=embed",
  },

  openingHours: [
    { label: "月〜金", time: "8:00〜19:00" },
    { label: "土・日・祝", time: "9:00〜20:00" },
  ],
  holidays: "毎週水曜日",

  hero: {
    title: "木漏れ日の下で、\nほっと一息つける場所。",
    subtitle: "自家焙煎コーヒーと、季節の食材を使った焼き菓子・ランチをご用意しています。",
    image: "/images/cafe/hero.webp",
    primaryButtonText: "メニューを見る",
    primaryButtonHref: "#menu",
    secondaryButtonText: "アクセス",
    secondaryButtonHref: "#access",
  },

  concept: {
    title: "「ただいま」と言いたくなる、\n2軒目の我が家。",
    body: "Cafe KOMOREBIは、表参道の路地裏にひっそりと佇む小さなカフェです。\n大きな窓から差し込む光と、木のぬくもりを感じる店内で、\n一人の時間も、大切な人との時間も、心地よく過ごしていただけます。\n\n豆は毎朝店内で焙煎し、そのときいちばん美味しい状態でご提供。\n焼き菓子はすべて店内の厨房で手作りしています。",
    image: "/images/cafe/concept.webp",
  },

  features: [
    { title: "自家焙煎コーヒー", description: "毎朝店内で焙煎し、香り高い一杯をお届けします。", icon: "Coffee" },
    { title: "こだわりのランチ", description: "季節の野菜を使ったプレートランチを日替わりでご用意。", icon: "Utensils" },
    { title: "Wi-Fi・電源完備", description: "落ち着いた雰囲気の中、お仕事や読書にもご利用いただけます。", icon: "Wifi" },
    { title: "テイクアウト対応", description: "お忙しい方にもコーヒーと焼き菓子をお持ち帰りいただけます。", icon: "ShoppingBag" },
    { title: "ペット同伴OK", description: "テラス席では小型犬同伴でのご利用が可能です。", icon: "PawPrint" },
    { title: "アレルギー対応", description: "一部メニューはアレルゲン対応のご相談を承っております。", icon: "ShieldCheck" },
  ],

  services: [],

  menuItems: [
    { name: "ハンドドリップコーヒー", price: "¥650", description: "厳選した豆を一杯ずつ丁寧に抽出します。", image: "/images/cafe/menu-1.webp", tag: "人気No.1" },
    { name: "本日のランチプレート", price: "¥1,280", description: "季節野菜と選べるメインのワンプレート。", image: "/images/cafe/menu-2.webp", tag: "数量限定" },
    { name: "自家製キャロットケーキ", price: "¥580", description: "しっとり生地にクリームチーズをたっぷりと。", image: "/images/cafe/menu-3.webp" },
    { name: "季節のフルーツタルト", price: "¥680", description: "旬のフルーツを贅沢に盛り付けたタルトです。", image: "/images/cafe/menu-4.webp" },
    { name: "café au lait（アイス/ホット）", price: "¥600", description: "深煎り豆と牛乳のやさしい味わい。", image: "/images/cafe/menu-5.webp" },
    { name: "テイクアウトサンドセット", price: "¥850", description: "ドリンクとセットでお得なテイクアウト限定メニュー。", image: "/images/cafe/menu-6.webp" },
  ],
  priceItems: [],
  staff: [],

  gallery: [
    { image: "/images/cafe/gallery-1.webp" },
    { image: "/images/cafe/gallery-2.webp" },
    { image: "/images/cafe/gallery-3.webp" },
    { image: "/images/cafe/gallery-4.webp" },
    { image: "/images/cafe/gallery-5.webp" },
    { image: "/images/cafe/gallery-6.webp" },
    { image: "/images/cafe/gallery-7.webp" },
    { image: "/images/cafe/gallery-8.webp" },
  ],

  works: [],

  flow: [
    { step: 1, title: "ご来店", description: "予約不要でご来店いただけます。混雑時は少々お待ちいただく場合がございます。" },
    { step: 2, title: "お席へご案内", description: "スタッフが空いているお席へご案内いたします。" },
    { step: 3, title: "ご注文", description: "メニュー表またはレジにてご注文ください。テイクアウトも承っております。" },
    { step: 4, title: "ごゆっくりお過ごしください", description: "木漏れ日の差し込む店内で、くつろぎのひとときをお楽しみください。" },
  ],

  faq: [
    { question: "予約は必要ですか？", answer: "基本的に予約不要でご利用いただけます。10名以上での貸切をご希望の場合はお電話にてご相談ください。" },
    { question: "駐車場はありますか？", answer: "専用駐車場はございません。近隣のコインパーキングをご利用ください。" },
    { question: "テイクアウトはできますか？", answer: "コーヒー・焼き菓子・一部フードメニューはテイクアウト対応しております。" },
    { question: "Wi-Fiや電源は使えますか？", answer: "店内全席でWi-Fiと電源をご利用いただけます。" },
  ],

  company: {
    name: "Cafe KOMOREBI",
    representative: "架空 太郎",
    business: "カフェ運営",
    area: "東京都渋谷区",
  },

  mobileCtaLabel: "予約する",
  mobileCtaHref: "https://www.google.com/maps/reserve",
};
