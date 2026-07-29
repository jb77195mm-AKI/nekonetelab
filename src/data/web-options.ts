export interface WebOption {
  name: string;
  price: string;
  note: string;
}

export const webOptions: WebOption[] = [
  { name: "追加ページ制作", price: "1ページ16,500円～", note: "構成・原稿・機能により変動" },
  { name: "原稿作成代行", price: "1ページ8,800円～", note: "ヒアリング内容をもとに作成" },
  { name: "サイト全体の原稿作成", price: "33,000円～", note: "ページ数・取材範囲により変動" },
  { name: "生成画像・素材選定", price: "5枚5,500円～", note: "権利確認済み素材を使用" },
  { name: "ロゴ制作", price: "22,000円～", note: "制作範囲により個別見積もり" },
  { name: "問い合わせフォーム追加", price: "11,000円～", note: "入力項目・送信先により変動" },
  { name: "予約システム連携", price: "33,000円～", note: "現在の予約サービスを確認" },
  { name: "Stripe決済導入", price: "44,000円～", note: "審査・手数料・外部費用は別途" },
  { name: "Googleビジネスプロフィール初期設定", price: "16,500円～", note: "オーナー確認後に対応" },
  { name: "アクセス解析レポート", price: "月額5,500円", note: "自動集計を基本に提供" },
  { name: "SEO記事作成", price: "1記事16,500円～", note: "テーマ・文字量により変動" },
  { name: "追加更新作業", price: "30分5,500円", note: "標準更新枠を超える作業" },
  { name: "オンライン相談", price: "30分5,500円", note: "事前予約制" },
  { name: "特急対応", price: "通常料金＋3,300円～", note: "対応可否を確認してご案内" },
];

export const buyoutMaintenancePlans = [
  {
    name: "技術保守",
    monthlyPrice: 3_980,
    features: [
      "サーバー状態確認",
      "SSL確認",
      "定期バックアップ",
      "表示・フォーム確認",
      "セキュリティ更新",
      "障害時一次対応",
    ],
    note: "文章・画像更新は含みません。",
  },
  {
    name: "更新サポート付き保守",
    monthlyPrice: 6_980,
    features: ["技術保守", "月1回・15分以内の軽微な更新"],
    note: "新規ページ、全面デザイン変更、機能追加は別途です。",
  },
] as const;
