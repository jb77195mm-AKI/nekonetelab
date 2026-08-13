import Image from "next/image";
import { Cat } from "@/components/brand/Cat";
import { rakurakuImages, rakurakuImagesReady } from "@/config/rakuraku-images";
import type { CatImageKey } from "@/config/images";

interface RakurakuMascotProps {
  /** 実寸。表示サイズは className で制御する */
  size: number;
  className?: string;
  /** 装飾なら省略。意味を持つ場合のみ渡す */
  alt?: string;
  /** mascot.webp が未配置のときに使う既存ブランド猫の姿 */
  fallbackVariant?: CatImageKey;
  priority?: boolean;
}

/**
 * 船長の相棒として登場する猫キャラクター。
 *
 * `mascot.webp` が未配置の間は、同じ猫をモデルにした既存のブランド猫イラスト
 * （`public/images/cat/`）を使う。docs/brand-cat.md 参照。
 */
export function RakurakuMascot({
  size,
  className,
  alt,
  fallbackVariant = "waving",
  priority,
}: RakurakuMascotProps) {
  if (!rakurakuImagesReady) {
    return (
      <Cat
        variant={fallbackVariant}
        size={size}
        alt={alt}
        className={className}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={rakurakuImages.mascot.src}
      width={size}
      height={size}
      alt={alt ?? ""}
      aria-hidden={alt ? undefined : true}
      unoptimized
      priority={priority}
      className={className}
    />
  );
}
