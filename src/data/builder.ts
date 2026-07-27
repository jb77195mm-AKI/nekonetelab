import type { SiteData } from "@/types/site";

export const builderSite: SiteData = {
  slug: "builder",
  siteName: "山本工務店",
  businessType: "工務店・リフォーム会社",
  templateKind: "corporate",
  tagline: "地域と共に、住まいの \"これから\" をつくる。",
  description: "リフォーム・水回り工事・外壁塗装などを手がける地域密着の工務店「山本工務店」の公式サイトです。",
  logoText: "山本工務店",
  noindex: true,

  theme: {
    primary: "#1F3A5F",
    secondary: "#4C6B8A",
    accent: "#B36020",
    background: "#FFFFFF",
    surface: "#F4F1EA",
    text: "#25201A",
    muted: "#756D63",
  },

  contact: {
    phone: "0422223333",
    phoneDisplay: "0422-22-3333",
    email: "info@yamamoto-koumuten.example.com",
    lineUrl: "https://line.me/R/ti/p/@example-yamamoto",
  },

  address: {
    postalCode: "180-0004",
    prefecture: "東京都",
    city: "武蔵野市吉祥寺本町",
    street: "6-6-6 山本ビル1F",
    mapEmbedUrl: "https://www.google.com/maps?q=武蔵野市吉祥寺本町&output=embed",
  },

  openingHours: [{ label: "平日・土", time: "8:30〜17:30" }],
  holidays: "日曜日・祝日",

  hero: {
    title: "住まいの \"困った\" を、\n地元の職人がまるごと解決。",
    subtitle: "リフォーム・水回り工事・外壁塗装・小規模修繕まで、地域密着でご対応します。",
    image: "/images/builder/hero.webp",
    primaryButtonText: "無料相談・お見積もり",
    primaryButtonHref: "#contact",
    secondaryButtonText: "施工事例を見る",
    secondaryButtonHref: "#works",
  },

  concept: {
    title: "創業から地域と歩んできた、\n信頼の工務店です。",
    body: "山本工務店は、武蔵野市を中心に住宅のリフォーム・修繕を手がける工務店です。\n大手にはできない小回りの利く対応と、経験豊富な職人による確かな施工で、\nこれまで数多くのご家庭の住まいづくりをお手伝いしてきました。\n\n「ちょっとした修理からお願いできますか？」というご相談も大歓迎です。",
    image: "/images/builder/concept.webp",
  },

  services: [
    { title: "リフォーム工事", description: "内装・外装のリフォームまで、ご要望に応じて幅広く対応します。" },
    { title: "水回り工事", description: "キッチン・浴室・トイレなど水回り設備の交換・修繕を承ります。" },
    { title: "外壁塗装", description: "住まいを長持ちさせる外壁・屋根の塗装工事に対応しています。" },
    { title: "内装工事", description: "クロス張替えやフローリング工事など内装全般をお任せください。" },
    { title: "小規模修繕", description: "「ドアの建て付けが悪い」など、ちょっとした修繕にも対応します。" },
  ],

  features: [
    { title: "地域密着で迅速対応", description: "武蔵野市周辺エリアなら最短即日で駆けつけます。", icon: "Zap" },
    { title: "職人による直接施工", description: "下請けに丸投げせず、経験豊富な自社職人が施工します。", icon: "Hammer" },
    { title: "明朗な見積もり", description: "工事前に詳細なお見積もりを提示し、追加費用が発生する場合は事前にご説明します。", icon: "FileCheck" },
    { title: "アフターフォロー", description: "施工後の不具合にも迅速に対応するアフターサービスをご用意しています。", icon: "ShieldCheck" },
  ],

  menuItems: [],
  priceItems: [],
  staff: [],

  gallery: [],

  works: [
    { title: "水回りフルリフォーム", description: "築25年のご自宅のキッチン・浴室・トイレを一新しました。", image: "/images/builder/work-1.webp", tag: "水回り" },
    { title: "外壁塗装工事", description: "劣化していた外壁を高耐久塗料で塗り替えました。", image: "/images/builder/work-2.webp", tag: "外壁" },
    { title: "リビング内装リフォーム", description: "壁紙とフローリングを張り替え、明るい空間に生まれ変わりました。", image: "/images/builder/work-3.webp", tag: "内装" },
    { title: "玄関ドア交換工事", description: "断熱性の高い玄関ドアへの交換工事を行いました。", image: "/images/builder/work-4.webp", tag: "小規模修繕" },
  ],

  flow: [
    { step: 1, title: "お問い合わせ", description: "お電話・LINE・フォームからお気軽にご相談ください。" },
    { step: 2, title: "現地調査・お見積もり", description: "担当者が現地を確認し、詳細なお見積もりを作成します。" },
    { step: 3, title: "ご契約", description: "お見積もり内容にご納得いただいた上でご契約となります。" },
    { step: 4, title: "施工", description: "経験豊富な職人が丁寧に施工いたします。" },
    { step: 5, title: "完了検査・お引き渡し", description: "仕上がりをご確認いただき、工事完了となります。" },
  ],

  faq: [
    { question: "見積もりは無料ですか？", answer: "はい、現地調査・お見積もりは無料で承っております。" },
    { question: "小さな修繕でも依頼できますか？", answer: "もちろん可能です。ドアの建て付け調整など、小規模な修繕もお気軽にご相談ください。" },
    { question: "対応エリアはどこまでですか？", answer: "武蔵野市を中心に、三鷹市・西東京市など近隣エリアに対応しております。詳しくはお問い合わせください。" },
    { question: "工事中も自宅に住みながら施工できますか？", answer: "工事内容によりますが、居住しながらの施工にも対応可能です。事前にご相談ください。" },
  ],

  company: {
    name: "山本工務店",
    representative: "山本 建一（架空）",
    founded: "平成5年（想定）",
    employees: "12名（想定）",
    business: "住宅リフォーム工事、外壁塗装、水回り工事、内装工事",
    area: "武蔵野市・三鷹市・西東京市 他 近隣エリア",
  },

  mobileCtaLabel: "無料見積もり",
  mobileCtaHref: "#contact",
};
