import { useState, useEffect } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

const mockGainers: Stock[] = [
  { symbol: "AAPL", name: "Apple Inc.", price: 175.43, change: 8.21, changePercent: 4.91 },
  { symbol: "NVDA", name: "NVIDIA Corp", price: 891.23, change: 42.15, changePercent: 4.96 },
  { symbol: "TSLA", name: "Tesla Inc.", price: 248.67, change: 11.34, changePercent: 4.78 },
  { symbol: "MSFT", name: "Microsoft Corp", price: 412.89, change: 18.45, changePercent: 4.68 },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 152.34, change: 6.78, changePercent: 4.65 },
];

const mockLosers: Stock[] = [
  { symbol: "META", name: "Meta Platforms", price: 398.45, change: -19.23, changePercent: -4.61 },
  { symbol: "AMZN", name: "Amazon.com Inc", price: 142.67, change: -6.89, changePercent: -4.61 },
  { symbol: "NFLX", name: "Netflix Inc.", price: 487.23, change: -22.45, changePercent: -4.41 },
  { symbol: "AMD", name: "Advanced Micro", price: 139.78, change: -6.12, changePercent: -4.19 },
  { symbol: "INTC", name: "Intel Corp", price: 42.89, change: -1.78, changePercent: -3.98 },
];

interface StockRowProps {
  stock: Stock;
  isGainer: boolean;
}

function StockRow({ stock, isGainer }: StockRowProps) {
  const colorClass = isGainer ? "text-success" : "text-loss";
  const bgClass = isGainer ? "bg-success/10" : "bg-loss/10";
  const glowClass = isGainer ? "glow-success" : "glow-loss";

  return (
    <div className={`flex items-center justify-between p-3 rounded-lg ${bgClass} hover:${bgClass} transition-all duration-200 ${glowClass} cursor-pointer`}>
      <div className="flex-1">
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-sm">{stock.symbol}</span>
          {isGainer ? 
            <TrendingUp className="w-4 h-4 text-success" /> : 
            <TrendingDown className="w-4 h-4 text-loss" />
          }
        </div>
        <div className="text-xs text-muted-foreground truncate">{stock.name}</div>
      </div>
      
      <div className="text-right">
        <div className="font-medium">${stock.price.toFixed(2)}</div>
        <div className={`text-xs ${colorClass}`}>
          {isGainer ? '+' : ''}{stock.change.toFixed(2)} ({isGainer ? '+' : ''}{stock.changePercent.toFixed(2)}%)
        </div>
      </div>
    </div>
  );
}

export function TopMovers() {
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid gap-6 md:grid-cols-2 animate-slide-up">
      <Card className="trading-card">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-success" />
              <span>Top Gainers</span>
            </CardTitle>
            <Badge variant="outline" className="text-xs">
              Live
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          {mockGainers.map((stock) => (
            <StockRow key={stock.symbol} stock={stock} isGainer={true} />
          ))}
        </CardContent>
      </Card>

      <Card className="trading-card">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold flex items-center space-x-2">
              <TrendingDown className="w-5 h-5 text-loss" />
              <span>Top Losers</span>
            </CardTitle>
            <Badge variant="outline" className="text-xs">
              Live
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          {mockLosers.map((stock) => (
            <StockRow key={stock.symbol} stock={stock} isGainer={false} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}