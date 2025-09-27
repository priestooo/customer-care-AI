"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MessageSquare,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  Bot,
  User,
  MoreHorizontal,
  Eye,
  UserCheck,
  Activity,
  BarChart3,
} from "lucide-react"

export function AdminDashboard() {
  const activeConversations = [
    {
      id: "1",
      customer: "Sarah Johnson",
      agent: "AI Assistant",
      status: "active",
      priority: "high",
      lastMessage: "I need help with my billing issue",
      duration: "5m 23s",
      satisfaction: null,
    },
    {
      id: "2",
      customer: "Mike Chen",
      agent: "Human Agent (Lisa)",
      status: "transferred",
      priority: "medium",
      lastMessage: "Thank you for the quick resolution",
      duration: "12m 45s",
      satisfaction: 5,
    },
    {
      id: "3",
      customer: "Emma Davis",
      agent: "AI Assistant",
      status: "active",
      priority: "low",
      lastMessage: "How do I reset my password?",
      duration: "2m 10s",
      satisfaction: null,
    },
    {
      id: "4",
      customer: "John Smith",
      agent: "AI Assistant",
      status: "resolved",
      priority: "medium",
      lastMessage: "Perfect, that solved my problem!",
      duration: "8m 32s",
      satisfaction: 4,
    },
  ]

  const agentStats = [
    {
      name: "AI Assistant",
      status: "online",
      activeChats: 15,
      avgResponse: "1.2s",
      satisfaction: 4.8,
      resolutionRate: 94,
    },
    {
      name: "Lisa Martinez",
      status: "online",
      activeChats: 3,
      avgResponse: "45s",
      satisfaction: 4.9,
      resolutionRate: 98,
    },
    {
      name: "David Kim",
      status: "online",
      activeChats: 2,
      avgResponse: "32s",
      satisfaction: 4.7,
      resolutionRate: 96,
    },
    {
      name: "Sarah Wilson",
      status: "away",
      activeChats: 0,
      avgResponse: "1m 15s",
      satisfaction: 4.6,
      resolutionRate: 92,
    },
  ]

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass-effect">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Chats</p>
                <p className="text-2xl font-bold">247</p>
                <p className="text-xs text-primary">+12% from yesterday</p>
              </div>
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Response</p>
                <p className="text-2xl font-bold">1.2m</p>
                <p className="text-xs text-primary">-8% improvement</p>
              </div>
              <Clock className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Resolution Rate</p>
                <p className="text-2xl font-bold">98.5%</p>
                <p className="text-xs text-primary">+2.1% this week</p>
              </div>
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
                <p className="text-2xl font-bold">4.8/5</p>
                <p className="text-xs text-primary">+0.2 this month</p>
              </div>
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="conversations" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="conversations">Live Conversations</TabsTrigger>
          <TabsTrigger value="agents">Agent Performance</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="conversations" className="space-y-6">
          <Card className="glass-effect">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" />
                  Active Conversations
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">247 Active</Badge>
                  <Button size="sm">View All</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px]">
                <div className="space-y-4">
                  {activeConversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                            <User className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="font-medium">{conversation.customer}</p>
                            <p className="text-sm text-muted-foreground">{conversation.lastMessage}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            {conversation.agent.includes("AI") ? (
                              <Bot className="w-4 h-4 text-primary" />
                            ) : (
                              <UserCheck className="w-4 h-4 text-primary" />
                            )}
                            <span className="text-sm">{conversation.agent}</span>
                          </div>
                          <p className="text-xs text-muted-foreground">{conversation.duration}</p>
                        </div>

                        <div className="flex items-center gap-2">
                          <Badge
                            variant={
                              conversation.priority === "high"
                                ? "destructive"
                                : conversation.priority === "medium"
                                  ? "default"
                                  : "secondary"
                            }
                            className="text-xs"
                          >
                            {conversation.priority}
                          </Badge>

                          <Badge
                            variant={
                              conversation.status === "active"
                                ? "default"
                                : conversation.status === "transferred"
                                  ? "secondary"
                                  : "outline"
                            }
                            className="text-xs"
                          >
                            {conversation.status}
                          </Badge>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="agents" className="space-y-6">
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Agent Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {agentStats.map((agent, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                          {agent.name === "AI Assistant" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                        </div>
                        <div>
                          <p className="font-medium">{agent.name}</p>
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                agent.status === "online" ? "bg-primary" : "bg-yellow-500"
                              }`}
                            ></div>
                            <span className="text-sm text-muted-foreground capitalize">{agent.status}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-8 text-center">
                      <div>
                        <p className="text-lg font-semibold">{agent.activeChats}</p>
                        <p className="text-xs text-muted-foreground">Active Chats</p>
                      </div>
                      <div>
                        <p className="text-lg font-semibold">{agent.avgResponse}</p>
                        <p className="text-xs text-muted-foreground">Avg Response</p>
                      </div>
                      <div>
                        <p className="text-lg font-semibold">{agent.satisfaction}/5</p>
                        <p className="text-xs text-muted-foreground">Satisfaction</p>
                      </div>
                      <div>
                        <p className="text-lg font-semibold">{agent.resolutionRate}%</p>
                        <p className="text-xs text-muted-foreground">Resolution</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle>Daily Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <BarChart3 className="w-12 h-12 mx-auto mb-4" />
                    <p>Analytics charts would be rendered here</p>
                    <p className="text-sm">Integration with charting library needed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardHeader>
                <CardTitle>Issue Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Billing Issues</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="w-[65%] h-full bg-primary rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Technical Support</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="w-[45%] h-full bg-primary rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">45%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Account Issues</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="w-[30%] h-full bg-primary rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">30%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">General Questions</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="w-[20%] h-full bg-primary rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium">20%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
