import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { dxPacks } from "@/data/dx-packs";
import { dxTools } from "@/data/dx-tools";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.publicUrl || siteConfig.globalNoindex) return [];

  return [
    { url: siteConfig.publicUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.publicUrl}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.publicUrl}/industries`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.publicUrl}/pricing`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.publicUrl}/services/web`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.publicUrl}/services/dx`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.publicUrl}/services/dx/tools`, changeFrequency: "monthly", priority: 0.8 },
    ...dxTools.map((tool) => ({
      url: `${siteConfig.publicUrl}/services/dx/tools/${tool.slug}`,
      changeFrequency: "monthly" as const,
      priority: tool.featured ? 0.9 : 0.7,
    })),
    { url: `${siteConfig.publicUrl}/services/dx/packs`, changeFrequency: "monthly", priority: 0.8 },
    ...dxPacks.map((pack) => ({
      url: `${siteConfig.publicUrl}/services/dx/packs/${pack.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${siteConfig.publicUrl}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.publicUrl}/terms`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.publicUrl}/commerce`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
