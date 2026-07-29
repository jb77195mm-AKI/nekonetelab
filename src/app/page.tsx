import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Camera,
  Check,
  CheckCircle2,
  CircleHelp,
  Globe2,
  Handshake,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Store,
  Wrench,
} from "lucide-react";
import { PlaceholderImage } from "@/components/common/PlaceholderImage";
import { DxHomePreview } from "@/components/dx/DxHomePreview";
import { OfficialContactForm } from "@/components/official/OfficialContactForm";
import { OfficialFaq } from "@/components/official/OfficialFaq";
import { OfficialHeader } from "@/components/official/OfficialHeader";
import { SolutionCard } from "@/components/solutions/SolutionCard";
import { siteConfig } from "@/config/site";
import { allSites } from "@/data";
import {
  additionalCosts,
  businessModel,
  comparisonRows,
  faqItems,
  formatYen,
  homepagePlans,
  industries,
  outcomes,
  painPoints,
  productionComparisonRows,
  productionFlow,
  productionFaqItems,
  reasons,
  serviceLayers,
  supportPlans,
  type HomepagePlan,
} from "@/data/business-model";
import { businessActivities } from "@/data/official";
import { solutions } from "@/data/solutions";

const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

const mainPlan = homepagePlans.find((plan) => plan.slug === "web-start")!;

