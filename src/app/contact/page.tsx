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
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-10">
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
