/**
 * ブランド猫の生成画像パス管理。
 * ChatGPT で生成した画像（docs/image-generation-prompts.md 参照）を
 * public/images/generated/ に保存し、null をパス文字列に差し替えると
 * 内蔵SVGイラスト（components/brand/BrandCat.tsx）から置換される。
 */
export const imageAssets = {
  heroCat: null as string | null, // "/images/generated/hero-cat-working.webp"
  ctaCat: null as string | null, // "/images/generated/cat-cta-wave.webp"
  notFoundCat: null as string | null, // "/images/generated/cat-404.webp"
  footerCat: null as string | null, // "/images/generated/cat-footer-sitting.webp"
  ogImage: null as string | null, // "/images/generated/og-brand-cat.webp"
} as const;
