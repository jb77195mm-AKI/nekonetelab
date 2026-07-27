import Link from "next/link";
import { SocialLinks } from "./SocialLinks";
import type { SiteData } from "@/types/site";

export function Footer({ site }: { site: SiteData }) {
  return (
    <footer className="border-t border-[var(--muted)]/15 bg-[var(--surface)] text-[var(--text)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="text-lg font-bold">{site.logoText}</p>
            <p className="mt-2 max-w-sm text-sm text-[var(--muted)]">{site.tagline}</p>
            <SocialLinks contact={site.contact} className="mt-4 flex items-center gap-3" />
          </div>
          <div className="text-sm text-[var(--muted)]">
            <p>
              〒{site.address.postalCode} {site.address.prefecture}
              {site.address.city}
              {site.address.street}
            </p>
            <p className="mt-1">TEL: {site.contact.phoneDisplay}</p>
            <p className="mt-1">定休日: {site.holidays}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--muted)]/15 pt-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.siteName}（デモサイト）</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="underline underline-offset-2">
              プライバシーポリシー
            </Link>
            <Link href="/" className="underline underline-offset-2">
              制作事例一覧
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
