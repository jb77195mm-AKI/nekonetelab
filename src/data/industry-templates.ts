export interface IndustryTemplate {
  name: string;
  problems: string;
  features: string[];
  relatedPack: string;
  relatedPackSlug?: string;
}

export const industryTemplates: IndustryTemplate[] = [
  { name: "美容室・サロン", problems: "再来店フォローや口コミ依頼が続かない", features: ["休眠顧客抽出", "LINE文下書き", "再来店レポート"], relatedPack: "サロン再来店DX", relatedPackSlug: "salon-retention" },
  { name: "カフェ・飲食店", problems: "混雑、発注、口コミ、SNS対応が分散", features: ["多言語順番待ち", "売上集計", "発注候補", "口コミ返信案"], relatedPack: "小売・飲食DX", relatedPackSlug: "retail-food-backoffice" },
  { name: "整骨院・整体院", problems: "予約後のフォローと受付対応に時間がかかる", features: ["来院フォロー", "受付整理", "説明文下書き"], relatedPack: "個別見積もり" },
  { name: "工務店・建設業", problems: "現地メモ、写真、見積、報告が分散", features: ["案件一覧", "メモ整理", "Drive連携", "報告文下書き"], relatedPack: "現場案件管理DX", relatedPackSlug: "field-project" },
  { name: "清掃・修理・訪問サービス", problems: "問い合わせと訪問予定の対応漏れ", features: ["案件登録", "日程・進捗管理", "未対応通知"], relatedPack: "現場案件管理DX", relatedPackSlug: "field-project" },
  { name: "自動車整備・修理店", problems: "入庫予定、見積説明、作業報告が属人化", features: ["案件ステータス", "見積説明文", "作業報告"], relatedPack: "現場案件管理DX", relatedPackSlug: "field-project" },
  { name: "小売店・お土産店", problems: "在庫、発注、多言語案内、口コミ対応が大変", features: ["在庫アラート", "発注候補", "多言語FAQ"], relatedPack: "小売・飲食DX", relatedPackSlug: "retail-food-backoffice" },
  { name: "宿泊・観光施設", problems: "外国語受付と問い合わせ案内に時間がかかる", features: ["多言語受付", "FAQ", "案内文下書き"], relatedPack: "個別見積もり" },
  { name: "スクール・教室・ジム", problems: "体験申込、出欠、継続案内が分散", features: ["申込整理", "フォロー文", "簡易レポート"], relatedPack: "個別見積もり" },
  { name: "士業・コンサルタント", problems: "問い合わせ整理と定型文書の作成負担", features: ["相談分類", "要約", "文章下書き", "タスク管理"], relatedPack: "個別見積もり" },
  { name: "不動産・住宅営業", problems: "反響、内見、提案、追客の対応漏れ", features: ["顧客ステータス", "追客文", "対応漏れ通知"], relatedPack: "個別見積もり" },
  { name: "小規模事業者の事務業務", problems: "メール、転記、集計、定型書類に時間がかかる", features: ["データ集計", "文章下書き", "通知", "タスク一覧"], relatedPack: "個別見積もり" },
];
