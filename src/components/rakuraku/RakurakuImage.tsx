import Image from "next/image";
import {
  rakurakuImages,
  rakurakuImagesReady,
  type RakurakuImageKey,
} from "@/config/rakuraku-images";
import { cn } from "@/lib/utils";

interface RakurakuImageProps {
  name: RakurakuImageKey;
  alt: string;
  /** ファーストビューの画像だけ true。それ以外は lazy load */
  priority?: boolean;
  /** レスポンシブ配信サイズ。既定は本文幅想定 */
  sizes?: string;
  className?: string;
  /** 枠の角丸などを外側で調整する */
  frameClassName?: string;
}

/**
 * ラクラク船長の掲載画像。
 *
 * 画像が未配置（`rakurakuImagesReady === false`）の間は、同じ aspect-ratio の
 * 枠だけを描画する。これによりレイアウト確認を先に進められ、画像を入れても
 * 位置がずれない（CLS が発生しない）。
 */
export function RakurakuImage({
  name,
  alt,
  priority,
  sizes,
  className,
  frameClassName,
}: RakurakuImageProps) {
  const asset = rakurakuImages[name];

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-3xl bg-sea-blue-soft",
        frameClassName,
      )}
      style={{ aspectRatio: asset.aspectRatio }}
    >
      {rakurakuImagesReady ? (
        <Image
          src={asset.src}
          alt={alt}
          fill
          unoptimized
          priority={priority}
          sizes={sizes ?? "(min-width: 1024px) 480px, 100vw"}
          className={cn("object-cover", className)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <p className="text-sm font-semibold leading-6 text-sea-navy/60">
            {alt}
          </p>
        </div>
      )}
    </div>
  );
}
