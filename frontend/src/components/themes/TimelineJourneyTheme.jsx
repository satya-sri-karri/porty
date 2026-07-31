import React, { useState, useEffect } from "react";

const TimelineJourneyTheme = ({ data }) => {
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
    style.id = "timeline-keyframes";
    style.textContent = `
      @keyframes dotPulse { 0%,100% { box-shadow:0 0 0 0 rgba(99,102,241,0.4); } 50% { box-shadow:0 0 0 8px rgba(99,102,241,0); } }
      @keyframes fadeSlide { 0% { opacity:0; transform:translateX(-12px); } 100% { opacity:1; transform:translateX(0); } }
    `;
    document.head.appendChild(style);
    return () => document.getElementById("timeline-keyframes")?.remove();
  }, []);

  const ACCENT = themeColors.accent || "#6366F1";
  const BG = themeColors.bg || "#0F0F1A";
  const TEXT = themeColors.text || "#E0E0E0";
  const ACCENT2 = "#EC4899";
  const GRADIENT = `linear-gradient(180deg,${ACCENT},${ACCENT2})`;
  const CARD_BG = "rgba(16,16,26,0.9)";
  const BORDER = "rgba(99,102,241,0.1)";

  const timelineEntry = (extra = {}) => ({
    background: CARD_BG, border: "1px solid " + BORDER,
    borderRadius: 16, padding: 22, position: "relative",
    animation: "fadeSlide 0.4s ease-out", ...extra,
  });

  const currentYear = new Date().getFullYear();

  const tabs = [
    { id: "about", label: "Origin", year: currentYear },
    { id: "skills", label: "Toolkit" },
    { id: "projects", label: "Builds" },
    { id: "experience", label: "Growth" },
    { id: "more", label: "Extras" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: BG, fontFamily: "'Quicksand', 'Inter', sans-serif", color: TEXT, position: "relative" }}>
      <div style={{ position: "fixed", top: "-20%", right: "-20%", width: "60%", height: "60%", borderRadius: "50%", background: `radial-gradient(circle,${ACCENT}0D,transparent 70%)`, pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", bottom: "-20%", left: "-20%", width: "60%", height: "60%", borderRadius: "50%", background: "radial-gradient(circle,rgba(236,72,153,0.05),transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 780, margin: "0 auto", padding: "0 24px 60px" }}>
        <div style={{ textAlign: "center", padding: "40px 0 32px", borderBottom: "1px solid " + BORDER, marginBottom: 32 }}>
          {avatarUrl && (
            <img src={avatarUrl} alt={name} onError={e => e.target.style.display = "none"}
              style={{ width: 72, height: 72, borderRadius: "50%", objectFit: "cover", marginBottom: 16, border: "2px solid " + ACCENT, boxShadow: "0 0 40px rgba(99,102,241,0.15)" }} />
          )}
          <h1 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 800, letterSpacing: "-0.03em", background: GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 6 }}>{name}</h1>
          {title && <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", fontWeight: 400 }}>{title}</p>}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                padding: "5px 14px", borderRadius: 999, fontSize: 11, fontWeight: 500,
                color: "rgba(255,255,255,0.5)", border: "1px solid " + BORDER,
                textDecoration: "none", transition: "all 0.3s",
              }}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 40, position: "relative" }}>
          <div style={{ position: "absolute", left: 15, top: 0, bottom: 0, width: 2, background: "rgba(99,102,241,0.15)" }} />
          {tabs.map((t, i) => (
            <button key={t.id} onClick={() => setActive(t.id)} style={{
              display: "flex", alignItems: "center", gap: 16, padding: "12px 0",
              background: "transparent", border: "none", cursor: "pointer", textAlign: "left", position: "relative",
            }}>
              <div style={{
                width: 32, height: 32, borderRadius: "50%", flexShrink: 0, zIndex: 1,
                background: active === t.id ? GRADIENT : "rgba(255,255,255,0.05)",
                border: active === t.id ? "none" : "2px solid rgba(99,102,241,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 10, fontWeight: 700, color: active === t.id ? "#fff" : "rgba(255,255,255,0.3)",
                transition: "all 0.3s",
                animation: active === t.id ? "dotPulse 2s infinite" : "none",
              }}>
                {i + 1}
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: active === t.id ? 700 : 500, color: active === t.id ? "#fff" : "rgba(255,255,255,0.4)", transition: "color 0.3s" }}>
                  {t.label}
                </div>
                {t.year && <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)" }}>{t.year}</div>}
              </div>
            </button>
          ))}
        </div>

        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 2, background: `linear-gradient(180deg,${ACCENT},${ACCENT2})`, opacity: 0.2 }} />

          {active === "about" && (
            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, marginLeft: 20 }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: ACCENT, boxShadow: `0 0 20px ${ACCENT}` }} />
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>The Beginning · {currentYear}</div>
              </div>
              <div style={{ ...timelineEntry() }}>
                <p style={{ fontSize: 14, lineHeight: 2, color: "rgba(255,255,255,0.7)" }}>{about}</p>
                <div style={{ marginTop: 16, borderTop: "1px solid " + BORDER, paddingTop: 12, fontSize: 11, color: "rgba(255,255,255,0.25)" }}>
                  {contact?.email && <span>{contact.email}</span>}
                  {contact?.phone && <span style={{ marginLeft: 16 }}>{contact.phone}</span>}
                </div>
              </div>
            </div>
          )}

          {active === "skills" && skills?.length > 0 && (
            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, marginLeft: 20 }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: ACCENT2, boxShadow: `0 0 20px ${ACCENT2}` }} />
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Skills & Tools</div>
              </div>
              <div style={{ ...timelineEntry() }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {skills.map((s, i) => (
                    <span key={i} style={{
                      padding: "8px 18px", borderRadius: 999, fontSize: 13, fontWeight: 500,
                      background: i % 2 === 0 ? "rgba(99,102,241,0.08)" : "rgba(236,72,153,0.08)",
                      border: `1px solid ${i % 2 === 0 ? "rgba(99,102,241,0.2)" : "rgba(236,72,153,0.2)"}`,
                      color: i % 2 === 0 ? ACCENT : ACCENT2,
                    }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {active === "projects" && projects?.length > 0 && (
            <div style={{ position: "relative" }}>
              {projects.map((p, i) => (
                <div key={i} style={{ position: "relative" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, marginLeft: 20 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: i % 2 === 0 ? ACCENT : ACCENT2 }} />
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", fontFamily: "monospace" }}>Project #{i + 1}</div>
                  </div>
                  <div style={{ ...timelineEntry(), borderLeft: `3px solid ${i % 2 === 0 ? ACCENT : ACCENT2}` }}>
                    {p.image && <img src={p.image} alt={p.title} style={{ width: "100%", height: "auto", maxHeight: 200, borderRadius: 12, marginBottom: 12, border: `2px solid ${i % 2 === 0 ? ACCENT : ACCENT2}`, objectFit: "cover" }} />}
                    <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{p.title}</h3>
                    <p style={{ fontSize: 13, lineHeight: 1.8, color: "rgba(255,255,255,0.55)", marginBottom: 12 }}>{p.description}</p>
                    {p.techStack?.length > 0 && (
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 }}>
                        {p.techStack.map((t, j) => (
                          <span key={j} style={{ fontSize: 11, fontFamily: "monospace", color: ACCENT, background: "rgba(99,102,241,0.06)", padding: "3px 8px", borderRadius: 6 }}>{t}</span>
                        ))}
                      </div>
                    )}
                    <div style={{ display: "flex", gap: 16 }}>
                      {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: ACCENT, textDecoration: "none", fontWeight: 500 }}>Live →</a>}
                      {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Source</a>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {active === "experience" && experience?.length > 0 && (
            <div style={{ position: "relative" }}>
              {experience.map((e, i) => (
                <div key={i} style={{ position: "relative" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, marginLeft: 20 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: i % 2 === 0 ? ACCENT : ACCENT2 }} />
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", fontFamily: "monospace" }}>
                      {e.duration || `Chapter ${i + 1}`}
                    </div>
                    {e.current && <span style={{ fontSize: 9, color: "#22C55E", fontWeight: 600 }}>● Present</span>}
                  </div>
                  <div style={{ ...timelineEntry() }}>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>{e.role}</div>
                    <div style={{ fontSize: 13, color: ACCENT, fontWeight: 500, marginTop: 4, marginBottom: 10 }}>{e.company}</div>
                    {e.description && <p style={{ fontSize: 13, lineHeight: 1.8, color: "rgba(255,255,255,0.55)" }}>{e.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          )}

          {active === "more" && (
            <div style={{ position: "relative" }}>
              {certifications?.length > 0 && (
                <>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, marginLeft: 20 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: ACCENT }} />
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", fontWeight: 600, letterSpacing: "0.05em" }}>Certifications</div>
                  </div>
                  <div style={{ ...timelineEntry() }}>
                    {certifications.map((c, i) => (
                      <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: i < certifications.length - 1 ? "1px solid " + BORDER : "none" }}>
                        <div><span style={{ fontSize: 13, fontWeight: 500 }}>{c.title}</span><span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginLeft: 8 }}>— {c.issuer}</span></div>
                        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{c.date}{c.credentialUrl && <a href={c.credentialUrl} target="_blank" rel="noopener noreferrer" style={{ color: ACCENT, marginLeft: 8, textDecoration: "none" }}>Verify</a>}</div>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {achievements?.length > 0 && (
                <>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, marginLeft: 20, marginTop: 8 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: ACCENT2 }} />
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", fontWeight: 600, letterSpacing: "0.05em" }}>Achievements</div>
                  </div>
                  <div style={{ ...timelineEntry() }}>
                    {achievements.map((a, i) => (
                      <div key={i} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: i < achievements.length - 1 ? "1px solid " + BORDER : "none", alignItems: "flex-start" }}>
                        <span style={{ fontSize: 18 }}>{a.icon || "🏆"}</span>
                        <div><div style={{ fontSize: 13, fontWeight: 500 }}>{a.title}</div>{a.description && <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{a.description}</div>}{a.date && <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 2 }}>{a.date}</div>}</div>
                      </div>
                    ))}
                  </div>
                </>
              )}
              {codingProfiles?.length > 0 && (
                <>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, marginLeft: 20, marginTop: 8 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: ACCENT }} />
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", fontWeight: 600, letterSpacing: "0.05em" }}>Coding Profiles</div>
                  </div>
                  <div style={{ ...timelineEntry() }}>
                    {codingProfiles.map((p, i) => (
                      <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: i < codingProfiles.length - 1 ? "1px solid " + BORDER : "none", textDecoration: "none" }}>
                        <div><span style={{ fontSize: 13, fontWeight: 500, color: ACCENT }}>{p.platform}</span><span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", marginLeft: 8 }}>@{p.username}</span></div>
                        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{p.rating && `★ ${p.rating}`}{p.rating && p.solved ? " · " : ""}{p.solved && `${p.solved}`}</div>
                      </a>
                    ))}
                  </div>
                </>
              )}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, marginLeft: 20, marginTop: 8 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: ACCENT2 }} />
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", fontWeight: 600, letterSpacing: "0.05em" }}>Contact</div>
              </div>
              <div style={{ ...timelineEntry() }}>
                {contact?.email && <div style={{ marginBottom: 8, fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{contact.email}</div>}
                {contact?.phone && <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{contact.phone}</div>}
              </div>
            </div>
          )}
        </div>

        <div style={{ textAlign: "center", marginTop: 48, fontSize: 11, color: "rgba(255,255,255,0.15)", paddingTop: 20, borderTop: "1px solid " + BORDER }}>
          <span style={{ background: GRADIENT, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 600 }}>{name}</span> · Journey Timeline
        </div>
      </div>
    </div>
  );
};

export default TimelineJourneyTheme;
