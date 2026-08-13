/**
 * ラクラク船長（釣り船・遊漁船の船長向け予約サポートサービス）の掲載内容。
 *
 * 表記ルール:
 * - サービス名は「ラクラク船長」で統一する。「楽々船長」「船長ラクラク」「船ラク」等は使用しない。
 * - 運営会社名は「猫の手デジタルラボ」。
 * - 未実装の機能（LINE/SMS/WhatsApp の自動送信、Stripe決済、自動返金、振替自動確定、
 *   AIチャット、在庫の完全自動同期）は掲載しない。連絡・多言語対応は運用支援として記載する。
 */

export const rakurakuMeta = {
  serviceName: "ラクラク船長",
  operator: "猫の手デジタルラボ",
  title:
    "ラクラク船長｜釣り船の予約・欠航連絡・外国人対応をもっとラクに",
  description:
    "ラクラク船長は、釣り船・遊漁船の船長向け予約サポートサービス。予約管理、時化の欠航連絡、外国人対応をスマホ中心でラクにします。運営：猫の手デジタルラボ。",
  path: "/rakuraku-sencho",
} as const;

/** サイト全体で統一する CTA 文言 */
export const rakurakuCta = {
  primaryLabel: "無料モニターに申し込む",
  secondaryLabel: "まずは相談する",
  serviceLabel: "サービスを見る",
  /** 問い合わせフォームのプラン選択を初期選択させる */
  primaryHref: "/contact?plan=rakuraku-sencho",
  secondaryHref: "/contact?plan=rakuraku-sencho-regular",
} as const;

export const rakurakuHero = {
  eyebrow: "釣り船・遊漁船の船長さんへ",
  heading: "船長の予約対応を、もっとラクに。",
  subheading:
    "予約管理・外国人対応・時化の一斉連絡。釣り船の面倒なやり取りを「ラクラク船長」がサポートします。",
  note: "今のホームページやGoogleカレンダーを活かしたまま導入できます。",
} as const;

/** SECTION 02: 船長さん、こんなことで困っていませんか？ */
export const rakurakuPains = [
  {
    title: "電話・LINEで予約管理",
    description: "予約があちこちに散らばる。",
  },
  {
    title: "空き人数の確認が大変",
    description: "毎回カレンダーやメモを確認。",
  },
  {
    title: "時化のたびに一人ずつ連絡",
    description: "欠航の日に電話・LINEを繰り返す。",
  },
  {
    title: "外国人から問い合わせ",
    description: "英語で何を返せばいいか分からない。",
  },
  {
    title: "HP更新が面倒",
    description: "空き状況を更新するのが大変。",
  },
] as const;

/** SECTION 03: ラクラク船長とは？ */
export const rakurakuAbout = {
  heading: "その面倒な予約対応、ラクラク船長がお手伝いします。",
  body: [
    "ラクラク船長は、釣り船・遊漁船の船長向けに、予約管理やお客様への連絡をラクにするサービスです。",
    "今使っているホームページやGoogleカレンダーを活かしながら導入できます。大がかりなシステムへの乗り換えは必要ありません。",
  ],
} as const;

export type RakurakuImageKey =
  | "reservation"
  | "cancellation"
  | "multilingual";

export interface RakurakuFeature {
  number: string;
  heading: string;
  description: string;
  /** 画像を伴わない項目もある */
  image?: RakurakuImageKey;
  imageAlt?: string;
  /** 強調して大きく見せる項目 */
  emphasis?: boolean;
  /** 見出し下に置く強調コピー */
  highlight?: string;
}

/** SECTION 04: できること */
export const rakurakuFeatures: readonly RakurakuFeature[] = [
  {
    number: "01",
    heading: "予約管理をもっとシンプルに",
    description:
      "出船日・空き人数・予約状況を、スマホから確認。必要以上に複雑な管理画面を覚える必要はありません。",
    image: "reservation",
    imageAlt:
      "スマートフォンで出船日と空き人数を確認する船長のイラスト",
  },
  {
    number: "02",
    heading: "時化たら、欠航連絡をまとめて送信。",
    description:
      "船長がスマートフォンから欠航操作。予約しているお客様へまとめて連絡できる仕組みです。「一人ずつ電話・LINE」の負担を減らします。",
    image: "cancellation",
    imageAlt:
      "時化の港で、欠航の連絡をまとめて送る様子のイラスト",
    emphasis: true,
  },
  {
    number: "03",
    heading: "船長は、日本語で大丈夫。",
    description:
      "外国人のお客様とのやり取りは、多言語対応をサポート。船長が外国語を入力する負担を減らします。",
    image: "multilingual",
    imageAlt:
      "外国人のお客様と船長がやり取りしている様子のイラスト",
    highlight: "英語を覚える必要はありません。",
  },
  {
    number: "04",
    heading: "今のやり方を、大きく変えません。",
    description:
      "新しい巨大な予約システムへすべて移行するのではなく、現在使用しているホームページやGoogleカレンダーをできるだけ活用する設計です。",
  },
] as const;

