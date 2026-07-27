import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import { DemoNotice } from "@/components/common/DemoNotice";
import { FloatingActions } from "@/components/common/FloatingActions";
import { Hero } from "@/components/sections/Hero";
import { Concept } from "@/components/sections/Concept";
import { Services } from "@/components/sections/Services";
import { Features } from "@/components/sections/Features";
import { Works } from "@/components/sections/Works";
import { Flow } from "@/components/sections/Flow";
import { Company } from "@/components/sections/Company";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { themeVars } from "@/lib/theme";
import type { SiteData } from "@/types/site";

const navItems = [
  { label: "事業内容", href: "#services" },
  { label: "選ばれる理由", href: "#features" },
  { label: "施工事例", href: "#works" },
  { label: "会社概要", href: "#company" },
  { label: "よくある質問", href: "#faq" },
  { label: "お問い合わせ", href: "#contact" },
];

export function CorporateTemplate({ site }: { site: SiteData }) {
  return (
    <div style={themeVars(site.theme)} className="bg-[var(--background)] pb-14 sm:pb-0">
      <Header logoText={site.logoText} navItems={navItems} contact={site.contact} basePath={`/${site.slug}`} />
      <DemoNotice />
      <main>
        <Hero hero={site.hero} />
        {site.concept ? <Concept concept={site.concept} /> : null}
        {site.services.length > 0 ? (
          <Services eyebrow="SERVICE" title="事業内容" services={site.services} />
        ) : null}
        {site.features.length > 0 ? (
          <Features eyebrow="STRENGTHS" title="選ばれる理由" features={site.features} />
        ) : null}
        {site.works.length > 0 ? <Works works={site.works} /> : null}
        {site.flow.length > 0 ? <Flow flow={site.flow} title="お問い合わせから納品までの流れ" /> : null}
        <Company company={site.company} openingHours={site.openingHours} holidays={site.holidays} />
        <FAQ faq={site.faq} />
        <Contact contact={site.contact} siteName={site.siteName} title="お問い合わせ・お見積もり" />
      </main>
      <Footer site={site} />
      <FloatingActions contact={site.contact} mobileCtaLabel={site.mobileCtaLabel} mobileCtaHref={site.mobileCtaHref} />
    </div>
  );
}
