'use client'
import { useParams } from "next/navigation"

export default function ProductDetails() {
    const { id } = useParams()

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Product Details</h1>
            <p className="text-lg">Here are the details for the product: <span className="font-semibold">{id}</span></p>
            <p>We will have the info for the products loaded using API in phase 3 of this project</p>
        </div>
    )
}