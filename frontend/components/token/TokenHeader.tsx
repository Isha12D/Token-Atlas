import { TableHeader, TableRow, TableHead } from "@/components/ui/table"

export type TokenHeaderProps = {
  onSort: (key: "price" | "volume") => void
}

export function TokenHeader({ onSort }: TokenHeaderProps) {
  return (
    <TableHeader>
      <TableRow className="h-12">
        <TableHead className="px-4">Token</TableHead>

        <TableHead
          onClick={() => onSort("price")}
          className="px-4 cursor-pointer hover:text-primary"
        >
          Price
        </TableHead>

        <TableHead className="px-4">24h</TableHead>

        <TableHead
          onClick={() => onSort("volume")}
          className="hidden md:table-cell px-4 cursor-pointer hover:text-primary"
        >
          Volume
        </TableHead>

        <TableHead className="hidden lg:table-cell px-4">
          Market Cap
        </TableHead>

        <TableHead className="px-4">Actions</TableHead>
      </TableRow>
    </TableHeader>
  )
}
