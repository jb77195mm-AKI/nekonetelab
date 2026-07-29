import type { Metadata } from "next";
import { DxHubPage } from "@/components/dx/DxHubPage";
import { SubpageShell } from "@/components/official/SubpageShell";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "業種別DXパック｜既存システムを活かした業務効率化",
  description:
    "美容室・サロン、工務店・リフォーム・清掃業、飲食店・小売店向けの業種別DXパック。予約・POS・会計・LINEを活かしながら、AIと自動化で再来店、案件管理、売上・在庫・発注業務を効率化します。",
};

export default function DxPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "業種別DXパック",
        description: metadata.description,
        provider: { "@type": "Organization", name: siteConfig.businessName },
        areaServed: "JP",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ホーム", item: siteConfig.publicUrl },
          { "@type": "ListItem", position: 2, name: "サービス", item: siteConfig.publicUrl ? `${siteConfig.publicUrl}/services` : undefined },
          { "@type": "ListItem", position: 3, name: "業種別DX" },
        ],
      },
    ],
  };

  return (
    <SubpageShell eyebrow="INDUSTRY DX" title="業種別DX" description="既存システムを活かした業務効率化" showIntro={false}>
      {!siteConfig.demoMode ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      ) : null}
      <DxHubPage />
    </SubpageShell>
  );
}
