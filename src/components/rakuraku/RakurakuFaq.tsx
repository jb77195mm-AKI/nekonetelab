"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface RakurakuFaqItem {
  question: string;
  answer: string;
}

/**
 * ラクラク船長のよくある質問。
 *
 * 共通の OfficialFaq とは配色と文字サイズが異なる（40〜70代の閲覧を想定して
 * 本文を大きくしている）ため、既存コンポーネントは変更せず個別に用意する。
 */
export function RakurakuFaq({ items }: { items: readonly RakurakuFaqItem[] }) {
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
        const answerId = `rakuraku-faq-answer-${index}`;

        return (
          <section
            key={item.question}
            className="rounded-2xl border border-sea-line bg-white"
          >
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={answerId}
                onClick={() => toggleItem(index)}
                className="flex min-h-16 w-full items-start justify-between gap-4 rounded-2xl p-5 text-left text-base font-bold text-sea-navy hover:bg-sea-blue-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea-blue sm:text-lg"
              >
                <span>Q. {item.question}</span>
                <ChevronDown
                  className={`mt-0.5 h-6 w-6 shrink-0 text-sea-blue transition ${
                    open ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div id={answerId} hidden={!open}>
              <p className="mx-5 border-t border-sea-line pb-5 pt-4 text-base leading-8 text-sea-body">
                A. {item.answer}
              </p>
            </div>
          </section>
        );
      })}
    </div>
  );
}
