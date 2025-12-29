import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Token } from "@/lib/types"

type Props = {
  token: Token | null
  onClose: () => void
}

export function TokenModal({ token, onClose }: Props) {
  if (!token) return null

  return (
    <Dialog open={!!token} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{token.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-2 text-sm">
          <p>Symbol: {token.symbol}</p>
          <p>Price: ${token.price}</p>
          <p>Volume: ${token.volume.toLocaleString()}</p>
          <p>Market Cap: ${token.marketCap.toLocaleString()}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
