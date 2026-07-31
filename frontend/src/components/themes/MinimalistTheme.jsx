import React from "react";

const MinimalistTheme = ({ data }) => {
  const { name, title, about, avatarUrl, skills, projects, experience,
    certifications, achievements, codingProfiles, contact, socialLinks, themeColors = {} } = data;

  const ACCENT = themeColors.accent || "#111";
  const BG = themeColors.bg || "#FAFAFA";
  const TEXT = themeColors.text || "#111";

  const socials = [
    { href: socialLinks?.github, label: "GitHub" },
    { href: socialLinks?.linkedin, label: "LinkedIn" },
    { href: socialLinks?.twitter, label: "Twitter" },
    { href: socialLinks?.website, label: "Website" },
    { href: contact?.email ? `mailto:${contact.email}` : null, label: "Email" },
  ].filter(s => s.href);

  const s = {
    page: { minHeight: "100vh", background: BG, fontFamily: "'Inter', -apple-system, sans-serif", color: TEXT },
    nav: { height: 56, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 48px", borderBottom: "1px solid #E8E8E8", position: "sticky", top: 0, background: "rgba(250,250,250,0.92)", backdropFilter: "blur(8px)", zIndex: 100 },
    navName: { fontSize: 13, fontWeight: 600, letterSpacing: "-0.01em", color: TEXT },
    navLinks: { display: "flex", gap: 32 },
    navLink: { fontSize: 12, color: "#999", textDecoration: "none", fontWeight: 400, letterSpacing: "0.02em", transition: "color 0.15s" },
    hero: { maxWidth: 800, margin: "0 auto", padding: "140px 48px 100px" },
    eyebrow: { fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#CCC", marginBottom: 24, fontFamily: "'Inter', sans-serif" },
    h1: { fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 200, lineHeight: 1.0, letterSpacing: "-0.05em", color: TEXT, marginBottom: 20, fontFamily: "'Times New Roman', 'Georgia', serif" },
    heroTitle: { fontSize: 16, fontWeight: 300, color: "#888", marginBottom: 16, letterSpacing: "-0.01em", fontFamily: "'Inter', sans-serif" },
    heroAbout: { fontSize: 16, color: "#666", lineHeight: 1.85, maxWidth: 560, marginBottom: 40, fontWeight: 300, fontFamily: "'Inter', sans-serif" },
    avatar: { width: 64, height: 64, borderRadius: "50%", objectFit: "cover", marginBottom: 32, border: "1px solid #E8E8E8", display: "block" },
    socials: { display: "flex", gap: 20, flexWrap: "wrap" },
    socialLink: { fontSize: 13, fontWeight: 400, color: TEXT, textDecoration: "none", borderBottom: `1px solid ${ACCENT}`, paddingBottom: 1, transition: "opacity 0.15s" },
    section: { borderTop: "1px solid #E8E8E8", padding: "80px 48px", maxWidth: 800, margin: "0 auto" },
    sectionLabel: { fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#CCC", marginBottom: 36, fontFamily: "'Inter', sans-serif" },
    skillsGrid: { display: "flex", flexWrap: "wrap", gap: 8 },
    skillTag: { padding: "6px 16px", border: "1px solid #E0E0E0", borderRadius: 2, fontSize: 13, fontWeight: 300, color: "#555", background: "transparent", fontFamily: "'Inter', sans-serif" },
    projectItem: { borderBottom: "1px solid #F0F0F0", paddingBottom: 36, marginBottom: 36 },
    projectNum: { fontSize: 11, color: "#DDD", fontFamily: "monospace", marginBottom: 8, fontWeight: 300 },
    projectTitle: { fontSize: 18, fontWeight: 500, letterSpacing: "-0.02em", color: TEXT, marginBottom: 10, fontFamily: "'Times New Roman', serif" },
    projectDesc: { fontSize: 14, color: "#777", lineHeight: 1.75, marginBottom: 14, fontWeight: 300, fontFamily: "'Inter', sans-serif" },
    projectMeta: { display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" },
    techRow: { display: "flex", gap: 12 },
    techItem: { fontSize: 12, color: "#BBB", fontFamily: "monospace", fontWeight: 300 },
    projectLink: { fontSize: 12, fontWeight: 500, color: TEXT, textDecoration: "none", borderBottom: `1px solid ${ACCENT}`, paddingBottom: 1, transition: "opacity 0.15s" },
    expItem: { display: "grid", gridTemplateColumns: "120px 1fr", gap: 40, marginBottom: 36, paddingBottom: 36, borderBottom: "1px solid #F0F0F0" },
    expDate: { fontSize: 12, color: "#CCC", fontFamily: "monospace", paddingTop: 3, fontWeight: 300 },
    expRole: { fontSize: 16, fontWeight: 500, letterSpacing: "-0.01em", color: TEXT, marginBottom: 4, fontFamily: "'Times New Roman', serif" },
    expCompany: { fontSize: 13, color: "#888", marginBottom: 8, fontWeight: 300 },
    expDesc: { fontSize: 13, color: "#777", lineHeight: 1.7, fontWeight: 300, fontFamily: "'Inter', sans-serif" },
    certGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 },
    certCard: { padding: "16px 20px", border: "1px solid #F0F0F0", borderRadius: 2 },
    certTitle: { fontSize: 14, fontWeight: 500, color: TEXT, marginBottom: 4, fontFamily: "'Times New Roman', serif" },
    certIssuer: { fontSize: 12, color: "#AAA", fontWeight: 300 },
    achGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 },
    achCard: { padding: "16px 20px", borderLeft: `2px solid ${ACCENT}` },
    achTitle: { fontSize: 14, fontWeight: 500, color: TEXT, marginBottom: 6, fontFamily: "'Times New Roman', serif" },
    achDesc: { fontSize: 12, color: "#888", lineHeight: 1.6, fontWeight: 300 },
    codGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 },
    codCard: { padding: "14px 18px", border: "1px solid #F0F0F0", borderRadius: 2, textDecoration: "none", color: "inherit", display: "block", transition: "border-color 0.15s" },
    contact: { borderTop: "1px solid #E8E8E8", padding: "100px 48px", maxWidth: 800, margin: "0 auto" },
    contactH2: { fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 200, letterSpacing: "-0.05em", lineHeight: 1.05, color: TEXT, marginBottom: 16, fontFamily: "'Times New Roman', serif" },
    contactSub: { fontSize: 16, color: "#888", marginBottom: 36, fontWeight: 300 },
    contactBtns: { display: "flex", gap: 16, flexWrap: "wrap" },
    primaryBtn: { padding: "12px 28px", background: ACCENT, color: "#fff", borderRadius: 2, fontSize: 13, fontWeight: 500, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, letterSpacing: "0.01em" },
    ghostBtn: { padding: "12px 28px", background: "transparent", color: "#111", border: "1px solid #E0E0E0", borderRadius: 2, fontSize: 13, fontWeight: 400, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 },
    footer: { borderTop: "1px solid #F0F0F0", padding: "24px 48px", fontSize: 12, color: "#CCC", display: "flex", justifyContent: "space-between", fontWeight: 300 },
  };

  return (
    <div style={s.page}>
      <nav style={s.nav}>
        <div style={s.navName}>{name}</div>
        <div style={s.navLinks}>
          {["Work", "Experience", "Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={s.navLink}>{l}</a>
          ))}
        </div>
      </nav>

      <div style={s.hero}>
        {avatarUrl && (
          <img src={avatarUrl} alt={name} style={s.avatar}
            onError={e => e.target.style.display = "none"} />
        )}
        <div style={s.eyebrow}>Portfolio</div>
        <h1 style={s.h1}>{name}</h1>
        {title && <p style={s.heroTitle}>{title}</p>}
        <p style={s.heroAbout}>{about}</p>
        <div style={s.socials}>
          {socials.map(soc => (
            <a key={soc.label} href={soc.href} target="_blank" rel="noopener noreferrer" style={s.socialLink}>
              {soc.label}
            </a>
          ))}
        </div>
      </div>

      {skills?.length > 0 && (
        <div style={s.section}>
          <div style={s.sectionLabel}>Skills</div>
          <div style={s.skillsGrid}>
            {skills.map((sk, i) => <span key={i} style={s.skillTag}>{sk}</span>)}
          </div>
        </div>
      )}

      {projects?.length > 0 && (
        <div id="work" style={s.section}>
          <div style={s.sectionLabel}>Selected Work</div>
          {projects.map((p, i) => (
            <div key={i} style={s.projectItem}>
              {p.image && (
                <img src={p.image} alt={p.title}
                  style={{
                    width: "100%",
                    height: 180,
                    objectFit: "cover",
                    borderRadius: 0,
                    marginBottom: 16,
                  }}
                />
              )}
              <div style={s.projectNum}>0{i + 1}</div>
              <h3 style={s.projectTitle}>{p.title}</h3>
              <p style={s.projectDesc}>{p.description}</p>
              <div style={s.projectMeta}>
                {p.techStack?.length > 0 && (
                  <div style={s.techRow}>
                    {p.techStack.map((t, j) => <span key={j} style={s.techItem}>{t}</span>)}
                  </div>
                )}
                <div style={{ display: "flex", gap: 16 }}>
                  {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" style={s.projectLink}>Live ↗</a>}
                  {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" style={s.projectLink}>GitHub ↗</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {experience?.length > 0 && (
        <div id="experience" style={s.section}>
          <div style={s.sectionLabel}>Experience</div>
          {experience.map((e, i) => (
            <div key={i} style={s.expItem}>
              <div style={s.expDate}>{e.duration}</div>
              <div>
                <div style={s.expRole}>{e.role}</div>
                <div style={s.expCompany}>{e.company}{e.current && " · Present"}</div>
                {e.description && <p style={s.expDesc}>{e.description}</p>}
              </div>
            </div>
          ))}
        </div>
      )}

      {certifications?.length > 0 && (
        <div style={s.section}>
          <div style={s.sectionLabel}>Certifications</div>
          <div style={s.certGrid}>
            {certifications.map((c, i) => (
              <div key={i} style={s.certCard}>
                <div style={s.certTitle}>{c.title}</div>
                {c.issuer && <div style={s.certIssuer}>{c.issuer}{c.date && ` · ${c.date}`}</div>}
                {c.credentialUrl && <a href={c.credentialUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: ACCENT, marginTop: 8, display: "block", textDecoration: "none", borderBottom: `1px solid ${ACCENT}`, paddingBottom: 1, alignSelf: "flex-start" }}>Verify ↗</a>}
              </div>
            ))}
          </div>
        </div>
      )}

      {achievements?.length > 0 && (
        <div style={s.section}>
          <div style={s.sectionLabel}>Achievements</div>
          <div style={s.achGrid}>
            {achievements.map((a, i) => (
              <div key={i} style={s.achCard}>
                <div style={s.achTitle}>{a.title}</div>
                {a.description && <div style={s.achDesc}>{a.description}</div>}
                {a.date && <div style={{ fontSize: 11, color: "#CCC", marginTop: 8, fontWeight: 300 }}>{a.date}</div>}
              </div>
            ))}
          </div>
        </div>
      )}

      {codingProfiles?.length > 0 && (
        <div style={s.section}>
          <div style={s.sectionLabel}>Coding Profiles</div>
          <div style={s.codGrid}>
            {codingProfiles.map((p, i) => (
              <a key={i} href={p.url || "#"} target="_blank" rel="noopener noreferrer" style={s.codCard}>
                <div style={{ fontSize: 14, fontWeight: 500, color: TEXT, marginBottom: 2, fontFamily: "'Times New Roman', serif" }}>{p.platform}</div>
                {p.username && <div style={{ fontSize: 12, color: "#AAA", fontFamily: "monospace", fontWeight: 300 }}>@{p.username}</div>}
                {(p.rating || p.solved) && (
                  <div style={{ fontSize: 12, color: "#CCC", marginTop: 6, fontWeight: 300 }}>
                    {p.rating && `Rating: ${p.rating}`}{p.rating && p.solved && " · "}{p.solved && `${p.solved} solved`}
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      )}

      <div id="contact" style={s.contact}>
        <h2 style={s.contactH2}>Get in touch.</h2>
        <p style={s.contactSub}>Currently open to new opportunities.</p>
        <div style={s.contactBtns}>
          {contact?.email && (
            <a href={`mailto:${contact.email}`} style={s.primaryBtn}>{contact.email}</a>
          )}
          {socialLinks?.linkedin && (
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" style={s.ghostBtn}>LinkedIn</a>
          )}
        </div>
      </div>

      <div style={s.footer}>
        <span>{name}</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </div>
  );
};

export default MinimalistTheme;
