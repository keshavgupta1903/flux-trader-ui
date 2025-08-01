import { useState, useEffect } from "react";
import { Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Declare global functions that will be available from your app.js
declare global {
  interface Window {
    searchStock?: () => void;
    logout?: () => void;
  }
}

export default function Index() {
  const [orders, setOrders] = useState([]);
  const [stocks, setStocks] = useState([]);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="navbar sticky top-0 z-50 bg-trading-header border-b border-border/30 px-6 py-4">
        <div className="logo text-2xl font-bold">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            TradeNow
          </span>
        </div>
        
        <div className="search-wrapper flex items-center max-w-md mx-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              id="searchInput"
              placeholder="Search Stocks, ETFs..."
              className="pl-10 bg-input/50 border-border/50 focus:border-primary/50"
            />
          </div>
          <Button className="search-btn ml-2" onClick={() => window.searchStock && window.searchStock()}>
            🔍
          </Button>
        </div>

        <div className="auth-buttons flex items-center gap-3">
          <a href="login.html" id="loginBtn">
            <Button variant="outline">Login</Button>
          </a>
          <a href="signup.html" id="signupBtn">
            <Button className="signup">Sign Up</Button>
          </a>
          
          <div id="userMenu" style={{display: 'none'}} className="flex items-center gap-2">
            <a href="#"><Button variant="outline">My Profile</Button></a>
            <a href="#" onClick={() => window.logout && window.logout()}>
              <Button variant="destructive">Logout</Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Page Layout */}
      <div className="page-layout flex">
        {/* Sidebar */}
        <aside className="sidebar w-64 bg-trading-sidebar border-r border-border/30 min-h-screen p-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200">
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200">
                <span>📁 Your Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200">
                <span>🧾 Orders</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200">
                <span>⭐ Watchlist</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200">
                <span>🤖 AI Chat</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200">
                <span>📈 Market Overview</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200">
                <span>📰 News & Alerts</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200">
                <span>📊 Analytics</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200">
                <span>⚙️ Settings</span>
              </a>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="main-content flex-1 p-6 trading-surface">
          {/* Top Performers Section */}
          <section className="top-performers mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2">📈</span>
              Top Gainers (Live)
              <div className="ml-4 inline-flex items-center space-x-2 bg-success/10 border border-success/20 rounded-full px-3 py-1 text-sm">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-success">Live</span>
              </div>
            </h2>
            <div className="stock-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* JS will fill in top stocks here */}
            </div>
          </section>

          {/* Your Orders Section */}
          <section className="your-orders mb-8">
            <h2 className="text-2xl font-bold mb-6">Your Orders</h2>
            <div id="orders-summary" className="orders-summary-card trading-card p-6 mb-4 font-semibold">
              {/* Orders summary will be populated by JS */}
            </div>
            <div id="orders-list" className="orders-list space-y-3">
              {/* Orders list will be populated by JS */}
            </div>
          </section>

          {/* Browse Stocks Section */}
          <section className="browse-stocks text-center">
            <h2 className="text-2xl font-bold mb-6">Browse Stocks</h2>
            <div className="browse-stock-list flex flex-col items-center gap-3 mb-6">
              {/* Stock list will be populated by JS */}
            </div>
            <div className="browse-button-wrapper">
              <a href="#">
                <Button className="browse-btn bg-primary hover:bg-primary/90">
                  Browse All Stocks
                </Button>
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
