export interface DxToolOption {
  name: string;
  price: string;
}

export const dxToolOptions = {
  "inbound-queue": [
    { name: "15言語対応", price: "初期22,000円～" },
    { name: "20言語対応", price: "初期44,000円～" },
    { name: "受付列追加", price: "初期16,500円＋月額1,650円" },
    { name: "店舗追加", price: "初期33,000円＋月額4,980円" },
    { name: "LINE通知", price: "初期33,000円＋実費" },
    { name: "SMS通知", price: "初期33,000円＋送信実費" },
    { name: "メール通知", price: "初期11,000円～" },
    { name: "店舗専用デザイン", price: "初期22,000円～" },
    { name: "CSV出力", price: "初期11,000円～" },
    { name: "外部モニター表示", price: "初期22,000円～" },
    { name: "現地設定", price: "33,000円＋交通費" },
    { name: "店舗固有翻訳", price: "1言語11,000円～" },
    { name: "翻訳監修", price: "個別見積もり" },
    { name: "外部システム連携", price: "個別見積もり" },
  ],
  "review-support": [
    { name: "完全自動投稿", price: "初期11,000円＋月額1,100円" },
    { name: "月30件超過", price: "10件ごと月額550円" },
    { name: "店舗追加", price: "初期5,500円＋月額2,980円" },
    { name: "文体追加設定", price: "1パターン5,500円" },
    { name: "返信ルール再設計", price: "11,000円～" },
    { name: "通知連携", price: "初期11,000円～" },
    { name: "簡易レポート", price: "月額3,300円" },
    { name: "詳細レポート", price: "月額8,800円～" },
    { name: "人間による確認代行", price: "月額5,500円～" },
    { name: "GBP初期設定", price: "16,500円～" },
  ],
  "skill-shift": [
    { name: "21名以降", price: "1名あたり月額330円" },
    { name: "店舗追加", price: "初期33,000円＋月額4,980円" },
    { name: "複雑な勤務条件", price: "初期33,000円～" },
    { name: "スキル項目追加", price: "5項目11,000円" },
    { name: "パターン追加", price: "10種類11,000円" },
    { name: "データ取り込み", price: "11,000円～" },
    { name: "CSV個別調整", price: "16,500円～" },
    { name: "勤怠システム連携", price: "55,000円～" },
    { name: "LINE希望回収", price: "33,000円～" },
    { name: "夜勤対応", price: "33,000円～" },
    { name: "複数部署対応", price: "33,000円～" },
    { name: "全面再設定", price: "22,000円～" },
    { name: "現地研修", price: "33,000円＋交通費" },
    { name: "シフト作成代行", price: "月額22,000円～" },
    { name: "個別開発", price: "個別見積もり" },
  ],
} satisfies Record<string, DxToolOption[]>;
