"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import {
  consultationMethods,
  consultationPlans,
  officialInquiryTypes,
} from "@/data/contact";

type Status = "idle" | "submitting" | "success" | "unavailable" | "error";
type FieldName =
  | "name"
  | "businessName"
  | "email"
  | "phone"
  | "prefecture"
  | "industry"
  | "hasWebsite"
  | "inquiryType"
  | "plan"
  | "consultationMethod"
  | "message"
  | "consent";
type FormErrors = Partial<Record<FieldName, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const inputClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-orange-700 focus:ring-2 focus:ring-orange-700/20";

export function OfficialContactForm({
  contactEmail,
  initialPlan = "undecided",
}: {
  contactEmail: string;
  initialPlan?: string;
}) {
  const safeInitialPlan = consultationPlans.some((plan) => plan.value === initialPlan)
    ? initialPlan
    : "undecided";
  const [status, setStatus] = useState<Status>("idle");
  const [isDemoResult, setIsDemoResult] = useState(true);
  const [errors, setErrors] = useState<FormErrors>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const values = {
      name: String(data.get("name") ?? "").trim(),
      businessName: String(data.get("businessName") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      prefecture: String(data.get("prefecture") ?? "").trim(),
      industry: String(data.get("industry") ?? "").trim(),
      hasWebsite: String(data.get("hasWebsite") ?? "").trim(),
      inquiryType: String(data.get("inquiryType") ?? "").trim(),
      plan: String(data.get("plan") ?? "").trim(),
      consultationMethod: String(data.get("consultationMethod") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      consent: data.get("consent") === "on",
      website: String(data.get("website") ?? "").trim(),
    };

    const nextErrors: FormErrors = {};
    if (!values.name) nextErrors.name = "お名前を入力してください。";
    else if (values.name.length > 100) nextErrors.name = "お名前は100文字以内で入力してください。";
    if (values.businessName.length > 120) {
      nextErrors.businessName = "事業者名は120文字以内で入力してください。";
    }
    if (!values.email) nextErrors.email = "メールアドレスを入力してください。";
    else if (!emailPattern.test(values.email)) {
      nextErrors.email = "メールアドレスの形式が正しくありません。";
    } else if (values.email.length > 254) {
      nextErrors.email = "メールアドレスは254文字以内で入力してください。";
    }
    if (values.phone.length > 30) nextErrors.phone = "電話番号は30文字以内で入力してください。";
    if (values.prefecture.length > 50) {
      nextErrors.prefecture = "所在地は50文字以内で入力してください。";
    }
    if (values.industry.length > 80) nextErrors.industry = "業種は80文字以内で入力してください。";
    if (
      !officialInquiryTypes.includes(
        values.inquiryType as (typeof officialInquiryTypes)[number],
      )
    ) {
      nextErrors.inquiryType = "ご相談内容を選択してください。";
    }
    if (!consultationPlans.some((plan) => plan.value === values.plan)) {
      nextErrors.plan = "希望プランを選択してください。";
    }
    if (
      values.consultationMethod &&
      !consultationMethods.includes(
        values.consultationMethod as (typeof consultationMethods)[number],
      )
    ) {
      nextErrors.consultationMethod = "相談方法を選択してください。";
    }
    if (!values.message) nextErrors.message = "お問い合わせ内容を入力してください。";
    else if (values.message.length > 5000) {
      nextErrors.message = "お問い合わせ内容は5,000文字以内で入力してください。";
    }
    if (!values.consent) nextErrors.consent = "個人情報の取り扱いへの同意が必要です。";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, formType: "official" }),
      });
      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string; demo?: boolean }
        | null;

      if (response.ok && result?.ok) {
        form.reset();
        setIsDemoResult(result.demo !== false);
        setStatus("success");
        return;
      }
      setStatus(result?.error === "not_configured" ? "unavailable" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-emerald-300 bg-emerald-50 p-6 text-emerald-950"
      >
        <p className="font-bold">
          {isDemoResult ? "デモフォームの入力確認が完了しました。" : "お問い合わせを受け付けました。"}
        </p>
        <p className="mt-2 text-sm leading-relaxed">
          {isDemoResult
            ? "このデモでは内容を保存・送信していません。正式公開後の送信先と運用手順を確認してから有効化します。"
            : "内容を確認のうえ、担当者より折り返しご連絡します。"}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-950">
        デモのため、入力内容は保存・送信されません。実在の個人情報は入力しないでください。
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="お名前" name="name" required error={errors.name}>
          <input
            id="official-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={100}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "official-name-error" : undefined}
            className={inputClass}
          />
        </Field>
        <Field
          label="事業者名・屋号"
          name="businessName"
          error={errors.businessName}
        >
          <input
            id="official-businessName"
            name="businessName"
            type="text"
            autoComplete="organization"
            maxLength={120}
            aria-invalid={Boolean(errors.businessName)}
            aria-describedby={
              errors.businessName ? "official-businessName-error" : undefined
            }
            className={inputClass}
          />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="メールアドレス" name="email" required error={errors.email}>
          <input
            id="official-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            maxLength={254}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "official-email-error" : undefined}
            className={inputClass}
          />
        </Field>
        <Field label="電話番号" name="phone" error={errors.phone}>
          <input
            id="official-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            maxLength={30}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "official-phone-error" : undefined}
            className={inputClass}
          />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="都道府県・所在地" name="prefecture" error={errors.prefecture}>
          <input
            id="official-prefecture"
            name="prefecture"
            type="text"
            autoComplete="address-level1"
            maxLength={50}
            placeholder="例：三重県名張市"
            aria-invalid={Boolean(errors.prefecture)}
            aria-describedby={
              errors.prefecture ? "official-prefecture-error" : undefined
            }
            className={inputClass}
          />
        </Field>
        <Field label="業種" name="industry" error={errors.industry}>
          <input
            id="official-industry"
            name="industry"
            type="text"
            maxLength={80}
            placeholder="例：工務店、美容室、士業"
            aria-invalid={Boolean(errors.industry)}
            aria-describedby={errors.industry ? "official-industry-error" : undefined}
            className={inputClass}
          />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label="現在のホームページ"
          name="hasWebsite"
          error={errors.hasWebsite}
        >
          <select
            id="official-hasWebsite"
            name="hasWebsite"
            defaultValue=""
            className={inputClass}
          >
            <option value="">選択してください</option>
            <option value="none">持っていない</option>
            <option value="exists">持っている</option>
            <option value="renewal">持っているがリニューアルしたい</option>
          </select>
        </Field>

        <Field
          label="希望する相談内容"
          name="inquiryType"
          required
          error={errors.inquiryType}
        >
          <select
            id="official-inquiryType"
            name="inquiryType"
            defaultValue=""
            aria-invalid={Boolean(errors.inquiryType)}
            aria-describedby={
              errors.inquiryType ? "official-inquiryType-error" : undefined
            }
            className={inputClass}
          >
            <option value="" disabled>
              選択してください
            </option>
            {officialInquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="希望プラン" name="plan" required error={errors.plan}>
          <select
            id="official-plan"
            name="plan"
            defaultValue={safeInitialPlan}
            aria-invalid={Boolean(errors.plan)}
            aria-describedby={errors.plan ? "official-plan-error" : undefined}
            className={inputClass}
          >
            {consultationPlans.map((plan) => (
              <option key={plan.value} value={plan.value}>
                {plan.label}
              </option>
            ))}
          </select>
        </Field>

        <Field
          label="相談方法"
          name="consultationMethod"
          error={errors.consultationMethod}
        >
          <select
            id="official-consultationMethod"
            name="consultationMethod"
            defaultValue=""
            aria-invalid={Boolean(errors.consultationMethod)}
            aria-describedby={
              errors.consultationMethod
                ? "official-consultationMethod-error"
                : undefined
            }
            className={inputClass}
          >
            <option value="">選択してください</option>
            {consultationMethods.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        label="お問い合わせ内容"
        name="message"
        required
        error={errors.message}
      >
        <textarea
          id="official-message"
          name="message"
          rows={7}
          maxLength={5000}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "official-message-error" : "official-message-help"
          }
          className={inputClass}
        />
        <p id="official-message-help" className="mt-1 text-xs text-slate-500">
          ご相談内容や現在お困りのことを、分かる範囲でご記入ください。
        </p>
      </Field>

      <div
        className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="official-website">ウェブサイト</label>
        <input
          id="official-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label
          htmlFor="official-consent"
          className="flex min-h-11 cursor-pointer items-start gap-3 rounded-lg py-2 text-sm leading-relaxed text-slate-700 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-orange-800"
        >
          <input
            id="official-consent"
            name="consent"
            type="checkbox"
            className="mt-0.5 h-5 w-5 shrink-0 accent-orange-700"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={
              errors.consent ? "official-consent-error" : undefined
            }
          />
          <span>
            <Link
              href="/privacy"
              className="font-medium text-orange-800 underline underline-offset-2"
            >
              個人情報の取り扱い
            </Link>
            に同意します。
          </span>
        </label>
        {errors.consent ? (
          <p
            id="official-consent-error"
            role="alert"
            className="mt-1 text-sm text-red-700"
          >
            {errors.consent}
          </p>
        ) : null}
      </div>

      {status === "unavailable" || status === "error" ? (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-relaxed text-red-900"
        >
          <p className="font-bold">
            {status === "unavailable"
              ? "現在フォーム送信の準備中です。"
              : "入力確認に失敗しました。時間をおいて再度お試しください。"}
          </p>
          <p className="mt-1">
            正式公開後のお問い合わせ先は
            <span className="mx-1 font-bold">{contactEmail}</span>
            を予定しています。
          </p>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-orange-700 px-8 py-3 font-bold text-white transition hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800 disabled:cursor-wait disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "確認中…" : "デモフォームを確認する"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  required,
  error,
  children,
}: {
  label: string;
  name: FieldName;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={`official-${name}`}
        className="mb-2 block text-sm font-bold text-slate-800"
      >
        {label}
        {required ? (
          <span className="ml-2 rounded bg-red-100 px-1.5 py-0.5 text-xs text-red-800">
            必須
          </span>
        ) : (
          <span className="ml-2 text-xs font-normal text-slate-500">任意</span>
        )}
      </label>
      {children}
      {error ? (
        <p
          id={`official-${name}-error`}
          role="alert"
          className="mt-1 text-sm text-red-700"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
