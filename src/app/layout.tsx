import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import { headers } from "next/headers";
import { GoogleAnalytics } from "@/components/official/GoogleAnalytics";
import { siteConfig } from "@/config/site";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

async function requestBaseUrl(): Promise<URL> {
  if (siteConfig.publicUrl) return new URL(siteConfig.publicUrl);

  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host")?.split(",")[0]?.trim() ||
    requestHeaders.get("host") ||
    "localhost:3000";
  const forwardedProtocol = requestHeaders
    .get("x-forwarded-proto")
    ?.split(",")[0]
    ?.trim();
  const protocol =
    forwardedProtocol ||
    (host.startsWith("localhost") || host.startsWith("127.0.0.1")
      ? "http"
      : "https");

  return new URL(`${protocol}://${host}`);
}

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await requestBaseUrl();
  const ogImageUrl = new URL("/og.png", baseUrl);
  const title = `${siteConfig.businessName}｜制作費0円からのホームページ制作・Web・AI支援`;
  const socialTitle = `${siteConfig.businessName}｜ホームページ制作費0円`;

  return {
    metadataBase: baseUrl,
    title: {
      default: title,
      template: `%s｜${siteConfig.businessName}`,
    },
    description: siteConfig.description,
    alternates:
      siteConfig.publicUrl && !siteConfig.globalNoindex
        ? { canonical: siteConfig.publicUrl }
        : undefined,
    openGraph: {
      type: "website",
      locale: "ja_JP",
      siteName: siteConfig.businessName,
      title: socialTitle,
      description: siteConfig.description,
      url: baseUrl,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.businessName} ホームページ制作費0円プラン`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: siteConfig.description,
      images: [ogImageUrl],
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      data-scroll-behavior="smooth"
      className={`${notoSansJP.variable} ${notoSerifJP.variable} h-full antialiased`}
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
