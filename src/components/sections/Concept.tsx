import { PlaceholderImage } from "@/components/common/PlaceholderImage";

export function Concept({
  concept,
}: {
  concept: { title: string; body: string; image: string };
}) {
  return (
    <section id="concept" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid items-center gap-10 sm:grid-cols-2 sm:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <PlaceholderImage src={concept.image} alt="" sizes="(min-width: 640px) 50vw, 100vw" />
        </div>
        <div>
          <p className="mb-2 text-xs font-bold tracking-[0.2em] text-[var(--primary)]">CONCEPT</p>
          <h2 className="text-2xl font-bold text-[var(--text)] sm:text-3xl">{concept.title}</h2>
          <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            {concept.body}
          </p>
        </div>
      </div>
    </section>
  );
}
