"use client"

import { useState } from "react"
import { mockTokens } from "@/lib/mockTokens"
import { Token } from "@/lib/types"
import { Table, TableBody } from "@/components/ui/table"
import { TokenHeader } from "./TokenHeader"
import { TokenRow } from "./TokenRow"
import { TokenModal } from "./TokenModal"

type SortKey = "price" | "volume" | null
type SortOrder = "asc" | "desc"

export function TokenTable() {
  const [sortKey, setSortKey] = useState<SortKey>(null)
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc")
  const [selectedToken, setSelectedToken] = useState<Token | null>(null)

  const sortedTokens = [...mockTokens].sort((a, b) => {
    if (!sortKey) return 0

    const value =
      sortOrder === "asc"
        ? a[sortKey] - b[sortKey]
        : b[sortKey] - a[sortKey]

    return value
  })

  function handleSort(key: "price" | "volume") {
    if (sortKey === key) {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
        setSortKey(key)
        setSortOrder("asc")
    }
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
