import { JsonLd } from "@/components/common/JsonLd";
import { StoreTemplate } from "./StoreTemplate";
import { BookingTemplate } from "./BookingTemplate";
import { CorporateTemplate } from "./CorporateTemplate";
import type { SiteData } from "@/types/site";

export function SiteRenderer({ site }: { site: SiteData }) {
  return (
    <>
      <JsonLd site={site} />
      {site.templateKind === "store" ? <StoreTemplate site={site} /> : null}
      {site.templateKind === "booking" ? <BookingTemplate site={site} /> : null}
      {site.templateKind === "corporate" ? <CorporateTemplate site={site} /> : null}
    </>
  );
}
