import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.publicUrl) return [];

  return [
    { url: siteConfig.publicUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.publicUrl}/privacy`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
