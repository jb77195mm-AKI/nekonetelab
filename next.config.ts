import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
] as const;

const isDemo = process.env.NEXT_PUBLIC_DEMO_MODE !== "false";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          ...securityHeaders,
          ...(isDemo
            ? [
                {
                  key: "X-Robots-Tag",
                  value: "noindex, nofollow, noarchive, nosnippet, noimageindex",
                },
                {
                  key: "Cache-Control",
                  value: "private, no-store, max-age=0",
                },
              ]
            : []),
        ],
      },
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store",
          },
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, nosnippet",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
