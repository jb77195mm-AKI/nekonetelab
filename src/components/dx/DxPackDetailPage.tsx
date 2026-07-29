import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, CircleAlert, ShieldCheck } from "lucide-react";
import { fieldProjectStatuses, type DxPack } from "@/data/dx-packs";
import { formatPriceRange } from "@/data/dx-tools";
import { serviceStatusLabels } from "@/data/service-status";

export function DxPackDetailPage({ pack }: { pack: DxPack }) {
  return (
    <div className="bg-white text-slate-950">
      <section className="bg-[linear-gradient(135deg,#f0f9ff_0%,#ffffff_55%,#fff7ed_100%)]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Link href="/services/dx/packs" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-sky-900 underline-offset-4 hover:underline">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            業種別DXパック一覧へ
          </Link>
          <div className="mt-7 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-black text-orange-950">{serviceStatusLabels[pack.status]}</span>
              <h1 className="mt-5 text-[clamp(2.35rem,8vw,4.2rem)] font-black leading-tight tracking-tight">{pack.name}</h1>
              <p className="mt-5 text-xl font-black leading-8 text-sky-900">{pack.catchphrase}</p>
              <p className="mt-5 max-w-3xl text-sm leading-8 text-slate-700 sm:text-base">{pack.description}</p>
              <p className="mt-4 text-sm font-bold leading-7 text-slate-800">対象：{pack.target}</p>
              <Link href={`/contact?plan=${pack.slug}`} className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-sky-900 px-7 py-3 font-bold text-white">
                導入について相談する
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
              <p className="text-xs font-black tracking-[0.16em] text-orange-800">REFERENCE PRICE</p>
              <dl className="mt-5 space-y-4">
                <PriceBox label="初期導入費" value={formatPriceRange(pack.initialPrice)} />
                <PriceBox label="月額運用費" value={formatPriceRange(pack.monthlyPrice)} />
              </dl>
              <p className="mt-5 text-xs leading-6 text-slate-600">{pack.priceNote}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle eyebrow="PROBLEMS" title="解決を目指す課題" />
          <ul className="mt-10 grid gap-3 md:grid-cols-2">
            {pack.problems.map((problem) => <li key={problem} className="flex items-start gap-3 rounded-2xl border border-slate-200 p-5 text-sm font-bold"><CircleAlert className="h-5 w-5 shrink-0 text-orange-700" aria-hidden="true" />{problem}</li>)}
          </ul>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2">
          <ListSection eyebrow="KEEP" title="活用する既存ツール" items={pack.existingTools} />
          <ListSection eyebrow="ADD" title="追加する機能" items={pack.addedFeatures} />
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle eyebrow="SMALL START" title="最初の導入範囲" description="すべてを一度に導入せず、効果を確認しやすい範囲から試験運用します。" />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pack.mvpSteps.map((step, index) => (
              <li key={step} className="rounded-2xl border border-slate-200 p-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-900 text-xs font-black text-white">{index + 1}</span>
                <p className="mt-4 text-sm font-bold leading-6">{step}</p>
              </li>
            ))}
          </ol>
          {pack.slug === "field-project" ? (
            <div className="mt-8 rounded-3xl border border-sky-200 bg-sky-50 p-6">
              <h2 className="font-black text-sky-950">案件ステータス例</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {fieldProjectStatuses.map((status, index) => <span key={status} className="rounded-full bg-white px-3 py-2 text-xs font-bold text-sky-950">{index + 1}. {status}</span>)}
              </div>
            </div>
          ) : null}
          {pack.slug === "retail-food-backoffice" ? (
            <p className="mt-8 rounded-3xl border border-sky-200 bg-sky-50 p-6 text-sm leading-7 text-sky-950">
              発注候補は、前週、前年、曜日、天候、予約数、季節イベントなどをもとにした判断補助の参考値から始めます。
            </p>
          ) : null}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle eyebrow="KPI" title="導入後に確認する指標" />
          <div className="mt-10 flex flex-wrap gap-3">
            {pack.kpis.map((kpi) => <span key={kpi} className="rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-bold">{kpi}</span>)}
          </div>
          <div className="mt-8 flex items-start gap-3 rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
            <ShieldCheck className="h-6 w-6 shrink-0 text-emerald-700" aria-hidden="true" />
            <div><h2 className="font-black text-emerald-950">AIと人間の役割</h2><p className="mt-2 text-sm leading-7 text-emerald-900">{pack.humanApproval}</p></div>
          </div>
        </div>
      </section>

      <section className="bg-sky-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-black">今使っているシステムを確認してから、ご提案します。</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-sky-100">店舗数、スタッフ数、データ形式、必要機能、保守範囲によって料金が変わります。</p>
          <Link href={`/contact?plan=${pack.slug}`} className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-sky-950">
            無料相談フォームへ
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function PriceBox({ label, value }: { label: string; value: string }) {
  return <div className="rounded-2xl bg-slate-950 p-5 text-white"><dt className="text-xs text-slate-400">{label}</dt><dd className="mt-2 text-3xl font-black tabular-nums">{value}</dd></div>;
}

function ListSection({ eyebrow, title, items }: { eyebrow: string; title: string; items: string[] }) {
  return <article className="rounded-3xl border border-slate-700 bg-slate-900 p-6 sm:p-8"><p className="text-xs font-black tracking-[0.18em] text-orange-300">{eyebrow}</p><h2 className="mt-3 text-2xl font-black">{title}</h2><ul className="mt-6 grid gap-3 sm:grid-cols-2">{items.map((item) => <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-200"><Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" aria-hidden="true" />{item}</li>)}</ul></article>;
}

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="max-w-3xl"><p className="text-xs font-black tracking-[0.18em] text-orange-800">{eyebrow}</p><h2 className="mt-3 text-[clamp(2rem,7vw,3rem)] font-black leading-tight">{title}</h2>{description ? <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{description}</p> : null}</div>;
}
