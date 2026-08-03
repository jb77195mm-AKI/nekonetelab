export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-[var(--primary)]">{eyebrow}</p>
      ) : null}
      <h2 className="text-2xl font-semibold text-[var(--text)] sm:text-3xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
