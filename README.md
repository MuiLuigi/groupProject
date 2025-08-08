# DigiMart - Next.js Digital Store

DigiMart is a simple e-commerce web app built with Next.js (App Router), TypeScript, and Tailwind CSS.  
It lists digital products and allows users to add them to a cart.





##  Components

# ProductCard
- Location: `/components/ProductCard.tsx`
- Props:
   `title` (string) – Product name
   `price` (number) – Product price
   `onAdd` (function) – Callback for adding item to cart
- Features:
   Displays product title and price
   "Add to Cart" button



## Routes

 Route    
 /products
 /products/            

 Description                              
 Displays all products in a responsive grid 
 Individual product details   



## State Management

- `useState` Hook is used inside `/app/products/page.tsx`
- State Variables:
- `cart` → Stores an array of product names
- `handleAddToCart` appends the selected product to `cart`
- No external state libraries are used,  simple local state only




## Tech 
- Next.js 
- TypeScript
- Tailwind CSS
