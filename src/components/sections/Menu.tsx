import { SectionTitle } from "@/components/common/SectionTitle";
import { PlaceholderImage } from "@/components/common/PlaceholderImage";
import type { MenuItem } from "@/types/site";

export function Menu({ menuItems }: { menuItems: MenuItem[] }) {
  return (
    <section id="menu" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionTitle eyebrow="MENU" title="人気メニュー" description="厳選した素材で仕上げる自慢の一品です。" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {menuItems.map((item) => (
          <div key={item.name} className="overflow-hidden rounded-2xl border border-[var(--muted)]/15">
            {item.image ? (
              <div className="relative aspect-[4/3]">
                <PlaceholderImage src={item.image} alt="" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                {item.tag ? (
                  <span className="absolute left-3 top-3 rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold text-white">
                    {item.tag}
                  </span>
                ) : null}
              </div>
            ) : null}
            <div className="p-5">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold text-[var(--text)]">{item.name}</h3>
                <span className="whitespace-nowrap text-sm font-semibold text-[var(--primary)]">{item.price}</span>
              </div>
              {item.description ? (
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.description}</p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
