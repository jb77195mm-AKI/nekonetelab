import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: siteConfig.globalNoindex ? undefined : "/",
      disallow: siteConfig.globalNoindex ? "/" : undefined,
    },
    sitemap: siteConfig.publicUrl ? `${siteConfig.publicUrl}/sitemap.xml` : undefined,
  };
}
