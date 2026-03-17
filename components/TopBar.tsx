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
        <div className="relative w-full h-80 md:h-96">
            <Image
                src={imageSrc}
                alt="Top banner"
                fill
                className="object-cover brightness-75"
                priority
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-background px-4">
                <h1 className="text-4xl md:text-6xl font-serif font-bold drop-shadow-lg">
                    Benjamin & Céline
                </h1>
                <p className="mt-2 text-lg md:text-2xl drop-shadow-md">24 juillet 2027</p>
            </div>
        </div>
    )
}