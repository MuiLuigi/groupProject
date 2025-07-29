'use client'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">DigiMart</h1>
      <ul className="flex gap-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/cart">Cart</Link></li>
        <li><Link href="/admin">Admin</Link></li>
      </ul>
    </nav>
  )
}