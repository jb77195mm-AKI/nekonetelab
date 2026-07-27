import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Check,
  ChevronDown,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
} from "lucide-react";
import { OfficialContactForm } from "@/components/official/OfficialContactForm";
import { PlaceholderImage } from "@/components/common/PlaceholderImage";
import { siteConfig } from "@/config/site";
import { allSites } from "@/data";
import { businessActivities, officialNavigation, officialServices } from "@/data/official";
import {
  basicPlan,
  faqItems,
  optionItems,
  productionFlow,
  productionNotes,
  productionPeriod,
} from "@/data/pricing";

const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

function BrandPawMark() {
  return (
    <span
      aria-hidden="true"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-700 text-white shadow-sm"
    >
      <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor">
        <ellipse cx="8.5" cy="10.5" rx="2.8" ry="3.8" transform="rotate(-24 8.5 10.5)" />
        <ellipse cx="14.4" cy="7.7" rx="2.8" ry="3.8" transform="rotate(-7 14.4 7.7)" />
        <ellipse cx="20.6" cy="8.2" rx="2.8" ry="3.8" transform="rotate(10 20.6 8.2)" />
        <ellipse cx="25" cy="12.2" rx="2.7" ry="3.7" transform="rotate(25 25 12.2)" />
        <path d="M8.1 22.1c0-4.7 3.5-8.3 7.9-8.3s7.9 3.6 7.9 8.3c0 3.2-1.9 5.3-4.8 5.3-1.4 0-2.1-.8-3.1-.8s-1.8.8-3.1.8c-2.9 0-4.8-2.1-4.8-5.3Z" />
      </svg>
    </span>
  );
}

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

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link href="#top" className="flex items-center gap-2 font-black tracking-tight text-slate-950">
            <BrandPawMark />
            <span className="text-sm sm:text-base">{siteConfig.businessName}</span>
          </Link>

          <nav aria-label="メインナビゲーション" className="hidden items-center gap-6 text-sm font-medium lg:flex">
            {officialNavigation.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-orange-800">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 sm:flex">
            <a
              href={siteConfig.instagramUrl}
              aria-label="Instagramを新しいタブで開く"
              className="rounded-full p-2 text-slate-700 transition hover:bg-orange-50 hover:text-orange-800"
              {...externalLinkProps}
            >
              <Camera className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={siteConfig.xUrl}
              aria-label="Xを新しいタブで開く"
              className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-black text-slate-700 transition hover:bg-orange-50 hover:text-orange-800"
              {...externalLinkProps}
            >
              X
            </a>
            <a
              href={siteConfig.lineUrl}
              aria-label="公式LINEを新しいタブで開く"
              className="flex h-9 items-center justify-center rounded-full px-2 text-xs font-black text-slate-700 transition hover:bg-orange-50 hover:text-orange-800"
              {...externalLinkProps}
            >
              LINE
            </a>
            <a
              href="#contact"
              className="ml-1 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-slate-700"
            >
              お問い合わせ
            </a>
          </div>

          <details className="relative lg:hidden">
            <summary
              aria-label="メニューを開閉"
              className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-slate-300 [&::-webkit-details-marker]:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </summary>
            <nav
              aria-label="モバイルナビゲーション"
              className="absolute right-0 top-14 w-64 rounded-2xl border border-slate-200 bg-white p-3 text-sm shadow-xl"
            >
              {officialNavigation.map((item) => (
                <a key={item.href} href={item.href} className="block rounded-lg px-4 py-3 font-medium hover:bg-orange-50">
                  {item.label}
                </a>
              ))}
              <a
                href={siteConfig.lineUrl}
                aria-label="公式LINEを新しいタブで開く"
                className="block rounded-lg px-4 py-3 font-medium hover:bg-orange-50"
                {...externalLinkProps}
              >
                公式LINE
              </a>
              <a href="#contact" className="mt-2 block rounded-lg bg-orange-700 px-4 py-3 text-center font-bold text-white">
                お問い合わせ
              </a>
            </nav>
          </details>
        </div>
      </header>

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
              <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
                デジタルの困りごとに、
                <span className="block text-orange-800">猫の手を。</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
                ホームページ制作からAI活用、業務効率化まで。難しい言葉をできるだけ使わず、
                今の事業にちょうどよい方法を一緒に考えます。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
                <p className="mt-1 text-3xl font-black">
                  {basicPlan.price}
                  <span className="ml-2 text-xs font-medium text-slate-300">{basicPlan.priceNote}</span>
                </p>
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
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

        <section id="works" className="scroll-mt-20 bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="SAMPLE WORKS"
              title="業種別の制作サンプル"
              description="掲載している店舗・企業・人物はすべて架空です。デザインと情報設計の参考としてご覧ください。"
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
              <p className="mt-2 text-4xl font-black text-orange-800 sm:text-5xl">
                {basicPlan.price}
                <span className="ml-2 text-sm font-medium text-slate-600">{basicPlan.priceNote}</span>
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
                  <div key={item.name} className="flex items-center justify-between gap-4 px-5 py-3 text-sm">
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
            <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
              <div className="mt-8 space-y-3">
                {faqItems.map((item) => (
                  <details key={item.question} className="group rounded-2xl border border-slate-200 bg-white p-5">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-bold [&::-webkit-details-marker]:hidden">
                      <span>Q. {item.question}</span>
                      <ChevronDown
                        className="mt-0.5 h-5 w-5 shrink-0 transition group-open:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>
                    <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                      A. {item.answer}
                    </p>
                  </details>
                ))}
              </div>
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
                  <a href={`mailto:${siteConfig.email}`} className="font-medium text-orange-800 underline underline-offset-2">
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
            <nav aria-label="フッターナビゲーション" className="flex flex-wrap gap-x-5 gap-y-3">
              <Link href="/privacy" className="underline-offset-4 hover:underline">
                プライバシーポリシー
              </Link>
              <a href="#contact" className="underline-offset-4 hover:underline">
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
      <h2 className={`mt-3 text-3xl font-black sm:text-4xl ${inverted ? "text-white" : "text-slate-950"}`}>{title}</h2>
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
    ? "inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-2 text-sm font-bold text-white transition hover:border-orange-300 hover:text-orange-300"
    : "inline-flex items-center gap-2 rounded-full border border-slate-300 px-3 py-2 text-sm font-bold text-slate-800 transition hover:border-orange-700 hover:text-orange-800";

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
