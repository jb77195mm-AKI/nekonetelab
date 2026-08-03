"use client";

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import {
  AlertTriangle,
  Check,
  Clock3,
  Globe2,
  LoaderCircle,
  RefreshCw,
  Search,
  Star,
  Users,
  X,
} from "lucide-react";
import {
  getQueueTranslation,
  isQueueLocale,
  queueLocaleGroups,
  queueLocaleMeta,
  resolveQueueLocale,
  searchQueueLocales,
  type QueueLocale,
} from "@/data/queue-locales";
import type { SolutionSlug } from "@/data/solutions";

export function SolutionDemo({ slug }: { slug: SolutionSlug }) {
  if (slug === "queue") return <QueueDemo />;
  if (slug === "review-reply") return <ReviewReplyDemo />;
  return <SkillShiftDemo />;
}

function DemoWindow({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-700 bg-ink shadow-sm">
      <div className="flex items-center justify-between gap-4 border-b border-slate-700 px-4 py-3 sm:px-6">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <p className="text-xs font-semibold text-slate-300">{title}</p>
        <span className="rounded-full bg-sky-900 px-2.5 py-1 text-[0.6875rem] font-semibold text-sky-100">
          DEMO
        </span>
      </div>
      <div className="bg-slate-100 p-3 sm:p-6">{children}</div>
    </div>
  );
}

