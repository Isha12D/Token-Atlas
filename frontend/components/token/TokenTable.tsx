import { mockTokens } from "@/lib/mockTokens"
import {
  Table,
  TableBody,
} from "@/components/ui/table"
import { TokenHeader } from "./TokenHeader"
import { TokenRow } from "./TokenRow"

export function TokenTable() {
  return (
    <div className="rounded-xl border bg-card">
      <Table>
        <TokenHeader />
        <TableBody>
          {mockTokens.map((token) => (
            <TokenRow key={token.id} token={token} />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
