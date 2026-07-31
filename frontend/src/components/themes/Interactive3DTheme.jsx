import React, { useState, useEffect, useRef } from "react";

const Interactive3DTheme = ({ data }) => {
  const { name, title, about, avatarUrl, skills, projects, experience,
    certifications, achievements, codingProfiles, contact, socialLinks, themeColors = {} } = data;
  const [active, setActive] = useState("about");
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const socials = [
    { href: socialLinks?.github, label: "GitHub" },
    { href: socialLinks?.linkedin, label: "LinkedIn" },
    { href: socialLinks?.twitter, label: "Twitter" },
    { href: socialLinks?.website, label: "Website" },
    { href: contact?.email ? `mailto:${contact.email}` : null, label: "Email" },
  ].filter(s => s.href);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e) => {
      const rect = el.getBoundingClientRect();
      setMouse({ x: ((e.clientX - rect.left) / rect.width - 0.5) * 2, y: ((e.clientY - rect.top) / rect.height - 0.5) * -2 });
    };
    el.addEventListener("mousemove", handler);
    return () => el.removeEventListener("mousemove", handler);
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.id = "interactive3d-keyframes";
    style.textContent = `
      @keyframes float { 0%,100% { transform:translateY(0px); } 50% { transform:translateY(-8px); } }
      @keyframes particle { 0% { transform:translateY(0) scale(1); opacity:0; } 50% { opacity:1; } 100% { transform:translateY(-60px) scale(0); opacity:0; } }
    `;
    document.head.appendChild(style);
    return () => document.getElementById("interactive3d-keyframes")?.remove();
  }, []);

  const ACCENT = themeColors.accent || "#6C5CE7";
  const BG = themeColors.bg || "#0A0A0F";
  const TEXT = themeColors.text || "#E0E0E0";
  const ACCENT2 = "#00D2D3";
  const CARD_BG = "rgba(18,18,30,0.85)";
  const BORDER = "rgba(108,92,231,0.15)";

  const tiltStyle = (factor = 1) => ({
    transform: `rotateX(${mouse.y * factor}deg) rotateY(${mouse.x * factor}deg)`,
    transformStyle: "preserve-3d",
    transition: "transform 0.08s ease-out",
  });

  const floatCard = {
    ...tiltStyle(8),
    background: CARD_BG,
    border: "1px solid " + BORDER,
    borderRadius: 20,
    padding: 28,
    boxShadow: "0 10px 60px rgba(108,92,231,0.08), 0 0 80px rgba(0,210,211,0.03)",
    transformStyle: "preserve-3d",
  };

  const tabs = [
    { id: "about", label: "About" }, { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" }, { id: "experience", label: "Timeline" },
    { id: "more", label: "More" },
  ];

  return (
    <div ref={ref} style={{ minHeight: "100vh", background: BG, fontFamily: "'Epilogue', 'Inter', sans-serif", color: TEXT, position: "relative", overflowX: "hidden", perspective: "1200px" }}>
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} style={{
          position: "fixed", width: 3, height: 3, borderRadius: "50%",
          background: i % 2 === 0 ? ACCENT : ACCENT2,
          left: `${(i * 7 + 13) % 100}%`, top: `${(i * 11 + 7) % 100}%`,
          animation: `particle ${3 + (i % 4)}s ease-in-out ${i * 0.4}s infinite`,
          pointerEvents: "none", zIndex: 0, opacity: 0.3,
        }} />
      ))}
      <div style={{ position: "fixed", top: "10%", right: "10%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle,rgba(108,92,231,0.06),transparent)", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 960, margin: "0 auto", padding: "0 24px 60px" }}>
        <nav style={{ display: "flex", justifyContent: "center", gap: 4, padding: "20px 0", position: "sticky", top: 0, zIndex: 100, transformStyle: "preserve-3d", ...tiltStyle(2) }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setActive(t.id)} style={{
              padding: "10px 24px", border: `1px solid ${active === t.id ? ACCENT : "transparent"}`,
              borderRadius: 999, fontSize: 13, fontWeight: 500, cursor: "pointer",
              background: active === t.id ? "rgba(108,92,231,0.1)" : "transparent",
              color: active === t.id ? ACCENT : "rgba(255,255,255,0.4)", transition: "all 0.3s",
            }}>
              {t.label}
            </button>
          ))}
        </nav>

        <div style={{ ...floatCard, marginBottom: 24, textAlign: "center", animation: "float 4s ease-in-out infinite" }}>
          {avatarUrl && (
            <img src={avatarUrl} alt={name} onError={e => e.target.style.display = "none"}
              style={{ width: 80, height: 80, borderRadius: "20px", objectFit: "cover", marginBottom: 16, border: "2px solid " + BORDER, boxShadow: "0 8px 40px rgba(108,92,231,0.2)" }} />
          )}
          <h1 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontFamily: "'Epilogue', sans-serif", fontWeight: 800, background: `linear-gradient(135deg,#fff,${ACCENT2})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 6 }}>{name}</h1>
          {title && <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 16, fontWeight: 400 }}>{title}</p>}
          <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                padding: "6px 16px", borderRadius: 10, fontSize: 12, fontWeight: 500,
                color: "rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.03)",
                border: "1px solid " + BORDER, textDecoration: "none",
              }}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {active === "about" && about && (
          <div style={{ ...floatCard }}>
            <p style={{ fontSize: 14, lineHeight: 2, color: "rgba(255,255,255,0.7)" }}>{about}</p>
          </div>
        )}

        {active === "skills" && skills?.length > 0 && (
          <div style={{ ...floatCard }}>
            <h2 style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>Skills</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {skills.map((s, i) => (
                <span key={i} style={{
                  padding: "8px 18px", borderRadius: 12, fontSize: 13, fontWeight: 500,
                  background: i % 2 === 0 ? "rgba(108,92,231,0.08)" : "rgba(0,210,211,0.08)",
                  border: `1px solid ${i % 2 === 0 ? "rgba(108,92,231,0.2)" : "rgba(0,210,211,0.2)"}`,
                  color: i % 2 === 0 ? ACCENT : ACCENT2,
                }}>{s}</span>
              ))}
            </div>
          </div>
        )}

        {active === "projects" && projects?.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {projects.map((p, i) => (
              <div key={i} style={{ ...floatCard, ...tiltStyle(6 + i * 2), borderLeft: `3px solid ${i % 2 === 0 ? ACCENT : ACCENT2}` }}>
                {p.image && (
                  <img src={p.image} alt={p.title} style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 12, marginBottom: 16, border: `2px solid ${ACCENT}`, transition: "transform 0.3s" }}
                    onMouseEnter={e => e.currentTarget.style.transform = "perspective(800px) rotateX(4deg)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "perspective(800px) rotateX(0deg)"} />
                )}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700 }}>{p.title}</h3>
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,0.2)" }}>3D/{String(i + 1).padStart(2, "0")}</span>
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.8, color: "rgba(255,255,255,0.5)", marginBottom: 14 }}>{p.description}</p>
                {p.techStack?.length > 0 && (
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
                    {p.techStack.map((t, j) => (
                      <span key={j} style={{ fontSize: 11, fontFamily: "monospace", color: "rgba(255,255,255,0.35)", background: "rgba(255,255,255,0.03)", padding: "3px 8px", borderRadius: 6, border: "1px solid rgba(255,255,255,0.05)" }}>{t}</span>
                    ))}
                  </div>
                )}
                <div style={{ display: "flex", gap: 16 }}>
                  {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: ACCENT, textDecoration: "none" }}>Live →</a>}
                  {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: ACCENT2, textDecoration: "none" }}>Source</a>}
                </div>
              </div>
            ))}
          </div>
        )}

        {active === "experience" && experience?.length > 0 && (
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 1, background: `linear-gradient(180deg,${ACCENT},${ACCENT2})`, opacity: 0.3 }} />
            {experience.map((e, i) => (
              <div key={i} style={{ ...floatCard, marginBottom: 16, marginLeft: 40, position: "relative", ...tiltStyle(5) }}>
                <div style={{ position: "absolute", left: -33, top: 30, width: 12, height: 12, borderRadius: "50%", background: i % 2 === 0 ? ACCENT : ACCENT2, border: "2px solid #0A0A0F", boxShadow: `0 0 20px ${i % 2 === 0 ? ACCENT : ACCENT2}` }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>{e.role}</div>
                    <div style={{ fontSize: 13, color: ACCENT, marginTop: 2 }}>{e.company}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "monospace" }}>{e.duration}</div>
                    {e.current && <span style={{ fontSize: 10, color: "#22C55E", fontWeight: 600 }}>● Current</span>}
                  </div>
                </div>
                {e.description && <p style={{ fontSize: 13, lineHeight: 1.8, color: "rgba(255,255,255,0.5)", marginTop: 10 }}>{e.description}</p>}
              </div>
            ))}
          </div>
        )}

        {active === "more" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {certifications?.length > 0 && (
              <div style={{ ...floatCard }}>
                <h2 style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Certifications</h2>
                {certifications.map((c, i) => (
                  <div key={i} style={{ padding: "10px 0", borderBottom: i < certifications.length - 1 ? "1px solid " + BORDER : "none" }}>
                    <div style={{ fontSize: 14, fontWeight: 500, color: ACCENT }}>{c.title}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{c.issuer}{c.date && ` · ${c.date}`}</div>
                    {c.credentialUrl && <a href={c.credentialUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: ACCENT2, textDecoration: "none", marginTop: 4, display: "inline-block" }}>Verify →</a>}
                  </div>
                ))}
              </div>
            )}
            {achievements?.length > 0 && (
              <div style={{ ...floatCard }}>
                <h2 style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Achievements</h2>
                {achievements.map((a, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, padding: "10px 0", borderBottom: i < achievements.length - 1 ? "1px solid " + BORDER : "none", alignItems: "flex-start" }}>
                    <span style={{ fontSize: 20 }}>{a.icon || "🏆"}</span>
                    <div><div style={{ fontSize: 14, fontWeight: 500 }}>{a.title}</div>{a.description && <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{a.description}</div>}{a.date && <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{a.date}</div>}</div>
                  </div>
                ))}
              </div>
            )}
            {codingProfiles?.length > 0 && (
              <div style={{ ...floatCard }}>
                <h2 style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Coding Profiles</h2>
                {codingProfiles.map((p, i) => (
                  <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: i < codingProfiles.length - 1 ? "1px solid " + BORDER : "none", textDecoration: "none" }}>
                    <div><span style={{ fontSize: 13, fontWeight: 500, color: ACCENT }}>{p.platform}</span><span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginLeft: 8 }}>@{p.username}</span></div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{p.rating && `★ ${p.rating}`}{p.rating && p.solved ? " · " : ""}{p.solved && `${p.solved} solved`}</div>
                  </a>
                ))}
              </div>
            )}
            <div style={{ ...floatCard }}>
              <h2 style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>Contact</h2>
              {contact?.email && <div style={{ marginBottom: 8, fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{contact.email}</div>}
              {contact?.phone && <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{contact.phone}</div>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Interactive3DTheme;
