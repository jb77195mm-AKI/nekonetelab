import type { Metadata } from "next";
import { LegalDocument } from "@/components/official/LegalDocument";
import { SubpageShell } from "@/components/official/SubpageShell";
import { siteConfig } from "@/config/site";
import { termsDocument } from "@/data/legal-documents";

export const metadata: Metadata = {
  title: "利用規約",
  description: `${siteConfig.businessName}が提供する各種サービスの利用条件です。`,
  alternates: siteConfig.publicUrl
    ? { canonical: `${siteConfig.publicUrl}/terms` }
    : undefined,
};

export default function TermsPage() {
  return (
    <SubpageShell
      eyebrow="TERMS"
      title="利用規約"
      description="当事業者が提供するホームページ制作、運用・保守、AI・DX支援その他のサービスに共通する利用条件です。"
    >
      <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
        <LegalDocument content={termsDocument} />
      </div>
    </SubpageShell>
  );
}
