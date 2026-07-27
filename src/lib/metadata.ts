import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import type { SiteData } from "@/types/site";

export function buildSiteMetadata(site: SiteData): Metadata {
  const pageUrl = siteConfig.publicUrl ? `${siteConfig.publicUrl}/${site.slug}` : undefined;
  const imageUrl = siteConfig.publicUrl ? `${siteConfig.publicUrl}${site.hero.image}` : undefined;

  return {
    title: site.siteName,
    description: site.description,
    alternates: pageUrl ? { canonical: pageUrl } : undefined,
    robots: site.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: site.siteName,
      description: site.description,
      url: pageUrl,
      siteName: site.siteName,
      type: "website",
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: site.siteName,
      description: site.description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}
