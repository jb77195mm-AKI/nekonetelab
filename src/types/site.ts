export type TemplateKind = "store" | "booking" | "corporate";

export interface ThemeConfig {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  muted: string;
}

export interface ContactConfig {
  phone: string;
  phoneDisplay: string;
  email: string;
  lineUrl?: string;
  reservationUrl?: string;
  reservationLabel?: string;
  instagramUrl?: string;
  xUrl?: string;
}

export interface AddressConfig {
  postalCode: string;
  prefecture: string;
  city: string;
  street: string;
  mapEmbedUrl: string;
}

export interface OpeningHour {
  label: string;
  time: string;
}

export interface HeroConfig {
  title: string;
  subtitle: string;
  image: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  image?: string;
}

export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  image?: string;
  tag?: string;
}

export interface PriceItem {
  name: string;
  price: string;
  description?: string;
  duration?: string;
}

export interface StaffMember {
  name: string;
  role: string;
  message: string;
  image: string;
}

export interface GalleryItem {
  image: string;
  caption?: string;
}

export interface WorkItem {
  title: string;
  description: string;
  image: string;
  tag?: string;
}

export interface FlowStep {
  step: number;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CompanyInfo {
  name: string;
  representative: string;
  founded?: string;
  capital?: string;
  employees?: string;
  business: string;
  area: string;
}

export interface SiteData {
  slug: string;
  siteName: string;
  businessType: string;
  templateKind: TemplateKind;
  tagline: string;
  description: string;
  logoText: string;
  noindex: boolean;

  theme: ThemeConfig;
  contact: ContactConfig;
  address: AddressConfig;
  openingHours: OpeningHour[];
  holidays: string;

  hero: HeroConfig;
  concept?: {
    title: string;
    body: string;
    image: string;
  };

  features: FeatureItem[];
  services: ServiceItem[];
  menuItems: MenuItem[];
  priceItems: PriceItem[];
  staff: StaffMember[];
  gallery: GalleryItem[];
  works: WorkItem[];
  flow: FlowStep[];
  faq: FaqItem[];
  company: CompanyInfo;

  mobileCtaLabel: string;
  mobileCtaHref: string;
}
