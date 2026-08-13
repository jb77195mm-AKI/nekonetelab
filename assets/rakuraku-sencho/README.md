# ラクラク船長の元画像

このディレクトリは**元画像（PNG）の保管場所**で、`public/` の外にあるため本番へ配信されない。
配信されるのは `public/images/rakuraku-sencho/*.webp` だけ。

| ファイル | 用途 | 元サイズ |
|---|---|---|
| `hero.png` | ファーストビュー。船長＋猫＋釣り船＋港 | 1672×941（16:9） |
| `mascot.png` | 猫キャラクター単体（背景透過） | 1254×1254（1:1） |
| `reservation.png` | 予約管理・スケジュール管理の説明 | 1672×941（16:9） |
| `cancellation.png` | 時化・悪天候時の欠航一斉連絡の説明 | 1672×941（16:9） |
| `multilingual.png` | 外国人との多言語コミュニケーションの説明 | 1672×941（16:9） |

## 差し替え手順

1. 新しい PNG をこのディレクトリへ同じファイル名で置く
2. 変換する

   ```bash
   node scripts/optimize-rakuraku-images.mjs
   ```

3. 縦横比が変わった場合は `src/config/rakuraku-images.ts` の `aspectRatio` を更新する

`next.config.ts` で `images.unoptimized: true` を指定しているため、Next.js 側の自動最適化と
srcset 生成は働かない。配信サイズはこの手順で確定させる。

## 採用しなかった画像

`rakuraku_sencho_thumbnail.png`（SNS用の縦長バナー）は使用していない。
画像内に「予約・連絡・多言語対応を自動化」という文言が焼き込まれており、
自動送信などの未実装機能を断定する表現になるため。
