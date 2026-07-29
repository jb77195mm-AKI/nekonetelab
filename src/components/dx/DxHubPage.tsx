import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Check,
  CircleHelp,
  Database,
  Layers3,
  ShieldCheck,
  UserCheck,
  Workflow,
} from "lucide-react";
import { DxHomePreview } from "@/components/dx/DxHomePreview";
import { siteConfig } from "@/config/site";
import { dxFaqs } from "@/data/faqs";
import { dxPackComparisonRows, dxPacks } from "@/data/dx-packs";
import { dxTools, formatPriceRange } from "@/data/dx-tools";
import { industryTemplates } from "@/data/industry-templates";
import { serviceStatusLabels } from "@/data/service-status";
import { dxIntroductionFlow, supportRules } from "@/data/support-rules";

const existingTools = [
  "予約システム",
  "POSレジ",
  "会計ソフト",
  "Google Workspace",
  "LINE公式アカウント",
  "Googleビジネスプロフィール",
  "Instagram",
  "Excel・スプレッドシート",
  "業種専用システム",
];

const automationLayer = [
  "n8n・Make",
  "AI API",
  "Google Workspace連携",
  "LINE連携",
  "API・Webhook",
  "データ集計",
  "通知",
  "レポート作成",
];

const originalLayer = [
  "顧客別ダッシュボード",
  "AI文章の確認・承認",
  "今日やること一覧",
  "対応漏れ通知",
  "自動処理履歴",
  "エラー・確認待ち一覧",
  "月次成果表示",
  "業種別ルール設定",
];

const aiRoles = ["文章下書き", "分類", "要約", "データ集計", "候補作成", "通知", "確認対象の抽出"];
const humanRoles = ["顧客への送信", "見積金額", "契約条件", "発注数量", "シフト確定", "低評価口コミ返信", "法務・労務・医療判断"];

