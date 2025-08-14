'use client'
import type { Product } from '@/app/Digi API Component/digiAPI'

interface ProductCardProps {
  title: string
  price: number
  onAdd: () => void
}

export default function ProductCard({ title, price, onAdd }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition hover:bg-gray-100 hover:bg-opacity-20">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-700">${price.toFixed(2)}</p>
      <button
        onClick={onAdd}
        className="mt-2 bg-teal-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  )
}