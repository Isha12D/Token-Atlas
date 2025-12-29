import { memo } from "react"
import { TableHeader, TableRow, TableHead } from "@/components/ui/table"

export type TokenHeaderProps = {
  onSort: (key: "price" | "volume") => void
}

export const TokenHeader = memo(function TokenHeader({ onSort }: TokenHeaderProps) {
  return (
    <TableHeader>
      <TableRow className="h-12 text-lg hover:bg-gray-600">
        <TableHead className="px-4 text-gray-300">Token</TableHead>

        <TableHead
          onClick={() => onSort("price")}
          className="px-4 cursor-pointer hover:text-white transition-colors text-gray-300"
        >
          Price
        </TableHead>

        <TableHead className="px-4 text-gray-300">24h</TableHead>

        <TableHead
          onClick={() => onSort("volume")}
          className="hidden md:table-cell px-4 cursor-pointer text-gray-300 hover:text-white transition-colors"
        >
          Volume
        </TableHead>

        <TableHead className="hidden lg:table-cell px-4 text-gray-300">
          Market Cap
        </TableHead>

        <TableHead className="px-4 text-gray-300">Actions</TableHead>
      </TableRow>
    </TableHeader>
  )
})
