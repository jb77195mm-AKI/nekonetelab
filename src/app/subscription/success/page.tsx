import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { SubpageShell } from "@/components/official/SubpageShell";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "テスト申込完了",
  robots: { index: false, follow: false },
};

export default async function SubscriptionSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string | string[] }>;
}) {
  const params = await searchParams;
  const sessionId = Array.isArray(params.session_id)
    ? params.session_id[0]
    : params.session_id;

  return (
    <SubpageShell
      eyebrow="TEST COMPLETE"
      title="テスト申込の完了画面です"
      description="これはStripeテストモードまたはモックモードによる確認画面です。実際の請求・正式な契約成立・メール送信は行われていません。"
    >
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-7 sm:p-10">
          <CheckCircle2
            className="h-12 w-12 text-emerald-700"
            aria-hidden="true"
          />
          <h2 className="mt-5 text-2xl font-medium">確認用フローが完了しました</h2>
          <p className="mt-4 text-sm leading-7 text-emerald-950">
            正式運用では、Stripe Webhookによる署名検証と決済状態の確認をもって申込状態を更新します。URLのsession_idだけで契約成立とは判断しません。
          </p>
          <p className="mt-4 rounded-xl bg-white px-4 py-3 text-xs leading-6 text-muted">
            セッション識別子：{sessionId ? "受信済み（画面上では非表示）" : "未受信"}
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <Link
            href="/"
            className="flex min-h-12 items-center justify-center rounded-sm bg-ink px-6 py-3 font-semibold text-white"
          >
            ホームへ戻る
          </Link>
          <Link
            href="/contact?plan=web-start"
            className="flex min-h-12 items-center justify-center rounded-full border-2 border-slate-800 px-6 py-3 font-semibold"
          >
            無料相談デモへ
          </Link>
          {siteConfig.customerPortalUrl ? (
            <a
              href={siteConfig.customerPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center rounded-full border border-sky-200 bg-sky-50 px-6 py-3 font-semibold text-sky-950 sm:col-span-2"
            >
              Stripeテスト用Customer Portalを確認
            </a>
          ) : (
            <p className="rounded-xl bg-cream-light px-4 py-3 text-center text-sm text-muted sm:col-span-2">
              Customer PortalはテストURL設定後に表示します。
            </p>
          )}
        </div>
      </div>
    </SubpageShell>
  );
}
