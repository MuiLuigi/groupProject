'use client'
import { useState } from 'react'
import ProductCard from '../components/ProductCard'

export default function ProductsPage() {
  const [cart, setCart] = useState<string[]>([])

  const handleAddToCart = (item: string) => {
    setCart([...cart, item])
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProductCard title="Ebook: Learn Next.js" price={19.99} onAdd={() => handleAddToCart("Ebook")} />
      <ProductCard title="UI Kit Template" price={29.99} onAdd={() => handleAddToCart("UI Kit")} />
      <ProductCard title="Music Pack Vol. 1" price={9.99} onAdd={() => handleAddToCart("Music Pack")} />
    </div>
  )
}
