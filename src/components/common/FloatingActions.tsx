import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import type { ContactConfig } from "@/types/site";

export function FloatingActions({
  contact,
  mobileCtaLabel,
  mobileCtaHref,
}: {
  contact: ContactConfig;
  mobileCtaLabel: string;
  mobileCtaHref: string;
}) {
  const actions = [
    { href: `tel:${contact.phone}`, label: "電話する", Icon: Phone },
    contact.lineUrl ? { href: contact.lineUrl, label: "LINE相談", Icon: MessageCircle } : null,
    contact.reservationUrl
      ? { href: contact.reservationUrl, label: contact.reservationLabel ?? "Web予約", Icon: CalendarCheck }
      : null,
  ].filter(Boolean) as { href: string; label: string; Icon: typeof Phone }[];

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--muted)]/20 bg-[var(--background)]/95 backdrop-blur sm:hidden">
      <div className="grid grid-flow-col auto-cols-fr">
        {actions.slice(0, 2).map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-0.5 border-r border-[var(--muted)]/20 py-2.5 text-[11px] font-semibold text-[var(--text)] last:border-r-0"
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
            {label}
          </a>
        ))}
        <a
          href={mobileCtaHref}
          className="flex flex-col items-center justify-center gap-0.5 bg-[var(--primary)] py-2.5 text-[11px] font-semibold text-white"
        >
          {mobileCtaLabel}
        </a>
      </div>
    </div>
  );
}
