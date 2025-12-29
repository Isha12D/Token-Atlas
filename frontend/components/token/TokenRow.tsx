import { Token } from "@/lib/types"
import {
  TableRow,
  TableCell,
} from "@/components/ui/table"
import { cn } from "@/lib/utils"

type Props = {
  token: Token
}

export function TokenRow({ token }: Props) {
  const isPositive = token.priceChange >= 0

  return (
    <TableRow className="hover:bg-muted transition-colors cursor-pointer">
      <TableCell>
        <div className="font-medium">
          {token.name}
          <span className="ml-2 text-muted-foreground text-sm">
            {token.symbol}
          </span>
        </div>
      </TableCell>

      <TableCell>${token.price.toFixed(2)}</TableCell>

      <TableCell
        className={cn(
          isPositive ? "text-green-500" : "text-red-500"
        )}
      >
        {isPositive ? "+" : ""}
        {token.priceChange}%
      </TableCell>

      <TableCell>${token.volume.toLocaleString()}</TableCell>
      <TableCell>${token.marketCap.toLocaleString()}</TableCell>
    </TableRow>
  )
}
