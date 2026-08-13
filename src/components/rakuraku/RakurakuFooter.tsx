import Link from "next/link";
import { RakurakuMascot } from "./RakurakuMascot";

const footerLinks = [
  { label: "会社概要", href: "/#about" },
  { label: "お問い合わせ", href: "/contact" },
  { label: "プライバシーポリシー", href: "/privacy" },
  { label: "利用規約", href: "/terms" },
  { label: "特定商取引法表記", href: "/commerce" },
] as const;

export function RakurakuFooter() {
  return (
    <footer className="border-t border-sea-navy-deep bg-sea-navy pb-24 pt-12 text-white sm:pb-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <RakurakuMascot
              size={128}
              fallbackVariant="sitting"
              className="h-12 w-auto"
            />
            <div>
              <p className="text-xl font-bold">ラクラク船長</p>
              <p className="mt-1 text-sm text-white/80">
                運営：
                <Link
                  href="/"
                  className="inline-block min-h-6 py-0.5 underline underline-offset-4 hover:text-sea-gold-soft"
                >
                  猫の手デジタルラボ
                </Link>
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-lg text-sm leading-7 text-white/80">
            釣り船・遊漁船の船長向けに、予約管理・時化の欠航連絡・外国人対応をお手伝いするサービスです。
          </p>
        </div>

        <div className="text-sm">
          <nav
            aria-label="フッターナビゲーション"
            className="flex max-w-xl flex-wrap gap-x-5 gap-y-1"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="min-h-11 py-3 text-white/80 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="mt-5 text-xs text-white/60">
            © {new Date().getFullYear()} 猫の手デジタルラボ
          </p>
        </div>
      </div>
    </footer>
  );
}
