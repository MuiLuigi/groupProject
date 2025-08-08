'use client'
import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import Link from 'next/link'

export default function ProductsPage() {
  const [cart, setCart] = useState<string[]>([])

  const handleAddToCart = (item: string) => {
    setCart([...cart, item])
  }

  let cartItems
  if (cart.length === 0) {
    cartItems  = <p>The cart is empty</p>
  }
  else {
    cartItems = (
      <ul className='list-disc pl-5'>
        {cart.map((items, index) => (
          <li key={index}>{items}</li>
        ))}
      </ul>
    )
  }

  return (
    <>
    <h1 className='text-3xl font-bold mb-4'>Products</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Link href='/Digi/products/ebooks'>
      <ProductCard title="Ebook: Learn Next.js" price={19.99} onAdd={() => handleAddToCart("Ebook")} />
      </Link>

      <Link href='/Digi/products/ui-kits'>
      <ProductCard title="UI Kit Template" price={29.99} onAdd={() => handleAddToCart("UI Kit")} />
      </Link>

      <Link href='/Digi/products/music'>
      <ProductCard title="Music Pack Vol. 1" price={9.99} onAdd={() => handleAddToCart("Music Pack")} />
      </Link>
    </div>

    <div className='mt-6 p-4 bg-blue-400 rounded-lg shadow'>
      <h2 className='text-xl font-semibold'>Cart</h2>
      {cartItems}
    </div>
    </>
  )
}