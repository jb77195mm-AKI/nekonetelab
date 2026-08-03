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
  title: "Webスタートプランの申込内容確認",
  description: "Webスタートプランの料金、契約期間、更新および解約条件の確認画面です。",
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
        description="Webサポート、買い切り、単体DXツール、業種別DXパックは、相談と見積もりから進めます。"
      >
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
          <Link
            href="/pricing"
            className="inline-flex min-h-12 items-center rounded-sm bg-ink px-6 py-3 font-semibold text-white"
          >
            料金プランへ戻る
          </Link>
        </div>
      </SubpageShell>
    );
  }

  return (
    <SubpageShell
      eyebrow={siteConfig.demoMode ? "TEST CHECKOUT" : "APPLICATION REVIEW"}
      title="Webスタートプランの申込内容確認"
      description={
        siteConfig.demoMode
          ? "申込内容と契約条件の表示、同意、Stripe Checkoutへの遷移を確認するデモです。正式な申込受付・請求は行いません。"
          : "料金、契約期間、自動更新および解約条件をご確認ください。現在オンライン申込を受け付けていない場合は、無料相談フォームからご案内します。"
      }
    >
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="rounded-2xl border border-line-soft bg-white p-7 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-medium tracking-[0.14em] text-navy">
                SELECTED PLAN
              </p>
              <h2 className="mt-2 text-2xl font-medium">{plan.name}</h2>
            </div>
            {siteConfig.demoMode ? (
              <span className="rounded-full bg-amber-300 px-3 py-1 text-xs font-medium">
                テスト
              </span>
            ) : null}
          </div>

          <dl className="mt-7 divide-y divide-line-soft rounded-2xl border border-line-soft">
            <PriceRow label="初期制作費" value={`${formatYen(plan.initialPrice)}（税込）`} />
            <PriceRow label="月額" value={`${formatYen(plan.monthlyPrice)}（税込）`} />
            <PriceRow label="初回決済額" value={`${formatYen(plan.monthlyPrice)}（税込）予定`} />
            <PriceRow label="翌月以降" value={`${formatYen(plan.monthlyPrice)}（税込）／月`} />
            <PriceRow label="最低利用期間" value={plan.minimumTermLabel} />
            <PriceRow label="24か月支払総額" value="235,200円（税込）" />
            <PriceRow label="自動更新" value="24か月終了後、1か月単位" />
            <PriceRow label="解約申出期限" value="次回決済日の10日前まで" />
            <PriceRow label="24か月経過後の解約金" value="なし" />
            <PriceRow
              label="24か月未満の中途解約金"
              value="残契約月数×9,800円（税込）"
            />
            <PriceRow label="独自ドメイン" value="原則別途" />
            <PriceRow label="外部有料サービス" value="別途" />
          </dl>

          <h3 className="mt-7 font-medium">含まれる主な内容</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {plan.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm leading-6 text-muted"
              >
                <Check
                  className="mt-1 h-4 w-4 shrink-0 text-navy"
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
                className="rounded-xl bg-cream-light px-4 py-3 text-xs leading-6 text-muted"
              >
                {notice}
              </p>
            ))}
          </div>
        </section>

        <section className="h-fit rounded-2xl border border-cat-beige bg-cream-light p-7">
          <ShieldCheck
            className="h-9 w-9 text-navy"
            aria-hidden="true"
          />
          <h2 className="mt-4 text-xl font-medium">契約条件の確認</h2>
          <p className="mt-3 text-sm leading-7 text-muted">
            サービスは契約条件の合意、必要情報の受領、初回決済の確認後に開始します。未払利用料金、購入済みのドメイン・サーバー費用、依頼により発生した外部費用がある場合は、中途解約金とは別にお支払いが必要です。所有権・移管条件は個別契約を優先します。
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold">
            <Link href="/terms" className="text-navy underline underline-offset-4">
              利用規約
            </Link>
            <Link href="/privacy" className="text-navy underline underline-offset-4">
              プライバシーポリシー
            </Link>
            <Link href="/commerce" className="text-navy underline underline-offset-4">
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
      <dt className="font-semibold text-muted">{label}</dt>
      <dd className="font-medium text-ink">{value}</dd>
    </div>
  );
}
