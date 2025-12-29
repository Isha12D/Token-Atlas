export type Token = {
    id: string
    name: string
    symbol: string
    price: number
    priceChange: number
    volume: number
    marketCap: number
    status: "new" | "final" | "migrated"
}