import { CustomerChatInterface } from "@/components/customer-chat-interface"
import { Header } from "@/components/header"
import { StatsOverview } from "@/components/stats-overview"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CustomerChatInterface />
          </div>
          <div className="space-y-6">
            <StatsOverview />
          </div>
        </div>
      </main>
    </div>
  )
}
