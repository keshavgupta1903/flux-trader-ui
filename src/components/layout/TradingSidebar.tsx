import { NavLink, useLocation } from "react-router-dom";
import { 
  BarChart3, 
  TrendingUp, 
  Wallet, 
  FileText, 
  Bot, 
  Play,
  Menu,
  ChevronRight
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: BarChart3 },
  { title: "Your Portfolio", url: "/portfolio", icon: Wallet },
  { title: "Place Order", url: "/order", icon: TrendingUp },
  { title: "Reports", url: "/reports", icon: FileText },
  { title: "Technical Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Test Trading", url: "/test-trading", icon: Play },
  { title: "AI Assistant", url: "/ai-assistant", icon: Bot },
];

export function TradingSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = (active: boolean) =>
    active 
      ? "bg-primary/20 text-primary border-r-2 border-primary glow-primary" 
      : "hover:bg-accent/50 hover:text-primary transition-all duration-200";

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-64"} trading-sidebar border-r border-border/30`}>
      <SidebarContent className="p-4">
        {/* Logo */}
        <div className="mb-8 flex items-center justify-center">
          {collapsed ? (
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold trading-gradient bg-clip-text text-transparent">
                  TradePro
                </h1>
                <p className="text-xs text-muted-foreground">STP Platform</p>
              </div>
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : "text-muted-foreground mb-4"}>
            Navigation
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={`
                        flex items-center space-x-3 p-3 rounded-lg transition-all duration-200
                        ${getNavCls(isActive(item.url))}
                      `}
                    >
                      <item.icon className={`w-5 h-5 ${isActive(item.url) ? 'text-primary' : 'text-muted-foreground'}`} />
                      {!collapsed && (
                        <>
                          <span className="font-medium">{item.title}</span>
                          {isActive(item.url) && (
                            <ChevronRight className="w-4 h-4 ml-auto text-primary" />
                          )}
                        </>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Live Market Status */}
        {!collapsed && (
          <div className="mt-auto">
            <div className="trading-card p-4 mt-6">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Market Open</span>
              </div>
              <div className="text-xs text-muted-foreground">
                <div>NYSE: 9:30 AM - 4:00 PM EST</div>
                <div className="text-success mt-1">Live Trading Active</div>
              </div>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}