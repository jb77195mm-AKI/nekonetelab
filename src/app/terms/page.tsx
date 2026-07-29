import type { Metadata } from "next";
import { SubpageShell } from "@/components/official/SubpageShell";

export const metadata: Metadata = {
  title: "利用規約（デモ・要確認）",
  description: "猫の手デジタルラボの利用規約デモです。正式提供前の確認項目を掲載しています。",
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "1. 適用範囲",
    body: "本規約は、ホームページ制作、保守・運用、Web集客支援、生成AI・業務効率化支援に関する基本的な条件を定めるためのデモです。",
  },
  {
    title: "2. 契約成立とサービス開始",
    body: "無料相談、見積もり、サービス内容、料金、契約条件の確認後、書面または電磁的方法による合意と初回決済をもって開始する想定です。正式な成立時点は要確認です。",
  },
  {
    title: "3. 料金・支払い",
    body: "月額プランはStripeによる継続課金を予定しています。支払日、請求開始日、制作費の請求方法、決済失敗時の運用は正式契約書で確定します。",
  },
  {
    title: "4. 最低契約期間・更新・解約",
    body: "WebスタートプランとWebサポートプランは最低利用期間24か月です。単体DXツールは商品ごとに6か月または12か月です。業種別DXパックの最低利用期間、途中解約条件、初期費用の分割条件はお見積もり時にご案内します。",
  },
  {
    title: "5. 制作物・データ・ドメイン",
    body: "著作権、データ所有、ドメイン名義、契約終了後の公開、データ移管、移管費用はプランごとに契約前に説明し、契約書へ明記します。",
  },
  {
    title: "6. 更新・保守・対応範囲",
    body: "月間更新回数、文章量、画像枚数、対応時間、打ち合わせ回数、緊急対応、追加料金条件はプラン・見積もりで確定します。無制限対応ではありません。",
  },
  {
    title: "7. 外部サービス・生成AI",
    body: "ドメイン、サーバー、有料素材、外部SaaS、生成AI等の利用条件・費用は各提供者の規約に従います。AI出力は内容を確認して利用します。",
  },
  {
    title: "8. 免責・成果保証",
    body: "売上、集客、検索順位その他の成果を保証するものではありません。責任範囲、損害賠償上限、不可抗力の扱いは専門家確認後に確定します。",
  },
  {
    title: "9. 支払い失敗時",
    body: "支払い方法更新をご案内し、決済失敗直後の自動停止は行わない想定です。猶予期間、保守停止、サイト停止の条件は未確定です。",
  },
  {
    title: "10. 準拠法・管轄",
    body: "準拠法、合意管轄、紛争解決方法は専門家確認後に正式文書へ反映します。",
  },
] as const;

export default function TermsPage() {
  return (
    <SubpageShell
      eyebrow="TERMS / DRAFT"
      title="利用規約（デモ・要確認）"
      description="正式な利用規約ではありません。未確定事項を見落とさないための確認用ドラフトです。専門家による内容確認を推奨します。"
    >
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm font-bold leading-7 text-amber-950">
          要確認：正式な契約条件を反映してください。要確認：専門家による内容確認を推奨します。
        </div>
        <div className="mt-8 space-y-5">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
            >
              <h2 className="text-lg font-black">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </SubpageShell>
  );
}
