// app/rsvp/page.tsx
"use client";

import { useState } from "react";

// ── Types ──────────────────────────────────────────────────────────────────

type MenuChoice = "STANDARD" | "VEGETARIAN";
type ArrivalDay = "FRIDAY" | "SATURDAY";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    attending: boolean | null;
    attendingBrunch: boolean;
    arrivalDay: ArrivalDay | null;
    menuChoice: MenuChoice;
    allergies: string;
    hasPlusOne: boolean;
    plusOneFirstName: string;
    plusOneLastName: string;
    plusOneMenu: MenuChoice;
    plusOneAllergies: string;
    childrenCount: number;
}

const INITIAL: FormData = {
    firstName: "",
    lastName: "",
    email: "",
    attending: null,
    attendingBrunch: false,
    arrivalDay: null,
    menuChoice: "STANDARD",
    allergies: "",
    hasPlusOne: false,
    plusOneFirstName: "",
    plusOneLastName: "",
    plusOneMenu: "STANDARD",
    plusOneAllergies: "",
    childrenCount: 0,
};

// ── Styles ─────────────────────────────────────────────────────────────────

const c = {
    primary: "#E4A79A",
    secondary: "#F4EAD2",
    terracotta: "#c4694a",
    terracottaLight: "#e8957a",
    cream: "#f5efe6",
    creamDark: "#ede4d6",
    sage: "#7a9077",
    sageLight: "#a8bc9f",
    brown: "#6b4c3b",
    brownLight: "#9c7060",
    text: "#3d2b20",
    white: "#ffffff",
    error: "#c0392b",
};

const s: Record<string, React.CSSProperties> = {
    page: {
        minHeight: "100vh",
        background: c.cream,
        fontFamily: "Jost, sans-serif",
        fontWeight: 300,
        color: c.text,
        paddingBottom: 80,
    },
    hero: {
        background: c.primary,
        padding: "60px 24px 60px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
    },
    heroLabel: {
        fontSize: "0.68rem",
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        color: c.secondary,
        marginBottom: 16,
        fontFamily: "Jost, sans-serif",
    },
    heroTitle: {
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(2.2rem, 6vw, 4rem)",
        fontWeight: 400,
        fontStyle: "italic",
        color: c.cream,
        lineHeight: 1.15,
        marginBottom: 16,
    },
    heroSub: {
        fontFamily: "'Cormorant Garamond', serif",
        fontStyle: "italic",
        fontSize: "1.1rem",
        color: c.secondary,
        maxWidth: 480,
        margin: "0 auto",
        lineHeight: 1.7,
    },
    card: {
        background: c.white,
        maxWidth: 640,
        margin: "0 auto",
        marginTop: -32,
        borderRadius: 4,
        boxShadow: "0 8px 40px rgba(61,43,32,0.12)",
        padding: "48px 48px",
        position: "relative",
    },
    section: {
        marginBottom: 36,
    },
    sectionTitle: {
        fontFamily: "'Playfair Display', serif",
        fontStyle: "italic",
        fontSize: "1.1rem",
        color: c.brown,
        marginBottom: 20,
        paddingBottom: 10,
        borderBottom: `1px solid ${c.creamDark}`,
    },
    row: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16,
    },
    field: {
        display: "flex",
        flexDirection: "column",
        gap: 6,
        marginBottom: 16,
    },
    label: {
        fontSize: "0.72rem",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: c.brownLight,
        fontWeight: 400,
    },
    input: {
        border: `1px solid ${c.creamDark}`,
        borderRadius: 3,
        padding: "10px 14px",
        fontSize: "0.95rem",
        fontFamily: "Jost, sans-serif",
        fontWeight: 300,
        color: c.text,
        background: c.cream,
        outline: "none",
        transition: "border-color 0.2s",
        width: "100%",
        boxSizing: "border-box" as const,
    },
    yesNoGroup: {
        display: "flex",
        gap: 12,
    },
    radioGroup: {
        display: "flex",
        gap: 12,
    },
    counter: {
        display: "flex",
        alignItems: "center",
        gap: 16,
    },
    counterBtn: {
        width: 32,
        height: 32,
        border: `1px solid ${c.creamDark}`,
        borderRadius: "50%",
        background: "transparent",
        color: c.brownLight,
        fontSize: "1.1rem",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.2s",
        fontFamily: "Jost, sans-serif",
    } as React.CSSProperties,
    counterValue: {
        fontFamily: "'Playfair Display', serif",
        fontSize: "1.3rem",
        color: c.brown,
        minWidth: 24,
        textAlign: "center" as const,
    },
    divider: {
        height: 1,
        background: c.creamDark,
        margin: "28px 0",
    },
    submitBtn: {
        width: "100%",
        padding: "16px",
        background: c.primary,
        border: "none",
        borderRadius: 3,
        color: c.white,
        fontFamily: "Jost, sans-serif",
        fontWeight: 400,
        fontSize: "0.85rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase" as const,
        cursor: "pointer",
        transition: "all 0.3s",
        marginTop: 8,
    } as React.CSSProperties,
    errorMsg: {
        fontSize: "0.78rem",
        color: c.error,
        marginTop: 4,
    },
    successCard: {
        background: c.white,
        maxWidth: 480,
        margin: "60px auto",
        borderRadius: 4,
        boxShadow: "0 8px 40px rgba(61,43,32,0.12)",
        padding: "60px 48px",
        textAlign: "center",
    },
    successIcon: {
        fontSize: "2.5rem",
        marginBottom: 24,
    },
    successTitle: {
        fontFamily: "'Playfair Display', serif",
        fontStyle: "italic",
        fontSize: "1.8rem",
        color: c.brown,
        marginBottom: 16,
    },
    successText: {
        fontFamily: "'Cormorant Garamond', serif",
        fontStyle: "italic",
        fontSize: "1.1rem",
        color: c.brownLight,
        lineHeight: 1.7,
    },
};

