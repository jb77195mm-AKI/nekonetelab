export function MapEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[var(--muted)]/20 sm:aspect-video">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full"
      />
    </div>
  );
}
