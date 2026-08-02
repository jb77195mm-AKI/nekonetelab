import type { Metadata } from "next";
import Link from "next/link";
import { CatTilt } from "@/components/brand/BrandCat";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "ページが見つかりません",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-cream-light via-white to-sky-50 px-4 py-16 text-slate-950">
      <div className="w-full max-w-xl rounded-3xl border border-cat-cream bg-white p-8 text-center shadow-xl shadow-cat-cream/50 sm:p-12">
        <CatTilt className="mx-auto h-36 w-auto" label="首をかしげて迷っている猫のイラスト" />
        <p className="mt-4 text-sm font-black tracking-[0.24em] text-navy-deep">404</p>
        <h1 className="mt-4 font-serif text-3xl font-black sm:text-4xl">
          ページが見つかりません
        </h1>
        <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
          URLが変更されたか、ページが削除された可能性があります。
          <br />
          {siteConfig.businessName}のトップページからお探しください。
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-navy px-7 py-3 font-bold text-white transition hover:bg-navy-deep"
          >
            トップページへ戻る
          </Link>
          <Link
            href="/#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-slate-800 px-7 py-3 font-bold transition hover:bg-navy-deep hover:text-white"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </main>
  );
}
