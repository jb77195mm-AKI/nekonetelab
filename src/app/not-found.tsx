import type { Metadata } from "next";
import Link from "next/link";
import { Cat } from "@/components/brand/Cat";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "ページが見つかりません",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-cream-light via-white to-sky-50 px-4 py-16 text-ink">
      <div className="w-full max-w-xl rounded-2xl border border-cat-cream bg-white p-8 text-center shadow-xl shadow-cat-cream/50 sm:p-12">
        <Cat variant="tilting" size={288} className="mx-auto h-36 w-auto" alt="首をかしげて迷っている猫のイラスト" />
        <p className="mt-4 text-sm font-medium tracking-[0.24em] text-navy">404</p>
        <h1 className="mt-4 text-3xl font-medium sm:text-4xl">
          ページが見つかりません
        </h1>
        <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
          URLが変更されたか、ページが削除された可能性があります。
          <br />
          {siteConfig.businessName}のトップページからお探しください。
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-sm bg-ink px-7 py-3 font-semibold text-white transition hover:bg-ink-soft"
          >
            トップページへ戻る
          </Link>
          <Link
            href="/#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-slate-800 px-7 py-3 font-semibold transition hover:bg-ink-soft hover:text-white"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </main>
  );
}
