import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DxPackDetailPage } from "@/components/dx/DxPackDetailPage";
import { SubpageShell } from "@/components/official/SubpageShell";
import { siteConfig } from "@/config/site";
import { dxPacks, getDxPack } from "@/data/dx-packs";

export const dynamicParams = false;

interface DxPackPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return dxPacks.map((pack) => ({ slug: pack.slug }));
}

export async function generateMetadata({ params }: DxPackPageProps): Promise<Metadata> {
  const { slug } = await params;
  const pack = getDxPack(slug);
  return pack ? { title: pack.name, description: pack.description } : {};
}

export default async function DxPackPage({ params }: DxPackPageProps) {
  const { slug } = await params;
  const pack = getDxPack(slug);
  if (!pack) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: pack.name,
    description: pack.description,
    provider: { "@type": "Organization", name: siteConfig.businessName },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "JPY",
      lowPrice: pack.initialPrice.minimum,
      highPrice: pack.initialPrice.maximum,
    },
  };

  return (
    <SubpageShell eyebrow="DX PACK" title={pack.name} description={pack.description} showIntro={false}>
      {!siteConfig.demoMode ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /> : null}
      <DxPackDetailPage pack={pack} />
    </SubpageShell>
  );
}
