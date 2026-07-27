import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #fff7ed 0%, #ffffff 52%, #f0f9ff 100%)",
          color: "#0f172a",
          padding: "72px 84px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 68,
              height: 68,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 18,
              background: "#c2410c",
              color: "white",
              fontSize: 32,
            }}
          >
            猫
          </div>
          {siteConfig.businessName}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 68, fontWeight: 900, letterSpacing: "-2px" }}>
            デジタルの困りごとに、
          </div>
          <div style={{ display: "flex", color: "#9a3412", fontSize: 86, fontWeight: 900 }}>
            猫の手を。
          </div>
        </div>
        <div style={{ display: "flex", color: "#475569", fontSize: 25 }}>
          ホームページ制作・AI活用支援・生成AI研修・業務効率化
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
