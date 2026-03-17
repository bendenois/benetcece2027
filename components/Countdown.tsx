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
        <div className="text-center text-2xl font-serif text-primary space-x-2">
            <span>{days}j</span>
            <span>{hours}h</span>
            <span>{minutes}m</span>
            <span>{seconds}s</span>
        </div>
    )
}