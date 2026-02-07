import { ImageResponse } from "next/og";
import { profileData } from "@/data/profile";

export const runtime = "edge";

export const alt = profileData.seo.title;
export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "58px",
          background:
            "radial-gradient(circle at 15% 20%, rgba(0,240,255,0.28), transparent 32%), radial-gradient(circle at 80% 85%, rgba(139,92,246,0.32), transparent 34%), linear-gradient(135deg, #090d16 0%, #111a2a 55%, #1b2450 100%)",
          color: "#e6f0ff",
          fontFamily: "Calibri, Segoe UI, Arial"
        }}
      >
        <div style={{ fontSize: 23, letterSpacing: 1.1, textTransform: "uppercase", opacity: 0.9 }}>
          {profileData.title}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ fontSize: 66, fontWeight: 700 }}>{profileData.name}</div>
          <div style={{ fontSize: 32, color: "#00f0ff" }}>{profileData.hero.headlineEmphasis}</div>
          <div style={{ fontSize: 28, opacity: 0.9 }}>{profileData.tagline}</div>
        </div>
        <div style={{ fontSize: 24, opacity: 0.85 }}>{profileData.seo.url.replace("https://", "")}</div>
      </div>
    ),
    {
      ...size
    }
  );
}
