"use client"

import { useEffect, useState, useCallback } from "react"
import { mockTokens, simulatePriceUpdate } from "@/lib/mockTokens"
import { TokenModal } from "./TokenModal"
import { Token } from "@/lib/types"
import { Table, TableBody } from "@/components/ui/table"
import { TokenHeader } from "./TokenHeader"
import { TokenRow } from "./TokenRow"

type SortKey = "price" | "volume" | null
type SortOrder = "asc" | "desc"

export function TokenTable() {
  const [tokens, setTokens] = useState<Token[]>([])
  const [sortKey, setSortKey] = useState<SortKey>(null)
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc")
  const [selectedToken, setSelectedToken] = useState<Token | null>(null)
  const [loading, setLoading] = useState(true)

  // Simulate initial load + websocket updates
  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setTokens(mockTokens)
      setLoading(false)
      simulatePriceUpdate(mockTokens, setTokens)
    }, 1000)

    return () => clearTimeout(loadTimer)
  }, [])

  const handleSort = useCallback(
    (key: "price" | "volume") => {
      if (sortKey === key) {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc")
      } else {
        setSortKey(key)
        setSortOrder("asc")
      }
    },
    [sortKey, sortOrder]
  )

  const sortedTokens = [...tokens].sort((a, b) => {
    if (!sortKey) return 0
    return sortOrder === "asc"
      ? a[sortKey] - b[sortKey]
      : b[sortKey] - a[sortKey]
  })

  // ✅ Skeleton shimmer
  if (loading) {
    return (
      <div className="space-y-2 p-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-12 w-full rounded bg-muted animate-pulse"
          />
        ))}
      </div>
    )
  }

  return (
    <div className="rounded-xl border bg-card overflow-x-auto">
      <Table>
        <TokenHeader onSort={handleSort} />
        <TableBody>
          {sortedTokens.map((token) => (
            <TokenRow
              key={token.id}
              token={token}
              onClick={() => setSelectedToken(token)}
            />
          ))}
        </TableBody>
      </Table>

      <TokenModal
        token={selectedToken}
        onClose={() => setSelectedToken(null)}
      />
    </div>
  )
}
