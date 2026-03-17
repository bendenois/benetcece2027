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