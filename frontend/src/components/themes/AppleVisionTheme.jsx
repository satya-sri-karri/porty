import React, { useState } from "react";

const AppleVisionTheme = ({ data }) => {
  const { name, title, about, avatarUrl, skills, projects, experience,
    certifications, achievements, codingProfiles, contact, socialLinks, themeColors = {} } = data;
  const [active, setActive] = useState("about");

  const socials = [
    { href: socialLinks?.github, label: "GitHub" },
    { href: socialLinks?.linkedin, label: "LinkedIn" },
    { href: socialLinks?.twitter, label: "Twitter" },
    { href: socialLinks?.website, label: "Website" },
    { href: contact?.email ? `mailto:${contact.email}` : null, label: "Email" },
  ].filter(s => s.href);

  const ACCENT = themeColors.accent || "#2997FF";
  const BG = themeColors.bg || "#0A0A0A";
  const TEXT = themeColors.text || "#FFFFFF";

  const glassCard = {
    background: "rgba(255,255,255,0.06)",
    backdropFilter: "blur(32px)",
    WebkitBackdropFilter: "blur(32px)",
    borderRadius: 28,
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 8px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
    padding: 32,
    transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
  };

  const tabs = [
    { id: "about", label: "About" }, { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" }, { id: "experience", label: "Experience" },
    { id: "more", label: "More" },
  ];

  return (
    <div style={{
      minHeight: "100vh", background: BG,
      fontFamily: "'SF Pro Display','Inter',-apple-system,sans-serif",
      color: TEXT, position: "relative", overflowX: "hidden",
    }}>
      <div style={{ position: "fixed", top: "-30%", right: "-20%", width: "80%", height: "80%", borderRadius: "50%", background: `radial-gradient(circle,${ACCENT}14,transparent 70%)`, pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", bottom: "-30%", left: "-20%", width: "70%", height: "70%", borderRadius: "50%", background: "radial-gradient(circle,rgba(255,45,85,0.05),transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 960, margin: "0 auto", padding: "0 24px 60px" }}>
        <nav style={{ display: "flex", justifyContent: "center", gap: 4, padding: "16px 0", position: "sticky", top: 0, zIndex: 100, background: "rgba(10,10,10,0.75)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setActive(t.id)} style={{
              padding: "8px 24px", border: "none", borderRadius: 999, fontSize: 13, fontWeight: 500, cursor: "pointer",
              background: active === t.id ? "rgba(255,255,255,0.1)" : "transparent",
              color: active === t.id ? "#fff" : "rgba(255,255,255,0.4)",
              backdropFilter: active === t.id ? "blur(12px)" : "none", transition: "all 0.3s",
            }}>
              {t.label}
            </button>
          ))}
        </nav>

        <div style={{ ...glassCard, textAlign: "center", marginTop: 24, padding: "48px 32px" }}>
          {avatarUrl && (
            <img src={avatarUrl} alt={name} onError={e => e.target.style.display = "none"}
              style={{ width: 88, height: 88, borderRadius: "50%", objectFit: "cover", marginBottom: 20, border: "2px solid rgba(255,255,255,0.1)", boxShadow: "0 8px 40px rgba(0,0,0,0.4)" }} />
          )}
          <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, letterSpacing: "-0.03em", marginBottom: 6, background: `linear-gradient(135deg,#fff 55%,${ACCENT})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {name}
          </h1>
          {title && <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", fontWeight: 400, marginBottom: 20 }}>{title}</p>}
          <div style={{ display: "flex", justifyContent: "center", gap: 6, flexWrap: "wrap" }}>
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                padding: "6px 16px", borderRadius: 999, fontSize: 12, fontWeight: 500,
                color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.06)", textDecoration: "none", transition: "all 0.3s",
              }}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {active === "about" && about && (
          <div style={{ ...glassCard, marginTop: 20 }}>
            <p style={{ fontSize: 15, lineHeight: 2, color: "rgba(255,255,255,0.7)", fontWeight: 300 }}>{about}</p>
          </div>
        )}

        {active === "skills" && skills?.length > 0 && (
          <div style={{ ...glassCard, marginTop: 20 }}>
            <h2 style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 20 }}>Skills</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {skills.map((s, i) => (
                <span key={i} style={{
                  padding: "8px 18px", borderRadius: 999, fontSize: 13, fontWeight: 500,
                  background: "rgba(255,255,255,0.06)", border: `1px solid ${ACCENT}40`, color: ACCENT,
                }}>{s}</span>
              ))}
            </div>
          </div>
        )}

        {active === "projects" && projects?.length > 0 && (
          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 16 }}>
            <h2 style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", paddingLeft: 4, marginBottom: 4 }}>Projects</h2>
            {projects.map((p, i) => (
              <div key={i} style={{ ...glassCard }}>
                {p.image && <img src={p.image} alt={p.title} style={{ width: "100%", height: "auto", maxHeight: 200, borderRadius: 24, marginBottom: 14, boxShadow: "0 8px 60px rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.08)", objectFit: "cover" }} />}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.02em" }}>{p.title}</h3>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", fontFamily: "monospace" }}>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: "rgba(255,255,255,0.55)", marginBottom: 14, fontWeight: 300 }}>
                  {p.description}
                </p>
                {p.techStack?.length > 0 && (
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
                    {p.techStack.map((t, j) => (
                      <span key={j} style={{ fontSize: 11, fontFamily: "monospace", color: "rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.04)", padding: "3px 8px", borderRadius: 6 }}>{t}</span>
                    ))}
                  </div>
                )}
                <div style={{ display: "flex", gap: 16 }}>
                  {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: ACCENT, textDecoration: "none", fontWeight: 500 }}>Live →</a>}
                  {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Source</a>}
                </div>
              </div>
            ))}
          </div>
        )}

        {active === "experience" && experience?.length > 0 && (
          <div style={{ marginTop: 20 }}>
            <h2 style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16, paddingLeft: 4 }}>Experience</h2>
            <div style={{ position: "relative", paddingLeft: 28 }}>
              <div style={{ position: "absolute", left: 8, top: 0, bottom: 0, width: 1, background: "rgba(255,255,255,0.08)" }} />
              {experience.map((e, i) => (
                <div key={i} style={{ ...glassCard, marginBottom: 14, padding: 24, position: "relative" }}>
                  <div style={{ position: "absolute", left: -23, top: 30, width: 10, height: 10, borderRadius: "50%", background: ACCENT, border: "2px solid #0A0A0A" }} />
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 600 }}>{e.role}</div>
                      <div style={{ fontSize: 13, color: ACCENT, fontWeight: 500, marginTop: 2 }}>{e.company}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontFamily: "monospace" }}>{e.duration}</div>
                      {e.current && <span style={{ fontSize: 10, color: "#22C55E", fontWeight: 600 }}>● Current</span>}
                    </div>
                  </div>
                  {e.description && <p style={{ fontSize: 13, lineHeight: 1.8, color: "rgba(255,255,255,0.5)", marginTop: 10, fontWeight: 300 }}>{e.description}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {active === "more" && (
          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 16 }}>
            {certifications?.length > 0 && (
              <div style={{ ...glassCard }}>
                <h2 style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>Certifications</h2>
                {certifications.map((c, i) => (
                  <div key={i} style={{ padding: "12px 0", borderBottom: i < certifications.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>{c.title}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 2, display: "flex", gap: 8 }}>
                      <span>{c.issuer}</span>
                      {c.date && <span>· {c.date}</span>}
                    </div>
                    {c.credentialUrl && <a href={c.credentialUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: ACCENT, textDecoration: "none", marginTop: 4, display: "inline-block" }}>Verify →</a>}
                  </div>
                ))}
              </div>
            )}
            {achievements?.length > 0 && (
              <div style={{ ...glassCard }}>
                <h2 style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>Achievements</h2>
                {achievements.map((a, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, padding: "12px 0", borderBottom: i < achievements.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                    <span style={{ fontSize: 20 }}>{a.icon || "🏆"}</span>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 500 }}>{a.title}</div>
                      {a.description && <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>{a.description}</div>}
                      {a.date && <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 2 }}>{a.date}</div>}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {codingProfiles?.length > 0 && (
              <div style={{ ...glassCard }}>
                <h2 style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>Coding Profiles</h2>
                {codingProfiles.map((p, i) => (
                  <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: i < codingProfiles.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none", textDecoration: "none" }}>
                    <div>
                      <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>{p.platform}</span>
                      <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginLeft: 8 }}>@{p.username}</span>
                    </div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>
                      {p.rating && `★ ${p.rating}`}{p.rating && p.solved ? " · " : ""}{p.solved && `${p.solved} solved`}
                    </div>
                  </a>
                ))}
              </div>
            )}
            <div style={{ ...glassCard }}>
              <h2 style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>Contact</h2>
              {contact?.email && <div style={{ marginBottom: 8, fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{contact.email}</div>}
              {contact?.phone && <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{contact.phone}</div>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppleVisionTheme;
