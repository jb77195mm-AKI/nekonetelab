import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { ComparisonTable } from "@/components/solutions/ComparisonTable";
import { DemoBadge } from "@/components/solutions/SolutionPage";
import { SolutionCard, SolutionIcon } from "@/components/solutions/SolutionCard";
import { solutions, starterPack } from "@/data/solutions";

export const metadata: Metadata = {
  title: "店舗向け業務システム",
  description:
    "順番待ち、Google口コミ返信、スキル別シフト作成など、小規模店舗向けの業務効率化システムをご提案します。",
  alternates: {
    canonical: "/solutions",
  },
};

export default function SolutionsPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cream-light">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-sky-200/50 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold text-sky-950">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              店舗向け業務システム
            </p>
            <h1 className="mt-6 text-[clamp(2.5rem,9vw,4.5rem)] font-medium leading-tight tracking-tight text-ink">
              毎日の手間に、
              <span className="block text-sky-900">ちょうどいい仕組みを。</span>
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              大規模なシステムを導入するのではなく、今困っている業務から小さく改善します。順番待ち、口コミ返信、シフト作成など、小規模店舗で使いやすい仕組みをご提案します。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#comparison"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-900 px-6 py-3 font-semibold text-white transition hover:bg-sky-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
              >
                サービスを比較する
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link
                href="/#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-slate-800 px-6 py-3 font-semibold transition hover:bg-ink-soft hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
              >
                導入について相談する
              </Link>
            </div>
          </div>
          <DemoBadge />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="CHOOSE BY CHALLENGE"
          title="今、整理したい業務はどれですか？"
          description="気になる課題を選ぶと、該当サービスの紹介へ移動します。"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { text: "受付・待ち時間を整理したい", solution: solutions[0] },
            { text: "口コミ返信を効率化したい", solution: solutions[1] },
            { text: "シフト作成を自動化したい", solution: solutions[2] },
          ].map((item) => (
            <a
              key={item.solution.slug}
              href={`#${item.solution.slug}`}
              className="flex min-h-24 items-center gap-4 rounded-2xl border border-line-soft bg-white p-5 font-semibold leading-6 transition hover:border-sky-300 hover:bg-sky-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-900">
                <SolutionIcon name={item.solution.icon} className="h-5 w-5" />
              </span>
              {item.text}
            </a>
          ))}
        </div>
      </section>

      <section className="bg-cream-light py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="SOLUTIONS"
            title="3つの業務システム"
            description="詳しい内容と操作画面は、各サービスのデモページで確認できます。"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <SolutionCard key={solution.slug} solution={solution} id={solution.slug} />
            ))}
          </div>
        </div>
      </section>

      <section id="comparison" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="COMPARISON"
          title="3サービスを比較する"
          description="スマートフォンでは、サービスごとの比較カードとして表示します。"
        />
        <div className="mt-10">
          <ComparisonTable />
        </div>
      </section>

      <section className="bg-sky-950 py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-sky-200">STARTER PACK</p>
            <h2 className="mt-4 text-3xl font-medium sm:text-4xl">{starterPack.name}</h2>
            <p className="mt-5 text-sm leading-7 text-sky-100">
              受付、口コミ対応、シフト作成の3つから、必要な仕組みだけを選んで導入できます。複数の課題がある場合も個別にお見積もりします。
            </p>
          </div>
          <div className="rounded-2xl bg-white p-7 text-ink shadow-sm sm:p-9">
            <ul className="grid gap-3 sm:grid-cols-2">
              {starterPack.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-6 text-muted">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-sky-800" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-7 rounded-2xl bg-cream-light p-5">
              <p className="text-xs font-semibold text-muted">参考価格</p>
              <p className="mt-2 text-2xl font-medium leading-tight tabular-nums text-navy sm:text-3xl">
                {starterPack.price}
              </p>
              <p className="mt-3 text-xs leading-6 text-muted">※ {starterPack.note}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold tracking-[0.18em] text-sky-900">CONTACT</p>
          <h2 className="mt-4 text-3xl font-medium sm:text-4xl">どの仕組みが合うか、相談しながら整理できます。</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted">
            まだサービス内容を検証している段階です。現在の業務と困りごとを伺い、必要性から一緒に確認します。
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-ink px-7 py-3 font-semibold text-white transition hover:bg-ink-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
          >
            業務システムについて相談する
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
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold tracking-[0.18em] text-sky-900">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-medium sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{description}</p> : null}
    </div>
  );
}
