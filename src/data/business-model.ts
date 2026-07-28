export type HomepagePlanSlug = "web-start" | "omakase" | "balance" | "buyout";

export type HomepagePlan = {
  slug: HomepagePlanSlug;
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
};

export const businessModel = {
  primaryMessage: "ホームページ制作費0円",
  heroTitle: "制作費0円から。あなたの会社のWeb・AI担当になります。",
  heroDescription:
    "名張市・伊賀市を拠点に全国対応。ホームページ制作、更新、Googleマップ、LINE、SNS、生成AI、業務効率化までまとめて支援します。",
  positioning: "小規模事業者のための、月額制Web・AI担当",
  serviceArea: "名張市・伊賀市を拠点に、全国オンライン対応",
  mainPlanSummary: "月額9,800円（税込）・最低利用期間24か月",
  mainPlanConditions:
    "独自ドメイン代と外部有料サービスは別途です。最低利用期間内の解約・精算条件は契約前にご説明し、契約書に明記します。",
  demoNotice:
    "このページはサービス内容および決済機能の確認用デモです。正式な料金・契約条件ではありません。実際の請求・メール送信は行われません。",
} as const;

export const homepagePlans: HomepagePlan[] = [
  {
    slug: "web-start",
    name: "Webスタートプラン",
    label: "制作費0円",
    catchCopy: "初めてのホームページを、制作・公開後の管理までまとめてお任せ",
    initialPrice: 0,
    monthlyPrice: 9_800,
    taxIncluded: true,
    minimumTermMonths: 24,
    minimumTermLabel: "最低利用期間24か月・以後1か月単位で自動更新",
    features: [
      "テンプレート・共通設計を活用した基本5ページ程度",
      "スマートフォン・タブレット対応",
      "問い合わせフォーム・電話発信ボタン",
      "Googleマップ・Instagram・X・公式LINE導線",
      "基本SEO・OGP・favicon・アクセス解析初期設定",
      "基本サーバー利用料・SSL・定期バックアップ",
      "稼働確認・基本的なセキュリティ対応",
      "月1回・合計30分程度までの軽微な更新",
      "営業時間内に順次対応するメール・チャットサポート",
    ],
    extraCosts: [
      "独自ドメイン",
      "大幅な修正・ページ追加・新機能",
      "月1回・30分を超える更新",
      "写真撮影・ロゴ・原稿・広告運用・現地訪問",
      "大量アクセス・大容量データ・特殊なサーバー構成",
    ],
    suitableFor: [
      "初めてホームページを持つ",
      "パソコンや公開後の管理に不安がある",
      "小規模店舗・個人事業主",
    ],
    ctaLabel: "Webスタートプランを無料相談する",
    ctaHref: "/contact?plan=web-start",
    recommended: true,
    displayOrderDesktop: 1,
    displayOrderMobile: 1,
    stripeCheckoutEnabled: true,
    stripePriceEnvKey: "STRIPE_PRICE_ID_WEB_START",
    notices: [
      "初期制作費0円／月額9,800円（税込）／最低利用期間24か月",
      "最低利用期間内の解約では、契約条件に基づく所定の精算金が発生する場合があります。詳細は契約書をご確認ください。",
      "独自ドメイン費用は別途必要です。取得や初期設定をサポートします。",
    ],
  },
  {
    slug: "omakase",
    name: "おまかせサブスクプラン",
    label: "制作費0円",
    catchCopy: "初期費用を抑えて、制作から運用までまとめてお任せ",
    initialPrice: 0,
    monthlyPrice: 14_800,
    taxIncluded: true,
    minimumTermMonths: 12,
    minimumTermLabel: "最低契約期間12か月",
    features: [
      "4〜5ページ程度のホームページ制作",
      "スマートフォン・タブレット対応",
      "基本サーバー利用料・SSL",
      "問い合わせフォーム",
      "Googleマップ・Instagram・X・公式LINE導線",
      "基本SEO・アクセス解析初期設定",
      "定期バックアップ・セキュリティ・技術保守",
      "月1回までの軽微な文章修正・画像差し替え",
      "公開作業・公開後の運用サポート",
    ],
    extraCosts: ["独自ドメイン", "外部有料サービス", "規定範囲外の修正・ページ追加"],
    suitableFor: [
      "開業時の初期費用を抑えたい",
      "制作から保守まで任せたい",
      "社内にWeb担当者がいない",
    ],
    ctaLabel: "制作費0円で相談する",
    ctaHref: "/contact?plan=omakase",
    recommended: false,
    displayOrderDesktop: 3,
    displayOrderMobile: 3,
    stripeCheckoutEnabled: true,
    stripePriceEnvKey: "STRIPE_PRICE_ID_OMAKASE",
    notices: [
      "最低契約期間内の解約条件は契約書に記載します。",
      "契約終了後の利用・移管条件は契約内容により異なります。",
    ],
  },
  {
    slug: "balance",
    name: "バランスプラン",
    catchCopy: "初期費用と月額サポートのバランスを重視",
    initialPrice: 49_800,
    regularPrice: 100_000,
    monitorPrice: 49_800,
    monthlyPrice: 5_980,
    taxIncluded: true,
    minimumTermMonths: null,
    minimumTermLabel: "契約期間は正式なお申し込み前にご案内",
    features: [
      "4〜5ページ程度のホームページ制作",
      "スマートフォン・タブレット対応",
      "基本サーバー利用料・SSL",
      "問い合わせフォーム",
      "Googleマップ・SNS・公式LINE導線",
      "基本SEO・アクセス解析初期設定",
      "定期バックアップ・セキュリティ保守",
      "月1回までの軽微な文章・画像修正",
      "公開作業・公開後の運用サポート",
    ],
    extraCosts: ["独自ドメイン", "外部有料サービス", "規定範囲外の修正・ページ追加"],
    suitableFor: [
      "初期費用と月額の両方を抑えたい",
      "制作実績への掲載に協力できる",
      "公開後も更新を相談したい",
    ],
    ctaLabel: "バランスプランについて相談する",
    ctaHref: "/contact?plan=balance",
    recommended: false,
    displayOrderDesktop: 2,
    displayOrderMobile: 2,
    stripeCheckoutEnabled: false,
    notices: [
      "制作実績としての掲載にご協力いただける方を対象としたモニター価格です。",
      "モニター価格の適用条件、募集数、募集期間は正式提供時に決定します。",
      "TODO：バランスプランの最低契約期間と初回請求方法を正式決定",
    ],
  },
  {
    slug: "buyout",
    name: "買い切りプラン",
    catchCopy: "月額料金を抑えて、ホームページを事業資産に",
    initialPrice: 98_000,
    monthlyPrice: 0,
    taxIncluded: true,
    minimumTermMonths: null,
    minimumTermLabel: "最低契約期間なし",
    features: [
      "4〜5ページ程度のホームページ制作",
      "スマートフォン・タブレット対応",
      "問い合わせフォーム",
      "Googleマップ・SNS・公式LINE導線",
      "基本SEO・アクセス解析初期設定",
      "公開作業",
      "公開後1か月間の軽微な修正",
      "サイトデータ納品または管理権限引き渡し",
    ],
    extraCosts: [
      "独自ドメイン・サーバー",
      "公開後1か月を超える修正",
      "バックアップ・セキュリティ対応",
      "ページ追加・大規模デザイン変更",
    ],
    suitableFor: [
      "月額固定費を抑えたい",
      "サイトの所有・引き渡しを重視する",
      "更新体制を自社で用意できる",
    ],
    ctaLabel: "買い切りプランについて相談する",
    ctaHref: "/contact?plan=buyout",
    recommended: false,
    displayOrderDesktop: 4,
    displayOrderMobile: 4,
    stripeCheckoutEnabled: false,
    notices: ["任意保守は月額4,980円（税込）からです。", "月額Stripe Checkoutの対象外です。"],
  },
];

