import { useState } from "react";
import { TradingLayout } from "@/components/layout/TradingLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bot, Send, Sparkles, TrendingUp, BarChart3 } from "lucide-react";

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

const suggestedQuestions = [
  "What's the outlook for Tesla stock?",
  "Show me my last 5 trades",
  "What sectors are performing well today?",
  "Analyze my portfolio risk",
  "Find stocks with high volume",
];

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI trading assistant. I can help you analyze markets, review your portfolio, and answer trading questions. What would you like to know?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I understand you're asking about " + input + ". Let me analyze the latest market data and provide you with insights...",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <TradingLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold flex items-center space-x-3">
              <Bot className="w-8 h-8 text-primary" />
              <span>AI Assistant</span>
            </h1>
            <p className="text-muted-foreground mt-1">
              Get intelligent insights and analysis powered by AI
            </p>
          </div>
          
          <Badge variant="outline" className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>GPT-4 Powered</span>
          </Badge>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <Card className="trading-card-elevated h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bot className="w-5 h-5 text-primary" />
                  <span>Chat with AI</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto space-y-4 pr-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.isBot
                            ? "bg-primary/10 border border-primary/20"
                            : "bg-secondary/10 border border-secondary/20"
                        }`}
                      >
                        <div className="text-sm">{message.content}</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {message.timestamp.toLocaleTimeString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="flex space-x-2 mt-4">
                  <Input
                    placeholder="Ask me anything about trading..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    className="flex-1"
                  />
                  <Button onClick={handleSend} disabled={!input.trim()}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Suggested Questions */}
            <Card className="trading-card">
              <CardHeader>
                <CardTitle>Suggested Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {suggestedQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full text-left justify-start h-auto p-3"
                    onClick={() => handleSuggestedQuestion(question)}
                  >
                    <div className="text-sm">{question}</div>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* AI Capabilities */}
            <Card className="trading-card">
              <CardHeader>
                <CardTitle>AI Capabilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-5 h-5 text-success mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">Market Analysis</div>
                      <div className="text-xs text-muted-foreground">
                        Real-time insights on stocks and trends
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <BarChart3 className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">Portfolio Review</div>
                      <div className="text-xs text-muted-foreground">
                        Analyze your holdings and performance
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Sparkles className="w-5 h-5 text-secondary mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">Trade Ideas</div>
                      <div className="text-xs text-muted-foreground">
                        Generate investment opportunities
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="trading-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full">
                  Analyze My Portfolio
                </Button>
                <Button variant="outline" className="w-full">
                  Market Sentiment
                </Button>
                <Button variant="outline" className="w-full">
                  Find Trading Opportunities
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </TradingLayout>
  );
}