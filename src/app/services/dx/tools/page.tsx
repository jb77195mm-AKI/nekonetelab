import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SubpageShell } from "@/components/official/SubpageShell";
import { dxTools, formatPriceRange } from "@/data/dx-tools";
import { serviceStatusLabels } from "@/data/service-status";

export const metadata: Metadata = {
  title: "単体DXツール",
  description:
    "多言語・インバウンド対応の順番待ち、口コミ返信サポート、スキル別AIシフトを、必要な業務から小さく導入できます。",
};

export default function DxToolsPage() {
  return (
    <SubpageShell
      eyebrow="STANDALONE DX TOOLS"
      title="必要な業務だけを改善する、3つの単体DXツール"
      description="標準化できる範囲を基本料金に含め、外部連携、複数店舗、運用代行、顧客固有の開発はオプションまたは個別見積もりとします。"
    >
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {dxTools.map((tool) => (
            <article key={tool.slug} className="flex h-full flex-col rounded-3xl border border-slate-200 p-6 shadow-sm">
              <span className="w-fit rounded-full bg-sky-100 px-3 py-1 text-xs font-black text-sky-950">{serviceStatusLabels[tool.status]}</span>
              <p className="mt-5 text-xs font-black text-navy-deep">{tool.category}</p>
              <h2 className="mt-2 text-xl font-black">{tool.name}</h2>
              <p className="mt-3 text-sm font-bold leading-6 text-sky-900">{tool.catchphrase}</p>
              <ul className="mt-5 space-y-2">
                {tool.features.slice(0, 6).map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-sky-800" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm font-black">
                初期 {formatPriceRange(tool.initialPrice)}
                <br />
                月額 {formatPriceRange(tool.monthlyPrice)}
              </p>
              <Link href={`/services/dx/tools/${tool.slug}`} className="mt-auto inline-flex min-h-12 items-center gap-2 pt-6 font-bold text-sky-900">
                詳細を見る
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </SubpageShell>
  );
}
