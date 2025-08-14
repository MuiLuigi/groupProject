export type Product = { id: string; title: string; price: number }

export async function fetchProduct(): Promise<Product[]> {
    await new Promise((r) => setTimeout(r, 600))

    return [
        { id: 'ebooks', title: 'Ebook: Learn Next.js', price: 19.99},
        { id: 'ui-kits', title: 'UI Kit Template', price: 29.99},
        { id: 'music', title: 'Music Pack Vol. 1', price: 9.99}
    ]
}

export async function fetchProductById(id: string): Promise<Product | null> {
    await new Promise((r) => setTimeout(r, 300))
    return [
        { id: 'ebooks', title: 'Ebook: Learn Next.js', price: 19.99},
        { id: 'ui-kits', title: 'UI Kit Template', price: 29.99},
        { id: 'music', title: 'Music Pack Vol. 1', price: 9.99}
    ].find((x) => x.id === id) ?? null
}