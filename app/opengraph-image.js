import { ImageResponse } from "next/og";

export const alt = "오재엽 포트폴리오 — Physics · Optical Materials & Photonics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const STATS = [
  { value: "1st-author", label: "SCIE paper · J. Alloys Compd. 2026" },
  { value: "1 / 31", label: "Department rank" },
  { value: "4.15 / 4.5", label: "GPA" },
];

export default function Image() {
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
          background: "#101114",
          color: "#edeef0",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(47,191,113,0.45), rgba(47,191,113,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -200,
            right: 220,
            width: 480,
            height: 480,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(229,72,77,0.35), rgba(229,72,77,0) 70%)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 28, fontWeight: 600, color: "#6d8dff", letterSpacing: 2 }}>
            PHYSICS · OPTICAL MATERIALS & PHOTONICS
          </div>
          <div style={{ fontSize: 88, fontWeight: 800, marginTop: 24, letterSpacing: -2 }}>
            Jaeyeop Oh
          </div>
          <div style={{ fontSize: 32, color: "#9a9ea5", marginTop: 12 }}>
            Rare-earth phosphors · Optical thermometry · Quantum optics
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 64,
            borderTop: "2px solid #2a2c31",
            paddingTop: 36,
          }}
        >
          {STATS.map((stat) => (
            <div key={stat.label} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 48, fontWeight: 700 }}>{stat.value}</div>
              <div style={{ fontSize: 24, color: "#9a9ea5", marginTop: 6 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