export const supportPlans = [
  {
    name: "Web集客・運用サポート",
    priceLabel: "月額19,800円〜39,800円程度",
    description:
      "公開後の更新、Googleビジネスプロフィール、口コミ返信文、LINE・SNS導線、簡易アクセス確認までを継続支援します。",
    features: [
      "ホームページ保守・文章・画像更新",
      "Googleビジネスプロフィール支援",
      "口コミ返信文・SNS投稿文の作成支援",
      "LINE・SNS・問い合わせ導線改善",
      "キャンペーンページ更新",
      "簡易アクセスレポート・Web相談窓口",
    ],
    ctaLabel: "Web集客・運用について相談する",
    ctaHref: "/contact?plan=web-operation",
    notice: "具体的な月額、更新回数、対応時間はヒアリング後にお見積もりします。",
  },
  {
    name: "外部Web・AI担当プラン",
    priceLabel: "月額49,800円から",
    description:
      "ホームページ運用とWeb集客に加え、生成AI活用や小さな業務自動化まで、一つの相談窓口として伴走します。",
    features: [
      "ホームページ運用・Web集客相談",
      "Googleマップ・LINE・SNS支援",
      "生成AI活用相談・業務マニュアル作成",
      "定型業務自動化の相談",
      "月次オンライン打ち合わせ",
      "継続的な改善提案",
    ],
    ctaLabel: "外部Web・AI担当について相談する",
    ctaHref: "/contact?plan=web-ai",
    notice: "高度な開発、API連携、大規模自動化、複雑なデータベースは別途見積もりです。",
  },
] as const;

