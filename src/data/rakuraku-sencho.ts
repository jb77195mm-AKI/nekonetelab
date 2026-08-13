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

/**
 * モニターの無料期間（月数）。
 * ここを変えると、LP・要約バッジ・注記・構造化データがすべて追従する。
 * 特定商取引法表記（src/data/legal-documents.ts）だけは手動で合わせること。
 */
export const rakurakuFreeMonths = 2;

/** 無料期間の終了後、最初に請求が発生する月 */
export const rakurakuFirstBillingMonth = rakurakuFreeMonths + 1;

/** モニター条件の要約。ヘッダー下・料金・最終CTA・トップページ導線で共通に使う */
export const rakurakuMonitorBadge = `先着5船｜初期費用0円｜最初の${rakurakuFreeMonths}か月無料`;

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
  heading: "ホームページがない船長さんは、まるごとお任せください。",
  body: "現在ホームページを持っていない場合や、古いホームページしかない場合は、簡易ホームページの制作もラクラク船長に含まれています。別途の制作費はいただきません。",
  /** 簡易ホームページに含まれるもの */
  features: [
    {
      title: "外国人のお客様にも伝わる",
      description:
        "外国語での案内に対応したページを用意します。船長は日本語のままで大丈夫です。",
    },
    {
      title: "予約から支払いまでひとつの流れで",
      description:
        "お客様がページを見て、空きを確認し、予約して、支払うところまでを一本の流れにします。",
    },
    {
      title: "スマートフォンで見やすく",
      description:
        "お客様の多くはスマートフォンから見ます。小さい画面で読みやすいページにします。",
    },
  ],
  note: "※すでにあるホームページを大幅に作り替える場合は、内容に応じて個別に見積りいたします。",
} as const;

/**
 * お客様の支払い方法。船長が船の運用に合わせて選ぶ。
 * 特定商取引法表記（src/data/legal-documents.ts）と内容を一致させる。
 * 船長向けの文章のため「Stripe」等の固有名詞は使わない。
 */
export const rakurakuPaymentOptions = {
  heading: "お支払い方法は、船長が選べます。",
  description:
    "船の運用に合わせて、次の3つから選べます。あとから変更することもできます。",
  options: [
    {
      title: "現地払い",
      summary: "今までどおり",
      description:
        "予約だけをホームページで受け、お支払いは当日その場で。今のやり方を変えたくない船長さんはこちらです。",
    },
    {
      title: "オンラインで全額",
      summary: "当日のやり取りが減る",
      description:
        "予約のときに、クレジットカードで全額をお支払いいただきます。当日は現金のやり取りがありません。",
    },
    {
      title: "予約金だけ先に",
      summary: "直前キャンセル対策",
      description:
        "予約のときに予約金だけをお支払いいただき、残りは当日。急なキャンセルの負担を減らせます。",
    },
  ],
  /**
   * 決済アカウントは船長名義で開設し、代金は船長が直接受け取る。
   * 猫の手デジタルラボは代金を預からない（特商法表記と一致させる）。
   */
  settlement: {
    title: "お金は、船長さんに直接入ります。",
    description:
      "オンラインでお支払いいただいた代金は、船長さま名義の口座へ直接入金されます。猫の手デジタルラボがお金をお預かりすることはありません。受け取りに必要な登録は本人確認などがありますが、手続きはこちらでお手伝いします。",
  },
  note: "※クレジットカードでのお支払いには、決済サービスの手数料がかかります。キャンセル・返金の条件は、船ごとに決めていただきます。",
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
      "ホームページがない場合は、簡易ホームページの制作",
      "Googleカレンダー等を活用した予約運用支援",
      "欠航時の一斉連絡機能",
      "多言語コミュニケーション対応",
      "システム保守",
      "基本サポート",
    ],
    note: "※すでにあるホームページの大幅な改修は別途。",
  },
  monitor: {
    label: "モニター募集",
    limitLabel: "先着5船限定",
    initialPrice: 0,
    /** 無料期間（月数）。終了後は通常の月額へ移行する */
    freeMonths: rakurakuFreeMonths,
    /** 無料期間の終了後に発生する月額。通常料金と同額 */
    monthlyPriceAfterFree: 9_800,
    conditions: ["導入後のフィードバック", "導入事例としての掲載協力"],
    /** 「ずっと無料」と誤解させないための注記 */
    note: `無料は最初の${rakurakuFreeMonths}か月間です。${rakurakuFirstBillingMonth}か月目から月額9,800円（税込）が発生します。無料期間中にやめた場合、料金はかかりません。`,
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
      "簡易ホームページの制作がラクラク船長に含まれています。別途の制作費はいただきません。外国語での案内、予約から支払いまでの流れ、スマートフォン表示に対応します。",
  },
  {
    question: "料金は今までどおり当日その場で受け取りたいのですが。",
    answer:
      "現地払いも選べます。予約だけをホームページで受け、お支払いは当日その場で、という使い方ができます。オンラインで全額、予約金だけ先に、という方法も選べます。",
  },
  {
    question: "オンラインで受け取ったお金は、どこに入りますか？",
    answer:
      "船長さま名義の口座へ直接入金されます。猫の手デジタルラボがお金をお預かりすることはありません。受け取りのための登録には身分証の確認などが必要ですが、手続きはこちらでお手伝いします。",
  },
] as const;

/** SECTION 11: 最終CTA */
export const rakurakuFinalCta = {
  heading: "予約対応を減らして、もっと釣りに集中しませんか？",
  body: "現在、ラクラク船長のモニター船を募集しています。",
  note: rakurakuMonitorBadge,
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
