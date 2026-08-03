import type { Metadata } from "next";
import Link from "next/link";
import { OfficialHeader } from "@/components/official/OfficialHeader";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function SolutionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="top" className="min-h-screen bg-white text-ink">
      <OfficialHeader
        businessName={siteConfig.businessName}
        instagramUrl={siteConfig.instagramUrl}
        xUrl={siteConfig.xUrl}
        lineUrl={siteConfig.lineUrl}
      />
      {children}
      <footer className="border-t border-slate-800 bg-ink py-10 text-slate-300">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Link href="/" className="font-medium text-white">
              {siteConfig.businessName}
            </Link>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
              掲載している業務システムは、構成と操作性を確認するための開発中デモです。
            </p>
          </div>
          <nav aria-label="業務システムページのフッターナビゲーション" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link href="/solutions" className="inline-flex min-h-11 items-center underline-offset-4 hover:underline">
              業務システム一覧
            </Link>
            <Link href="/#contact" className="inline-flex min-h-11 items-center underline-offset-4 hover:underline">
              お問い合わせ
            </Link>
            <Link href="/privacy" className="inline-flex min-h-11 items-center underline-offset-4 hover:underline">
              プライバシーポリシー
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
