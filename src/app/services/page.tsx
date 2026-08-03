import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SubpageShell } from "@/components/official/SubpageShell";
import {
  additionalCosts,
  serviceLayers,
  supportPlans,
} from "@/data/business-model";

export const metadata: Metadata = {
  title: "サービス一覧",
  description:
    "ホームページ制作、Web集客・運用、生成AI・業務効率化まで3段階で支援します。",
};

export default function ServicesPage() {
  return (
    <SubpageShell
      eyebrow="SERVICES"
      title="制作から運用、AI活用まで一つの窓口で"
      description="ホームページ制作を入口に、公開後の更新・Web集客、生成AI・業務効率化へ段階的に広げます。プラン内、オプション、個別見積もりの範囲は契約前に明確にします。"
    >
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {serviceLayers.map((layer, index) => (
            <article
              key={layer.title}
              className={`rounded-2xl border p-7 ${
                index === 0
                  ? "border-cat-beige bg-cream-light"
                  : index === 1
                    ? "border-sky-200 bg-sky-50"
                    : "border-slate-700 bg-ink text-white"
              }`}
            >
              <p
                className={`text-xs font-medium tracking-[0.16em] ${
                  index === 2 ? "text-amber-soft" : "text-navy"
                }`}
              >
                {layer.step} / {layer.label}
              </p>
              <h2 className="mt-3 text-2xl font-medium">{layer.title}</h2>
              <p
                className={`mt-4 text-sm leading-7 ${
                  index === 2 ? "text-slate-300" : "text-muted"
                }`}
              >
                {layer.description}
              </p>
              <ul className="mt-6 space-y-3">
                {layer.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-navy"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line-soft bg-cream-light py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-medium">公開後の継続支援</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
            ホームページ制作3プランとは分け、必要な支援範囲を確認してから見積もります。
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {supportPlans.map((plan) => (
              <article
                key={plan.name}
                className="rounded-2xl border border-line-soft bg-white p-7"
              >
                <h3 className="text-xl font-medium">{plan.name}</h3>
                <p className="mt-2 font-medium text-navy">{plan.priceLabel}</p>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {plan.description}
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-navy"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 rounded-xl bg-cream-light px-4 py-3 text-xs leading-5 text-muted">
                  {plan.notice}
                </p>
                <Link
                  href={plan.ctaHref}
                  className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-sm bg-ink px-6 py-3 font-semibold text-white"
                >
                  {plan.ctaLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 className="text-3xl font-medium">別途費用・個別見積もり</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {additionalCosts.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-line-soft bg-white p-5 text-sm font-semibold leading-6"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </SubpageShell>
  );
}
