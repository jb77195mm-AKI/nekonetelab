import type { PriceRange } from "@/data/dx-tools";
import type { ServiceStatus } from "@/data/service-status";

export type DxPackSlug =
  | "salon-retention"
  | "field-project"
  | "retail-food-backoffice";

export interface DxPack {
  slug: DxPackSlug;
  name: string;
  shortName: string;
  target: string;
  catchphrase: string;
  description: string;
  problems: string[];
  existingTools: string[];
  addedFeatures: string[];
  mvpSteps: string[];
  kpis: string[];
  initialPrice: PriceRange;
  monthlyPrice: PriceRange;
  priceNote: string;
  status: ServiceStatus;
  humanApproval: string;
}

export const dxPacks: DxPack[] = [
  {
    slug: "salon-retention",
    name: "サロン再来店DXパック",
    shortName: "サロン再来店DX",
    target: "美容室、理容室、ネイルサロン、エステ、個人サロン",
    catchphrase: "再来店、口コミ、LINEフォローを無理なく続けられる仕組みに",
    description:
      "予約・POS・顧客台帳・LINE公式などを活かし、未回来店者の抽出からフォロー文の確認、月次の再来店状況までを一つの流れに整理します。",
    problems: [
      "一度来店した顧客が戻らない",
      "LINEフォローに時間がかかる",
      "Google口コミが増えない",
      "空き枠告知が遅れる",
      "顧客情報が埋もれている",
      "再案内の時期が分からない",
    ],
    existingTools: [
      "予約システム",
      "POS・決済",
      "顧客台帳",
      "LINE公式",
      "Googleビジネスプロフィール",
      "Instagram",
      "Excel・スプレッドシート",
    ],
    addedFeatures: [
      "休眠顧客候補抽出",
      "30・60・90日未回来店表示",
      "施術内容別の再来店目安",
      "顧客ごとのLINE文作成",
      "お礼メッセージ",
      "口コミ依頼タイミング",
      "空き枠告知文",
      "次回アプローチ日",
      "月次再来店レポート",
    ],
    mvpSteps: [
      "CSV・スプレッドシート取り込み",
      "未回来店者抽出",
      "AIフォロー文作成",
      "スタッフによる承認",
      "LINE送信用一覧",
      "月次再来店状況表示",
    ],
    kpis: ["再来店率", "次回予約率", "休眠顧客復活数", "口コミ件数", "キャンセル率", "フォロー作業時間"],
    initialPrice: { minimum: 100_000, maximum: 200_000 },
    monthlyPrice: { minimum: 19_800, maximum: 39_800 },
    priceNote: "初期費用の分割払いにも対応しています。最低利用期間と途中解約条件はお見積もり時にご案内します。",
    status: "consultation",
    humanApproval: "AIが文章を作成し、店舗スタッフが確認してから送信する運用を基本とします。",
  },
  {
    slug: "field-project",
    name: "現場案件管理DXパック",
    shortName: "現場案件管理DX",
    target: "工務店、リフォーム、土建、設備、清掃、修理、訪問サービス",
    catchphrase: "問い合わせから見積・施工報告まで、案件の対応漏れを減らす",
    description:
      "会計・見積ソフト、Google Drive、LINE、カレンダーなどを残し、問い合わせ・現地調査・見積・施工・請求の状況を確認できる流れを追加します。",
    problems: [
      "問い合わせが分散",
      "現地調査メモが整理されていない",
      "見積作成が遅い",
      "写真整理が大変",
      "顧客報告が遅れる",
      "案件状況が属人化",
      "対応漏れが発生する",
    ],
    existingTools: [
      "会計・見積ソフト",
      "Google Drive",
      "LINE",
      "Googleカレンダー",
      "電子契約",
      "施工管理システム",
      "Excel・スプレッドシート",
    ],
    addedFeatures: [
      "問い合わせ一元管理",
      "案件ステータス管理",
      "音声メモのAI整理",
      "見積説明文下書き",
      "写真の案件別整理",
      "顧客向け進捗文作成",
      "未対応通知",
      "請求・入金タスク",
      "経営者向け案件サマリー",
    ],
    mvpSteps: [
      "問い合わせ・電話メモから案件登録",
      "案件一覧・ステータス表示",
      "現地調査メモ整理",
      "Drive案件フォルダ作成",
      "写真・見積・契約書の紐付け",
      "顧客報告文作成",
      "対応漏れ通知",
    ],
    kpis: ["初動時間", "見積提出日数", "対応漏れ件数", "成約率", "報告書作成時間", "未入金件数", "案件確認時間"],
    initialPrice: { minimum: 200_000, maximum: 400_000 },
    monthlyPrice: { minimum: 39_800, maximum: 79_800 },
    priceNote: "初期費用の分割払いにも対応しています。最低利用期間と途中解約条件はお見積もり時にご案内します。",
    status: "consultation",
    humanApproval: "AIは情報整理と下書きを担当し、金額・契約条件の最終判断は担当者が行います。",
  },
  {
    slug: "retail-food-backoffice",
    name: "小売・飲食バックオフィスDXパック",
    shortName: "小売・飲食DX",
    target: "飲食店、カフェ、和菓子店、土産物店、小売店、食品販売店",
    catchphrase: "売上・在庫・発注・口コミ・SNSをまとめて効率化",
    description:
      "POS・会計・在庫表・Googleビジネスプロフィール・Instagramなどを活かし、日次集計と発注候補、文章下書きを確認しやすくします。",
    problems: [
      "SNS投稿が続かない",
      "口コミ返信が遅れる",
      "発注が勘に依存する",
      "廃棄・欠品が発生する",
      "日報集計に時間がかかる",
      "在庫管理が属人化",
      "賞味期限切れ",
      "商品POP作成が大変",
    ],
    existingTools: [
      "POS",
      "会計ソフト",
      "予約システム",
      "モバイルオーダー",
      "EC",
      "在庫表",
      "Google Workspace",
      "Googleビジネスプロフィール",
      "Instagram",
      "LINE公式",
      "Excel・スプレッドシート",
    ],
    addedFeatures: [
      "売上データ日次集計",
      "曜日別・商品別分析",
      "売れ筋・死に筋表示",
      "在庫不足・過剰在庫",
      "賞味期限アラート",
      "発注候補数量",
      "廃棄分析",
      "口コミ返信案",
      "Instagram投稿案",
      "商品POP文章",
      "日次・月次レポート",
      "多言語メニュー・FAQ",
      "多言語順番待ち連携",
    ],
    mvpSteps: [
      "POS・売上CSV取り込み",
      "日別・曜日別集計",
      "商品別販売ランキング",
      "在庫不足・過剰在庫表示",
      "発注候補数量",
      "口コミ返信下書き",
      "Instagram投稿案",
      "店長向け日次レポート",
    ],
    kpis: ["廃棄率・廃棄額", "欠品回数", "原価率", "在庫回転率", "発注時間", "SNS投稿回数", "口コミ返信率", "日報作成時間", "商品別粗利益"],
    initialPrice: { minimum: 150_000, maximum: 300_000 },
    monthlyPrice: { minimum: 29_800, maximum: 59_800 },
    priceNote: "初期費用の分割払いにも対応しています。最低利用期間と途中解約条件はお見積もり時にご案内します。",
    status: "consultation",
    humanApproval: "AIの集計・発注候補・投稿案を参考にし、発注数量や公開内容は担当者が判断します。",
  },
];

export const dxPackComparisonRows = [
  { label: "主な対象", values: ["美容室・サロン", "工務店・清掃・設備", "飲食・小売"] },
  { label: "主な目的", values: ["再来店・口コミ・LINE", "案件・見積・報告", "売上・在庫・発注"] },
  { label: "既存ツール", values: ["予約・POS・LINE", "Drive・見積・会計", "POS・会計・在庫"] },
  { label: "AIの役割", values: ["フォロー文作成", "メモ・報告整理", "集計・発注・投稿案"] },
  { label: "人間の役割", values: ["確認後に送信", "金額・内容確認", "発注・投稿判断"] },
  { label: "初期費用", values: ["10万～20万円", "20万～40万円", "15万～30万円"] },
  { label: "月額費用", values: ["19,800～39,800円", "39,800～79,800円", "29,800～59,800円"] },
] as const;

export const fieldProjectStatuses = [
  "問い合わせ",
  "現地調査",
  "見積作成",
  "見積提出",
  "契約",
  "施工中",
  "完了報告",
  "請求",
  "入金確認",
] as const;

export function getDxPack(slug: string): DxPack | undefined {
  return dxPacks.find((pack) => pack.slug === slug);
}
