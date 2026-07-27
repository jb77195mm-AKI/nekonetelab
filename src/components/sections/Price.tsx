import { SectionTitle } from "@/components/common/SectionTitle";
import type { PriceItem } from "@/types/site";

export function Price({ priceItems, note }: { priceItems: PriceItem[]; note?: string }) {
  return (
    <section id="price" className="bg-[var(--surface)] py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionTitle eyebrow="PRICE" title="料金メニュー" description="表示価格はすべて税込です。" />
        <div className="mt-10 divide-y divide-[var(--muted)]/15 rounded-2xl border border-[var(--muted)]/15 bg-[var(--background)]">
          {priceItems.map((item) => (
            <div key={item.name} className="flex items-center justify-between gap-4 px-6 py-4">
              <div>
                <p className="font-bold text-[var(--text)]">{item.name}</p>
                {item.description ? (
                  <p className="mt-1 text-xs text-[var(--muted)]">{item.description}</p>
                ) : null}
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-[var(--primary)]">{item.price}</p>
                {item.duration ? <p className="text-xs text-[var(--muted)]">{item.duration}</p> : null}
              </div>
            </div>
          ))}
        </div>
        {note ? <p className="mt-4 text-center text-xs text-[var(--muted)]">{note}</p> : null}
      </div>
    </section>
  );
}
