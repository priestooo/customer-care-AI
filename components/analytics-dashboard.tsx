"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart3,
  TrendingUp,
  Users,
  MessageSquare,
  Clock,
  Star,
  Download,
  Filter,
  ArrowUp,
  ArrowDown,
} from "lucide-react"

export function AnalyticsDashboard() {
  const performanceMetrics = [
    {
      title: "Total Conversations",
      value: "12,847",
      change: "+12.5%",
      trend: "up",
      period: "vs last month",
    },
    {
      title: "Average Response Time",
      value: "1.2m",
      change: "-8.3%",
      trend: "down",
      period: "vs last month",
    },
    {
      title: "Resolution Rate",
      value: "98.5%",
      change: "+2.1%",
      trend: "up",
      period: "vs last month",
    },
    {
      title: "Customer Satisfaction",
      value: "4.8/5",
      change: "+0.2",
      trend: "up",
      period: "vs last month",
    },
  ]

  const categoryBreakdown = [
    { category: "Billing Issues", count: 3247, percentage: 35, trend: "+5%" },
    { category: "Technical Support", count: 2891, percentage: 31, trend: "-2%" },
    { category: "Account Management", count: 1823, percentage: 20, trend: "+8%" },
    { category: "General Inquiries", count: 1286, percentage: 14, trend: "+1%" },
  ]

  const agentPerformance = [
    {
      name: "AI Assistant",
      conversations: 8947,
      avgResponse: "1.2s",
      satisfaction: 4.8,
      resolutionRate: 94,
      efficiency: 98,
    },
    {
      name: "Lisa Martinez",
      conversations: 1247,
      avgResponse: "45s",
      satisfaction: 4.9,
      resolutionRate: 98,
      efficiency: 92,
    },
    {
      name: "David Kim",
      conversations: 1089,
      avgResponse: "32s",
      satisfaction: 4.7,
      resolutionRate: 96,
      efficiency: 89,
    },
    {
      name: "Sarah Wilson",
      conversations: 987,
      avgResponse: "1m 15s",
      satisfaction: 4.6,
      resolutionRate: 92,
      efficiency: 85,
    },
  ]

  const timeData = [
    { time: "00:00", conversations: 45 },
    { time: "04:00", conversations: 23 },
    { time: "08:00", conversations: 189 },
    { time: "12:00", conversations: 267 },
    { time: "16:00", conversations: 234 },
    { time: "20:00", conversations: 156 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold gradient-text">Analytics & Reporting</h1>
          <p className="text-muted-foreground">Comprehensive insights into customer support performance</p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="1year">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceMetrics.map((metric, index) => (
          <Card key={index} className="glass-effect">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">{metric.title}</p>
                {metric.trend === "up" ? (
                  <ArrowUp className="w-4 h-4 text-primary" />
                ) : (
                  <ArrowDown className="w-4 h-4 text-primary" />
                )}
              </div>
              <p className="text-2xl font-bold mb-1">{metric.value}</p>
              <div className="flex items-center gap-2">
                <Badge variant={metric.trend === "up" ? "default" : "secondary"} className="text-xs">
                  {metric.change}
                </Badge>
                <span className="text-xs text-muted-foreground">{metric.period}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Daily Conversation Volume
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-end justify-between gap-2 p-4">
                  {timeData.map((data, index) => (
                    <div key={index} className="flex flex-col items-center gap-2">
                      <div
                        className="w-8 bg-primary rounded-t-sm"
                        style={{ height: `${(data.conversations / 300) * 200}px` }}
                      ></div>
                      <div className="text-center">
                        <p className="text-xs font-medium">{data.conversations}</p>
                        <p className="text-xs text-muted-foreground">{data.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  Satisfaction Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center gap-4">
                      <div className="flex items-center gap-1 w-12">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{rating}</span>
                      </div>
                      <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{
                            width: `${rating === 5 ? 65 : rating === 4 ? 25 : rating === 3 ? 7 : rating === 2 ? 2 : 1}%`,
                          }}
                        ></div>
                      </div>
                      <span className="text-sm text-muted-foreground w-12">
                        {rating === 5 ? "65%" : rating === 4 ? "25%" : rating === 3 ? "7%" : rating === 2 ? "2%" : "1%"}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Agent Performance Comparison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {agentPerformance.map((agent, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                          {agent.name === "AI Assistant" ? (
                            <MessageSquare className="w-4 h-4" />
                          ) : (
                            <span className="text-sm font-medium">
                              {agent.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{agent.name}</p>
                          <p className="text-sm text-muted-foreground">{agent.conversations} conversations handled</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {agent.efficiency}% efficiency
                      </Badge>
                    </div>

                    <div className="grid grid-cols-4 gap-4 text-center">
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
                      <div>
                        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full"
                            style={{ width: `${agent.efficiency}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Efficiency</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categories" className="space-y-6">
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-primary" />
                Issue Category Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {categoryBreakdown.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{category.category}</h3>
                        <Badge variant="outline" className="text-xs">
                          {category.trend}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{category.count.toLocaleString()}</p>
                        <p className="text-sm text-muted-foreground">{category.percentage}%</p>
                      </div>
                    </div>
                    <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${category.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Response Time Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <Clock className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">Response time trending down 8.3%</p>
                    <p className="text-xs">Average: 1.2 minutes</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Resolution Rate Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">Resolution rate improving +2.1%</p>
                    <p className="text-xs">Current: 98.5%</p>
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
