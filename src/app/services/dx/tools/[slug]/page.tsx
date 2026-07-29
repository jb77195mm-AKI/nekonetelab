import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DxToolDetailPage } from "@/components/dx/DxToolDetailPage";
import { SubpageShell } from "@/components/official/SubpageShell";
import { siteConfig } from "@/config/site";
import { dxTools, getDxTool } from "@/data/dx-tools";

export const dynamicParams = false;

interface DxToolPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return dxTools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: DxToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getDxTool(slug);
  if (!tool) return {};
  if (tool.slug === "inbound-queue") {
    return {
      title: "多言語・インバウンド対応の順番待ちシステム",
      description:
        "外国人観光客がQRコードから母国語で受付できる、アプリ・会員登録不要の順番待ちシステム。飲食店・観光施設の混雑対策と多言語対応を支援します。",
    };
  }
  return { title: tool.name, description: tool.description };
}

export default async function DxToolPage({ params }: DxToolPageProps) {
  const { slug } = await params;
  const tool = getDxTool(slug);
  if (!tool) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: tool.name,
    description: tool.description,
    provider: { "@type": "Organization", name: siteConfig.businessName },
    offers: {
      "@type": "Offer",
      priceCurrency: "JPY",
      price: tool.initialPrice.minimum,
      description: `初期設定費${tool.initialPrice.minimum}円から`,
    },
  };

  return (
    <SubpageShell eyebrow="DX TOOL" title={tool.name} description={tool.description} showIntro={false}>
      {!siteConfig.demoMode ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} /> : null}
      <DxToolDetailPage tool={tool} />
    </SubpageShell>
  );
}
