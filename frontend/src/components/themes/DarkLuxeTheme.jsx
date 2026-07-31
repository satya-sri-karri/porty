import React, { useEffect } from "react";

const GOLD = "#C9A84C";
const GOLD_DIM = "rgba(201,168,76,0.3)";
const BG = "#080808";
const TEXT = "#F5F5F0";
const MUTED = "rgba(245,245,240,0.45)";

const DarkLuxeTheme = ({ data }) => {
  const { name, title, about, avatarUrl, skills, projects, experience,
    certifications, achievements, codingProfiles, contact, socialLinks, themeColors = {} } = data;
  const GOLD = themeColors.accent || "#C9A84C";
  const BG = themeColors.bg || "#080808";
  const TEXT = themeColors.text || "#F5F5F0";

  useEffect(() => {
    const style = document.createElement("style");
    style.id = "luxe-styles";
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=Inter:wght@300;400;500;600&display=swap');
      .luxe-card:hover { border-color: ${GOLD_DIM} !important; }
      .luxe-project:hover .luxe-project-num { color: ${GOLD} !important; }
      .luxe-skill:hover { border-color: ${GOLD} !important; color: ${GOLD} !important; background: ${GOLD_DIM} !important; }
      .luxe-social:hover { color: ${GOLD} !important; border-color: ${GOLD} !important; }
    `;
    document.head.appendChild(style);
    return () => document.getElementById("luxe-styles")?.remove();
  }, []);

  const socials = [
    { href: socialLinks?.github, label: "GitHub" },
    { href: socialLinks?.linkedin, label: "LinkedIn" },
    { href: socialLinks?.twitter, label: "Twitter" },
    { href: socialLinks?.website, label: "Website" },
    { href: contact?.email ? `mailto:${contact.email}` : null, label: "Email" },
  ].filter(s => s.href);

  return (
    <div style={{ minHeight: "100vh", background: BG, fontFamily: "'Inter',sans-serif", color: TEXT }}>
      <div style={{ position: "fixed", inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")", opacity: 0.4, pointerEvents: "none", zIndex: 0 }} />

      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 48px", background: "rgba(8,8,8,0.85)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(201,168,76,0.1)", zIndex: 100,
      }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 600, letterSpacing: "0.05em", color: GOLD }}>
          {name}
        </div>
        <div style={{ display: "flex", gap: 36 }}>
          {["Work", "Experience", "Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: MUTED, textDecoration: "none", fontWeight: 500 }}>
              {l}
            </a>
          ))}
        </div>
      </nav>

      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", textAlign: "center", padding: "120px 48px 80px", position: "relative", zIndex: 1,
      }}>
        <div style={{ width: 1, height: 60, background: `linear-gradient(to bottom,transparent,${GOLD})`, margin: "0 auto 32px" }} />

        {avatarUrl && (
          <img src={avatarUrl} alt={name} onError={e => e.target.style.display = "none"}
            style={{ width: 88, height: 88, borderRadius: "50%", objectFit: "cover", marginBottom: 28, border: "1px solid " + GOLD_DIM, boxShadow: "0 0 40px " + GOLD_DIM }} />
        )}

        <div style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: GOLD, marginBottom: 20, fontWeight: 500 }}>
          Portfolio
        </div>

        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(3.5rem,9vw,7rem)", fontWeight: 200, letterSpacing: "0.02em", lineHeight: 1, color: TEXT, marginBottom: 20 }}>
          {name}
        </h1>

        {title && (
          <p style={{ fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase", color: GOLD, marginBottom: 28, fontWeight: 400 }}>
            {title}
          </p>
        )}

        <p style={{ fontSize: 16, color: MUTED, maxWidth: 520, lineHeight: 1.85, marginBottom: 48, fontWeight: 300 }}>
          {about}
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
          <div style={{ flex: 1, height: 1, background: `linear-gradient(to right,transparent,${GOLD_DIM})`, maxWidth: 80 }} />
          <div style={{ width: 4, height: 4, background: GOLD, borderRadius: "50%" }} />
          <div style={{ flex: 1, height: 1, background: `linear-gradient(to left,transparent,${GOLD_DIM})`, maxWidth: 80 }} />
        </div>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
          {socials.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="luxe-social"
              style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, textDecoration: "none", padding: "8px 18px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 3, transition: "all 0.2s", fontWeight: 500 }}>
              {s.label}
            </a>
          ))}
        </div>

        <div style={{ width: 1, height: 60, background: `linear-gradient(to top,transparent,${GOLD})`, margin: "48px auto 0" }} />
      </section>

      {skills?.length > 0 && (
        <section style={{ padding: "80px 48px", borderTop: "1px solid rgba(255,255,255,0.04)", position: "relative", zIndex: 1, maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 10, letterSpacing: "0.2em", color: GOLD, textTransform: "uppercase", marginBottom: 16 }}>Expertise</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300, color: TEXT }}>Skills & Technologies</h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {skills.map((s, i) => (
              <span key={i} className="luxe-skill" style={{
                padding: "8px 20px", border: "1px solid rgba(255,255,255,0.08)", fontSize: 12,
                letterSpacing: "0.06em", color: MUTED, borderRadius: 3, transition: "all 0.2s", cursor: "default",
              }}>{s}</span>
            ))}
          </div>
        </section>
      )}

      {projects?.length > 0 && (
        <section id="work" style={{ padding: "80px 48px", borderTop: "1px solid rgba(255,255,255,0.04)", position: "relative", zIndex: 1, maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 10, letterSpacing: "0.2em", color: GOLD, textTransform: "uppercase", marginBottom: 16 }}>Work</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300, color: TEXT }}>Selected Projects</h2>
          </div>
          {projects.map((p, i) => (
            <div key={i} className="luxe-project" style={{
              borderTop: "1px solid rgba(255,255,255,0.04)", padding: "36px 0",
              display: "grid", gridTemplateColumns: "60px 1fr auto", gap: 24, alignItems: "start",
            }}>
              <div className="luxe-project-num" style={{ fontSize: 13, color: "rgba(255,255,255,0.2)", fontFamily: "monospace", paddingTop: 4, transition: "color 0.2s" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                {p.image && (
                  <img src={p.image} alt={p.title}
                    style={{
                      width: "100%",
                      height: 180,
                      objectFit: "cover",
                      borderRadius: 4,
                      marginBottom: 12,
                    }}
                  />
                )}
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, fontWeight: 400, color: TEXT, marginBottom: 10, letterSpacing: "0.01em" }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, marginBottom: 14, fontWeight: 300 }}>{p.description}</p>
                {p.techStack?.length > 0 && (
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {p.techStack.map((t, j) => (
                      <span key={j} style={{ fontSize: 11, color: GOLD, fontFamily: "monospace", letterSpacing: "0.05em" }}>{t}</span>
                    ))}
                  </div>
                )}
              </div>
              <div style={{ display: "flex", gap: 12, paddingTop: 4 }}>
                {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: GOLD, textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}>Live ↗</a>}
                {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: MUTED, textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}>Code ↗</a>}
              </div>
            </div>
          ))}
        </section>
      )}

      {experience?.length > 0 && (
        <section id="experience" style={{ padding: "80px 48px", borderTop: "1px solid rgba(255,255,255,0.04)", position: "relative", zIndex: 1, maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 10, letterSpacing: "0.2em", color: GOLD, textTransform: "uppercase", marginBottom: 16 }}>Career</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 300, color: TEXT }}>Experience</h2>
          </div>
          {experience.map((e, i) => (
            <div key={i} style={{ borderTop: "1px solid rgba(255,255,255,0.04)", padding: "32px 0", display: "grid", gridTemplateColumns: "180px 1fr", gap: 32 }}>
              <div><div style={{ fontSize: 12, color: MUTED, fontFamily: "monospace", letterSpacing: "0.04em" }}>{e.duration}</div></div>
              <div>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 400, color: TEXT, marginBottom: 4 }}>{e.role}</h3>
                <div style={{ fontSize: 13, color: GOLD, marginBottom: 12 }}>{e.company}{e.current && " · Present"}</div>
                {e.description && <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, fontWeight: 300 }}>{e.description}</p>}
              </div>
            </div>
          ))}
        </section>
      )}

      {(certifications?.length > 0 || achievements?.length > 0) && (
        <section style={{ padding: "80px 48px", borderTop: "1px solid rgba(255,255,255,0.04)", position: "relative", zIndex: 1, maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: certifications?.length > 0 && achievements?.length > 0 ? "1fr 1fr" : "1fr", gap: 48 }}>
            {certifications?.length > 0 && (
              <div>
                <div style={{ fontSize: 10, letterSpacing: "0.2em", color: GOLD, textTransform: "uppercase", marginBottom: 28 }}>Certifications</div>
                {certifications.map((c, i) => (
                  <div key={i} className="luxe-card" style={{ padding: "20px 0", borderBottom: "1px solid rgba(255,255,255,0.04)", transition: "all 0.2s" }}>
                    <div style={{ fontSize: 14, fontWeight: 500, color: TEXT, marginBottom: 4 }}>{c.title}</div>
                    <div style={{ fontSize: 12, color: GOLD }}>{c.issuer}</div>
                    {c.date && <div style={{ fontSize: 11, color: MUTED, marginTop: 4 }}>{c.date}</div>}
                    {c.credentialUrl && <a href={c.credentialUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: GOLD, marginTop: 8, display: "block", letterSpacing: "0.06em" }}>Verify ↗</a>}
                  </div>
                ))}
              </div>
            )}
            {achievements?.length > 0 && (
              <div>
                <div style={{ fontSize: 10, letterSpacing: "0.2em", color: GOLD, textTransform: "uppercase", marginBottom: 28 }}>Achievements</div>
                {achievements.map((a, i) => (
                  <div key={i} style={{ padding: "20px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <span style={{ fontSize: 20 }}>{a.icon || "🏆"}</span>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 500, color: TEXT, marginBottom: 4 }}>{a.title}</div>
                        {a.description && <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.6 }}>{a.description}</p>}
                        {a.date && <div style={{ fontSize: 11, color: GOLD, marginTop: 6 }}>{a.date}</div>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <section id="contact" style={{ padding: "100px 48px 60px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ width: 1, height: 60, background: `linear-gradient(to bottom,transparent,${GOLD})`, margin: "0 auto 40px" }} />
        <div style={{ fontSize: 10, letterSpacing: "0.25em", color: GOLD, textTransform: "uppercase", marginBottom: 20 }}>Contact</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.5rem,6vw,5rem)", fontWeight: 300, color: TEXT, letterSpacing: "0.02em", marginBottom: 16 }}>
          Let's create something<br /><em>extraordinary</em>
        </h2>
        <p style={{ fontSize: 15, color: MUTED, marginBottom: 40, fontWeight: 300 }}>Open to premium collaborations and opportunities</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          {contact?.email && (
            <a href={`mailto:${contact.email}`} style={{ padding: "13px 32px", background: GOLD, color: "#000", borderRadius: 3, fontSize: 13, fontWeight: 600, textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              {contact.email}
            </a>
          )}
          <a href={socialLinks?.linkedin || "#"} target="_blank" rel="noopener noreferrer"
            style={{ padding: "13px 28px", border: "1px solid " + GOLD_DIM, color: GOLD, borderRadius: 3, fontSize: 13, fontWeight: 500, textDecoration: "none", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            LinkedIn
          </a>
        </div>
        <div style={{ width: 1, height: 60, background: `linear-gradient(to top,transparent,${GOLD})`, margin: "48px auto 0" }} />
      </section>
    </div>
  );
};

export default DarkLuxeTheme;
