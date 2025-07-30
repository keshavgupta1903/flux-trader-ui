import { TradingLayout } from "@/components/layout/TradingLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, MoreHorizontal, PieChart } from "lucide-react";

interface PortfolioItem {
  symbol: string;
  name: string;
  shares: number;
  avgCost: number;
  currentPrice: number;
  totalValue: number;
  pnl: number;
  pnlPercent: number;
}

const portfolioData: PortfolioItem[] = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    shares: 100,
    avgCost: 167.23,
    currentPrice: 175.43,
    totalValue: 17543,
    pnl: 820,
    pnlPercent: 4.90
  },
  {
    symbol: "NVDA", 
    name: "NVIDIA Corporation",
    shares: 25,
    avgCost: 845.67,
    currentPrice: 891.23,
    totalValue: 22280,
    pnl: 1139,
    pnlPercent: 5.39
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc.",
    shares: 50,
    avgCost: 251.45,
    currentPrice: 248.67,
    totalValue: 12433,
    pnl: -139,
    pnlPercent: -1.11
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation", 
    shares: 75,
    avgCost: 398.90,
    currentPrice: 412.89,
    totalValue: 30966,
    pnl: 1049,
    pnlPercent: 3.51
  }
];

function PortfolioRow({ item }: { item: PortfolioItem }) {
  const isProfit = item.pnl >= 0;
  const colorClass = isProfit ? "text-success" : "text-loss";
  const bgClass = isProfit ? "bg-success/10" : "bg-loss/10";

  return (
    <tr className="hover:bg-accent/50 transition-colors">
      <td className="px-4 py-3">
        <div>
          <div className="font-medium">{item.symbol}</div>
          <div className="text-sm text-muted-foreground">{item.name}</div>
        </div>
      </td>
      <td className="px-4 py-3 text-center">{item.shares}</td>
      <td className="px-4 py-3 text-right">${item.avgCost.toFixed(2)}</td>
      <td className="px-4 py-3 text-right">${item.currentPrice.toFixed(2)}</td>
      <td className="px-4 py-3 text-right font-medium">${item.totalValue.toLocaleString()}</td>
      <td className="px-4 py-3 text-right">
        <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-lg ${bgClass}`}>
          {isProfit ? 
            <TrendingUp className="w-3 h-3" /> : 
            <TrendingDown className="w-3 h-3" />
          }
          <span className={`font-medium ${colorClass}`}>
            {isProfit ? '+' : ''}${item.pnl.toFixed(0)} ({isProfit ? '+' : ''}{item.pnlPercent.toFixed(2)}%)
          </span>
        </div>
      </td>
      <td className="px-4 py-3">
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </td>
    </tr>
  );
}

export default function Portfolio() {
  const totalValue = portfolioData.reduce((sum, item) => sum + item.totalValue, 0);
  const totalPnL = portfolioData.reduce((sum, item) => sum + item.pnl, 0);
  const totalPnLPercent = (totalPnL / (totalValue - totalPnL)) * 100;

  return (
    <TradingLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Portfolio</h1>
            <p className="text-muted-foreground mt-1">
              Manage your investments and track performance
            </p>
          </div>
          
          <div className="flex space-x-3">
            <Button variant="outline">
              <PieChart className="w-4 h-4 mr-2" />
              Diversification
            </Button>
            <Button className="trading-gradient">
              Add Position
            </Button>
          </div>
        </div>

        {/* Portfolio Summary */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="trading-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalValue.toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card className="trading-card glow-success">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total P&L
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">
                +${totalPnL.toLocaleString()}
              </div>
              <div className="text-sm text-success">
                +{totalPnLPercent.toFixed(2)}%
              </div>
            </CardContent>
          </Card>

          <Card className="trading-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Positions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{portfolioData.length}</div>
            </CardContent>
          </Card>

          <Card className="trading-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Day Change
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">+2.34%</div>
            </CardContent>
          </Card>
        </div>

        {/* Holdings Table */}
        <Card className="trading-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Holdings</CardTitle>
              <Badge variant="outline">Real-time</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">Symbol</th>
                    <th className="px-4 py-3 text-center font-medium text-muted-foreground">Shares</th>
                    <th className="px-4 py-3 text-right font-medium text-muted-foreground">Avg Cost</th>
                    <th className="px-4 py-3 text-right font-medium text-muted-foreground">Current Price</th>
                    <th className="px-4 py-3 text-right font-medium text-muted-foreground">Market Value</th>
                    <th className="px-4 py-3 text-right font-medium text-muted-foreground">P&L</th>
                    <th className="px-4 py-3 text-center font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {portfolioData.map((item) => (
                    <PortfolioRow key={item.symbol} item={item} />
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </TradingLayout>
  );
}