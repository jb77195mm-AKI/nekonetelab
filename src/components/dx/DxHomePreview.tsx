import Link from "next/link";
import { ArrowRight, Globe2, Layers3, Workflow } from "lucide-react";
import { dxPacks } from "@/data/dx-packs";
import { dxTools, formatPriceRange } from "@/data/dx-tools";
import { industryTemplates } from "@/data/industry-templates";
import { serviceStatusLabels } from "@/data/service-status";

export function DxHomePreview() {
  const inbound = dxTools.find((tool) => tool.slug === "inbound-queue")!;

  return (
    <>
      <section className="border-y border-sky-200 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 rounded-[2rem] bg-sky-950 p-7 text-white sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] text-sky-200">
                <Globe2 className="h-5 w-5" aria-hidden="true" />
                INBOUND FEATURE
              </p>
              <h2 className="mt-4 text-[clamp(2rem,7vw,3.5rem)] font-medium leading-tight">
                外国人観光客を、
                <span className="block text-amber-soft">店頭で迷わせない受付へ</span>
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-sky-100 sm:text-base">
                日本語での受付説明、紙への記入、アプリ登録を求めず、QRコードから利用者の言語で受付できる仕組みを設計します。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/services/dx/tools/inbound-queue"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-sky-950"
                >
                  多言語受付のデモを見る
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact?plan=inbound-queue"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-sky-300 px-6 py-3 font-semibold text-white"
                >
                  インバウンド対応を相談
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-sky-700 bg-sky-900 p-6">
              <p className="text-xs font-medium text-sky-200">{serviceStatusLabels[inbound.status]}</p>
              <h3 className="mt-2 text-xl font-medium">{inbound.name}</h3>
              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-sky-950 p-4">
                  <dt className="text-xs text-sky-300">初期設定費</dt>
                  <dd className="mt-1 text-2xl font-medium">{formatPriceRange(inbound.initialPrice)}</dd>
                </div>
                <div className="rounded-2xl bg-sky-950 p-4">
                  <dt className="text-xs text-sky-300">月額利用料</dt>
                  <dd className="mt-1 text-2xl font-medium">{formatPriceRange(inbound.monthlyPrice)}</dd>
                </div>
              </dl>
              <ul className="mt-5 grid gap-2 text-sm text-sky-100 sm:grid-cols-2">
                {["アプリ不要", "会員登録不要", "標準10言語", "1店舗・受付列1つ"].map((item) => (
                  <li key={item} className="rounded-xl bg-sky-800 px-3 py-2 font-semibold">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-light py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-medium tracking-[0.18em] text-navy">INDUSTRY DX PACKS</p>
          <div className="mt-3 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-[clamp(2rem,7vw,3rem)] font-medium leading-tight">
                今使っている仕組みを残す、
                <span className="block text-sky-900">3つの業種別DXパック</span>
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
                予約・POS・会計・LINEなどをできるだけ残し、面倒な部分へAI・自動化・独自管理画面を追加します。
              </p>
            </div>
            <Link
              href="/services/dx"
              className="inline-flex min-h-12 w-fit items-center gap-2 rounded-sm bg-ink px-6 py-3 font-semibold text-white"
            >
              業種別DXを詳しく見る
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {dxPacks.map((pack, index) => (
              <article key={pack.slug} className="flex h-full flex-col rounded-2xl border border-line-soft bg-white p-6 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-900">
                  {index === 0 ? <Layers3 className="h-5 w-5" aria-hidden="true" /> : <Workflow className="h-5 w-5" aria-hidden="true" />}
                </span>
                <p className="mt-5 text-xs font-medium text-sky-900">{serviceStatusLabels[pack.status]}</p>
                <h3 className="mt-2 text-xl font-medium">{pack.name}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-navy">{pack.catchphrase}</p>
                <p className="mt-4 text-sm leading-7 text-muted">{pack.description}</p>
                <div className="mt-5 rounded-2xl bg-cream-light p-4 text-sm">
                  <p className="font-medium">料金目安</p>
                  <p className="mt-1 text-muted">
                    初期 {formatPriceRange(pack.initialPrice)}
                    <br />
                    月額 {formatPriceRange(pack.monthlyPrice)}
                  </p>
                </div>
                <Link
                  href={`/services/dx/packs/${pack.slug}`}
                  className="mt-auto inline-flex min-h-12 items-center gap-2 pt-6 font-semibold text-sky-900 underline-offset-4 hover:underline"
                >
                  詳細を見る
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-line-soft bg-white p-6 sm:p-8">
            <p className="font-medium">12業種の対応イメージ</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {industryTemplates.map((industry) => (
                <span key={industry.name} className="rounded-full border border-line-soft bg-cream-light px-3 py-2 text-xs font-semibold text-muted">
                  {industry.name}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-muted">
              固定料金の商品ではなく、対応可能な業種例です。現在の業務と既存ツールを確認し、主力DXパックまたは個別設計をご提案します。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
