'use client'
import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react'
import type { Product } from '@/app/Digi API Component/digiAPI'

type CartItem = Product & { qty: number }
type CartContextType = {
  items: CartItem[]
  add: (p: Product) => void
  remove: (id: string) => void
  clear: () => void
  count: number
  total: number
}
const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const raw = typeof window !== 'undefined' ? localStorage.getItem('cart') : null
    if (raw) setItems(JSON.parse(raw))
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') localStorage.setItem('cart', JSON.stringify(items))
  }, [items])

  const add = (p: Product) =>
    setItems((prev) => {
      const i = prev.findIndex((x) => x.id === p.id)
      if (i >= 0) {
        const copy = [...prev]
        copy[i] = { ...copy[i], qty: copy[i].qty + 1 }
        return copy
      }
      return [...prev, { ...p, qty: 1 }]
    })

  const remove = (id: string) => setItems((prev) => prev.filter((x) => x.id !== id))
  const clear = () => setItems([])
  const { count, total } = useMemo(
    () => ({
      count: items.reduce((n, x) => n + x.qty, 0),
      total: items.reduce((sum, x) => sum + x.price * x.qty, 0),
    }),
    [items]
  )

  const value = { items, add, remove, clear, count, total }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}