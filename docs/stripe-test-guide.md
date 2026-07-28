# Stripeテスト手順

## モックモード

1. `SUBSCRIPTION_CHECKOUT_MODE=mock` で起動
2. `/subscription/checkout?plan=web-start` を開く
3. 料金、最低利用期間、別途費用を確認
4. 3つの同意欄をすべて選択
5. 「モック申込を確認する」を押す
6. 完了画面へ移動し、実請求なしの表示を確認

## Stripeテストモード

1. テスト用Secret Key、Webhook Secret、Price IDを設定
2. `SUBSCRIPTION_CHECKOUT_MODE=stripe_test` に変更
3. Checkout確認画面で3つの同意欄を選択
4. StripeテストCheckoutへ遷移
5. Stripe公式のテストカードを使用
6. 完了画面へ戻る
7. Stripe DashboardでSubscriptionとInvoiceを確認
8. Webhook配信履歴を確認

## 異常系

- 不正なplan IDは400
- 買い切り・バランスはCheckout対象外
- Secret KeyまたはPrice ID未設定は安全な503
- Webhook署名なし・不正署名は400
- 同一イベント再送は重複扱い
- 連続クリック中はボタン無効
- 1分あたりの回数上限を超えると429
- キャンセル時は `/subscription/cancel`

## 注意

URLの`session_id`だけで契約成立と判断しない。正式判定は署名検証済みWebhookとStripe Dashboardで行う。

デモのイベント重複防止は同一プロセス内のメモリのみ。サーバーレス環境をまたぐ完全な冪等性には本番DBが必要。
