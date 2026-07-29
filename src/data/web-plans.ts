export type WebPlanSlug = "web-start" | "web-support" | "buyout";

export interface WebPaymentOption {
  name: string;
  initialPrice: number;
  monthlyPrice: number;
  total24Months: number;
}

export interface WebPlan {
  slug: WebPlanSlug;
  name: string;
  label?: string;
  catchCopy: string;
  initialPrice: number;
  regularPrice?: number;
  monitorPrice?: number;
  monthlyPrice: number;
  taxIncluded: boolean;
  minimumTermMonths: number | null;
  minimumTermLabel: string;
  features: string[];
  extraCosts: string[];
  suitableFor: string[];
  ctaLabel: string;
  ctaHref: string;
  recommended: boolean;
  displayOrderDesktop: number;
  displayOrderMobile: number;
  stripeCheckoutEnabled: boolean;
  stripePriceEnvKey?: string;
  notices: string[];
  paymentOptions?: WebPaymentOption[];
}

export const webPlans: WebPlan[] = [
  {
    slug: "web-start",
    name: "Webスタートプラン",
    label: "初期制作費0円から",
    catchCopy: "必要な情報をいただき、4ページまでの公式サイトを制作・管理",
    initialPrice: 0,
    monthlyPrice: 9_800,
    taxIncluded: true,
    minimumTermMonths: 24,
    minimumTermLabel: "最低利用期間24か月・以後1か月単位で自動更新",
    paymentOptions: [
      {
        name: "初期費用0円型",
        initialPrice: 0,
        monthlyPrice: 9_800,
        total24Months: 235_200,
      },
      {
        name: "月額負担軽減型",
        initialPrice: 49_800,
        monthlyPrice: 5_980,
        total24Months: 193_320,
      },
    ],
    features: [
      "最大4ページ",
      "業種別ベースデザイン",
      "配色・文章・写真の調整",
      "スマートフォン対応",
      "問い合わせフォーム1個",
      "Googleマップ・SNS・公式LINE連携",
      "基本SEO・アクセス解析初期設定",
      "サーバー・SSL管理",
      "制作中の修正2回",
      "月1回・15分以内の軽微な更新",
      "メールまたは専用フォームサポート",
    ],
    extraCosts: [
      "独自ドメイン",
      "新規ページ・全面デザイン変更",
      "予約・決済・外部システム連携",
      "取材・ゼロからの原稿作成",
    ],
    suitableFor: ["初めて公式サイトを持つ", "掲載素材を用意できる", "公開後の管理も任せたい"],
    ctaLabel: "Webスタートを相談する",
    ctaHref: "/contact?plan=web-start",
    recommended: true,
    displayOrderDesktop: 1,
    displayOrderMobile: 1,
    stripeCheckoutEnabled: true,
    stripePriceEnvKey: "STRIPE_PRICE_ID_WEB_START",
    notices: [
      "サービス内容は2つの支払い方法で共通です。",
      "更新枠は翌月へ繰り越しません。",
      "掲載文章、店舗情報、料金、写真、ロゴ、連絡先、SNS・LINE URLはお客様にご用意いただきます。",
    ],
  },
  {
    slug: "web-support",
    name: "Webサポートプラン",
    label: "運用サポートを強化",
    catchCopy: "ヒアリングとAI原稿下書き、月2回の軽微な更新まで支援",
    initialPrice: 0,
    monthlyPrice: 14_800,
    taxIncluded: true,
    minimumTermMonths: 24,
    minimumTermLabel: "最低利用期間24か月",
    features: [
      "最大6ページ",
      "セミオリジナルデザイン",
      "初回オンラインヒアリング60分・1回",
      "質問シートをもとにしたAI原稿下書き",
      "提供画像の簡易補正",
      "スマートフォン対応",
      "問い合わせフォーム最大2個",
      "Googleマップ・SNS・LINE連携",
      "基本SEO・アクセス解析初期設定",
      "サーバー・SSL管理",
      "制作中の修正3回",
      "月2回・合計30分以内の軽微な更新",
      "3か月に1回の簡易改善提案",
      "メール・専用フォームによる優先サポート",
    ],
    extraCosts: ["独自ドメイン", "詳細レポート", "定例会議", "電話相談", "規定範囲外の制作・更新"],
    suitableFor: ["文章整理も支援してほしい", "更新回数を確保したい", "定期的な改善提案がほしい"],
    ctaLabel: "Webサポートを相談する",
    ctaHref: "/contact?plan=web-support",
    recommended: false,
    displayOrderDesktop: 2,
    displayOrderMobile: 2,
    stripeCheckoutEnabled: false,
    notices: [
      "詳細レポート、定例会議、電話相談は標準に含みません。",
      "AI原稿は下書きとして作成し、公開前にお客様と内容を確認します。",
    ],
  },
  {
    slug: "buyout",
    name: "買い切りプラン",
    label: "データ・管理権限を引き渡し",
    catchCopy: "公開後の運用体制を自社で用意できる方向け",
    initialPrice: 98_000,
    regularPrice: 148_000,
    monitorPrice: 98_000,
    monthlyPrice: 0,
    taxIncluded: true,
    minimumTermMonths: null,
    minimumTermLabel: "最低利用期間なし",
    features: [
      "最大5ページ",
      "セミオリジナルデザイン",
      "スマートフォン対応",
      "問い合わせフォーム1個",
      "Googleマップ・SNS・LINE連携",
      "基本SEO初期設定",
      "制作中の修正2回",
      "公開後30日間の不具合対応",
      "データ・管理権限の引き渡し",
    ],
    extraCosts: [
      "ドメイン・サーバー料金",
      "公開後の文章・画像変更",
      "ページ追加",
      "セキュリティ保守・定期バックアップ",
      "SEO・SNS・Googleビジネスプロフィール運用",
    ],
    suitableFor: ["月額固定費を抑えたい", "データを保有したい", "自社で更新・保守できる"],
    ctaLabel: "買い切りを相談する",
    ctaHref: "/contact?plan=buyout",
    recommended: false,
    displayOrderDesktop: 3,
    displayOrderMobile: 3,
    stripeCheckoutEnabled: false,
    notices: [
      "通常価格148,000円（税込）、モニター価格98,000円（税込）です。",
      "公開後の技術保守・更新サポートは任意で追加できます。",
    ],
  },
];

export const webPlanComparisonRows = [
  { label: "初期制作費", webStart: "0円 または 49,800円", webSupport: "0円", buyout: "通常148,000円／モニター98,000円" },
  { label: "月額料金", webStart: "9,800円 または 5,980円", webSupport: "14,800円", buyout: "0円（任意保守あり）" },
  { label: "ページ数", webStart: "最大4ページ", webSupport: "最大6ページ", buyout: "最大5ページ" },
  { label: "原稿支援", webStart: "お客様が用意", webSupport: "AI下書きあり", buyout: "お客様が用意" },
  { label: "制作中の修正", webStart: "2回", webSupport: "3回", buyout: "2回" },
  { label: "軽微な更新", webStart: "月1回・15分以内", webSupport: "月2回・合計30分以内", buyout: "別途または任意保守" },
  { label: "最低利用期間", webStart: "24か月", webSupport: "24か月", buyout: "なし" },
  { label: "サーバー・SSL", webStart: "含む", webSupport: "含む", buyout: "別途" },
  { label: "主な対象", webStart: "小さく始めたい", webSupport: "原稿・運用支援も必要", buyout: "自社で管理したい" },
] as const;
