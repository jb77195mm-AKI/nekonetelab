import { SectionTitle } from "@/components/common/SectionTitle";
import type { FeatureItem } from "@/types/site";
import * as Icons from "lucide-react";

export function Features({
  title,
  eyebrow,
  description,
  features,
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  features: FeatureItem[];
}) {
  return (
    <section id="features" className="bg-[var(--surface)] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const IconComp = feature.icon
              ? (Icons[feature.icon as keyof typeof Icons] as Icons.LucideIcon | undefined)
              : undefined;
            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-[var(--muted)]/15 bg-[var(--background)] p-6"
              >
                {IconComp ? (
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
                    <IconComp className="h-5 w-5" aria-hidden="true" />
                  </div>
                ) : null}
                <h3 className="text-base font-bold text-[var(--text)]">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
