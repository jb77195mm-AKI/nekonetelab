import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  CloudRain,
  Languages,
  MessageSquare,
  Phone,
  RefreshCcw,
  Ship,
  Users,
} from "lucide-react";
import { RakurakuFaq } from "@/components/rakuraku/RakurakuFaq";
import { RakurakuFooter } from "@/components/rakuraku/RakurakuFooter";
import { RakurakuHeader } from "@/components/rakuraku/RakurakuHeader";
import { RakurakuImage } from "@/components/rakuraku/RakurakuImage";
import { RakurakuMascot } from "@/components/rakuraku/RakurakuMascot";
import { siteConfig } from "@/config/site";
import {
  formatRakurakuYen,
  rakurakuAbout,
  rakurakuCaptainSteps,
  rakurakuCaptainStepsNote,
  rakurakuComparison,
  rakurakuCta,
  rakurakuFaqItems,
  rakurakuFeatures,
  rakurakuFinalCta,
  rakurakuFlow,
  rakurakuFlowNote,
  rakurakuHero,
  rakurakuMeta,
  rakurakuNoWebsite,
  rakurakuPains,
  rakurakuPricing,
  rakurakuTerms,
} from "@/data/rakuraku-sencho";

export const metadata: Metadata = {
  title: rakurakuMeta.title,
  description: rakurakuMeta.description,
  alternates: { canonical: rakurakuMeta.path },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    title: rakurakuMeta.title,
    description: rakurakuMeta.description,
  },
};

const painIcons = [Phone, Users, CloudRain, Languages, RefreshCcw] as const;

function feature(number: string) {
  return rakurakuFeatures.find((item) => item.number === number)!;
}

