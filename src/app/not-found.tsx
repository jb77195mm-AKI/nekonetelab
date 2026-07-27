import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "ページが見つかりません",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-orange-50 via-white to-sky-50 px-4 py-16 text-slate-950">
      <div className="w-full max-w-xl rounded-3xl border border-orange-100 bg-white p-8 text-center shadow-xl shadow-orange-100/50 sm:p-12">
        <p className="text-sm font-black tracking-[0.24em] text-orange-800">404</p>
        <h1 className="mt-4 text-3xl font-black sm:text-4xl">
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
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-orange-700 px-7 py-3 font-bold text-white transition hover:bg-orange-800"
          >
            トップページへ戻る
          </Link>
          <Link
            href="/#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-slate-800 px-7 py-3 font-bold transition hover:bg-slate-950 hover:text-white"
          >
            お問い合わせ
          </Link>
        </div>
      </div>
    </main>
  );
}
