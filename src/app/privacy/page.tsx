import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: `${siteConfig.businessName}の個人情報の取り扱いについてご案内します。`,
  alternates: siteConfig.publicUrl ? { canonical: `${siteConfig.publicUrl}/privacy` } : undefined,
};

const sections = [
  {
    title: "1. 取得する情報",
    body: [
      "お問い合わせフォームを通じて、お名前、事業者名・屋号、メールアドレス、電話番号、所在地、業種、ホームページの有無、相談内容、希望プラン、相談方法、お問い合わせ内容を取得する場合があります。",
      siteConfig.demoMode
        ? "現在のデモフォームでは入力内容を保存・送信しません。"
        : "お問い合わせフォームに入力された情報は、フォーム送信サービス等の委託先を通じて当事業者へ送信される場合があります。",
      "サイトの安定運用や利用状況の確認のため、IPアドレス、ブラウザ情報、閲覧日時などの情報が自動的に記録される場合があります。",
    ],
  },
  {
    title: "2. 利用目的",
    body: [
      "取得した情報は、お問い合わせへの回答、ご相談内容に関する連絡、サービスの提供・改善、不正利用や障害への対応のために利用します。",
      "あらかじめご本人の同意を得た場合、または法令に基づく場合を除き、上記の目的を超えて利用しません。",
    ],
  },
  {
    title: "3. 第三者提供",
    body: [
      "法令に基づく場合、人の生命・身体・財産の保護に必要な場合などを除き、ご本人の同意なく個人情報を第三者に提供しません。",
    ],
  },
  {
    title: "4. 外部サービスと業務委託",
    body: [
      "お問い合わせの受付やサイトの運用に、フォーム送信サービス、ホスティングサービスなどの外部サービスを利用する場合があります。その際は、利用目的の達成に必要な範囲で情報が取り扱われます。",
      "外部サービスの利用にあたっては、各サービスの安全管理措置や利用条件を確認し、必要かつ適切な監督に努めます。",
    ],
  },
  {
    title: "5. Cookie・アクセス解析",
    body: [
      "本サイトでは、利便性の向上や利用状況の把握のためにCookieやアクセス解析ツールを利用する場合があります。Cookieはブラウザの設定により無効にできます。",
      "新たにアクセス解析や広告関連サービスを導入する場合は、利用するサービスと取り扱う情報を本ページでお知らせします。",
    ],
  },
  {
    title: "6. 安全管理",
    body: [
      "取得した情報への不正アクセス、漏えい、紛失、改ざんなどを防ぐため、必要かつ合理的な安全管理措置を講じます。",
    ],
  },
  {
    title: "7. 開示・訂正・削除等",
    body: [
      "ご本人から、保有する個人情報の開示、訂正、利用停止、削除等の申し出があった場合は、ご本人確認を行ったうえで、法令に従い適切に対応します。",
    ],
  },
  {
    title: "8. 本ポリシーの変更",
    body: [
      "法令やサービス内容の変更に応じて、本ポリシーを改定することがあります。重要な変更がある場合は、本サイト上で分かりやすくお知らせします。",
    ],
  },
] as const;

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream-light text-ink">
      <header className="border-b border-line-soft bg-white">
        <div className="mx-auto flex min-h-16 max-w-4xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="font-medium">
            {siteConfig.businessName}
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-navy underline underline-offset-4">
            無料相談
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold tracking-[0.18em] text-navy">PRIVACY POLICY</p>
        <h1 className="mt-3 text-3xl font-medium sm:text-4xl">プライバシーポリシー</h1>
        <p className="mt-6 text-sm leading-7 text-muted">
          {siteConfig.businessName}
          （以下「当事業者」といいます）は、本サイトおよび提供するサービスにおいて取り扱う個人情報を、以下の方針に基づき適切に管理します。
        </p>

        <div className="mt-10 space-y-5">
          {sections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-line-soft bg-white p-6 sm:p-8">
              <h2 className="text-lg font-semibold">{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-sm leading-7 text-muted">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <section className="rounded-2xl border border-cat-beige bg-cream-light p-6 sm:p-8">
            <h2 className="text-lg font-semibold">9. お問い合わせ窓口</h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              本ポリシーおよび個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。
            </p>
            <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-[8rem_1fr]">
              <dt className="font-semibold">事業者名</dt>
              <dd>{siteConfig.businessName}</dd>
              <dt className="font-semibold">メール</dt>
              <dd>
                <a href={`mailto:${siteConfig.email}`} className="font-medium text-navy underline underline-offset-2">
                  {siteConfig.email}
                </a>
              </dd>
              {siteConfig.phone && siteConfig.phoneHref ? (
                <>
                  <dt className="font-semibold">電話番号</dt>
                  <dd>
                    <a href={siteConfig.phoneHref} className="font-medium text-navy underline underline-offset-2">
                      {siteConfig.phone}
                    </a>
                  </dd>
                </>
              ) : null}
              {siteConfig.address ? (
                <>
                  <dt className="font-semibold">所在地</dt>
                  <dd>{siteConfig.address}</dd>
                </>
              ) : null}
            </dl>
          </section>
        </div>

        <p className="mt-8 text-right text-xs text-muted">制定日：2026年7月27日</p>
        <Link
          href="/"
          className="mt-10 inline-flex rounded-full border border-line-soft bg-white px-5 py-2.5 text-sm font-semibold hover:border-navy hover:text-navy"
        >
          トップページへ戻る
        </Link>
      </main>
    </div>
  );
}
