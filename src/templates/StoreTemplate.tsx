import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { DemoNotice } from "@/components/common/DemoNotice";
import { FloatingActions } from "@/components/common/FloatingActions";
import { Hero } from "@/components/sections/Hero";
import { Concept } from "@/components/sections/Concept";
import { Features } from "@/components/sections/Features";
import { Menu } from "@/components/sections/Menu";
import { Gallery } from "@/components/sections/Gallery";
import { Flow } from "@/components/sections/Flow";
import { FAQ } from "@/components/sections/FAQ";
import { Access } from "@/components/sections/Access";
import { Contact } from "@/components/sections/Contact";
import { themeVars } from "@/lib/theme";
import type { SiteData } from "@/types/site";

const navItems = [
  { label: "コンセプト", href: "#concept" },
  { label: "メニュー", href: "#menu" },
  { label: "ギャラリー", href: "#gallery" },
  { label: "よくある質問", href: "#faq" },
  { label: "アクセス", href: "#access" },
  { label: "お問い合わせ", href: "#contact" },
];

export function StoreTemplate({ site }: { site: SiteData }) {
  return (
    <div style={themeVars(site.theme)} className="bg-[var(--background)] pb-14 sm:pb-0">
      <Header logoText={site.logoText} navItems={navItems} contact={site.contact} basePath={`/${site.slug}`} />
      <DemoNotice />
      <main>
        <Hero hero={site.hero} />
        {site.concept ? <Concept concept={site.concept} /> : null}
        {site.features.length > 0 ? (
          <Features eyebrow="FEATURES" title="選ばれる理由" features={site.features} />
        ) : null}
        <Menu menuItems={site.menuItems} />
        <Gallery gallery={site.gallery} />
        {site.flow.length > 0 ? <Flow flow={site.flow} title="ご利用の流れ" /> : null}
        <FAQ faq={site.faq} />
        <Access address={site.address} openingHours={site.openingHours} holidays={site.holidays} siteName={site.siteName} />
        <Contact contact={site.contact} siteName={site.siteName} />
      </main>
      <Footer site={site} />
      <FloatingActions contact={site.contact} mobileCtaLabel={site.mobileCtaLabel} mobileCtaHref={site.mobileCtaHref} />
    </div>
  );
}
