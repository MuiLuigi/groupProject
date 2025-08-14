'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { fetchProductById, type Product } from '@/app/Digi API Component/digiAPI'
import { useCart } from '../../Context/Cart'

export default function ProductDetails() {
  const { id } = useParams() as { id: string }
  const [product, setProduct] = useState<Product | null>(null)
  const { add } = useCart()

  useEffect(() => {
    if (id) fetchProductById(id).then(setProduct)
  }, [id])

  if (!product) {
    return <div className="p-6">Loading…</div>
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Details</h1>
      <p className="text-lg">
        Here are the details for the product:{' '}
        <span className="font-semibold">{product.id}</span>
      </p>
      <p className="mt-2 text-lg">{product.title}</p>
      <p className="mt-1 text-gray-700">${product.price.toFixed(2)}</p>

      <p className="mt-4">
        The info for the products is now loaded using the API. This is for Phase 3,
        this page is powered by a placeholder API.
      </p>

      <button
        onClick={() => add(product)}
        className="mt-4 bg-teal-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  )
}