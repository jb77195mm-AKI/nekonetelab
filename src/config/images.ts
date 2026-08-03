/**
 * ブランド猫のイラスト画像。
 * 運営者の愛猫（白〜クリームの毛、耳と顔のアプリコット色のポイント、青灰色の丸い瞳、
 * 小さなピンクの鼻）をモデルに、ChatGPT で同一キャラクターとして生成したもの。
 * 追加・差し替えの手順は docs/brand-cat.md を参照。
 */
export const catImages = {
  /** ノートパソコンで作業する猫 */
  working: "/images/cat/cat-working.webp",
  /** しっぽを巻いてきちんと座る猫 */
  sitting: "/images/cat/cat-sitting.webp",
  /** 前足を上げて手を振る猫 */
  waving: "/images/cat/cat-waving.webp",
  /** 首をかしげて不思議がる猫 */
  tilting: "/images/cat/cat-tilting.webp",
} as const;

export type CatImageKey = keyof typeof catImages;
