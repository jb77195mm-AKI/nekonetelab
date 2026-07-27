# 猫の手デジタルラボ 公式サイト

「猫の手デジタルラボ」の公式サイトと、小規模店舗・中小企業向けホームページ制作の業種別デモを収録した Next.js プロジェクトです。

- `/` は公式サイト
- `/cafe` など6業種は営業提案用の架空デモ
- 店舗・企業・人物・写真・文章はすべて架空
- 電話番号、所在地、公開URLは環境変数で一元管理し、未設定値は画面にダミー表示しない
- 公式LINEは確定済みURLを一元設定し、環境変数での上書きにも対応

## 技術構成

- Next.js 16（App Router / Turbopack）
- React 19
- Node.js 24
- TypeScript
- Tailwind CSS v4
- lucide-react
- ESLint

## ルート

| URL | 内容 | 検索エンジン |
|---|---|---|
| `/` | 猫の手デジタルラボ公式サイト | 環境変数で制御 |
| `/privacy` | プライバシーポリシー | 環境変数で制御 |
| `/cafe` | カフェのデモ | 常に noindex |
| `/salon` | 美容室のデモ | 常に noindex |
| `/beauty` | ネイル・エステサロンのデモ | 常に noindex |
| `/clinic` | 整骨院・整体院のデモ | 常に noindex |
| `/builder` | 工務店・リフォーム会社のデモ | 常に noindex |
| `/corporate` | 中小企業サイトのデモ | 常に noindex |
| `/api/contact` | 問い合わせ受付・転送API | - |
| `/robots.txt` | クロール設定 | - |
| `/sitemap.xml` | 公式ページのみ掲載 | - |
| 未定義URL | 独自404ページ | 常に noindex |

6業種のデモページでは `DemoNotice` を表示し、各サイトデータの `noindex: true` を維持しています。デモページを公式サイトの sitemap に含めない設計です。

## セットアップ

```bash
npm install
cp .env.example .env.local
npm run dev
```

Windows PowerShell でスクリプト実行ポリシーにより `npm.ps1` が拒否される場合は、`npm.cmd` を使用してください。

```powershell
npm.cmd install
npm.cmd run dev
```

通常は `http://localhost:3000` で確認できます。このワークスペースのデスクトップランチャーはポート `8410` を使用する場合があります。

## 事業者情報の設定

設定の入口は `src/config/site.ts` と環境変数です。確定済みの事業者名・メール・Instagram・Xはコード側で一元管理し、公開環境ごとに変わる情報や未確定情報は環境変数で管理します。

| 変数 | 必須 | 用途 | 未設定時 |
|---|---:|---|---|
| `NEXT_PUBLIC_SITE_URL` | 公開時 | canonical、OGP、robots、sitemap の基準URL | 架空URLを出さず、canonicalとsitemap項目を生成しない |
| `NEXT_PUBLIC_NOINDEX` | 公開前 | サイト全体のインデックス制御 | 安全のため noindex 扱い |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | 任意 | Google Analytics 4（`G-`から始まる測定ID） | 解析スクリプトを読み込まない |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | 任意 | Search ConsoleのHTMLタグ確認 | 確認用metaタグを生成しない |
| `CONTACT_TO_EMAIL` | 推奨 | 転送データに含める受信先 | `info@nekonotedejitarurabo.com` |
| `CONTACT_FORM_ENDPOINT` | フォーム公開時 | Formspree等のHTTPS POST先 | 実送信せずメール連絡を案内 |
| `BUSINESS_PHONE` | 任意 | 電話番号表示・`tel:`リンク | 電話欄を表示しない |
| `BUSINESS_ADDRESS` | 任意 | 所在地表示・Googleマップ検索リンク | 所在地欄を表示しない |
| `BUSINESS_HOURS` | 任意 | 営業時間 | 営業時間欄を表示しない |
| `BUSINESS_SERVICE_AREA` | 任意 | 対応地域 | 対応地域欄を表示しない |
| `LINE_OFFICIAL_URL` | 任意 | 公式LINEへのリンクを上書き | 既定値 `https://lin.ee/rWvSMpg` を使用 |

空文字や空白だけの任意値は未設定として扱います。本番公開URLはHTTPSだけを採用し、ローカル確認時に限りlocalhostのHTTPを許可します。APIキーや秘密情報はコードへ書かず、`.env.local` またはホスティングサービスの環境変数へ設定してください。

## 問い合わせフォーム

公式フォームの項目は以下です。

- お名前（必須）
- 会社名・屋号（任意）
- メールアドレス（必須）
- 電話番号（任意）
- お問い合わせ種別（必須）
- お問い合わせ内容（必須）
- 個人情報の取り扱いへの同意（必須）

ブラウザ側と `/api/contact` の両方で入力を検証します。二重送信防止、送信中・成功・失敗表示、ハニーポット、送信サイズと文字数の上限、外部転送の10秒タイムアウトを実装しています。

### Formspree等を使う場合

1. 外部フォームサービスでフォームを作成する
2. サービス側の通知先を `info@nekonotedejitarurabo.com` に設定する
3. 発行されたHTTPSエンドポイントを `CONTACT_FORM_ENDPOINT` に設定する
4. `CONTACT_TO_EMAIL=info@nekonotedejitarurabo.com` を設定する
5. 本番相当環境からテスト送信し、受信・返信先・迷惑メール判定を確認する

`CONTACT_TO_EMAIL` は転送ペイロードに受信先情報を含めるための値です。この値だけではメール配信されません。実際の通知先は必ず外部フォームサービス側でも設定してください。

