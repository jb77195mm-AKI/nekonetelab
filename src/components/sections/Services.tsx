import { SectionTitle } from "@/components/common/SectionTitle";
import type { ServiceItem } from "@/types/site";

export function Services({
  title,
  eyebrow,
  description,
  services,
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  services: ServiceItem[];
}) {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <SectionTitle eyebrow={eyebrow ?? "SERVICE"} title={title} description={description} />
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="flex gap-5 rounded-2xl border border-[var(--muted)]/15 bg-[var(--surface)] p-6"
          >
            <span className="text-3xl font-bold text-[var(--primary)]/30">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-base font-bold text-[var(--text)]">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
