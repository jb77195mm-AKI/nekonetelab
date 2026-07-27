"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import type { ContactConfig } from "@/types/site";

export interface NavItem {
  label: string;
  href: string;
}

export function Header({
  logoText,
  navItems,
  contact,
  basePath,
}: {
  logoText: string;
  navItems: NavItem[];
  contact: ContactConfig;
  basePath: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--muted)]/15 bg-[var(--background)]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href={basePath} className="text-lg font-bold tracking-wide text-[var(--text)]">
          {logoText}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--text)] transition hover:text-[var(--primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${contact.phone}`}
            className="flex items-center gap-1.5 rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-bold text-white transition hover:opacity-90"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {contact.phoneDisplay}
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--text)] md:hidden"
          aria-expanded={open}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <nav
          className="border-t border-[var(--muted)]/15 bg-[var(--background)] px-4 py-4 md:hidden"
          aria-label="モバイルナビゲーション"
        >
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium text-[var(--text)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
