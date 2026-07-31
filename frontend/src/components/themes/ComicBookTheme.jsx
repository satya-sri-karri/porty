import React from "react";

const YELLOW = "#FFD700";
const RED = "#FF3333";
const BLUE = "#2266FF";
const BLACK = "#000";
const WHITE = "#FFF";
const BG = "#FFF8E7";

const ComicBookTheme = ({ data }) => {
  const { name, title, about, avatarUrl, skills, projects, experience,
    certifications, achievements, codingProfiles, contact, socialLinks, themeColors = {} } = data;
  const RED = themeColors.accent || "#FF3333";
  const BG = themeColors.bg || "#FFF8E7";
  const BLACK = themeColors.text || "#000";

  const socials = [
    { href: socialLinks?.github, label: "GitHub" },
    { href: socialLinks?.linkedin, label: "LinkedIn" },
    { href: socialLinks?.twitter, label: "Twitter" },
    { href: socialLinks?.website, label: "Website" },
    { href: contact?.email ? `mailto:${contact.email}` : null, label: "Email" },
  ].filter(s => s.href);

  const panel = {
    border: `3px solid ${BLACK}`,
    padding: 24,
    marginBottom: 24,
    background: WHITE,
    boxShadow: "5px 5px 0 #000",
    position: "relative",
  };

  const explosions = ["ZAP!", "POW!", "BOOM!", "WHAM!", "BAM!", "KABOOM!"];

  return (
    <div style={{ minHeight: "100vh", background: BG, fontFamily: "'Bangers', 'Impact', 'Arial Black', sans-serif", color: BLACK, position: "relative" }}>
      <style>{`@keyframes shake{0%,100%{transform:translate(0,0)}25%{transform:translate(-2px,2px)}50%{transform:translate(2px,-2px)}75%{transform:translate(-1px,-1px)}}.pop:hover{animation:shake 0.15s infinite}`}</style>

      <div style={{ position: "fixed", inset: 0, backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px)", backgroundSize: "5px 5px", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 800, margin: "0 auto", padding: "0 16px" }}>
        <div style={{ textAlign: "center", padding: "28px 0 16px", borderBottom: `4px solid ${BLACK}`, position: "relative" }}>
          <div style={{ fontSize: 38, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em", color: RED, lineHeight: 1, textShadow: "2px 2px 0 #000" }}>AMAZING</div>
          <div style={{ fontSize: 52, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.12em", color: BLUE, lineHeight: 1, textShadow: "2px 2px 0 #000" }}>{name}</div>
          {title && <div style={{ fontSize: 14, fontWeight: 900, textTransform: "uppercase", marginTop: 10, background: YELLOW, display: "inline-block", padding: "6px 20px", border: `3px solid ${BLACK}` }}>{title}</div>}
        </div>

        <div style={{ ...panel, marginTop: 24, display: "flex", gap: 24, alignItems: "center" }}>
          <div style={{
            position: "relative", background: YELLOW, borderRadius: "50%", width: 100, height: 100,
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            border: `3px solid ${BLACK}`,
          }}>
            {avatarUrl ? (
              <img src={avatarUrl} alt={name} style={{ width: 90, height: 90, borderRadius: "50%", objectFit: "cover", border: `2px solid ${BLACK}` }}
                onError={e => e.target.style.display = "none"} />
            ) : (
              <span style={{ fontSize: 40, fontWeight: 900, color: RED }}>{name[0]}</span>
            )}
          </div>
          <div style={{ flex: 1, position: "relative" }}>
            <div style={{
              position: "absolute", top: -40, right: -10, fontSize: 16, fontWeight: 900, color: RED,
              transform: "rotate(-5deg)", textTransform: "uppercase",
            }}>★ Origin Story ★</div>
            <p style={{ fontSize: 13, lineHeight: 1.8, fontFamily: "'Georgia', serif", fontWeight: 400, margin: 0 }}>{about}</p>
            <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="pop" style={{ fontSize: 11, fontWeight: 900, textTransform: "uppercase", color: WHITE, background: BLUE, textDecoration: "none", padding: "6px 14px", border: `2px solid ${BLACK}` }}>{s.label}</a>
              ))}
            </div>
          </div>
        </div>

        {skills?.length > 0 && (
          <div style={panel}>
            <div style={{ fontSize: 13, fontWeight: 900, textTransform: "uppercase", color: RED, marginBottom: 14, letterSpacing: "0.05em" }}>⚡ Power Grid — Skills</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {skills.map((s, i) => (
                <span key={i} className="pop" style={{
                  padding: "8px 18px", border: `2px solid ${BLACK}`, fontSize: 14, fontWeight: 900, textTransform: "uppercase",
                  background: i % 3 === 0 ? YELLOW : i % 3 === 1 ? BLUE : RED,
                  color: i % 3 === 0 ? BLACK : WHITE,
                  cursor: "default", display: "flex", alignItems: "center", gap: 6,
                }}>
                  <span>{["💥", "⚡", "🔥", "💪", "⭐", "🎯"][i % 6]}</span>
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}

        {projects?.length > 0 && (
          <div>
            <div style={{ fontSize: 16, fontWeight: 900, textTransform: "uppercase", color: WHITE, background: RED, padding: "6px 20px", display: "inline-block", marginBottom: 16, border: `3px solid ${BLACK}`, letterSpacing: "0.05em" }}>⭐ FEATURE PRESENTATIONS</div>
            {projects.map((p, i) => (
              <div key={i} style={{ ...panel }}>
                <div style={{ position: "absolute", top: -16, left: 14, background: YELLOW, padding: "3px 14px", border: `2px solid ${BLACK}`, fontSize: 12, fontWeight: 900 }}>#{i + 1}</div>
                {p.image && (
                  <img src={p.image} alt={p.title} style={{ width: "100%", height: 160, objectFit: "cover", border: `3px solid ${BLACK}`, marginBottom: 16, transform: "rotate(-1deg)" }} />
                )}
                <h3 style={{ margin: "8px 0 8px", fontSize: 20, textTransform: "uppercase", letterSpacing: "0.02em" }}>{p.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.7, fontFamily: "'Georgia', serif", fontWeight: 400, margin: "0 0 14px" }}>{p.description}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {p.techStack?.map((t, j) => (
                      <span key={j} style={{ fontSize: 10, fontWeight: 900, textTransform: "uppercase", background: "#EEE", border: `2px solid ${BLACK}`, padding: "3px 10px" }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="pop" style={{ fontSize: 12, fontWeight: 900, textTransform: "uppercase", color: WHITE, background: BLUE, border: `2px solid ${BLACK}`, padding: "6px 16px", textDecoration: "none" }}>VIEW</a>}
                    {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="pop" style={{ fontSize: 12, fontWeight: 900, textTransform: "uppercase", color: BLACK, background: YELLOW, border: `2px solid ${BLACK}`, padding: "6px 16px", textDecoration: "none" }}>SOURCE</a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {experience?.length > 0 && (
          <div style={panel}>
            <div style={{ fontSize: 13, fontWeight: 900, textTransform: "uppercase", color: BLUE, marginBottom: 14, letterSpacing: "0.05em" }}>📖 Career Chronicles</div>
            {experience.map((e, i) => (
              <div key={i} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: i < experience.length - 1 ? `2px dashed ${BLACK}` : "none" }}>
                <div style={{ fontSize: 10, fontWeight: 900, textTransform: "uppercase", color: RED, letterSpacing: "0.05em" }}>{e.duration}</div>
                <div style={{ fontSize: 17, fontWeight: 900, textTransform: "uppercase", margin: "2px 0" }}>{e.role}</div>
                <div style={{ fontSize: 13, color: BLUE, fontWeight: 900 }}>{e.company}{e.current && <span style={{ color: RED }}> · PRESENT</span>}</div>
                {e.description && <p style={{ fontSize: 12, lineHeight: 1.7, fontFamily: "'Georgia', serif", fontWeight: 400, margin: "8px 0 0 0", color: "#333" }}>{e.description}</p>}
              </div>
            ))}
          </div>
        )}

        {certifications?.length > 0 && (
          <div style={panel}>
            <div style={{ fontSize: 13, fontWeight: 900, textTransform: "uppercase", color: RED, marginBottom: 14 }}>🏅 Badges of Honor</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
              {certifications.map((c, i) => (
                <div key={i} style={{ border: `2px solid ${BLACK}`, padding: 14, background: i % 2 === 0 ? YELLOW : WHITE }}>
                  <div style={{ fontSize: 14, fontWeight: 900, textTransform: "uppercase" }}>{c.title}</div>
                  {c.issuer && <div style={{ fontSize: 11, fontWeight: 700, color: "#555", marginTop: 4 }}>{c.issuer} · {c.date}</div>}
                  {c.credentialUrl && <a href={c.credentialUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: 10, fontWeight: 900, color: BLUE, textDecoration: "underline", display: "block", marginTop: 8 }}>VERIFY ↗</a>}
                </div>
              ))}
            </div>
          </div>
        )}

        {achievements?.length > 0 && (
          <div>
            {achievements.map((a, i) => (
              <div key={i} style={{ ...panel, border: `3px solid ${RED}` }}>
                <div style={{ position: "absolute", top: -18, right: 12, fontSize: 28, fontWeight: 900, color: RED, transform: "rotate(15deg)", textShadow: "2px 2px 0 #000" }}>{explosions[i % explosions.length]}</div>
                <div style={{ fontSize: 28, marginBottom: 6 }}>{a.icon || "💥"}</div>
                <div style={{ fontSize: 17, fontWeight: 900, textTransform: "uppercase", color: RED }}>{a.title}</div>
                {a.description && <p style={{ fontSize: 12, lineHeight: 1.6, fontFamily: "'Georgia', serif", fontWeight: 400, margin: "8px 0 0" }}>{a.description}</p>}
                {a.date && <div style={{ fontSize: 10, fontWeight: 700, marginTop: 8, color: "#666" }}>{a.date}</div>}
              </div>
            ))}
          </div>
        )}

        {codingProfiles?.length > 0 && (
          <div style={panel}>
            <div style={{ fontSize: 13, fontWeight: 900, textTransform: "uppercase", color: BLUE, marginBottom: 14 }}>🎮 Leaderboard</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10 }}>
              {codingProfiles.map((p, i) => (
                <a key={i} href={p.url || "#"} target="_blank" rel="noopener noreferrer" className="pop" style={{ border: `2px solid ${BLACK}`, padding: 14, textDecoration: "none", color: BLACK, background: WHITE, display: "block" }}>
                  <div style={{ fontSize: 13, fontWeight: 900, textTransform: "uppercase" }}>{p.platform}</div>
                  <div style={{ fontSize: 12, color: BLUE, fontWeight: 700 }}>@{p.username}</div>
                  {(p.rating || p.solved) && <div style={{ fontSize: 11, fontWeight: 900, marginTop: 4, color: RED }}>{p.rating && `Rating ${p.rating}`}{p.rating && p.solved && " | "}{p.solved && `${p.solved} solved`}</div>}
                </a>
              ))}
            </div>
          </div>
        )}

        <div style={{ ...panel, background: YELLOW, border: `4px solid ${BLACK}`, textAlign: "center" }}>
          <div style={{ fontSize: 26, fontWeight: 900, textTransform: "uppercase", marginBottom: 6, letterSpacing: "0.03em" }}>CALL TO ACTION!</div>
          <p style={{ fontSize: 13, fontFamily: "'Georgia', serif", fontWeight: 400, margin: "0 0 18px" }}>Send a signal. Open for sidekicks & missions.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            {contact?.email && (
              <a href={`mailto:${contact.email}`} className="pop" style={{ padding: "12px 28px", background: RED, color: WHITE, fontWeight: 900, fontSize: 15, textTransform: "uppercase", textDecoration: "none", border: `3px solid ${BLACK}`, letterSpacing: "0.05em" }}>✉ EMAIL ME</a>
            )}
            {contact?.phone && (
              <a href={`tel:${contact.phone}`} className="pop" style={{ padding: "12px 28px", background: BLUE, color: WHITE, fontWeight: 900, fontSize: 15, textTransform: "uppercase", textDecoration: "none", border: `3px solid ${BLACK}`, letterSpacing: "0.05em" }}>📞 CALL</a>
            )}
          </div>
        </div>

        <div style={{ textAlign: "center", padding: "20px 0", fontSize: 11, fontWeight: 900, textTransform: "uppercase", borderTop: `3px solid ${BLACK}`, marginTop: 8, color: "#666" }}>
          © {new Date().getFullYear()} {name} Comics — All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default ComicBookTheme;
