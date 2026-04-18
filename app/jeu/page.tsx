// app/jeu/page.tsx
"use client";

import { useState } from "react";

// ── Questions ──────────────────────────────────────────────────────────────

const QUESTIONS = [
    // ── Le couple ──
    { id: "q1",  label: "Quelle sera la musique d'ouverture du bal ?" },
    { id: "q2",  label: "Où sera notre voyage de noce ?" },
    { id: "q3",  label: "À quelle heure a eu lieu la demande en mariage ?" },
    { id: "q4",  label: "Où a eu lieu notre premier bisou ?" },
    { id: "q5",  label: "Quelle est notre bière préférée ?" },
    { id: "q6",  label: "À Bali, pourquoi nous sommes-nous arrêtés de notre tour de vélo pour aller dans un bar ?" },
    { id: "q7",  label: "Quel est le premier repas que Céline a préparé à Ben ?" },
    { id: "q8",  label: "Quel est le premier cadeau que Ben a offert à Céline ?" },
    { id: "q9",  label: "Qu'a dit papi Patrick à Ben la première fois qu'il l'a rencontré ?" },
    { id: "q10", label: "Quels sont les numéros de Ben, Léon et Céline sur leur maillot de hand ?" },
    // ── Benjamin ──
    { id: "q11", label: "Quel est le Pokémon préféré de Benjamin ?" },
    { id: "q12", label: "Quel est le nombre de buts de Ben cette saison au handball ?" },
    { id: "q13", label: "Quel est le nom de rappeur de Ben ?" },
    { id: "q14", label: "Quel est le surnom de Ben selon Céline ?" },
    { id: "q15", label: "Quelle est la cause numéro 1 pour que Benjamin en veuille à Céline ?" },
    // ── Céline ──
    { id: "q16", label: "Avec quelle peluche dort Céline ?" },
    { id: "q17", label: "Qu'est-ce qu'a préféré Céline au Japon ?" },
    { id: "q18", label: "Quels sont les chapeaux préférés de Céline ?" },
    { id: "q19", label: "Quel est le Lego préféré de Céline dans les collections de Ben et Léon ?" },
    { id: "q20", label: "Comment s'appelle le fameux moment où Cécé ramène des shots en soirée ?" },
    // ── Pour finir ──
    { id: "q21", label: "Qui met le plus de crème pour les mains ?" },
    { id: "q22", label: "À qui est la PS5 ?" },
];

// ── Couleurs ───────────────────────────────────────────────────────────────

const c = {
    primary: "#E4A79A",
    secondary: "#F4EAD2",
    terracotta:      "#c4694a",
    terracottaLight: "#e8957a",
    terracottaPale:  "rgba(196,105,74,0.08)",
    cream:           "#f5efe6",
    creamDark:       "#ede4d6",
    sage:            "#7a9077",
    sageLight:       "#a8bc9f",
    brown:           "#6b4c3b",
    brownLight:      "#9c7060",
    text:            "#3d2b20",
    white:           "#ffffff",
    error:           "#c0392b",
};

// ── Style helpers ──────────────────────────────────────────────────────────

