import { dxToolOptions, type DxToolOption } from "@/data/dx-tool-options";
import type { ServiceStatus } from "@/data/service-status";

export type DxToolSlug = "inbound-queue" | "review-support" | "skill-shift";

export interface PriceRange {
  minimum: number;
  maximum?: number;
  suffix?: string;
  note?: string;
}

export interface DxTool {
  slug: DxToolSlug;
  legacySlug: "queue" | "review-reply" | "skill-shift";
  category: string;
  auxiliaryLabel?: string;
  name: string;
  catchphrase: string;
  description: string;
  problems: string[];
  features: string[];
  standardScope: string[];
  exclusions: string[];
  options: DxToolOption[];
  usageFlow: string[];
  initialPrice: PriceRange;
  monthlyPrice: PriceRange;
  minimumTermMonths?: number;
  status: ServiceStatus;
  featured?: boolean;
  priority?: number;
  humanApproval: string;
}

export const dxTools: DxTool[] = [
  {
    slug: "inbound-queue",
    legacySlug: "queue",
    category: "インバウンド・多言語受付",
    auxiliaryLabel: "整理券・順番待ち管理",
    name: "インバウンド対応 かんたん順番待ち",
    catchphrase: "外国人のお客様も、QRを読み込むだけ。母国語で受付と待ち時間を確認できます。",
    description:
      "アプリのインストールや会員登録は不要です。飲食店、観光施設、人気店舗の店頭に設置したQRコードから、利用者が自分の言語を選んで受付できる仕組みを設計します。",
    problems: [
      "外国人のお客様への受付説明に時間がかかる",
      "紙の整理券や店頭行列を整理したい",
      "待ち時間に店外で過ごしてもらいたい",
      "専用アプリや会員登録を求めたくない",
    ],
    features: [
      "QRコード受付",
      "アプリ・会員登録不要",
      "言語選択",
      "受付番号発行",
      "待ち人数表示",
      "自分の順番確認",
      "受付停止",
      "呼出済み・対応済み管理",
      "店舗管理画面",
      "標準10言語",
      "操作マニュアル",
      "メール・フォームサポート",
    ],
    standardScope: ["1店舗", "受付列1つ", "標準10言語", "基本操作案内の定型翻訳"],
    exclusions: [
      "店舗独自の長文・メニュー全文",
      "詳細な利用規約・医療情報",
      "ネイティブチェック・翻訳者監修",
      "LINE・SMS等の外部通知",
      "外部システム連携",
    ],
    options: dxToolOptions["inbound-queue"],
    usageFlow: [
      "店頭のQRコードを読み取る",
      "使用言語を選択する",
      "人数など必要最小限を入力する",
      "受付番号と待ち状況を確認する",
      "順番が近づいたら店舗へ戻る",
    ],
    initialPrice: { minimum: 49_800, suffix: "～" },
    monthlyPrice: { minimum: 6_980, suffix: "～" },
    minimumTermMonths: 12,
    status: "consultation",
    featured: true,
    priority: 1,
    humanApproval: "受付条件や案内文を店舗と確認し、試験運用後に本運用へ進みます。",
  },
  {
    slug: "review-support",
    legacySlug: "review-reply",
    category: "口コミ・店舗コミュニケーション",
    name: "口コミ返信サポート",
    catchphrase: "AIが返信案を作り、店舗が確認。返信漏れを減らしながら、お店らしさを保ちます。",
    description:
      "Google口コミの内容と星評価に応じた返信案をAIが作成します。店舗ごとの文体や禁止表現を設定し、人が確認してから投稿する運用を標準とします。",
    problems: [
      "口コミ返信が後回しになる",
      "毎回文章を考える負担が大きい",
      "担当者によって文体が変わる",
      "外国語の口コミに対応しづらい",
      "低評価口コミの扱いに迷う",
    ],
    features: [
      "Google口コミ取得",
      "AI返信案作成",
      "星評価による分岐",
      "高評価・低評価別の返信案",
      "店舗ごとの文体",
      "禁止表現設定",
      "多言語口コミ対応",
      "返信履歴管理",
      "接続テスト",
      "操作マニュアル",
    ],
    standardScope: ["1店舗", "月30件", "基本文体1パターン", "人による確認後の投稿"],
    exclusions: ["完全自動投稿", "月30件を超える処理", "詳細レポート", "返信代行", "複数店舗"],
    options: dxToolOptions["review-support"],
    usageFlow: ["未返信口コミを確認", "AIが返信案を作成", "店舗スタッフが内容を確認・編集", "確認後に投稿"],
    initialPrice: { minimum: 11_000, suffix: "～" },
    monthlyPrice: { minimum: 3_980, suffix: "～" },
    minimumTermMonths: 6,
    status: "consultation",
    priority: 2,
    humanApproval: "AIが返信案を作成し、店舗側が確認して投稿する方式を標準とします。",
  },
  {
    slug: "skill-shift",
    legacySlug: "skill-shift",
    category: "シフト作成・人員配置",
    name: "スキル別AIシフト",
    catchphrase: "希望休だけでなく、スキルと必要人数を考慮したシフト案を作成します。",
    description:
      "スタッフのスキル、勤務可能時間、希望休、必要人数、基本的な勤務制限を整理し、AIがシフト案と人員過不足を表示します。最終確定は管理者が行います。",
    problems: [
      "シフト作成に毎月時間がかかる",
      "必要なスキルを持つ人の配置が難しい",
      "希望休と必要人数の両立が難しい",
      "連勤や勤務時間の確認が大変",
      "作成後の調整箇所が分かりにくい",
    ],
    features: [
      "スタッフ・スキル・スキルレベル登録",
      "希望休・勤務可能時間",
      "必要人数",
      "基本的な連勤・勤務時間上限",
      "スキルを考慮した配置",
      "シフト案自動作成",
      "人員過不足表示",
      "作成後の手動調整",
      "初回説明60分",
      "操作マニュアル",
    ],
    standardScope: [
      "1店舗",
      "スタッフ20名",
      "スキル5種類",
      "シフトパターン10種類",
      "希望休・必要人数・基本的な勤務制限",
      "初期動作テスト・初回説明",
    ],
    exclusions: ["複雑な勤務条件", "勤怠・給与システム連携", "複数店舗・部署", "シフト作成代行", "現地研修"],
    options: dxToolOptions["skill-shift"],
    usageFlow: [
      "スタッフと店舗ルールを登録",
      "希望休と勤務可能時間を入力",
      "AIがシフト案と警告を表示",
      "管理者が手動調整して確定",
    ],
    initialPrice: { minimum: 79_800, suffix: "～" },
    monthlyPrice: { minimum: 9_800, suffix: "～" },
    minimumTermMonths: 12,
    status: "consultation",
    priority: 3,
    humanApproval: "AIはシフト案と警告を作成し、勤務条件と最終シフトは管理者が確認・確定します。",
  },
];

export function getDxTool(slug: string): DxTool | undefined {
  return dxTools.find((tool) => tool.slug === slug || tool.legacySlug === slug);
}

export function formatPriceRange(range: PriceRange): string {
  const formatter = new Intl.NumberFormat("ja-JP");
  const minimum = `${formatter.format(range.minimum)}円`;
  const maximum = range.maximum ? `～${formatter.format(range.maximum)}円` : "";
  return `${minimum}${maximum}${range.suffix ?? ""}`;
}
