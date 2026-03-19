'use client'

import { motion } from 'framer-motion'

export default function FloralBranch() {
    return (
        <svg
            width="200"
            height="80"
            viewBox="0 0 200 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-80"
        >
            {/* Tige animée */}
            <motion.path
                d="M5 60
           C40 20, 80 20, 100 50
           C120 80, 160 40, 195 20"
                stroke="#E4A79A"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
            />

            {/* Feuilles */}
            {[
                { cx: 35, cy: 40 },
                { cx: 75, cy: 30 },
                { cx: 115, cy: 55 },
                { cx: 155, cy: 35 },
            ].map((leaf, i) => (
                <motion.ellipse
                    key={i}
                    cx={leaf.cx}
                    cy={leaf.cy}
                    rx="6"
                    ry="3"
                    fill="#E4A79A"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.2, duration: 0.4 }}
                />
            ))}

            {/* Fleurs */}
            {[
                { cx: 55, cy: 25 },
                { cx: 95, cy: 45 },
                { cx: 140, cy: 30 },
            ].map((flower, i) => (
                <motion.circle
                    key={i}
                    cx={flower.cx}
                    cy={flower.cy}
                    r="5"
                    fill="#F4EAD2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + i * 0.3, duration: 0.4 }}
                />
            ))}
        </svg>
    )
}