const s: Record<string, React.CSSProperties> = {
    page: {
        minHeight: "100vh",
        background: c.cream,
        fontFamily: "Jost, sans-serif",
        fontWeight: 300,
        color: c.text,
        paddingBottom: 100,
    },
    hero: {
        background: c.primary,
        padding: "80px 24px 80px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
    },
    heroEyebrow: {
        fontSize: "0.68rem",
        letterSpacing: "0.35em",
        textTransform: "uppercase",
        color: c.secondary,
        marginBottom: 20,
        fontFamily: "Jost, sans-serif",
    },
    heroTitle: {
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(2.4rem, 7vw, 5rem)",
        fontWeight: 400,
        fontStyle: "italic",
        color: c.cream,
        lineHeight: 1.1,
        marginBottom: 16,
    },
    heroSub: {
        fontFamily: "'Cormorant Garamond', serif",
        fontStyle: "italic",
        fontSize: "1.25rem",
        color: c.secondary,
        letterSpacing: "0.12em",
    },
    heroDivider: {
        display: "flex",
        alignItems: "center",
        gap: 16,
        maxWidth: 280,
        margin: "24px auto",
    },
    heroDividerLine: {
        flex: 1,
        height: 1,
        background: c.secondary,
    },
    heroDividerDot: {
        color: c.secondary,
        fontSize: "0.8rem",
    },
    heroDesc: {
        fontFamily: "Jost, sans-serif",
        fontWeight: 300,
        fontSize: "0.88rem",
        color: "rgba(245,239,230,0.55)",
        letterSpacing: "0.08em",
        maxWidth: 400,
        margin: "0 auto",
        lineHeight: 1.7,
    },
    wrap: {
        padding: "0 24px",
    },
    card: {
        background: c.white,
        maxWidth: 660,
        margin: "0 auto",
        marginTop: -40,
        borderRadius: 4,
        boxShadow: "0 8px 48px rgba(61,43,32,0.13)",
        overflow: "hidden",
    },
    cardHeader: {
        background: c.creamDark,
        padding: "28px 40px",
        marginTop: "20px",
        borderBottom: `1px solid rgba(196,105,74,0.12)`,
    },
    cardHeaderTitle: {
        fontFamily: "'Playfair Display', serif",
        fontStyle: "italic",
        fontSize: "1rem",
        color: c.brown,
    },
    cardHeaderSub: {
        fontSize: "0.72rem",
        letterSpacing: "0.12em",
        color: c.brownLight,
        marginTop: 4,
    },
    cardBody: {
        padding: "40px 40px",
    },
    // Identité
    identityRow: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16,
        marginBottom: 32,
        paddingBottom: 32,
        borderBottom: `1px solid ${c.creamDark}`,
    },
    field: {
        display: "flex",
        flexDirection: "column",
        gap: 6,
    },
    label: {
        fontSize: "0.68rem",
        letterSpacing: "0.18em",
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
    errorMsg: {
        fontSize: "0.72rem",
        color: c.error,
        marginTop: 2,
    },
    // Questions
    questionsList: {
        display: "flex",
        flexDirection: "column",
        gap: 0,
    },
    questionItem: {
        padding: "22px 0",
        borderBottom: `1px solid ${c.creamDark}`,
    },
    questionNumber: {
        fontSize: "0.62rem",
        letterSpacing: "0.25em",
        textTransform: "uppercase",
        color: c.terracotta,
        marginBottom: 6,
        fontWeight: 400,
    },
    questionLabel: {
        fontFamily: "'Cormorant Garamond', serif",
        fontStyle: "italic",
        fontSize: "1.05rem",
        color: c.brown,
        marginBottom: 12,
        lineHeight: 1.5,
    },
    textarea: {
        border: `1px solid ${c.creamDark}`,
        borderRadius: 3,
        padding: "10px 14px",
        fontSize: "0.9rem",
        fontFamily: "Jost, sans-serif",
        fontWeight: 300,
        color: c.text,
        background: c.cream,
        outline: "none",
        transition: "border-color 0.2s",
        width: "100%",
        boxSizing: "border-box" as const,
        resize: "none" as const,
        minHeight: 60,
    },
    submitWrap: {
        marginTop: 36,
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
        fontSize: "0.82rem",
        letterSpacing: "0.22em",
        textTransform: "uppercase" as const,
        cursor: "pointer",
        transition: "all 0.3s",
    },
    submitHint: {
        textAlign: "center" as const,
        fontSize: "0.72rem",
        color: c.brownLight,
        opacity: 0.6,
        marginTop: 12,
        fontStyle: "italic",
    },
    // Progression
    progressBar: {
        height: 3,
        background: c.creamDark,
        position: "relative" as const,
    },
};

// ── Page ───────────────────────────────────────────────────────────────────

