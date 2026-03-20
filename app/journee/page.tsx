// app/infos/page.tsx

export default function journee() {
    // ── Données ────────────────────────────────────────────────────────────────
    const TIMELINE = [
        { time: "15h00", label: "Cérémonie laïque",  icon: "/images/arche-de-mariage.png"  },
        { time: "16h30", label: "Photos",             icon: "/images/appareil-photo-numerique.png"     },
        { time: "18h00", label: "Cocktail",           icon: "/images/verre-de-champagne.png"   },
        { time: "20h00", label: "Repas",              icon: "/images/canard-en-caoutchouc.png"      },
        { time: "00h00", label: "Soirée",             icon: "/images/danse.png"     },
    ];

    const CONTACTS = [
        {
            name:   "Benjamin",
            role:   "Le marié",
            phone:  "+33 6 18 80 71 48",
            email:  "bendenois@yahoo.fr",
        },
        {
            name:   "Céline",
            role:   "La mariée",
            phone:  "+33 6 67 34 64 15",
            email:  "cadoret.celine@gmail.com",
        },
    ];

    // ── Couleurs ───────────────────────────────────────────────────────────────
    const c = {
        primary: "#E4A79A",
        secondary: "#F4EAD2",
        terracotta:      "#c4694a",
        terracottaLight: "#e8957a",
        cream:           "#f5efe6",
        creamDark:       "#ede4d6",
        sage:            "#7a9077",
        sageLight:       "#a8bc9f",
        brown:           "#6b4c3b",
        brownLight:      "#9c7060",
        text:            "#3d2b20",
        white:           "#ffffff",
    };

    return (
        <div style={{ minHeight: "100vh", background: c.cream, fontFamily: "Jost, sans-serif", fontWeight: 300, color: c.text }}>

            {/* ── HERO ── */}
            <div style={{
                background: c.primary,
                padding: "80px 24px 72px",
                textAlign: "center",
            }}>
                <p style={{
                    fontSize: "0.68rem", letterSpacing: "0.35em", textTransform: "uppercase",
                    color: c.secondary, marginBottom: 20,
                }}>
                    Benjamin &amp; Céline · Informations pratiques
                </p>
                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2.2rem, 6vw, 4.2rem)",
                    fontWeight: 400, fontStyle: "italic",
                    color: c.cream, lineHeight: 1.1, marginBottom: 0,
                }}>
                    Le grand jour
                </h1>
            </div>

            <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 100px" }}>

                {/* ── DATE & LIEU ── */}
                <div style={{ marginTop: 60 }}>
                    <SectionHeader label="Date & Lieu" title="Domaine de Valmont" color={c} />

                    <div style={{
                        background: c.white,
                        borderRadius: 4,
                        boxShadow: "0 4px 24px rgba(61,43,32,0.09)",
                        overflow: "hidden",
                    }}>
                        {/* Infos lieu */}
                        <div style={{
                            padding: "32px 36px",
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: 24,
                            borderBottom: `1px solid ${c.creamDark}`,
                        }}>
                            <InfoBlock
                                icon="📅"
                                label="Date"
                                value="Vendredi 24 juillet 2027"
                                color={c}
                            />
                            <InfoBlock
                                icon="📍"
                                label="Lieu"
                                value={"Domaine de Valmont\nBarsac, 33720"}
                                color={c}
                            />
                        </div>

                        {/* Carte Google Maps */}
                        <div style={{ height: 340, background: c.creamDark }}>
                            <iframe
                                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=Chateau+Hotel+Domaine+de+Valmont,Barsac,France&zoom=14`}
                                width="100%"
                                height="340"
                                style={{ border: 0, display: "block" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        {/* Lien itinéraire */}
                        <div style={{ padding: "16px 36px", borderTop: `1px solid ${c.creamDark}` }}>
                            <a
                                href="https://maps.google.com/?q=Domaine+de+Valmont,+Barsac,+France"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 8,
                                    fontSize: "0.78rem",
                                    letterSpacing: "0.15em",
                                    textTransform: "uppercase",
                                    color: c.terracotta,
                                    textDecoration: "none",
                                    fontWeight: 400,
                                }}
                            >
                                <span>→</span> Ouvrir dans Google Maps
                            </a>
                        </div>
                    </div>
                </div>

                {/* ── TIMELINE ── */}
                <div style={{ marginTop: 72 }}>
                    <SectionHeader label="Programme" title="Le déroulé de la journée" color={c} />

                    <div style={{
                        background: c.white,
                        borderRadius: 4,
                        boxShadow: "0 4px 24px rgba(61,43,32,0.09)",
                        padding: "12px 36px",
                    }}>
                        {TIMELINE.map((item, i) => (
                            <div key={item.time}>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 24,
                                    padding: "24px 0",
                                }}>
                                    {/* Heure */}
                                    <div style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: "1.4rem",
                                        color: c.terracotta,
                                        minWidth: 72,
                                        fontWeight: 400,
                                    }}>
                                        {item.time}
                                    </div>

                                    {/* Trait vertical */}
                                    <div style={{
                                        width: 1,
                                        height: 40,
                                        background: c.creamDark,
                                        flexShrink: 0,
                                    }} />

                                    {/* Icône */}
                                    <div style={{
                                        width: 48, height: 48,
                                        borderRadius: "50%",
                                        background: c.creamDark,
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        flexShrink: 0,
                                        overflow: "hidden",
                                    }}>
                                        <img
                                            src={item.icon}
                                            alt={item.label}
                                            style={{ width: 28, height: 28, objectFit: "contain" }}
                                        />
                                    </div>

                                    {/* Label */}
                                    <div style={{
                                        fontFamily: "'Cormorant Garamond', serif",
                                        fontStyle: "italic",
                                        fontSize: "1.2rem",
                                        color: c.brown,
                                    }}>
                                        {item.label}
                                    </div>
                                </div>

                                {/* Séparateur sauf après le dernier */}
                                {i < TIMELINE.length - 1 && (
                                    <div style={{ height: 1, background: c.creamDark, marginLeft: 96 + 24 }} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── CONTACTS ── */}
                <div style={{ marginTop: 72 }}>
                    <SectionHeader label="Contacts" title="Nous joindre" color={c} />

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 20,
                    }}>
                        {CONTACTS.map((contact) => (
                            <div key={contact.name} style={{
                                background: c.white,
                                borderRadius: 4,
                                boxShadow: "0 4px 24px rgba(61,43,32,0.09)",
                                padding: "32px 28px",
                            }}>
                                <p style={{
                                    fontSize: "0.65rem", letterSpacing: "0.25em",
                                    textTransform: "uppercase", color: c.terracotta,
                                    marginBottom: 6, fontWeight: 400,
                                }}>
                                    {contact.role}
                                </p>
                                <h3 style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontStyle: "italic",
                                    fontSize: "1.3rem",
                                    color: c.brown,
                                    marginBottom: 20,
                                }}>
                                    {contact.name}
                                </h3>
                                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                    <ContactLine icon="📞" value={contact.phone} href={`tel:${contact.phone.replace(/\s/g, "")}`} color={c} />
                                    <ContactLine icon="✉️" value={contact.email} href={`mailto:${contact.email}`} color={c} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Adresse commune */}
                    <div style={{
                        marginTop: 20,
                        background: c.creamDark,
                        borderRadius: 4,
                        padding: "24px 28px",
                        display: "flex",
                        alignItems: "center",
                        gap: 16,
                    }}>
                        <span style={{ fontSize: "1.2rem" }}>🏠</span>
                        <div>
                            <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: c.brownLight, marginBottom: 4 }}>
                                Notre adresse
                            </p>
                            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1rem", color: c.brown }}>
                                3 square Daumesnil, 94300 Vincennes
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

// ── Sous-composants ────────────────────────────────────────────────────────

function SectionHeader({ label, title, color: c }: { label: string; title: string; color: Record<string, string> }) {
    return (
        <div style={{ marginBottom: 28 }}>
            <p style={{
                fontSize: "0.65rem", letterSpacing: "0.3em",
                textTransform: "uppercase", color: c.terracotta,
                marginBottom: 8, fontWeight: 400,
            }}>
                {label}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
                    color: c.brown, fontWeight: 400,
                    whiteSpace: "nowrap",
                }}>
                    {title}
                </h2>
                <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${c.sageLight}, transparent)` }} />
            </div>
        </div>
    );
}

function InfoBlock({ icon, label, value, color: c }: { icon: string; label: string; value: string; color: Record<string, string> }) {
    return (
        <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <span style={{ fontSize: "1.3rem", marginTop: 2 }}>{icon}</span>
            <div>
                <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: c.brownLight, marginBottom: 4 }}>
                    {label}
                </p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1.05rem", color: c.brown, lineHeight: 1.6, whiteSpace: "pre-line" }}>
                    {value}
                </p>
            </div>
        </div>
    );
}

function ContactLine({ icon, value, href, color: c }: { icon: string; value: string; href: string; color: Record<string, string> }) {
    return (
        <a href={href} style={{ display: "flex", gap: 10, alignItems: "center", textDecoration: "none" }}>
            <span style={{ fontSize: "0.9rem" }}>{icon}</span>
            <span style={{ fontSize: "0.88rem", color: c.brownLight, letterSpacing: "0.03em", transition: "color 0.2s" }}>
        {value}
      </span>
        </a>
    );
}