function QueueDemo() {
  const locale = useSyncExternalStore<QueueLocale>(
    subscribeToQueueLocale,
    getQueueLocaleSnapshot,
    () => "ja",
  );
  const copy = getQueueTranslation(locale);
  const localeMeta = queueLocaleMeta.find((item) => item.code === locale) ?? queueLocaleMeta[0];
  const [screen, setScreen] = useState<"overview" | "form" | "review" | "complete">("overview");
  const [partySize, setPartySize] = useState(2);
  const [guestName, setGuestName] = useState("");
  const [customerStatus, setCustomerStatus] = useState<"waiting" | "soon" | "calling" | "cancelled">("waiting");
  const [statuses, setStatuses] = useState<Record<number, string>>({
    19: "待機中",
    20: "待機中",
    21: "待機中",
  });
  const originalHtmlAttributes = useRef<{ lang: string; dir: string } | null>(null);
  const numberFormatter = useMemo(() => new Intl.NumberFormat(locale), [locale]);
  const timeFormatter = useMemo(
    () => new Intl.DateTimeFormat(locale, { hour: "2-digit", minute: "2-digit" }),
    [locale],
  );
  const demoTime = useMemo(() => new Date(2026, 6, 28, 14, 35), []);

  useEffect(() => {
    if (!originalHtmlAttributes.current) {
      originalHtmlAttributes.current = {
        lang: document.documentElement.lang,
        dir: document.documentElement.dir,
      };
    }
    document.documentElement.lang = locale;
    document.documentElement.dir = localeMeta.dir;
  }, [locale, localeMeta.dir]);

  useEffect(
    () => () => {
      if (!originalHtmlAttributes.current) return;
      document.documentElement.lang = originalHtmlAttributes.current.lang;
      document.documentElement.dir = originalHtmlAttributes.current.dir;
    },
    [],
  );

  function updateStatus(number: number, status: string) {
    setStatuses((current) => ({ ...current, [number]: status }));
  }

  function selectLocale(nextLocale: QueueLocale) {
    try {
      window.localStorage.setItem(QUEUE_LOCALE_STORAGE_KEY, nextLocale);
    } catch {
      // Storage may be unavailable in private browsing. The in-memory event still updates the demo.
    }
    window.dispatchEvent(new Event(QUEUE_LOCALE_CHANGE_EVENT));
  }

  function confirmReception() {
    setCustomerStatus("waiting");
    setScreen("complete");
  }

  function advanceCustomerStatus() {
    setCustomerStatus((current) => {
      if (current === "waiting") return "soon";
      if (current === "soon") return "calling";
      return "waiting";
    });
  }

  return (
    <DemoWindow title="順番待ちシステム・画面サンプル">
      <div className="grid gap-4 xl:grid-cols-[0.72fr_1.28fr]">
        <section
          className="min-w-0 rounded-2xl border border-line-soft bg-white p-4 shadow-sm sm:p-5"
          aria-label="多言語受付デモ"
          lang={locale}
          dir={localeMeta.dir}
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold text-sky-900">多言語受付デモ</p>
              <p className="mt-1 text-sm font-medium text-ink">{copy.queue.reception.title}</p>
            </div>
            <LanguageSelector locale={locale} onSelect={selectLocale} />
          </div>

          {screen === "overview" ? (
            <>
              <div className="mt-5 rounded-2xl bg-sky-50 p-5 text-center">
                <p className="text-xs font-semibold text-sky-900">{copy.queue.reception.currentWaiting}</p>
                <p className="mt-1 text-5xl font-medium tabular-nums text-ink">{numberFormatter.format(4)}</p>
                <p className="mt-3 text-sm text-muted">
                  {copy.queue.reception.estimatedWait}：
                  <strong className="text-ink">
                    {numberFormatter.format(20)} {copy.common.minutes}
                  </strong>
                </p>
                <p className="mt-2 text-xs text-muted">
                  {timeFormatter.format(demoTime)}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setScreen("form")}
                className="mt-4 min-h-12 w-full whitespace-normal rounded-sm bg-ink px-5 py-3 font-semibold leading-6 text-white transition hover:bg-ink-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
              >
                {copy.queue.reception.accept}
              </button>
            </>
          ) : null}

          {screen === "form" ? (
            <div className="mt-5">
              <h3 className="text-lg font-medium text-ink">{copy.queue.reception.startReception}</h3>
              <fieldset className="mt-5">
                <legend className="text-sm font-semibold text-muted">{copy.queue.reception.selectPartySize}</legend>
                <div className="mt-3 grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((size) => (
                    <button
                      key={size}
                      type="button"
                      aria-pressed={partySize === size}
                      onClick={() => setPartySize(size)}
                      className={`min-h-12 rounded-xl text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800 ${
                        partySize === size ? "bg-sky-900 text-white" : "bg-slate-100 text-muted"
                      }`}
                    >
                      {numberFormatter.format(size)}
                    </button>
                  ))}
                </div>
              </fieldset>
              <label className="mt-5 block text-sm font-semibold text-muted">
                {copy.queue.reception.nameOrNickname}
                <span className="mt-1 block text-xs font-normal text-muted">{copy.queue.reception.optional}</span>
                <input
                  value={guestName}
                  onChange={(event) => setGuestName(event.target.value)}
                  className="mt-2 min-h-12 w-full rounded-xl border border-line-soft px-4 text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
                  maxLength={30}
                />
              </label>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setScreen("overview")}
                  className="min-h-12 whitespace-normal rounded-full border border-line-soft px-4 py-3 text-sm font-semibold leading-5"
                >
                  {copy.queue.reception.back}
                </button>
                <button
                  type="button"
                  onClick={() => setScreen("review")}
                  className="min-h-12 whitespace-normal rounded-sm bg-ink px-4 py-3 text-sm font-semibold leading-5 text-white"
                >
                  {copy.queue.reception.review}
                </button>
              </div>
            </div>
          ) : null}

          {screen === "review" ? (
            <div className="mt-5">
              <h3 className="text-lg font-medium text-ink">{copy.queue.reception.review}</h3>
              <dl className="mt-4 space-y-3 rounded-2xl bg-cream-light p-4 text-sm">
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-muted">{copy.queue.reception.selectPartySize}</dt>
                  <dd className="font-medium">{numberFormatter.format(partySize)}</dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-muted">{copy.queue.reception.nameOrNickname}</dt>
                  <dd className="break-all text-right font-medium">{guestName || "—"}</dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-muted">{copy.queue.reception.estimatedWait}</dt>
                  <dd className="font-medium">{numberFormatter.format(20)} {copy.common.minutes}</dd>
                </div>
              </dl>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setScreen("form")}
                  className="min-h-12 whitespace-normal rounded-full border border-line-soft px-4 py-3 text-sm font-semibold leading-5"
                >
                  {copy.queue.reception.back}
                </button>
                <button
                  type="button"
                  onClick={confirmReception}
                  className="min-h-12 whitespace-normal rounded-sm bg-ink px-4 py-3 text-sm font-semibold leading-5 text-white"
                >
                  {copy.queue.reception.confirm}
                </button>
              </div>
            </div>
          ) : null}

          {screen === "complete" ? (
            <div className="mt-5 text-center" aria-live="polite">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-900">
                <Check className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-3 text-lg font-medium text-ink">{copy.queue.completion.complete}</h3>
              <p className="mt-1 text-xs text-muted">{copy.queue.completion.keepOpen}</p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-cream-light p-4">
                  <p className="text-[0.6875rem] font-semibold text-muted">{copy.queue.completion.yourNumber}</p>
                  <p className="mt-1 text-4xl font-medium tabular-nums text-navy">{numberFormatter.format(23)}</p>
                </div>
                <div className="rounded-2xl bg-sky-50 p-4">
                  <p className="text-[0.6875rem] font-semibold text-muted">{copy.queue.completion.currentCalling}</p>
                  <p className="mt-1 text-4xl font-medium tabular-nums text-sky-950">{numberFormatter.format(18)}</p>
                </div>
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-line-soft p-3">
                  <p className="text-xs text-muted">{copy.queue.completion.ahead}</p>
                  <p className="mt-1 text-xl font-medium">{numberFormatter.format(4)}</p>
                </div>
                <div className="rounded-2xl border border-line-soft p-3">
                  <p className="text-xs text-muted">{copy.queue.completion.estimatedWait}</p>
                  <p className="mt-1 text-xl font-medium">{numberFormatter.format(20)} {copy.common.minutes}</p>
                </div>
              </div>
              <div className={`mt-4 rounded-2xl px-4 py-3 text-sm font-medium ${
                customerStatus === "calling"
                  ? "bg-cat-cream text-navy"
                  : customerStatus === "cancelled"
                    ? "bg-slate-200 text-ink"
                    : "bg-sky-100 text-sky-950"
              }`}>
                {copy.queue.status[customerStatus]}
                {customerStatus === "calling" ? (
                  <span className="mt-1 block text-xs font-medium">{copy.queue.status.askStaff}</span>
                ) : null}
              </div>
              <details className="mt-4 rounded-2xl border border-line-soft p-3 text-left">
                <summary className="min-h-11 cursor-pointer py-2 text-sm font-semibold">
                  {copy.queue.completion.review}
                </summary>
                <p className="mt-2 text-sm text-muted">
                  {numberFormatter.format(partySize)} / {guestName || "—"} / {timeFormatter.format(demoTime)}
                </p>
              </details>
              <button
                type="button"
                onClick={() => setCustomerStatus("cancelled")}
                disabled={customerStatus === "cancelled"}
                className="mt-3 min-h-12 w-full whitespace-normal rounded-full border border-line-soft px-4 py-3 text-sm font-semibold leading-5 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {copy.queue.completion.cancel}
              </button>
              <button
                type="button"
                onClick={advanceCustomerStatus}
                lang="ja"
                className="mt-2 min-h-11 w-full rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-muted"
              >
                呼び出し状態を切り替える（デモ）
              </button>
            </div>
          ) : null}

          <p className="mt-5 border-t border-line-soft pt-4 text-xs leading-5 text-muted" lang="ja">
            翻訳内容は開発中の参考表示です。正式提供時には利用用途に応じた確認を行います。
          </p>
        </section>

        <section className="min-w-0 rounded-2xl border border-line-soft bg-white p-4 shadow-sm sm:p-5" aria-label="店舗向け画面デモ">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold text-sky-900">店舗管理画面</p>
              <h3 className="mt-1 font-medium text-ink">受付中一覧</h3>
            </div>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-900">
              受付中 3組
            </span>
          </div>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-line-soft">
            <table className="min-w-[42rem] w-full text-left text-sm">
              <thead className="bg-slate-100 text-xs text-muted">
                <tr>
                  <th className="px-4 py-3 font-semibold">受付番号</th>
                  <th className="px-4 py-3 font-semibold">受付時刻</th>
                  <th className="px-4 py-3 font-semibold">待ち時間</th>
                  <th className="px-4 py-3 font-semibold">状態</th>
                  <th className="px-4 py-3 font-semibold">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line-soft">
                {[19, 20, 21].map((number, index) => (
                  <tr key={number}>
                    <td className="px-4 py-4 text-lg font-medium tabular-nums">{number}</td>
                    <td className="px-4 py-4 text-muted">{`11:${12 + index * 4}`}</td>
                    <td className="px-4 py-4 text-muted">{`${8 + index * 4}分`}</td>
                    <td className="px-4 py-4">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                          statuses[number] === "完了"
                            ? "bg-emerald-100 text-emerald-900"
                            : statuses[number] === "取消"
                              ? "bg-slate-200 text-muted"
                              : statuses[number] === "呼び出し中"
                                ? "bg-cat-cream text-navy"
                                : "bg-sky-100 text-sky-900"
                        }`}
                      >
                        {statuses[number]}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => updateStatus(number, "呼び出し中")}
                          className="min-h-10 rounded-lg bg-sky-900 px-3 text-xs font-semibold text-white"
                        >
                          呼び出す
                        </button>
                        <button
                          type="button"
                          onClick={() => updateStatus(number, "完了")}
                          className="min-h-10 rounded-lg border border-emerald-700 px-3 text-xs font-semibold text-emerald-900"
                        >
                          完了
                        </button>
                        <button
                          type="button"
                          onClick={() => updateStatus(number, "取消")}
                          className="min-h-10 rounded-lg border border-line-soft px-3 text-xs font-semibold text-muted"
                        >
                          取消
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-5 text-muted" aria-live="polite">
            ボタン操作はこの画面内だけで変化し、受付データは保存されません。
          </p>
        </section>
      </div>
    </DemoWindow>
  );
}

const QUEUE_LOCALE_STORAGE_KEY = "preferredLocale";
const QUEUE_LOCALE_CHANGE_EVENT = "queue-locale-change";

function getQueueLocaleSnapshot(): QueueLocale {
  try {
    const stored = window.localStorage.getItem(QUEUE_LOCALE_STORAGE_KEY);
    if (isQueueLocale(stored)) return stored;
  } catch {
    // Use browser language when storage is unavailable.
  }
  return resolveQueueLocale(window.navigator.languages.length ? window.navigator.languages : [window.navigator.language]);
}

function subscribeToQueueLocale(callback: () => void) {
  window.addEventListener(QUEUE_LOCALE_CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(QUEUE_LOCALE_CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function LanguageSelector({
  locale,
  onSelect,
}: {
  locale: QueueLocale;
  onSelect: (locale: QueueLocale) => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const triggerRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const copy = getQueueTranslation(locale);
  const selectedLocale = queueLocaleMeta.find((item) => item.code === locale) ?? queueLocaleMeta[0];
  const filteredLocales = useMemo(() => searchQueueLocales(query), [query]);

  function closeSelector() {
    setQuery("");
    setOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }

  function chooseLocale(nextLocale: QueueLocale) {
    onSelect(nextLocale);
    closeSelector();
  }

  function handleDialogKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeSelector();
      return;
    }
    if (event.key !== "Tab" || !dialogRef.current) return;

    const focusable = Array.from(
      dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
      ),
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => searchRef.current?.focus(), 0);
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-label={`${copy.languageSelector.choose}: ${selectedLocale.nativeName}`}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="inline-flex min-h-11 max-w-full items-center gap-2 rounded-full border border-line-soft bg-white px-3 py-2 text-left text-xs font-semibold text-ink shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
      >
        <Globe2 className="h-4 w-4 shrink-0 text-sky-800" aria-hidden="true" />
        <span className="break-words">{selectedLocale.nativeName}</span>
      </button>

      {open ? (
        <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6">
          <button
            type="button"
            aria-label="言語選択を閉じる"
            onClick={closeSelector}
            className="absolute inset-0 bg-ink/60"
          />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="queue-language-dialog-title"
            onKeyDown={handleDialogKeyDown}
            className="relative z-10 flex max-h-[92dvh] w-full flex-col rounded-t-3xl bg-white shadow-sm sm:max-h-[86vh] sm:max-w-xl sm:rounded-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-line-soft px-5 py-4 sm:px-6">
              <div>
                <h3 id="queue-language-dialog-title" className="text-lg font-medium text-ink">
                  {copy.languageSelector.choose}
                </h3>
                <p className="mt-1 text-xs text-muted">{copy.languageSelector.selected}</p>
              </div>
              <button
                type="button"
                aria-label="言語選択を閉じる"
                onClick={closeSelector}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100 text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="border-b border-line-soft px-5 py-4 sm:px-6">
              <label className="relative block">
                <span className="sr-only">{copy.languageSelector.search}</span>
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                <input
                  ref={searchRef}
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={copy.languageSelector.search}
                  className="min-h-12 w-full rounded-xl border border-line-soft py-3 pl-12 pr-4 text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800"
                />
              </label>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4 sm:px-6">
              {filteredLocales.length ? (
                <div className="space-y-6">
                  {queueLocaleGroups.map((group) => {
                    const groupLocales = filteredLocales.filter((item) => item.group === group.id);
                    if (!groupLocales.length) return null;
                    return (
                      <section key={group.id} aria-labelledby={`queue-locale-group-${group.id}`}>
                        <h4 id={`queue-locale-group-${group.id}`} className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
                          {group.id === "recommended"
                            ? copy.languageSelector.recommended
                            : group.id === "asia"
                              ? "東南アジア"
                              : group.label}
                        </h4>
                        <div className="mt-2 space-y-2">
                          {groupLocales.map((item) => (
                            <button
                              key={item.code}
                              type="button"
                              aria-pressed={item.code === locale}
                              onClick={() => chooseLocale(item.code)}
                              className={`flex min-h-12 w-full items-center justify-between gap-4 rounded-xl border px-4 py-3 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-800 ${
                                item.code === locale
                                  ? "border-sky-700 bg-sky-50 text-sky-950"
                                  : "border-line-soft bg-white text-ink hover:bg-cream-light"
                              }`}
                            >
                              <span className="min-w-0">
                                <span className="block break-words text-sm font-medium" lang={item.code}>{item.nativeName}</span>
                                <span className="mt-0.5 block break-words text-xs text-muted">{item.japaneseName} · {item.code}</span>
                              </span>
                              {item.code === locale ? (
                                <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold">
                                  <Check className="h-4 w-4" aria-hidden="true" />
                                  <span>選択中</span>
                                </span>
                              ) : null}
                            </button>
                          ))}
                        </div>
                      </section>
                    );
                  })}
                </div>
              ) : (
                <p className="rounded-2xl bg-cream-light px-4 py-8 text-center text-sm font-semibold text-muted">
                  {copy.languageSelector.noResults}
                </p>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function ReviewReplyDemo() {
  const [tone, setTone] = useState<"丁寧" | "親しみやすい" | "簡潔">("丁寧");
  const [policy, setPolicy] = useState("すべて確認して返信");
  const [reply, setReply] = useState(
    "このたびはご来店いただき、ありがとうございます。落ち着いて過ごせたとのお言葉を、スタッフ一同うれしく拝見しました。またお会いできる日を楽しみにしております。",
  );
  const [status, setStatus] = useState<"下書き" | "承認済み" | "要確認">("下書き");
  const [editing, setEditing] = useState(false);

  function regenerate() {
    const replies = {
      丁寧:
        "温かいご感想をお寄せいただき、誠にありがとうございます。店内でゆっくりお過ごしいただけたことを、大変うれしく思います。またのご来店を心よりお待ちしております。",
      親しみやすい:
        "うれしい口コミをありがとうございます！ゆっくり過ごしていただけたようで安心しました。またいつでも気軽にお立ち寄りください。",
      簡潔: "ご来店と温かい口コミをありがとうございます。またのお越しを心よりお待ちしております。",
    };
    setReply(replies[tone]);
    setStatus("下書き");
  }

  return (
    <DemoWindow title="口コミ返信サポート・画面サンプル">
      <div className="grid gap-4 xl:grid-cols-[0.82fr_1.18fr]">
        <aside className="rounded-2xl border border-line-soft bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold text-sky-900">返信設定</p>
          <fieldset className="mt-5">
            <legend className="text-sm font-medium text-ink">返信トーン</legend>
            <div className="mt-3 grid gap-2">
              {(["丁寧", "親しみやすい", "簡潔"] as const).map((item) => (
                <label key={item} className="flex min-h-11 cursor-pointer items-center gap-3 rounded-xl bg-cream-light px-4 py-2 text-sm">
                  <input
                    type="radio"
                    name="tone"
                    value={item}
                    checked={tone === item}
                    onChange={() => setTone(item)}
                    className="h-4 w-4 accent-sky-900"
                  />
                  {item}
                </label>
              ))}
            </div>
          </fieldset>
          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-ink">自動返信対象</legend>
            <div className="mt-3 grid gap-2">
              {["星5", "星4以上", "すべて確認して返信"].map((item) => (
                <label key={item} className="flex min-h-11 cursor-pointer items-center gap-3 rounded-xl bg-cream-light px-4 py-2 text-sm">
                  <input
                    type="radio"
                    name="policy"
                    value={item}
                    checked={policy === item}
                    onChange={() => setPolicy(item)}
                    className="h-4 w-4 accent-sky-900"
                  />
                  {item}
                </label>
              ))}
            </div>
          </fieldset>
        </aside>

        <section className="min-w-0 rounded-2xl border border-line-soft bg-white p-5 shadow-sm" aria-label="口コミ返信画面デモ">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-sm font-medium">山田 はな（ダミー）</p>
              <div className="mt-1 flex gap-0.5 text-amber-500" aria-label="星5の口コミ">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
            </div>
            <span className="rounded-full bg-cat-cream px-3 py-1 text-xs font-semibold text-navy">未返信</span>
          </div>
          <blockquote className="mt-4 rounded-2xl bg-cream-light p-4 text-sm leading-7 text-muted">
            店内が明るく、スタッフの方も親切でした。待ち時間もゆっくり過ごせて良かったです。
          </blockquote>

          <div className="mt-5 rounded-2xl border border-sky-200 bg-sky-50 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-medium text-sky-950">AIが作成した返信案</p>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  status === "承認済み"
                    ? "bg-emerald-100 text-emerald-900"
                    : status === "要確認"
                      ? "bg-red-100 text-red-900"
                      : "bg-white text-muted"
                }`}
                aria-live="polite"
              >
                {status}
              </span>
            </div>
            <textarea
              value={reply}
              onChange={(event) => setReply(event.target.value)}
              readOnly={!editing}
              aria-label="AIが作成した返信案"
              rows={6}
              className="mt-3 w-full resize-y rounded-xl border border-sky-200 bg-white p-3 text-sm leading-7 text-muted outline-none focus:border-sky-700 focus:ring-2 focus:ring-sky-700/20"
            />
            <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={regenerate}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-sky-900 px-4 text-sm font-semibold text-white"
              >
                <RefreshCw className="h-4 w-4" aria-hidden="true" />
                文章を再作成
              </button>
              <button
                type="button"
                onClick={() => setEditing((current) => !current)}
                aria-pressed={editing}
                className="min-h-11 rounded-full border border-line-soft bg-white px-4 text-sm font-semibold text-ink"
              >
                {editing ? "編集を終える" : "内容を編集"}
              </button>
              <button
                type="button"
                onClick={() => setStatus("承認済み")}
                className="min-h-11 rounded-full border border-emerald-700 bg-white px-4 text-sm font-semibold text-emerald-900"
              >
                承認する
              </button>
              <button
                type="button"
                onClick={() => setStatus("要確認")}
                className="min-h-11 rounded-full border border-red-700 bg-white px-4 text-sm font-semibold text-red-900"
              >
                要確認
              </button>
            </div>
          </div>
          <div className="mt-4 flex items-start gap-2 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-xs leading-6 text-amber-950">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            低評価、クレーム、事故、返金、法律問題などを含む口コミは、完全自動返信にせず管理者確認を推奨します。
          </div>
        </section>
      </div>
    </DemoWindow>
  );
}

