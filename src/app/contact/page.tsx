import type { Metadata } from "next";
import { OfficialContactForm } from "@/components/official/OfficialContactForm";
import { SubpageShell } from "@/components/official/SubpageShell";
import { siteConfig } from "@/config/site";
import { consultationPlans } from "@/data/contact";

export const metadata: Metadata = {
  title: siteConfig.demoMode ? "無料相談デモ" : "無料相談",
  description:
    "ホームページ制作、Web運用、Googleマップ、LINE・SNS、生成AI、業務効率化の無料相談フォームです。",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string | string[] }>;
}) {
  const params = await searchParams;
  const requestedPlan = Array.isArray(params.plan) ? params.plan[0] : params.plan;
  const initialPlan = consultationPlans.some(
    (plan) => plan.value === requestedPlan,
  )
    ? requestedPlan
    : "undecided";
  const isRakurakuSencho = initialPlan?.startsWith("rakuraku-sencho") ?? false;

  return (
    <SubpageShell
      eyebrow="FREE CONSULTATION"
      title={siteConfig.demoMode ? "無料相談デモフォーム" : "無料相談フォーム"}
      description={
        siteConfig.demoMode
          ? "プランが決まっていなくても大丈夫です。このデモでは入力内容を保存・送信しません。実在の個人情報は入力しないでください。"
          : "プランが決まっていなくても大丈夫です。現在のお困りごとやご希望をお聞かせください。"
      }
    >
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
        {isRakurakuSencho ? (
          <div className="mb-6 rounded-3xl border-2 border-sea-blue bg-sea-blue-soft p-6 sm:p-8">
            <h2 className="text-xl font-bold text-sea-navy">
              ラクラク船長のお申し込み・ご相談
            </h2>
            <p className="mt-3 text-base leading-7 text-sea-body">
              下のフォームからご連絡ください。分かる範囲で構いません。
              入力が難しい場合は、お電話でも受け付けています。
            </p>
            <ul className="mt-4 space-y-2 text-base leading-7 text-sea-body">
              <li>・「事業者名・屋号」に船名をご記入ください</li>
              <li>・「現在のホームページ」でHPの有無をお選びください</li>
              <li>
                ・「現在使用中のサービス」に今の予約方法（電話・LINE・Googleカレンダーなど）をご記入ください
              </li>
              <li>
                ・外国人のお客様からの問い合わせがあるかも、あわせてお書きください
              </li>
            </ul>
          </div>
        ) : null}
        <div className="rounded-3xl border border-line-soft bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-10">
        <OfficialContactForm
          contactEmail={siteConfig.email}
          initialPlan={initialPlan}
          demoMode={siteConfig.demoMode}
        />
        </div>
      </div>
    </SubpageShell>
  );
}
