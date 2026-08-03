"use client";

import { useState } from "react";
import type { HomepagePlanSlug } from "@/data/business-model";

export function CheckoutAgreementForm({
  planId,
  mode,
}: {
  planId: HomepagePlanSlug;
  mode: "mock" | "stripe_test";
}) {
  const [terms, setTerms] = useState(false);
  const [recurring, setRecurring] = useState(false);
  const [minimumTerm, setMinimumTerm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const ready = terms && recurring && minimumTerm && !loading;

  async function beginCheckout() {
    if (!ready) return;
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/stripe/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId }),
      });
      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; url?: string; error?: string }
        | null;

      if (!response.ok || !result?.ok || !result.url) {
        throw new Error(result?.error ?? "checkout_failed");
      }
      window.location.assign(result.url);
    } catch {
      setError(
        "テスト申込を開始できませんでした。設定を確認し、時間をおいて再度お試しください。",
      );
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="space-y-3">
        <AgreementCheckbox
          checked={terms}
          onChange={setTerms}
          label="利用規約およびプライバシーポリシーを確認し、同意します。"
        />
        <AgreementCheckbox
          checked={recurring}
          onChange={setRecurring}
          label="月額料金がクレジットカードへ継続的に自動請求されることを確認しました。"
        />
        <AgreementCheckbox
          checked={minimumTerm}
          onChange={setMinimumTerm}
          label={
            planId === "web-start"
              ? "最低利用期間24か月、24か月未満の中途解約金（残契約月数×9,800円・税込）、解約申出期限（次回決済日の10日前まで）を確認しました。"
              : "最低利用期間および期間内に解約する場合の条件を確認しました。"
          }
        />
      </div>

      <p className="mt-5 rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 text-xs leading-6 text-sky-950">
        {mode === "mock"
          ? "現在はモックモードです。Stripeへ接続せず、完了画面までの導線だけを確認します。"
          : "Stripeテストモードです。テストカード以外は使用しないでください。実際の請求は行われません。"}
      </p>

      {error ? (
        <p
          role="alert"
          className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900"
        >
          {error}
        </p>
      ) : null}

      <button
        type="button"
        disabled={!ready}
        onClick={beginCheckout}
        className="mt-6 flex min-h-12 w-full items-center justify-center rounded-sm bg-ink px-6 py-3 font-medium text-white transition hover:bg-ink-soft disabled:cursor-not-allowed disabled:opacity-45"
      >
        {loading
          ? "テスト申込を準備中…"
          : mode === "mock"
            ? "モック申込を確認する"
            : "Stripeテスト申込へ進む"}
      </button>
      <p aria-live="polite" className="sr-only">
        {loading ? "テスト申込を準備しています。" : error}
      </p>
    </div>
  );
}

function AgreementCheckbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}) {
  return (
    <label className="flex min-h-12 cursor-pointer items-start gap-3 rounded-xl border border-line-soft p-4 text-sm leading-6 text-muted focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-navy">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-0.5 h-5 w-5 shrink-0 accent-navy"
      />
      <span>{label}</span>
    </label>
  );
}
