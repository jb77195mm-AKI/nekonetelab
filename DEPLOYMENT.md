# GitHub・Vercel本番公開手順

この文書は、`hp-sample-studio` を猫の手デジタルラボ公式サイトとして安全に公開するための手順です。DNS値は固定値を記載せず、Vercelのプロジェクト画面に表示された値を正として扱います。

## 1. 推奨するGitHub構成

現在のワークスペースルートには他プロジェクトも含まれています。意図しないファイルの公開を避けるため、`hp-sample-studio` だけを専用の非公開GitHubリポジトリにする構成を推奨します。

親リポジトリの履歴を保ったまま、このフォルダだけを新しいリポジトリへ送る場合:

```bash
git subtree split --prefix=hp-sample-studio -b hp-sample-studio-release
git push <新しいGitHubリポジトリURL> hp-sample-studio-release:main
```

push前に、次を確認してください。

```bash
git status --short
git ls-files
git check-ignore -v .env.local .next node_modules .vercel _incoming
```

GitHubへ登録するもの:

- `src/`、`public/`、`scripts/`、`tools/`
- `.github/workflows/ci.yml`
- `.env.example`、`.gitignore`、`.nvmrc`
- `package.json`、`package-lock.json`
- Next.js、TypeScript、ESLint、PostCSSの設定
- `README.md`、`DEPLOYMENT.md`

登録しないもの:

- `.env`、`.env.local`、`.env.production`などの実値
- APIキー、パスワード、トークン、外部サービスの秘密鍵
- `node_modules/`、`.next/`、`out/`、`build/`
- `.vercel/`
- `_incoming/`
- ローカルログ、OS生成ファイル

## 2. Vercelプロジェクト設定

GitHub連携で専用リポジトリをインポートします。

| 項目 | 設定 |
|---|---|
| Framework Preset | Next.js |
| Root Directory | 専用リポジトリなら空欄。親リポジトリを使う場合は `hp-sample-studio` |
| Build Command | `npm run build`（Overrideは不要） |
| Output Directory | Next.js既定の `.next`（Overrideは不要） |
| Install Command | `npm ci` |
| Node.js Version | `24.x` |
| Production Branch | GitHubの既定ブランチと必ず一致させる（本番は `master`） |

VercelはNext.jsを自動検出できます。`vercel.json`で既定値を重複指定せず、ダッシュボードのFramework Presetを使用します。

Production Branchが実際の既定ブランチと違うと、pushしてもPreview Deploymentしか作られず本番が更新されません。デプロイ一覧のEnvironment列が `Production` になることで確認できます。

## 3. Vercel環境変数

まずPreviewとProductionへ同じ安全側の設定を登録します。

| 変数 | Production | Preview | 備考 |
|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | 独自ドメイン確定後のHTTPS URL | 本番URLまたは空欄 | 末尾 `/` なし |
| `NEXT_PUBLIC_NOINDEX` | 公開直前まで `true` | `true` | 最終確認後、Productionだけ `false` |
| `CONTACT_TO_EMAIL` | `info@nekonotedejitarurabo.com` | 同左 | 外部サービス側の通知先も設定 |
| `CONTACT_FORM_ENDPOINT` | 本番用HTTPSエンドポイント | テスト用または空欄 | サーバー専用。コードへ記載しない |
| `LINE_OFFICIAL_URL` | `https://lin.ee/rWvSMpg` | 同左 | 省略時も同じ既定値 |
| `BUSINESS_PHONE` | 確定値のみ | 任意 | 未設定なら非表示 |
| `BUSINESS_ADDRESS` | 確定値のみ | 任意 | 未設定なら非表示 |
| `BUSINESS_HOURS` | 確定値のみ | 任意 | 未設定なら非表示 |
| `BUSINESS_SERVICE_AREA` | 確定値のみ | 任意 | 未設定なら非表示 |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | 任意の `G-...` | 通常は空欄 | 設定時のみGA4を読込 |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | 任意 | 空欄 | URLプレフィックス確認用metaタグ |

`NEXT_PUBLIC_` 変数はビルド時にブラウザ向けコードへ埋め込まれます。秘密情報には使用しないでください。値を変更したら再デプロイが必要です。

## 4. 問い合わせフォーム

フォームはブラウザとAPIの両方で入力検証し、ハニーポット、二重送信防止、文字数・送信サイズ制限、外部転送のタイムアウトを備えています。

本番ではFormspree等でフォームを作成し、発行されたHTTPS POST先を `CONTACT_FORM_ENDPOINT` に設定します。外部サービス側で以下を設定・確認してください。

1. 通知先が `info@nekonotedejitarurabo.com`
2. Reply-Toがフォーム入力者のメールアドレス
3. 迷惑送信フィルターを有効化
4. 本番ドメインからテスト送信
5. 受信箱・迷惑メール・自動返信・文字化けを確認

送信はブラウザから直接ではなく、`/api/contact` を経由して外部サービスへ中継します。そのため外部サービス側のCAPTCHAは有効化しないでください。ブラウザでトークンを取得する経路がないため、有効にすると全送信が拒否されます。ボット対策はコード側のハニーポット（`website` フィールド）と、外部サービス側の機械学習スパムフィルターで行います。

