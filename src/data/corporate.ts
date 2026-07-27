import type { SiteData } from "@/types/site";

export const corporateSite: SiteData = {
  slug: "corporate",
  siteName: "株式会社ネクストワーク",
  businessType: "業務支援・IT支援会社",
  templateKind: "corporate",
  tagline: "現場の \"あったらいいな\" を、テクノロジーで実現する。",
  description: "中小企業向けに業務支援・IT導入支援を手がける「株式会社ネクストワーク」の公式サイトです。",
  logoText: "株式会社ネクストワーク",
  noindex: true,

  theme: {
    primary: "#1E3A5F",
    secondary: "#3E5C7A",
    accent: "#2C78C9",
    background: "#FFFFFF",
    surface: "#F3F5F7",
    text: "#1E293B",
    muted: "#617187",
  },

  contact: {
    phone: "0366667777",
    phoneDisplay: "03-6666-7777",
    email: "info@nextwork.example.com",
  },

  address: {
    postalCode: "100-0005",
    prefecture: "東京都",
    city: "千代田区丸の内",
    street: "1-1-1 ネクストワークビル10F",
    mapEmbedUrl: "https://www.google.com/maps?q=千代田区丸の内&output=embed",
  },

  openingHours: [{ label: "平日", time: "9:00〜18:00" }],
  holidays: "土曜日・日曜日・祝日",

  hero: {
    title: "現場の負担を減らし、\n本業に集中できる環境を。",
    subtitle: "業務効率化・IT導入支援を通じて、中小企業の成長を支援します。",
    image: "/images/corporate/hero.webp",
    primaryButtonText: "サービス資料請求",
    primaryButtonHref: "#contact",
    secondaryButtonText: "事業内容を見る",
    secondaryButtonHref: "#services",
  },

  concept: {
    title: "「うちには無理」を、\n一緒に解決していきます。",
    body: "株式会社ネクストワークは、中小企業・地域密着企業の業務支援を専門とする会社です。\nITツールの導入から社内業務フローの見直しまで、現場に寄り添った支援を行っています。\n\n専任担当者が導入から定着までしっかり伴走しますので、\n「ITは苦手」という企業様でも安心してご相談いただけます。",
    image: "/images/corporate/concept.webp",
  },

  services: [
    { title: "業務効率化コンサルティング", description: "現状の業務フローを分析し、無駄のない業務プロセスをご提案します。" },
    { title: "ITツール導入支援", description: "勤怠管理・顧客管理など、自社に合ったITツールの選定・導入をサポートします。" },
    { title: "社内研修・定着支援", description: "導入したツールが現場に定着するまで、研修・フォローアップを行います。" },
    { title: "業務委託・アウトソーシング", description: "事務作業やバックオフィス業務の代行サービスをご提供します。" },
  ],

  features: [
    { title: "中小企業支援の実績", description: "業種を問わず、これまで数多くの中小企業様の業務改善をご支援してきました。", icon: "TrendingUp" },
    { title: "専任担当制", description: "導入前から運用開始後まで、同じ担当者が一貫してサポートします。", icon: "UserCheck" },
    { title: "現場目線の提案", description: "机上の空論ではなく、現場の実情に合わせた無理のないご提案を行います。", icon: "HandHeart" },
    { title: "柔軟な料金プラン", description: "企業規模やご予算に応じた柔軟なプランをご用意しています。", icon: "Settings" },
  ],

  menuItems: [],
  priceItems: [],
  staff: [],
  gallery: [],
  works: [],

  flow: [
    { step: 1, title: "お問い合わせ", description: "まずはフォームまたはお電話にて現状の課題をお聞かせください。" },
    { step: 2, title: "ヒアリング・現状分析", description: "担当者が訪問またはオンラインで現状の業務フローをヒアリングします。" },
    { step: 3, title: "ご提案・お見積もり", description: "課題に合わせた改善プランとお見積もりをご提示します。" },
    { step: 4, title: "導入・運用開始", description: "ツール導入や業務フローの変更を段階的に進め、定着までサポートします。" },
  ],

  faq: [
    { question: "小さな会社でも相談できますか？", answer: "はい、従業員数名の企業様からのご相談も多数お受けしております。" },
    { question: "ITツールに詳しい担当者がいなくても大丈夫ですか？", answer: "専任担当者が導入から操作方法まで丁寧にサポートしますのでご安心ください。" },
    { question: "対応エリアはどこですか？", answer: "全国対応可能です。オンラインでのご相談・サポートも行っております。" },
    { question: "料金体系を教えてください。", answer: "ご支援内容や企業規模により異なります。まずは無料相談にてお見積もりをご提示します。" },
  ],

  company: {
    name: "株式会社ネクストワーク",
    representative: "架空 健太",
    founded: "2015年（想定）",
    capital: "1,000万円（想定）",
    employees: "28名（想定）",
    business: "業務効率化コンサルティング、ITツール導入支援、業務委託",
    area: "全国対応（オンライン可）",
  },

  mobileCtaLabel: "お問い合わせ",
  mobileCtaHref: "#contact",
};
