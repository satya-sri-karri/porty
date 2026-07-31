import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTheme } from "../registry/themeRegistry";

const PreviewPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("preview-data-v3");
      if (raw) setData(JSON.parse(raw));
    } catch { }
  }, []);

  if (!data) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 20, textAlign: "center", padding: 40, background: "var(--surface-0)" }}>
        <span style={{ fontSize: 48, opacity: 0.3 }}>👁</span>
        <h2 style={{ fontWeight: 800 }}>No preview data found</h2>
        <Link to="/" className="btn btn-primary" style={{ textDecoration: "none" }}>Go to Builder</Link>
      </div>
    );
  }

  const themeConfig = getTheme(data.theme);
  const ThemeComponent = themeConfig.component;

  return (
    <>
      {/* Preview banner - normal flow, scrolls away to reveal theme navbar */}
      <div style={{
        background: "var(--accent)", color: "#fff",
        padding: "10px 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        fontSize: 13, fontWeight: 600,
      }}>
        <span>👁 Preview — <em>{themeConfig.name}</em> theme</span>
        <div style={{ display: "flex", gap: 10 }}>
          <Link to="/" style={{ color: "#fff", background: "rgba(255,255,255,0.15)", padding: "5px 12px", borderRadius: 6, textDecoration: "none", fontSize: 12 }}>
            ← Back to Builder
          </Link>
          <button onClick={() => window.close()}
            style={{ background: "rgba(255,255,255,0.15)", border: "none", color: "#fff", padding: "5px 10px", borderRadius: 6, cursor: "pointer", fontSize: 12, fontWeight: 600 }}>
            ✕
          </button>
        </div>
      </div>
      <ThemeComponent data={data} />
    </>
  );
};

export default PreviewPage;
