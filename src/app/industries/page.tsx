import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Store } from "lucide-react";
import { SubpageShell } from "@/components/official/SubpageShell";
import { industries } from "@/data/business-model";

export const metadata: Metadata = {
  title: "業種別ホームページ制作・Web支援",
  description:
    "工務店、清掃業、美容室、サロン、教室、士業、飲食店など、業種ごとの顧客行動に合わせてホームページとWeb導線を設計します。",
};

export default function IndustriesPage() {
  return (
    <SubpageShell
      eyebrow="BY INDUSTRY"
      title="業種ごとに、伝える順番と問い合わせ導線を変えます"
      description="同じ文章を使い回すのではなく、お客様が比較するときに知りたい情報、安心材料、次の行動を業種別に整理します。"
    >
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.slug}
              className="rounded-2xl border border-line-soft bg-white p-7 shadow-sm"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-cat-cream text-navy">
                <Store className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-xl font-medium">{industry.name}</h2>
              <p className="mt-3 text-sm font-semibold leading-6 text-sky-950">
                {industry.journey}
              </p>
              <ul className="mt-5 space-y-2">
                {industry.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-navy"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-2xl bg-ink p-7 text-white sm:p-10">
          <h2 className="text-2xl font-medium">掲載のない業種もご相談ください</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            地域サービス、小規模不動産、カフェ、小売店、観光・宿泊なども、顧客が知りたい情報と運用体制を確認して構成をご提案します。
          </p>
          <Link
            href="/contact?plan=undecided"
            className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-amber-soft px-6 py-3 font-semibold text-ink"
          >
            自分の業種について相談する
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </SubpageShell>
  );
}
