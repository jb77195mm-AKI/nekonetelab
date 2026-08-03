"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionTitle } from "@/components/common/SectionTitle";
import type { FaqItem } from "@/types/site";

export function FAQ({ faq }: { faq: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionTitle eyebrow="FAQ" title="よくあるご質問" />
      <div className="mt-10 divide-y divide-[var(--muted)]/15 rounded-2xl border border-[var(--muted)]/15">
        {faq.map((item, index) => {
          const open = openIndex === index;
          return (
            <div key={item.question}>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={`faq-answer-${index}`}
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm font-semibold text-[var(--text)] sm:text-base">
                  Q. {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[var(--primary)] transition-transform motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              {open ? (
                <div id={`faq-answer-${index}`} className="px-5 pb-5 text-sm leading-relaxed text-[var(--muted)]">
                  A. {item.answer}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
