"use client";

import Link from "next/link";
import { Camera, Menu, X as CloseIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CatMark } from "@/components/brand/BrandCat";
import { officialNavigation } from "@/data/official";

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
  return (
    <span
      aria-hidden="true"
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cat-beige bg-white shadow-sm"
    >
      <CatMark className="h-8 w-8" />
    </span>
  );
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
      <header className="sticky top-0 z-[60] border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex min-w-0 items-center gap-2 font-black tracking-tight text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-deep"
          >
            <BrandPawMark />
            <span className="truncate text-[0.8125rem] sm:text-base">{businessName}</span>
          </Link>

          <nav aria-label="メインナビゲーション" className="hidden items-center gap-4 text-sm font-medium xl:flex">
            {officialNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm transition hover:text-navy-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy-deep"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-1 xl:flex">
          <a
            href={instagramUrl}
            aria-label="Instagramを新しいタブで開く"
            className="rounded-full p-2 text-slate-700 transition hover:bg-cream-light hover:text-navy-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-deep"
            {...externalLinkProps}
          >
            <Camera className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={xUrl}
            aria-label="Xを新しいタブで開く"
            className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-black text-slate-700 transition hover:bg-cream-light hover:text-navy-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-deep"
            {...externalLinkProps}
          >
            X
          </a>
          <a
            href={lineUrl}
            aria-label="公式LINEを新しいタブで開く"
            className="flex min-h-11 items-center justify-center rounded-full px-3 text-xs font-black text-slate-700 transition hover:bg-cream-light hover:text-navy-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-deep"
            {...externalLinkProps}
          >
            LINE
          </a>
            <Link
              href="/contact"
              className="ml-1 inline-flex min-h-11 items-center rounded-full bg-navy-deep px-4 py-2.5 text-sm font-bold text-white transition hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-deep"
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
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 transition hover:border-navy hover:text-navy-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-deep xl:hidden"
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
            className="fixed inset-0 top-16 z-40 cursor-default bg-navy-deep/40 xl:hidden"
          />
          <nav
            id="official-mobile-menu"
            aria-label="モバイルナビゲーション"
            className="fixed inset-x-4 top-20 z-50 max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-3 text-sm shadow-2xl sm:left-auto sm:w-80 xl:hidden"
          >
            {officialNavigation.map((item, index) => (
              <Link
                key={item.href}
                ref={index === 0 ? firstMenuLinkRef : undefined}
                href={item.href}
                onClick={closeMenu}
                className="flex min-h-11 items-center rounded-xl px-4 py-3 font-medium hover:bg-cream-light focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-navy-deep"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={lineUrl}
              aria-label="公式LINEを新しいタブで開く"
              onClick={closeMenu}
              className="flex min-h-11 items-center rounded-xl px-4 py-3 font-medium hover:bg-cream-light focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-navy-deep"
              {...externalLinkProps}
            >
              公式LINE
            </a>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-2 flex min-h-12 items-center justify-center rounded-xl bg-navy px-4 py-3 text-center font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-deep"
            >
              無料相談
            </Link>
          </nav>
        </>
      ) : null}
    </>
  );
}
