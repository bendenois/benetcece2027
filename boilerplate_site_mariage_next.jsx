// App Router structure (Next.js 14+)
// TailwindCSS assumed installed

// =====================
// tailwind.config.js
// =====================
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#9E2B2F',
        secondary: '#E4A79A',
        background: '#F4EAD2',
        accent: '#B6BCA3',
        gold: '#D8B679',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}

// =====================
// app/layout.tsx
// =====================
import './globals.css'
import Link from 'next/link'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-background text-gray-800 font-sans">
        <nav className="p-4 flex gap-6 justify-center border-b">
          <Link href="/">Accueil</Link>
          <Link href="/journee">La journée</Link>
          <Link href="/cadeaux">Liste de cadeaux</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/rsvp">RSVP</Link>
        </nav>
        <main className="p-6 max-w-3xl mx-auto">{children}</main>
      </body>
    </html>
  )
}

// =====================
// app/page.tsx (Home)
// =====================
export default function Home() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl font-serif text-primary">Notre Mariage</h1>
      <p>Bienvenue sur notre site de mariage. Nous avons hâte de célébrer ce moment avec vous.</p>
    </div>
  )
}

// =====================
// app/journee/page.tsx
// =====================
export default function Journee() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-serif text-primary">Déroulé de la journée</h1>
      <ul className="space-y-2">
        <li><strong>Cérémonie :</strong> Adresse à compléter</li>
        <li><strong>Vin d'honneur :</strong> Adresse à compléter</li>
        <li><strong>Réception :</strong> Adresse à compléter</li>
      </ul>
    </div>
  )
}

// =====================
// app/contact/page.tsx
// =====================
export default function Contact() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-serif text-primary">Contact</h1>
      <p>Email : votre@email.com</p>
      <p>Téléphone : 06 XX XX XX XX</p>
    </div>
  )
}

// =====================
// app/cadeaux/page.tsx
// =====================
export default function Cadeaux() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-serif text-primary">Liste de cadeaux</h1>
      <p>Votre présence est déjà un cadeau ❤️</p>
    </div>
  )
}

// =====================
// app/rsvp/page.tsx
// =====================
'use client'
import { useState } from 'react'

export default function RSVP() {
  const [plusOne, setPlusOne] = useState(false)

  return (
    <form className="space-y-4">
      <h1 className="text-3xl font-serif text-primary">RSVP</h1>

      <input placeholder="Nom" className="w-full p-2 border" />
      <input placeholder="Prénom" className="w-full p-2 border" />
      <input placeholder="Email" className="w-full p-2 border" />

      <select className="w-full p-2 border">
        <option>Présent</option>
        <option>Absent</option>
      </select>

      <label>
        <input type="checkbox" onChange={(e) => setPlusOne(e.target.checked)} /> +1
      </label>

      {plusOne && (
        <>
          <input placeholder="Nom du +1" className="w-full p-2 border" />
          <input placeholder="Prénom du +1" className="w-full p-2 border" />
        </>
      )}

      <input type="number" placeholder="Nombre d'enfants" className="w-full p-2 border" />

      <label>
        <input type="checkbox" /> Présent au brunch
      </label>

      <select className="w-full p-2 border">
        <option>Arrivée vendredi</option>
        <option>Arrivée samedi</option>
      </select>

      <label>
        <input type="checkbox" /> Logement sur place
      </label>

      <select className="w-full p-2 border">
        <option>Menu normal</option>
        <option>Menu végétarien</option>
      </select>

      <textarea placeholder="Allergies" className="w-full p-2 border" />

      <button className="bg-primary text-white px-4 py-2 rounded">Envoyer</button>
    </form>
  )
}

// =====================
// globals.css
// =====================
body {
  margin: 0;
}
