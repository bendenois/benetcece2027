'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    { href: '/', label: 'Accueil' },
    { href: '/journee', label: 'Journée' },
    { href: '/cadeaux', label: 'Cadeaux' },
    { href: '/contact', label: 'Contact' },
    { href: '/rsvp', label: 'RSVP' },
]

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="topbar-navigation">
            {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <Link key={link.href} href={link.href} className={`button ${isActive ? 'active' : ''} ${link.label == 'RSVP' ? 'primary-button' : ''}`}>
                        {link.label}
                    </Link>
                )
            })}
        </nav>
    )
}