import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  external?: boolean;
}

export function CTA({ href, children, variant = "primary", className, external }: CTAProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const styles = {
    primary: "bg-[var(--primary)] text-[var(--onPrimary,white)] hover:opacity-90",
    secondary: "bg-[var(--accent)] text-[var(--onAccent,white)] hover:opacity-90",
    outline:
      "border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--onPrimary,white)]",
  } as const;

  const classes = cn(base, styles[variant], className);

  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
