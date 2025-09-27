import { convertToModelMessages, streamText, type UIMessage, tool } from "ai"
import { z } from "zod"

export const maxDuration = 30

const transferToHumanTool = tool({
  description:
    "Transfer the conversation to a human agent when the customer requests it or when the issue is too complex",
  inputSchema: z.object({
    reason: z.string().describe("Reason for transferring to human agent"),
    priority: z.enum(["low", "medium", "high"]).describe("Priority level of the transfer"),
  }),
  execute: async ({ reason, priority }) => {
    // In a real implementation, this would trigger a notification to human agents
    return {
      status: "transferred",
      message: `Your request has been transferred to a human agent. Priority: ${priority}. Reason: ${reason}`,
      estimatedWaitTime: priority === "high" ? "2-5 minutes" : priority === "medium" ? "5-10 minutes" : "10-15 minutes",
    }
  },
})

const searchKnowledgeBaseTool = tool({
  description: "Search the knowledge base for relevant information to help answer customer questions",
  inputSchema: z.object({
    query: z.string().describe("Search query for the knowledge base"),
    category: z.enum(["billing", "technical", "account", "general"]).describe("Category of the query"),
  }),
  execute: async ({ query, category }) => {
    // Mock knowledge base search - in real implementation, this would query your actual KB
    const mockResults = {
      billing: [
        "Billing cycles run monthly from the date of signup",
        "Refunds are processed within 5-7 business days",
        "You can update payment methods in your account settings",
      ],
      technical: [
        "Clear your browser cache if experiencing loading issues",
        "Check your internet connection for connectivity problems",
        "Try logging out and back in to refresh your session",
      ],
      account: [
        "Password resets are sent to your registered email",
        "Account verification may take up to 24 hours",
        "Contact support to update your registered email address",
      ],
      general: [
        "Our support hours are 9 AM - 6 PM EST, Monday through Friday",
        "Premium customers receive priority support",
        "Check our status page for any ongoing service issues",
      ],
    }

    return {
      results: mockResults[category] || mockResults.general,
      category,
      query,
    }
  },
})

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const systemPrompt = `You are a professional AI customer care representative. Your role is to:

1. Provide helpful, accurate, and empathetic customer support
2. Maintain a professional yet friendly tone
3. Use the knowledge base tool to find relevant information
4. Transfer to human agents when appropriate (complex issues, customer requests, or when you cannot resolve the issue)
5. Always prioritize customer satisfaction and resolution

Guidelines:
- Be concise but thorough in your responses
- Ask clarifying questions when needed
- Acknowledge customer frustration with empathy
- Provide step-by-step solutions when applicable
- Always offer to escalate to a human agent if the customer prefers

Remember: You represent the company's values of excellence, reliability, and customer-first service.`

  const result = streamText({
    model: "openai/gpt-4o",
    messages: [{ role: "system", content: systemPrompt }, ...convertToModelMessages(messages)],
    tools: {
      transferToHuman: transferToHumanTool,
      searchKnowledgeBase: searchKnowledgeBaseTool,
    },
    maxOutputTokens: 1000,
    temperature: 0.7,
  })

  return result.toUIMessageStreamResponse()
}
