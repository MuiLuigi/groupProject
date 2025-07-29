import './globals.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'DigiMart',
  description: 'A modern marketplace for digital goods',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow p-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
