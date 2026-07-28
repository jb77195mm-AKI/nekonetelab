import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Check,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { OfficialContactForm } from "@/components/official/OfficialContactForm";
import { OfficialFaq } from "@/components/official/OfficialFaq";
import { OfficialHeader } from "@/components/official/OfficialHeader";
import { PlaceholderImage } from "@/components/common/PlaceholderImage";
import { SolutionCard } from "@/components/solutions/SolutionCard";
import { siteConfig } from "@/config/site";
import { allSites } from "@/data";
import { businessActivities, officialServices } from "@/data/official";
import { solutions } from "@/data/solutions";
import {
  basicPlan,
  optionItems,
  productionFlow,
  productionNotes,
  productionPeriod,
  websitePricing,
} from "@/data/pricing";

const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

export default function OfficialHomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.businessName,
    description: siteConfig.description,
    email: siteConfig.email,
    url: siteConfig.publicUrl,
    telephone: siteConfig.phone,
    address: siteConfig.address,
    sameAs: [siteConfig.instagramUrl, siteConfig.xUrl, siteConfig.lineUrl].filter(Boolean),
  };

  return (
    <div id="top" className="bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
        }}
      />

      <OfficialHeader
        businessName={siteConfig.businessName}
        instagramUrl={siteConfig.instagramUrl}
        xUrl={siteConfig.xUrl}
        lineUrl={siteConfig.lineUrl}
      />

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-sky-50">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-200/40 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl"
          />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-xs font-bold text-orange-900">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                小規模店舗・中小企業のデジタル活用を伴走支援
              </p>
              <h1 className="mt-6 text-[clamp(2.25rem,10vw,3.75rem)] font-black leading-tight tracking-tight">
                <span className="block sm:inline">デジタルの</span>
                <span className="block sm:inline">困りごとに、</span>
                <span className="block text-orange-800">猫の手を。</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
                ホームページ制作からAI活用、業務効率化まで。難しい言葉をできるだけ使わず、
                今の事業にちょうどよい方法を一緒に考えます。
              </p>
              <div className="mt-8 flex flex-col gap-3 md:flex-row">
                <a
                  href="#contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-orange-700 px-7 py-3 font-bold text-white transition hover:bg-orange-800"
                >
                  まずは相談する
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#works"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-slate-800 px-7 py-3 font-bold transition hover:bg-slate-950 hover:text-white"
                >
                  制作サンプルを見る
                </a>
              </div>
              <p className="mt-4 text-sm text-slate-600">ご相談内容が固まっていない段階でも大丈夫です。</p>
            </div>

            <div className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl shadow-slate-900/5 backdrop-blur sm:p-8">
              <p className="text-sm font-bold tracking-[0.18em] text-orange-800">WHAT WE DO</p>
              <h2 className="mt-3 text-2xl font-black">小さく始めて、使い続けられる形へ</h2>
              <ul className="mt-6 space-y-4">
                {[
                  "目的と予算に合わせたホームページ制作",
                  "現場の業務に合わせた生成AIの活用支援",
                  "担当者だけに依存しない運用の整理",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100">
                      <Check className="h-4 w-4 text-orange-800" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 rounded-2xl bg-slate-950 p-5 text-white">
                <p className="text-xs font-bold text-orange-300">ホームページ制作 基本プラン</p>
                <BasicPlanPrice inverted compact />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <SectionHeading
            eyebrow="SERVICES"
            title="デジタル活用を、分かりやすく"
            description="必要なものだけを選び、無理なく運用できるところまで支援します。"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {officialServices.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-800">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="business-tools" className="scroll-mt-20 bg-sky-50/60 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="BUSINESS TOOLS"
                title="店舗業務を、もっとシンプルに"
                description="順番待ち、口コミ返信、シフト作成など、日々の店舗業務を小さく効率化するシステムをご提案します。大がかりなシステムではなく、必要な機能から始められる小規模事業者向けのサービスです。"
              />
              <p className="inline-flex w-fit rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-bold text-sky-950">
                サービス内容を検証中のデモです
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {solutions.map((solution) => (
                <SolutionCard key={solution.slug} solution={solution} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/solutions"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-900 px-7 py-3 font-bold text-white transition hover:bg-sky-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
              >
                3つの業務システムを比較する
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section id="works" className="scroll-mt-20 bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="SAMPLE WORKS"
              title="業種別の制作サンプル"
              description="掲載している店舗・企業・人物はすべて架空です。デザインと情報設計の参考としてご覧ください。"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {allSites.map((site) => (
                <Link
                  key={site.data.slug}
                  href={`/${site.data.slug}`}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <PlaceholderImage
                      src={site.thumbnail}
                      alt={`${site.data.siteName}のホームページ制作サンプル`}
                      priority={site.data.slug === "cafe"}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-slate-950/90 px-3 py-1 text-xs font-bold text-white">
                      デモサイト
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold text-orange-800">{site.category}</p>
                    <h3 className="mt-1 text-lg font-bold">{site.data.siteName}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{site.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-orange-800">
                      サンプルを見る
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="price" className="scroll-mt-20 mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <SectionHeading
            eyebrow="PRICE"
            title="ホームページ制作料金"
            description="小規模事業者のスタートに必要な内容を、分かりやすい基本プランにまとめています。"
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl border-2 border-orange-200 bg-orange-50/50 p-7 sm:p-9">
              <p className="text-sm font-bold text-slate-600">基本プラン</p>
              <BasicPlanPrice />
              <p className="mt-5 rounded-2xl border border-orange-200 bg-white px-4 py-3 text-sm leading-6 text-slate-700">
                {websitePricing.monitorDescription}
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {basicPlan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-orange-800" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-7 rounded-xl bg-white px-4 py-3 text-center text-sm font-bold text-slate-800">
                制作期間の目安：{productionPeriod}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold">オプション料金</h3>
              <div className="mt-4 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                {optionItems.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-start gap-1 px-5 py-3 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                  >
                    <span className="text-slate-700">{item.name}</span>
                    <span className="shrink-0 font-bold">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs leading-6 text-slate-500">
                内容・ページ数・必要機能により費用が変わる場合があります。正式な金額はヒアリング後にご案内します。
              </p>
            </div>
          </div>
        </section>

        <section id="flow" className="scroll-mt-20 bg-slate-950 py-20 text-white sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="FLOW"
              title="ご相談から公開まで"
              description="初めてホームページを依頼する方にも、現在地が分かる進め方を大切にしています。"
              inverted
            />
            <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {productionFlow.map((step) => (
                <li key={step.step} className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-700 text-sm font-black">
                    {step.step}
                  </span>
                  <h3 className="mt-4 font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="FAQ" title="よくあるご質問" />
              <OfficialFaq />
            </div>

            <div className="rounded-3xl bg-slate-50 p-7 sm:p-9">
              <p className="text-xs font-bold tracking-[0.18em] text-orange-800">PLEASE NOTE</p>
              <h2 className="mt-3 text-2xl font-black">ご依頼前にご確認ください</h2>
              <ul className="mt-7 space-y-3">
                {productionNotes.map((note) => (
                  <li key={note} className="flex items-start gap-3 text-sm leading-7 text-slate-700">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-700" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 border-y border-slate-200 bg-orange-50/50 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-bold tracking-[0.18em] text-orange-800">ABOUT</p>
              <h2 className="mt-3 text-3xl font-black">事業者情報</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                小規模事業者の方が、デジタルを身近な道具として使えるようになることを目指しています。
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-orange-100 bg-white">
              <dl className="divide-y divide-slate-200">
                <BusinessRow label="事業者名">{siteConfig.businessName}</BusinessRow>
                <BusinessRow label="事業内容">
                  <ul className="space-y-1">
                    {businessActivities.map((activity) => (
                      <li key={activity}>{activity}</li>
                    ))}
                  </ul>
                </BusinessRow>
                {siteConfig.address ? (
                  <BusinessRow label="所在地">
                    {siteConfig.mapUrl ? (
                      <a
                        href={siteConfig.mapUrl}
                        className="inline-flex items-center gap-1 font-medium text-orange-800 underline underline-offset-2"
                        {...externalLinkProps}
                      >
                        {siteConfig.address}
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    ) : (
                      siteConfig.address
                    )}
                  </BusinessRow>
                ) : null}
                {siteConfig.phone && siteConfig.phoneHref ? (
                  <BusinessRow label="電話番号">
                    <a href={siteConfig.phoneHref} className="font-medium text-orange-800 underline underline-offset-2">
                      {siteConfig.phone}
                    </a>
                  </BusinessRow>
                ) : null}
                {siteConfig.businessHours ? (
                  <BusinessRow label="営業時間">{siteConfig.businessHours}</BusinessRow>
                ) : null}
                {siteConfig.serviceArea ? (
                  <BusinessRow label="対応地域">{siteConfig.serviceArea}</BusinessRow>
                ) : null}
                <BusinessRow label="メール">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="break-all font-medium text-orange-800 underline underline-offset-2"
                  >
                    {siteConfig.email}
                  </a>
                </BusinessRow>
                <BusinessRow label="SNS">
                  <SocialLinks />
                </BusinessRow>
              </dl>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold tracking-[0.18em] text-orange-800">CONTACT</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">まずは、お困りごとをお聞かせください</h2>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                ご相談内容を確認し、通常はメールでご連絡します。営業・勧誘を目的とした送信はご遠慮ください。
              </p>

              <div className="mt-8 space-y-4 rounded-2xl bg-slate-950 p-6 text-white">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 rounded-xl p-2 transition hover:bg-slate-800"
                >
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" aria-hidden="true" />
                  <span>
                    <span className="block text-xs text-slate-400">メール</span>
                    <span className="mt-1 block break-all text-sm font-bold">{siteConfig.email}</span>
                  </span>
                </a>
                {siteConfig.phone && siteConfig.phoneHref ? (
                  <a href={siteConfig.phoneHref} className="flex items-start gap-3 rounded-xl p-2 transition hover:bg-slate-800">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" aria-hidden="true" />
                    <span>
                      <span className="block text-xs text-slate-400">電話</span>
                      <span className="mt-1 block text-sm font-bold">{siteConfig.phone}</span>
                    </span>
                  </a>
                ) : null}
                {siteConfig.address ? (
                  <div className="flex items-start gap-3 p-2">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" aria-hidden="true" />
                    <span>
                      <span className="block text-xs text-slate-400">所在地</span>
                      <span className="mt-1 block text-sm font-bold">{siteConfig.address}</span>
                    </span>
                  </div>
                ) : null}
                <div className="border-t border-slate-700 pt-4">
                  <SocialLinks inverted />
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-9">
              <h3 className="text-xl font-bold">お問い合わせフォーム</h3>
              <p className="mt-2 text-sm text-slate-600">
                <span className="text-red-700">*</span> は必須項目です。
              </p>
              <div className="mt-7">
                <OfficialContactForm contactEmail={siteConfig.email} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950 py-10 text-slate-300">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Link href="#top" className="font-black text-white">
              {siteConfig.businessName}
            </Link>
            <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">{siteConfig.description}</p>
            <div className="mt-4">
              <SocialLinks inverted />
            </div>
          </div>
          <div className="text-sm">
            <nav aria-label="フッターナビゲーション" className="flex flex-wrap gap-x-5 gap-y-2">
              <Link href="/solutions" className="inline-flex min-h-11 items-center underline-offset-4 hover:underline">
                業務システム
              </Link>
              <Link href="/privacy" className="inline-flex min-h-11 items-center underline-offset-4 hover:underline">
                プライバシーポリシー
              </Link>
              <a href="#contact" className="inline-flex min-h-11 items-center underline-offset-4 hover:underline">
                お問い合わせ
              </a>
            </nav>
            <p className="mt-5 text-xs text-slate-500">
              © {new Date().getFullYear()} {siteConfig.businessName}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BasicPlanPrice({
  inverted = false,
  compact = false,
}: {
  inverted?: boolean;
  compact?: boolean;
}) {
  const secondaryText = inverted ? "text-slate-300" : "text-slate-700";
  const priceText = inverted ? "text-white" : "text-orange-800";

  return (
    <div className="mt-3">
      <p className={`text-sm font-medium ${secondaryText}`}>
        通常価格{" "}
        <span className="font-bold line-through decoration-2 decoration-orange-500">
          {websitePricing.regularPrice}
        </span>
        <span className="ml-1 text-xs">{websitePricing.taxLabel}</span>
      </p>
      <p className="mt-3">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-black ${
            inverted ? "bg-orange-300 text-slate-950" : "bg-orange-700 text-white"
          }`}
        >
          {websitePricing.monitorLabel}
        </span>
      </p>
      <p
        className={`mt-2 flex flex-wrap items-baseline gap-x-2 font-black tabular-nums ${priceText} ${
          compact ? "text-3xl" : "text-[clamp(2.25rem,12vw,3.5rem)]"
        }`}
      >
        <span>{websitePricing.monitorPrice}</span>
        <span className={`text-sm font-bold ${secondaryText}`}>{websitePricing.taxLabel}</span>
      </p>
      <p className={`mt-1 text-xs font-medium ${secondaryText}`}>{websitePricing.unitLabel}</p>
    </div>
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
      <p className={`text-xs font-bold tracking-[0.18em] ${inverted ? "text-orange-300" : "text-orange-800"}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-[clamp(1.75rem,8vw,2.25rem)] font-black ${
          inverted ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-sm leading-7 sm:text-base ${inverted ? "text-slate-300" : "text-slate-600"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

function BusinessRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2 px-5 py-4 text-sm sm:grid-cols-[9rem_1fr] sm:gap-6 sm:px-6">
      <dt className="font-bold text-slate-800">{label}</dt>
      <dd className="leading-6 text-slate-600">{children}</dd>
    </div>
  );
}

function SocialLinks({ inverted = false }: { inverted?: boolean }) {
  const linkClass = inverted
    ? "inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-700 px-3 py-2 text-sm font-bold text-white transition hover:border-orange-300 hover:text-orange-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
    : "inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-300 px-3 py-2 text-sm font-bold text-slate-800 transition hover:border-orange-700 hover:text-orange-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800";

  return (
    <div className="flex flex-wrap gap-2">
      <a
        href={siteConfig.instagramUrl}
        aria-label="Instagramを新しいタブで開く"
        className={linkClass}
        {...externalLinkProps}
      >
        <Camera className="h-4 w-4" aria-hidden="true" />
        Instagram
      </a>
      <a href={siteConfig.xUrl} aria-label="Xを新しいタブで開く" className={linkClass} {...externalLinkProps}>
        <span aria-hidden="true" className="font-black">
          X
        </span>
        X
      </a>
      {siteConfig.lineUrl ? (
        <a
          href={siteConfig.lineUrl}
          aria-label="公式LINEを新しいタブで開く"
          className={linkClass}
          {...externalLinkProps}
        >
          公式LINE
        </a>
      ) : (
        <span className={`${linkClass} cursor-default opacity-70`} aria-label="公式LINEは準備中です">
          公式LINE 準備中
        </span>
      )}
    </div>
  );
}
