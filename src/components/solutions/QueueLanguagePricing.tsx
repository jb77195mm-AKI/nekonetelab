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
      <section className="bg-orange-50/60 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.18em] text-sky-900">REFERENCE PRICE</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">対応言語数で選べる参考プラン</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              料金はすべて小規模店舗向けの参考価格・税別です。来店されるお客様の傾向に合わせ、必要な言語数から開始できます。
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {queueLanguagePlans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex h-full flex-col rounded-3xl border bg-white p-6 shadow-sm ${
                  plan.recommended
                    ? "border-sky-500 ring-2 ring-sky-100"
                    : "border-orange-200"
                }`}
              >
                <span className={`w-fit rounded-full px-3 py-1 text-xs font-black ${
                  plan.recommended
                    ? "bg-sky-900 text-white"
                    : "bg-orange-100 text-orange-950"
                }`}>
                  {plan.label}
                </span>
                <h3 className="mt-4 text-xl font-black text-slate-950">{plan.name}</h3>
                <p className="mt-2 text-xs font-bold text-slate-500">{plan.languageCount}言語対応</p>
                <dl className="mt-5 space-y-4">
                  <div>
                    <dt className="text-xs font-bold text-slate-500">初期導入費</dt>
                    <dd className="mt-1 text-2xl font-black tabular-nums text-orange-800">{plan.initial}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold text-slate-500">月額利用・サポート費</dt>
                    <dd className="mt-1 text-2xl font-black tabular-nums text-orange-800">{plan.monthly}</dd>
                  </div>
                </dl>
                <p className="mt-5 border-t border-slate-100 pt-4 text-xs leading-6 text-slate-600">{plan.languages}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-orange-200 bg-white p-6 sm:p-8">
            <h3 className="text-xl font-black text-slate-950">多言語オプション</h3>
            <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
              <dl className="divide-y divide-slate-200">
                {queueLanguageOptions.map(([option, price]) => (
                  <div key={option} className="grid gap-1 px-4 py-4 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6 sm:px-5">
                    <dt className="text-sm font-bold text-slate-800">{option}</dt>
                    <dd className="text-sm font-black tabular-nums text-orange-800 sm:text-right">{price}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-6 space-y-2">
              {queuePricingNotes.map((note) => (
                <p key={note} className="text-xs leading-6 text-slate-600">※ {note}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.18em] text-sky-900">WHY PRICES VARY</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">言語数によって料金が変わる理由</h2>
            <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
              言語数が増えても、システムの基本機能が大きく変わるわけではありません。ただし、各画面の翻訳、表示崩れの確認、エラー文言の確認、機能追加時の翻訳更新など、言語ごとの検証と管理が必要になります。そのため、対応言語数に応じて初期設定費と月額サポート費が変わります。
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {queueLocalizationReasons.map((reason, index) => {
              const Icon = reasonIcons[index];
              return (
                <article key={reason} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-900">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-black text-slate-950">{reason}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-sky-50/70 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.18em] text-sky-900">TRANSLATION METHOD</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">固定翻訳とリアルタイム翻訳</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              このデモは、事前に用意した固定翻訳だけを表示しており、翻訳APIへは接続していません。
            </p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
              <span className="inline-flex items-center gap-2 text-sm font-black text-sky-950">
                <BadgeCheck className="h-5 w-5 text-sky-800" aria-hidden="true" />
                固定翻訳
              </span>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                受付ボタン、待ち人数、待ち時間、呼び出し状態、エラー表示、営業時間外表示など、定型文を事前登録します。
              </p>
              <ul className="mt-5 space-y-2 text-sm font-bold text-slate-800">
                {["表示が速い", "翻訳API料金がかからない", "誤訳を事前確認できる"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
              <span className="inline-flex items-center gap-2 text-sm font-black text-sky-950">
                <MessageSquareText className="h-5 w-5 text-sky-800" aria-hidden="true" />
                リアルタイム翻訳（オプション想定）
              </span>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                店舗が入力した臨時案内、混雑状況の自由入力、個別のお知らせ、店舗独自メッセージなどが対象例です。
              </p>
              <p className="mt-5 rounded-2xl bg-orange-50 px-4 py-3 text-sm font-bold leading-7 text-orange-950">
                店舗が自由に入力した文章の自動翻訳は、オプション機能として対応を想定しています。
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
