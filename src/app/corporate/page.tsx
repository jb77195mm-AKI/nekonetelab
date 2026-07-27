import type { Metadata } from "next";
import { corporateSite } from "@/data/corporate";
import { SiteRenderer } from "@/templates/SiteRenderer";
import { buildSiteMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildSiteMetadata(corporateSite);

export default function CorporatePage() {
  return <SiteRenderer site={corporateSite} />;
}
