import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Clock, Users, TrendingUp, AlertCircle, BarChart3 } from "lucide-react"

export function StatsOverview() {
  return (
    <div className="space-y-6">
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            Live Metrics
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">98.5%</div>
              <div className="text-xs text-muted-foreground">Resolution Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1.2m</div>
              <div className="text-xs text-muted-foreground">Avg Response</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">Active Chats</span>
              </div>
              <Badge variant="secondary">247</Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">Queue Wait</span>
              </div>
              <Badge variant="secondary">2.3m</Badge>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">Online Agents</span>
              </div>
              <Badge variant="secondary">12/15</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-effect">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Performance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Customer Satisfaction</span>
              <div className="flex items-center gap-2">
                <div className="w-16 h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="w-[92%] h-full bg-primary rounded-full"></div>
                </div>
                <span className="text-sm font-medium">4.6/5</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm">First Contact Resolution</span>
              <div className="flex items-center gap-2">
                <div className="w-16 h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="w-[87%] h-full bg-primary rounded-full"></div>
                </div>
                <span className="text-sm font-medium">87%</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm">AI Accuracy</span>
              <div className="flex items-center gap-2">
                <div className="w-16 h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="w-[95%] h-full bg-primary rounded-full"></div>
                </div>
                <span className="text-sm font-medium">95%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="glass-effect">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-primary" />
            System Status
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">AI Engine</span>
            </div>
            <Badge variant="secondary" className="text-xs">
              Operational
            </Badge>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">Chat Service</span>
            </div>
            <Badge variant="secondary" className="text-xs">
              Operational
            </Badge>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">Knowledge Base</span>
            </div>
            <Badge variant="secondary" className="text-xs">
              Operational
            </Badge>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <span className="text-sm">Analytics</span>
            </div>
            <Badge variant="outline" className="text-xs">
              Maintenance
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
