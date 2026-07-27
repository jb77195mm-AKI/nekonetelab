import type { SVGProps } from "react";
import type { ContactConfig } from "@/types/site";

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4 3h3.5l4 5.4L16 3h4l-6.4 8.1L20.4 21H17l-4.4-5.9L8 21H4l6.8-8.6L4 3z" />
    </svg>
  );
}

export function SocialLinks({
  contact,
  className,
}: {
  contact: ContactConfig;
  className?: string;
}) {
  const links = [
    contact.instagramUrl
      ? { href: contact.instagramUrl, label: "Instagram", Icon: InstagramIcon }
      : null,
    contact.xUrl ? { href: contact.xUrl, label: "X", Icon: XIcon } : null,
  ].filter(Boolean) as { href: string; label: string; Icon: typeof InstagramIcon }[];

  if (links.length === 0) return null;

  return (
    <div className={className ?? "flex items-center gap-3"}>
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-current/20 transition hover:opacity-70"
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