export function DxHubPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dxFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="bg-white text-slate-950">
      {!siteConfig.demoMode ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
          }}
        />
      ) : null}

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f0f9ff_0%,#ffffff_52%,#fff7ed_100%)]">
        <div aria-hidden="true" className="absolute -right-28 -top-28 h-96 w-96 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-black text-sky-950">
              <Layers3 className="h-4 w-4" aria-hidden="true" />
              小規模事業者向け・業種別DX
            </p>
            <h1 className="mt-6 text-[clamp(2.5rem,9vw,4.6rem)] font-black leading-[1.08] tracking-tight">
              今の業務を変えすぎず、
              <span className="mt-2 block text-sky-900">面倒な部分だけをDX</span>
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700 sm:text-lg">
              予約・POS・会計・LINEなど、今使っているシステムはそのまま。AI・自動化・独自管理画面を必要な部分だけ追加します。
            </p>
            <p className="mt-4 max-w-3xl text-sm font-bold leading-7 text-slate-800">
              最初から大規模なシステムを導入せず、効果が確認しやすい業務から小さく始められます。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/contact?plan=dx-consultation" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-900 px-7 py-3 font-bold text-white">
                無料で相談する
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a href="#packs" className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-slate-800 bg-white px-7 py-3 font-bold">
                3つのDXパックを見る
              </a>
              <Link href="/services/dx/tools/inbound-queue" className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-sky-800 bg-white px-7 py-3 font-bold text-sky-900">
                多言語受付のデモを見る
              </Link>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white bg-white/95 p-6 shadow-2xl shadow-slate-900/10 sm:p-8">
            <p className="text-xs font-black tracking-[0.16em] text-orange-800">CORE MESSAGE</p>
            <h2 className="mt-3 text-2xl font-black">すべてを入れ替えないDX</h2>
            <div className="mt-6 space-y-3">
              {[
                ["01", "既存ツールを確認", "使い慣れた予約・POS・会計・LINEをできるだけ残す"],
                ["02", "必要部分だけ追加", "AI・自動化・独自画面を課題に合わせて組み合わせる"],
                ["03", "人が確認して運用", "AIの下書き・候補・集計を担当者が確認する"],
              ].map(([step, title, text]) => (
                <div key={step} className="grid grid-cols-[2.5rem_1fr] gap-3 rounded-2xl bg-slate-50 p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-900 text-xs font-black text-white">{step}</span>
                  <div>
                    <h3 className="font-black">{title}</h3>
                    <p className="mt-1 text-xs leading-6 text-slate-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle eyebrow="KEEP & ADD" title="今あるものを活かし、必要な層だけを重ねます" inverted />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <LayerCard icon={Database} step="1" title="既存ツール" items={existingTools} />
            <LayerCard icon={Workflow} step="2" title="AI・自動化" items={automationLayer} />
            <LayerCard icon={Layers3} step="3" title="猫の手独自機能" items={originalLayer} />
          </div>
          <p className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-5 text-sm leading-7 text-slate-300">
            既存システムを活かすことで、導入時の負担を抑え、現場で使い続けやすい仕組みを目指します。連携方法は現在のサービスを確認してからご提案します。
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle
            eyebrow="STANDALONE DX TOOLS"
            title="特定の業務から始める、3つの単体DXツール"
            description="標準化できる小さな範囲を基本料金に含め、複雑なルール、外部連携、複数店舗、運用代行はオプションまたは個別見積もりとします。"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {dxTools.map((tool) => (
              <article key={tool.slug} className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="w-fit rounded-full bg-sky-100 px-3 py-1 text-xs font-black text-sky-950">{serviceStatusLabels[tool.status]}</span>
                <p className="mt-5 text-xs font-black tracking-[0.12em] text-orange-800">{tool.category}</p>
                <h3 className="mt-2 text-xl font-black">{tool.name}</h3>
                <p className="mt-3 text-sm font-bold leading-6 text-sky-900">{tool.catchphrase}</p>
                <ul className="mt-5 space-y-2">
                  {tool.features.slice(0, 5).map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm leading-6 text-slate-700">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-sky-800" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm font-bold">
                  初期 {formatPriceRange(tool.initialPrice)}
                  <br />
                  月額 {formatPriceRange(tool.monthlyPrice)}
                </div>
                <Link href={`/services/dx/tools/${tool.slug}`} className="mt-auto inline-flex min-h-12 items-center gap-2 pt-6 font-bold text-sky-900 underline-offset-4 hover:underline">
                  標準範囲とオプションを見る
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DxHomePreview />

      <section id="packs" className="scroll-mt-24 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle
            eyebrow="DX PACK COMPARISON"
            title="3つの主力DXパックを比較"
            description="単体ツールではなく、業務フロー整理、既存システムとの接続、顧客別設定、試験運用、保守を含む導入支援商品です。"
          />
          <div className="mt-10 hidden overflow-x-auto rounded-3xl border border-slate-200 md:block">
            <table className="min-w-[52rem] w-full text-left text-sm">
              <caption className="sr-only">業種別DXパック3商品の比較</caption>
              <thead className="bg-sky-950 text-white">
                <tr>
                  <th scope="col" className="p-4">項目</th>
                  {dxPacks.map((pack) => <th scope="col" key={pack.slug} className="p-4">{pack.shortName}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {dxPackComparisonRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="bg-slate-50 p-4 font-black">{row.label}</th>
                    {row.values.map((value, index) => <td key={dxPacks[index].slug} className="p-4 leading-6 text-slate-700">{value}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10 grid gap-5 md:hidden">
            {dxPacks.map((pack, packIndex) => (
              <article key={pack.slug} className="rounded-3xl border border-slate-200 p-5">
                <h3 className="text-lg font-black">{pack.name}</h3>
                <dl className="mt-4 divide-y divide-slate-200">
                  {dxPackComparisonRows.map((row) => (
                    <div key={row.label} className="grid grid-cols-[6.5rem_1fr] gap-3 py-3 text-sm">
                      <dt className="font-bold text-slate-700">{row.label}</dt>
                      <dd className="leading-6 text-slate-600">{row.values[packIndex]}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
          <p className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950">
            掲載料金は標準的な導入内容を想定した税込の目安です。業務フロー、データ形式、店舗数、スタッフ数、外部連携によって料金が変わります。初期費用の分割払いにも対応しています。
          </p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle eyebrow="COMMON PLATFORM" title="業種ごとに、すべてを別々に作るわけではありません" description="アカウント管理、タスク管理、AI文章の確認、通知、履歴、レポートなどを共通基盤として整備し、業種ごとに必要な機能を組み合わせます。" />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[["70%", "共通基盤", "アカウント・タスク・承認・通知・履歴・レポート"], ["20%", "業種別テンプレート", "再来店・案件管理・在庫発注などの業種別設計"], ["10%", "お客様別設定", "ルール・権限・項目・既存サービスへの合わせ込み"]].map(([ratio, title, text]) => (
              <article key={title} className="rounded-3xl border border-slate-200 bg-white p-6">
                <p className="text-4xl font-black text-sky-900">{ratio}</p>
                <h3 className="mt-3 text-lg font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-500">※ 割合は設計方針の目安です。業種・規模・既存システムによって変わります。</p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle eyebrow="HUMAN IN THE LOOP" title="AIにすべてを任せない設計" description="重要な処理には承認工程を設け、AIの出力・自動処理履歴・エラー・確認待ちを人が確認できる形を導入内容に応じて設計します。" />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <RoleCard icon={Bot} title="AIが担当" items={aiRoles} tone="sky" />
            <RoleCard icon={UserCheck} title="人間が担当" items={humanRoles} tone="orange" />
          </div>
          <div className="mt-6 rounded-3xl border border-slate-200 p-6">
            <h3 className="font-black">安全な運用のために</h3>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700 sm:grid-cols-2">
              {["AI文章は送信前に確認可能", "自動処理履歴を確認", "エラー・確認待ちを表示", "権限を設定", "顧客ごとにデータを分離", "必要以上の個人情報をAIへ送らない"].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-6 text-slate-500">未実装の機能は、導入内容に応じて設計します。</p>
          </div>
        </div>
      </section>

      <section className="bg-sky-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle eyebrow="INTRODUCTION FLOW" title="小さく試し、人が確認しながら広げます" inverted />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dxIntroductionFlow.map(([title, description], index) => (
              <li key={title} className="rounded-3xl border border-sky-800 bg-sky-900 p-6">
                <span className="text-xs font-black tracking-[0.16em] text-orange-300">STEP {index + 1}</span>
                <h3 className="mt-3 text-lg font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-sky-100">{description}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 rounded-2xl bg-sky-900 p-5 text-sm font-bold leading-7 text-sky-100">
            導入内容や連携サービスによって期間が異なるため、ヒアリング後にご案内します。
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle eyebrow="12 INDUSTRY EXAMPLES" title="対応可能な12業種の例" description="固定料金の独立商品ではありません。主力3パックまたは個別見積もりへつなぎ、業務と既存ツールに合わせて調整します。" />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {industryTemplates.map((industry) => (
              <article key={industry.name} className="flex h-full flex-col rounded-3xl border border-slate-200 p-5">
                <h3 className="text-lg font-black">{industry.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{industry.problems}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {industry.features.map((feature) => <li key={feature} className="rounded-full bg-sky-50 px-3 py-1.5 text-xs font-bold text-sky-950">{feature}</li>)}
                </ul>
                <p className="mt-5 text-xs font-black text-orange-800">関連：{industry.relatedPack}</p>
                <Link href={industry.relatedPackSlug ? `/services/dx/packs/${industry.relatedPackSlug}` : `/contact?plan=dx-consultation`} className="mt-auto inline-flex min-h-11 items-center gap-2 pt-4 text-sm font-bold text-sky-900 underline-offset-4 hover:underline">
                  相談・詳細を見る
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-orange-50/60 py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-black">標準サポート</h2>
            <ul className="mt-5 space-y-3">
              {supportRules.included.map((item) => <li key={item} className="flex items-start gap-2 text-sm leading-6 text-slate-700"><Check className="mt-1 h-4 w-4 shrink-0 text-emerald-700" aria-hidden="true" />{item}</li>)}
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-black">正式な受付と対応時間</h2>
            <p className="mt-4 text-sm leading-7 text-slate-700">正式な依頼は専用フォームまたはメールで受け付けます。</p>
            <dl className="mt-5 grid gap-3 text-sm">
              {[supportRules.businessHours, supportRules.holidays, supportRules.normalReply, supportRules.normalChange, supportRules.urgent].map((item) => <div key={item} className="rounded-xl bg-slate-50 px-4 py-3 font-bold">{item}</div>)}
            </dl>
            <p className="mt-5 text-xs leading-6 text-slate-500">{supportRules.notice}</p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionTitle eyebrow="FAQ" title="業種別DXのよくあるご質問" />
          <div className="mt-10 space-y-3">
            {dxFaqs.map((item) => (
              <details key={item.question} className="group rounded-2xl border border-slate-200 bg-white p-5">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-800">
                  <span className="flex items-start gap-3">
                    <CircleHelp className="mt-0.5 h-5 w-5 shrink-0 text-sky-800" aria-hidden="true" />
                    {item.question}
                  </span>
                  <span aria-hidden="true" className="text-xl text-sky-800 transition group-open:rotate-45">＋</span>
                </summary>
                <p className="mt-3 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs font-black tracking-[0.18em] text-orange-300">FREE CONSULTATION</p>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">今の業務と既存ツールから、一緒に整理します。</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300">
            プランが決まっていなくても大丈夫です。困っている業務、店舗数、現在使っているサービスを専用フォームからお知らせください。
          </p>
          <Link href="/contact?plan=dx-consultation" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-slate-950">
            無料相談フォームへ
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function SectionTitle({ eyebrow, title, description, inverted = false }: { eyebrow: string; title: string; description?: string; inverted?: boolean }) {
  return (
    <div className="max-w-3xl">
      <p className={`text-xs font-black tracking-[0.18em] ${inverted ? "text-orange-300" : "text-orange-800"}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-[clamp(2rem,7vw,3rem)] font-black leading-tight ${inverted ? "text-white" : "text-slate-950"}`}>{title}</h2>
      {description ? <p className={`mt-4 text-sm leading-7 sm:text-base ${inverted ? "text-slate-300" : "text-slate-600"}`}>{description}</p> : null}
    </div>
  );
}

function LayerCard({ icon: Icon, step, title, items }: { icon: typeof Database; step: string; title: string; items: string[] }) {
  return (
    <article className="rounded-3xl border border-slate-700 bg-slate-900 p-6">
      <div className="flex items-center justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-800 text-white"><Icon className="h-5 w-5" aria-hidden="true" /></span>
        <span className="text-sm font-black text-orange-300">LAYER {step}</span>
      </div>
      <h3 className="mt-5 text-xl font-black">{title}</h3>
      <ul className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => <li key={item} className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs font-bold text-slate-300">{item}</li>)}
      </ul>
    </article>
  );
}

function RoleCard({ icon: Icon, title, items, tone }: { icon: typeof Bot; title: string; items: string[]; tone: "sky" | "orange" }) {
  const styles = tone === "sky" ? "border-sky-200 bg-sky-50 text-sky-900" : "border-orange-200 bg-orange-50 text-orange-900";
  return (
    <article className={`rounded-3xl border p-6 sm:p-8 ${styles}`}>
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white"><Icon className="h-6 w-6" aria-hidden="true" /></span>
      <h3 className="mt-5 text-2xl font-black">{title}</h3>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map((item) => <li key={item} className="rounded-xl bg-white px-4 py-3 text-sm font-bold">{item}</li>)}
      </ul>
    </article>
  );
}