export const serviceLayers = [
  {
    step: "01",
    title: "ホームページ制作",
    label: "入口",
    description:
      "スマートフォン対応、問い合わせ導線、Googleマップ、LINE・SNS連携を備えた公式サイトを整えます。",
    items: ["新規制作・リニューアル", "基本SEO・SSL", "文章構成・素材準備相談", "公開作業"],
  },
  {
    step: "02",
    title: "Web集客・運用支援",
    label: "公開後",
    description:
      "営業時間や料金の更新、Googleマップ、口コミ返信、LINE・SNSの導線改善を継続して支援します。",
    items: ["更新・保守", "Googleマップ", "LINE・SNS", "問い合わせ導線改善"],
  },
  {
    step: "03",
    title: "AI・業務効率化支援",
    label: "次の一手",
    description:
      "生成AIによる文章作成、問い合わせ返信、マニュアル作成、定型業務の小さな自動化へ発展させます。",
    items: ["ChatGPT・Claude活用", "業務マニュアル", "データ整理", "GAS・n8n・Make相談"],
  },
] as const;

export const industries = [
  {
    slug: "builder",
    name: "工務店・建設業",
    journey: "施工事例から信頼をつくり、対応地域と見積もり相談へ",
    items: ["施工事例", "事業・対応地域", "代表者紹介", "見積もりフォーム", "採用情報"],
  },
  {
    slug: "local-service",
    name: "清掃・地域サービス",
    journey: "サービス内容と料金例を見せ、LINE・電話の相談へ",
    items: ["対応エリア", "料金例", "作業実績", "FAQ", "LINE・電話"],
  },
  {
    slug: "salon",
    name: "美容室・サロン",
    journey: "メニュー・施術事例からInstagram・LINE予約へ",
    items: ["メニュー・料金", "スタッフ", "施術事例", "Instagram", "LINE予約"],
  },
  {
    slug: "school",
    name: "教室・スクール",
    journey: "コースと日程を分かりやすく伝え、体験申し込みへ",
    items: ["コース・料金", "講師", "日程", "体験申し込み", "オンライン対応"],
  },
  {
    slug: "professional",
    name: "士業・専門サービス",
    journey: "専門性と相談の流れを示し、安心して問い合わせへ",
    items: ["取扱業務", "料金目安", "プロフィール", "相談の流れ", "個人情報への配慮"],
  },
  {
    slug: "restaurant",
    name: "飲食店",
    journey: "メニュー・営業時間を案内し、地図・予約・SNSへ",
    items: ["メニュー", "営業時間", "Googleマップ", "Instagram", "予約・多言語相談"],
  },
] as const;

