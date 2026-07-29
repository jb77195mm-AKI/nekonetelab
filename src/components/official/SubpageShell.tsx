import Link from "next/link";
import { OfficialHeader } from "@/components/official/OfficialHeader";
import { siteConfig } from "@/config/site";
import { businessModel } from "@/data/business-model";

export function SubpageShell({
  eyebrow,
  title,
  description,
  children,
  showIntro = true,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
  showIntro?: boolean;
}) {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <div className="bg-amber-300 text-slate-950">
        <div className="mx-auto flex max-w-6xl items-start gap-3 px-4 py-3 text-xs font-bold leading-5 sm:items-center sm:px-6">
          <span className="rounded bg-slate-950 px-2 py-0.5 text-[0.65rem] tracking-[0.14em] text-white">
            DEMO
          </span>
          <p>{businessModel.demoNotice}</p>
        </div>
      </div>
      <OfficialHeader
        businessName={siteConfig.businessName}
        instagramUrl={siteConfig.instagramUrl}
        xUrl={siteConfig.xUrl}
        lineUrl={siteConfig.lineUrl}
      />
      <main>
        {showIntro ? (
          <header className="border-b border-slate-200 bg-[linear-gradient(135deg,#fff7ed_0%,#ffffff_55%,#f0f9ff_100%)]">
            <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
              <p className="text-xs font-black tracking-[0.18em] text-orange-800">
                {eyebrow}
              </p>
              <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight sm:text-5xl">
                {title}
              </h1>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                {description}
              </p>
            </div>
          </header>
        ) : null}
        {children}
      </main>
      <footer className="border-t border-slate-800 bg-slate-950 py-10 text-slate-300">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Link href="/" className="font-black text-white">
              {siteConfig.businessName}
            </Link>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
              {siteConfig.description}
            </p>
          </div>
          <nav
            aria-label="フッターナビゲーション"
            className="flex flex-wrap gap-x-5 gap-y-2 text-sm"
          >
            <Link href="/privacy" className="min-h-11 py-3 hover:text-white">
              プライバシー
            </Link>
            <Link href="/terms" className="min-h-11 py-3 hover:text-white">
              利用規約
            </Link>
            <Link href="/commerce" className="min-h-11 py-3 hover:text-white">
              特定商取引法表記
            </Link>
            <Link
              href="/contact"
              className="min-h-11 py-3 font-bold text-orange-300 hover:text-orange-200"
            >
              無料相談
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
