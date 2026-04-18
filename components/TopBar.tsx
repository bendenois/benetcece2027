// =====================
// components/TopBar.tsx
// =====================
'use client'
import Image from 'next/image'

interface TopBarProps {
    imageSrc: string
}

export default function TopBar({ imageSrc }: TopBarProps) {
    return (
        <div className="topbar-body">
            <div className="side-panel left-panel">
                <div className="inner-side-panel">
                    <div className="title">Quand :</div>
                    <div className="value"><span>Samedi</span><span>15 juillet 2028</span></div>
                </div>
            </div>
            <div className="center-panel">
                <Image
                    src={imageSrc}
                    alt="Top banner"
                    fill
                    className="brightness-75 center-image"
                    priority
                />
                <div className="wedding-title absolute inset-0 flex flex-col items-center text-center">
                    <h1 className="wedding-title-names text-4xl font-serif font-bold drop-shadow-lg">
                        Benjamin & Céline
                    </h1>
                    <p className="wedding-title-text mt-2 text-lg drop-shadow-md">Vous invitent à célébrer leur mariage</p>
                </div>
            </div>
            <div className="side-panel right-panel">
                <div className="inner-side-panel">
                    <div className="title">Où :</div>
                    <div className="value"><span>Chateau Pontach-Lynch</span><span>Margaux</span></div>
                </div>
            </div>
        </div>
    )
}