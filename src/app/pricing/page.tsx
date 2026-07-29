import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SubpageShell } from "@/components/official/SubpageShell";
import {
  additionalWorkPricing,
  additionalCosts,
  comparisonRows,
  formatYen,
  homepagePlans,
} from "@/data/business-model";
import { buyoutMaintenancePlans } from "@/data/web-options";

export const metadata: Metadata = {
  title: "ホームページ制作料金",
  description:
    "Webスタート、Webサポート、買い切りの3プランと、標準範囲、支払い方法、保守、追加オプションを比較できます。",
};

export default function PricingPage() {
  return (
    <SubpageShell
      eyebrow="PRICING"
      title="ホームページ制作は、3つのプランから選べます"
      description="Webスタートは初期費用0円型と月額負担軽減型から選択。Webサポート、買い切りと、公開後の保守範囲も一緒にご確認ください。"
    >
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950">
          <strong>デモ表示：</strong>
          料金は税込の目安です。解約、所有権、移管、外部サービス費用は正式なお申し込み前にご案内し、契約書へ明記します。
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[...homepagePlans]
            .sort((a, b) => a.displayOrderMobile - b.displayOrderMobile)
            .map((plan) => (
              <article
                key={plan.slug}
                className={`flex h-full flex-col rounded-3xl border p-7 ${
                  plan.recommended
                    ? "border-orange-400 shadow-xl shadow-orange-900/10"
                    : "border-slate-200"
                }`}
              >
                {plan.label ? (
                  <p className="text-sm font-black text-orange-800">{plan.label}</p>
                ) : (
                  <p className="text-sm font-black text-slate-500">選べる導入方法</p>
                )}
                <h2 className="mt-2 text-xl font-black">{plan.name}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {plan.catchCopy}
                </p>

                <div className="mt-6 rounded-2xl bg-slate-950 p-5 text-white">
                  {plan.regularPrice ? (
                    <p className="text-xs text-slate-300">
                      通常制作価格{" "}
                      <span className="line-through">
                        {formatYen(plan.regularPrice)}
                      </span>
                    </p>
                  ) : null}
                  <p className="mt-2 text-xs text-orange-300">初期制作費</p>
                  <p className="mt-1 text-4xl font-black tabular-nums">
                    {formatYen(plan.initialPrice)}
                  </p>
                  <p className="mt-4 border-t border-slate-700 pt-4 text-lg font-black">
                    月額：
                    {plan.monthlyPrice
                      ? `${formatYen(plan.monthlyPrice)}（税込）`
                      : "0円（任意保守あり）"}
                  </p>
                  <p className="mt-2 text-xs text-slate-300">
                    {plan.minimumTermLabel}
                  </p>
                </div>

                {plan.paymentOptions ? (
                  <div className="mt-4 space-y-2">
                    {plan.paymentOptions.map((option) => (
                      <div
                        key={option.name}
                        className="rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-xs leading-6 text-orange-950"
                      >
                        <p className="font-black">{option.name}</p>
                        <p>
                          初期 {formatYen(option.initialPrice)}・月額{" "}
                          {formatYen(option.monthlyPrice)}
                          <br />
                          24か月総額 {formatYen(option.total24Months)}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}

                <ul className="mt-6 space-y-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm leading-6 text-slate-700"
                    >
                      <Check
                        className="mt-1 h-4 w-4 shrink-0 text-orange-700"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <h3 className="text-sm font-black">別途費用</h3>
                  <p className="mt-2 text-xs leading-6 text-slate-600">
                    {plan.extraCosts.join("、")}
                  </p>
                  <div className="mt-4 space-y-2">
                    {plan.notices.map((notice) => (
                      <p
                        key={notice}
                        className="rounded-xl bg-slate-50 px-4 py-3 text-xs leading-5 text-slate-600"
                      >
                        {notice}
                      </p>
                    ))}
                  </div>
                  <Link
                    href={plan.ctaHref}
                    className={`mt-5 flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-center font-bold ${
                      plan.recommended
                        ? "bg-orange-700 text-white"
                        : "border-2 border-slate-800"
                    }`}
                  >
                    {plan.ctaLabel}
                  </Link>
                  {plan.stripeCheckoutEnabled ? (
                    <Link
                      href={`/subscription/checkout?plan=${plan.slug}`}
                      className="mt-3 flex min-h-11 items-center justify-center text-sm font-bold text-sky-900 underline underline-offset-4"
                    >
                      Stripeテスト申込を確認
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="min-w-[760px] w-full border-collapse bg-white text-left text-sm">
            <caption className="sr-only">ホームページ制作3プランの比較</caption>
            <thead>
              <tr className="border-b border-slate-200">
                <th scope="col" className="p-4">
                  比較項目
                </th>
                <th scope="col" className="bg-orange-50 p-4">
                  Webスタート
                </th>
                <th scope="col" className="p-4">
                  Webサポート
                </th>
                <th scope="col" className="p-4">
                  買い切り
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} className="border-b border-slate-100 last:border-0">
                  <th scope="row" className="p-4 font-bold">
                    {row.label}
                  </th>
                  <td className="bg-orange-50/60 p-4 font-bold">{row.webStart}</td>
                  <td className="p-4">{row.webSupport}</td>
                  <td className="p-4">{row.buyout}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 rounded-3xl border border-sky-200 bg-sky-50 p-7 sm:p-10">
          <h2 className="text-2xl font-black">買い切り向けの任意保守</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            買い切りプランの公開後は、技術保守または軽微な更新付き保守を必要に応じて追加できます。
          </p>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {buyoutMaintenancePlans.map((plan) => (
              <article key={plan.name} className="rounded-2xl bg-white p-6">
                <h3 className="text-lg font-black">{plan.name}</h3>
                <p className="mt-2 text-2xl font-black text-sky-900">
                  月額{formatYen(plan.monthlyPrice)}（税込）
                </p>
                <ul className="mt-5 space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-sky-800" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs leading-6 text-slate-500">{plan.note}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-3xl bg-slate-50 p-7 sm:p-10">
          <h2 className="text-2xl font-black">全プラン共通の別途費用</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {additionalCosts.map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white px-4 py-3 text-sm font-bold"
              >
                {item}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-600">
            独自ドメインや外部サービスの利用料は、原則としてお客様のご負担となります。追加料金が発生する作業は事前にお見積もりします。
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 sm:p-10">
          <h2 className="text-2xl font-black">追加作業の料金目安</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            大幅な修正、ページ追加、新機能の実装、更新回数を超える作業は、内容を確認のうえ別途お見積もりします。
          </p>
          <div className="mt-6 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200">
            {additionalWorkPricing.map((item) => (
              <div
                key={item.name}
                className="grid gap-2 p-5 text-sm sm:grid-cols-[1fr_auto] sm:items-center"
              >
                <div>
                  <p className="font-black">{item.name}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.note}</p>
                </div>
                <p className="font-black text-orange-800">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/contact?plan=undecided"
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-slate-950 px-7 py-3 font-bold text-white"
          >
            自分に合うプランを相談する
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </SubpageShell>
  );
}
