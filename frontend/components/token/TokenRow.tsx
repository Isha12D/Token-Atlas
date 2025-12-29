// src/components/token/TokenRow.tsx
import { memo, ComponentPropsWithoutRef } from "react"
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

const isMobile = typeof window !== "undefined" && window.innerWidth<640

export const TokenRow = memo(function TokenRow({
  token,
  onClick,
  ...rest
}: Props) {
  const isPositive = token.priceChange >= 0

  return (
    
    <TableRow
      onClick={onClick}
      className="h-12 cursor-pointer transition-colors text-gray-300 border-gray-600 hover:bg-white/5"
      {...rest}
    >
      {/* Token */}
      <TableCell className="px-4 font-medium">
        {isMobile ? (
          <div>
            {token.name}
            <span className="ml-2 text-xs text-slate-400">{token.symbol}</span>
          </div>
        ) : (
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                {token.name}
                <span className="ml-2 text-xs text-slate-400">{token.symbol}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>Click to view token details</TooltipContent>
          </Tooltip>
        )}
      </TableCell>

      {/* Price */}
      <TableCell className="px-4 text-sm transition-colors duration-500">
        ${token.price.toFixed(2)}
      </TableCell>

      {/* 24h Change */}
      <TableCell
        className={cn(
          "px-4 text-sm transition-colors duration-500",
          isPositive ? "text-green-500" : "text-red-500"
        )}
      >
        {isPositive ? "+" : ""}
        {token.priceChange}%
      </TableCell>

      {/* Volume (hide on small screens) */}
      <TableCell className="hidden md:table-cell px-4 text-sm">
        ${token.volume.toLocaleString()}
      </TableCell>

      {/* Market Cap (hide on small screens) */}
      <TableCell className="hidden lg:table-cell px-4 text-sm">
        ${token.marketCap.toLocaleString()}
      </TableCell>

      {/* Actions */}
      <TableCell className="px-4">
        <Popover>
          <PopoverTrigger className="text-xs underline text-gray-300">
            Actions
          </PopoverTrigger>
          <PopoverContent className="w-28">
            <div className="flex flex-col gap-2 text-sm">
              <button>View</button>
              <button>Trade</button>
            </div>
          </PopoverContent>
        </Popover>
      </TableCell>
    </TableRow>
  )
})
