/**
 * ラクラク船長の画像を WebP へ変換する。
 *
 * next.config.ts で `images.unoptimized: true` を指定しているため、Next.js の
 * 自動最適化は働かない。スマートフォンへ巨大画像をそのまま配信しないよう、
 * 配置前にこのスクリプトで長辺を制限した WebP を生成する。
 *
 *   node scripts/optimize-rakuraku-images.mjs
 *
 * 入力: public/images/rakuraku-sencho/original/<name>.png
 * 出力: public/images/rakuraku-sencho/<name>.webp
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const projectRoot = process.cwd();
const outputDir = path.join(projectRoot, "public", "images", "rakuraku-sencho");
const inputDir = path.join(outputDir, "original");

/** 長辺の上限。ヒーローだけ大きめ、説明用は控えめにする */
const maxWidths = {
  hero: 1200,
  mascot: 512,
  reservation: 900,
  cancellation: 900,
  multilingual: 900,
};

if (!fs.existsSync(inputDir)) {
  console.error(`元画像のディレクトリがありません: ${inputDir}`);
  console.error("PNG を original/ へ置いてから実行してください。");
  process.exit(1);
}

const sources = fs
  .readdirSync(inputDir)
  .filter((file) => /\.(png|jpe?g|webp)$/i.test(file));

if (sources.length === 0) {
  console.error(`変換対象の画像が見つかりません: ${inputDir}`);
  process.exit(1);
}

let converted = 0;

for (const file of sources) {
  const name = path.parse(file).name;
  const maxWidth = maxWidths[name];

  if (!maxWidth) {
    console.warn(`スキップ（想定外のファイル名）: ${file}`);
    continue;
  }

  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, `${name}.webp`);
  const metadata = await sharp(inputPath).metadata();
  const targetWidth = Math.min(metadata.width ?? maxWidth, maxWidth);

  await sharp(inputPath)
    .resize({ width: targetWidth, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(outputPath);

  const { size } = fs.statSync(outputPath);
  console.log(
    `${file} -> ${name}.webp  ${targetWidth}px  ${(size / 1024).toFixed(0)}KB`,
  );
  converted += 1;
}

if (converted === 0) {
  console.error("変換できた画像がありませんでした。");
  process.exit(1);
}

console.log(
  `\n完了: ${converted}件。src/config/rakuraku-images.ts の rakurakuImagesReady を true にしてください。`,
);
