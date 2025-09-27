"use client"

import type React from "react"

import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Bot, User, Clock, CheckCircle } from "lucide-react"
import { useState } from "react"

export function CustomerChatInterface() {
  const [inputValue, setInputValue] = useState("")

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim() && status !== "in_progress") {
      sendMessage({ text: inputValue })
      setInputValue("")
    }
  }

  return (
    <Card className="h-[700px] flex flex-col glass-effect">
      <CardHeader className="border-b border-border">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-primary" />
            AI Customer Support
          </CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="gap-1">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              Active
            </Badge>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">Hi! I'm your AI assistant. How can I help you today?</p>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col p-0">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <Bot className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">Welcome to Customer Support</h3>
                <p className="text-muted-foreground text-sm max-w-md mx-auto">
                  I'm here to help you with any questions or issues you might have. Feel free to ask me anything!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-6 max-w-md mx-auto">
                  <Button variant="outline" size="sm" onClick={() => sendMessage({ text: "I need help with billing" })}>
                    Billing Help
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => sendMessage({ text: "Technical support needed" })}>
                    Technical Support
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => sendMessage({ text: "Account issues" })}>
                    Account Issues
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => sendMessage({ text: "General questions" })}>
                    General Questions
                  </Button>
                </div>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`flex gap-3 max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  <div className="flex-shrink-0">
                    {message.role === "user" ? (
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <User className="w-4 h-4 text-primary-foreground" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                        <Bot className="w-4 h-4 text-secondary-foreground" />
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    {message.parts.map((part, index) => {
                      switch (part.type) {
                        case "text":
                          return (
                            <div
                              key={index}
                              className={`rounded-lg px-4 py-2 ${
                                message.role === "user"
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted text-muted-foreground"
                              }`}
                            >
                              <p className="text-sm whitespace-pre-wrap">{part.text}</p>
                            </div>
                          )

                        case "tool-transferToHuman":
                          if (part.state === "output-available") {
                            return (
                              <div key={index} className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3">
                                <div className="flex items-center gap-2 mb-2">
                                  <Clock className="w-4 h-4 text-orange-500" />
                                  <span className="text-sm font-medium text-orange-500">
                                    Transferred to Human Agent
                                  </span>
                                </div>
                                <p className="text-sm text-muted-foreground">{part.output.message}</p>
                                <p className="text-xs text-muted-foreground mt-1">
                                  Estimated wait time: {part.output.estimatedWaitTime}
                                </p>
                              </div>
                            )
                          }
                          break

                        case "tool-searchKnowledgeBase":
                          if (part.state === "output-available") {
                            return (
                              <div key={index} className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                                <div className="flex items-center gap-2 mb-2">
                                  <CheckCircle className="w-4 h-4 text-blue-500" />
                                  <span className="text-sm font-medium text-blue-500">Knowledge Base Results</span>
                                </div>
                                <div className="space-y-1">
                                  {part.output.results.map((result: string, i: number) => (
                                    <p key={i} className="text-sm text-muted-foreground">
                                      • {result}
                                    </p>
                                  ))}
                                </div>
                              </div>
                            )
                          }
                          break
                      }
                    })}
                  </div>
                </div>
              </div>
            ))}

            {status === "in_progress" && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                  <Bot className="w-4 h-4 text-secondary-foreground" />
                </div>
                <div className="bg-muted rounded-lg px-4 py-2">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce"></div>
                      <div
                        className="w-2 h-2 rounded-full bg-primary animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-primary animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                    <span className="text-xs text-muted-foreground">AI is typing...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="border-t border-border p-4">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message here..."
              disabled={status === "in_progress"}
              className="flex-1"
            />
            <Button type="submit" disabled={!inputValue.trim() || status === "in_progress"} size="icon">
              <Send className="w-4 h-4" />
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Powered by AI • Available 24/7 • Enterprise-grade security
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
