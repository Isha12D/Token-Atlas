import { Token } from "./types"

export const mockTokens: Token[] = [
  {
    id: "1",
    name: "Bitcoin",
    symbol: "BTC",
    price: 42123.45,
    priceChange: 2.34,
    volume: 120000000,
    marketCap: 800000000,
    status: "new",
  },
  {
    id: "2",
    name: "Ethereum",
    symbol: "ETH",
    price: 2245.67,
    priceChange: -1.12,
    volume: 98000000,
    marketCap: 400000000,
    status: "final",
  },
  {
    id: "3",
    name: "Solana",
    symbol: "SOL",
    price: 98.12,
    priceChange: 4.56,
    volume: 56000000,
    marketCap: 120000000,
    status: "migrated",
  },
]
