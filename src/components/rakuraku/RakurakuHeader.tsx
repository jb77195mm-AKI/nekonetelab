"use client";

import Link from "next/link";
import { Menu, X as CloseIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { rakurakuCta, rakurakuNavigation } from "@/data/rakuraku-sencho";

/**
 * ラクラク船長のヘッダー。
 * 40〜70代のスマートフォン利用を想定し、CTA は常に表示したままにする。
 */
export function RakurakuHeader() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
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
      <header className="sticky top-0 z-[60] border-b border-sea-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <Link
            href="/rakuraku-sencho"
            onClick={closeMenu}
            className="flex min-w-0 flex-col justify-center rounded-sm py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sea-blue"
          >
            <span className="text-lg font-bold tracking-tight text-sea-navy sm:text-xl">
              ラクラク船長
            </span>
            <span className="truncate text-xs text-sea-body">
              運営：猫の手デジタルラボ
            </span>
          </Link>

          <nav
            aria-label="ラクラク船長のナビゲーション"
            className="hidden items-center gap-5 text-[0.9375rem] font-semibold text-sea-navy lg:flex"
          >
            {rakurakuNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm transition hover:text-sea-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sea-blue"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              href={rakurakuCta.primaryHref}
              onClick={closeMenu}
              className="inline-flex min-h-11 items-center rounded-full bg-sea-gold px-4 py-2.5 text-sm font-bold text-sea-navy transition hover:bg-sea-gold/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea-navy sm:px-5"
            >
              無料モニター
            </Link>

            <button
              ref={menuButtonRef}
              type="button"
              aria-label={open ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={open}
              aria-controls="rakuraku-mobile-menu"
              onClick={() => setOpen((current) => !current)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-sea-line bg-white text-sea-navy transition hover:border-sea-blue hover:text-sea-blue focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea-blue lg:hidden"
            >
              {open ? (
                <CloseIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <>
          <button
            type="button"
            tabIndex={-1}
            aria-label="メニューを閉じる"
            onClick={closeMenu}
            className="fixed inset-0 top-16 z-40 cursor-default bg-sea-navy/40 lg:hidden"
          />
          <nav
            id="rakuraku-mobile-menu"
            aria-label="モバイルナビゲーション"
            className="fixed inset-x-4 top-20 z-50 max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-2xl border border-sea-line bg-white p-3 shadow-lg sm:left-auto sm:w-80 lg:hidden"
          >
            {rakurakuNavigation.map((item, index) => (
              <Link
                key={item.href}
                ref={index === 0 ? firstMenuLinkRef : undefined}
                href={item.href}
                onClick={closeMenu}
                className="flex min-h-12 items-center rounded-xl px-4 py-3 text-base font-semibold text-sea-navy hover:bg-sea-blue-soft focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-sea-blue"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={rakurakuCta.primaryHref}
              onClick={closeMenu}
              className="mt-2 flex min-h-12 items-center justify-center rounded-xl bg-sea-gold px-4 py-3 text-center text-base font-bold text-sea-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea-navy"
            >
              {rakurakuCta.primaryLabel}
            </Link>
            <Link
              href="/"
              onClick={closeMenu}
              className="mt-1 flex min-h-11 items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-sea-body hover:bg-sea-blue-soft"
            >
              猫の手デジタルラボ（運営会社）
            </Link>
          </nav>
        </>
      ) : null}
    </>
  );
}
