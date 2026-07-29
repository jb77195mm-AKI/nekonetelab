import { dxTools, formatPriceRange } from "@/data/dx-tools";
import { queueLanguages } from "@/data/languages";

export type SolutionSlug = "queue" | "review-reply" | "skill-shift";
export type SolutionIconName = "queue" | "review" | "shift";

export interface SolutionData {
  slug: SolutionSlug;
  name: string;
  label: string;
  icon: SolutionIconName;
  metadataTitle: string;
  shortDescription: string;
  cardFeatures: string[];
  priceLine: string;
  heroTitle: string;
  description: string;
  pains: string[];
  features: string[];
  usage: Array<{ title: string; description: string }>;
  pricing: {
    initial: string;
    monthly: string;
    upperPlan?: string;
    note: string;
  };
  faq: Array<{ question: string; answer: string }>;
}

const iconByLegacySlug: Record<SolutionSlug, SolutionIconName> = {
  queue: "queue",
  "review-reply": "review",
  "skill-shift": "shift",
};

const metadataByLegacySlug: Record<SolutionSlug, string> = {
  queue: "多言語・インバウンド対応の順番待ちシステム",
  "review-reply": "Google口コミ返信サポート",
  "skill-shift": "スキル別AIシフト作成",
};

const heroByLegacySlug: Record<SolutionSlug, string> = {
  queue: "外国人のお客様も、QRを読み込むだけ。",
  "review-reply": "口コミ返信をためずに、お店らしい対応を。",
  "skill-shift": "スキルを考慮した、無理のないシフト案を。",
};

const faqByLegacySlug: Record<SolutionSlug, SolutionData["faq"]> = {
  queue: [
    {
      question: "専用アプリや会員登録は必要ですか？",
      answer: "不要です。店頭のQRコードからブラウザを開き、言語を選んで受付する設計です。",
    },
    {
      question: "20言語すべて利用できますか？",
      answer: "対応言語は段階的に開発・検証しています。各言語の状態を利用可能、ベータ、翻訳検証中、対応予定で明示します。",
    },
    {
      question: "店舗独自の案内文も翻訳できますか？",
      answer: "対応可能です。定型的な受付文言は標準範囲、店舗独自の長文や専門用語はオプションまたは個別見積もりです。",
    },
  ],
  "review-reply": [
    {
      question: "AIが自動でGoogleへ投稿しますか？",
      answer: "まずAIが返信案を作り、店舗が確認して投稿する運用を標準とします。完全自動投稿はオプションです。",
    },
    {
      question: "低評価口コミも自動返信できますか？",
      answer: "低評価や重要な内容は人が確認し、必要に応じて編集してから投稿する運用を推奨します。",
    },
    {
      question: "お店らしい言葉づかいにできますか？",
      answer: "既存の返信例や希望する雰囲気を伺い、文体と禁止表現を設定します。",
    },
  ],
  "skill-shift": [
    {
      question: "勤怠管理や給与計算もできますか？",
      answer: "標準範囲はシフト案作成です。勤怠・給与システム連携は個別に確認します。",
    },
    {
      question: "作成後に人が変更できますか？",
      answer: "AIが作成した案と警告を確認し、管理者が手動調整して最終確定する設計です。",
    },
    {
      question: "AIが必ず最適なシフトを作りますか？",
      answer: "AIの出力は案です。店舗固有の事情や急な変更を踏まえ、最終判断は管理者が行います。",
    },
  ],
};

