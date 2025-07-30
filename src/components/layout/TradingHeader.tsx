import { Bell, Search, Settings, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function TradingHeader() {
  return (
    <header className="trading-header border-b border-border/30 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left: Sidebar trigger + Search */}
        <div className="flex items-center space-x-4">
          <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search stocks, ETFs, options..."
              className="pl-10 w-80 bg-input/50 border-border/50 focus:border-primary/50"
            />
          </div>
        </div>

        {/* Center: Live Market Data */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="text-sm">
              <span className="text-muted-foreground">S&P 500:</span>
              <span className="text-success ml-2 font-medium">4,891.32</span>
              <span className="text-success text-xs ml-1">+0.24%</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="text-sm">
              <span className="text-muted-foreground">NASDAQ:</span>
              <span className="text-success ml-2 font-medium">15,341.09</span>
              <span className="text-success text-xs ml-1">+0.18%</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="text-sm">
              <span className="text-muted-foreground">DOW:</span>
              <span className="text-loss ml-2 font-medium">38,712.21</span>
              <span className="text-loss text-xs ml-1">-0.12%</span>
            </div>
          </div>
        </div>

        {/* Right: Notifications + User Menu */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full text-xs flex items-center justify-center text-primary-foreground">
              3
            </span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-sm font-medium">John Trader</div>
                  <div className="text-xs text-muted-foreground">Premium Account</div>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-popover border-border/50">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}