function SkillShiftDemo() {
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [adjusted, setAdjusted] = useState(false);

  function createShift() {
    setLoading(true);
    setShowResult(false);
    window.setTimeout(() => {
      setLoading(false);
      setShowResult(true);
    }, 700);
  }

  return (
    <DemoWindow title="スキル別AIシフト・画面サンプル">
      <div className="rounded-2xl border border-line-soft bg-white p-4 shadow-sm sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-sky-900">条件設定画面</p>
            <h3 className="mt-1 text-lg font-medium text-ink">2026年8月 シフト条件</h3>
          </div>
          <button
            type="button"
            onClick={createShift}
            disabled={loading}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-ink px-5 py-3 text-sm font-semibold text-white disabled:cursor-wait disabled:opacity-70"
          >
            {loading ? (
              <>
                <LoaderCircle className="h-4 w-4 animate-spin motion-reduce:animate-none" aria-hidden="true" />
                作成中…
              </>
            ) : (
              "シフト案を作成"
            )}
          </button>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {[
            { name: "佐藤", skill: "責任者・接客 Lv.3", request: "8/6・8/20 希望休", limit: "週40時間" },
            { name: "鈴木", skill: "接客 Lv.2", request: "平日17時まで", limit: "週32時間" },
            { name: "田中", skill: "新人・接客 Lv.1", request: "8/12 希望休", limit: "週24時間" },
          ].map((staff) => (
            <article key={staff.name} className="rounded-2xl bg-cream-light p-4">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sky-900">
                  <Users className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="font-medium">{staff.name}</p>
              </div>
              <dl className="mt-3 space-y-2 text-xs leading-5">
                <div>
                  <dt className="font-semibold text-muted">スキルレベル</dt>
                  <dd className="text-ink">{staff.skill}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-muted">希望・勤務可能時間</dt>
                  <dd className="text-ink">{staff.request}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-muted">勤務上限</dt>
                  <dd className="text-ink">{staff.limit}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-line-soft p-4">
            <p className="text-xs font-semibold text-muted">必要人数</p>
            <p className="mt-1 text-sm font-medium">平日 3名／土日 4名</p>
          </div>
          <div className="rounded-2xl border border-line-soft p-4">
            <p className="text-xs font-semibold text-muted">必要スキル</p>
            <p className="mt-1 text-sm font-medium">各時間帯に責任者または接客 Lv.3</p>
          </div>
        </div>
      </div>

      <div className="mt-4 min-h-48 rounded-2xl border border-line-soft bg-white p-4 shadow-sm sm:p-6" aria-live="polite">
        {loading ? (
          <div className="flex min-h-36 flex-col items-center justify-center text-center">
            <LoaderCircle className="h-8 w-8 animate-spin text-sky-900 motion-reduce:animate-none" aria-hidden="true" />
            <p className="mt-3 text-sm font-semibold">固定のサンプル条件を確認しています</p>
          </div>
        ) : showResult ? (
          <>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold text-sky-900">シフト結果画面</p>
                <h3 className="mt-1 font-medium">サンプルシフト案</h3>
              </div>
              <button
                type="button"
                onClick={() => setAdjusted((current) => !current)}
                className="min-h-11 rounded-full border border-line-soft px-4 text-sm font-semibold"
              >
                {adjusted ? "変更を戻す" : "手動変更"}
              </button>
            </div>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-line-soft">
              <table className="min-w-[46rem] w-full text-left text-sm">
                <thead className="bg-slate-100 text-xs text-muted">
                  <tr>
                    <th className="px-4 py-3">日付</th>
                    <th className="px-4 py-3">時間帯</th>
                    <th className="px-4 py-3">配置スタッフ</th>
                    <th className="px-4 py-3">確認事項</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line-soft">
                  <tr>
                    <td className="px-4 py-4 font-semibold">8/3（月）</td>
                    <td className="px-4 py-4">9:00〜17:00</td>
                    <td className="px-4 py-4">{adjusted ? "佐藤・鈴木・田中" : "佐藤・鈴木・高橋"}</td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-900">
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        条件内
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-semibold">8/4（火）</td>
                    <td className="px-4 py-4">17:00〜22:00</td>
                    <td className="px-4 py-4">鈴木・田中</td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-950">
                        <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
                        スキル不足
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 font-semibold">8/8（土）</td>
                    <td className="px-4 py-4">10:00〜18:00</td>
                    <td className="px-4 py-4">佐藤・鈴木・田中</td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-2.5 py-1 text-xs font-semibold text-red-900">
                        <AlertTriangle className="h-3.5 w-3.5" aria-hidden="true" />
                        1名不足
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {["不足人数：1件", "スキル不足：1件", "勤務偏り：0件"].map((warning) => (
                <div key={warning} className="flex items-center gap-2 rounded-xl bg-cream-light px-3 py-2 text-xs font-semibold text-muted">
                  <Clock3 className="h-4 w-4 text-sky-800" aria-hidden="true" />
                  {warning}
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex min-h-36 flex-col items-center justify-center text-center text-muted">
            <Clock3 className="h-8 w-8" aria-hidden="true" />
            <p className="mt-3 text-sm font-semibold">「シフト案を作成」を押すと、固定の結果例を表示します。</p>
          </div>
        )}
      </div>
    </DemoWindow>
  );
}
