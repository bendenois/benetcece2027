"use client";

import { useState } from "react";

// ── Types ──────────────────────────────────────────────────────────────────

interface Photo {
    src: string;
    caption: string;
    alt?: string;
}

interface PolaroidConfig {
    width: number;
    rotate: number; // degrés
    x: number;      // position fixe via marginLeft (px)
    y: number;      // position fixe via marginTop (px)
    zIndex: number;
}

// ── Données ────────────────────────────────────────────────────────────────

const PHOTOS: Photo[] = [
    { src: "/images/mariage.jpeg", caption: "Les autres mariages",  alt: "Les autres mariages" },
    { src: "/images/mariage6.jpeg", caption: "Le bassin d'Arcachon",     alt: "Le bassin" },
    { src: "/images/mariage2.jpeg", caption: "Le Japon 💍",         alt: "Le Japon" },
    { src: "/images/mariage4.JPG", caption: "Le bière pong",          alt: "Le bière pong" },
    { src: "/images/mariage5.JPG", caption: "La photo instagram",        alt: "La photo instagram" },
    { src: "/images/mariage3.JPG", caption: "Bali",        alt: "Bali" },
    { src: "/images/mariage7.jpeg", caption: "London baby",   alt: "Londres" },
];

// Position de chaque polaroïd dans la scène (desktop)
const CONFIGS: PolaroidConfig[] = [
    { width: 200, rotate: -8,  x: -620, y:   40, zIndex: 2 },
    { width: 230, rotate:  3,  x: -300, y:  -160, zIndex: 4 },
    { width: 210, rotate: -2,  x:   -30, y:   50, zIndex: 5 },
    { width: 220, rotate:  7,  x:  340, y:  -120, zIndex: 3 },
    { width: 195, rotate: -5,  x:  690, y:   60, zIndex: 2 },
    { width: 215, rotate: 12,  x:  -200, y:  350, zIndex: 1 },
    { width: 205, rotate: -10, x:  270, y:  310, zIndex: 1 },
];

// ── Composant Polaroïd ─────────────────────────────────────────────────────

interface PolaroidProps {
    photo: Photo;
    config: PolaroidConfig;
}

function Polaroid({ photo, config }: PolaroidProps) {
    const [hovered, setHovered] = useState(false);

    // La position (x, y) est gérée par marginLeft/marginTop — elle ne change JAMAIS.
    // Le transform n'anime que la rotation et le scale, donc pas de saut au hover.
    const transform = hovered
        ? "rotate(0deg) scale(1.08) translateY(-16px)"
        : `rotate(${config.rotate}deg)`;

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                position: "absolute",
                width: config.width,
                marginLeft: config.x,
                marginTop: config.y,
                background: "#fff",
                padding: "14px 14px 44px",
                boxShadow: hovered
                    ? "8px 14px 40px rgba(61,43,32,0.25)"
                    : "4px 6px 24px rgba(61,43,32,0.15), 0 1px 3px rgba(61,43,32,0.1)",
                transform,
                zIndex: hovered ? 10 : config.zIndex,
                cursor: "pointer",
                transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s",
                userSelect: "none",
            }}
        >
            <img
                src={photo.src}
                alt={photo.alt ?? photo.caption}
                style={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    objectFit: "cover",
                    display: "block",
                }}
            />
            <p
                style={{
                    position: "absolute",
                    bottom: 10,
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "0.8rem",
                    color: "#9c7060",
                    padding: "0 8px",
                }}
            >
                {photo.caption}
            </p>
        </div>
    );
}

// ── Composant principal ────────────────────────────────────────────────────

export default function PolaroidGallery() {
    return (
        <section
            id="gallery"
            style={{
                background: "#E4A79A",
                position: "relative",
                paddingBottom: "100px",
                overflow: "hidden",
            }}
        >
            {/* Scène polaroïds */}
            <div style={{
                position: "relative",
                maxWidth: 1100,
                margin: "0 auto",
                minHeight: 520,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                {PHOTOS.map((photo, i) => (
                    <Polaroid key={photo.src} photo={photo} config={CONFIGS[i]} />
                ))}
            </div>
        </section>
    );
}