/** SECTION 05: 船長がやるのは、ほぼこれだけ */
export const rakurakuCaptainSteps = [
  { number: "1", label: "空き人数を入力" },
  { number: "2", label: "予約を確認" },
  { number: "3", label: "時化たら中止を押す" },
] as const;

export const rakurakuCaptainStepsNote =
  "難しい操作は、できるだけ減らしました。";

/** SECTION 06: Before / After */
export const rakurakuComparison = {
  heading: "船長は、船に乗る仕事に集中。",
  before: {
    label: "今まで",
    items: [
      "電話・LINEで予約",
      "手帳やメモで管理",
      "時化の日は一人ずつ連絡",
      "外国語問い合わせに困る",
    ],
  },
  after: {
    label: "ラクラク船長",
    items: [
      "HPから予約導線",
      "Googleカレンダーで確認",
      "欠航連絡をまとめて送信",
      "外国人対応をサポート",
    ],
  },
} as const;

/** SECTION 07: ホームページがなくても相談できます */
export const rakurakuNoWebsite = {
  heading: "ホームページがない船長さんも大丈夫です。",
  body: "現在ホームページを持っていない場合や、古いホームページしかない場合も、猫の手デジタルラボへご相談いただけます。ラクラク船長が使いやすいシンプルなホームページ制作にも対応します。",
  note: "※HP制作費については内容に応じて個別見積。",
} as const;

/**
 * 契約条件。通常・モニターで共通。
 * 特定商取引法表記（src/data/legal-documents.ts の「## ラクラク船長」）と必ず一致させる。
 */
export const rakurakuTerms = [
  { label: "最低利用期間", value: "なし（1か月単位で自動更新）" },
  { label: "解約申出期限", value: "次回決済日の10日前まで" },
  { label: "中途解約金", value: "なし" },
] as const;

/** SECTION 08: 料金 */
export const rakurakuPricing = {
  regular: {
    label: "通常料金",
    initialPrice: 55_000,
    monthlyPrice: 9_800,
    includes: [
      "初期設定",
      "既存HPへの予約導線設置",
      "Googleカレンダー等を活用した予約運用支援",
      "欠航時の一斉連絡機能",
      "多言語コミュニケーション対応",
      "システム保守",
      "基本サポート",
    ],
    note: "※新規ホームページ制作や大幅な既存HP改修は別途。",
  },
  monitor: {
    label: "モニター募集",
    limitLabel: "先着5船限定",
    initialPrice: 0,
    monthlyPrice: 4_980,
    conditions: ["導入後のフィードバック", "導入事例としての掲載協力"],
    /** 「完全無料」と誤解させないための注記 */
    note: "モニター価格でも月額4,980円（税込）が必要です。無料になるのは初期費用のみです。",
  },
} as const;

/** SECTION 09: 導入まで */
export const rakurakuFlow = [
  { step: "STEP 1", label: "お問い合わせ" },
  { step: "STEP 2", label: "現在のHP・予約方法を確認" },
  { step: "STEP 3", label: "ラクラク船長を設定して利用開始" },
] as const;

export const rakurakuFlowNote = "面倒な初期設定はこちらで対応します。";

/** SECTION 10: よくある質問 */
export const rakurakuFaqItems = [
  {
    question: "パソコンが苦手でも使えますか？",
    answer:
      "基本的な操作はスマートフォン中心で使えるように設計しています。",
  },
  {
    question: "今のホームページはそのまま使えますか？",
    answer:
      "基本的には既存ホームページを活かしながら導入できます。",
  },
  {
    question: "Googleカレンダーを使っています。",
    answer:
      "現在の運用を確認したうえで、できるだけ今の使い方を活かして導入します。",
  },
  {
    question: "外国語が話せません。",
    answer:
      "船長は日本語中心で対応できるよう、多言語コミュニケーションをサポートします。",
  },
  {
    question: "時化の場合はどうしますか？",
    answer:
      "船長側から欠航操作を行い、対象のお客様へまとめて連絡できる仕組みです。",
  },
  {
    question: "ホームページを持っていません。",
    answer:
      "猫の手デジタルラボでシンプルなホームページ制作も対応可能です。",
  },
] as const;

/** SECTION 11: 最終CTA */
export const rakurakuFinalCta = {
  heading: "予約対応を減らして、もっと釣りに集中しませんか？",
  body: "現在、ラクラク船長のモニター船を募集しています。",
  note: "先着5船｜初期費用0円｜月額4,980円",
} as const;

/** ヘッダーのナビゲーション */
export const rakurakuNavigation = [
  { label: "ラクラク船長とは", href: "#about" },
  { label: "できること", href: "#features" },
  { label: "料金", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "お問い合わせ", href: rakurakuCta.primaryHref },
] as const;

export function formatRakurakuYen(value: number): string {
  return `${value.toLocaleString("ja-JP")}円`;
}
