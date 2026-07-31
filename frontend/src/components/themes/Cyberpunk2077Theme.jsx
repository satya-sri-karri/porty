import React, { useState, useEffect } from "react";

const Cyberpunk2077Theme = ({ data }) => {
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

  useEffect(() => {
    const style = document.createElement("style");
    style.id = "cyberpunk-keyframes";
    style.textContent = `
      @keyframes scanline { 0% { transform:translateY(-100%); } 100% { transform:translateY(100vh); } }
      @keyframes glitch { 0%,90%,100% { transform:translate(0); } 92% { transform:translate(-2px,1px); } 94% { transform:translate(2px,-1px); } 96% { transform:translate(-1px,2px); } 98% { transform:translate(1px,-2px); } }
      @keyframes flicker { 0%,19%,21%,23%,25%,54%,56%,100% { opacity:1; } 20%,24%,55% { opacity:0.6; } }
      @keyframes neonPulse { 0%,100% { box-shadow:0 0 5px rgba(255,215,0,0.3),0 0 10px rgba(255,215,0,0.1); } 50% { box-shadow:0 0 15px rgba(255,215,0,0.6),0 0 30px rgba(255,215,0,0.2); } }
    `;
    document.head.appendChild(style);
    return () => document.getElementById("cyberpunk-keyframes")?.remove();
  }, []);

  const YELLOW = themeColors.accent || "#FFD700";
  const BG = themeColors.bg || "#0A0A0A";
  const TEXT = themeColors.text || "#FFFFFF";
  const PINK = "#FF2D95";
  const CYAN = "#00F0FF";
  const MUTED = "rgba(255,215,0,0.4)";
  const CARD_BG = "rgba(15,15,15,0.95)";

  const hudCard = { background: CARD_BG, border: "1px solid rgba(255,215,0,0.25)", padding: 24, position: "relative" };

  const sectionHeader = (label) => (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
      <span style={{ fontSize: 10, color: YELLOW, letterSpacing: "0.15em", fontWeight: 700, fontFamily: "monospace" }}>[{label}]</span>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg,${YELLOW},transparent)` }} />
      <span style={{ fontSize: 9, color: MUTED, fontFamily: "monospace" }}>● SYS.OK</span>
    </div>
  );

  const tabs = [
    { id: "about", label: "IDENTITY" }, { id: "skills", label: "PROTOCOLS" },
    { id: "projects", label: "OPERATIONS" }, { id: "experience", label: "RECORDS" },
    { id: "more", label: "DATABASE" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: BG, fontFamily: "'Rajdhani','Arial',sans-serif", color: TEXT, position: "relative", overflowX: "hidden" }}>
      <div style={{ position: "fixed", left: 0, right: 0, top: 0, height: "2px", background: `linear-gradient(90deg,transparent,${YELLOW},transparent)`, animation: "scanline 3s linear infinite", pointerEvents: "none", zIndex: 999, opacity: 0.15 }} />
      <div style={{ position: "fixed", left: 0, top: 0, bottom: 0, width: 3, background: `linear-gradient(180deg,${YELLOW},${PINK},${YELLOW})`, opacity: 0.3, zIndex: 1 }} />
      <div style={{ position: "fixed", right: 0, top: 0, bottom: 0, width: 3, background: `linear-gradient(180deg,${YELLOW},${CYAN},${YELLOW})`, opacity: 0.3, zIndex: 1 }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 960, margin: "0 auto", padding: "20px 24px 60px" }}>
        <div style={{ border: "1px solid rgba(255,215,0,0.2)", padding: "12px 20px", marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(10,10,10,0.9)" }}>
          <div style={{ display: "flex", gap: 24, fontSize: 10, letterSpacing: "0.1em", color: MUTED }}>
            <span style={{ color: YELLOW }}>CYBERPUNK://PORTFOLIO</span>
            <span>VER 2.0.7</span>
          </div>
          <div style={{ fontSize: 10, color: PINK, fontFamily: "monospace", animation: "flicker 3s infinite" }}>█ SYSTEM ONLINE</div>
        </div>

        <div style={{ display: "flex", gap: 2, marginBottom: 24, flexWrap: "wrap" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setActive(t.id)} style={{
              padding: "8px 20px", border: `1px solid ${active === t.id ? YELLOW : "rgba(255,215,0,0.15)"}`,
              background: active === t.id ? "rgba(255,215,0,0.08)" : "transparent",
              color: active === t.id ? YELLOW : MUTED, fontSize: 11, cursor: "pointer",
              fontWeight: 700, letterSpacing: "0.1em", fontFamily: "inherit",
            }}>
              ▸ {t.label}
            </button>
          ))}
        </div>

        <div style={{ ...hudCard, marginBottom: 20, animation: "neonPulse 3s infinite" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            {avatarUrl && (
              <div style={{ border: "2px solid " + YELLOW, padding: 3, animation: "glitch 4s infinite" }}>
                <img src={avatarUrl} alt={name} onError={e => e.target.style.display = "none"} style={{ width: 80, height: 80, objectFit: "cover", display: "block" }} />
              </div>
            )}
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, color: MUTED, letterSpacing: "0.15em", marginBottom: 4, fontFamily: "monospace" }}>IDENTITY PROTOCOL</div>
              <h1 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 900, color: YELLOW, marginBottom: 4, letterSpacing: "-0.02em" }}>{name}</h1>
              {title && <div style={{ fontSize: 13, color: CYAN, fontWeight: 600, marginBottom: 12 }}>⌨ {title}</div>}
              <p style={{ fontSize: 12, lineHeight: 1.8, color: "rgba(255,255,255,0.55)", maxWidth: 500 }}>{about}</p>
            </div>
          </div>
          {socials.length > 0 && (
            <div style={{ marginTop: 16, borderTop: "1px solid rgba(255,215,0,0.1)", paddingTop: 12, display: "flex", gap: 12, flexWrap: "wrap" }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                  padding: "4px 12px", border: "1px solid rgba(255,215,0,0.15)", fontSize: 10,
                  color: MUTED, textDecoration: "none", letterSpacing: "0.08em", fontFamily: "monospace",
                }}>
                  [ {s.label.toUpperCase()} ]
                </a>
              ))}
            </div>
          )}
        </div>

        {active === "about" && (
          <div style={{ ...hudCard }}>
            {sectionHeader("IDENTITY DATA")}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, fontSize: 11, color: "rgba(255,255,255,0.6)" }}>
              <div><span style={{ color: MUTED }}>NAME:</span> {name}</div>
              {title && <div><span style={{ color: MUTED }}>ROLE:</span> {title}</div>}
              <div><span style={{ color: MUTED }}>CONTACT:</span> {contact?.email || "N/A"}</div>
              <div><span style={{ color: MUTED }}>STATUS:</span> <span style={{ color: "#22C55E" }}>ACTIVE</span></div>
            </div>
          </div>
        )}

        {active === "skills" && skills?.length > 0 && (
          <div style={{ ...hudCard }}>
            {sectionHeader("INSTALLED PROTOCOLS")}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {skills.map((s, i) => (
                <span key={i} style={{
                  padding: "6px 14px", border: `1px solid ${i % 3 === 0 ? YELLOW : i % 3 === 1 ? PINK : CYAN}`,
                  fontSize: 11, color: i % 3 === 0 ? YELLOW : i % 3 === 1 ? PINK : CYAN,
                  background: "rgba(255,215,0,0.03)", fontWeight: 600, fontFamily: "monospace",
                }}>
                  ▸ {s.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
        )}

        {active === "projects" && projects?.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {sectionHeader("ACTIVE OPERATIONS")}
            {projects.map((p, i) => (
              <div key={i} style={{ ...hudCard, borderColor: i % 2 === 0 ? "rgba(255,215,0,0.3)" : "rgba(255,45,149,0.3)" }}>
                {p.image && (
                  <img src={p.image} alt={p.title}
                    style={{
                      width: "100%",
                      height: 180,
                      objectFit: "cover",
                      borderRadius: 0,
                      border: `1px solid ${YELLOW}`,
                      marginBottom: 12,
                    }}
                  />
                )}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: YELLOW }}>{p.title}</h3>
                  <span style={{ fontSize: 9, color: MUTED, fontFamily: "monospace" }}>OP-{String(i + 1).padStart(3, "0")}</span>
                </div>
                <p style={{ fontSize: 12, lineHeight: 1.8, color: "rgba(255,255,255,0.55)", marginBottom: 12 }}>{p.description}</p>
                {p.techStack?.length > 0 && (
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
                    {p.techStack.map((t, j) => (
                      <span key={j} style={{ fontSize: 10, color: CYAN, background: "rgba(0,240,255,0.06)", padding: "3px 8px", border: "1px solid rgba(0,240,255,0.15)" }}>{t}</span>
                    ))}
                  </div>
                )}
                <div style={{ display: "flex", gap: 12 }}>
                  {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, color: YELLOW, textDecoration: "none", borderBottom: "1px dashed " + YELLOW, fontFamily: "monospace" }}>DEPLOY</a>}
                  {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, color: PINK, textDecoration: "none", borderBottom: "1px dashed " + PINK, fontFamily: "monospace" }}>SOURCE</a>}
                </div>
              </div>
            ))}
          </div>
        )}

        {active === "experience" && experience?.length > 0 && (
          <div>
            {sectionHeader("MISSION RECORDS")}
            {experience.map((e, i) => (
              <div key={i} style={{ ...hudCard, marginBottom: 14, borderLeft: `3px solid ${i % 2 === 0 ? YELLOW : PINK}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{e.role}</div>
                    <div style={{ fontSize: 12, color: CYAN, marginTop: 2, fontFamily: "monospace" }}>@ {e.company}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 10, color: MUTED, fontFamily: "monospace" }}>{e.duration}</div>
                    {e.current && <span style={{ fontSize: 9, color: "#22C55E", background: "rgba(34,197,94,0.1)", padding: "2px 6px", fontFamily: "monospace" }}>ACTIVE</span>}
                  </div>
                </div>
                {e.description && <p style={{ fontSize: 12, lineHeight: 1.8, color: "rgba(255,255,255,0.5)", marginTop: 8 }}>{e.description}</p>}
              </div>
            ))}
          </div>
        )}

        {active === "more" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {certifications?.length > 0 && (
              <div style={{ ...hudCard }}>
                {sectionHeader("CERTIFICATIONS")}
                {certifications.map((c, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: i < certifications.length - 1 ? "1px solid rgba(255,215,0,0.08)" : "none" }}>
                    <div><span style={{ fontSize: 12, color: YELLOW }}>◆ {c.title}</span><span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginLeft: 8 }}>— {c.issuer}</span></div>
                    <div style={{ fontSize: 10, color: MUTED }}>{c.date}</div>
                  </div>
                ))}
              </div>
            )}
            {achievements?.length > 0 && (
              <div style={{ ...hudCard }}>
                {sectionHeader("ACHIEVEMENTS")}
                {achievements.map((a, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, padding: "8px 0", borderBottom: i < achievements.length - 1 ? "1px solid rgba(255,215,0,0.08)" : "none" }}>
                    <span style={{ fontSize: 18 }}>{a.icon || "★"}</span>
                    <div><div style={{ fontSize: 12, color: "#fff" }}>{a.title}</div>{a.description && <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)" }}>{a.description}</div>}</div>
                  </div>
                ))}
              </div>
            )}
            {codingProfiles?.length > 0 && (
              <div style={{ ...hudCard }}>
                {sectionHeader("CODING PROFILES")}
                {codingProfiles.map((p, i) => (
                  <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: i < codingProfiles.length - 1 ? "1px solid rgba(255,215,0,0.08)" : "none", textDecoration: "none" }}>
                    <div><span style={{ fontSize: 12, color: CYAN }}>{p.platform}</span><span style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginLeft: 8 }}>@{p.username}</span></div>
                    <div style={{ fontSize: 10, color: YELLOW, fontFamily: "monospace" }}>{p.rating && `R:${p.rating}`}{p.rating && p.solved ? " " : ""}{p.solved && `S:${p.solved}`}</div>
                  </a>
                ))}
              </div>
            )}
            <div style={{ ...hudCard }}>
              {sectionHeader("CONTACT")}
              {contact?.email && <div style={{ fontSize: 11, color: CYAN, marginBottom: 6, fontFamily: "monospace" }}>{contact.email}</div>}
              {contact?.phone && <div style={{ fontSize: 11, color: CYAN, fontFamily: "monospace" }}>{contact.phone}</div>}
            </div>
          </div>
        )}

        <div style={{ marginTop: 40, textAlign: "center", fontSize: 9, color: MUTED, letterSpacing: "0.15em", borderTop: "1px solid rgba(255,215,0,0.08)", paddingTop: 16 }}>
          <span style={{ color: YELLOW }}>// SYSTEM SHUTDOWN //</span> {name?.toUpperCase()} — PORTFOLIO v2.0.7
        </div>
      </div>
    </div>
  );
};

export default Cyberpunk2077Theme;