`CONTACT_FORM_ENDPOINT` が未設定ならAPIは `503 not_configured` を返し、画面は成功表示を出さず、固定メールアドレスへの連絡を案内します。デモページのフォームは従来どおり実送信しないデモモードです。

## SEO・公開URL

- 公式サイトの title / description / OGP / Twitter Card / 構造化データを設定済み
- `src/app/og-image/route.tsx` で 1200×630 のOGP画像を生成
- favicon は `src/app/favicon.ico`
- canonical と sitemap は `NEXT_PUBLIC_SITE_URL` が設定されている場合だけ本番URLを使用
- sitemap は公式トップとプライバシーポリシーだけを掲載
- 6業種のデモは各ページで `noindex: true`
- GA4とSearch Console確認タグは環境変数を設定した場合だけ有効化
- 独自404ページと基本セキュリティヘッダーを設定済み

公開前は `NEXT_PUBLIC_NOINDEX=true` のままにしてください。本番URL・フォーム・表示内容を確認した後だけ `false` に変更します。

## 検証コマンド

```bash
npm test
npm run typecheck
npm run lint
npm run build
npm run check
```

本番ビルド後の確認:

```bash
npm run start
```

ローカル表示では最低限、以下を確認します。

- `/` と `/privacy`、6業種デモ、`/robots.txt`、`/sitemap.xml` が200
- PC幅とスマートフォン幅で横スクロールや重なりがない
- ヘッダー、フッター、CTA、SNSリンク、メールリンク、プライバシーリンクが正しい
- 未設定の電話番号・所在地が表示されない
- 公式LINEが `https://lin.ee/rWvSMpg` を新しいタブで開く
- 必須項目、メール形式、同意チェックのエラーが項目ごとに表示される
- 送信中はボタンが無効になる
- 未設定エンドポイント時に成功表示にならずメール連絡へ誘導する
- 有効なテストエンドポイント設定時に成功表示と転送データを確認する
- ブラウザコンソールにエラーがない

本番ビルドを `npm run start` で起動した状態では、次の自動スモークテストも実行できます。

```bash
npm run smoke
```

問い合わせエンドポイント未設定時の503応答まで確認する場合:

```powershell
$env:SMOKE_EXPECT_FORM_UNCONFIGURED="true"
npm.cmd run smoke
```

## Vercelへ公開する場合

1. リポジトリをGitHub等へpushする
2. Vercelでプロジェクトをインポートする
3. モノレポとして扱う場合は Root Directory を `hp-sample-studio` に設定する
4. Framework Preset は `Next.js`、Node.jsは `24.x` を選択する
5. Build Command / Install Command / Output Directory は自動検出を使用する
6. Production環境の環境変数を `.env.example` に従って設定する
7. 最初は `NEXT_PUBLIC_NOINDEX=true` でデプロイする
8. プレビューURLで表示、フォーム、OGP、`robots.txt`、`sitemap.xml` を確認する
9. 独自ドメインを設定し、`NEXT_PUBLIC_SITE_URL` をそのURLへ変更して再デプロイする
10. 公開準備が完了したら `NEXT_PUBLIC_NOINDEX=false` に変更して再デプロイする

`NEXT_PUBLIC_` 変数はビルド時に確定します。値を変えたら必ず再ビルド・再デプロイしてください。

現在のワークスペースルートには他プロジェクトも含まれるため、GitHub公開時は `hp-sample-studio` を専用の非公開リポジトリにする構成を推奨します。詳細は [DEPLOYMENT.md](./DEPLOYMENT.md) を参照してください。

## 公開前チェックリスト

- [ ] `NEXT_PUBLIC_SITE_URL` が実際のHTTPS公開URL
- [ ] `CONTACT_FORM_ENDPOINT` が本番用エンドポイント
- [ ] 外部フォームサービスの通知先が正しい
- [ ] 実際の問い合わせが `info@nekonotedejitarurabo.com` で受信できる
- [ ] 返信先が送信者メールになっている
- [ ] 電話番号・所在地・営業時間・対応地域は確定値だけ入力
- [ ] 公式LINEが `https://lin.ee/rWvSMpg` を新しいタブで開く
- [ ] Instagram・Xが正しい公式アカウントを新しいタブで開く
- [ ] プライバシーポリシーの内容を運用実態と照合
- [ ] 全ルート、レスポンシブ、フォーム、キーボード操作を確認
- [ ] OGP画像とfaviconを確認
- [ ] 公開直前まで `NEXT_PUBLIC_NOINDEX=true`
- [ ] 最終確認後に `NEXT_PUBLIC_NOINDEX=false`

## デモサイトのデータ構造

デモの店舗名、文言、料金、画像パス、テーマは `src/data/<slug>.ts` に集約されています。UIコンポーネントへ業種固有情報を直書きせず、既存の3テンプレートから描画します。

```text
src/
  app/                         公式ページ、デモルート、SEO、API
  components/common/           デモ共通コンポーネント
  components/official/         公式サイト用フォーム
  config/site.ts               公式事業者設定
  data/                        公式文言、料金、デモデータ
  templates/                   デモ用3テンプレート
  types/site.ts                デモサイト型定義
public/images/<slug>/           架空の生成写真（WebP）
```

新しい業種を追加する場合は `npm run create-site -- --name="名称" --type="store" --slug="slug"` を利用できます。`store`、`booking`、`corporate` のいずれかを選び、生成後に必ず架空のデータへ差し替えてください。

## 基本プランの範囲

基本プランはホームページ制作に必要な一般的な表示・問い合わせ導線を対象とします。会員登録、独自の予約管理、決済、EC、多言語、チャットなどは含みません。予約は外部サービスへのリンクで対応し、高度な機能は別途見積もりです。
