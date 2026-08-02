import type { Metadata } from "next";
import Link from "next/link";
import { SubpageShell } from "@/components/official/SubpageShell";

export const metadata: Metadata = {
  title: "テスト申込をキャンセルしました",
  robots: { index: false, follow: false },
};

export default function SubscriptionCancelPage() {
  return (
    <SubpageShell
      eyebrow="TEST CANCELLED"
      title="テスト申込をキャンセルしました"
      description="実際の請求・申込受付・メール送信は行われていません。料金と条件を再確認してから、いつでもテストをやり直せます。"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-4 py-14 sm:flex-row sm:px-6 sm:py-20">
        <Link
          href="/pricing"
          className="flex min-h-12 items-center justify-center rounded-full bg-navy-deep px-6 py-3 font-bold text-white"
        >
          料金を確認する
        </Link>
        <Link
          href="/contact?plan=web-start"
          className="flex min-h-12 items-center justify-center rounded-full border-2 border-slate-800 px-6 py-3 font-bold"
        >
          無料相談デモへ
        </Link>
      </div>
    </SubpageShell>
  );
}
