'use client'
import { useCart } from '../Context/Cart'

export default function CartPage() {
  const { items, remove, clear, total } = useCart()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>

      {items.length === 0 ? (
        <p>The cart is empty</p>
      ) : (
        <>
          <ul className="space-y-3">
            {items.map(x => (
              <li key={x.id} className="flex justify-between items-center border p-3 rounded">
                <div>
                  <div className="font-semibold">{x.title}</div>
                  <div className="text-sm">Qty: {x.qty}</div>
                </div>
                <div className="flex items-center gap-4">
                  <div>${(x.price * x.qty).toFixed(2)}</div>
                  <button onClick={() => remove(x.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex justify-between items-center">
            <div className="text-xl font-semibold">Total: ${total.toFixed(2)}</div>
            <button onClick={clear} className="bg-blue-200 px-4 py-2 rounded hover:bg-blue-300">
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  )
}