// ── Style helpers ──────────────────────────────────────────────────────────

const yesNoBtn = (active: boolean, variant: "yes" | "no"): React.CSSProperties => ({
    flex: 1,
    padding: "12px",
    border: `1px solid ${active ? (variant === "yes" ? c.sage : c.terracotta) : c.creamDark}`,
    borderRadius: 3,
    background: active ? (variant === "yes" ? c.sage : c.terracotta) : "transparent",
    color: active ? c.white : c.brownLight,
    fontFamily: "Jost, sans-serif",
    fontWeight: 300,
    fontSize: "0.85rem",
    letterSpacing: "0.1em",
    cursor: "pointer",
    transition: "all 0.2s",
});

const radioBtn = (active: boolean): React.CSSProperties => ({
    flex: 1,
    padding: "10px 12px",
    border: `1px solid ${active ? c.terracotta : c.creamDark}`,
    borderRadius: 3,
    background: active ? "rgba(196,105,74,0.08)" : "transparent",
    color: active ? c.terracotta : c.brownLight,
    fontFamily: "Jost, sans-serif",
    fontWeight: 300,
    fontSize: "0.82rem",
    letterSpacing: "0.08em",
    cursor: "pointer",
    transition: "all 0.2s",
    textAlign: "center",
});

// ── Composants utilitaires ─────────────────────────────────────────────────

function Field({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div style={s.field}>
            <label style={s.label}>{label}</label>
            {children}
        </div>
    );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
    return <h3 style={s.sectionTitle}>{children}</h3>;
}

// ── Page principale ────────────────────────────────────────────────────────

