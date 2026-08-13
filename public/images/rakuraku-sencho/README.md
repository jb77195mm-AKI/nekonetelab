# ラクラク船長の画像

このディレクトリに配置するファイル。

| ファイル | 用途 |
|---|---|
| `mascot.webp` | 猫キャラクター単体。FAQ・CTA・吹き出し・ポイント説明で使用 |
| `hero.webp` | ファーストビュー。船長＋猫＋釣り船＋港 |
| `reservation.webp` | 予約管理・スケジュール管理の説明 |
| `cancellation.webp` | 時化・悪天候時の欠航一斉連絡の説明 |
| `multilingual.webp` | 外国人との多言語コミュニケーションの説明 |

元の PNG は `original/` に残す。

## 差し替え手順

1. 元画像（PNG）を `original/` へ置く
2. `node scripts/optimize-rakuraku-images.mjs` を実行して WebP を生成する
3. `src/config/rakuraku-images.ts` の `rakurakuImagesReady` を `true` にする

`next.config.ts` で `images.unoptimized: true` を指定しているため、Next.js 側の自動最適化は働かない。
配信サイズはこの手順で確定させる。
