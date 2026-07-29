import Image from "next/image";
import { cn } from "@/lib/utils";

export function PlaceholderImage({
  src,
  alt,
  className,
  sizes,
  priority,
  fill = true,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
}) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        unoptimized
        fill
        priority={priority}
        sizes={sizes ?? "100vw"}
        className={cn("object-cover", className)}
      />
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      unoptimized
      width={800}
      height={600}
      priority={priority}
      className={cn("h-auto w-full object-cover", className)}
    />
  );
}
