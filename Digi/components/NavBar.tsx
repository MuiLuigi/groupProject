'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBar() {
  const path = usePathname()

  const links = (paths: String) =>
    path === paths ? 'text-white-600 font-bold' : 'hover:text-blue-200 transition'

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">DigiMart</h1>
      <ul className="flex gap-4">
        <li><Link className={links('/')} href="/">Home</Link></li>
        <li><Link className={links('/Digi/products')} href="/Digi/products">Products</Link></li>
        <li><Link className={links('/Digi/cart')} href="/Digi/cart">Cart</Link></li>
        <li><Link className={links('/Digi/admin')} href="/Digi/admin">Admin</Link></li>
      </ul>
    </nav>
  )
}