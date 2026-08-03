import {
  BadgeCheck,
  Languages,
  MessageSquareText,
  MonitorCheck,
  RefreshCw,
} from "lucide-react";
import {
  queueLanguageOptions,
  queueLanguagePlans,
  queueLocalizationReasons,
  queuePricingNotes,
} from "@/data/solutions";

const reasonIcons = [Languages, MonitorCheck, RefreshCw] as const;

export function QueueLanguagePricing() {
  return (
    <>
      <section className="bg-cream-light/60 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-sky-900">REFERENCE PRICE</p>
            <h2 className="mt-3 text-3xl font-medium text-ink sm:text-4xl">対応言語数で選べる参考プラン</h2>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              料金は小規模店舗向けの税込参考価格です。標準10言語から始め、追加候補は翻訳・表示検証後にご案内します。
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {queueLanguagePlans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm ${
                  plan.recommended
                    ? "border-sky-500 ring-2 ring-sky-100"
                    : "border-cat-beige"
                }`}
              >
                <span className={`w-fit rounded-full px-3 py-1 text-xs font-medium ${
                  plan.recommended
                    ? "bg-sky-900 text-white"
                    : "bg-cat-cream text-navy"
                }`}>
                  {plan.label}
                </span>
                <h3 className="mt-4 text-xl font-medium text-ink">{plan.name}</h3>
                <p className="mt-2 text-xs font-semibold text-muted">{plan.languageCount}言語対応</p>
                <dl className="mt-5 space-y-4">
                  <div>
                    <dt className="text-xs font-semibold text-muted">初期導入費</dt>
                    <dd className="mt-1 text-2xl font-medium tabular-nums text-navy">{plan.initial}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-muted">月額利用・サポート費</dt>
                    <dd className="mt-1 text-2xl font-medium tabular-nums text-navy">{plan.monthly}</dd>
                  </div>
                </dl>
                <p className="mt-5 border-t border-slate-100 pt-4 text-xs leading-6 text-muted">{plan.languages}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-cat-beige bg-white p-6 sm:p-8">
            <h3 className="text-xl font-medium text-ink">多言語オプション</h3>
            <div className="mt-5 overflow-hidden rounded-2xl border border-line-soft">
              <dl className="divide-y divide-line-soft">
                {queueLanguageOptions.map(([option, price]) => (
                  <div key={option} className="grid gap-1 px-4 py-4 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6 sm:px-5">
                    <dt className="text-sm font-semibold text-ink">{option}</dt>
                    <dd className="text-sm font-medium tabular-nums text-navy sm:text-right">{price}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-6 space-y-2">
              {queuePricingNotes.map((note) => (
                <p key={note} className="text-xs leading-6 text-muted">※ {note}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-sky-900">WHY PRICES VARY</p>
            <h2 className="mt-3 text-3xl font-medium text-ink sm:text-4xl">言語数によって料金が変わる理由</h2>
            <p className="mt-5 text-sm leading-8 text-muted sm:text-base">
              言語数が増えても、システムの基本機能が大きく変わるわけではありません。ただし、各画面の翻訳、表示崩れの確認、エラー文言の確認、機能追加時の翻訳更新など、言語ごとの検証と管理が必要になります。そのため、対応言語数に応じて初期設定費と月額サポート費が変わります。
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {queueLocalizationReasons.map((reason, index) => {
              const Icon = reasonIcons[index];
              return (
                <article key={reason} className="rounded-2xl border border-line-soft bg-cream-light p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-900">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-medium text-ink">{reason}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-line-soft bg-sky-50/70 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-sky-900">TRANSLATION METHOD</p>
            <h2 className="mt-3 text-3xl font-medium text-ink sm:text-4xl">固定翻訳とリアルタイム翻訳</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              このデモは、事前に用意した固定翻訳だけを表示しており、翻訳APIへは接続していません。
            </p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-sky-950">
                <BadgeCheck className="h-5 w-5 text-sky-800" aria-hidden="true" />
                固定翻訳
              </span>
              <p className="mt-4 text-sm leading-7 text-muted">
                受付ボタン、待ち人数、待ち時間、呼び出し状態、エラー表示、営業時間外表示など、定型文を事前登録します。
              </p>
              <ul className="mt-5 space-y-2 text-sm font-semibold text-ink">
                {["表示が速い", "翻訳API料金がかからない", "誤訳を事前確認できる"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-sky-950">
                <MessageSquareText className="h-5 w-5 text-sky-800" aria-hidden="true" />
                リアルタイム翻訳（オプション想定）
              </span>
              <p className="mt-4 text-sm leading-7 text-muted">
                店舗が入力した臨時案内、混雑状況の自由入力、個別のお知らせ、店舗独自メッセージなどが対象例です。
              </p>
              <p className="mt-5 rounded-2xl bg-cream-light px-4 py-3 text-sm font-semibold leading-7 text-navy">
                店舗が自由に入力した文章の自動翻訳は、オプション機能として対応を想定しています。
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