export const comparisonRows = [
  { label: "初期制作費", webStart: "0円", omakase: "0円", balance: "49,800円", buyout: "98,000円" },
  { label: "月額料金", webStart: "9,800円", omakase: "14,800円", balance: "5,980円", buyout: "0円" },
  { label: "保守", webStart: "含む", omakase: "含む", balance: "含む", buyout: "任意" },
  { label: "サーバー・SSL", webStart: "含む", omakase: "含む", balance: "含む", buyout: "別途" },
  { label: "軽微な修正", webStart: "月1回・30分程度", omakase: "月1回", balance: "月1回", buyout: "公開後1か月" },
  { label: "最低利用期間", webStart: "24か月", omakase: "12か月", balance: "正式契約時に案内", buyout: "なし" },
  { label: "期間後の更新", webStart: "1か月単位で自動更新", omakase: "要確認", balance: "要確認", buyout: "なし" },
  { label: "データ移管", webStart: "契約内容による", omakase: "契約内容による", balance: "契約内容による", buyout: "引き渡し可能" },
  { label: "主な対象", webStart: "初めての導入", omakase: "運用おまかせ", balance: "バランス重視", buyout: "所有・固定費重視" },
] as const;

export const additionalWorkPricing = [
  { name: "軽微な追加更新", price: "5,500円から", note: "作業内容を確認してご案内" },
  { name: "ページ追加", price: "別途見積もり", note: "ページ構成・原稿・機能により変動" },
  { name: "機能追加", price: "別途見積もり", note: "予約・決済・会員・外部連携等" },
  { name: "写真・文章・デザイン制作", price: "別途見積もり", note: "必要な制作範囲により変動" },
] as const;

export const painPoints = [
  "ホームページがない、または古いまま",
  "Instagramだけで情報発信している",
  "Googleマップを活用できていない",
  "公開後の更新方法が分からない",
  "社内にWeb担当者がいない",
  "LINEやSNSの連携方法が分からない",
  "ChatGPTやAIを仕事に使いたい",
  "デジタル関連の相談先を一本化したい",
] as const;

export const reasons = [
  "制作費0円から始められ、買い切り型も選べる",
  "名張市・伊賀市を拠点に全国オンライン対応",
  "制作後の更新・保守・運用にも対応",
  "WebとAIを一つの窓口で相談できる",
  "小規模事業者向けに専門用語を抑えて説明",
  "必要な範囲から段階的に導入できる",
] as const;

export const outcomes = [
  "検索した人へ安心感を与える",
  "事業内容・営業時間・料金を24時間案内する",
  "GoogleマップやSNSから公式サイトへ誘導する",
  "問い合わせ窓口を整える",
  "公開後も相談できる担当者を持つ",
  "AIで文章作成や定型業務を効率化する",
] as const;

export const productionFlow = [
  ["無料相談", "現状とご希望を伺います。"],
  ["ヒアリング", "事業、地域、対象顧客、必要な機能を整理します。"],
  ["プラン提案", "料金と契約条件をご確認いただきます。"],
  ["素材準備", "写真、文章、必要情報を一緒に整えます。"],
  ["制作", "情報設計、デザイン、スマートフォン対応を進めます。"],
  ["プレビュー", "デモページで内容と導線をご確認いただきます。"],
  ["契約・決済", "正式条件の合意後に契約と初回決済を行います。"],
  ["公開・運用", "公開後の保守、更新、Web・AI相談へつなげます。"],
] as const;

export const additionalCosts = [
  "独自ドメイン",
  "Google Workspace",
  "有料予約・EC・決済サービス",
  "有料プラグイン・有料素材",
  "写真撮影・ロゴ・動画制作",
  "規定範囲外の修正・新規ページ追加",
  "広告運用費・外部サービス利用料",
  "高度なAI・システム開発",
] as const;

