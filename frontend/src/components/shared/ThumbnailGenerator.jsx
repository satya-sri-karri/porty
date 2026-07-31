import React, { useEffect, useRef } from "react";
import { toPng } from "html-to-image";
import { getTheme } from "../../registry/themeRegistry";

const ThumbnailGenerator = ({ data, onCapture }) => {
  const ref = useRef(null);
  const themeConfig = getTheme(data.theme);
  const accent = themeConfig?.preview?.accent || "#E07A9E";
  const bg = themeConfig?.preview?.bg || "#0A0A0A";

  useEffect(() => {
    if (!ref.current) return;
    const timer = setTimeout(() => {
      toPng(ref.current, { width: 400, height: 300, pixelRatio: 1 })
        .then(onCapture)
        .catch(() => {});
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={ref} style={{ width: 400, height: 300, position: "fixed", left: -9999, top: 0, overflow: "hidden", background: typeof bg === "string" && bg.includes("linear-gradient") ? bg.split(",")[0].replace("linear-gradient(", "").trim() : bg, fontFamily: "Inter, sans-serif" }}>
      <div style={{ height: 4, background: accent }} />
      <div style={{ padding: "16px 16px 0" }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: accent, marginBottom: 8 }} />
        <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{data.name || "Your Name"}</div>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", marginBottom: 14 }}>{data.title || "Professional Title"}</div>
      </div>
      <div style={{ padding: "0 16px", display: "flex", gap: 6, marginBottom: 12 }}>
        {["React", "Node.js", "Python"].map((s, i) => (
          <div key={i} style={{ padding: "3px 8px", borderRadius: 4, fontSize: 8, background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)" }}>{s}</div>
        ))}
      </div>
      <div style={{ padding: "0 16px", display: "flex", gap: 8 }}>
        {[1, 2].map(i => (
          <div key={i} style={{ flex: 1, padding: 10, borderRadius: 8, background: "rgba(255,255,255,0.06)" }}>
            <div style={{ height: 6, width: "60%", borderRadius: 3, background: accent, marginBottom: 6 }} />
            <div style={{ height: 4, width: "100%", borderRadius: 2, background: "rgba(255,255,255,0.1)", marginBottom: 4 }} />
            <div style={{ height: 4, width: "80%", borderRadius: 2, background: "rgba(255,255,255,0.08)" }} />
          </div>
        ))}
      </div>
      <div style={{ padding: "0 16px", marginTop: 12 }}>
        <div style={{ height: 6, width: "40%", borderRadius: 3, background: "rgba(255,255,255,0.12)", marginBottom: 8 }} />
        {[1, 2, 3].map(i => (
          <div key={i} style={{ height: 4, width: `${100 - i * 15}%`, borderRadius: 2, background: "rgba(255,255,255,0.07)", marginBottom: 5 }} />
        ))}
      </div>
    </div>
  );
};

export default ThumbnailGenerator;
