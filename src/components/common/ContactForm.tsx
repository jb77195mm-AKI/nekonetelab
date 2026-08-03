"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const inquiryTypes = ["ご予約について", "料金について", "取材・掲載について", "その他のお問い合わせ"];

type Status = "idle" | "submitting" | "success" | "demo" | "error";

export function ContactForm({ siteName }: { siteName: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const consent = data.get("consent") === "on";

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "お名前を入力してください。";
    if (!email) nextErrors.email = "メールアドレスを入力してください。";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "メールアドレスの形式が正しくありません。";
    if (!message) nextErrors.message = "お問い合わせ内容を入力してください。";
    if (!consent) nextErrors.consent = "個人情報の取り扱いへの同意が必要です。";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: String(data.get("phone") ?? ""),
          inquiryType: String(data.get("inquiryType") ?? ""),
          message,
          consent,
          site: siteName,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setStatus("error");
        return;
      }
      setStatus(json.demo ? "demo" : "success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success" || status === "demo") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-[var(--primary)]/30 bg-[var(--surface)] p-6 text-center text-sm text-[var(--text)]"
      >
        <p className="font-semibold">お問い合わせありがとうございます。</p>
        {status === "demo" ? (
          <p className="mt-2 text-[var(--muted)]">
            こちらはデモサイトのため、実際の送信は行われません。
          </p>
        ) : (
          <p className="mt-2 text-[var(--muted)]">担当者より折り返しご連絡いたします。</p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="お名前" htmlFor="name" required error={errors.name}>
          <input id="name" name="name" type="text" autoComplete="name" className={inputClass} />
        </Field>
        <Field label="メールアドレス" htmlFor="email" required error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" className={inputClass} />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="電話番号" htmlFor="phone" error={errors.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </Field>
        <Field label="お問い合わせ種別" htmlFor="inquiryType" error={errors.inquiryType}>
          <select id="inquiryType" name="inquiryType" defaultValue={inquiryTypes[0]} className={inputClass}>
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="お問い合わせ内容" htmlFor="message" required error={errors.message}>
        <textarea id="message" name="message" rows={5} className={inputClass} />
      </Field>
      <div>
        <label htmlFor="consent" className="flex items-start gap-2 text-sm text-[var(--text)]">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            className="mt-1 h-4 w-4 rounded border-[var(--muted)]/40"
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          <span>
            <Link href="/privacy" className="underline underline-offset-2">
              個人情報の取り扱い
            </Link>
            に同意します。
          </span>
        </label>
        {errors.consent ? (
          <p id="consent-error" className="mt-1 text-xs text-red-600">
            {errors.consent}
          </p>
        ) : null}
      </div>
      {status === "error" ? (
        <p role="alert" className="text-sm text-red-600">
          送信に失敗しました。時間をおいて再度お試しください。
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {status === "submitting" ? "送信中..." : "送信する"}
      </button>
    </form>
  );
}

const inputClass =
  "w-full rounded-lg border border-[var(--muted)]/30 bg-white px-4 py-2.5 text-sm text-[var(--text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--primary)]";

function Field({
  label,
  htmlFor,
  required,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-[var(--text)]">
        {label}
        {required ? <span className="ml-1 text-red-600">*</span> : null}
      </label>
      {children}
      {error ? (
        <p role="alert" className="mt-1 text-xs text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}
