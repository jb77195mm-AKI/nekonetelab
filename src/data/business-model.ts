import { webOptions } from "@/data/web-options";
import {
  webPlanComparisonRows,
  webPlans,
  type WebPlan,
  type WebPlanSlug,
} from "@/data/web-plans";

export type HomepagePlanSlug = WebPlanSlug;
export type HomepagePlan = WebPlan;

export const homepagePlans = webPlans;
export const comparisonRows = webPlanComparisonRows;
export const additionalWorkPricing = webOptions;

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
    "このページはサービス内容の確認用デモです。本番サイトとは分離され、実際の請求・メール送信・外部サービス連携は行いません。",
} as const;

export const supportPlans = [
  {
    name: "Web集客・運用サポート",
    priceLabel: "内容に応じて個別見積もり",
    description:
      "公開後の更新、Googleビジネスプロフィール、口コミ返信文、LINE・SNS導線、簡易アクセス確認を継続支援します。",
    features: [
      "ホームページ保守・文章・画像更新",
      "Googleビジネスプロフィール支援",
      "口コミ返信文・SNS投稿文の作成支援",
      "LINE・SNS・問い合わせ導線改善",
      "キャンペーンページ更新",
      "簡易アクセス確認",
    ],
    ctaLabel: "Web集客・運用について相談する",
    ctaHref: "/contact?plan=web-operation",
    notice: "具体的な月額、更新回数、対応時間はヒアリング後にお見積もりします。",
  },
  {
    name: "外部Web・AI担当プラン",
    priceLabel: "内容に応じて個別見積もり",
    description:
      "ホームページ運用とWeb集客に加え、生成AI活用や小さな業務自動化まで、一つの相談窓口として伴走します。",
    features: [
      "ホームページ運用・Web集客相談",
      "Googleマップ・LINE・SNS支援",
      "生成AI活用相談・業務マニュアル作成",
      "定型業務自動化の相談",
      "必要に応じたオンライン相談",
      "段階的な改善提案",
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
    label: "公式サイト",
    description:
      "スマートフォン対応、問い合わせ導線、Googleマップ、LINE・SNS連携を備えた公式サイトを整えます。",
    items: ["Webスタート", "Webサポート", "買い切り", "制作・保守オプション"],
  },
  {
    step: "02",
    title: "単体DXツール",
    label: "小さく改善",
    description:
      "順番待ち、口コミ返信、シフト作成など、特定の業務だけを小さく改善します。",
    items: ["多言語順番待ち", "口コミ返信サポート", "スキル別AIシフト"],
  },
  {
    step: "03",
    title: "業種別DXパック",
    label: "業務全体",
    description:
      "既存の予約・POS・会計・LINE等を残し、業種固有の業務へAI・自動化・独自画面を組み合わせます。",
    items: ["サロン再来店", "現場案件管理", "小売・飲食バックオフィス"],
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
    journey: "サービス内容と料金例を見せ、LINE・フォームの相談へ",
    items: ["対応エリア", "料金例", "作業実績", "FAQ", "LINE・フォーム"],
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
      "はい。Webスタートプランの初期費用0円型は月額9,800円（税込）、最低利用期間24か月です。月額負担軽減型も選べます。独自ドメインや外部有料サービスは別途です。",
  },
  {
    question: "Webスタートの2つの支払い方法で内容は変わりますか？",
    answer:
      "サービス内容は同じです。初期費用0円型は月額9,800円、月額負担軽減型は初期49,800円・月額5,980円で、どちらも最低利用期間は24か月です。",
  },
  {
    question: "名張市・伊賀市以外でも依頼できますか？",
    answer:
      "全国からオンラインで相談できます。打ち合わせ、素材提出、確認、公開後の更新までオンラインで進められます。",
  },
  {
    question: "月額料金には何が含まれますか？",
    answer:
      "Webスタートには制作、スマートフォン対応、サーバー・SSL管理、基本SEO、月1回・15分以内の軽微な更新などが含まれます。",
  },
  {
    question: "大幅な変更も月額内ですか？",
    answer:
      "新規ページ、全面デザイン変更、レイアウト変更、予約・決済・外部連携などは別途お見積もりします。",
  },
  {
    question: "買い切りでも依頼できますか？",
    answer:
      "買い切りプランも用意しています。公開後の技術保守または更新サポート付き保守は任意で追加できます。",
  },
  {
    question: "AIだけでも相談できますか？",
    answer:
      "ホームページ制作を伴わない単体DXツールや業種別DXパックも相談できます。AI出力は人が確認する運用を基本にします。",
  },
] as const;

export function getHomepagePlan(slug: string | null | undefined): HomepagePlan | undefined {
  return homepagePlans.find((plan) => plan.slug === slug);
}

export function formatYen(value: number): string {
  return `${new Intl.NumberFormat("ja-JP").format(value)}円`;
}
