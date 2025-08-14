'use client'
import { useState } from 'react'

export default function AdminPage() {
  const [products, setProducts] = useState([
    { id: 1, title: 'Ebook: Learn Next.js', price: 19.99 },
    { id: 2, title: 'UI Kit Template', price: 29.99 },
    { id: 3, title: 'Music Pack Vol. 1', price: 9.99 }
  ])
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')

  const addProduct = () => {
    if (!title || !price) return
    setProducts([...products, { id: Date.now(), title, price: parseFloat(price) }])
    setTitle('')
    setPrice('')
  }

  const deleteProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id))
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Product Title"
          className="border px-2 py-1 mr-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          className="border px-2 py-1 mr-2"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button
          onClick={addProduct}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Add Product
        </button>
      </div>

      {products.map(product => (
        <div key={product.id} className="flex justify-between items-center border-b py-2">
          <span>{product.title} - ${product.price.toFixed(2)}</span>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded"
            onClick={() => deleteProduct(product.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}