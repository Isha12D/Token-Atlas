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
      <DialogContent className="bg-slate-900 text-slate-100
             shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
        <DialogHeader>
          <DialogTitle className="text-gray-300 text-2xl">{token.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-2 text-sm text-gray-400">
          <p>Symbol: {token.symbol}</p>
          <p>Price: ${token.price}</p>
          <p>Volume: ${token.volume.toLocaleString()}</p>
          <p>Market Cap: ${token.marketCap.toLocaleString()}</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
