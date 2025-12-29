"use client"

import { useState, useEffect } from "react"
import { mockTokens, simulatePriceUpdate } from "@/lib/mockTokens"
import { Token } from "@/lib/types"
import { Table, TableBody } from "@/components/ui/table"
import { TokenHeader } from "./TokenHeader"
import { TokenRow } from "./TokenRow"
import { TokenModal } from "./TokenModal"

type SortKey = "price" | "volume" | null
type SortOrder = "asc" | "desc"

export function TokenTable() {
  const [tokens, setTokens] = useState(mockTokens)
  const [sortKey, setSortKey] = useState<SortKey>(null)
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc")
  const [selectedToken, setSelectedToken] = useState<Token | null>(null)
  const [loading, setLoading] = useState(true)

//   const sortedTokens = [...mockTokens].sort((a, b) => {
//     if (!sortKey) return 0

//     const value =
//       sortOrder === "asc"
//         ? a[sortKey] - b[sortKey]
//         : b[sortKey] - a[sortKey]

//     return value
//   })

  function handleSort(key: "price" | "volume") {
    if (sortKey === key) {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
        setSortKey(key)
        setSortOrder("asc")
    }
   }

   useEffect(() => {
        setLoading(false) // data loaded
        simulatePriceUpdate(tokens, setTokens)
    }, [])

    const sortedTokens = [...tokens].sort((a, b) => {
        if (!sortKey) return 0
        return sortOrder === "asc" ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey]
    })

    if (loading) {
        return (
            <div className="space-y-2 p-4">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="h-8 bg-muted rounded animate-pulse" />
            ))}
            </div>
        )
    }


  return (
    <div className="rounded-xl border bg-card">
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
        <TokenModal
            token={selectedToken}
            onClose={() => setSelectedToken(null)}
            />
      </Table>
    </div>
  )
}
