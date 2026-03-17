import './globals.css'
import Link from 'next/link'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="fr">
      <body className="bg-background text-gray-800 font-sans">
      <nav className="p-4 flex gap-6 justify-center border-b bg-white shadow-md sticky top-0 z-10">
        <Link href="/">Accueil</Link>
        <Link href="/journee">La journée</Link>
        <Link href="/cadeaux">Liste de cadeaux</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/rsvp">RSVP</Link>
      </nav>
      <main className="p-6 max-w-5xl mx-auto">{children}</main>
      </body>
      </html>
  )
}