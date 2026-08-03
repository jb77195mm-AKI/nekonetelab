import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck2,
  Check,
  ListOrdered,
  MessageSquareReply,
  type LucideIcon,
} from "lucide-react";
import type { SolutionData, SolutionIconName } from "@/data/solutions";

const iconMap: Record<SolutionIconName, LucideIcon> = {
  queue: ListOrdered,
  review: MessageSquareReply,
  shift: CalendarCheck2,
};

const buttonLabels: Record<SolutionData["slug"], string> = {
  queue: "順番待ちシステムを見る",
  "review-reply": "口コミ返信ツールを見る",
  "skill-shift": "AIシフトを見る",
};

export function SolutionIcon({
  name,
  className = "h-6 w-6",
}: {
  name: SolutionIconName;
  className?: string;
}) {
  const Icon = iconMap[name];
  return <Icon className={className} aria-hidden="true" />;
}

export function SolutionCard({
  solution,
  id,
}: {
  solution: SolutionData;
  id?: string;
}) {
  return (
    <article
      id={id}
      className="scroll-mt-24 flex h-full flex-col rounded-2xl border border-line-soft bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl sm:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-900">
          <SolutionIcon name={solution.icon} />
        </span>
        <span className="rounded-full bg-cat-cream px-3 py-1 text-xs font-semibold text-navy">
          画面デモ
        </span>
      </div>
      <p className="mt-5 text-xs font-semibold tracking-[0.08em] text-sky-900">{solution.label}</p>
      <h3 className="mt-2 text-xl font-medium text-ink">{solution.name}</h3>
      <p className="mt-4 text-sm leading-7 text-muted">{solution.shortDescription}</p>
      <ul className="mt-5 space-y-2">
        {solution.cardFeatures.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm leading-6 text-muted">
            <Check className="mt-1 h-4 w-4 shrink-0 text-sky-800" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
      {solution.slug === "queue" ? (
        <p className="mt-4 rounded-xl bg-sky-50 px-3 py-2 text-xs font-semibold leading-5 text-sky-950">
          最大20言語対応を開発・検証中
          <span className="block font-medium text-sky-900">10・15・20言語プランあり</span>
        </p>
      ) : null}
      <p className="mt-6 rounded-2xl bg-cream-light px-4 py-3 text-sm font-medium leading-6 text-ink">
        <span className="block text-xs font-semibold text-muted">参考価格</span>
        {solution.priceLine}
      </p>
      <div className="mt-auto pt-6">
        <Link
          href={`/solutions/${solution.slug}`}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-sm bg-ink px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-sky-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
        >
          {buttonLabels[solution.slug]}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
