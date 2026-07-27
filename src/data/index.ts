import { cafeSite } from "./cafe";
import { salonSite } from "./salon";
import { beautySite } from "./beauty";
import { clinicSite } from "./clinic";
import { builderSite } from "./builder";
import { corporateSite } from "./corporate";
import type { SiteData, TemplateKind } from "@/types/site";

export interface SiteListing {
  data: SiteData;
  category: string;
  templateLabel: string;
  templateKind: TemplateKind;
  thumbnail: string;
  summary: string;
}

export const allSites: SiteListing[] = [
  {
    data: cafeSite,
    category: "カフェ",
    templateLabel: "店舗・飲食型テンプレート",
    templateKind: "store",
    thumbnail: "/images/cafe/hero.webp",
    summary: "自家焙煎コーヒーと焼き菓子が自慢の、ナチュラルテイストなカフェのサンプルサイトです。",
  },
  {
    data: salonSite,
    category: "美容室・ヘアサロン",
    templateLabel: "予約サービス型テンプレート",
    templateKind: "booking",
    thumbnail: "/images/salon/hero.webp",
    summary: "上品で清潔感のある一軒家美容室のサンプルサイトです。ホットペッパー予約に対応。",
  },
  {
    data: beautySite,
    category: "ネイル・エステサロン",
    templateLabel: "予約サービス型テンプレート",
    templateKind: "booking",
    thumbnail: "/images/beauty/hero.webp",
    summary: "完全予約制・女性専用サロンをイメージした、上品なピンクベージュ基調のサンプルサイトです。",
  },
  {
    data: clinicSite,
    category: "整骨院・整体院",
    templateLabel: "予約サービス型テンプレート",
    templateKind: "booking",
    thumbnail: "/images/clinic/hero.webp",
    summary: "地域密着型整骨院をイメージした、清潔感と信頼感のあるサンプルサイトです。",
  },
  {
    data: builderSite,
    category: "工務店・リフォーム会社",
    templateLabel: "企業・問い合わせ型テンプレート",
    templateKind: "corporate",
    thumbnail: "/images/builder/hero.webp",
    summary: "地域密着の工務店をイメージした、信頼感と職人らしさを感じるサンプルサイトです。",
  },
  {
    data: corporateSite,
    category: "中小企業・コーポレート",
    templateLabel: "企業・問い合わせ型テンプレート",
    templateKind: "corporate",
    thumbnail: "/images/corporate/hero.webp",
    summary: "業務支援・IT導入支援を手がける中小企業をイメージした、シンプルなコーポレートサイトです。",
  },
];

export function getSiteBySlug(slug: string): SiteListing | undefined {
  return allSites.find((site) => site.data.slug === slug);
}
