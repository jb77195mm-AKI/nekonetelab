import type { Metadata } from "next";
import Link from "next/link";
import { Check, ShieldCheck } from "lucide-react";
import { CheckoutAgreementForm } from "@/components/official/CheckoutAgreementForm";
import { SubpageShell } from "@/components/official/SubpageShell";
import { siteConfig } from "@/config/site";
import {
  formatYen,
  getHomepagePlan,
} from "@/data/business-model";

export const metadata: Metadata = {
  title: "月額プランのテスト申込確認",
  description: "Stripeテストモードまたはモックモードの申込確認画面です。",
  robots: { index: false, follow: false },
};

export default async function SubscriptionCheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string | string[] }>;
}) {
  const params = await searchParams;
  const planId = Array.isArray(params.plan) ? params.plan[0] : params.plan;
  const plan = getHomepagePlan(planId);
  const mode =
    siteConfig.checkoutMode === "stripe_test" ? "stripe_test" : "mock";

  if (!plan || !plan.stripeCheckoutEnabled) {
    return (
      <SubpageShell
        eyebrow="TEST CHECKOUT"
        title="このプランはテスト決済の対象外です"
        description="買い切り・バランス・継続支援は、相談と見積もりから進めます。"
      >
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
          <Link
            href="/pricing"
            className="inline-flex min-h-12 items-center rounded-full bg-slate-950 px-6 py-3 font-bold text-white"
          >
            料金プランへ戻る
          </Link>
        </div>
      </SubpageShell>
    );
  }

  return (
    <SubpageShell
      eyebrow="TEST CHECKOUT"
      title="月額プランのテスト申込確認"
      description="申込内容と契約条件の表示、同意、Stripe Checkoutへの遷移を確認するデモです。正式な申込受付・請求は行いません。"
    >
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black tracking-[0.14em] text-orange-800">
                SELECTED PLAN
              </p>
              <h2 className="mt-2 text-2xl font-black">{plan.name}</h2>
            </div>
            <span className="rounded-full bg-amber-300 px-3 py-1 text-xs font-black">
              テスト
            </span>
          </div>

          <dl className="mt-7 divide-y divide-slate-200 rounded-2xl border border-slate-200">
            <PriceRow label="初期制作費" value={`${formatYen(plan.initialPrice)}（税込）`} />
            <PriceRow label="月額" value={`${formatYen(plan.monthlyPrice)}（税込）`} />
            <PriceRow label="初回決済額" value={`${formatYen(plan.monthlyPrice)}（税込）予定`} />
            <PriceRow label="翌月以降" value={`${formatYen(plan.monthlyPrice)}（税込）／月`} />
            <PriceRow label="最低利用期間" value={plan.minimumTermLabel} />
            <PriceRow label="独自ドメイン" value="原則別途" />
            <PriceRow label="外部有料サービス" value="別途" />
          </dl>

          <h3 className="mt-7 font-black">含まれる主な内容</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
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

          <div className="mt-7 space-y-3">
            {plan.notices.map((notice) => (
              <p
                key={notice}
                className="rounded-xl bg-slate-50 px-4 py-3 text-xs leading-6 text-slate-600"
              >
                {notice}
              </p>
            ))}
          </div>
        </section>

        <section className="h-fit rounded-3xl border border-orange-200 bg-orange-50 p-7">
          <ShieldCheck
            className="h-9 w-9 text-orange-800"
            aria-hidden="true"
          />
          <h2 className="mt-4 text-xl font-black">契約条件の確認</h2>
          <p className="mt-3 text-sm leading-7 text-slate-700">
            サービスは正式な契約条件の合意、必要情報の受領、初回決済の確認後に開始する想定です。途中解約・精算・所有権・移管条件は契約書を優先します。
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold">
            <Link href="/terms" className="text-orange-900 underline underline-offset-4">
              利用規約
            </Link>
            <Link href="/privacy" className="text-orange-900 underline underline-offset-4">
              プライバシーポリシー
            </Link>
            <Link href="/commerce" className="text-orange-900 underline underline-offset-4">
              特定商取引法表記
            </Link>
          </div>
          <div className="mt-6">
            <CheckoutAgreementForm planId={plan.slug} mode={mode} />
          </div>
        </section>
      </div>
    </SubpageShell>
  );
}

function PriceRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 px-4 py-3 text-sm sm:grid-cols-[8rem_1fr] sm:gap-4">
      <dt className="font-bold text-slate-600">{label}</dt>
      <dd className="font-black text-slate-950">{value}</dd>
    </div>
  );
}
