import { TokenTable } from "@/components/token/TokenTable"

export default function Home() {
  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">
        Token Atlas
      </h1>
      <TokenTable />
    </main>
  )
}