export default function RSVP() {
    const [form, setForm] = useState<FormData>(INITIAL);
    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const set = <K extends keyof FormData>(key: K, value: FormData[K]) => {
        setForm((f) => ({ ...f, [key]: value }));
        setErrors((e) => ({ ...e, [key]: undefined }));
    };

    const validate = (): boolean => {
        const errs: Partial<Record<keyof FormData, string>> = {};
        if (!form.firstName.trim()) errs.firstName = "Requis";
        if (!form.lastName.trim())  errs.lastName  = "Requis";
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Email invalide";
        if (form.attending === null) errs.attending = "Merci de répondre";
        if (form.attending) {
            if (!form.arrivalDay) errs.arrivalDay = "Requis";
            if (form.hasPlusOne) {
                if (!form.plusOneFirstName.trim()) errs.plusOneFirstName = "Requis";
                if (!form.plusOneLastName.trim())  errs.plusOneLastName  = "Requis";
            }
        }
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleSubmit = async () => {
        if (!validate()) return;
        setLoading(true);
        try {
            const res = await fetch("/api/rsvp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...form,
                    arrivalDay: form.attending ? form.arrivalDay : null,
                    attending: form.attending!,
                }),
            });
            if (!res.ok) throw new Error();
            setSubmitted(true);
        } catch {
            alert("Une erreur est survenue, merci de réessayer.");
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div style={s.page}>
                <div style={s.hero}>
                    <p style={s.heroLabel}>Léa &amp; Thomas · 14 Juin 2025</p>
                    <h1 style={s.heroTitle}>RSVP</h1>
                </div>
                <div style={s.successCard}>
                    <div style={s.successIcon}>
                        {form.attending ? "🌿" : "💌"}
                    </div>
                    <h2 style={s.successTitle}>
                        {form.attending ? "À très bientôt !" : "Merci pour ta réponse"}
                    </h2>
                    <p style={s.successText}>
                        {form.attending
                            ? `Nous sommes ravis de vous avoir, ${form.firstName} ! On a hâte de partager ce jour avec vous.`
                            : `C'est noté, ${form.firstName}. Tu nous manqueras, mais on garde une pensée pour toi ce jour-là.`}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div style={s.page}>
            {/* Hero */}
            <div style={s.hero}>
                <p style={s.heroLabel}>Benjamin &amp; Céline · 15 Juillet 2028</p>
                <h1 style={s.heroTitle}>Formulaire de présence</h1>
                <p style={s.heroSub}>
                    Merci de confirmer votre présence avant le 1er février 2028.
                </p>
            </div>

            {/* Carte formulaire */}
            <div style={{ padding: "0 24px" }}>
                <div style={s.card}>

                    {/* ── Identité ── */}
                    <div style={s.section}>
                        <SectionTitle>Vos coordonnées</SectionTitle>
                        <div style={s.row}>
                            <Field label="Prénom">
                                <input
                                    style={{ ...s.input, borderColor: errors.firstName ? c.error : undefined }}
                                    value={form.firstName}
                                    onChange={(e) => set("firstName", e.target.value)}
                                    placeholder="Zinédine"
                                />
                                {errors.firstName && <span style={s.errorMsg}>{errors.firstName}</span>}
                            </Field>
                            <Field label="Nom">
                                <input
                                    style={{ ...s.input, borderColor: errors.lastName ? c.error : undefined }}
                                    value={form.lastName}
                                    onChange={(e) => set("lastName", e.target.value)}
                                    placeholder="Zidane"
                                />
                                {errors.lastName && <span style={s.errorMsg}>{errors.lastName}</span>}
                            </Field>
                        </div>
                        <Field label="Email">
                            <input
                                style={{ ...s.input, borderColor: errors.email ? c.error : undefined }}
                                type="email"
                                value={form.email}
                                onChange={(e) => set("email", e.target.value)}
                                placeholder="tony.parker@email.com"
                            />
                            {errors.email && <span style={s.errorMsg}>{errors.email}</span>}
                        </Field>
                    </div>

                    <div style={s.divider} />

                    {/* ── Présence ── */}
                    <div style={s.section}>
                        <SectionTitle>Serez-vous présent(e) ?</SectionTitle>
                        <Field label="">
                            <div style={s.yesNoGroup}>
                                <button style={yesNoBtn(form.attending === true, "yes")}  onClick={() => set("attending", true)}>
                                    🌿 Oui, avec joie !
                                </button>
                                <button style={yesNoBtn(form.attending === false, "no")} onClick={() => set("attending", false)}>
                                    💌 Non, malheureusement
                                </button>
                            </div>
                            {errors.attending && <span style={s.errorMsg}>{errors.attending}</span>}
                        </Field>
                    </div>

                    {/* ── Champs conditionnels si présent ── */}
                    {form.attending === true && (
                        <>
                            <div style={s.divider} />

                            {/* Arrivée */}
                            <div style={s.section}>
                                <SectionTitle>Votre arrivée</SectionTitle>
                                <Field label="Vous arrivez">
                                    <div style={s.radioGroup}>
                                        <button style={radioBtn(form.arrivalDay === "FRIDAY")}   onClick={() => set("arrivalDay", "FRIDAY")}>
                                            Vendredi soir
                                        </button>
                                        <button style={radioBtn(form.arrivalDay === "SATURDAY")} onClick={() => set("arrivalDay", "SATURDAY")}>
                                            Samedi matin
                                        </button>
                                    </div>
                                    {errors.arrivalDay && <span style={s.errorMsg}>{errors.arrivalDay}</span>}
                                </Field>
                                <Field label="Brunch du dimanche">
                                    <div style={s.radioGroup}>
                                        <button style={radioBtn(form.attendingBrunch === true)}  onClick={() => set("attendingBrunch", true)}>
                                            Oui
                                        </button>
                                        <button style={radioBtn(form.attendingBrunch === false)} onClick={() => set("attendingBrunch", false)}>
                                            Non
                                        </button>
                                    </div>
                                </Field>
                            </div>

                            <div style={s.divider} />

                            {/* Menu */}
                            <div style={s.section}>
                                <SectionTitle>Votre menu</SectionTitle>
                                <Field label="Votre choix">
                                    <div style={s.radioGroup}>
                                        <button style={radioBtn(form.menuChoice === "STANDARD")}   onClick={() => set("menuChoice", "STANDARD")}>
                                            🍖 Menu classique
                                        </button>
                                        <button style={radioBtn(form.menuChoice === "VEGETARIAN")} onClick={() => set("menuChoice", "VEGETARIAN")}>
                                            🥗 Menu végétarien
                                        </button>
                                    </div>
                                </Field>
                                <Field label="Allergies ou régimes particuliers">
                                    <input
                                        style={s.input}
                                        value={form.allergies}
                                        onChange={(e) => set("allergies", e.target.value)}
                                        placeholder="Intolérance au gluten, noix..."
                                    />
                                </Field>
                            </div>

                            <div style={s.divider} />

                            {/* +1 */}
                            <div style={s.section}>
                                <SectionTitle>Accompagnant(e)</SectionTitle>
                                <Field label="Venez-vous avec un +1 ?">
                                    <div style={s.radioGroup}>
                                        <button style={radioBtn(form.hasPlusOne === true)}  onClick={() => set("hasPlusOne", true)}>
                                            Oui
                                        </button>
                                        <button style={radioBtn(form.hasPlusOne === false)} onClick={() => set("hasPlusOne", false)}>
                                            Non
                                        </button>
                                    </div>
                                </Field>
                                {form.hasPlusOne && (
                                    <>
                                        <div style={s.row}>
                                            <Field label="Prénom">
                                                <input
                                                    style={{ ...s.input, borderColor: errors.plusOneFirstName ? c.error : undefined }}
                                                    value={form.plusOneFirstName}
                                                    onChange={(e) => set("plusOneFirstName", e.target.value)}
                                                    placeholder="Nikola"
                                                />
                                                {errors.plusOneFirstName && <span style={s.errorMsg}>{errors.plusOneFirstName}</span>}
                                            </Field>
                                            <Field label="Nom">
                                                <input
                                                    style={{ ...s.input, borderColor: errors.plusOneLastName ? c.error : undefined }}
                                                    value={form.plusOneLastName}
                                                    onChange={(e) => set("plusOneLastName", e.target.value)}
                                                    placeholder="Karabatic"
                                                />
                                                {errors.plusOneLastName && <span style={s.errorMsg}>{errors.plusOneLastName}</span>}
                                            </Field>
                                        </div>
                                        <Field label="Son menu">
                                            <div style={s.radioGroup}>
                                                <button style={radioBtn(form.plusOneMenu === "STANDARD")}   onClick={() => set("plusOneMenu", "STANDARD")}>
                                                    🍖 Menu classique
                                                </button>
                                                <button style={radioBtn(form.plusOneMenu === "VEGETARIAN")} onClick={() => set("plusOneMenu", "VEGETARIAN")}>
                                                    🥗 Menu végétarien
                                                </button>
                                            </div>
                                        </Field>
                                        <Field label="Ses allergies ou régimes particuliers">
                                            <input
                                                style={s.input}
                                                value={form.plusOneAllergies}
                                                onChange={(e) => set("plusOneAllergies", e.target.value)}
                                                placeholder="Intolérance au gluten, noix..."
                                            />
                                        </Field>
                                    </>
                                )}
                            </div>

                            <div style={s.divider} />

                            {/* Enfants */}
                            <div style={s.section}>
                                <SectionTitle>Enfants</SectionTitle>
                                <Field label="Nombre d'enfants qui vous accompagnent">
                                    <div style={s.counter}>
                                        <button
                                            style={s.counterBtn}
                                            onClick={() => set("childrenCount", Math.max(0, form.childrenCount - 1))}
                                        >
                                            −
                                        </button>
                                        <span style={s.counterValue}>{form.childrenCount}</span>
                                        <button
                                            style={s.counterBtn}
                                            onClick={() => set("childrenCount", form.childrenCount + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </Field>
                            </div>
                        </>
                    )}

                    {/* ── Submit ── */}
                    {form.attending !== null && (
                        <button
                            style={{ ...s.submitBtn, opacity: loading ? 0.7 : 1 }}
                            onClick={handleSubmit}
                            disabled={loading}
                        >
                            {loading ? "Envoi en cours…" : "Confirmer ma réponse"}
                        </button>
                    )}

                </div>
            </div>
        </div>
    );
}