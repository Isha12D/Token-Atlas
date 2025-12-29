import { TokenTable } from "@/components/token/TokenTable"

export default function Home() {
  return (
    <main className="min-h-screen bg-dashboard flex items-start">
      <div className="w-full max-w-6xl px-8 pt-16">

        {/* Heading */}
        <h1 className="text-3xl font-semibold text-white">
          Token Atlas
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Real-time token discovery & market signals
        </p>

        {/* Table */}
        <div className="mt-6 rounded-2xl bg-slate-900/80 backdrop-blur-xl
                        shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
          <TokenTable />
        </div>

      </div>
    </main>
  )
}
