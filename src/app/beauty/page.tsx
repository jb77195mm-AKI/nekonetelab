import type { Metadata } from "next";
import { beautySite } from "@/data/beauty";
import { SiteRenderer } from "@/templates/SiteRenderer";
import { buildSiteMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildSiteMetadata(beautySite);

export default function BeautyPage() {
  return <SiteRenderer site={beautySite} />;
}
