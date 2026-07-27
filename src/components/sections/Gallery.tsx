import { SectionTitle } from "@/components/common/SectionTitle";
import { PlaceholderImage } from "@/components/common/PlaceholderImage";
import type { GalleryItem } from "@/types/site";

export function Gallery({ gallery }: { gallery: GalleryItem[] }) {
  return (
    <section id="gallery" className="bg-[var(--surface)] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow="GALLERY" title="フォトギャラリー" />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {gallery.map((item, index) => (
            <figure key={index} className="relative aspect-square overflow-hidden rounded-xl">
              <PlaceholderImage
                src={item.image}
                alt={item.caption ?? ""}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
