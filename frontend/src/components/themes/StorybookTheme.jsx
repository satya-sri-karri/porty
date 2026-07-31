import React, { useState, useEffect } from "react";

const BG = "#1A1423";
const TEXT = "#EADDCF";
const MUTED = "#A6938A";
const ACCENT = "#E8A87C";
const GOLD = "#D4AF37";
const PAPER_BG = "#2A1F33";
const INK = "#F5E6D3";

const StorybookTheme = ({ data }) => {
  const { name, title, about, avatarUrl, skills, projects, experience,
    certifications, achievements, codingProfiles, contact, socialLinks, themeColors = {} } = data;
  const ACCENT = themeColors.accent || "#E8A87C";
  const BG = themeColors.bg || "#1A1423";
  const TEXT = themeColors.text || "#EADDCF";

  const [page, setPage] = useState(0);
  const [flipAnim, setFlipAnim] = useState("");
  const prevPageRef = React.useRef(0);

  const goToPage = (next) => {
    if (next === page) return;
    const forward = next > page;
    setFlipAnim(forward ? "flipOutLeft" : "flipOutRight");
    setTimeout(() => {
      setPage(next);
      setFlipAnim(forward ? "flipInRight" : "flipInLeft");
    }, 150);
  };

  useEffect(() => {
    const s = document.createElement("style");
    s.id = "story-anim";
    s.textContent = `@keyframes fadeUp {from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes pageIn {from{opacity:0;transform:rotateY(8deg)}to{opacity:1;transform:rotateY(0)}}@keyframes glow {0%,100%{text-shadow:0 0 8px ${GOLD}60}50%{text-shadow:0 0 20px ${GOLD}90}}@keyframes flipOutLeft {from{transform:rotateY(0) scaleX(1);opacity:1}to{transform:rotateY(-90deg) scaleX(0.95);opacity:0}}@keyframes flipInRight {from{transform:rotateY(90deg) scaleX(0.95);opacity:0}to{transform:rotateY(0) scaleX(1);opacity:1}}@keyframes flipOutRight {from{transform:rotateY(0) scaleX(1);opacity:1}to{transform:rotateY(90deg) scaleX(0.95);opacity:0}}@keyframes flipInLeft {from{transform:rotateY(-90deg) scaleX(0.95);opacity:0}to{transform:rotateY(0) scaleX(1);opacity:1}}`;
    document.head.appendChild(s);
    return () => document.getElementById("story-anim")?.remove();
  }, []);

  const socials = [
    { href: socialLinks?.github, label: "GitHub" },
    { href: socialLinks?.linkedin, label: "LinkedIn" },
    { href: socialLinks?.twitter, label: "Twitter" },
    { href: socialLinks?.website, label: "Website" },
    { href: contact?.email ? `mailto:${contact.email}` : null, label: "Email" },
  ].filter(s => s.href);

  const chapters = [
    { id: "cover", label: "Cover" },
    { id: "skills", label: "Chapter 01: Skills" },
    { id: "projects", label: "Chapter 02: Works" },
    { id: "experience", label: "Chapter 03: Journey" },
    { id: "more", label: "Appendices" },
    { id: "contact", label: "The End" },
  ];

  const ornament = (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, margin: "40px 0", color: GOLD }}>
      <span style={{ fontSize: 20 }}>❧</span>
      <span style={{ fontSize: 14 }}>✦</span>
      <span style={{ fontSize: 20 }}>❦</span>
      <span style={{ fontSize: 14 }}>✦</span>
      <span style={{ fontSize: 20 }}>❧</span>
    </div>
  );

  const chapterTitle = (num, text) => (
    <div style={{ marginBottom: 28, animation: "pageIn 0.7s ease" }}>
      <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", color: GOLD, fontWeight: 700, fontFamily: "'Inter', sans-serif", marginBottom: 8 }}>
        Chapter {String(num).padStart(2, "0")}: {text}
      </div>
      <div style={{ width: 80, height: 2, background: `linear-gradient(90deg, ${ACCENT}, ${GOLD})`, borderRadius: 2 }} />
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: BG, fontFamily: "'Playfair Display', 'Georgia', serif", color: TEXT, position: "relative" }}>
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100,
        background: PAPER_BG, borderTop: `1px solid ${GOLD}30`,
        display: "flex", justifyContent: "center", padding: "10px 16px",
        gap: 6, flexWrap: "wrap",
      }}>
        {chapters.map((ch, i) => (
          <button key={ch.id} onClick={() => goToPage(i)}
            style={{
              padding: "7px 16px", border: "none", background: page === i ? ACCENT : "transparent",
              color: page === i ? "#1A1423" : MUTED, fontSize: 11, fontWeight: 600,
              cursor: "pointer", borderRadius: 4, fontFamily: "'Inter', sans-serif",
              transition: "all 0.3s",
            }}>
            {ch.label}
          </button>
        ))}
      </div>

      <div style={{ maxWidth: 740, margin: "0 auto", padding: "48px 32px 90px", perspective: 1000 }}>

        {page === 0 && (
          <div style={{ textAlign: "center", padding: "60px 20px", animation: `${flipAnim || "none"} 0.35s ease`, transformStyle: "preserve-3d", perspective: 1000 }}>
            <div style={{ fontSize: 12, color: GOLD, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 20, fontFamily: "'Inter', sans-serif", fontWeight: 600, animation: "glow 3s infinite" }}>✦ A Portfolio Tale ✦</div>
            {avatarUrl && (
              <img src={avatarUrl} alt={name} style={{ width: 110, height: 110, borderRadius: "50%", objectFit: "cover", margin: "0 auto 28px", border: "3px solid #E8A87C40", boxShadow: `0 0 30px ${GOLD}30`, display: "block" }}
                onError={e => e.target.style.display = "none"} />
            )}
            <h1 style={{ fontSize: "clamp(3rem, 7vw, 5rem)", fontWeight: 900, color: INK, marginBottom: 10, lineHeight: 1.1, letterSpacing: "-0.01em" }}>{name}</h1>
            {title && <p style={{ fontSize: 18, color: ACCENT, fontStyle: "italic", marginBottom: 16, fontFamily: "'Georgia', serif" }}>by {title}</p>}
            <div style={{ maxWidth: 520, margin: "0 auto", lineHeight: 2, color: MUTED, fontSize: 15, fontFamily: "'Georgia', serif", fontStyle: "italic" }}>{about}</div>
            <div style={{ marginTop: 32, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: GOLD, textDecoration: "none", padding: "8px 18px", border: `1px solid ${GOLD}40`, borderRadius: 6, transition: "0.2s" }}>
                  {s.label}
                </a>
              ))}
            </div>
            <div style={{ marginTop: 48, fontSize: 16, color: GOLD, fontFamily: "'Georgia', serif" }}>❧ Turn the page to begin ❧</div>
          </div>
        )}

        {page === 1 && skills?.length > 0 && (
          <div style={{ animation: `${flipAnim || "none"} 0.35s ease`, transformStyle: "preserve-3d", perspective: 1000 }}>
            {chapterTitle("01", "Tools of the Trade")}
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: INK, marginBottom: 8 }}>Skills & Artifacts</h2>
            <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.9, marginBottom: 28, fontFamily: "'Inter', sans-serif" }}>The magical instruments and enchanted tools in my arsenal.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
              {skills?.map((s, i) => (
                <span key={i} style={{
                  padding: "12px 24px", background: PAPER_BG, border: `1px solid ${GOLD}25`,
                  borderRadius: "50% 20% / 40% 60%", fontSize: 15, color: TEXT, fontWeight: 600,
                  fontFamily: "'Inter', sans-serif",
                  boxShadow: `0 4px 12px rgba(0,0,0,0.2), inset 0 0 20px ${GOLD}08`,
                  transform: `rotate(${i % 2 === 0 ? "-2" : "2"}deg)`,
                  display: "inline-flex", alignItems: "center", gap: 8,
                }}>
                  <span style={{ fontSize: 16 }}>{["✦", "◇", "○", "□", "△", "☆", "♢", "♤"][i % 8]}</span>
                  {s}
                </span>
              ))}
            </div>
            {ornament}
          </div>
        )}

        {page === 2 && projects?.length > 0 && (
          <div style={{ animation: `${flipAnim || "none"} 0.35s ease`, transformStyle: "preserve-3d", perspective: 1000 }}>
            {chapterTitle("02", "Works & Inventions")}
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: INK, marginBottom: 24 }}>Featured Tales</h2>
            {projects?.map((p, i) => (
              <div key={i} style={{
                background: PAPER_BG, border: `1px solid ${GOLD}25`,
                borderRadius: 12, padding: 28, marginBottom: 20,
                boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                position: "relative",
              }}>
                <div style={{ position: "absolute", top: -10, left: 20, background: BG, padding: "0 12px", fontSize: 11, color: GOLD, fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: "0.05em" }}>Folio {i + 1}</div>
                {p.image && (
                  <img src={p.image} alt={p.title} style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 8, marginBottom: 16, border: `1px solid ${ACCENT}50` }} />
                )}
                <h3 style={{ fontSize: 20, fontWeight: 800, color: INK, marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.9, marginBottom: 14, fontFamily: "'Inter', sans-serif" }}>{p.description}</p>
                {p.techStack?.length > 0 && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
                    {p.techStack.map((t, j) => <span key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, padding: "4px 12px", background: `${ACCENT}15`, color: ACCENT, borderRadius: 4, fontWeight: 600 }}>{t}</span>)}
                  </div>
                )}
                <div style={{ display: "flex", gap: 16 }}>
                  {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: ACCENT, fontWeight: 700, textDecoration: "none", borderBottom: `1px solid ${ACCENT}60` }}>Read More →</a>}
                  {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: MUTED, textDecoration: "none", borderBottom: `1px solid ${MUTED}40` }}>Source</a>}
                </div>
              </div>
            ))}
            {ornament}
          </div>
        )}

        {page === 3 && experience?.length > 0 && (
          <div style={{ animation: `${flipAnim || "none"} 0.35s ease`, transformStyle: "preserve-3d", perspective: 1000 }}>
            {chapterTitle("03", "The Journey")}
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: INK, marginBottom: 24 }}>Chronicles</h2>
            {experience?.map((e, i) => (
              <div key={i} style={{
                borderLeft: `2px solid ${ACCENT}80`, paddingLeft: 28, marginBottom: 32,
                position: "relative",
              }}>
                <div style={{ position: "absolute", left: -7, top: 4, width: 14, height: 14, borderRadius: "50%", background: ACCENT, border: `3px solid ${BG}` }} />
                <div style={{ fontSize: 17, fontWeight: 800, color: INK, marginBottom: 4 }}>{e.role}</div>
                <div style={{ fontSize: 14, color: ACCENT, fontWeight: 600, marginBottom: 6, fontFamily: "'Inter', sans-serif" }}>{e.company} · <span style={{ color: GOLD }}>{e.duration}</span></div>
                {e.description && <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.9, margin: 0, fontFamily: "'Inter', sans-serif" }}>{e.description}</p>}
              </div>
            ))}
            {ornament}
          </div>
        )}

        {page === 4 && (
          <div style={{ animation: `${flipAnim || "none"} 0.35s ease`, transformStyle: "preserve-3d", perspective: 1000 }}>
            {chapterTitle("04", "Appendices")}
            {certifications?.length > 0 && (
              <div style={{ marginBottom: 36 }}>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: INK, marginBottom: 16, fontStyle: "italic" }}>Seals of Mastery</h3>
                <div style={{ display: "grid", gap: 12 }}>
                  {certifications.map((c, i) => (
                    <div key={i} style={{ background: PAPER_BG, border: `1px solid ${GOLD}25`, borderRadius: 8, padding: 16, display: "flex", gap: 14, alignItems: "center" }}>
                      <span style={{ fontSize: 28, color: GOLD }}>🏅</span>
                      <div>
                        <div style={{ fontSize: 15, fontWeight: 700, color: INK }}>{c.title}</div>
                        <div style={{ fontSize: 13, color: MUTED, fontFamily: "'Inter', sans-serif" }}>{c.issuer}{c.date && ` · ${c.date}`}</div>
                        {c.credentialUrl && <a href={c.credentialUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: ACCENT, marginTop: 4, display: "inline-block", borderBottom: `1px solid ${ACCENT}40` }}>Verify →</a>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {achievements?.length > 0 && (
              <div style={{ marginBottom: 36 }}>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: INK, marginBottom: 16, fontStyle: "italic" }}>Honors & Laurels</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
                  {achievements.map((a, i) => (
                    <div key={i} style={{ background: PAPER_BG, border: `1px solid ${GOLD}25`, borderRadius: 8, padding: 20, textAlign: "center" }}>
                      <div style={{ fontSize: 32, marginBottom: 8 }}>{a.icon || "🏆"}</div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: INK }}>{a.title}</div>
                      {a.description && <div style={{ fontSize: 12, color: MUTED, marginTop: 4, fontFamily: "'Inter', sans-serif" }}>{a.description}</div>}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {codingProfiles?.length > 0 && (
              <div style={{ marginBottom: 36 }}>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: INK, marginBottom: 16, fontStyle: "italic" }}>Guild Registries</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10 }}>
                  {codingProfiles.map((p, i) => (
                    <a key={i} href={p.url || "#"} target="_blank" rel="noopener noreferrer"
                      style={{ background: PAPER_BG, border: `1px solid ${GOLD}25`, borderRadius: 8, padding: 16, textDecoration: "none", color: TEXT, display: "block" }}>
                      <div style={{ fontSize: 14, fontWeight: 700 }}>{p.platform}</div>
                      {p.username && <div style={{ fontSize: 12, color: ACCENT, fontFamily: "'Courier New', monospace" }}>@{p.username}</div>}
                      {(p.rating || p.solved) && <div style={{ fontSize: 11, color: MUTED, marginTop: 4 }}>{p.rating && `⭐ ${p.rating}`}{p.rating && p.solved && " · "}{p.solved && `✅ ${p.solved}`}</div>}
                    </a>
                  ))}
                </div>
              </div>
            )}
            {ornament}
          </div>
        )}

        {page === 5 && (
          <div style={{ textAlign: "center", padding: "50px 20px", animation: `${flipAnim || "none"} 0.35s ease`, transformStyle: "preserve-3d", perspective: 1000 }}>
            {chapterTitle("05", "The End")}
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: INK, marginBottom: 12, lineHeight: 1.2 }}>The story continues<br />with you</h2>
            <p style={{ fontSize: 15, color: MUTED, maxWidth: 460, margin: "0 auto 32px", lineHeight: 1.9, fontFamily: "'Inter', sans-serif", fontStyle: "italic" }}>Every great tale needs a co-author. Let's write the next chapter together.</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              {contact?.email && <a href={`mailto:${contact.email}`} style={{ padding: "14px 30px", background: ACCENT, color: "#1A1423", borderRadius: 8, fontSize: 14, fontWeight: 700, textDecoration: "none", fontFamily: "'Inter', sans-serif", letterSpacing: "0.02em" }}>✉ Send a Letter</a>}
              {contact?.phone && <a href={`tel:${contact.phone}`} style={{ padding: "14px 30px", border: `2px solid ${GOLD}60`, color: GOLD, borderRadius: 8, fontSize: 14, textDecoration: "none", fontFamily: "'Inter', sans-serif" }}>📞 Make a Call</a>}
            </div>
            <div style={{ marginTop: 48, display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: MUTED, textDecoration: "none", fontFamily: "'Inter', sans-serif" }}>{s.label}</a>
              ))}
            </div>
            <div style={{ marginTop: 40, fontSize: 14, color: GOLD, fontStyle: "italic", fontFamily: "'Georgia', serif" }}>"{name}" — Fin ❦</div>
          </div>
        )}

        <div style={{ textAlign: "center", fontFamily: "'Inter', sans-serif", color: MUTED, fontSize: 12, marginTop: 20, paddingTop: 24, borderTop: `1px solid ${GOLD}20` }} />
      </div>
    </div>
  );
};

export default StorybookTheme;
