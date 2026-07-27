import type { Metadata } from "next";
import { cafeSite } from "@/data/cafe";
import { SiteRenderer } from "@/templates/SiteRenderer";
import { buildSiteMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildSiteMetadata(cafeSite);

export default function CafePage() {
  return <SiteRenderer site={cafeSite} />;
}
