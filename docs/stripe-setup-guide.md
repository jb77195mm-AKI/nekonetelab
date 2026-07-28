# Stripeテスト環境セットアップ

## 前提

このブランチは `mock` または `stripe_test` のみ対応する。本番モードは実装していない。

## 1. Stripeテスト商品を作る

Stripe Dashboardをテストモードへ切り替え、次の月額Priceを作成する。

- Webスタート：9,800円（税込相当）／月
- おまかせサブスク：14,800円（税込相当）／月

バランスプランは初期費用の請求方法と契約期間が未確定のため、Checkoutへ接続しない。

## 2. 環境変数

```env
NEXT_PUBLIC_DEMO_MODE=true
NEXT_PUBLIC_NOINDEX=true
NEXT_PUBLIC_SITE_URL=http://localhost:3000

SUBSCRIPTION_CHECKOUT_MODE=mock

STRIPE_SECRET_KEY=sk_test_xxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxx
STRIPE_PRICE_ID_WEB_START=price_xxxxxxxxx
STRIPE_PRICE_ID_OMAKASE=price_xxxxxxxxx
NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL=https://billing.stripe.com/p/login/xxxxxxxx
```

Stripeテストへ接続するときだけ `SUBSCRIPTION_CHECKOUT_MODE=stripe_test` にする。

## 3. Customer Portal

Stripe Dashboardでテスト用Portalを有効化する。最低利用期間があるため、即時解約を無条件に許可しない。

候補：

- Portalの解約機能を無効
- 期間終了時解約
- 解約申請フォーム
- 管理者確認後に解約

本番運用を決めるまで、テストPortalの設定も本番へコピーしない。

## 4. Webhook

エンドポイント：

```text
POST /api/stripe/webhook
```

対象イベント：

- checkout.session.completed
- invoice.paid
- invoice.payment_failed
- customer.subscription.created
- customer.subscription.updated
- customer.subscription.deleted

署名検証にはStripe CLIまたはDashboardで発行したテスト用Webhook Secretを使う。

## 5. 安全確認

- `sk_live_` を設定しない
- 本番Price IDを設定しない
- 実カードを使わない
- `.env` をコミットしない
- 金額とPrice IDはクライアントから受け取らない
