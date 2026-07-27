import type { Metadata } from "next";
import { clinicSite } from "@/data/clinic";
import { SiteRenderer } from "@/templates/SiteRenderer";
import { buildSiteMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildSiteMetadata(clinicSite);

export default function ClinicPage() {
  return <SiteRenderer site={clinicSite} />;
}
