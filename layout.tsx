import './globals.css'
import NavBar from './Digi/components/NavBar'
import Footer from './Digi/components/Footer'
import type { ReactNode } from 'react'
import { CartProvider } from './Digi/Context/Cart'

export const metadata = {
  title: 'DigiMart',
  description: 'A modern marketplace for digital goods',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <NavBar />
          <main className="flex-grow p-8">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
