import type { Metadata } from "next";
import { LegalDocument } from "@/components/official/LegalDocument";
import { SubpageShell } from "@/components/official/SubpageShell";
import { siteConfig } from "@/config/site";
import { commerceDocument } from "@/data/legal-documents";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description: `${siteConfig.businessName}の販売条件、支払方法、提供時期、キャンセル・返金、月額サービスの解約条件です。`,
  alternates: siteConfig.publicUrl
    ? { canonical: `${siteConfig.publicUrl}/commerce` }
    : undefined,
};

export default function CommercePage() {
  return (
    <SubpageShell
      eyebrow="LEGAL"
      title="特定商取引法に基づく表記"
      description="サービスの申込みにあたり、販売事業者情報、料金、支払方法、提供時期、キャンセル・返金および月額契約の条件をご案内します。"
    >
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
        <LegalDocument content={commerceDocument} />
      </div>
    </SubpageShell>
  );
}
