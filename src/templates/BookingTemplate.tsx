import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { DemoNotice } from "@/components/common/DemoNotice";
import { FloatingActions } from "@/components/common/FloatingActions";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Services } from "@/components/sections/Services";
import { Price } from "@/components/sections/Price";
import { Staff } from "@/components/sections/Staff";
import { Gallery } from "@/components/sections/Gallery";
import { Flow } from "@/components/sections/Flow";
import { FAQ } from "@/components/sections/FAQ";
import { Access } from "@/components/sections/Access";
import { Contact } from "@/components/sections/Contact";
import { themeVars } from "@/lib/theme";
import type { SiteData } from "@/types/site";

const navItems = [
  { label: "特徴", href: "#features" },
  { label: "料金", href: "#price" },
  { label: "スタッフ", href: "#staff" },
  { label: "ギャラリー", href: "#gallery" },
  { label: "よくある質問", href: "#faq" },
  { label: "アクセス", href: "#access" },
];

export function BookingTemplate({ site }: { site: SiteData }) {
  return (
    <div style={themeVars(site.theme)} className="bg-[var(--background)] pb-14 sm:pb-0">
      <Header logoText={site.logoText} navItems={navItems} contact={site.contact} basePath={`/${site.slug}`} />
      <DemoNotice />
      <main>
        <Hero hero={site.hero} />
        {site.features.length > 0 ? (
          <Features eyebrow="FEATURES" title="当店の特徴" features={site.features} />
        ) : null}
        {site.services.length > 0 ? (
          <Services eyebrow="SERVICE" title="対応メニュー" services={site.services} />
        ) : null}
        <Price
          priceItems={site.priceItems}
          note="表示料金は税込です。カウンセリングの上、最適なメニューをご提案します。"
        />
        {site.staff.length > 0 ? <Staff staff={site.staff} /> : null}
        <Gallery gallery={site.gallery} />
        {site.flow.length > 0 ? <Flow flow={site.flow} /> : null}
        <FAQ faq={site.faq} />
        <Access address={site.address} openingHours={site.openingHours} holidays={site.holidays} siteName={site.siteName} />
        <Contact contact={site.contact} siteName={site.siteName} />
      </main>
      <Footer site={site} />
      <FloatingActions contact={site.contact} mobileCtaLabel={site.mobileCtaLabel} mobileCtaHref={site.mobileCtaHref} />
    </div>
  );
}
