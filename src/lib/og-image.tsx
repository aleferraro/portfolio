import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getDictionary, type Locale } from "@/i18n";

const size = { width: 1200, height: 630 };

const accent = "#3b82f6";

export async function renderOgImage(locale: Locale) {
  const { og } = getDictionary(locale);
  const [geistRegular, geistBold] = await Promise.all([
    readFile(join(process.cwd(), "assets/Geist-Regular.ttf")),
    readFile(join(process.cwd(), "assets/Geist-Bold.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.25), transparent 55%), #0a0a0a",
          color: "#ededed",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 40, fontWeight: 700 }}>
          <span style={{ color: accent }}>A</span>
          <span>F</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 28, color: accent, marginBottom: 16 }}>{og.eyebrow}</div>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -2, marginBottom: 24 }}>Alessandro Ferraro</div>
          <div style={{ fontSize: 31, color: "#a3a3a3" }}>{og.tagline}</div>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {["Laravel", "Vue / React / Nuxt", "TypeScript", "Headless & GraphQL"].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                fontSize: 24,
                padding: "10px 22px",
                borderRadius: 999,
                border: "1px solid rgba(59,130,246,0.4)",
                background: "rgba(59,130,246,0.1)",
                color: accent,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geistRegular, style: "normal", weight: 400 },
        { name: "Geist", data: geistBold, style: "normal", weight: 700 },
      ],
    },
  );
}
