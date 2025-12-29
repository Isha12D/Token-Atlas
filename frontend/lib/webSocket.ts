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
    status: "new", // add status
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
  {
    id: "avax",
    name: "Avalanche",
    symbol: "AVAX",
    price: 37.42,
    priceChange: 1.84,
    volume: 1_920_000_000,
    marketCap: 14_800_000_000,
    status: "final",
  },
  {
    id: "link",
    name: "Chainlink",
    symbol: "LINK",
    price: 15.67,
    priceChange: -0.92,
    volume: 890_000_000,
    marketCap: 9_200_000_000,
    status: "migrated",
  },
  {
    id: "uni",
    name: "Uniswap",
    symbol: "UNI",
    price: 7.94,
    priceChange: 2.31,
    volume: 640_000_000,
    marketCap: 4_700_000_000,
    status: "new",
  },
]

export function connectTokenWebSocket(
  initialTokens: Token[],
  onUpdate: (tokens: Token[]) => void
) {
  let tokens = [...initialTokens]

  const interval = setInterval(() => {
    if (document.hidden) return
    tokens = tokens.map((token) => {
      const delta = (Math.random() - 0.5) * 2
      const newPrice = +(token.price + delta).toFixed(2)

      return {
        ...token,
        price: Math.max(newPrice, 0.01),
        priceChange: +(((newPrice - token.price) / token.price) * 100).toFixed(2),
      }
    })

    onUpdate(tokens)
  }, 3000)

  return () => clearInterval(interval)
}
