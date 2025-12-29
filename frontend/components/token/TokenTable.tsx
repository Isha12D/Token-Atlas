"use client"

// frontend/components/token/TokenTable.tsx
import { useState, useCallback } from "react";
import { TokenModal } from "./TokenModal";
import { Token } from "@/lib/types";
import { Table, TableBody } from "@/components/ui/table";
import { TokenHeader } from "./TokenHeader";
import { TokenRow } from "./TokenRow";
import { useTokenSocket } from "@/hooks/useTokenSocket";

type SortKey = "price" | "volume" | null;
type SortOrder = "asc" | "desc";

export function TokenTable() {
  const tokens = useTokenSocket(); // 🚀 Real backend tokens
  const [sortKey, setSortKey] = useState<SortKey>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);

  const handleSort = useCallback(
    (key: "price" | "volume") => {
      if (sortKey === key) setSortOrder(sortOrder === "asc" ? "desc" : "asc");
      else {
        setSortKey(key);
        setSortOrder("asc");
      }
    },
    [sortKey, sortOrder]
  );

  const sortedTokens = [...tokens].sort((a, b) => {
    if (!sortKey) return 0;
    return sortOrder === "asc" ? a[sortKey] - b[sortKey] : b[sortKey] - a[sortKey];
  });

  if (!tokens.length) return <div className="p-4 text-gray-400">Loading tokens...</div>;

  return (
    <div className="rounded-2xl bg-transparent overflow-x-auto">
      <Table>
        <TokenHeader onSort={handleSort} />
        <TableBody>
          {sortedTokens.map((token) => (
            <TokenRow key={token.id} token={token} onClick={() => setSelectedToken(token)} />
          ))}
        </TableBody>
      </Table>
      <TokenModal token={selectedToken} onClose={() => setSelectedToken(null)} />
    </div>
  );
}
