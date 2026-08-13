/**
 * ラクラク船長の掲載画像。
 *
 * next.config.ts で `images.unoptimized: true` を指定しているため、Next.js 側の
 * 自動最適化は働かない。配置前に WebP 化とリサイズを済ませ、元の PNG は
 * `public/images/rakuraku-sencho/original/` に残す運用とする。
 *
 * 画像が未配置の間は `ready: false` にしておくと、各セクションが枠だけを描画し、
 * レイアウトを崩さずに確認できる。画像を配置したら `ready: true` に変更する。
 */

export const rakurakuImagesReady = true;

export const rakurakuImageDir = "/images/rakuraku-sencho";

export interface RakurakuImageAsset {
  src: string;
  /** aspect-ratio で領域を確保して CLS を防ぐ */
  aspectRatio: string;
}

export const rakurakuImages = {
  /** 猫キャラクター単体。FAQ・CTA・吹き出し等で使う */
  mascot: {
    src: `${rakurakuImageDir}/mascot.webp`,
    aspectRatio: "1 / 1",
  },
  /** ファーストビュー。船長＋猫＋釣り船＋港 */
  hero: {
    src: `${rakurakuImageDir}/hero.webp`,
    aspectRatio: "16 / 9",
  },
  /** 予約管理・スケジュール管理 */
  reservation: {
    src: `${rakurakuImageDir}/reservation.webp`,
    aspectRatio: "16 / 9",
  },
  /** 時化・悪天候時の欠航一斉連絡 */
  cancellation: {
    src: `${rakurakuImageDir}/cancellation.webp`,
    aspectRatio: "16 / 9",
  },
  /** 外国人との多言語コミュニケーション */
  multilingual: {
    src: `${rakurakuImageDir}/multilingual.webp`,
    aspectRatio: "16 / 9",
  },
} as const satisfies Record<string, RakurakuImageAsset>;

export type RakurakuImageKey = keyof typeof rakurakuImages;