export default function RakurakuSenchoPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: rakurakuMeta.serviceName,
    description: rakurakuMeta.description,
    serviceType: "釣り船・遊漁船向け予約サポート",
    provider: {
      "@type": "ProfessionalService",
      name: rakurakuMeta.operator,
      url: siteConfig.publicUrl,
    },
    areaServed: "日本",
    offers: [
      {
        "@type": "Offer",
        name: "通常料金",
        price: rakurakuPricing.regular.monthlyPrice,
        priceCurrency: "JPY",
        description: `初期導入費${formatRakurakuYen(
          rakurakuPricing.regular.initialPrice,
        )}（税込）、月額${formatRakurakuYen(
          rakurakuPricing.regular.monthlyPrice,
        )}（税込）`,
      },
      {
        "@type": "Offer",
        name: "モニター料金（先着5船）",
        price: rakurakuPricing.monitor.monthlyPrice,
        priceCurrency: "JPY",
        description: `初期費用0円、月額${formatRakurakuYen(
          rakurakuPricing.monitor.monthlyPrice,
        )}（税込）`,
      },
    ],
  };

  return (
    <div className="bg-white text-sea-navy">
      {!siteConfig.demoMode ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
          }}
        />
      ) : null}

      <RakurakuHeader />

      <main>
        {/* SECTION 01 ファーストビュー */}
        <section className="border-b border-sea-line bg-sea-ivory">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:py-20">
            <div className="lg:col-start-1 lg:row-start-1">
              <p className="inline-flex items-center gap-2 rounded-full bg-sea-navy px-4 py-2 text-sm font-bold text-white">
                <Ship className="h-4 w-4" aria-hidden="true" />
                {rakurakuHero.eyebrow}
              </p>
              <h1 className="mt-6 text-[clamp(1.875rem,7vw,3rem)] font-bold leading-[1.35] tracking-tight">
                {rakurakuHero.heading}
              </h1>
              <p className="mt-5 text-[1.0625rem] leading-8 text-sea-body sm:text-lg">
                {rakurakuHero.subheading}
              </p>
              <p className="mt-5 inline-flex items-start gap-2 rounded-2xl bg-white px-4 py-3 text-base font-semibold leading-7 text-sea-navy">
                <CheckCircle2
                  className="mt-1 h-5 w-5 shrink-0 text-sea-blue"
                  aria-hidden="true"
                />
                {rakurakuHero.note}
              </p>
            </div>

            <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <RakurakuImage
                name="hero"
                alt="港で釣り船を前にした船長と、その相棒の猫のイラスト"
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
              />
            </div>

            <div className="lg:col-start-1 lg:row-start-2">
              <div className="flex flex-col gap-3 sm:flex-row">
                <PrimaryCta />
                <Link
                  href="#features"
                  className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-sea-navy bg-white px-7 py-3 text-base font-bold text-sea-navy transition hover:bg-sea-blue-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea-blue"
                >
                  {rakurakuCta.serviceLabel}
                </Link>
              </div>
              <p className="mt-4 text-sm font-semibold text-sea-body">
                先着5船｜初期費用0円｜月額4,980円（税込）
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 02 こんなことで困っていませんか？ */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex items-center justify-center gap-4">
            <RakurakuMascot
              size={192}
              fallbackVariant="tilting"
              className="h-16 w-auto sm:h-20"
            />
            <h2 className="text-[clamp(1.375rem,5vw,2rem)] font-bold leading-snug">
              船長さん、
              <br className="sm:hidden" />
              こんなことで困っていませんか？
            </h2>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rakurakuPains.map((pain, index) => {
              const Icon = painIcons[index] ?? MessageSquare;

              return (
                <li
                  key={pain.title}
                  className="h-full rounded-2xl border border-sea-line bg-white p-6 shadow-sm shadow-sea-navy/5"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sea-blue-soft">
                    <Icon className="h-6 w-6 text-sea-blue" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{pain.title}</h3>
                  <p className="mt-2 text-base leading-7 text-sea-body">
                    {pain.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </section>

        {/* SECTION 03 ラクラク船長とは？ */}
        <section id="about" className="scroll-mt-20 bg-sea-ivory py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <p className="text-sm font-bold tracking-[0.2em] text-sea-blue">
              ラクラク船長とは？
            </p>
            <h2 className="mt-4 text-[clamp(1.375rem,5vw,2.125rem)] font-bold leading-[1.5]">
              {rakurakuAbout.heading}
            </h2>
            {rakurakuAbout.body.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-5 text-left text-[1.0625rem] leading-8 text-sea-body sm:text-center"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* SECTION 04 できること */}
        <section id="features" className="scroll-mt-20 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-center text-[clamp(1.5rem,5vw,2.25rem)] font-bold">
              できること
            </h2>

            <div className="mt-12 space-y-14 sm:space-y-20">
              <FeatureRow number="01" />

              {/* 02 は最大の訴求ポイントのため大きく見せる */}
              <EmphasisFeature />

              <FeatureRow number="03" reversed />

              <NoMigrationFeature />
            </div>
          </div>
        </section>

        {/* SECTION 05 船長がやるのは、ほぼこれだけ */}
        <section className="bg-sea-navy py-16 text-white sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-center text-[clamp(1.5rem,5vw,2.25rem)] font-bold">
              船長がやるのは、ほぼこれだけ
            </h2>

            <ol className="mt-10 grid gap-4 sm:grid-cols-3">
              {rakurakuCaptainSteps.map((step) => (
                <li
                  key={step.number}
                  className="rounded-3xl bg-white/10 p-7 text-center"
                >
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sea-gold text-3xl font-bold text-sea-navy">
                    {step.number}
                  </span>
                  <p className="mt-5 text-xl font-bold leading-snug sm:text-2xl">
                    {step.label}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-10 flex items-center justify-center gap-4">
              <RakurakuMascot
                size={192}
                fallbackVariant="waving"
                className="h-16 w-auto sm:h-20"
              />
              <p className="text-base font-semibold text-white/90 sm:text-lg">
                {rakurakuCaptainStepsNote}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 06 Before / After */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-center text-[clamp(1.5rem,5vw,2.25rem)] font-bold">
              {rakurakuComparison.heading}
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-sea-line bg-sea-sand p-7">
                <p className="text-base font-bold text-sea-body">
                  {rakurakuComparison.before.label}
                </p>
                <ul className="mt-5 space-y-3">
                  {rakurakuComparison.before.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[1.0625rem] leading-7 text-sea-body"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1.5 w-4 shrink-0 rounded-full bg-sea-body/40"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border-2 border-sea-blue bg-sea-blue-soft p-7">
                <p className="text-base font-bold text-sea-navy">
                  {rakurakuComparison.after.label}
                </p>
                <ul className="mt-5 space-y-3">
                  {rakurakuComparison.after.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[1.0625rem] font-semibold leading-7 text-sea-navy"
                    >
                      <CheckCircle2
                        className="mt-1 h-5 w-5 shrink-0 text-sea-blue"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 07 ホームページがなくても相談できます */}
        <section className="bg-sea-ivory py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="rounded-3xl border border-sea-line bg-white p-7 sm:p-10">
              <h2 className="text-[clamp(1.375rem,4.5vw,1.875rem)] font-bold leading-snug">
                {rakurakuNoWebsite.heading}
              </h2>
              <p className="mt-5 text-[1.0625rem] leading-8 text-sea-body">
                {rakurakuNoWebsite.body}
              </p>
              <p className="mt-4 text-sm text-sea-body">
                {rakurakuNoWebsite.note}
              </p>
              <Link
                href={rakurakuCta.secondaryHref}
                className="mt-7 inline-flex min-h-14 items-center justify-center gap-2 rounded-full border-2 border-sea-navy px-7 py-3 text-base font-bold text-sea-navy transition hover:bg-sea-blue-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea-blue"
              >
                {rakurakuCta.secondaryLabel}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 08 料金 */}
        <section id="pricing" className="scroll-mt-20 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-center text-[clamp(1.5rem,5vw,2.25rem)] font-bold">
              料金
            </h2>

            {/* モニター枠を先に、大きく見せる */}
            <div className="mt-10 rounded-3xl border-4 border-sea-gold bg-sea-navy p-7 text-white sm:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-sea-gold px-4 py-1.5 text-sm font-bold text-sea-navy">
                  {rakurakuPricing.monitor.label}
                </span>
                <span className="text-lg font-bold text-sea-gold-soft">
                  {rakurakuPricing.monitor.limitLabel}
                </span>
              </div>

              <div className="mt-7 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-base font-semibold text-white/80">
                    初期費用
                  </p>
                  <p className="mt-1 flex items-baseline gap-2">
                    <span className="text-6xl font-bold tabular-nums">0</span>
                    <span className="text-2xl font-bold">円</span>
                  </p>
                </div>
                <div>
                  <p className="text-base font-semibold text-white/80">月額</p>
                  <p className="mt-1 flex items-baseline gap-2">
                    <span className="text-5xl font-bold tabular-nums">
                      {rakurakuPricing.monitor.monthlyPrice.toLocaleString(
                        "ja-JP",
                      )}
                    </span>
                    <span className="text-2xl font-bold">円</span>
                    <span className="text-base font-semibold">（税込）</span>
                  </p>
                </div>
              </div>

              <p className="mt-6 rounded-2xl bg-white/10 px-5 py-4 text-base font-semibold leading-7">
                {rakurakuPricing.monitor.note}
              </p>

              <div className="mt-6">
                <p className="text-base font-bold">条件</p>
                <ul className="mt-3 space-y-2">
                  {rakurakuPricing.monitor.conditions.map((condition) => (
                    <li
                      key={condition}
                      className="flex items-start gap-3 text-base leading-7 text-white/90"
                    >
                      <CheckCircle2
                        className="mt-1 h-5 w-5 shrink-0 text-sea-gold"
                        aria-hidden="true"
                      />
                      {condition}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <PrimaryCta />
              </div>
            </div>

            {/* 通常料金 */}
            <div className="mt-6 rounded-3xl border border-sea-line bg-white p-7 sm:p-10">
              <p className="text-base font-bold text-sea-body">
                {rakurakuPricing.regular.label}
              </p>

              <div className="mt-5 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-base font-semibold text-sea-body">
                    初期導入費
                  </p>
                  <p className="mt-1 flex items-baseline gap-2">
                    <span className="text-4xl font-bold tabular-nums">
                      {rakurakuPricing.regular.initialPrice.toLocaleString(
                        "ja-JP",
                      )}
                    </span>
                    <span className="text-xl font-bold">円</span>
                    <span className="text-sm font-semibold text-sea-body">
                      （税込）
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-base font-semibold text-sea-body">月額</p>
                  <p className="mt-1 flex items-baseline gap-2">
                    <span className="text-4xl font-bold tabular-nums">
                      {rakurakuPricing.regular.monthlyPrice.toLocaleString(
                        "ja-JP",
                      )}
                    </span>
                    <span className="text-xl font-bold">円</span>
                    <span className="text-sm font-semibold text-sea-body">
                      （税込）
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-7 border-t border-sea-line pt-6">
                <p className="text-base font-bold">含まれるもの</p>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {rakurakuPricing.regular.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base leading-7 text-sea-body"
                    >
                      <CheckCircle2
                        className="mt-1 h-5 w-5 shrink-0 text-sea-blue"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-6 text-sea-body">
                  {rakurakuPricing.regular.note}
                </p>
              </div>
            </div>

            {/* 契約条件。通常・モニター共通 */}
            <div className="mt-6 rounded-3xl border border-sea-line bg-sea-ivory p-7 sm:p-10">
              <h3 className="text-lg font-bold">契約条件（通常・モニター共通）</h3>
              <dl className="mt-5 grid gap-4 sm:grid-cols-3">
                {rakurakuTerms.map((term) => (
                  <div key={term.label}>
                    <dt className="text-sm font-semibold text-sea-body">
                      {term.label}
                    </dt>
                    <dd className="mt-1 text-lg font-bold">{term.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-sm leading-6 text-sea-body">
                しばりの期間はありません。合わないと感じたら、いつでもやめられます。
                詳しい条件は
                <Link
                  href="/commerce"
                  className="mx-1 inline-block min-h-6 py-0.5 font-semibold text-sea-blue underline underline-offset-4"
                >
                  特定商取引法に基づく表記
                </Link>
                をご覧ください。
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 09 導入まで */}
        <section className="bg-sea-ivory py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h2 className="text-center text-[clamp(1.5rem,5vw,2.25rem)] font-bold">
              導入まで
            </h2>

            <ol className="mt-10 grid gap-4 sm:grid-cols-3">
              {rakurakuFlow.map((item) => (
                <li
                  key={item.step}
                  className="rounded-3xl border border-sea-line bg-white p-7"
                >
                  <p className="text-sm font-bold tracking-[0.16em] text-sea-blue">
                    {item.step}
                  </p>
                  <p className="mt-3 text-lg font-bold leading-snug">
                    {item.label}
                  </p>
                </li>
              ))}
            </ol>

            <p className="mt-8 text-center text-base font-semibold text-sea-body">
              {rakurakuFlowNote}
            </p>
          </div>
        </section>

        {/* SECTION 10 よくある質問 */}
        <section id="faq" className="scroll-mt-20 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="flex items-center justify-center gap-4">
              <RakurakuMascot
                size={192}
                fallbackVariant="sitting"
                className="h-16 w-auto"
              />
              <h2 className="text-[clamp(1.5rem,5vw,2.25rem)] font-bold">
                よくある質問
              </h2>
            </div>
            <RakurakuFaq items={rakurakuFaqItems} />
          </div>
        </section>

        {/* SECTION 11 最終CTA */}
        <section className="bg-[linear-gradient(to_bottom,var(--color-sea-navy),var(--color-sea-blue))] py-16 text-white sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <RakurakuMascot
              size={224}
              fallbackVariant="waving"
              className="mx-auto h-24 w-auto sm:h-28"
            />
            <h2 className="mt-6 text-[clamp(1.5rem,5.5vw,2.375rem)] font-bold leading-[1.45]">
              {rakurakuFinalCta.heading}
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-8 text-white/90">
              {rakurakuFinalCta.body}
            </p>
            <div className="mt-8 flex justify-center">
              <PrimaryCta />
            </div>
            <p className="mt-5 text-base font-bold text-sea-gold-soft">
              {rakurakuFinalCta.note}
            </p>
          </div>
        </section>
      </main>

      <RakurakuFooter />

      {/* スマートフォンでは CTA を常時表示する */}
      <div className="fixed inset-x-3 bottom-3 z-50 sm:hidden">
        <Link
          href={rakurakuCta.primaryHref}
          className="flex min-h-14 items-center justify-center gap-2 rounded-full bg-sea-gold px-5 py-3 text-base font-bold text-sea-navy shadow-lg shadow-sea-navy/25"
        >
          {rakurakuCta.primaryLabel}
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

function PrimaryCta() {
  return (
    <Link
      href={rakurakuCta.primaryHref}
      className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-sea-gold px-8 py-3 text-lg font-bold text-sea-navy transition hover:bg-sea-gold/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {rakurakuCta.primaryLabel}
      <ArrowRight className="h-5 w-5" aria-hidden="true" />
    </Link>
  );
}

/** できること 01・03 の画像つき交互レイアウト */
function FeatureRow({
  number,
  reversed = false,
}: {
  number: string;
  reversed?: boolean;
}) {
  const item = feature(number);

  return (
    <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-12">
      <div className={reversed ? "lg:order-2" : undefined}>
        <p className="text-base font-bold tracking-[0.2em] text-sea-blue">
          {item.number}
        </p>
        <h3 className="mt-3 text-[clamp(1.375rem,4.5vw,1.875rem)] font-bold leading-snug">
          {item.heading}
        </h3>
        <p className="mt-5 text-[1.0625rem] leading-8 text-sea-body">
          {item.description}
        </p>
        {item.highlight ? (
          <p className="mt-5 inline-block rounded-2xl bg-sea-gold-soft px-5 py-3 text-lg font-bold text-sea-navy">
            {item.highlight}
          </p>
        ) : null}
      </div>

      {item.image ? (
        <RakurakuImage
          name={item.image}
          alt={item.imageAlt ?? item.heading}
          frameClassName={reversed ? "lg:order-1" : undefined}
          sizes="(min-width: 1024px) 520px, 100vw"
        />
      ) : null}
    </div>
  );
}

/** できること 02。最大の訴求ポイントとして大きく見せる */
function EmphasisFeature() {
  const item = feature("02");

  return (
    <div className="rounded-[2rem] border-2 border-sea-blue bg-sea-blue-soft p-7 sm:p-10">
      <div className="grid items-center gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-sea-navy px-4 py-2 text-sm font-bold text-white">
            <CloudRain className="h-4 w-4" aria-hidden="true" />
            {item.number}　時化の日は「中止」を押すだけ
          </p>
          <h3 className="mt-5 text-[clamp(1.5rem,5.5vw,2.375rem)] font-bold leading-[1.4]">
            {item.heading}
          </h3>
          <p className="mt-5 text-[1.0625rem] leading-8 text-sea-body">
            {item.description}
          </p>
        </div>

        {item.image ? (
          <RakurakuImage
            name={item.image}
            alt={item.imageAlt ?? item.heading}
            frameClassName="bg-white"
            sizes="(min-width: 1024px) 480px, 100vw"
          />
        ) : null}
      </div>
    </div>
  );
}

/** できること 04。画像は使わず、今のやり方を変えない点を伝える */
function NoMigrationFeature() {
  const item = feature("04");

  return (
    <div className="rounded-3xl border border-sea-line bg-sea-ivory p-7 sm:p-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white">
          <CalendarCheck
            className="h-7 w-7 text-sea-blue"
            aria-hidden="true"
          />
        </span>
        <div>
          <p className="text-base font-bold tracking-[0.2em] text-sea-blue">
            {item.number}　今のHP・Googleカレンダーを活用
          </p>
          <h3 className="mt-3 text-[clamp(1.375rem,4.5vw,1.875rem)] font-bold leading-snug">
            {item.heading}
          </h3>
          <p className="mt-5 text-[1.0625rem] leading-8 text-sea-body">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
