import type { SiteData } from "@/types/site";

export const salonSite: SiteData = {
  slug: "salon",
  siteName: "hair salon Lino",
  businessType: "美容室・ヘアサロン",
  templateKind: "booking",
  tagline: "\"らしさ\"を引き出す、上質な一軒家サロン。",
  description: "落ち着いた雰囲気の一軒家美容室「hair salon Lino」の公式サイトです。",
  logoText: "hair salon Lino",
  noindex: true,

  theme: {
    primary: "#7F6B59",
    secondary: "#D8CBBB",
    accent: "#956F4E",
    background: "#FFFFFF",
    surface: "#F5F2EE",
    text: "#262220",
    muted: "#746E65",
  },

  contact: {
    phone: "0398765432",
    phoneDisplay: "03-9876-5432",
    email: "info@salon-lino.example.com",
    lineUrl: "https://line.me/R/ti/p/@example-lino",
    reservationUrl: "https://beauty.hotpepper.jp/example/",
    reservationLabel: "ホットペッパー予約",
    instagramUrl: "https://www.instagram.com/example_lino/",
  },

  address: {
    postalCode: "150-0002",
    prefecture: "東京都",
    city: "渋谷区渋谷",
    street: "2-2-2 Linoビル2F",
    mapEmbedUrl: "https://www.google.com/maps?q=渋谷区渋谷&output=embed",
  },

  openingHours: [
    { label: "平日", time: "10:00〜20:00" },
    { label: "土・日・祝", time: "9:00〜19:00" },
  ],
  holidays: "毎週火曜日・第3月曜日",

  hero: {
    title: "\"なりたい\"に寄り添う、\n上質な一軒家サロン。",
    subtitle: "経験豊富なスタイリストが、丁寧なカウンセリングであなたらしいスタイルをご提案します。",
    image: "/images/salon/hero.webp",
    primaryButtonText: "Web予約はこちら",
    primaryButtonHref: "https://beauty.hotpepper.jp/example/",
    secondaryButtonText: "メニューを見る",
    secondaryButtonHref: "#price",
  },

  features: [
    { title: "丁寧なカウンセリング", description: "髪の悩みやなりたいイメージをじっくりお伺いします。", icon: "MessageSquareHeart" },
    { title: "上質なプライベート空間", description: "完全個室ではありませんが、余裕を持った席間隔でゆったりとお過ごしいただけます。", icon: "Home" },
    { title: "髪に優しい薬剤選定", description: "ダメージレベルに合わせて薬剤を使い分け、髪の健康を守ります。", icon: "Sparkles" },
    { title: "アフターケア充実", description: "自宅でのお手入れ方法もスタイリストが丁寧にご案内します。", icon: "HeartHandshake" },
  ],

  services: [
    { title: "カット", description: "骨格や髪質を活かした、再現性の高いカットをご提案します。" },
    { title: "カラー", description: "似合わせを重視したオーダーメイドカラー。トリートメント同時施術も可能です。" },
    { title: "パーマ・縮毛矯正", description: "髪に負担の少ない薬剤で、なめらかな仕上がりを実現します。" },
    { title: "トリートメント", description: "サロン専売の高機能トリートメントで、内側から髪を補修します。" },
  ],

  menuItems: [],

  priceItems: [
    { name: "カット（シャンプー・ブロー込）", price: "¥5,500", duration: "約60分" },
    { name: "カット＋カラー", price: "¥12,000〜", duration: "約120分" },
    { name: "カット＋パーマ", price: "¥14,000〜", duration: "約150分" },
    { name: "縮毛矯正", price: "¥18,000〜", duration: "約180分" },
    { name: "トリートメント（単品）", price: "¥4,000〜", duration: "約30分" },
    { name: "【初回限定】カット＋カラー", price: "¥9,800", description: "初めてのお客様限定メニューです。", duration: "約120分" },
  ],

  staff: [
    { name: "架空 美咲", role: "店長 / スタイリスト", message: "お客様の魅力を最大限に引き出すスタイルをご提案します。", image: "/images/salon/staff-1.webp" },
    { name: "架空 蓮", role: "トップスタイリスト", message: "メンズスタイルからパーマスタイルまで幅広く得意としています。", image: "/images/salon/staff-2.webp" },
    { name: "架空 陽菜", role: "スタイリスト", message: "髪に優しい薬剤選定とカラーリングが得意です。", image: "/images/salon/staff-3.webp" },
  ],

  gallery: [
    { image: "/images/salon/gallery-1.webp" },
    { image: "/images/salon/gallery-2.webp" },
    { image: "/images/salon/gallery-3.webp" },
    { image: "/images/salon/gallery-4.webp" },
    { image: "/images/salon/gallery-5.webp" },
    { image: "/images/salon/gallery-6.webp" },
    { image: "/images/salon/gallery-7.webp" },
    { image: "/images/salon/gallery-8.webp" },
  ],

  works: [],

  flow: [
    { step: 1, title: "Web予約", description: "ホットペッパーまたはLINEからご希望の日時をご予約ください。" },
    { step: 2, title: "カウンセリング", description: "髪の悩みやなりたいイメージを丁寧にお伺いします。" },
    { step: 3, title: "施術", description: "ご要望に合わせてカット・カラーなどの施術を行います。" },
    { step: 4, title: "アフターケアのご案内", description: "自宅でのお手入れ方法やスタイリング剤をご案内します。" },
  ],

  faq: [
    { question: "初めてでも予約できますか？", answer: "はい、初めてのお客様も大歓迎です。Web予約またはお電話でご予約ください。" },
    { question: "駐車場はありますか？", answer: "専用駐車場はございません。近隣のコインパーキングをご利用ください。" },
    { question: "キャンセルはどうすればいいですか？", answer: "ご予約日の前日までにお電話またはLINEにてご連絡をお願いいたします。" },
    { question: "子供を連れて行っても大丈夫ですか？", answer: "はい、可能です。ただし施術中は目を離さないようご注意をお願いしております。" },
  ],

  company: {
    name: "hair salon Lino",
    representative: "架空 美咲",
    business: "美容室運営",
    area: "東京都渋谷区",
  },

  mobileCtaLabel: "Web予約",
  mobileCtaHref: "https://beauty.hotpepper.jp/example/",
};
