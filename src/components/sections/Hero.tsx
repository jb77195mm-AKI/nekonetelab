import { PlaceholderImage } from "@/components/common/PlaceholderImage";
import { CTA } from "@/components/common/CTA";
import type { HeroConfig } from "@/types/site";

export function Hero({ hero }: { hero: HeroConfig }) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden sm:min-h-[85vh]">
      <div className="absolute inset-0">
        <PlaceholderImage src={hero.image} alt="" priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-14 pt-24 sm:px-6 sm:pb-20">
        <h1 className="max-w-2xl text-3xl font-semibold leading-snug text-white sm:text-5xl">
          {hero.title}
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/90 sm:text-lg">
          {hero.subtitle}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CTA href={hero.primaryButtonHref}>{hero.primaryButtonText}</CTA>
          {hero.secondaryButtonText && hero.secondaryButtonHref ? (
            <CTA href={hero.secondaryButtonHref} variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-black">
              {hero.secondaryButtonText}
            </CTA>
          ) : null}
        </div>
      </div>
    </section>
  );
}
