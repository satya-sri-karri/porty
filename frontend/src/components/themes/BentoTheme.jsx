import React, { useState } from "react";

const BentoTheme = ({ data }) => {
  const { name, title, about, avatarUrl, skills, projects, experience,
    certifications, achievements, codingProfiles, contact, socialLinks, themeColors = {} } = data;
  const ACCENT = themeColors.accent || "#2997FF";
  const BG = themeColors.bg || "#000";
  const TEXT = themeColors.text || "#fff";
  const [hovered, setHovered] = useState(null);

  const socials = [
    { href: socialLinks?.github, label: "GitHub" },
    { href: socialLinks?.linkedin, label: "LinkedIn" },
    { href: socialLinks?.twitter, label: "Twitter" },
    { href: socialLinks?.website, label: "Website" },
    { href: contact?.email ? `mailto:${contact.email}` : null, label: "Email" },
  ].filter(s => s.href);

  const card = (extra = {}) => ({
    background: "#111",
    borderRadius: 20,
    border: "1px solid #222",
    padding: 24,
    transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
    overflow: "hidden",
    position: "relative",
    ...extra,
  });

  const hoverStyle = { transform: "scale(1.01)", borderColor: ACCENT, boxShadow: "0 8px 40px rgba(41,151,255,0.25)" };

  return (
    <div style={{ minHeight: "100vh", background: BG, fontFamily: "'DM Sans', 'Inter', sans-serif", color: TEXT, paddingBottom: 60 }}>
      <nav style={{
        height: 52, display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 32px", borderBottom: "1px solid #1A1A1A", position: "sticky", top: 0,
        background: "rgba(0,0,0,0.85)", backdropFilter: "blur(20px)", zIndex: 100,
      }}>
        <span style={{ fontWeight: 700, fontSize: 14, letterSpacing: "-0.02em" }}>{name}</span>
        <div style={{ display: "flex", gap: 20 }}>
          {socials.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 12, color: "#666", textDecoration: "none", fontWeight: 500 }}>
              {s.label}
            </a>
          ))}
        </div>
      </nav>

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "32px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12,1fr)", gridAutoRows: "80px", gap: 14 }}>
          <div style={{ ...card({ gridColumn: "1/9", gridRow: "1/6", background: "linear-gradient(145deg,#0D0D1A,#111)" }), ...(hovered === "hero" ? hoverStyle : {}) }}
            onMouseEnter={() => setHovered("hero")} onMouseLeave={() => setHovered(null)}>
            <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle,rgba(41,151,255,0.15),transparent)", pointerEvents: "none" }} />
            {avatarUrl && (
              <img src={avatarUrl} alt={name} onError={e => e.target.style.display = "none"}
                style={{ width: 52, height: 52, borderRadius: "50%", objectFit: "cover", marginBottom: 16, border: "2px solid #333" }} />
            )}
            <div style={{ fontSize: 11, fontWeight: 600, color: ACCENT, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
              Portfolio
            </div>
            <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontFamily: "'DM Sans', sans-serif", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 10 }}>
              {name}
            </h1>
            {title && <p style={{ fontSize: 14, color: ACCENT, fontWeight: 500, marginBottom: 14 }}>{title}</p>}
            <p style={{ fontSize: 13, color: "#888", lineHeight: 1.7, maxWidth: 380 }}>
              {about?.substring(0, 180)}{about?.length > 180 ? "..." : ""}
            </p>
          </div>

          {skills?.length > 0 && (
            <div style={{ ...card({ gridColumn: "9/13", gridRow: "1/4" }), ...(hovered === "skills" ? hoverStyle : {}) }}
              onMouseEnter={() => setHovered("skills")} onMouseLeave={() => setHovered(null)}>
              <div style={{ fontSize: 11, color: "#555", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>
                Stack
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {(skills || []).slice(0, 10).map((s, i) => (
                  <span key={i} style={{ padding: "4px 10px", background: "#1A1A1A", border: "1px solid #2A2A2A", borderRadius: 999, fontSize: 11, fontWeight: 500, color: "#ccc" }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div style={{ ...card({ gridColumn: "9/13", gridRow: "4/6", background: ACCENT, color: "#fff" }), ...(hovered === "contact" ? { ...hoverStyle, borderColor: "#5BB3FF" } : {}) }}
            onMouseEnter={() => setHovered("contact")} onMouseLeave={() => setHovered(null)}>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10, color: "rgba(255,255,255,0.7)" }}>
              Contact
            </div>
            {contact?.email && (
              <a href={`mailto:${contact.email}`} style={{ fontSize: 13, fontWeight: 700, color: "#fff", display: "block", marginBottom: 6, textDecoration: "none" }}>
                {contact.email}
              </a>
            )}
            {contact?.phone && (
              <a href={`tel:${contact.phone}`} style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", display: "block", textDecoration: "none" }}>
                {contact.phone}
              </a>
            )}
          </div>

          {projects?.length > 0 && (
            <>
              <div style={{ gridColumn: "1/13", gridRow: "6/7", display: "flex", alignItems: "center", paddingLeft: 4 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: "#555", textTransform: "uppercase", letterSpacing: "0.08em" }}>Projects</span>
              </div>
              {projects.slice(0, 3).map((p, i) => (
                <div key={i} style={{ ...card({ gridColumn: `${i * 4 + 1}/${i * 4 + 5}`, gridRow: "7/10" }), ...(hovered === `p${i}` ? hoverStyle : {}) }}
                  onMouseEnter={() => setHovered(`p${i}`)} onMouseLeave={() => setHovered(null)}>
                  {p.image && <img src={p.image} alt={p.title} style={{ width: "100%", height: "auto", maxHeight: 180, borderRadius: 16, marginBottom: 12, border: "1px solid #222", objectFit: "cover" }} />}
                  <div style={{ fontSize: 11, color: "#555", marginBottom: 10, fontFamily: "monospace" }}>{String(i + 1).padStart(2, "0")}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 8 }}>{p.title}</h3>
                  <p style={{ fontSize: 12, color: "#666", lineHeight: 1.6, marginBottom: 12 }}>
                    {p.description?.substring(0, 100)}{p.description?.length > 100 ? "..." : ""}
                  </p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
                    {(p.techStack || []).slice(0, 3).map((t, j) => (
                      <span key={j} style={{ fontSize: 10, fontFamily: "monospace", color: ACCENT, background: "rgba(41,151,255,0.1)", padding: "2px 7px", borderRadius: 4 }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: ACCENT, textDecoration: "none" }}>Live ↗</a>}
                    {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: "#555", textDecoration: "none" }}>GitHub</a>}
                  </div>
                </div>
              ))}
            </>
          )}

          {experience?.length > 0 && (
            <>
              <div style={{ gridColumn: "1/13", gridRow: "10/11", display: "flex", alignItems: "center", paddingLeft: 4 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: "#555", textTransform: "uppercase", letterSpacing: "0.08em" }}>Experience</span>
              </div>
              {experience.slice(0, 2).map((e, i) => (
                <div key={i} style={{ ...card({ gridColumn: `${i * 6 + 1}/${i * 6 + 7}`, gridRow: "11/14" }), ...(hovered === `e${i}` ? hoverStyle : {}) }}
                  onMouseEnter={() => setHovered(`e${i}`)} onMouseLeave={() => setHovered(null)}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 4 }}>{e.role}</div>
                      <div style={{ fontSize: 13, color: ACCENT, fontWeight: 500, marginBottom: 8 }}>{e.company}</div>
                    </div>
                    {e.current && <span style={{ fontSize: 10, fontWeight: 700, color: "#22C55E", background: "rgba(34,197,94,0.1)", padding: "3px 8px", borderRadius: 999, border: "1px solid rgba(34,197,94,0.2)" }}>CURRENT</span>}
                  </div>
                  <div style={{ fontSize: 11, color: "#555", fontFamily: "monospace", marginBottom: 10 }}>{e.duration}</div>
                  {e.description && <p style={{ fontSize: 12, color: "#666", lineHeight: 1.65 }}>{e.description}</p>}
                </div>
              ))}
            </>
          )}

          {(certifications?.length > 0 || achievements?.length > 0 || codingProfiles?.length > 0) && (
            <>
              <div style={{ gridColumn: "1/13", gridRow: "14/15", display: "flex", alignItems: "center", paddingLeft: 4 }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: "#555", textTransform: "uppercase", letterSpacing: "0.08em" }}>More</span>
              </div>
              {certifications?.slice(0, 2).map((c, i) => (
                <div key={`c${i}`} style={card({ gridColumn: `${i * 3 + 1}/${i * 3 + 4}`, gridRow: "15/18", textAlign: "center" })}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>🏅</div>
                  <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "-0.01em", marginBottom: 6 }}>{c.title}</div>
                  <div style={{ fontSize: 11, color: "#555" }}>{c.issuer}</div>
                </div>
              ))}
              {achievements?.slice(0, 2).map((a, i) => (
                <div key={`a${i}`} style={card({ gridColumn: `${(certifications?.length > 0 ? 7 : 0) + i * 3 + 1}/${(certifications?.length > 0 ? 7 : 0) + i * 3 + 4}`, gridRow: "15/18", textAlign: "center" })}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{a.icon || "🏆"}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "-0.01em", marginBottom: 6 }}>{a.title}</div>
                  {a.date && <div style={{ fontSize: 11, color: "#555" }}>{a.date}</div>}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BentoTheme;
