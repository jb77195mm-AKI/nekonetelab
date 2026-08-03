import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, CircleAlert, ShieldCheck, X } from "lucide-react";
import { formatPriceRange, type DxTool } from "@/data/dx-tools";
import { languageStatusLabels, queueLanguagePlans, queueLanguages } from "@/data/languages";
import { serviceStatusDescriptions, serviceStatusLabels } from "@/data/service-status";

export function DxToolDetailPage({ tool }: { tool: DxTool }) {
  const isInbound = tool.slug === "inbound-queue";

  return (
    <div className="bg-white text-ink">
      <section className="bg-[linear-gradient(135deg,#eef6fa_0%,#ffffff_55%,#faf6ee_100%)]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Link href="/services/dx/tools" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-sky-900 underline-offset-4 hover:underline">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            単体DXツール一覧へ
          </Link>
          <div className="mt-7 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-950">{tool.category}</span>
                <span className="rounded-full bg-cat-cream px-3 py-1 text-xs font-medium text-navy">{serviceStatusLabels[tool.status]}</span>
              </div>
              <h1 className="mt-5 text-[clamp(2.35rem,8vw,4.2rem)] font-medium leading-tight tracking-tight">
                {tool.name}
              </h1>
              <p className="mt-5 text-xl font-medium leading-8 text-sky-900">{tool.catchphrase}</p>
              <p className="mt-5 max-w-3xl text-sm leading-8 text-muted sm:text-base">{tool.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={`/contact?plan=${tool.slug}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-900 px-7 py-3 font-semibold text-white">
                  導入について相談する
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                {isInbound ? <a href="#language-status" className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-slate-800 px-7 py-3 font-semibold">対応言語を見る</a> : null}
              </div>
            </div>
            <div className="rounded-2xl border border-line-soft bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
              <p className="text-xs font-medium tracking-[0.16em] text-navy">REFERENCE PRICE</p>
              <dl className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <PriceBox label="初期設定費" value={formatPriceRange(tool.initialPrice)} />
                <PriceBox label="月額利用料" value={formatPriceRange(tool.monthlyPrice)} />
              </dl>
              <p className="mt-5 text-sm font-semibold text-ink">最低利用期間：{tool.minimumTermMonths}か月</p>
              <p className="mt-3 rounded-2xl bg-amber-50 p-4 text-xs leading-6 text-amber-950">
                掲載料金は税込の参考価格です。標準範囲を超える設定、外部連携、複数店舗、運用代行は別途です。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle eyebrow="PROBLEMS" title="こんな業務を小さく改善します" />
          <ul className="mt-10 grid gap-3 md:grid-cols-2">
            {tool.problems.map((problem) => (
              <li key={problem} className="flex items-start gap-3 rounded-2xl border border-line-soft p-5 text-sm font-semibold leading-6">
                <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
                {problem}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle eyebrow="STANDARD FEATURES" title="標準機能" inverted />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tool.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 rounded-2xl border border-slate-700 bg-slate-900 p-5 text-sm font-semibold">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" aria-hidden="true" />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-2">
          <ScopeCard title="基本料金の標準範囲" items={tool.standardScope} positive />
          <ScopeCard title="標準に含まれない範囲" items={tool.exclusions} />
        </div>
      </section>

      {isInbound ? <LanguageStatusSection /> : null}

      <section className="border-y border-line-soft bg-cream-light py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle eyebrow="OPTIONS" title="オプション料金" description="必要なものだけを追加できます。外部サービスの利用料・送信実費・交通費は原則として別途です。" />
          <div className="mt-10 overflow-hidden rounded-2xl border border-line-soft bg-white">
            <dl className="divide-y divide-line-soft">
              {tool.options.map((option) => (
                <div key={option.name} className="grid gap-2 p-5 text-sm sm:grid-cols-[1fr_auto] sm:items-center">
                  <dt className="font-semibold">{option.name}</dt>
                  <dd className="font-medium text-navy">{option.price}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle eyebrow="USAGE FLOW" title="導入・利用の流れ" />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {tool.usageFlow.map((step, index) => (
              <li key={step} className="rounded-2xl border border-line-soft p-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-900 text-xs font-medium text-white">{index + 1}</span>
                <p className="mt-4 text-sm font-semibold leading-6">{step}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <ShieldCheck className="h-6 w-6 shrink-0 text-emerald-700" aria-hidden="true" />
            <div>
              <h2 className="font-medium text-emerald-950">人による確認を残します</h2>
              <p className="mt-2 text-sm leading-7 text-emerald-900">{tool.humanApproval}</p>
              <p className="mt-2 text-xs leading-6 text-emerald-800">{serviceStatusDescriptions[tool.status]}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sky-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-medium">今の業務に合う標準範囲から整理します。</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-sky-100">現在使っているサービス、店舗数、スタッフ数、困っている作業を専用フォームからお知らせください。</p>
          <Link href={`/contact?plan=${tool.slug}`} className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-sky-950">
            無料相談フォームへ
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function LanguageStatusSection() {
  return (
    <section id="language-status" className="scroll-mt-24 border-y border-sky-200 bg-sky-50/70 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow="LANGUAGE STATUS" title="対応言語は、開発・検証状況を明示します" description="20言語すべてを利用可能とは表示しません。正式なお見積もりでは、その時点で利用できる言語と検証範囲をご案内します。" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {queueLanguagePlans.map((plan) => (
            <article key={plan.languageCount} className="rounded-2xl border border-sky-200 bg-white p-6">
              <p className="text-xs font-medium text-sky-900">{plan.price}</p>
              <h3 className="mt-2 text-xl font-medium">{plan.name}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{plan.description}</p>
              <ul className="mt-5 space-y-2">
                {queueLanguages.filter((language) => language.plan === plan.languageCount).map((language) => (
                  <li key={language.code} className="flex items-center justify-between gap-3 rounded-xl bg-cream-light px-3 py-2 text-xs">
                    <span className="font-semibold">{language.name}<span className="ml-1 text-muted">/ {language.localName}</span></span>
                    <span className="shrink-0 rounded-full bg-white px-2 py-1 font-medium text-sky-900">{languageStatusLabels[language.status]}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PriceBox({ label, value }: { label: string; value: string }) {
  return <div className="rounded-2xl bg-ink p-5 text-white"><dt className="text-xs text-slate-400">{label}</dt><dd className="mt-2 text-3xl font-medium tabular-nums">{value}</dd></div>;
}

function ScopeCard({ title, items, positive = false }: { title: string; items: string[]; positive?: boolean }) {
  return (
    <article className={`rounded-2xl border p-6 sm:p-8 ${positive ? "border-emerald-200 bg-emerald-50" : "border-line-soft bg-white"}`}>
      <h2 className="text-2xl font-medium">{title}</h2>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted">
            {positive ? <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" aria-hidden="true" /> : <X className="mt-0.5 h-5 w-5 shrink-0 text-muted" aria-hidden="true" />}
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function SectionTitle({ eyebrow, title, description, inverted = false }: { eyebrow: string; title: string; description?: string; inverted?: boolean }) {
  return <div className="max-w-3xl"><p className={`text-xs font-medium tracking-[0.18em] ${inverted ? "text-amber-soft" : "text-navy"}`}>{eyebrow}</p><h2 className={`mt-3 text-[clamp(2rem,7vw,3rem)] font-medium leading-tight ${inverted ? "text-white" : "text-ink"}`}>{title}</h2>{description ? <p className={`mt-4 text-sm leading-7 sm:text-base ${inverted ? "text-slate-300" : "text-muted"}`}>{description}</p> : null}</div>;
}
