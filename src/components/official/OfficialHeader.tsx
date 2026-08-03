"use client";

import Link from "next/link";
import { Camera, Globe2, Menu, X as CloseIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CatFace } from "@/components/brand/Cat";
import { officialNavigation } from "@/data/official";
import { localeLabels, localePath, localeSegments } from "@/i18n/locales";

const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

interface OfficialHeaderProps {
  businessName: string;
  instagramUrl: string;
  xUrl: string;
  lineUrl: string;
}

function BrandPawMark() {
  return <CatFace className="h-10 w-10 shrink-0" />;
}

export function OfficialHeader({
  businessName,
  instagramUrl,
  xUrl,
  lineUrl,
}: OfficialHeaderProps) {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1280px)");
    const closeAtDesktopWidth = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    desktopQuery.addEventListener("change", closeAtDesktopWidth);
    return () => desktopQuery.removeEventListener("change", closeAtDesktopWidth);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      menuButtonRef.current?.focus();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeWithEscape);
    firstMenuLinkRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeWithEscape);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-[60] border-b border-line-soft bg-white/95 backdrop-blur">
        <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex min-w-0 items-center gap-2 font-medium tracking-tight text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy"
          >
            <BrandPawMark />
            <span className="truncate text-[0.8125rem] sm:text-base">{businessName}</span>
          </Link>

          <nav aria-label="メインナビゲーション" className="hidden items-center gap-4 text-sm font-medium xl:flex">
            {officialNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm transition hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-1 xl:flex">
          <a
            href={instagramUrl}
            aria-label="Instagramを新しいタブで開く"
            className="rounded-full p-2 text-muted transition hover:bg-cream-light hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            {...externalLinkProps}
          >
            <Camera className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={xUrl}
            aria-label="Xを新しいタブで開く"
            className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-medium text-muted transition hover:bg-cream-light hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            {...externalLinkProps}
          >
            X
          </a>
          <a
            href={lineUrl}
            aria-label="公式LINEを新しいタブで開く"
            className="flex min-h-11 items-center justify-center rounded-full px-3 text-xs font-medium text-muted transition hover:bg-cream-light hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            {...externalLinkProps}
          >
            LINE
          </a>
            <details className="group relative">
              <summary
                aria-label="言語を選択"
                className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full text-muted transition hover:bg-cream-light hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy [&::-webkit-details-marker]:hidden"
              >
                <Globe2 className="h-5 w-5" aria-hidden="true" />
              </summary>
              <div className="absolute right-0 top-12 z-50 w-40 rounded-2xl border border-line-soft bg-white p-2 shadow-xl">
                <Link
                  href="/"
                  className="flex min-h-10 items-center rounded-xl px-3 py-2 text-sm font-semibold text-navy hover:bg-cream-light"
                >
                  日本語
                </Link>
                {localeSegments.map((segment) => (
                  <Link
                    key={segment}
                    href={localePath(segment)}
                    className="flex min-h-10 items-center rounded-xl px-3 py-2 text-sm font-medium hover:bg-cream-light"
                  >
                    {localeLabels[segment]}
                  </Link>
                ))}
              </div>
            </details>
            <Link
              href="/contact"
              className="ml-1 inline-flex min-h-11 items-center rounded-sm bg-ink px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              無料相談
            </Link>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            aria-controls="official-mobile-menu"
            onClick={() => setOpen((current) => !current)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line-soft bg-white text-ink transition hover:border-navy hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy xl:hidden"
          >
            {open ? (
              <CloseIcon className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {open ? (
        <>
          <button
            type="button"
            tabIndex={-1}
            aria-label="メニューを閉じる"
            onClick={closeMenu}
            className="fixed inset-0 top-16 z-40 cursor-default bg-ink/40 xl:hidden"
          />
          <nav
            id="official-mobile-menu"
            aria-label="モバイルナビゲーション"
            className="fixed inset-x-4 top-20 z-50 max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-2xl border border-line-soft bg-white p-3 text-sm shadow-sm sm:left-auto sm:w-80 xl:hidden"
          >
            {officialNavigation.map((item, index) => (
              <Link
                key={item.href}
                ref={index === 0 ? firstMenuLinkRef : undefined}
                href={item.href}
                onClick={closeMenu}
                className="flex min-h-11 items-center rounded-xl px-4 py-3 font-medium hover:bg-cream-light focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-navy"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={lineUrl}
              aria-label="公式LINEを新しいタブで開く"
              onClick={closeMenu}
              className="flex min-h-11 items-center rounded-xl px-4 py-3 font-medium hover:bg-cream-light focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-navy"
              {...externalLinkProps}
            >
              公式LINE
            </a>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-2 flex min-h-12 items-center justify-center rounded-xl bg-navy px-4 py-3 text-center font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
            >
              無料相談
            </Link>
            <div className="mt-3 border-t border-line-soft pt-3">
              <p className="flex items-center gap-1.5 px-4 text-xs font-semibold text-muted">
                <Globe2 className="h-3.5 w-3.5" aria-hidden="true" />
                Language
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5 px-3 pb-1">
                {localeSegments.map((segment) => (
                  <Link
                    key={segment}
                    href={localePath(segment)}
                    onClick={closeMenu}
                    className="inline-flex min-h-9 items-center rounded-full border border-line-soft px-3 py-1.5 text-xs font-semibold text-muted hover:border-navy hover:text-navy"
                  >
                    {localeLabels[segment]}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </>
      ) : null}
    </>
  );
}
