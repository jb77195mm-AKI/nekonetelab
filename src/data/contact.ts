export const officialInquiryTypes = [
  "ホームページ制作",
  "リニューアル",
  "Webスタートプラン",
  "Webサポートプラン",
  "買い切りプラン",
  "ラクラク船長（釣り船の予約サポート）",
  "インバウンド対応 かんたん順番待ち",
  "口コミ返信サポート",
  "スキル別AIシフト",
  "サロン再来店DXパック",
  "現場案件管理DXパック",
  "小売・飲食バックオフィスDXパック",
  "更新・保守",
  "Googleマップ",
  "LINE・SNS",
  "AI活用支援",
  "業務効率化・自動化",
  "業種別DX・業務システム全般",
  "その他",
] as const;

export const consultationPlans = [
  { value: "web-start", label: "Webスタート（月額9,800円・24か月）" },
  { value: "web-support", label: "Webサポート（月額14,800円・24か月）" },
  { value: "buyout", label: "買い切り" },
  {
    value: "rakuraku-sencho",
    label: "ラクラク船長 モニター（初期0円・月額4,980円）",
  },
  {
    value: "rakuraku-sencho-regular",
    label: "ラクラク船長 通常（初期55,000円・月額9,800円）",
  },
  { value: "inbound-queue", label: "インバウンド対応 かんたん順番待ち" },
  { value: "review-support", label: "口コミ返信サポート" },
  { value: "skill-shift", label: "スキル別AIシフト" },
  { value: "salon-retention", label: "サロン再来店DXパック" },
  { value: "field-project", label: "現場案件管理DXパック" },
  { value: "retail-food-backoffice", label: "小売・飲食バックオフィスDXパック" },
  { value: "dx-consultation", label: "業種別DXを相談したい" },
  { value: "web-operation", label: "Web集客・運用支援" },
  { value: "web-ai", label: "外部Web・AI担当" },
  { value: "undecided", label: "どれがよいか相談したい" },
] as const;

export const consultationMethods = ["オンライン", "名張・伊賀周辺で対面", "どちらでもよい"] as const;
