import { SectionTitle } from "@/components/common/SectionTitle";
import type { FlowStep } from "@/types/site";

export function Flow({ flow, title }: { flow: FlowStep[]; title?: string }) {
  return (
    <section id="flow" className="bg-[var(--surface)] py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionTitle eyebrow="FLOW" title={title ?? "ご利用の流れ"} />
        <ol className="mt-12 space-y-6">
          {flow.map((step) => (
            <li key={step.step} className="flex gap-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-semibold text-white">
                {step.step}
              </span>
              <div>
                <h3 className="text-base font-semibold text-[var(--text)]">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
