import {
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table"

export type TokenHeaderProps = {
  onSort: (key: "price" | "volume") => void
}

export function TokenHeader({ onSort }: TokenHeaderProps) {
  return (
    <TableHeader>
      <TableRow>
        <TableHead>Token</TableHead>

        <TableHead
          onClick={() => onSort("price")}
          className="cursor-pointer hover:text-primary"
        >
          Price
        </TableHead>

        <TableHead>24h Change</TableHead>

        <TableHead
          onClick={() => onSort("volume")}
          className="cursor-pointer hover:text-primary"
        >
          Volume
        </TableHead>

        <TableHead>Market Cap</TableHead>
      </TableRow>
    </TableHeader>
  )
}
