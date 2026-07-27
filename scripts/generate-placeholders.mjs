// 仮画像(SVG)を public/images/<slug>/ に生成するスクリプト。
// 実際の写真に差し替える際は、同じファイル名で画像を上書きするだけでOK。
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public", "images");

const sites = {
};

function svgTemplate({ from, to, text }, label, sublabel) {
  return `<svg width="1600" height="1200" viewBox="0 0 1600 1200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${from}" />
      <stop offset="100%" stop-color="${to}" />
    </linearGradient>
    <pattern id="dots" width="48" height="48" patternUnits="userSpaceOnUse">
      <circle cx="4" cy="4" r="2" fill="${text}" fill-opacity="0.12" />
    </pattern>
  </defs>
  <rect width="1600" height="1200" fill="url(#g)" />
  <rect width="1600" height="1200" fill="url(#dots)" />
  <text x="50%" y="46%" text-anchor="middle" font-family="'Hiragino Sans', 'Noto Sans JP', sans-serif" font-size="56" font-weight="700" fill="${text}">${label}</text>
  <text x="50%" y="56%" text-anchor="middle" font-family="'Hiragino Sans', 'Noto Sans JP', sans-serif" font-size="28" fill="${text}" fill-opacity="0.85">${sublabel}</text>
</svg>`;
}

for (const [slug, config] of Object.entries(sites)) {
  const dir = path.join(publicDir, slug);
  mkdirSync(dir, { recursive: true });
  for (const file of config.files) {
    const svg = svgTemplate(config.theme, config.label, `SAMPLE IMAGE / ${file}`);
    writeFileSync(path.join(dir, `${file}.svg`), svg, "utf-8");
  }
  console.log(`generated ${config.files.length} placeholder images for ${slug}`);
}
