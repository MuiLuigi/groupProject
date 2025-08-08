'use client'
import { useState } from 'react'

export default function CartPage() {
  const [cart, setCart] = useState<string[]>([])

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
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <p>Here are the items in your cart:</p>
      {cartItems}
    </>
  )
}