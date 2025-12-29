// src/components/token/TokenRow.tsx
import { ComponentPropsWithoutRef } from "react"
import { Token } from "@/lib/types"
import { TableRow, TableCell } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

// Extend <tr> props so TS knows about onClick
type Props = ComponentPropsWithoutRef<"tr"> & {
  token: Token
  onClick?: () => void
}

export function TokenRow({ token, onClick, ...rest }: Props) {
  const isPositive = token.priceChange >= 0

  return (
    <TableRow
      onClick={onClick}
      className="hover:bg-muted transition-colors cursor-pointer"
      {...rest} // spread any additional props
    >
      {/* Token Name with Tooltip */}
      <TableCell>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="font-medium">
              {token.name}
              <span className="ml-2 text-muted-foreground text-sm">
                {token.symbol}
              </span>
            </div>
          </TooltipTrigger>
          <TooltipContent>Click to view token details</TooltipContent>
        </Tooltip>
      </TableCell>

      {/* Price */}
      <TableCell
        className={cn(
            "transition-colors duration-500",
            isPositive ? "text-green-500" : "text-red-500"
        )}
        >
        {isPositive ? "+" : ""}
        {token.priceChange}%
        </TableCell>

        <TableCell
        className="transition-colors duration-500"
        >
        ${token.price.toFixed(2)}
      </TableCell>


      {/* 24h Change */}
      <TableCell className={cn(isPositive ? "text-green-500" : "text-red-500")}>
        {isPositive ? "+" : ""}
        {token.priceChange}%
      </TableCell>

      {/* Volume */}
      <TableCell>${token.volume.toLocaleString()}</TableCell>

      {/* Market Cap */}
      <TableCell>${token.marketCap.toLocaleString()}</TableCell>

      {/* Popover Actions */}
      <TableCell>
        <Popover>
          <PopoverTrigger className="text-sm text-primary underline">
            Actions
          </PopoverTrigger>
          <PopoverContent className="w-32">
            <div className="flex flex-col gap-2 text-sm">
              <button className="hover:text-primary">View</button>
              <button className="hover:text-primary">Trade</button>
            </div>
          </PopoverContent>
        </Popover>
      </TableCell>
    </TableRow>
  )
}
