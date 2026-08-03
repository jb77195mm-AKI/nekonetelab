import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Camera,
  Check,
  Globe2,
  GraduationCap,
  Mail,
  MapPin,
  MapPinned,
  MessageCircle,
  MonitorSmartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { notFound } from "next/navigation";
import { Cat, CatFace } from "@/components/brand/Cat";
import { SetHtmlLang } from "@/components/common/SetHtmlLang";
import { siteConfig } from "@/config/site";
import { dxTools } from "@/data/dx-tools";
import { webPlans } from "@/data/web-plans";
import {
  isLocaleSegment,
  localeHreflang,
  localeLabels,
  localePath,
  localeSegments,
  type Locale,
} from "@/i18n/locales";
import { summaries } from "@/i18n/summary";

export const dynamicParams = false;

export function generateStaticParams() {
  return localeSegments.map((locale) => ({ locale }));
}

const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

function hreflangAlternates(): Record<string, string> {
  const languages: Record<string, string> = { ja: "/", "x-default": "/" };
  for (const segment of localeSegments) {
    languages[localeHreflang[segment]] = `/${segment}`;
  }
  return languages;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocaleSegment(locale)) return {};
  const dict = summaries[locale];

  return {
    title: { absolute: dict.meta.title },
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: hreflangAlternates(),
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.businessName,
      title: dict.meta.title,
      description: dict.meta.description,
      url: `/${locale}`,
    },
  };
}

function formatJpy(value: number): string {
  return `¥${new Intl.NumberFormat("en-US").format(value)}`;
}

const serviceIcons: LucideIcon[] = [
  MonitorSmartphone,
  MapPinned,
  Bot,
  GraduationCap,
  Workflow,
  BriefcaseBusiness,
];

