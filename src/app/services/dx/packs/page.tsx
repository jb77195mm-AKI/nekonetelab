import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SubpageShell } from "@/components/official/SubpageShell";
import { dxPacks } from "@/data/dx-packs";
import { formatPriceRange } from "@/data/dx-tools";
import { serviceStatusLabels } from "@/data/service-status";

export const metadata: Metadata = {
  title: "業種別DXパック",
  description:
    "既存の予約・POS・会計・LINEなどを残し、サロン再来店、現場案件管理、小売・飲食バックオフィスの業務を段階的に改善します。",
};

export default function DxPacksPage() {
  return (
    <SubpageShell
      eyebrow="INDUSTRY DX PACKS"
      title="既存システムを残して組み合わせる、3つの主力DXパック"
      description="固定機能のSaaSではなく、業務フロー、データ形式、店舗数、既存サービスを確認して設計する導入支援商品です。"
    >
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {dxPacks.map((pack) => (
            <article key={pack.slug} className="flex h-full flex-col rounded-3xl border border-slate-200 p-6 shadow-sm">
              <span className="w-fit rounded-full bg-cat-cream px-3 py-1 text-xs font-black text-navy-deep">{serviceStatusLabels[pack.status]}</span>
              <h2 className="mt-5 text-xl font-black">{pack.name}</h2>
              <p className="mt-3 text-sm font-bold leading-6 text-sky-900">{pack.catchphrase}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{pack.description}</p>
              <ul className="mt-5 space-y-2">
                {pack.addedFeatures.slice(0, 5).map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-sky-800" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm font-black">
                初期 {formatPriceRange(pack.initialPrice)}
                <br />
                月額 {formatPriceRange(pack.monthlyPrice)}
              </p>
              <Link href={`/services/dx/packs/${pack.slug}`} className="mt-auto inline-flex min-h-12 items-center gap-2 pt-6 font-bold text-sky-900">
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
