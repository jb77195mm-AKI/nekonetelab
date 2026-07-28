export const officialInquiryTypes = [
  "ホームページ制作",
  "リニューアル",
  "Webスタートプラン",
  "制作費0円プラン",
  "バランスプラン",
  "買い切りプラン",
  "更新・保守",
  "Googleマップ",
  "LINE・SNS",
  "AI活用支援",
  "業務効率化・自動化",
  "業務システム全般について",
  "その他",
] as const;

export const consultationPlans = [
  { value: "web-start", label: "Webスタート（月額9,800円・24か月）" },
  { value: "omakase", label: "おまかせサブスク" },
  { value: "balance", label: "バランス" },
  { value: "buyout", label: "買い切り" },
  { value: "web-operation", label: "Web集客・運用支援" },
  { value: "web-ai", label: "外部Web・AI担当" },
  { value: "undecided", label: "どれがよいか相談したい" },
] as const;

export const consultationMethods = ["オンライン", "名張・伊賀周辺で対面", "どちらでもよい"] as const;