export default async function LocaleSummaryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocaleSegment(locale)) notFound();

  const dict = summaries[locale];
  const lang = localeHreflang[locale];

  const webStart = webPlans.find((plan) => plan.slug === "web-start")!;
  const webSupport = webPlans.find((plan) => plan.slug === "web-support")!;
  const buyout = webPlans.find((plan) => plan.slug === "buyout")!;
  const toolBySlug = {
    queue: dxTools.find((tool) => tool.slug === "inbound-queue")!,
    review: dxTools.find((tool) => tool.slug === "review-support")!,
    shift: dxTools.find((tool) => tool.slug === "skill-shift")!,
  } as const;

  return (
    <div lang={lang} className="bg-paper text-ink">
      <SetHtmlLang lang={lang} />

      <header className="border-b border-line-soft bg-white/95">
        <div className="mx-auto flex min-h-16 max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <Link href="/" className="flex min-w-0 items-center gap-2 font-medium tracking-tight">
            <CatFace className="h-10 w-10 shrink-0" />
            <span className="truncate text-sm sm:text-base">{siteConfig.businessName}</span>
          </Link>
          <nav aria-label="Language" className="flex flex-wrap items-center gap-1.5">
            {(["ja", ...localeSegments] as Locale[]).map((item) => (
              <Link
                key={item}
                href={localePath(item)}
                aria-current={item === locale ? "page" : undefined}
                className={`inline-flex min-h-9 items-center rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                  item === locale
                    ? "border-navy bg-navy text-white"
                    : "border-line-soft bg-white text-muted hover:border-navy hover:text-navy"
                }`}
              >
                {localeLabels[item]}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <p className="mx-auto max-w-6xl px-4 pt-4 text-xs leading-5 text-muted sm:px-6">
          {dict.langNote}
        </p>

        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#faf6ee_0%,#ffffff_52%,#eef6fa_100%)]">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-cat-beige bg-white/80 px-4 py-2 text-xs font-semibold text-navy shadow-sm">
                <MapPin className="h-4 w-4 text-navy" aria-hidden="true" />
                {dict.hero.badge}
              </p>
              <h1 className="mt-6 text-[clamp(1.9rem,6vw,3.2rem)] font-medium leading-tight tracking-tight">
                {dict.hero.title1}
                <span className="mt-1 block text-navy">{dict.hero.title2}</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-muted">{dict.hero.lead}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-ink px-7 py-3 font-semibold text-white transition hover:bg-ink-soft"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {dict.hero.ctaContact}
                </a>
                <a
                  href={siteConfig.lineUrl}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-navy bg-white/80 px-7 py-3 font-semibold text-navy transition hover:bg-navy hover:text-white"
                  {...externalLinkProps}
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {dict.hero.ctaLine}
                </a>
              </div>
            </div>
            <div className="mx-auto w-full max-w-xs lg:max-w-sm">
              <Cat variant="working" size={640} className="w-full" alt={dict.hero.catAlt} priority />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-medium sm:text-3xl">{dict.services.title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{dict.services.lead}</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {dict.services.items.map((service, index) => {
              const Icon = serviceIcons[index] ?? BriefcaseBusiness;
              return (
                <article
                  key={service.title}
                  className="rounded-2xl border border-line-soft bg-white p-6 transition hover:-translate-y-1 hover:border-cat-beige hover:shadow-lg"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-mist-light text-navy">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-medium sm:text-3xl">{dict.plans.title}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{dict.plans.lead}</p>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <article className="relative rounded-2xl border-2 border-amber-accent bg-white p-7 shadow-xl shadow-ink/5">
                <span className="absolute -top-3 left-6 rounded-full bg-navy px-3 py-1 text-xs font-medium text-white">
                  {dict.plans.recommendedBadge}
                </span>
                <h3 className="text-xl font-medium">{dict.plans.webStart.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{dict.plans.webStart.tagline}</p>
                <div className="mt-5 rounded-2xl bg-ink p-5 text-white">
                  <p className="text-xs font-semibold text-amber-soft">{dict.plans.initialLabel}</p>
                  <p className="mt-1 text-4xl font-medium tabular-nums">{formatJpy(webStart.initialPrice)}</p>
                  <p className="mt-3 border-t border-slate-700 pt-3 text-sm font-semibold">
                    {dict.plans.monthlyLabel}: {formatJpy(webStart.monthlyPrice)}
                    {dict.plans.monthlyUnit}
                  </p>
                  <p className="mt-1 text-xs text-slate-300">{dict.plans.minimumTerm}</p>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {dict.plans.webStart.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm leading-6 text-muted">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-navy" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-950">
                  {dict.plans.webStart.cancelNote}
                </p>
              </article>

              <article className="rounded-2xl border border-line-soft bg-white p-7">
                <h3 className="text-xl font-medium">{dict.plans.webSupport.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{dict.plans.webSupport.tagline}</p>
                <div className="mt-5 rounded-2xl bg-cream-light p-5">
                  <p className="text-xs font-semibold text-muted">{dict.plans.initialLabel}</p>
                  <p className="mt-1 text-3xl font-medium tabular-nums text-navy">
                    {formatJpy(webSupport.initialPrice)}
                  </p>
                  <p className="mt-3 border-t border-line-soft pt-3 text-sm font-semibold text-ink">
                    {dict.plans.monthlyLabel}: {formatJpy(webSupport.monthlyPrice)}
                    {dict.plans.monthlyUnit}
                  </p>
                  <p className="mt-1 text-xs text-muted">{dict.plans.minimumTerm}</p>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {dict.plans.webSupport.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm leading-6 text-muted">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-navy" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-2xl border border-line-soft bg-white p-7">
                <h3 className="text-xl font-medium">{dict.plans.buyout.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{dict.plans.buyout.tagline}</p>
                <div className="mt-5 rounded-2xl bg-cream-light p-5">
                  <p className="text-xs font-semibold text-muted">{dict.plans.initialLabel}</p>
                  <p className="mt-1 text-3xl font-medium tabular-nums text-navy">
                    {formatJpy(buyout.monitorPrice ?? buyout.initialPrice)}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-muted">{dict.plans.buyout.priceNote}</p>
                  <p className="mt-3 border-t border-line-soft pt-3 text-xs text-muted">
                    {dict.plans.noMinimumTerm}
                  </p>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {dict.plans.buyout.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm leading-6 text-muted">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-navy" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
            <p className="mt-6 text-xs leading-6 text-muted">
              {dict.plans.taxNote} {dict.plans.extraNote}
            </p>
          </div>
        </section>

        <section className="bg-mist-light/60 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-medium sm:text-3xl">{dict.tools.title}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{dict.tools.lead}</p>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {dict.tools.items.map((item) => {
                const tool = toolBySlug[item.key];
                return (
                  <article key={item.key} className="rounded-2xl border border-line-soft bg-white p-7">
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                    <p className="mt-5 rounded-xl bg-cream-light px-4 py-3 text-sm font-semibold text-navy tabular-nums">
                      {dict.tools.initialLabel} {formatJpy(tool.initialPrice.minimum)}
                      {dict.tools.fromSuffix}／{dict.tools.monthlyLabel}{" "}
                      {formatJpy(tool.monthlyPrice.minimum)}
                      {dict.tools.fromSuffix}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-8 rounded-2xl border border-cat-beige bg-cream-light/60 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-medium sm:text-3xl">
                <Globe2 className="h-7 w-7 text-navy" aria-hidden="true" />
                {dict.area.title}
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-8 text-muted">{dict.area.body}</p>
            </div>
            <Cat variant="sitting" size={320} className="mx-auto h-32 w-auto lg:h-40" />
          </div>
        </section>

        <section className="bg-ink py-16 text-white sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-medium sm:text-3xl">{dict.contact.title}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">{dict.contact.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-navy transition hover:bg-mist"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {dict.contact.emailLabel}
              </a>
              <a
                href={siteConfig.lineUrl}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-slate-500 px-6 py-3 font-semibold text-white transition hover:border-amber-soft hover:text-amber-soft"
                {...externalLinkProps}
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {dict.contact.lineLabel}
              </a>
              <a
                href={siteConfig.instagramUrl}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-slate-500 px-6 py-3 font-semibold text-white transition hover:border-amber-soft hover:text-amber-soft"
                {...externalLinkProps}
              >
                <Camera className="h-4 w-4" aria-hidden="true" />
                {dict.contact.instagramLabel}
              </a>
              <a
                href={siteConfig.xUrl}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-slate-500 px-6 py-3 font-semibold text-white transition hover:border-amber-soft hover:text-amber-soft"
                {...externalLinkProps}
              >
                <span aria-hidden="true" className="font-medium">
                  X
                </span>
                {dict.contact.xLabel}
              </a>
              <Link
                href="/#contact"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-slate-500 px-6 py-3 font-semibold text-white transition hover:border-amber-soft hover:text-amber-soft"
              >
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                {dict.contact.formLabel}
              </Link>
            </div>
            <p className="mt-6 max-w-2xl text-xs leading-6 text-slate-400">{dict.contact.languageNote}</p>
            <p className="mt-2 text-sm font-semibold text-slate-200">{siteConfig.email}</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-line-soft bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 text-sm sm:flex-row sm:items-center sm:px-6">
          <p className="font-semibold text-muted">
            © {new Date().getFullYear()} {siteConfig.businessName}
          </p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-muted">
            <Link href="/" className="min-h-11 py-2 underline-offset-4 hover:underline">
              {dict.footer.japaneseSite}
            </Link>
            <Link href="/privacy" className="min-h-11 py-2 underline-offset-4 hover:underline">
              {dict.footer.privacy}
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
