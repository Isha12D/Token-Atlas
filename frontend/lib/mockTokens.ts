import { Token } from "./types"

export const mockTokens: Token[] = [
  {
    id: "1",
    name: "Bitcoin",
    symbol: "BTC",
    price: 30000,
    priceChange: 1.2,
    volume: 1200000,
    marketCap: 600000000,
    status: "new", 
  },
  {
    id: "2",
    name: "Ethereum",
    symbol: "ETH",
    price: 2000,
    priceChange: -0.5,
    volume: 800000,
    marketCap: 200000000,
    status: "final",
  },
  {
    id: "3",
    name: "Solana",
    symbol: "SOL",
    price: 25,
    priceChange: 2.3,
    volume: 500000,
    marketCap: 12000000,
    status: "migrated",
  },
]


export function simulatePriceUpdate(tokens: Token[], callback: (updatedTokens: Token[]) => void) {
  setInterval(() => {
    const updatedTokens = tokens.map((token) => {
      // random price change -2% to +2%
      const changePercent = (Math.random() * 4 - 2)
      const newPrice = +(token.price * (1 + changePercent / 100)).toFixed(2)
      const newChange = +(changePercent).toFixed(2)
      return { ...token, price: newPrice, priceChange: newChange }
    })
    callback(updatedTokens)
  }, 2000) // update every 2 seconds
}