export const faqItems = [
  {
    question: "本当に制作費は0円ですか？",
    answer:
      "はい。Webスタートプランでは初期制作費0円でホームページを制作します。月額9,800円（税込）、最低利用期間24か月の契約が必要です。独自ドメインや外部有料サービスは別途です。",
  },
  {
    question: "名張市・伊賀市以外でも依頼できますか？",
    answer:
      "全国からオンラインで相談できます。打ち合わせ、素材提出、確認、公開後の更新までオンラインで進められます。",
  },
  {
    question: "名張市・伊賀市では対面相談できますか？",
    answer:
      "内容や日程に応じて対応します。訪問範囲や費用は事前にご相談ください。",
  },
  {
    question: "なぜ制作費0円で提供できるのですか？",
    answer:
      "制作費を一括でいただくのではなく、サーバー管理、保守、バックアップ、軽微な修正を含む月額制で提供するためです。",
  },
  {
    question: "月額料金には何が含まれますか？",
    answer:
      "Webスタートプランにはホームページ制作、スマートフォン対応、基本サーバー管理、SSL、バックアップ、保守、月1回・合計30分程度までの軽微な更新などが含まれます。",
  },
  {
    question: "何回でも修正できますか？",
    answer:
      "無制限ではありません。制作段階の修正回数と、公開後の更新対応には一定の範囲があります。Webスタートプランでは公開後に月1回、合計30分程度までの軽微な更新を月額内で対応します。",
  },
  {
    question: "大幅な変更も月額内ですか？",
    answer:
      "ページ追加、全面的なデザイン変更、新機能の実装、月1回・30分を超える更新は、内容を確認のうえ別途お見積もりします。",
  },
  {
    question: "ドメイン代も含まれますか？",
    answer:
      "独自ドメインの取得・更新費用は原則として別途必要です。お客様名義での取得を推奨し、取得や初期設定をサポートします。",
  },
  {
    question: "サーバーを自分で契約する必要はありますか？",
    answer:
      "Webスタートプランでは基本的なサーバー利用料と管理費を月額料金に含むため、原則としてお客様自身で用意する必要はありません。大量アクセスや大容量データ、特殊構成は別途費用となる場合があります。",
  },
  {
    question: "買い切りでも依頼できますか？",
    answer:
      "買い切りプランも用意しています。月額保守は任意です。",
  },
  {
    question: "公開後の更新も頼めますか？",
    answer:
      "プランに応じて、文章、写真、営業時間、料金、サービス内容などを更新できます。",
  },
  {
    question: "写真や文章がなくても大丈夫ですか？",
    answer:
      "文章構成や素材準備を支援します。写真撮影、有料素材、生成AIによるイメージ素材は必要に応じて別途ご相談ください。",
  },
  {
    question: "GoogleマップやLINE、SNSも相談できますか？",
    answer:
      "Googleビジネスプロフィール、公式LINE、Instagram、Xなどの導線や投稿文作成支援を相談できます。投稿代行の範囲はプラン・見積もりによります。",
  },
  {
    question: "AIだけでも相談できますか？",
    answer:
      "ホームページ制作を伴わない生成AI活用や業務効率化も相談できます。口コミ返信、SNS投稿、問い合わせ返信、マニュアル、データ整理などが対象です。",
  },
  {
    question: "すべて月額内ですか？",
    answer:
      "高度なシステム開発、外部連携、大規模更新などは別途見積もりになる場合があります。追加料金が発生する作業は事前にお見積もりします。",
  },
  {
    question: "途中で解約できますか？",
    answer:
      "解約は可能ですが、Webスタートプランの最低利用期間24か月内では、契約条件に基づく所定の精算金が発生する場合があります。具体的な精算条件は未確定で、契約書へ記載します。",
  },
  {
    question: "解約後もサイトを使えますか？",
    answer:
      "契約形態やデータの譲渡条件によって異なります。継続利用、データ譲渡、他社への移管をご希望の場合は、契約前にご相談ください。",
  },
  {
    question: "支払い方法は何ですか？",
    answer:
      "月額プランはStripeを利用したクレジットカード自動決済を予定しています。このデモではモックまたはStripeテストモードのみを使用します。",
  },
  {
    question: "支払いに失敗した場合はどうなりますか？",
    answer:
      "支払い方法更新をご案内します。決済失敗直後にサイトやサービスを自動停止する運用にはしません。",
  },
] as const;

export function getHomepagePlan(slug: string | null | undefined): HomepagePlan | undefined {
  return homepagePlans.find((plan) => plan.slug === slug);
}

export function formatYen(value: number): string {
  return `${new Intl.NumberFormat("ja-JP").format(value)}円`;
}
