export type LanguageStatus = "available" | "beta" | "testing" | "planned";

export const languageStatusLabels: Record<LanguageStatus, string> = {
  available: "利用可能",
  beta: "ベータ提供",
  testing: "翻訳検証中",
  planned: "対応予定",
};

export interface QueueLanguage {
  code: string;
  name: string;
  localName: string;
  plan: 10 | 15 | 20;
  status: LanguageStatus;
}

export const queueLanguages: QueueLanguage[] = [
  { code: "ja", name: "日本語", localName: "日本語", plan: 10, status: "testing" },
  { code: "en", name: "英語", localName: "English", plan: 10, status: "testing" },
  { code: "zh-CN", name: "中国語・簡体字", localName: "简体中文", plan: 10, status: "testing" },
  { code: "zh-TW", name: "中国語・繁体字", localName: "繁體中文", plan: 10, status: "testing" },
  { code: "ko", name: "韓国語", localName: "한국어", plan: 10, status: "testing" },
  { code: "th", name: "タイ語", localName: "ไทย", plan: 10, status: "testing" },
  { code: "vi", name: "ベトナム語", localName: "Tiếng Việt", plan: 10, status: "testing" },
  { code: "id", name: "インドネシア語", localName: "Bahasa Indonesia", plan: 10, status: "testing" },
  { code: "ms", name: "マレー語", localName: "Bahasa Melayu", plan: 10, status: "testing" },
  { code: "fil", name: "フィリピン語", localName: "Filipino", plan: 10, status: "testing" },
  { code: "fr", name: "フランス語", localName: "Français", plan: 15, status: "planned" },
  { code: "es", name: "スペイン語", localName: "Español", plan: 15, status: "planned" },
  { code: "de", name: "ドイツ語", localName: "Deutsch", plan: 15, status: "planned" },
  { code: "it", name: "イタリア語", localName: "Italiano", plan: 15, status: "planned" },
  { code: "pt", name: "ポルトガル語", localName: "Português", plan: 15, status: "planned" },
  { code: "nl", name: "オランダ語", localName: "Nederlands", plan: 20, status: "planned" },
  { code: "pl", name: "ポーランド語", localName: "Polski", plan: 20, status: "planned" },
  { code: "ru", name: "ロシア語", localName: "Русский", plan: 20, status: "planned" },
  { code: "km", name: "クメール語", localName: "ខ្មែរ", plan: 20, status: "planned" },
  { code: "my", name: "ミャンマー語", localName: "မြန်မာ", plan: 20, status: "planned" },
];

export const queueLanguagePlans = [
  {
    languageCount: 10,
    name: "標準10言語",
    price: "基本料金に含む",
    description: "定型的な受付・待ち状況・基本操作案内を翻訳検証中です。",
  },
  {
    languageCount: 15,
    name: "15言語プラン",
    price: "初期22,000円～",
    description: "標準10言語に欧州5言語を追加する候補です。",
  },
  {
    languageCount: 20,
    name: "20言語プラン",
    price: "初期44,000円～",
    description: "15言語にさらに5言語を追加する候補です。",
  },
] as const;
