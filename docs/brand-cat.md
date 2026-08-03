# ブランド猫イラスト

運営者の愛猫をモデルにした、サイト共通のブランドキャラクター。

## キャラクターの特徴（生成時に必ず守る）

- 全身は白〜クリーム色の短毛
- 耳・顔まわり・鼻筋・しっぽに淡いアプリコット（薄いオレンジ）のポイントカラー
- 大きくて丸い青灰色の瞳
- 小さなピンクの鼻
- きょとんとした優しい表情
- ほっそりして上品な体つき

## 画風

現代的で洗練された日本のアニメ風イラスト。線は細くクリーン。色数は少なくフラット寄りで、
やわらかい陰影のみ。子どもっぽいポップさや過剰な装飾は避け、企業サイトになじむミニマルさ。

## 現在の画像

| ファイル | ポーズ | 使用箇所 |
|---|---|---|
| `cat-working.webp` | ノートパソコンで作業 | トップのヒーロー（プランカードの上）、多言語ページのヒーロー |
| `cat-sitting.webp` | しっぽを巻いて座る | ヘッダーロゴ（顔だけ切り出し）、選ばれる理由、フッター |
| `cat-waving.webp` | 前足を上げて手を振る | FAQ、問い合わせ |
| `cat-tilting.webp` | 首をかしげる | お悩みセクション、404ページ |

すべて `public/images/cat/` に 512×512 の透過 WebP（各 26〜36KB）で置いている。

## 追加・差し替えの手順

1. ChatGPT で既存の会話（「ブランドキャラクター猫イラスト」）を開き、
   「同じ猫で、同じ画風・同じ色味・同じ線の太さのまま、ポーズだけ変えてください。〈ポーズ〉。
   背景は完全な透過。文字やロゴや透かしは入れないこと。正方形。」と依頼する。
   新しい会話で始める場合は、上の「キャラクターの特徴」と「画風」を全文貼り付ける。
2. 生成された PNG（1024×1024・約1.4MB）をダウンロードする。
3. 開発サーバーを起動し、ブラウザのコンソールで 512px の WebP に変換する。
   `next.config.ts` が `images.unoptimized: true` のため、元ファイルがそのまま配信される。
   1MB 超の PNG をそのまま置かないこと。

   ```js
   const name = 'cat-xxx';
   const bitmap = await createImageBitmap(await (await fetch('/images/cat/' + name + '.png')).blob());
   const canvas = document.createElement('canvas');
   canvas.width = canvas.height = 512;
   canvas.getContext('2d').drawImage(bitmap, 0, 0, 512, 512);
   const blob = await new Promise((r) => canvas.toBlob(r, 'image/webp', 0.9));
   const a = document.createElement('a');
   a.href = URL.createObjectURL(blob);
   a.download = name + '.webp';
   a.click();
   ```

4. WebP を `public/images/cat/` に置き、`src/config/images.ts` に登録する。
5. 表示は `<Cat variant="..." size={...} className="..." />`。
   ロゴなど顔だけ見せたい場所は `<CatFace className="h-10 w-10" />` を使う
   （座り姿の画像から頭部を切り出している）。

## 配置の方針

装飾として「さりげなく散りばめる」。すべてのカードに置いたり、肉球を多用したりしない。
本文は通常の企業日本語で書き、猫語は使わない。
