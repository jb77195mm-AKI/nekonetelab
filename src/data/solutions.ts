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
  usage: Array<{
    title: string;
    description: string;
  }>;
  pricing: {
    initial: string;
    monthly: string;
    upperPlan?: string;
    note: string;
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

export const solutions: SolutionData[] = [
  {
    slug: "queue",
    name: "かんたん順番待ち",
    label: "整理券・受付管理",
    icon: "queue",
    metadataTitle: "簡易整理券・順番待ちシステム",
    shortDescription:
      "QRコードから受付し、現在の待ち状況をスマートフォンで確認。専用アプリや会員登録を使わない、シンプルな順番待ちシステムです。",
    cardFeatures: ["QRコード受付", "アカウント登録不要", "最大20言語に対応予定"],
    priceLine: "初期98,000円〜／月額7,980円〜",
    heroTitle: "受付の混雑を、QRコードでもっと簡単に。",
    description:
      "店頭のQRコードを読み取るだけで受付が完了。お客様はスマートフォンから現在の待ち状況を確認でき、店舗側は管理画面から呼び出しや受付状況を管理できます。",
    pains: [
      "店頭に行列ができている",
      "紙の整理券を管理するのが大変",
      "呼び出し時にお客様がその場にいない",
      "外国人のお客様への案内が難しい",
      "専用端末や高価な機器を置きたくない",
    ],
    features: [
      "QRコードから受付",
      "受付番号の自動発行",
      "現在の待ち人数表示",
      "呼び出し状況の確認",
      "店舗用管理画面",
      "受付完了・取消操作",
      "日本語・英語などの多言語表示",
      "アカウント登録なしで利用できる設計",
    ],
    usage: [
      {
        title: "お客様がQRコードを読み取る",
        description: "アプリのインストールや会員登録をせず、ブラウザから受付します。",
      },
      {
        title: "待ち状況をスマートフォンで確認",
        description: "店外で過ごしながら、現在の呼び出し番号と待ち時間の目安を確認します。",
      },
      {
        title: "店舗画面から呼び出し・完了",
        description: "スタッフは受付一覧を見ながら、呼び出しや完了などの状態を整理します。",
      },
    ],
    pricing: {
      initial: "98,000円〜",
      monthly: "7,980円〜",
      note: "多言語数、通知方法、店舗数、受付窓口数などにより料金が変わります。",
    },
    faq: [
      {
        question: "専用アプリは必要ですか？",
        answer: "今回の想定では不要です。お客様はQRコードからブラウザを開いて利用する設計です。",
      },
      {
        question: "複数の受付窓口でも使えますか？",
        answer: "窓口数や運用方法を伺い、必要な管理方法をご提案する想定です。",
      },
      {
        question: "この画面から実際に整理券を発行できますか？",
        answer: "現在掲載しているものは画面確認用のデモです。実際の受付やデータ保存は行いません。",
      },
      {
        question: "すべての店舗で20言語が必要ですか？",
        answer:
          "必ずしも必要ではありません。通常は日本語、英語、中国語、韓国語を含む5言語から開始し、来店されるお客様の傾向に応じて10言語または15言語へ追加する方法をおすすめしています。",
      },
      {
        question: "店舗独自の案内文も翻訳できますか？",
        answer:
          "対応可能です。定型的な受付文言は基本プランに含みますが、店舗独自の長文、臨時案内、専門用語を含む文章は、内容と対応言語数に応じて別途お見積もりとなります。",
      },
      {
        question: "翻訳は完全に正確ですか？",
        answer:
          "デモ段階の翻訳は参考表示です。正式提供時には用途に応じて内容を確認します。重要な案内や専門的な表現については、翻訳者またはネイティブによる確認を推奨します。",
      },
      {
        question: "外国人のお客様はアプリの登録が必要ですか？",
        answer:
          "基本設計では、店頭のQRコードを読み取り、言語を選択して受付するため、専用アプリや会員登録は不要です。",
      },
      {
        question: "利用者のスマートフォン言語を自動判定できますか？",
        answer:
          "ブラウザの言語設定を参考に、対応言語の中から初期表示する設計を想定しています。利用者は画面上からいつでも言語を変更できます。",
      },
    ],
  },
  {
    slug: "review-reply",
    name: "口コミ返信サポート",
    label: "Google口コミ・AI活用",
    icon: "review",
    metadataTitle: "Google口コミ返信支援ツール",
    shortDescription:
      "Google口コミの内容に合わせてAIが返信文を作成。返信漏れを防ぎながら、お店らしい丁寧な対応を続けられるようにします。",
    cardFeatures: ["AIによる返信案作成", "高評価・低評価で対応を分岐", "多言語口コミに対応予定"],
    priceLine: "初期49,800円〜／月額4,980円〜",
    heroTitle: "口コミ返信をためずに、お店らしい対応を。",
    description:
      "Google口コミの内容をAIが読み取り、店舗の雰囲気に合わせた返信案を作成します。確認してから投稿する運用にも、自動化を含めた運用にも対応できる設計を想定しています。",
    pains: [
      "口コミへの返信が後回しになる",
      "毎回文章を考えるのが大変",
      "スタッフによって返信品質が変わる",
      "外国語の口コミに返信できない",
      "低評価口コミへの対応方法が分からない",
    ],
    features: [
      "AIによる返信案作成",
      "店舗独自の文章トーン設定",
      "高評価口コミと低評価口コミの対応分岐",
      "低評価口コミの管理者確認",
      "多言語口コミへの返信案作成",
      "返信履歴の確認",
      "未返信口コミの通知",
      "危険なキーワードを含む口コミの自動停止",
    ],
    usage: [
      {
        title: "未返信の口コミを確認",
        description: "評価や本文を一覧で確認し、対応の優先順位を整理します。",
      },
      {
        title: "返信トーンを選んで案を作成",
        description: "丁寧・親しみやすい・簡潔など、お店に合う文章の方向性を選びます。",
      },
      {
        title: "人が確認してから承認",
        description: "特に低評価や重要な内容は管理者が確認し、必要に応じて編集してから利用します。",
      },
    ],
    pricing: {
      initial: "49,800円〜",
      monthly: "4,980円〜",
      upperPlan: "多言語・分析機能付き 月額6,980円〜",
      note: "口コミ件数、返信方法、対象店舗数、必要な分析機能によって料金が変わります。",
    },
    faq: [
      {
        question: "AIが自動でGoogleへ投稿しますか？",
        answer:
          "このデモはGoogle APIと接続していません。本番仕様でも、まず返信案を人が確認する運用を基本としてご提案します。",
      },
      {
        question: "低評価の口コミも自動返信できますか？",
        answer:
          "クレーム、事故、返金、法律問題などを含む内容は完全自動にせず、管理者確認を挟む運用を推奨します。",
      },
      {
        question: "お店らしい言葉づかいにできますか？",
        answer: "既存の返信例や希望する雰囲気を伺い、文章トーンを調整する設計を想定しています。",
      },
    ],
  },
  {
    slug: "skill-shift",
    name: "スキル別AIシフト",
    label: "シフト作成・人員配置",
    icon: "shift",
    metadataTitle: "スキル別AIシフト作成",
    shortDescription:
      "スタッフのスキル、希望休、必要人数などを考慮して、シフト案を自動作成。毎月のシフト調整にかかる負担を減らします。",
    cardFeatures: ["スキルを考慮した配置", "希望休・必要人数を反映", "作成後の手動調整に対応予定"],
    priceLine: "初期198,000円〜／月額14,800円〜",
    heroTitle: "経験とスキルを考慮した、無理のないシフト案を。",
    description:
      "希望休や必要人数だけでなく、スタッフごとのスキル、担当できる業務、経験値などを考慮して、シフト案を自動作成します。",
    pains: [
      "シフト作成に毎月何時間もかかる",
      "新人だけになる時間帯が発生する",
      "特定の人に勤務が偏る",
      "希望休と必要人数の両立が難しい",
      "資格やスキルを考慮する必要がある",
      "作成後の調整作業が多い",
    ],
    features: [
      "スタッフ情報登録",
      "スキル・資格登録",
      "希望休登録",
      "勤務可能時間登録",
      "時間帯ごとの必要人数設定",
      "必要スキルの設定",
      "最大連勤日数の設定",
      "勤務時間上限の設定",
      "ベテランと新人の組み合わせ",
      "シフト案の自動作成",
      "自動作成後の手動調整",
      "CSVまたはExcel出力を想定",
    ],
    usage: [
      {
        title: "スタッフと店舗ルールを登録",
        description: "スキル、勤務可能時間、希望休、必要人数などの条件を整理します。",
      },
      {
        title: "固定データからシフト案を作成",
        description: "複数の条件を考慮した配置案を画面に表示する想定です。",
      },
      {
        title: "警告を確認して手動調整",
        description: "不足人数やスキルの偏りを確認し、最終判断は管理者が行います。",
      },
    ],
    pricing: {
      initial: "198,000円〜",
      monthly: "14,800円〜",
      note: "スタッフ数、スキル条件、店舗数、シフトルール、外部システム連携によって料金が変わります。",
    },
    faq: [
      {
        question: "勤怠管理や給与計算もできますか？",
        answer: "今回のデモはシフト案の作成イメージに限定しています。勤怠管理や給与計算は対象外です。",
      },
      {
        question: "作成後に人が変更できますか？",
        answer: "自動作成後に管理者が手動調整できる設計を想定しています。",
      },
      {
        question: "AIが必ず最適なシフトを作りますか？",
        answer:
          "最終的な判断は管理者が行います。店舗固有の事情や急な変更もあるため、案と警告を確認して調整する使い方を想定しています。",
      },
    ],
  },
];

export const queueLanguagePlans = [
  {
    name: "スタンダード5言語",
    label: "基本プラン",
    languageCount: 5,
    initial: "98,000円〜",
    monthly: "7,980円〜",
    languages: "日本語・英語・中国語（簡体字／繁体字）・韓国語",
    recommended: false,
  },
  {
    name: "アジア10言語",
    label: "訪日客向けおすすめ",
    languageCount: 10,
    initial: "148,000円〜",
    monthly: "9,800円〜",
    languages: "基本5言語＋タイ語・ベトナム語・インドネシア語・マレー語・フィリピン語",
    recommended: false,
  },
  {
    name: "グローバル15言語",
    label: "おすすめ",
    languageCount: 15,
    initial: "198,000円〜",
    monthly: "12,800円〜",
    languages: "アジア10言語＋フランス語・スペイン語・ドイツ語・イタリア語・ポルトガル語",
    recommended: true,
  },
  {
    name: "グローバル20言語",
    label: "最大20言語",
    languageCount: 20,
    initial: "298,000円〜",
    monthly: "19,800円〜",
    languages: "グローバル15言語＋オランダ語・ポーランド語・ロシア語・ウクライナ語・ギリシャ語",
    recommended: false,
  },
] as const;

export const queueLanguageOptions = [
  ["店舗独自文言の翻訳登録", "1言語5,000円〜"],
  ["専門翻訳者・ネイティブチェック", "1言語10,000円〜"],
  ["言語の追加", "1言語10,000円〜"],
  ["リアルタイム自動翻訳", "月額1,000円〜"],
  ["多言語通知文の追加", "別途見積もり"],
  ["複数店舗への展開", "別途見積もり"],
] as const;

export const queuePricingNotes = [
  "表示価格は、小規模店舗向けの参考価格です。対応言語数、受付画面数、店舗独自の案内文、翻訳確認の範囲、通知方法、店舗数などによって料金が変わります。",
  "固定された受付文言の翻訳を基本料金に含みます。店舗独自の長文翻訳、ネイティブチェック、リアルタイム翻訳は別途お見積もりとなります。",
] as const;

export const queueLocalizationReasons = [
  "翻訳文の作成・登録",
  "各言語での表示・操作確認",
  "機能更新時の翻訳メンテナンス",
] as const;

export const solutionComparisonRows = [
  {
    label: "主な対象",
    values: ["飲食店、サロン、医院、窓口", "店舗、小規模事業者", "店舗、施設、中小企業"],
  },
  {
    label: "解決する課題",
    values: ["受付と待ち時間の混雑", "返信漏れと文章作成", "シフト作成と人員配置"],
  },
  {
    label: "利用者登録",
    values: ["原則不要", "店舗管理者のみ", "管理者・スタッフ"],
  },
  {
    label: "導入価格",
    values: ["98,000円〜", "49,800円〜", "198,000円〜"],
  },
  {
    label: "月額価格",
    values: ["7,980円〜", "4,980円〜", "14,800円〜"],
  },
  {
    label: "導入難易度",
    values: ["低い", "低い", "中程度"],
  },
  {
    label: "カスタマイズ",
    values: ["対応予定", "対応予定", "店舗ルールに応じて対応"],
  },
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
  name: "店舗DXスターターパック",
  includes: [
    "かんたん順番待ち",
    "口コミ返信サポート",
    "スキル別AIシフト",
    "初期設定",
    "基本操作サポート",
  ],
  price: "初期298,000円〜／月額24,800円〜",
  note: "店舗規模、スタッフ数、必要機能によって料金が変わります。",
} as const;

export function getSolution(slug: string): SolutionData | undefined {
  return solutions.find((solution) => solution.slug === slug);
}
