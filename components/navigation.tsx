import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare, BarChart3, Users } from "lucide-react"

export function Navigation() {
  return (
    <nav className="flex items-center gap-4">
      <Link href="/">
        <Button variant="ghost" size="sm" className="gap-2">
          <MessageSquare className="w-4 h-4" />
          Chat
        </Button>
      </Link>
      <Link href="/admin">
        <Button variant="ghost" size="sm" className="gap-2">
          <Users className="w-4 h-4" />
          Admin
        </Button>
      </Link>
      <Link href="/conversations">
        <Button variant="ghost" size="sm" className="gap-2">
          <MessageSquare className="w-4 h-4" />
          Conversations
        </Button>
      </Link>
      <Link href="/analytics">
        <Button variant="ghost" size="sm" className="gap-2">
          <BarChart3 className="w-4 h-4" />
          Analytics
        </Button>
      </Link>
    </nav>
  )
}
