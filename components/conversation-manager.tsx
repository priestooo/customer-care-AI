"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  MessageSquare,
  User,
  Bot,
  Clock,
  Star,
  Search,
  MoreHorizontal,
  Download,
  Archive,
  UserCheck,
  AlertTriangle,
} from "lucide-react"

export function ConversationManager() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null)
  const [filterStatus, setFilterStatus] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const conversations = [
    {
      id: "1",
      customer: {
        name: "Sarah Johnson",
        email: "sarah.j@email.com",
        avatar: "SJ",
      },
      agent: "AI Assistant",
      status: "active",
      priority: "high",
      startTime: "2024-01-15 14:30",
      duration: "5m 23s",
      satisfaction: null,
      category: "billing",
      messages: [
        { role: "user", content: "Hi, I have a question about my recent bill", timestamp: "14:30" },
        {
          role: "assistant",
          content:
            "Hello Sarah! I'd be happy to help you with your billing question. Could you please provide me with your account number or the specific issue you're seeing?",
          timestamp: "14:30",
        },
        { role: "user", content: "I was charged twice for my subscription this month", timestamp: "14:31" },
        {
          role: "assistant",
          content:
            "I understand your concern about the duplicate charge. Let me search our knowledge base for information about billing issues.",
          timestamp: "14:31",
        },
      ],
    },
    {
      id: "2",
      customer: {
        name: "Mike Chen",
        email: "mike.chen@company.com",
        avatar: "MC",
      },
      agent: "Human Agent (Lisa)",
      status: "resolved",
      priority: "medium",
      startTime: "2024-01-15 13:15",
      duration: "12m 45s",
      satisfaction: 5,
      category: "technical",
      messages: [
        { role: "user", content: "I'm having trouble logging into my account", timestamp: "13:15" },
        {
          role: "assistant",
          content: "I'm sorry to hear you're having login issues. Let me help you troubleshoot this.",
          timestamp: "13:15",
        },
        {
          role: "user",
          content: "I keep getting an error message saying my password is incorrect",
          timestamp: "13:16",
        },
        {
          role: "assistant",
          content: "Let me transfer you to a human agent who can help reset your password securely.",
          timestamp: "13:17",
        },
        {
          role: "agent",
          content:
            "Hi Mike, this is Lisa. I can help you with your password reset. I've sent a secure reset link to your email.",
          timestamp: "13:18",
        },
        {
          role: "user",
          content: "Perfect! I received the email and was able to reset my password. Thank you so much!",
          timestamp: "13:25",
        },
      ],
    },
    {
      id: "3",
      customer: {
        name: "Emma Davis",
        email: "emma.davis@startup.io",
        avatar: "ED",
      },
      agent: "AI Assistant",
      status: "active",
      priority: "low",
      startTime: "2024-01-15 14:45",
      duration: "2m 10s",
      satisfaction: null,
      category: "account",
      messages: [
        { role: "user", content: "How do I update my profile information?", timestamp: "14:45" },
        {
          role: "assistant",
          content:
            'I can help you update your profile information. You can access your profile settings by clicking on your avatar in the top right corner, then selecting "Profile Settings".',
          timestamp: "14:45",
        },
        { role: "user", content: "Great, I found it. Thank you!", timestamp: "14:46" },
      ],
    },
  ]

  const filteredConversations = conversations.filter((conv) => {
    const matchesStatus = filterStatus === "all" || conv.status === filterStatus
    const matchesSearch =
      searchQuery === "" ||
      conv.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesStatus && matchesSearch
  })

  const selectedConv = conversations.find((c) => c.id === selectedConversation)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold gradient-text">Conversation Management</h1>
          <p className="text-muted-foreground">Monitor and manage all customer conversations</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <Archive className="w-4 h-4 mr-2" />
            Archive
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Conversation List */}
        <div className="lg:col-span-1">
          <Card className="glass-effect h-[700px] flex flex-col">
            <CardHeader className="border-b border-border">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Conversations</CardTitle>
                <Badge variant="secondary">{filteredConversations.length}</Badge>
              </div>

              <div className="space-y-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Conversations</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                    <SelectItem value="transferred">Transferred</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>

            <CardContent className="flex-1 p-0">
              <ScrollArea className="h-full">
                <div className="p-4 space-y-3">
                  {filteredConversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      onClick={() => setSelectedConversation(conversation.id)}
                      className={`p-3 border border-border rounded-lg cursor-pointer transition-colors hover:bg-muted/50 ${
                        selectedConversation === conversation.id ? "bg-muted border-primary" : ""
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-medium">
                            {conversation.customer.avatar}
                          </div>
                          <div>
                            <p className="font-medium text-sm">{conversation.customer.name}</p>
                            <p className="text-xs text-muted-foreground">{conversation.customer.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
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
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          {conversation.agent.includes("AI") ? (
                            <Bot className="w-3 h-3" />
                          ) : (
                            <UserCheck className="w-3 h-3" />
                          )}
                          <span>{conversation.agent}</span>
                        </div>
                        <span>{conversation.duration}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <Badge
                          variant={
                            conversation.status === "active"
                              ? "default"
                              : conversation.status === "resolved"
                                ? "secondary"
                                : "outline"
                          }
                          className="text-xs"
                        >
                          {conversation.status}
                        </Badge>

                        {conversation.satisfaction && (
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs">{conversation.satisfaction}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Conversation Detail */}
        <div className="lg:col-span-2">
          {selectedConv ? (
            <Card className="glass-effect h-[700px] flex flex-col">
              <CardHeader className="border-b border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      {selectedConv.customer.avatar}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{selectedConv.customer.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{selectedConv.customer.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="gap-1">
                      <Clock className="w-3 h-3" />
                      {selectedConv.duration}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    {selectedConv.agent.includes("AI") ? (
                      <Bot className="w-4 h-4 text-primary" />
                    ) : (
                      <UserCheck className="w-4 h-4 text-primary" />
                    )}
                    <span>Handled by {selectedConv.agent}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {selectedConv.category}
                  </Badge>
                  <Badge
                    variant={
                      selectedConv.status === "active"
                        ? "default"
                        : selectedConv.status === "resolved"
                          ? "secondary"
                          : "outline"
                    }
                    className="text-xs"
                  >
                    {selectedConv.status}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="flex-1 p-0">
                <ScrollArea className="h-full p-4">
                  <div className="space-y-4">
                    {selectedConv.messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`flex gap-3 max-w-[80%] ${
                            message.role === "user" ? "flex-row-reverse" : "flex-row"
                          }`}
                        >
                          <div className="flex-shrink-0">
                            {message.role === "user" ? (
                              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                                <User className="w-4 h-4 text-primary-foreground" />
                              </div>
                            ) : message.role === "agent" ? (
                              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                                <UserCheck className="w-4 h-4 text-white" />
                              </div>
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                                <Bot className="w-4 h-4 text-secondary-foreground" />
                              </div>
                            )}
                          </div>

                          <div className="space-y-1">
                            <div
                              className={`rounded-lg px-4 py-2 ${
                                message.role === "user"
                                  ? "bg-primary text-primary-foreground"
                                  : message.role === "agent"
                                    ? "bg-green-500 text-white"
                                    : "bg-muted text-muted-foreground"
                              }`}
                            >
                              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                            </div>
                            <p className="text-xs text-muted-foreground px-2">{message.timestamp}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>

              {selectedConv.status === "active" && (
                <div className="border-t border-border p-4">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <UserCheck className="w-4 h-4 mr-2" />
                      Transfer to Human
                    </Button>
                    <Button variant="outline" size="sm">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Escalate Priority
                    </Button>
                    <Button variant="outline" size="sm">
                      <Archive className="w-4 h-4 mr-2" />
                      Archive
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          ) : (
            <Card className="glass-effect h-[700px] flex items-center justify-center">
              <div className="text-center">
                <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">Select a Conversation</h3>
                <p className="text-muted-foreground">
                  Choose a conversation from the list to view details and manage it
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
