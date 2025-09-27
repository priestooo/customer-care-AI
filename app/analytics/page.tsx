import { AnalyticsDashboard } from "@/components/analytics-dashboard"
import { AdminHeader } from "@/components/admin-header"

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-background">
      <AdminHeader />
      <main className="container mx-auto px-4 py-8">
        <AnalyticsDashboard />
      </main>
    </div>
  )
}
