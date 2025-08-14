'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import ProductCard from '../components/ProductCard'
import { fetchProduct, type Product } from '@/app/Digi API Component/digiAPI'
import { useCart } from '../Context/Cart'

export default function ProductsPage() {
  // Local mini-list just to mimic your sample "cart preview" on this page
  const [preview, setPreview] = useState<string[]>([])
  // Real products from the placeholder API
  const [products, setProducts] = useState<Product[]>([])
  // Shared cart (persists via Context + localStorage)
  const { add } = useCart()

  useEffect(() => {
    fetchProduct().then(setProducts)
  }, [])

  const handleAddToCart = (p: Product) => {
    add(p)                                // add to the real cart
    setPreview((prev) => [...prev, p.title]) // keeps the simple preview list
  }

  const cartItems =
    preview.length === 0 ? (
      <p>The cart is empty</p>
    ) : (
      <ul className="list-disc pl-5">
        {preview.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    )

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="space-y-2">
            <ProductCard title={p.title} price={p.price} onAdd={() => handleAddToCart(p)} />
            <Link href={`/Digi/products/${encodeURIComponent(String(p.id))}`} className="text-sm underline">
              View details
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-400 rounded-lg shadow">
        <h2 className="text-xl font-semibold">Cart</h2>
        {cartItems}
      </div>
    </>
  )
}