export default function jeu() {
    const [firstName, setFirstName] = useState("");
    const [lastName,  setLastName]  = useState("");
    const [answers,   setAnswers]   = useState<Record<string, string>>(
        Object.fromEntries(QUESTIONS.map((q) => [q.id, ""]))
    );
    const [errors,    setErrors]    = useState<Record<string, string>>({});
    const [loading,   setLoading]   = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const answered = Object.values(answers).filter(Boolean).length;
    const progress = (answered / QUESTIONS.length) * 100;

    const setAnswer = (id: string, val: string) => {
        setAnswers((a) => ({ ...a, [id]: val }));
        setErrors((e) => ({ ...e, [id]: "" }));
    };

    const validate = () => {
        const errs: Record<string, string> = {};
        if (!firstName.trim()) errs.firstName = "Requis";
        if (!lastName.trim())  errs.lastName  = "Requis";
        QUESTIONS.forEach((q) => {
            if (!answers[q.id]?.trim()) errs[q.id] = "Merci de répondre à cette question";
        });
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleSubmit = async () => {
        if (!validate()) return;
        setLoading(true);
        try {
            const res = await fetch("/api/game", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    playerName: `${firstName.trim()} ${lastName.trim()}`,
                    answers,
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
                    <p style={s.heroEyebrow}>Benjamin &amp; Céline · 24 Juillet 2027</p>
                    <h1 style={s.heroTitle}>Chocolatine ou<br />pain au chocolat</h1>
                </div>
                <div style={s.wrap}>
                    <div style={{ ...s.card, padding: "60px 40px", textAlign: "center", marginTop: -40 }}>
                        <div style={{ fontSize: "3rem", marginBottom: 24 }}>🏆</div>
                        <h2 style={{
                            fontFamily: "'Playfair Display', serif",
                            fontStyle: "italic",
                            fontSize: "1.8rem",
                            color: c.brown,
                            marginBottom: 16,
                        }}>
                            Bien joué, {firstName} !
                        </h2>
                        <p style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontStyle: "italic",
                            fontSize: "1.1rem",
                            color: c.brownLight,
                            lineHeight: 1.7,
                            maxWidth: 380,
                            margin: "0 auto",
                        }}>
                            Tes réponses ont bien été enregistrées. On révèle le grand gagnant lors de la soirée — may the best win !
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={s.page}>
            {/* Hero */}
            <div style={s.hero}>
                <p style={s.heroEyebrow}>Benjamin &amp; Céline · 24 Juillet 2027</p>
                <h1 style={s.heroTitle}>
                    Chocolatine ou<br />pain au chocolat
                </h1>
                <div style={s.heroDivider}>
                    <div style={s.heroDividerLine} />
                    <span style={s.heroDividerDot}>✦</span>
                    <div style={s.heroDividerLine} />
                </div>
                <p style={s.heroSub}>Poche ou sac</p>
                <p style={{ ...s.heroDesc, marginTop: 20 }}>
                    22 questions sur Céline &amp; Ben. Le plus précis remporte un cadeau.
                </p>
            </div>

            {/* Barre de progression */}
            <div style={s.progressBar}>
                <div style={{
                    position: "absolute",
                    top: 0, left: 0,
                    height: "100%",
                    width: `${progress}%`,
                    background: c.terracotta,
                    transition: "width 0.4s ease",
                }} />
            </div>

            <div style={s.wrap}>
                <div style={s.card}>

                    {/* En-tête carte */}
                    <div style={s.cardHeader}>
                        <div style={s.cardHeaderTitle}>Le questionnaire des mariés</div>
                        <div style={s.cardHeaderSub}>
                            {answered} / {QUESTIONS.length} questions répondues
                        </div>
                    </div>

                    <div style={s.cardBody}>

                        {/* Identité */}
                        <div style={s.identityRow}>
                            <div style={s.field}>
                                <label style={s.label}>Prénom</label>
                                <input
                                    style={{ ...s.input, borderColor: errors.firstName ? c.error : undefined }}
                                    value={firstName}
                                    onChange={(e) => { setFirstName(e.target.value); setErrors((err) => ({ ...err, firstName: "" })); }}
                                    placeholder="Antoine"
                                />
                                {errors.firstName && <span style={s.errorMsg}>{errors.firstName}</span>}
                            </div>
                            <div style={s.field}>
                                <label style={s.label}>Nom</label>
                                <input
                                    style={{ ...s.input, borderColor: errors.lastName ? c.error : undefined }}
                                    value={lastName}
                                    onChange={(e) => { setLastName(e.target.value); setErrors((err) => ({ ...err, lastName: "" })); }}
                                    placeholder="Dupont"
                                />
                                {errors.lastName && <span style={s.errorMsg}>{errors.lastName}</span>}
                            </div>
                        </div>

                        {/* Questions */}
                        <div style={s.questionsList}>
                            {QUESTIONS.map((q, i) => (
                                <div key={q.id} style={s.questionItem}>
                                    <div style={s.questionNumber}>Question {String(i + 1).padStart(2, "0")}</div>
                                    <div style={s.questionLabel}>{q.label}</div>
                                    <textarea
                                        style={{
                                            ...s.textarea,
                                            borderColor: errors[q.id] ? c.error : answers[q.id] ? c.sageLight : undefined,
                                        }}
                                        value={answers[q.id]}
                                        onChange={(e) => setAnswer(q.id, e.target.value)}
                                        placeholder="Votre réponse…"
                                        rows={2}
                                    />
                                    {errors[q.id] && <span style={s.errorMsg}>{errors[q.id]}</span>}
                                </div>
                            ))}
                        </div>

                        {/* Submit */}
                        <div style={s.submitWrap}>
                            <button
                                style={{ ...s.submitBtn, opacity: loading ? 0.7 : 1 }}
                                onClick={handleSubmit}
                                disabled={loading}
                            >
                                {loading ? "Envoi en cours…" : "Envoyer mes réponses"}
                            </button>
                            <p style={s.submitHint}>
                                Les réponses sont révélées lors de la soirée ✦
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}