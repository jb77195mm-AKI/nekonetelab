import Script from "next/script";

export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  const serializedMeasurementId = JSON.stringify(measurementId);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${serializedMeasurementId});
        `}
      </Script>
    </>
  );
}
