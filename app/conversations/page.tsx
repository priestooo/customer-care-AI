import { ConversationManager } from "@/components/conversation-manager"
import { AdminHeader } from "@/components/admin-header"

export default function ConversationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <AdminHeader />
      <main className="container mx-auto px-4 py-8">
        <ConversationManager />
      </main>
    </div>
  )
}
