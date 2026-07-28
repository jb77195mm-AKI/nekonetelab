import "server-only";

function optionalValue(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

function optionalHttpUrl(value: string | undefined): string | undefined {
  const candidate = optionalValue(value);
  if (!candidate) return undefined;

  try {
    const url = new URL(candidate);
    if (url.protocol !== "http:" && url.protocol !== "https:") return undefined;
    return url.toString().replace(/\/$/, "");
  } catch {
    return undefined;
  }
}

function optionalPublicUrl(value: string | undefined): string | undefined {
  const candidate = optionalHttpUrl(value);
  if (!candidate) return undefined;

  const url = new URL(candidate);
  const isLocalhost =
    url.hostname === "localhost" ||
    url.hostname === "127.0.0.1" ||
    url.hostname === "::1";

  return url.protocol === "https:" || (url.protocol === "http:" && isLocalhost)
    ? candidate
    : undefined;
}

function optionalGoogleAnalyticsId(value: string | undefined): string | undefined {
  const candidate = optionalValue(value)?.toUpperCase();
  return candidate && /^G-[A-Z0-9]+$/.test(candidate) ? candidate : undefined;
}

function optionalVerificationToken(value: string | undefined): string | undefined {
  const candidate = optionalValue(value);
  return candidate && /^[A-Za-z0-9_-]+$/.test(candidate) ? candidate : undefined;
}

function telephoneHref(phone: string | undefined): string | undefined {
  if (!phone) return undefined;
  const normalized = phone.replace(/[^\d+]/g, "");
  return normalized ? `tel:${normalized}` : undefined;
}

const publicUrl = optionalPublicUrl(process.env.NEXT_PUBLIC_SITE_URL);
const phone = optionalValue(process.env.BUSINESS_PHONE);
const address = optionalValue(process.env.BUSINESS_ADDRESS);
const officialLineUrl = "https://lin.ee/rWvSMpg";
const demoMode = process.env.NEXT_PUBLIC_DEMO_MODE !== "false";

export const siteConfig = {
  businessName: "猫の手デジタルラボ",
  description:
    "名張市・伊賀市を拠点に全国対応。小規模事業者のホームページ制作、更新・運用、Googleマップ、LINE、SNS、生成AI、業務効率化を支援します。",
  email: "info@nekonotedejitarurabo.com",
  contactToEmail:
    optionalValue(process.env.CONTACT_TO_EMAIL) ?? "info@nekonotedejitarurabo.com",
  instagramUrl: "https://www.instagram.com/nekonote_dlab/?hl=ja",
  xUrl: "https://x.com/nekonote_dlab",
  lineUrl: optionalHttpUrl(process.env.LINE_OFFICIAL_URL) ?? officialLineUrl,
  phone,
  phoneHref: telephoneHref(phone),
  address,
  mapUrl: address
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
    : undefined,
  businessHours: optionalValue(process.env.BUSINESS_HOURS),
  serviceArea: optionalValue(process.env.BUSINESS_SERVICE_AREA),
  publicUrl,
  demoMode,
  checkoutMode: optionalValue(process.env.SUBSCRIPTION_CHECKOUT_MODE) ?? "mock",
  customerPortalUrl: optionalHttpUrl(process.env.NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL),
  googleAnalyticsId: optionalGoogleAnalyticsId(
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  ),
  googleSiteVerification: optionalVerificationToken(
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  ),
  globalNoindex: demoMode || process.env.NEXT_PUBLIC_NOINDEX !== "false",
} as const;
