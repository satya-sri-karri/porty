import React, { useEffect } from "react";

const BG = "#05050A";
const CARD_BG = "rgba(255,255,255,0.03)";
const BORDER = "rgba(255,255,255,0.06)";
const TEXT = "#E8E8F0";
const MUTED = "rgba(232,232,240,0.45)";
const GOLD = "#F5C542";
const CYAN = "#5BDEF5";
const PINK = "#F55BC4";
const GREEN = "#4ADE80";
const PURPLE = "#A78BFA";
const COLORS = [GOLD, CYAN, PINK, PURPLE, GREEN];

const SpaceExplorerTheme = ({ data }) => {
  const { name, title, about, avatarUrl, skills, projects, experience,
    certifications, achievements, codingProfiles, contact, socialLinks, themeColors = {} } = data;
  const PURPLE = themeColors.accent || "#A78BFA";
  const BG = themeColors.bg || "#05050A";
  const TEXT = themeColors.text || "#E8E8F0";

  useEffect(() => {
    const style = document.createElement("style");
    style.id = "space-keyframes";
    style.textContent = `
      @keyframes space-twinkle { 0%,100% { opacity:0.3; } 50% { opacity:1; } }
      @keyframes space-float { 0% { transform:translateY(0); } 50% { transform:translateY(-6px); } 100% { transform:translateY(0); } }
      @keyframes space-orbit { 0% { transform:rotate(0deg); } 100% { transform:rotate(360deg); } }
      @keyframes space-glow { 0%,100% { box-shadow:0 0 20px rgba(245,197,66,0.2); } 50% { box-shadow:0 0 40px rgba(245,197,66,0.5); } }
    `;
    document.head.appendChild(style);
    return () => document.getElementById("space-keyframes")?.remove();
  }, []);

  const socials = [
    { href: socialLinks?.github, label: "GitHub" },
    { href: socialLinks?.linkedin, label: "LinkedIn" },
    { href: socialLinks?.twitter, label: "Twitter" },
    { href: socialLinks?.website, label: "Website" },
    { href: contact?.email ? `mailto:${contact.email}` : null, label: "Email" },
  ].filter(s => s.href);

  const stars = Array.from({ length: 80 }, (_, i) => ({
    left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1, delay: `${Math.random() * 5}s`,
    duration: `${Math.random() * 3 + 2}s`,
  }));

  const sectionTitle = (text, color) => (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
      <span style={{ width: 4, height: 24, borderRadius: 2, background: color || GOLD }} />
      <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 700, color: "#fff", margin: 0, fontFamily: "'Orbitron', sans-serif", letterSpacing: "-0.02em" }}>{text}</h2>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: BG, fontFamily: "'Space Grotesk', 'Inter', sans-serif", color: TEXT, position: "relative", overflow: "hidden" }}>
      {stars.map((s, i) => (
        <div key={i} style={{
          position: "fixed", left: s.left, top: s.top, width: s.size, height: s.size,
          borderRadius: "50%", background: "#fff", animation: `space-twinkle ${s.duration} ${s.delay} infinite`,
          pointerEvents: "none", zIndex: 0,
        }} />
      ))}

      <div style={{ position: "relative", zIndex: 1, maxWidth: 960, margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 60, animation: "space-float 4s ease-in-out infinite" }}>
          {avatarUrl && (
            <img src={avatarUrl} alt={name} style={{ width: 100, height: 100, borderRadius: "50%", objectFit: "cover", margin: "0 auto 20px", border: "2px solid " + GOLD, boxShadow: "0 0 30px rgba(245,197,66,0.3)", display: "block" }}
              onError={e => e.target.style.display = "none"} />
          )}
          <div style={{ display: "inline-block", padding: "4px 14px", borderRadius: 999, border: "1px solid rgba(245,197,66,0.3)", fontSize: 11, color: GOLD, marginBottom: 16, letterSpacing: "0.08em", textTransform: "uppercase" }}>Explorer</div>
          <h1 style={{ fontSize: "clamp(3rem,7vw,5rem)", fontWeight: 900, background: `linear-gradient(135deg,${GOLD},${CYAN})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 12, lineHeight: 1.1 }}>{name}</h1>
          {title && <p style={{ fontSize: 18, color: MUTED, fontWeight: 500, marginBottom: 12 }}>{title}</p>}
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.75, maxWidth: 600, margin: "0 auto 24px" }}>{about}</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {socials.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ padding: "8px 18px", borderRadius: 999, border: "1px solid " + BORDER, color: MUTED, fontSize: 13, textDecoration: "none", transition: "border-color 0.2s,color 0.2s" }}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {skills?.length > 0 && (
          <div style={{ marginBottom: 60 }}>
            {sectionTitle("Technologies", CYAN)}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
              {skills.map((s, i) => {
                const c = COLORS[i % COLORS.length];
                return (
                  <span key={i} style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "10px 20px", borderRadius: 999,
                    border: "1px solid " + c,
                    background: "radial-gradient(circle at 30% 30%,rgba(255,255,255,0.06),transparent)",
                    color: c, fontSize: 14, fontWeight: 600,
                    boxShadow: `0 0 20px ${c}22`,
                    animation: "space-float 4s ease-in-out infinite",
                    animationDelay: `${i * 0.3}s`,
                    cursor: "default", position: "relative",
                  }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: c, boxShadow: `0 0 8px ${c}` }} />
                    {s}
                    <span style={{ position: "absolute", width: 20, height: 20, borderRadius: "50%", border: "1px solid " + c, opacity: 0.2, top: -4, right: -6 }} />
                    <span style={{ position: "absolute", width: 10, height: 10, borderRadius: "50%", border: "1px solid " + c, opacity: 0.1, top: -1, right: 2 }} />
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {projects?.length > 0 && (
          <div style={{ marginBottom: 60 }}>
            {sectionTitle("Galaxies", PINK)}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
              {projects.map((p, i) => {
                const c = COLORS[i % COLORS.length];
                return (
                  <div key={i} style={{
                    padding: 24, borderRadius: 16,
                    background: `linear-gradient(135deg,${CARD_BG},rgba(255,255,255,0.01))`,
                    border: "1px solid " + BORDER,
                    position: "relative", overflow: "hidden",
                    animation: "space-glow 4s ease-in-out infinite",
                    animationDelay: `${i * 0.5}s`,
                  }}>
                    <div style={{ position: "absolute", top: "-40%", right: "-40%", width: 120, height: 120, borderRadius: "50%", background: `radial-gradient(circle,${c}15,transparent)`, pointerEvents: "none" }} />
                    {p.image && (
                      <img src={p.image} alt={p.title} style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 12, marginBottom: 16, border: `1px solid ${PURPLE}40`, boxShadow: `0 0 20px ${PURPLE}30` }} />
                    )}
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{p.title}</h3>
                    <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.7, marginBottom: 14 }}>{p.description}</p>
                    {p.techStack?.length > 0 && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 14 }}>
                        {p.techStack.map((t, j) => (
                          <span key={j} style={{ fontSize: 11, padding: "2px 8px", borderRadius: 4, background: `${c}15`, color: c, fontFamily: "monospace" }}>{t}</span>
                        ))}
                      </div>
                    )}
                    <div style={{ display: "flex", gap: 10 }}>
                      {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: c, textDecoration: "none", fontWeight: 600 }}>Launch ↗</a>}
                      {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: MUTED, textDecoration: "none" }}>Source</a>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {experience?.length > 0 && (
          <div style={{ marginBottom: 60 }}>
            {sectionTitle("Flight Path", GOLD)}
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", left: 19, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom,${GOLD},${CYAN},${PINK})`, opacity: 0.4 }} />
              {experience.map((e, i) => (
                <div key={i} style={{ display: "flex", gap: 20, marginBottom: 32, position: "relative" }}>
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: BG, border: `2px solid ${COLORS[i % COLORS.length]}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
                      ⭐
                    </div>
                  </div>
                  <div style={{ flex: 1, paddingTop: 4 }}>
                    <div style={{ fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{e.role}</div>
                    <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 8, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 13, color: COLORS[i % COLORS.length], fontWeight: 600 }}>{e.company}</span>
                      <span style={{ fontSize: 12, color: MUTED, fontFamily: "monospace" }}>{e.duration}</span>
                      {e.current && <span style={{ fontSize: 10, padding: "2px 8px", borderRadius: 999, background: `${GREEN}20`, color: GREEN, fontWeight: 700 }}>Active</span>}
                    </div>
                    {e.description && <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.7, margin: 0 }}>{e.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {certifications?.length > 0 && (
          <div style={{ marginBottom: 60 }}>
            {sectionTitle("Certifications", PURPLE)}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 12 }}>
              {certifications.map((c, i) => (
                <div key={i} style={{ padding: 18, borderRadius: 12, background: CARD_BG, border: "1px solid " + BORDER }}>
                  <span style={{ fontSize: 20 }}>🏅</span>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginTop: 8, marginBottom: 4 }}>{c.title}</div>
                  {c.issuer && <div style={{ fontSize: 12, color: PURPLE }}>{c.issuer}</div>}
                  {c.date && <div style={{ fontSize: 11, color: MUTED, marginTop: 4, fontFamily: "monospace" }}>{c.date}</div>}
                  {c.credentialUrl && <a href={c.credentialUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: PURPLE, marginTop: 6, display: "inline-block" }}>Verify ↗</a>}
                </div>
              ))}
            </div>
          </div>
        )}

        {achievements?.length > 0 && (
          <div style={{ marginBottom: 60 }}>
            {sectionTitle("Achievements", GOLD)}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 12 }}>
              {achievements.map((a, i) => (
                <div key={i} style={{ padding: 20, borderRadius: 12, background: CARD_BG, border: "1px solid " + BORDER, textAlign: "center" }}>
                  <div style={{ fontSize: 32, marginBottom: 10 }}>{a.icon || "🌟"}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 6 }}>{a.title}</div>
                  {a.description && <p style={{ fontSize: 12, color: MUTED, lineHeight: 1.6, margin: 0 }}>{a.description}</p>}
                  {a.date && <div style={{ fontSize: 11, color: GOLD, marginTop: 6, fontFamily: "monospace" }}>{a.date}</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {codingProfiles?.length > 0 && (
          <div style={{ marginBottom: 60 }}>
            {sectionTitle("Space Stations", CYAN)}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 12 }}>
              {codingProfiles.map((p, i) => (
                <a key={i} href={p.url || "#"} target="_blank" rel="noopener noreferrer"
                  style={{ padding: 16, borderRadius: 12, background: CARD_BG, border: "1px solid " + BORDER, textDecoration: "none", color: TEXT, display: "block" }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{p.platform}</div>
                  {p.username && <div style={{ fontSize: 12, color: CYAN, fontFamily: "monospace" }}>@{p.username}</div>}
                  {(p.rating || p.solved) && <div style={{ fontSize: 11, color: MUTED, marginTop: 4 }}>{p.rating && `⭐ ${p.rating}`}{p.rating && p.solved && " · "}{p.solved && `✅ ${p.solved}`}</div>}
                </a>
              ))}
            </div>
          </div>
        )}

        <div style={{ textAlign: "center", borderTop: "1px solid " + BORDER, paddingTop: 48 }}>
          <h2 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 700, marginBottom: 8, fontFamily: "'Orbitron', sans-serif", background: `linear-gradient(135deg,${GOLD},${CYAN})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Send a Signal</h2>
          <p style={{ fontSize: 14, color: MUTED, marginBottom: 28 }}>Ready for new missions and collaborations.</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            {contact?.email && <a href={`mailto:${contact.email}`} style={{ padding: "12px 28px", borderRadius: 999, background: `linear-gradient(135deg,${GOLD},${CYAN})`, color: BG, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>{contact.email}</a>}
            {contact?.phone && <a href={`tel:${contact.phone}`} style={{ padding: "12px 28px", borderRadius: 999, border: "1px solid " + BORDER, color: MUTED, fontSize: 14, textDecoration: "none" }}>{contact.phone}</a>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceExplorerTheme;
