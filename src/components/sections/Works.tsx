import { SectionTitle } from "@/components/common/SectionTitle";
import { PlaceholderImage } from "@/components/common/PlaceholderImage";
import type { WorkItem } from "@/types/site";

export function Works({ works }: { works: WorkItem[] }) {
  return (
    <section id="works" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionTitle eyebrow="WORKS" title="施工事例" description="これまでに手がけた工事の一例をご紹介します。" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((work) => (
          <div key={work.title} className="overflow-hidden rounded-2xl border border-[var(--muted)]/15">
            <div className="relative aspect-[4/3]">
              <PlaceholderImage src={work.image} alt="" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
              {work.tag ? (
                <span className="absolute left-3 top-3 rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-bold text-white">
                  {work.tag}
                </span>
              ) : null}
            </div>
            <div className="p-5">
              <h3 className="text-base font-bold text-[var(--text)]">{work.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
