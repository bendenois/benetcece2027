import './globals.css'
import Link from 'next/link'
import FloralBranch from '@/components/FloralBranch'
import Navbar from "@/components/NavBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="fr">
      <link href='https://fonts.googleapis.com/css?family=Alex Brush' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet'/>
      <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"/>

      <body className="bg-background text-gray-800 font-sans">
      <div className="topbar flex top-0 shadow-md">
          <FloralBranch />
          <span className="topbar-initials">B&C</span>
          <Navbar />
          <FloralBranch />
      </div>
      <main className="main-container">{children}</main>
      </body>
      </html>
  )
}