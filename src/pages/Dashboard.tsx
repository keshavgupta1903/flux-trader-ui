import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { TopMovers } from "@/components/dashboard/TopMovers";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart3, Zap, Brain } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, John! 👋</h1>
          <p className="text-muted-foreground mt-1">
            Here's what's happening with your trading portfolio today.
          </p>
        </div>
        
        <div className="flex space-x-3">
          <Button className="trading-gradient glow-primary">
            <TrendingUp className="w-4 h-4 mr-2" />
            Quick Trade
          </Button>
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
            <BarChart3 className="w-4 h-4 mr-2" />
            View Analytics
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <DashboardStats />

      {/* Market Overview */}
      <TopMovers />

      {/* Quick Actions & Insights */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="trading-card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-primary" />
              <span>Market Alerts</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
              <div className="font-medium text-sm">AAPL Breakout</div>
              <div className="text-xs text-muted-foreground">
                Price broke above resistance at $175
              </div>
            </div>
            <div className="p-3 bg-success/10 rounded-lg border border-success/20">
              <div className="font-medium text-sm">Portfolio Milestone</div>
              <div className="text-xs text-muted-foreground">
                Reached $250K total value
              </div>
            </div>
            <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/20">
              <div className="font-medium text-sm">Earnings Alert</div>
              <div className="text-xs text-muted-foreground">
                NVDA reports earnings tomorrow
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="trading-card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="w-5 h-5 text-secondary" />
              <span>AI Insights</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/20">
              <div className="font-medium text-sm">Recommendation</div>
              <div className="text-xs text-muted-foreground">
                Consider taking profits on tech positions
              </div>
            </div>
            <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
              <div className="font-medium text-sm">Risk Analysis</div>
              <div className="text-xs text-muted-foreground">
                Portfolio risk level: Moderate
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full">
              Get Full Analysis
            </Button>
          </CardContent>
        </Card>

        <Card className="trading-card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span>Bought AAPL</span>
                <span className="text-success">+100 shares</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Sold TSLA</span>
                <span className="text-loss">-50 shares</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Options Trade</span>
                <span className="text-primary">SPY Call</span>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full">
              View All Trades
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Market Status Footer */}
      <Card className="trading-card">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Markets Open</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Trading until 4:00 PM EST
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleTimeString()}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}