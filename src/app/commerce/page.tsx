import type { Metadata } from "next";
import { SubpageShell } from "@/components/official/SubpageShell";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記（デモ・要確認）",
  description: "月額サービスの正式提供前に確認する特定商取引法表記のデモです。",
  robots: { index: false, follow: false },
};

const rows = [
  ["販売事業者", siteConfig.businessName],
  ["運営責任者", "要確認：正式な氏名を反映"],
  ["所在地", "要確認：請求があった場合の開示方法を含め、専門家へ確認"],
  ["電話番号", "要確認：正式な連絡先と受付時間を反映"],
  ["メールアドレス", siteConfig.email],
  ["販売価格", "各料金ページに税込表示。正式提供時に確定"],
  [
    "商品代金以外の必要料金",
    "独自ドメイン、外部サービス、有料素材、規定範囲外の作業等。契約前に見積もり",
  ],
  ["支払い方法", "Stripeによるクレジットカード決済を予定"],
  ["支払い時期", "契約プランと支払い方法に応じて、申込前にご案内します"],
  ["サービス提供時期", "要確認：契約成立、素材受領、制作開始、公開の基準日"],
  ["最低契約期間", "Webスタート・Webサポートは24か月。単体DXツールは商品ごとに6か月または12か月"],
  ["自動更新", "Webスタートは24か月経過後、1か月単位で自動更新を予定。解約申請期限は要確認"],
  ["中途解約・解約金", "要確認：正式な条件を契約書と一致させる"],
  ["返品・返金", "サービスの性質を踏まえ、キャンセル・返金条件を専門家確認後に反映"],
  ["動作環境・外部サービス", "対応ブラウザ、外部SaaS、Stripe等の条件を正式提供時に案内"],
] as const;

export default function CommercePage() {
  return (
    <SubpageShell
      eyebrow="LEGAL / DRAFT"
      title="特定商取引法に基づく表記（デモ・要確認）"
      description="正式な申込受付を開始する前に、月額契約、継続課金、解約、返金、提供時期などを専門家と確認して確定します。"
    >
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm font-bold leading-7 text-amber-950">
          このページは確認用デモです。正式な法定表示ではありません。実際の申込受付・請求は行っていません。
        </div>
        <dl className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {rows.map(([label, value]) => (
            <div
              key={label}
              className="grid gap-2 border-b border-slate-200 px-5 py-5 text-sm last:border-0 sm:grid-cols-[12rem_1fr] sm:gap-6 sm:px-7"
            >
              <dt className="font-black text-slate-800">{label}</dt>
              <dd className="leading-7 text-slate-600">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </SubpageShell>
  );
}
