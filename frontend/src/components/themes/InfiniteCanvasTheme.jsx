import React, { useEffect } from "react";

const CANVAS = "#F0F0F0";
const TEXT = "#1A1A2E";
const MUTED = "#666680";
const YELLOW = "#FFF9C4";
const GREEN = "#C8E6C9";
const BLUE = "#BBDEFB";
const PINK = "#F8BBD0";
const PURPLE = "#E1BEE7";
const ORANGE = "#FFE0B2";

const COLORS = [YELLOW, GREEN, BLUE, PINK, PURPLE, ORANGE];
const ROTS = ["-2deg", "1.5deg", "-1deg", "2deg", "-1.5deg", "0.5deg"];

const InfiniteCanvasTheme = ({ data }) => {
  const { name, title, about, avatarUrl, skills, projects, experience,
    certifications, achievements, codingProfiles, contact, socialLinks, themeColors = {} } = data;
  const PURPLE = themeColors.accent || "#E1BEE7";
  const CANVAS = themeColors.bg || "#F0F0F0";
  const TEXT = themeColors.text || "#1A1A2E";

  useEffect(() => {
    const s = document.createElement("style");
    s.id = "canvas-anim";
    s.textContent = `@keyframes float {0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}@keyframes wiggle {0%,100%{transform:rotate(0deg)}25%{transform:rotate(1deg)}75%{transform:rotate(-1deg)}}`;
    document.head.appendChild(s);
    return () => document.getElementById("canvas-anim")?.remove();
  }, []);

  const socials = [
    { href: socialLinks?.github, label: "GitHub" },
    { href: socialLinks?.linkedin, label: "LinkedIn" },
    { href: socialLinks?.twitter, label: "Twitter" },
    { href: socialLinks?.website, label: "Website" },
    { href: contact?.email ? `mailto:${contact.email}` : null, label: "Email" },
  ].filter(s => s.href);

  const note = (c, r, extra = {}) => ({
    background: c,
    borderRadius: 4,
    padding: 16,
    boxShadow: `2px 3px 8px rgba(0,0,0,0.08)`,
    transform: `rotate(${r})`,
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
    borderBottom: `2px solid ${c === YELLOW ? "#E0D4A0" : c === GREEN ? "#A5D6A7" : c === BLUE ? "#90CAF9" : c === PINK ? "#F48FB1" : c === PURPLE ? "#CE93D8" : "#FFCC80"}`,
    cursor: "default",
    ...extra,
  });

  const markerHeader = (text, color, rot) => (
    <div style={{
      ...note(color, rot, { display: "inline-block", padding: "6px 20px", fontSize: 13, fontWeight: 700, marginBottom: 28, textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: "'Segoe Print', 'Comic Sans MS', cursive" }),
      animation: "wiggle 3s ease-in-out infinite",
    }}>
      ✏ {text}
    </div>
  );

  return (
    <div style={{
      minHeight: "100vh", background: CANVAS, fontFamily: "'Quicksand', 'Inter', sans-serif",
      color: TEXT, position: "relative", overflow: "auto",
      backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)",
      backgroundSize: "20px 20px",
    }}>
      <div style={{
        position: "fixed", top: 16, left: "50%", transform: "translateX(-50%)",
        zIndex: 100, display: "flex", alignItems: "center", gap: 10,
        background: "#fff", padding: "8px 20px", borderRadius: 12,
        boxShadow: "0 2px 16px rgba(0,0,0,0.1)", fontSize: 13,
      }}>
        <span style={{ fontWeight: 800, color: "#000" }}>{name}</span>
        <span style={{ color: MUTED }}>·</span>
        <span style={{ color: MUTED }}>{title || "Designer"}</span>
        <span style={{ color: MUTED }}>·</span>
        {socials.map(s => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 12, color: MUTED, textDecoration: "none", padding: "2px 10px", borderRadius: 6, background: "rgba(0,0,0,0.04)" }}>
            {s.label}
          </a>
        ))}
      </div>

      <div style={{ padding: "100px 40px 60px", maxWidth: 1200, margin: "0 auto", position: "relative" }}>

        <div style={{
          ...note(YELLOW, "0deg", { maxWidth: 520, margin: "0 auto 80px", textAlign: "center", padding: 36 }),
          animation: "float 3.5s ease-in-out infinite",
        }}>
          {avatarUrl && <img src={avatarUrl} alt={name} style={{ width: 80, height: 80, borderRadius: "50%", objectFit: "cover", margin: "0 auto 16px", border: "3px solid #fff", boxShadow: "0 3px 12px rgba(0,0,0,0.12)", display: "block" }}
            onError={e => e.target.style.display = "none"} />}
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 900, marginBottom: 10, letterSpacing: "-0.03em", fontFamily: "'Segoe Print', 'Comic Sans MS', cursive" }}>{name}</h1>
          {title && <p style={{ fontSize: 14, color: MUTED, fontWeight: 600, marginBottom: 12 }}>{title}</p>}
          <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.8, margin: 0 }}>{about}</p>
        </div>

        {skills?.length > 0 && (
          <div style={{ marginBottom: 60 }}>
            {markerHeader("Skills & Tools", PURPLE, "-1deg")}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
              {skills.map((s, i) => (
                <span key={i} style={{
                  ...note(COLORS[i % COLORS.length], ROTS[i % ROTS.length], { padding: "10px 22px", fontSize: 14, fontWeight: 600 }),
                  animation: "float 3s ease-in-out infinite",
                  animationDelay: `${i * 0.15}s`,
                  cursor: "default",
                }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}

        {projects?.length > 0 && (
          <div style={{ marginBottom: 60 }}>
            {markerHeader("Projects", BLUE, "1deg")}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center" }}>
              {projects.map((p, i) => (
                <div key={i} style={{
                  ...note(COLORS[(i + 2) % COLORS.length], ROTS[(i + 1) % ROTS.length], {
                    width: 300, padding: 20, display: "inline-block",
                  }),
                  cursor: "default",
                }}>
                  {p.image && <img src={p.image} alt={p.title} style={{ width: "100%", height: "auto", maxHeight: 200, borderRadius: 8, transform: `rotate(${i % 2 === 0 ? "-1deg" : "1deg"})`, boxShadow: "2px 3px 8px rgba(0,0,0,0.08)", marginBottom: 12, objectFit: "cover" }} />}
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <span style={{ fontSize: 20 }}>{["🎨", "🚀", "💡", "⚙", "📱", "🌐"][i % 6]}</span>
                    <h3 style={{ fontSize: 16, fontWeight: 800, margin: 0 }}>{p.title}</h3>
                  </div>
                  <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.7, marginBottom: 12 }}>{p.description}</p>
                  {p.techStack?.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 12 }}>
                      {p.techStack.map((t, j) => <span key={j} style={{ fontSize: 10, padding: "2px 8px", background: "rgba(0,0,0,0.05)", borderRadius: 3, fontFamily: "'Courier New', monospace" }}>{t}</span>)}
                    </div>
                  )}
                  <div style={{ display: "flex", gap: 12 }}>
                    {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: TEXT, fontWeight: 700, textDecoration: "underline", textUnderlineOffset: 2 }}>Open ↗</a>}
                    {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: MUTED, textDecoration: "underline" }}>Code</a>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {experience?.length > 0 && (
          <div style={{ marginBottom: 60, position: "relative" }}>
            {markerHeader("Experience", GREEN, "-0.5deg")}
            <div style={{ position: "relative", paddingLeft: 40 }}>
              <div style={{ position: "absolute", left: 16, top: 0, bottom: 0, width: 3, background: "rgba(0,0,0,0.1)", borderLeft: "2px dashed rgba(0,0,0,0.15)" }} />
              {experience.map((e, i) => (
                <div key={i} style={{
                  ...note(COLORS[(i + 3) % COLORS.length], ROTS[(i + 2) % ROTS.length], {
                    width: "90%", marginBottom: 20, marginLeft: i % 2 === 0 ? 0 : 40, position: "relative",
                  }),
                  cursor: "default",
                }}>
                  <div style={{ position: "absolute", left: -32, top: 18, width: 14, height: 14, borderRadius: "50%", background: COLORS[(i + 4) % COLORS.length], border: "2px solid #fff", boxShadow: "0 1px 4px rgba(0,0,0,0.15)" }} />
                  <div style={{ fontSize: 15, fontWeight: 800, marginBottom: 2 }}>{e.role}</div>
                  <div style={{ fontSize: 13, color: MUTED, fontWeight: 600, marginBottom: 6 }}>{e.company} · <span style={{ fontFamily: "'Courier New', monospace", fontSize: 12 }}>{e.duration}</span></div>
                  {e.description && <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.7, margin: 0 }}>{e.description}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginBottom: 60 }}>
          {certifications?.length > 0 && (
            <div style={{ flex: 1, minWidth: 260 }}>
              {markerHeader("Certifications", PINK, "1.5deg")}
              {certifications.map((c, i) => (
                <div key={i} style={{ ...note(PINK, ROTS[(i + 4) % ROTS.length], { marginBottom: 12, cursor: "default" }) }}>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>📜 {c.title}</div>
                  <div style={{ fontSize: 12, color: MUTED }}>{c.issuer}{c.date && ` · ${c.date}`}</div>
                  {c.credentialUrl && <a href={c.credentialUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: TEXT, marginTop: 4, display: "inline-block", textDecoration: "underline" }}>Verify ↗</a>}
                </div>
              ))}
            </div>
          )}
          {achievements?.length > 0 && (
            <div style={{ flex: 1, minWidth: 260 }}>
              {markerHeader("Achievements", ORANGE, "-1.5deg")}
              {achievements.map((a, i) => (
                <div key={i} style={{ ...note(ORANGE, ROTS[(i + 3) % ROTS.length], { marginBottom: 12, cursor: "default" }) }}>
                  <span style={{ fontSize: 22 }}>{a.icon || "🏆"}</span>
                  <div style={{ fontSize: 14, fontWeight: 700, marginTop: 4 }}>{a.title}</div>
                  {a.description && <div style={{ fontSize: 12, color: MUTED }}>{a.description}</div>}
                </div>
              ))}
            </div>
          )}
        </div>

        {codingProfiles?.length > 0 && (
          <div style={{ marginBottom: 60 }}>
            {markerHeader("Coding Profiles", PURPLE, "0.5deg")}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              {codingProfiles.map((p, i) => (
                <a key={i} href={p.url || "#"} target="_blank" rel="noopener noreferrer"
                  style={{ ...note(PURPLE, ROTS[(i + 5) % ROTS.length], { textDecoration: "none", color: TEXT, width: 200, cursor: "pointer" }) }}>
                  <div style={{ fontSize: 14, fontWeight: 700 }}>{p.platform}</div>
                  {p.username && <div style={{ fontSize: 12, color: MUTED, fontFamily: "'Courier New', monospace" }}>@{p.username}</div>}
                  {(p.rating || p.solved) && <div style={{ fontSize: 11, color: MUTED, marginTop: 4 }}>{p.rating && `⭐ ${p.rating}`}{p.rating && p.solved && " · "}{p.solved && `✅ ${p.solved}`}</div>}
                </a>
              ))}
            </div>
          </div>
        )}

        <div style={{ ...note(YELLOW, "0deg", { maxWidth: 520, margin: "0 auto", textAlign: "center", padding: 36 }) }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 900, marginBottom: 10, fontFamily: "'Segoe Print', 'Comic Sans MS', cursive" }}>Let's create together ✨</h2>
          <p style={{ fontSize: 14, color: MUTED, marginBottom: 24, lineHeight: 1.7 }}>Got an idea? Let's sketch it out on the canvas.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {contact?.email && <a href={`mailto:${contact.email}`} style={{ padding: "12px 26px", background: "#1A1A2E", color: "#fff", borderRadius: 8, fontSize: 14, fontWeight: 700, textDecoration: "none" }}>✉ Send a note</a>}
            {contact?.phone && <a href={`tel:${contact.phone}`} style={{ padding: "12px 26px", border: "2px solid #1A1A2E", color: TEXT, borderRadius: 8, fontSize: 14, textDecoration: "none", fontWeight: 600 }}>📞 Call</a>}
          </div>
        </div>

        <div style={{ textAlign: "center", color: MUTED, fontSize: 12, marginTop: 48, paddingTop: 24, borderTop: "1px solid rgba(0,0,0,0.06)" }} />
      </div>
    </div>
  );
};

export default InfiniteCanvasTheme;