export const solutions: SolutionData[] = dxTools.map((tool) => {
  const slug = tool.legacySlug;
  return {
    slug,
    name: tool.name,
    label: tool.auxiliaryLabel ?? tool.category,
    icon: iconByLegacySlug[slug],
    metadataTitle: metadataByLegacySlug[slug],
    shortDescription: tool.description,
    cardFeatures: tool.features.slice(0, 3),
    priceLine: `初期${formatPriceRange(tool.initialPrice)}／月額${formatPriceRange(tool.monthlyPrice)}`,
    heroTitle: heroByLegacySlug[slug],
    description: tool.description,
    pains: tool.problems,
    features: tool.features,
    usage: tool.usageFlow.map((title, index) => ({
      title,
      description:
        index === tool.usageFlow.length - 1
          ? tool.humanApproval
          : "必要な情報だけを確認し、無理のない運用から始めます。",
    })),
    pricing: {
      initial: formatPriceRange(tool.initialPrice),
      monthly: formatPriceRange(tool.monthlyPrice),
      note: `標準範囲は${tool.standardScope.join("・")}です。店舗数、データ形式、外部連携により料金が変わります。`,
    },
    faq: faqByLegacySlug[slug],
  };
});

export const queueLanguagePlans = [
  {
    name: "標準10言語",
    label: "標準範囲",
    languageCount: 10,
    initial: "49,800円～",
    monthly: "6,980円～",
    languages: queueLanguages.filter((language) => language.plan === 10).map((language) => language.name).join("・"),
    recommended: true,
  },
  {
    name: "15言語プラン",
    label: "追加候補",
    languageCount: 15,
    initial: "基本料金＋22,000円～",
    monthly: "個別確認",
    languages: queueLanguages.filter((language) => language.plan <= 15).map((language) => language.name).join("・"),
    recommended: false,
  },
  {
    name: "20言語プラン",
    label: "追加候補",
    languageCount: 20,
    initial: "基本料金＋44,000円～",
    monthly: "個別確認",
    languages: queueLanguages.map((language) => language.name).join("・"),
    recommended: false,
  },
] as const;

export const queueLanguageOptions = [
  ["店舗固有翻訳", "1言語11,000円～"],
  ["翻訳監修・ネイティブチェック", "個別見積もり"],
  ["LINE通知", "初期33,000円＋実費"],
  ["SMS通知", "初期33,000円＋送信実費"],
  ["複数店舗・外部システム連携", "個別見積もり"],
] as const;

export const queuePricingNotes = [
  "表示価格は税込の参考価格です。標準範囲は1店舗・受付列1つ・標準10言語です。",
  "対応言語は開発・翻訳検証状況を明示し、利用できる言語だけを正式なお見積もりへ含めます。",
] as const;

export const queueLocalizationReasons = [
  "翻訳文の作成・登録",
  "各言語での表示・操作確認",
  "機能更新時の翻訳メンテナンス",
] as const;

export const solutionComparisonRows = [
  { label: "主な対象", values: ["飲食店・観光施設・人気店舗", "店舗・小規模事業者", "店舗・施設・中小企業"] },
  { label: "解決する課題", values: ["多言語受付と店頭行列", "返信漏れと文章作成", "シフト作成と人員配置"] },
  { label: "標準範囲", values: ["1店舗・1受付列・10言語", "1店舗・月30件", "1店舗・スタッフ20名"] },
  { label: "初期設定費", values: ["49,800円～", "11,000円～", "79,800円～"] },
  { label: "月額利用料", values: ["6,980円～", "3,980円～", "9,800円～"] },
  { label: "最低利用期間", values: ["12か月", "6か月", "12か月"] },
  { label: "人の確認", values: ["受付条件・案内文", "返信案を確認後投稿", "管理者が最終確定"] },
] as const;

export const solutionFlow = [
  "無料相談",
  "現在の業務をヒアリング",
  "必要な機能を整理",
  "デモ画面を確認",
  "見積もり",
  "初期設定・試験運用",
  "本運用開始",
] as const;

export const starterPack = {
  name: "単体DXツール",
  includes: ["インバウンド対応 かんたん順番待ち", "口コミ返信サポート", "スキル別AIシフト"],
  price: "必要なツールだけを個別に導入",
  note: "3商品を一律にまとめた固定パックではありません。標準範囲とオプションを確認してご提案します。",
} as const;

export function getSolution(slug: string): SolutionData | undefined {
  return solutions.find((solution) => solution.slug === slug);
}
