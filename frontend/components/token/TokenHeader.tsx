import {
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table"

export function TokenHeader() {
  return (
    <TableHeader>
      <TableRow>
        <TableHead>Token</TableHead>
        <TableHead>Price</TableHead>
        <TableHead>24h Change</TableHead>
        <TableHead>Volume</TableHead>
        <TableHead>Market Cap</TableHead>
      </TableRow>
    </TableHeader>
  )
}
