// =====================
// components/Countdown.tsx
// =====================
'use client'
import { useEffect, useState } from 'react'

interface CountdownProps {
    targetDate: string
}

export default function Countdown({ targetDate }: CountdownProps) {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft())

    function getTimeLeft() {
        const difference = new Date(targetDate).getTime() - new Date().getTime()
        return difference > 0 ? difference : 0
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft())
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60)
    const seconds = Math.floor((timeLeft / 1000) % 60)

    return (
        <div className="countdown-container text-center text-2xl text-primary space-x-2">
            <span className="countdown-item"><span className="countdown-item-value">{days}</span><span className="countdown-item-label">jours</span></span>
            <span className="countdown-item"><span className="countdown-item-value">{hours}</span><span className="countdown-item-label">heures</span></span>
            <span className="countdown-item"><span className="countdown-item-value">{minutes}</span><span className="countdown-item-label">minutes</span></span>
            <span className="countdown-item"><span className="countdown-item-value">{seconds}</span><span className="countdown-item-label">secondes</span></span>
        </div>
)
}