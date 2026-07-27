import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { GoogleAnalytics } from "@/components/official/GoogleAnalytics";
import { siteConfig } from "@/config/site";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteConfig.publicUrl ? new URL(siteConfig.publicUrl) : undefined,
  title: {
    default: `${siteConfig.businessName}｜ホームページ制作・AI活用支援`,
    template: `%s｜${siteConfig.businessName}`,
  },
  description: siteConfig.description,
  alternates: siteConfig.publicUrl ? { canonical: siteConfig.publicUrl } : undefined,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: siteConfig.businessName,
    title: `${siteConfig.businessName}｜ホームページ制作・AI活用支援`,
    description: siteConfig.description,
    url: siteConfig.publicUrl,
    images: siteConfig.publicUrl
      ? [
          {
            url: `${siteConfig.publicUrl}/og-image`,
            width: 1200,
            height: 630,
            alt: `${siteConfig.businessName}｜ホームページ制作・AI活用支援`,
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.businessName}｜ホームページ制作・AI活用支援`,
    description: siteConfig.description,
    images: siteConfig.publicUrl ? [`${siteConfig.publicUrl}/og-image`] : undefined,
  },
  robots: {
    index: !siteConfig.globalNoindex,
    follow: !siteConfig.globalNoindex,
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  verification: siteConfig.googleSiteVerification
    ? { google: siteConfig.googleSiteVerification }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      data-scroll-behavior="smooth"
      className={`${notoSansJP.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        {children}
        {siteConfig.googleAnalyticsId ? (
          <GoogleAnalytics measurementId={siteConfig.googleAnalyticsId} />
        ) : null}
      </body>
    </html>
  );
}