中継型の利点として、エンドポイントURLがブラウザへ露出せず、外部サービスを乗り換えても公開HTMLを変更せずに済みます。

未設定時は成功扱いにせず、画面にメール連絡を案内します。

## 5. 独自ドメインとDNS

Vercelのプロジェクトで `Settings` → `Domains` を開き、取得済みドメインの次の2つを追加します。

- `www.<取得済みドメイン>`
- `<取得済みドメイン>`（apex）

本番で採用している構成は **apex（`www`なし）を正規URL** にし、`www` から apex へ 308 恒久リダイレクトする形です。VercelのDomains画面で `www` 側を「別のドメインにリダイレクトする」に切り替え、方式に `308 恒久的リダイレクト`、リダイレクト先に apex を指定します。`NEXT_PUBLIC_SITE_URL` は `https://<取得済みドメイン>`（`www`なし）に統一します。

逆に `www` を正規にする構成も可能ですが、**必ず一方だけを正規URLにし、`NEXT_PUBLIC_SITE_URL` と揃えてください。** 両方がコンテンツを配信すると重複コンテンツになります。

DNS設定は次の順序で行います。

1. VercelのDomains画面で対象ドメインを追加
2. 画面に表示されたA、CNAME、TXT等のレコード名・値を確認
3. ドメイン管理会社のDNS画面へ、表示された値をそのまま登録
4. 既存のWeb向けA/CNAMEレコードと競合しないことを確認
5. メール用MX・SPF・DKIM・DMARCレコードは削除・変更しない
6. Vercel側が `Valid Configuration` になるまで待つ

Vercelの表示前にAレコードやCNAME値を推測して登録しないでください。

## 6. HTTPS・SSL・URL統一の確認

VercelでDNSが有効になるとSSL証明書が自動発行されます。次を確認します。

```bash
curl -I https://<取得済みドメイン>/
curl -I http://<取得済みドメイン>/
curl -I https://www.<取得済みドメイン>/
```

確認項目:

- 正規URL（apex）が `200`
- HTTPがHTTPSへリダイレクト（`308`）
- `www` が apex へリダイレクト（`308`）
- ブラウザの証明書警告がない
- 証明書の対象ホストと有効期限が正しい
- canonical、OGP、sitemapが正規HTTPS URLを使用

## 7. 段階的な公開

1. `NEXT_PUBLIC_NOINDEX=true` で最初のProduction Deployment
2. Vercel URLで全ページ、404、フォーム、OGP画像を確認
3. 独自ドメインとDNSを設定
4. `NEXT_PUBLIC_SITE_URL` を正規HTTPS URLへ設定して再デプロイ
5. 本番ドメインから問い合わせをテストし、実メール受信を確認
6. `robots.txt` と `sitemap.xml` を確認
7. `NEXT_PUBLIC_NOINDEX=false` に変更して再デプロイ
8. 検索エンジンへ公開されたことを再確認

## 8. Search Console

全サブドメインとHTTP/HTTPSをまとめて扱えるDomain propertyを推奨します。

1. Search ConsoleでDomain propertyを追加
2. Googleが表示したTXTレコードをDNSへ登録
3. 所有権確認を完了
4. `https://<取得済みドメイン>/sitemap.xml` をSitemaps画面から送信
5. URL検査でトップとプライバシーポリシーを確認

URLプレフィックス方式を使う場合は、発行されたHTMLタグの `content` 値だけを `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` に設定します。

## 9. Google Analytics 4

GA4でWebデータストリームを作成し、`G-`から始まる測定IDを `NEXT_PUBLIC_GA_MEASUREMENT_ID` に設定して再デプロイします。未設定なら解析スクリプトは一切読み込まれません。

公開後は次を確認します。

- ページHTMLまたは通信に測定IDが1回だけ現れる
- GA4のリアルタイムレポートに自分のアクセスが反映される
- 拡張計測のページビュー設定
- 内部アクセス除外
- プライバシーポリシーと実際の計測内容が一致

## 10. 公式ドキュメント

- Vercel Git連携: https://vercel.com/docs/git
- Vercelビルド設定: https://vercel.com/docs/builds/configure-a-build
- Vercelドメイン: https://vercel.com/docs/domains/working-with-domains
- Vercel Node.js: https://vercel.com/docs/functions/runtimes/node-js/node-js-versions
- Search Console: https://support.google.com/webmasters/answer/34592
- GA4測定ID: https://support.google.com/analytics/answer/12270356

## 11. 依存関係監査

本番へ含まれる依存関係は次のコマンドで監査します。

```bash
npm run audit:prod
```

Next.js 16.2.12が参照するPostCSSとSharpは、`package.json`の`overrides`で互換性を検証済みの修正版へ固定しています。

通常の `npm audit` では、ESLint系の開発専用ツールが使用する旧 `brace-expansion` に対するDoS警告が表示されます。この依存は本番バンドルやVercel Functionへ含まれず、信頼済みのlint設定だけを処理します。`npm audit fix --force` はNext.jsを破壊的にダウングレードするため実行せず、ESLint関連パッケージ側の互換更新を待って追従してください。
