"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { FaqItem } from "@/data/business-model";

export function OfficialFaq({ items }: { items: readonly FaqItem[] }) {
  const [openItems, setOpenItems] = useState<Set<number>>(() => new Set());

  const toggleItem = (index: number) => {
    setOpenItems((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className="mt-8 space-y-3">
      {items.map((item, index) => {
        const open = openItems.has(index);
        const answerId = `official-faq-answer-${index}`;

        return (
          <section key={item.question} className="rounded-2xl border border-slate-200 bg-white">
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={answerId}
                onClick={() => toggleItem(index)}
                className="flex min-h-14 w-full items-start justify-between gap-4 rounded-2xl p-5 text-left font-bold hover:bg-cream-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-deep"
              >
                <span>Q. {item.question}</span>
                <ChevronDown
                  className={`mt-0.5 h-5 w-5 shrink-0 transition ${open ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div id={answerId} hidden={!open}>
              <p className="mx-5 border-t border-slate-100 pb-5 pt-4 text-sm leading-7 text-slate-600">
                A. {item.answer}
              </p>
            </div>
          </section>
        );
      })}
    </div>
  );
}
