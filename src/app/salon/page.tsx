import type { Metadata } from "next";
import { salonSite } from "@/data/salon";
import { SiteRenderer } from "@/templates/SiteRenderer";
import { buildSiteMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildSiteMetadata(salonSite);

export default function SalonPage() {
  return <SiteRenderer site={salonSite} />;
}
