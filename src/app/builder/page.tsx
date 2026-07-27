import type { Metadata } from "next";
import { builderSite } from "@/data/builder";
import { SiteRenderer } from "@/templates/SiteRenderer";
import { buildSiteMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildSiteMetadata(builderSite);

export default function BuilderPage() {
  return <SiteRenderer site={builderSite} />;
}
