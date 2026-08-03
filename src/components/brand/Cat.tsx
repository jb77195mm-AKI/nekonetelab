import Image from "next/image";
import { catImages, type CatImageKey } from "@/config/images";

interface CatProps {
  variant: CatImageKey;
  /** next/image に渡す実寸。表示サイズは className で制御する */
  size: number;
  className?: string;
  /** 装飾なら省略。意味を持つ場合のみ渡す */
  alt?: string;
  priority?: boolean;
}

/** ブランド猫のイラストを表示する。 */
export function Cat({ variant, size, className, alt, priority }: CatProps) {
  return (
    <Image
      src={catImages[variant]}
      width={size}
      height={size}
      alt={alt ?? ""}
      aria-hidden={alt ? undefined : true}
      priority={priority}
      className={className}
    />
  );
}

/**
 * ロゴなど小さい場所で使う顔だけの表示。
 * 座り姿の画像から頭部（元画像の左31%・上8%を起点とする約35%四方）を切り出す。
 */
export function CatFace({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`relative block overflow-hidden rounded-full bg-cream-light ${className ?? ""}`}
    >
      <Image
        src={catImages.sitting}
        width={512}
        height={512}
        alt=""
        className="absolute -left-[89%] -top-[22%] h-auto w-[286%] max-w-none"
      />
    </span>
  );
}
