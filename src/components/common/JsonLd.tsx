import type { SiteData } from "@/types/site";

export function JsonLd({ site }: { site: SiteData }) {
  const isCorporate = site.templateKind === "corporate";

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": isCorporate ? "Organization" : "LocalBusiness",
    name: site.siteName,
    description: site.description,
    telephone: site.contact.phone,
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      postalCode: site.address.postalCode,
      addressRegion: site.address.prefecture,
      addressLocality: site.address.city,
      streetAddress: site.address.street,
      addressCountry: "JP",
    },
    ...(isCorporate
      ? {}
      : {
          openingHoursSpecification: site.openingHours.map((hour) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: hour.label,
            description: hour.time,
          })),
        }),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: site.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      {site.faq.length > 0 ? (
        <script
          type="application/ld+json"
           
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
    </>
  );
}
