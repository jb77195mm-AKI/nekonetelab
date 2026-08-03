import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleAlert,
  CircleHelp,
  Sparkles,
} from "lucide-react";
import { QueueLanguagePricing } from "@/components/solutions/QueueLanguagePricing";
import { SolutionDemo } from "@/components/solutions/SolutionDemos";
import { SolutionIcon } from "@/components/solutions/SolutionCard";
import { solutionFlow, type SolutionData } from "@/data/solutions";

export function DemoBadge() {
  return (
    <div className="rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm leading-6 text-sky-950">
      <p className="flex items-center gap-2 font-medium">
        <Sparkles className="h-4 w-4 shrink-0" aria-hidden="true" />
        現在、サービス内容を検証中です
      </p>
      <p className="mt-1 text-xs leading-5 text-sky-900">
        掲載している画面や料金は開発中の参考内容です。正式な仕様はヒアリング後にご案内します。
      </p>
    </div>
  );
}

export function SolutionPage({ solution }: { solution: SolutionData }) {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cream-light">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-sky-200/50 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <Link
            href="/solutions"
            className="inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-semibold text-sky-900 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-800"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            3つの業務システムへ戻る
          </Link>
          <div className="mt-7 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-900 text-white">
                  <SolutionIcon name={solution.icon} />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-[0.08em] text-sky-900">{solution.label}</p>
                  <p className="mt-1 font-medium text-ink">{solution.name}</p>
                </div>
              </div>
              <h1 className="mt-6 text-[clamp(2.25rem,8vw,4rem)] font-medium leading-tight tracking-tight text-ink">
                {solution.heroTitle}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">{solution.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#screen-demo"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-900 px-6 py-3 font-semibold text-white transition hover:bg-sky-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
                >
                  画面デモを見る
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link
                  href="/#contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-slate-800 px-6 py-3 font-semibold text-ink transition hover:bg-ink-soft hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
                >
                  導入について相談する
                </Link>
              </div>
            </div>
            <DemoBadge />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="CHALLENGES"
          title="こんな業務の負担はありませんか？"
          description="日々の小さな手間を整理し、今の運用に合う仕組みから検討します。"
        />
        <ul className="mt-10 grid gap-3 md:grid-cols-2">
          {solution.pains.map((pain) => (
            <li
              key={pain}
              className="flex min-h-16 items-center gap-3 rounded-2xl border border-line-soft bg-white px-5 py-4 text-sm font-semibold leading-6 text-ink"
            >
              <CircleAlert className="h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
              {pain}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-ink py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="WHAT IT DOES"
            title="必要なところから、小さく仕組み化"
            description="大規模なシステムを一度に導入するのではなく、困っている業務に合わせて構成する想定です。"
            inverted
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {solution.cardFeatures.map((feature, index) => (
              <article key={feature} className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-800 text-sm font-medium">
                  {index + 1}
                </span>
                <h2 className="mt-4 text-lg font-medium">{feature}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  現在の業務と必要な範囲を確認し、使う人に分かりやすい画面と運用を検討します。
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="screen-demo" className="scroll-mt-20 bg-sky-50/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="SCREEN DEMO"
            title="操作画面のデモ"
            description="固定のダミーデータを使ったフロントエンドデモです。外部送信、保存、AI処理は行いません。"
          />
          <div className="mt-10">
            <SolutionDemo slug={solution.slug} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="FEATURES"
            title="想定している主な機能"
            description="正式な機能範囲は、現在の運用と必要性をヒアリングして決定します。"
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {solution.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 rounded-2xl bg-cream-light px-4 py-3 text-sm leading-6 text-muted">
                <Check className="mt-1 h-4 w-4 shrink-0 text-sky-800" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-line-soft bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="HOW TO USE" title="利用イメージ" />
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {solution.usage.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-line-soft p-6">
                <span className="text-xs font-medium tracking-[0.18em] text-sky-900">STEP {index + 1}</span>
                <h2 className="mt-3 text-lg font-medium">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {solution.slug === "queue" ? (
        <QueueLanguagePricing />
      ) : (
        <section className="bg-cream-light/60 py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <SectionHeading
              eyebrow="REFERENCE PRICE"
              title="参考料金"
              description="開発中の参考価格です。正式な料金は必要機能を整理した後にお見積もりします。"
            />
            <div className="rounded-2xl border border-cat-beige bg-white p-7 shadow-lg shadow-ink/5 sm:p-9">
              <dl className="grid gap-5 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold text-muted">初期導入費</dt>
                  <dd className="mt-2 text-3xl font-medium tabular-nums text-navy">{solution.pricing.initial}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-muted">月額利用・サポート費</dt>
                  <dd className="mt-2 text-3xl font-medium tabular-nums text-navy">{solution.pricing.monthly}</dd>
                </div>
              </dl>
              {solution.pricing.upperPlan ? (
                <p className="mt-5 rounded-2xl bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-950">
                  {solution.pricing.upperPlan}
                </p>
              ) : null}
              <p className="mt-5 text-xs leading-6 text-muted">※ {solution.pricing.note}</p>
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="INTRODUCTION FLOW"
          title="ご相談から導入まで"
          description="今回は画面確認用デモのため、契約や決済には進みません。"
        />
        <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {solutionFlow.map((step, index) => (
            <li key={step} className="rounded-2xl border border-line-soft p-5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-900 text-xs font-medium text-white">
                {index + 1}
              </span>
              <p className="mt-3 text-sm font-semibold leading-6">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-cream-light py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading eyebrow="FAQ" title="よくあるご質問" />
          <div className="mt-10 space-y-3">
            {solution.faq.map((item) => (
              <details key={item.question} className="group rounded-2xl border border-line-soft bg-white p-5">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-800">
                  <span className="flex items-start gap-3">
                    <CircleHelp className="mt-0.5 h-5 w-5 shrink-0 text-sky-800" aria-hidden="true" />
                    {item.question}
                  </span>
                  <span aria-hidden="true" className="text-xl text-sky-800 group-open:rotate-45">
                    ＋
                  </span>
                </summary>
                <p className="mt-3 border-t border-slate-100 pt-4 text-sm leading-7 text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold tracking-[0.18em] text-sky-200">CONTACT</p>
          <h2 className="mt-4 text-3xl font-medium sm:text-4xl">今の業務に合う形を、一緒に整理します。</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-sky-100">
            このページはサービス検証用のデモです。導入可否や正式な仕様は、現在の業務を伺ったうえでご案内します。
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-sky-950 transition hover:bg-sky-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {solution.name}について相談する
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  inverted?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className={`text-xs font-semibold tracking-[0.18em] ${inverted ? "text-sky-300" : "text-sky-900"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl font-medium sm:text-4xl ${inverted ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-sm leading-7 sm:text-base ${inverted ? "text-slate-300" : "text-muted"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