export default function OfficialHomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.businessName,
    description: siteConfig.description,
    email: siteConfig.email,
    url: siteConfig.publicUrl,
    telephone: siteConfig.phone,
    address: siteConfig.address,
    areaServed: ["名張市", "伊賀市", "日本全国（オンライン）"],
    sameAs: [siteConfig.instagramUrl, siteConfig.xUrl, siteConfig.lineUrl].filter(
      Boolean,
    ),
  };

  return (
    <div id="top" className="bg-white text-slate-950">
      {!siteConfig.demoMode ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
      ) : null}

      <DemoBanner />
      <OfficialHeader
        businessName={siteConfig.businessName}
        instagramUrl={siteConfig.instagramUrl}
        xUrl={siteConfig.xUrl}
        lineUrl={siteConfig.lineUrl}
      />

      <main>
        <section
          id="homepage"
          className="scroll-mt-28 relative overflow-hidden bg-[linear-gradient(135deg,#fff7ed_0%,#ffffff_52%,#f0f9ff_100%)]"
        >
          <div
            aria-hidden="true"
            className="absolute -right-28 -top-28 h-96 w-96 rounded-full bg-orange-200/45 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-sky-200/45 blur-3xl"
          />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-xs font-bold text-orange-950 shadow-sm">
                <Sparkles className="h-4 w-4 text-orange-700" aria-hidden="true" />
                小規模事業者のための、月額制Web・AI担当
              </p>
              <h1 className="mt-6 text-[clamp(2.5rem,10vw,4.8rem)] font-black leading-[1.08] tracking-tight">
                ホームページ
                <span className="mt-1 block text-orange-800">制作費0円</span>
              </h1>
              <p className="mt-6 max-w-2xl text-[clamp(1.2rem,3vw,1.7rem)] font-black leading-snug text-slate-900">
                あなたの会社の
                <span className="text-sky-900">Web・AI担当</span>
                になります。
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
                {businessModel.heroDescription}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact?plan=web-start"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-orange-700 px-7 py-3 font-bold text-white shadow-lg shadow-orange-900/10 transition hover:bg-orange-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800"
                >
                  制作費0円で無料相談する
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href="#plans"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-slate-800 bg-white/70 px-7 py-3 font-bold transition hover:bg-slate-950 hover:text-white"
                >
                  3つのプランを見る
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "名張市・伊賀市は対面相談可",
                  "全国オンライン対応",
                  "小規模事業者・個人事業主向け",
                  "公開後の更新・保守にも対応",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white bg-white/90 p-6 shadow-2xl shadow-slate-900/10 backdrop-blur sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-black tracking-[0.16em] text-orange-800">
                      WEB START
                    </p>
                    <h2 className="mt-2 text-xl font-black">{mainPlan.name}</h2>
                  </div>
                  <span className="rounded-full bg-orange-700 px-3 py-1.5 text-xs font-black text-white">
                    主力プラン
                  </span>
                </div>
                <div className="mt-6 rounded-2xl bg-slate-950 p-6 text-white">
                  <p className="text-sm font-bold text-orange-300">初期制作費</p>
                  <p className="mt-1 flex items-baseline gap-2 tabular-nums">
                    <span className="text-6xl font-black">0</span>
                    <span className="text-xl font-black">円</span>
                  </p>
                  <div className="mt-5 grid gap-3 border-t border-slate-700 pt-5 sm:grid-cols-2">
                    <div>
                      <p className="text-xs text-slate-400">月額</p>
                      <p className="mt-1 text-xl font-black">
                        {formatYen(mainPlan.monthlyPrice)}（税込）
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">最低利用期間</p>
                      <p className="mt-1 text-xl font-black">
                        {mainPlan.minimumTermMonths}か月
                      </p>
                    </div>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {[
                    "制作・公開・基本SEO",
                    "サーバー・SSL・バックアップ",
                    "月1回・15分以内の軽微な更新",
                    "公開後のWeb・AI相談窓口",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm font-medium text-slate-700"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-orange-700"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium leading-6 text-amber-950">
                  24か月未満の中途解約金は、残契約月数×9,800円（税込）です。24か月経過後の解約金はありません。解約は次回決済日の10日前までにお申し出ください。
                </p>
              </div>
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-3 grid h-16 w-16 rotate-6 place-items-center rounded-[42%_58%_48%_52%] bg-orange-700 text-2xl text-white shadow-lg"
              >
                🐾
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-950 py-8 text-white">
          <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-3 sm:px-6">
            {[
              ["名張市・伊賀市", "内容・日程に応じて対面相談"],
              ["全国", "オンラインで相談から運用まで"],
              ["一つの窓口", "ホームページ・Web集客・AI"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-700 bg-slate-900 px-5 py-4"
              >
                <p className="text-sm font-black text-orange-300">{title}</p>
                <p className="mt-1 text-sm text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <SectionHeading
            eyebrow="YOUR CHALLENGES"
            title="こんなお悩みを、一つずつ整理します"
            description="何を頼めばよいか決まっていなくても大丈夫です。今の事業に必要な優先順位から一緒に考えます。"
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {painPoints.map((point) => (
              <div
                key={point}
                className="flex min-h-28 items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <CircleHelp
                  className="mt-0.5 h-5 w-5 shrink-0 text-orange-700"
                  aria-hidden="true"
                />
                <p className="text-sm font-bold leading-6 text-slate-800">{point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-orange-50/60 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="BEYOND LAUNCH"
                title="ホームページを作るだけではありません"
                description="大切なのは、公開後に情報を更新し、Googleマップ、LINE、SNSとつなぎながら、問い合わせや来店につながる状態を育てることです。"
              />
              <p className="mt-6 text-sm leading-7 text-slate-700">
                猫の手デジタルラボでは、社内にWeb担当者やAI担当者がいない小規模事業者のために、制作後の運用、口コミ対応、生成AI活用、業務効率化まで継続して相談できる窓口を整えます。
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="flex items-start gap-3 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm"
                >
                  <Check
                    className="mt-1 h-4 w-4 shrink-0 text-orange-800"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-bold leading-6 text-slate-800">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="services"
          className="scroll-mt-28 mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28"
        >
          <SectionHeading
            eyebrow="THREE LAYERS"
            title="制作から運用、AI活用まで3段階で支援"
            description="最初からすべてを導入する必要はありません。ホームページを入口に、必要な段階へ少しずつ広げます。"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {serviceLayers.map((layer, index) => (
              <article
                key={layer.title}
                className={`relative overflow-hidden rounded-3xl border p-7 ${
                  index === 0
                    ? "border-orange-300 bg-orange-50"
                    : index === 1
                      ? "border-sky-200 bg-sky-50"
                      : "border-slate-700 bg-slate-950 text-white"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`text-4xl font-black ${
                      index === 2 ? "text-slate-700" : "text-slate-200"
                    }`}
                  >
                    {layer.step}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-black ${
                      index === 0
                        ? "bg-orange-700 text-white"
                        : index === 1
                          ? "bg-sky-900 text-white"
                          : "bg-orange-300 text-slate-950"
                    }`}
                  >
                    {layer.label}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-black">{layer.title}</h3>
                <p
                  className={`mt-4 text-sm leading-7 ${
                    index === 2 ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {layer.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {layer.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2 text-sm font-medium ${
                        index === 2 ? "text-slate-200" : "text-slate-700"
                      }`}
                    >
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          index === 2 ? "text-orange-300" : "text-orange-700"
                        }`}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-slate-800 px-6 py-3 font-bold hover:bg-slate-950 hover:text-white"
            >
              サービス範囲を詳しく見る
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-6 py-3 font-bold text-sky-950 hover:bg-sky-100"
            >
              業務システムを見る
            </Link>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-black tracking-[0.18em] text-orange-300">
                YOUR EXTERNAL DIGITAL TEAM
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                Web担当者を一人採用する代わりに、
                <span className="mt-2 block text-orange-300">必要な業務だけ外部へ</span>
              </h2>
              <p className="mt-6 text-sm leading-7 text-slate-300 sm:text-base">
                ホームページ、Googleマップ、LINE、SNS、生成AIを別々の会社へ依頼すると、管理も相談も複雑になります。必要な範囲を一つの窓口へまとめ、公開後も同じ担当へ相談できる状態をつくります。
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["相談窓口を一本化", MessageCircle],
                ["必要な業務から依頼", Wrench],
                ["公開後も同じ窓口", Handshake],
                ["AI・自動化へ拡張", Bot],
              ].map(([title, Icon]) => {
                const ItemIcon = Icon as typeof MessageCircle;
                return (
                  <div
                    key={title as string}
                    className="rounded-2xl border border-slate-700 bg-slate-900 p-6"
                  >
                    <ItemIcon
                      className="h-7 w-7 text-orange-300"
                      aria-hidden="true"
                    />
                    <p className="mt-4 font-black">{title as string}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="LOCAL & ONLINE"
              title="名張市・伊賀市を拠点に、全国オンライン対応"
              description="地域密着の安心感と、全国から相談できるオンライン体制を両立します。"
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <RegionCard
                icon={MapPin}
                title="名張市・伊賀市周辺"
                label="対面相談可"
                description="内容や日程に応じて、対面相談や現地状況を踏まえた提案に対応します。訪問範囲・日程・費用は要相談です。"
                items={[
                  "店舗・事業内容を踏まえた相談",
                  "地域集客・Googleマップ相談",
                  "写真・素材準備の相談",
                  "継続的な伴走支援",
                ]}
              />
              <RegionCard
                icon={Globe2}
                title="全国"
                label="オンライン完結"
                description="ZoomまたはGoogle Meet、チャット、プレビューページを使い、相談から制作、公開、更新までオンラインで進めます。"
                items={[
                  "全国どこからでも相談可能",
                  "素材をオンラインで提出",
                  "プレビューで修正確認",
                  "公開後の更新・AI相談",
                ]}
              />
            </div>
          </div>
        </section>

        <section
          id="industries"
          className="scroll-mt-28 border-y border-slate-200 bg-slate-50 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="BY INDUSTRY"
              title="業種ごとの顧客行動に合わせて設計"
              description="同じテンプレートへ文章を流し込むだけでなく、お客様が知りたい情報と次の行動を業種ごとに整えます。"
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => (
                <article
                  key={industry.slug}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-orange-100 text-orange-800">
                      <Store className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-black">{industry.name}</h3>
                  </div>
                  <p className="mt-4 text-sm font-bold leading-6 text-sky-950">
                    {industry.journey}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {industry.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <Link
              href="/industries"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-bold text-white hover:bg-slate-800"
            >
              業種別支援を詳しく見る
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <SectionHeading
            eyebrow="WHY NEKONOTE"
            title="小規模事業者が相談しやすい6つの理由"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => (
              <div
                key={reason}
                className="rounded-2xl border border-slate-200 p-6"
              >
                <span className="text-3xl font-black text-orange-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-bold leading-7 text-slate-800">{reason}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="plans"
          className="scroll-mt-28 bg-[linear-gradient(180deg,#fff7ed_0%,#ffffff_100%)] py-20 sm:py-28"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="HOMEPAGE PLANS"
              title="始め方とサポート範囲で選べる3つの料金プラン"
              description={
                siteConfig.demoMode
                  ? "Webスタートは2つの支払い方法から選択。原稿下書きと更新支援を厚くしたWebサポート、データを引き渡す買い切りも用意しています。"
                  : "初期制作費0円のWebスタート、原稿下書きと更新支援を厚くしたWebサポート、データを引き渡す買い切りを用意しています。"
              }
            />
            <p className="mt-6 max-w-3xl rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium leading-6 text-amber-950">
              {siteConfig.demoMode
                ? "表示内容は確認用デモです。Webスタート初期費用0円型の解約条件は表示済みです。その他のプランの条件とデータ移管条件は、正式なお申し込み前にご案内します。"
                : "Webスタートの料金・更新・解約条件は本ページと特定商取引法表記に掲載しています。その他のプランの中途解約条件とデータ移管条件は、お申し込み前に書面でご案内します。"}
            </p>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {[...homepagePlans]
                .sort((a, b) => a.displayOrderMobile - b.displayOrderMobile)
                .map((plan) => (
                  <PlanCard key={plan.slug} plan={plan} />
                ))}
            </div>

            <div className="mt-12 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="min-w-[760px] w-full border-collapse text-left text-sm">
                <caption className="sr-only">ホームページ制作3プランの比較</caption>
                <thead>
                  <tr className="border-b border-slate-200">
                    <th scope="col" className="p-4 font-black text-slate-700">
                      比較項目
                    </th>
                    <th
                      scope="col"
                      className="bg-orange-50 p-4 font-black text-orange-950"
                    >
                      Webスタート
                    </th>
                    <th scope="col" className="p-4 font-black text-slate-700">
                      Webサポート
                    </th>
                    <th scope="col" className="p-4 font-black text-slate-700">
                      買い切り
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {(siteConfig.demoMode
                    ? comparisonRows
                    : productionComparisonRows
                  ).map((row) => (
                    <tr key={row.label} className="border-b border-slate-100 last:border-0">
                      <th scope="row" className="p-4 font-bold text-slate-700">
                        {row.label}
                      </th>
                      <td className="bg-orange-50/60 p-4 font-bold text-slate-950">
                        {row.webStart}
                      </td>
                      <td className="p-4 text-slate-700">{row.webSupport}</td>
                      <td className="p-4 text-slate-700">{row.buyout}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs leading-5 text-slate-500">
              スマートフォンでは表を横にスクロールして比較できます。
            </p>
            <Link
              href="/pricing"
              className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-slate-800 px-6 py-3 font-bold hover:bg-slate-950 hover:text-white"
            >
              料金と条件を詳しく見る
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="ONGOING SUPPORT"
              title="公開後の継続支援"
              description="ホームページ導入プランとは分けて、事業の状況に応じた運用・改善支援をご提案します。即時決済ではなく、相談・見積もりから始めます。"
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {supportPlans.map((plan, index) => (
                <article
                  key={plan.name}
                  className={`rounded-3xl border p-7 sm:p-9 ${
                    index === 0
                      ? "border-sky-200 bg-sky-50"
                      : "border-slate-700 bg-slate-950 text-white"
                  }`}
                >
                  <p
                    className={`text-xs font-black tracking-[0.16em] ${
                      index === 0 ? "text-sky-900" : "text-orange-300"
                    }`}
                  >
                    {index === 0 ? "WEB OPERATION" : "EXTERNAL WEB & AI"}
                  </p>
                  <h3 className="mt-3 text-2xl font-black">{plan.name}</h3>
                  <p className="mt-3 text-xl font-black">{plan.priceLabel}</p>
                  <p
                    className={`mt-5 text-sm leading-7 ${
                      index === 0 ? "text-slate-700" : "text-slate-300"
                    }`}
                  >
                    {plan.description}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start gap-2 text-sm ${
                          index === 0 ? "text-slate-700" : "text-slate-200"
                        }`}
                      >
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            index === 0 ? "text-sky-900" : "text-orange-300"
                          }`}
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p
                    className={`mt-6 rounded-xl px-4 py-3 text-xs leading-5 ${
                      index === 0
                        ? "bg-white text-slate-600"
                        : "bg-slate-900 text-slate-300"
                    }`}
                  >
                    {plan.notice}
                  </p>
                  <Link
                    href={plan.ctaHref}
                    className={`mt-6 inline-flex min-h-12 items-center gap-2 rounded-full px-6 py-3 font-bold ${
                      index === 0
                        ? "bg-sky-900 text-white hover:bg-sky-950"
                        : "bg-orange-300 text-slate-950 hover:bg-orange-200"
                    }`}
                  >
                    {plan.ctaLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-orange-200 bg-orange-50 py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-black tracking-[0.18em] text-orange-800">
                WHY ZERO YEN?
              </p>
              <h2 className="mt-3 text-3xl font-black">
                なぜ制作費0円で
                <br />
                始められるのですか？
              </h2>
            </div>
            <div>
              <p className="text-base leading-8 text-slate-700">
                制作費を最初にまとめていただくのではなく、制作後のサーバー管理、保守、バックアップ、軽微な更新サポートを含む月額制でご利用いただく仕組みです。初期投資を抑えながら、公開後も継続してサポートを受けられます。
              </p>
              <p className="mt-5 rounded-2xl bg-white px-5 py-4 font-bold leading-7 text-slate-950 shadow-sm">
                月額9,800円（税込）・最低利用期間24か月・24か月総額235,200円（税込）。24か月経過後は1か月単位で自動更新し、解約金はありません。解約は次回決済日の10日前までにお申し出ください。期間内の中途解約金は残契約月数×9,800円（税込）です。
              </p>
            </div>
          </div>
        </section>

        <section id="business-tools" className="scroll-mt-28 bg-sky-50/60 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="BUSINESS TOOLS"
                title="必要な業務だけを改善する、3つの単体DXツール"
                description="多言語順番待ち、口コミ返信、シフト作成を、標準範囲とオプションに分けて小さく導入できます。"
              />
              <p className="inline-flex w-fit rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-bold text-sky-950">
                {siteConfig.demoMode
                  ? "サービス内容を検証中のデモです"
                  : "掲載画面は導入イメージです"}
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {solutions.map((solution) => (
                <SolutionCard key={solution.slug} solution={solution} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/services/dx/tools"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-sky-900 px-7 py-3 font-bold text-white transition hover:bg-sky-950"
              >
                3つの単体DXツールを比較する
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <DxHomePreview />

        <section
          id="works"
          className="scroll-mt-28 bg-slate-50 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="SAMPLE WORKS"
              title="業種別の制作サンプル"
              description="掲載している店舗・企業・人物はすべて架空です。実績ではなく、デザインと情報設計の参考としてご覧ください。"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {allSites.map((site) => (
                <Link
                  key={site.data.slug}
                  href={`/${site.data.slug}`}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <PlaceholderImage
                      src={site.thumbnail}
                      alt={`${site.data.siteName}のホームページ制作サンプル`}
                      priority={site.data.slug === "cafe"}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-slate-950/90 px-3 py-1 text-xs font-bold text-white">
                      デモ制作
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold text-orange-800">{site.category}</p>
                    <h3 className="mt-1 text-lg font-bold">{site.data.siteName}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {site.summary}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-orange-800">
                      サンプルを見る
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="flow" className="scroll-mt-28 bg-slate-950 py-20 text-white sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="FLOW"
              title="無料相談から公開・運用まで"
              description="無料相談後に内容と料金をご確認いただき、ご納得いただいた場合のみ制作を開始します。"
              inverted
            />
            <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {productionFlow.map(([title, description], index) => (
                <li
                  key={title}
                  className="rounded-2xl border border-slate-700 bg-slate-900 p-5"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-700 text-sm font-black">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="faq" className="scroll-mt-28 mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionHeading eyebrow="FAQ" title="よくあるご質問" />
              <OfficialFaq
                items={siteConfig.demoMode ? faqItems : productionFaqItems}
              />
            </div>
            <div>
              <div className="rounded-3xl bg-slate-50 p-7 sm:p-9">
                <p className="text-xs font-black tracking-[0.18em] text-orange-800">
                  EXTRA COSTS
                </p>
                <h2 className="mt-3 text-2xl font-black">
                  全プラン共通の別途費用
                </h2>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {additionalCosts.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-700" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-7 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs leading-6 text-slate-600">
                  必要な費用は契約前にご説明し、追加料金が発生する作業については事前にお見積もりします。
                </p>
              </div>
              <div className="mt-6 rounded-3xl border border-orange-200 bg-orange-50 p-7">
                <ShieldCheck
                  className="h-8 w-8 text-orange-800"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-xl font-black">未確定事項は契約前に確認</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  解約条件、所有権、移管、外部サービス費用、DX連携範囲は正式なお申し込み前に確認し、契約書またはお見積もりへ明記します。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-28 border-y border-slate-200 bg-orange-50/50 py-20 sm:py-28"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-black tracking-[0.18em] text-orange-800">
                ABOUT
              </p>
              <h2 className="mt-3 text-3xl font-black">事業者情報</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                地域のお店と小規模事業者が、WebとAIを身近な事業道具として使い続けられる状態を目指しています。
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-orange-100 bg-white">
              <dl className="divide-y divide-slate-200">
                <BusinessRow label="事業者名">{siteConfig.businessName}</BusinessRow>
                <BusinessRow label="拠点・対応">
                  名張市・伊賀市を拠点に全国オンライン対応
                </BusinessRow>
                <BusinessRow label="事業内容">
                  <ul className="space-y-1">
                    {businessActivities.map((activity) => (
                      <li key={activity}>{activity}</li>
                    ))}
                  </ul>
                </BusinessRow>
                <BusinessRow label="メール">
                  <span className="break-all">{siteConfig.email}</span>
                </BusinessRow>
                <BusinessRow label="SNS">
                  <SocialLinks />
                </BusinessRow>
              </dl>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-black tracking-[0.18em] text-orange-800">
                FREE CONSULTATION
              </p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                まずは、お困りごとをお聞かせください
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                プランが決まっていなくても大丈夫です。ホームページ、更新、Googleマップ、LINE・SNS、AI活用のうち、今どこから始めるべきか整理します。
              </p>

              <div className="mt-8 space-y-4 rounded-2xl bg-slate-950 p-6 text-white">
                <div className="flex items-start gap-3 rounded-xl p-2">
                  <Mail
                    className="mt-0.5 h-5 w-5 shrink-0 text-orange-300"
                    aria-hidden="true"
                  />
                  <span>
                    <span className="block text-xs text-slate-400">メール</span>
                    <span className="mt-1 block break-all text-sm font-bold">
                      {siteConfig.email}
                    </span>
                  </span>
                </div>
                <div className="flex items-start gap-3 rounded-xl p-2">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-orange-300"
                    aria-hidden="true"
                  />
                  <span>
                    <span className="block text-xs text-slate-400">対応</span>
                    <span className="mt-1 block text-sm font-bold">
                      名張市・伊賀市周辺／全国オンライン
                    </span>
                  </span>
                </div>
                <div className="border-t border-slate-700 pt-4">
                  <SocialLinks inverted />
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-9">
              <h3 className="text-xl font-bold">
                {siteConfig.demoMode ? "無料相談デモフォーム" : "無料相談フォーム"}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                <span className="text-red-700">*</span> は必須項目です。
              </p>
              <div className="mt-7">
                <OfficialContactForm
                  contactEmail={siteConfig.email}
                  demoMode={siteConfig.demoMode}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950 pb-24 pt-10 text-slate-300 sm:pb-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Link href="#top" className="font-black text-white">
              {siteConfig.businessName}
            </Link>
            <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">
              {siteConfig.description}
            </p>
            <div className="mt-4">
              <SocialLinks inverted />
            </div>
          </div>
          <div className="text-sm">
            <nav
              aria-label="フッターナビゲーション"
              className="flex max-w-xl flex-wrap gap-x-5 gap-y-2"
            >
              <Link href="/services" className="min-h-11 py-3 hover:text-white">
                サービス
              </Link>
              <Link href="/services/dx" className="min-h-11 py-3 hover:text-white">
                業種別DX
              </Link>
              <Link href="/industries" className="min-h-11 py-3 hover:text-white">
                業種別
              </Link>
              <Link href="/pricing" className="min-h-11 py-3 hover:text-white">
                料金
              </Link>
              <Link href="/privacy" className="min-h-11 py-3 hover:text-white">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="min-h-11 py-3 hover:text-white">
                利用規約
              </Link>
              <Link href="/commerce" className="min-h-11 py-3 hover:text-white">
                特定商取引法表記
              </Link>
            </nav>
            <p className="mt-5 text-xs text-slate-500">
              © {new Date().getFullYear()} {siteConfig.businessName}
            </p>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-3 bottom-3 z-50 sm:hidden">
        <Link
          href="/contact?plan=web-start"
          className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-orange-300 bg-orange-700 px-5 py-3 text-sm font-black text-white shadow-2xl"
        >
          制作費0円で相談
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

function DemoBanner() {
  if (!siteConfig.demoMode) return null;

  return (
    <div className="bg-amber-300 text-slate-950">
      <div className="mx-auto flex max-w-6xl items-start gap-3 px-4 py-3 text-xs font-bold leading-5 sm:items-center sm:px-6">
        <span className="rounded bg-slate-950 px-2 py-0.5 text-[0.65rem] tracking-[0.14em] text-white">
          DEMO
        </span>
        <p>{businessModel.demoNotice}</p>
      </div>
    </div>
  );
}

function PlanCard({ plan }: { plan: HomepagePlan }) {
  const desktopOrder =
    plan.displayOrderDesktop === 1
      ? "xl:order-1"
      : plan.displayOrderDesktop === 2
        ? "xl:order-2"
        : plan.displayOrderDesktop === 3
          ? "xl:order-3"
          : "xl:order-4";

  return (
    <article
      className={`${desktopOrder} relative flex h-full flex-col rounded-3xl border p-6 sm:p-7 ${
        plan.recommended
          ? "border-orange-400 bg-white shadow-2xl shadow-orange-900/10"
          : "border-slate-200 bg-white shadow-sm"
      }`}
    >
      {plan.recommended ? (
        <span className="absolute -top-3 left-6 rounded-full bg-orange-700 px-4 py-1.5 text-xs font-black text-white">
          主力プラン
        </span>
      ) : null}
      <div>
        {plan.label ? (
          <p className="text-sm font-black text-orange-800">{plan.label}</p>
        ) : (
          <p className="text-sm font-black text-slate-500">選べる導入方法</p>
        )}
        <h3 className="mt-2 text-xl font-black">{plan.name}</h3>
        <p className="mt-3 min-h-12 text-sm leading-6 text-slate-600">
          {plan.catchCopy}
        </p>
      </div>

      <div className="mt-6 rounded-2xl bg-slate-950 p-5 text-white">
        {plan.regularPrice ? (
          <p className="text-xs text-slate-300">
            通常制作価格{" "}
            <span className="line-through">{formatYen(plan.regularPrice)}</span>
          </p>
        ) : null}
        <p className="mt-1 text-xs font-bold text-orange-300">初期制作費</p>
        <p className="mt-1 flex flex-wrap items-baseline gap-1 tabular-nums">
          <span className="text-4xl font-black">{formatYen(plan.initialPrice)}</span>
          <span className="text-xs">（税込）</span>
        </p>
        <div className="mt-4 border-t border-slate-700 pt-4">
          <p className="text-xs text-slate-400">月額</p>
          <p className="mt-1 text-lg font-black">
            {plan.monthlyPrice === 0
              ? "0円（任意保守あり）"
              : `${formatYen(plan.monthlyPrice)}（税込）`}
          </p>
          <p className="mt-2 text-xs font-bold text-slate-300">
            {plan.minimumTermLabel}
          </p>
        </div>
      </div>

      {siteConfig.demoMode && plan.paymentOptions ? (
        <div className="mt-4 space-y-2">
          {plan.paymentOptions.map((option) => (
            <div
              key={option.name}
              className="rounded-xl border border-orange-200 bg-orange-50 px-4 py-3 text-xs leading-6 text-orange-950"
            >
              <p className="font-black">{option.name}</p>
              <p>
                初期 {formatYen(option.initialPrice)}・月額{" "}
                {formatYen(option.monthlyPrice)}・24か月総額{" "}
                {formatYen(option.total24Months)}
              </p>
            </div>
          ))}
        </div>
      ) : null}

      <ul className="mt-6 space-y-2">
        {plan.features.slice(0, 7).map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-sm leading-6 text-slate-700"
          >
            <Check
              className="mt-1 h-4 w-4 shrink-0 text-orange-700"
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        {siteConfig.demoMode || plan.slug !== "web-start" ? (
          <p className="rounded-xl bg-slate-50 px-4 py-3 text-xs leading-5 text-slate-600">
            {plan.notices[0]}
          </p>
        ) : null}
        <Link
          href={plan.ctaHref}
          className={`mt-4 flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-center font-bold ${
            plan.recommended
              ? "bg-orange-700 text-white hover:bg-orange-800"
              : "border-2 border-slate-800 hover:bg-slate-950 hover:text-white"
          }`}
        >
          {plan.ctaLabel}
        </Link>
        {plan.stripeCheckoutEnabled ? (
          <Link
            href={`/subscription/checkout?plan=${plan.slug}`}
            className="mt-3 flex min-h-11 items-center justify-center text-sm font-bold text-sky-900 underline underline-offset-4"
          >
            Stripeテスト申込を確認
          </Link>
        ) : null}
      </div>
    </article>
  );
}

function RegionCard({
  icon: Icon,
  title,
  label,
  description,
  items,
}: {
  icon: typeof MapPin;
  title: string;
  label: string;
  description: string;
  items: string[];
}) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-sky-100 text-sky-900">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-black text-white">
          {label}
        </span>
      </div>
      <h3 className="mt-5 text-2xl font-black">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm font-medium text-slate-700"
          >
            <Check
              className="mt-0.5 h-4 w-4 shrink-0 text-sky-900"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  inverted?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p
        className={`text-xs font-black tracking-[0.18em] ${
          inverted ? "text-orange-300" : "text-orange-800"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-[clamp(1.8rem,7vw,2.6rem)] font-black leading-tight ${
          inverted ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-sm leading-7 sm:text-base ${
            inverted ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function BusinessRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2 px-5 py-4 text-sm sm:grid-cols-[9rem_1fr] sm:gap-6 sm:px-6">
      <dt className="font-bold text-slate-800">{label}</dt>
      <dd className="leading-6 text-slate-600">{children}</dd>
    </div>
  );
}

function SocialLinks({ inverted = false }: { inverted?: boolean }) {
  const linkClass = inverted
    ? "inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-700 px-3 py-2 text-sm font-bold text-white transition hover:border-orange-300 hover:text-orange-300"
    : "inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-300 px-3 py-2 text-sm font-bold text-slate-800 transition hover:border-orange-700 hover:text-orange-800";

  return (
    <div className="flex flex-wrap gap-2">
      <a
        href={siteConfig.instagramUrl}
        aria-label="Instagramを新しいタブで開く"
        className={linkClass}
        {...externalLinkProps}
      >
        <Camera className="h-4 w-4" aria-hidden="true" />
        Instagram
      </a>
      <a
        href={siteConfig.xUrl}
        aria-label="Xを新しいタブで開く"
        className={linkClass}
        {...externalLinkProps}
      >
        <span aria-hidden="true" className="font-black">
          X
        </span>
        X
      </a>
      <a
        href={siteConfig.lineUrl}
        aria-label="公式LINEを新しいタブで開く"
        className={linkClass}
        {...externalLinkProps}
      >
        公式LINE
      </a>
    </div>
  );
}
