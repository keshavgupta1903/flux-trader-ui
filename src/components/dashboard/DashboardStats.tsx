import { TrendingUp, TrendingDown, DollarSign, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: React.ComponentType<{ className?: string }>;
}

function StatCard({ title, value, change, changeType, icon: Icon }: StatCardProps) {
  const changeColorClass = 
    changeType === "positive" ? "text-success" : 
    changeType === "negative" ? "text-loss" : "text-muted-foreground";
  
  const glowClass = 
    changeType === "positive" ? "glow-success" : 
    changeType === "negative" ? "glow-loss" : "";

  return (
    <Card className={`trading-card hover:scale-105 transition-all duration-300 ${glowClass}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className={`text-xs flex items-center space-x-1 mt-1 ${changeColorClass}`}>
          {changeType === "positive" && <TrendingUp className="w-3 h-3" />}
          {changeType === "negative" && <TrendingDown className="w-3 h-3" />}
          <span>{change}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export function DashboardStats() {
  const stats = [
    {
      title: "Portfolio Value",
      value: "$234,567.89",
      change: "+5.2% from yesterday",
      changeType: "positive" as const,
      icon: DollarSign,
    },
    {
      title: "Today's P/L",
      value: "+$12,345.67",
      change: "+2.1% today",
      changeType: "positive" as const,
      icon: TrendingUp,
    },
    {
      title: "Number of Trades",
      value: "47",
      change: "12 today",
      changeType: "neutral" as const,
      icon: Activity,
    },
    {
      title: "Buying Power",
      value: "$45,789.12",
      change: "Available for trading",
      changeType: "neutral" as const,
      icon: DollarSign,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 animate-slide-up">
      {stats.map((stat, index) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}