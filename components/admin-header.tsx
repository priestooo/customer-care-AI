import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Bell, Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"

export function AdminHeader() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-semibold gradient-text">CareAI Admin</h1>
            </div>
            <Badge variant="outline" className="text-xs gap-1">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              Live Dashboard
            </Badge>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search conversations, agents..." className="pl-10 w-64" />
            </div>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-4 h-4" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full flex items-center justify-center">
                <span className="text-xs text-destructive-foreground">3</span>
              </div>
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Admin Mode</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
