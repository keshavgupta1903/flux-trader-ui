import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Declare global functions that will be available from your app.js
declare global {
  interface Window {
    searchStock?: () => void;
    logout?: () => void;
  }
}

export default function TradeNowHome() {
  const [orders, setOrders] = useState([]);
  const [stocks, setStocks] = useState([]);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar - keeping your exact structure */}
      <nav className="navbar flex flex-wrap justify-between items-center px-6 py-4 bg-trading-header border-b border-border/30 sticky top-0 z-50">
        <div className="logo text-2xl font-bold flex-1">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            TradeNow
          </span>
        </div>
        
        <div className="search-wrapper flex-2 max-w-md flex rounded-lg overflow-hidden border border-border/50 bg-input/50">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              id="searchInput"
              placeholder="Search Stocks, ETFs..."
              className="pl-10 border-0 bg-transparent focus:ring-0 focus:border-0"
            />
          </div>
          <Button 
            className="search-btn px-4 bg-primary hover:bg-primary/90 text-white border-0 rounded-none" 
            onClick={() => window.searchStock && window.searchStock()}
          >
            🔍
          </Button>
        </div>

        <div className="auth-buttons flex gap-3 flex-shrink-0">
          <a href="login.html" id="loginBtn">
            <Button variant="outline" className="hover:bg-accent/50">Login</Button>
          </a>
          <a href="signup.html" id="signupBtn">
            <Button className="signup bg-primary hover:bg-primary/90">Sign Up</Button>
          </a>
          
          <div id="userMenu" style={{display: 'none'}} className="flex gap-2">
            <a href="#"><Button variant="outline">My Profile</Button></a>
            <a href="#" onClick={() => window.logout && window.logout()}>
              <Button variant="destructive">Logout</Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Page Layout - keeping your exact structure */}
      <div className="page-layout flex">
        {/* Sidebar - keeping your exact structure */}
        <aside className="sidebar w-64 bg-trading-sidebar border-r border-border/30 p-4 min-h-screen">
          <ul className="list-none p-0 space-y-2">
            <li className="my-4">
              <a href="#" className="block p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 font-medium">
                Dashboard
              </a>
            </li>
            <li className="my-4">
              <a href="#" className="block p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 font-medium">
                📁 Your Portfolio
              </a>
            </li>
            <li className="my-4">
              <a href="#" className="block p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 font-medium">
                🧾 Orders
              </a>
            </li>
            <li className="my-4">
              <a href="#" className="block p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 font-medium">
                ⭐ Watchlist
              </a>
            </li>
            <li className="my-4">
              <a href="#" className="block p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 font-medium">
                🤖 AI Chat
              </a>
            </li>
            <li className="my-4">
              <a href="#" className="block p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 font-medium">
                📈 Market Overview
              </a>
            </li>
            <li className="my-4">
              <a href="#" className="block p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 font-medium">
                📰 News & Alerts
              </a>
            </li>
            <li className="my-4">
              <a href="#" className="block p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 font-medium">
                📊 Analytics
              </a>
            </li>
            <li className="my-4">
              <a href="#" className="block p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 font-medium">
                ⚙️ Settings
              </a>
            </li>
          </ul>
        </aside>

        {/* Main Content - keeping your exact structure */}
        <main className="main-content flex-1 p-8 trading-surface">
          {/* Top Performers Section - keeping your exact structure */}
          <section className="top-performers mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-3">📈</span>
              Top Gainers (Live)
              <div className="ml-4 inline-flex items-center space-x-2 bg-success/10 border border-success/20 rounded-full px-3 py-1 text-sm">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-success font-medium">Live</span>
              </div>
            </h2>
            <div className="stock-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Your JS will fill in top stocks here - these are example cards */}
              <div className="stock-card trading-card p-6 hover:scale-105 transition-transform duration-200 cursor-pointer">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-lg">AAPL</h3>
                    <p className="text-sm text-muted-foreground">Apple Inc.</p>
                  </div>
                  <span className="text-success text-sm">+4.2%</span>
                </div>
                <div className="text-2xl font-bold text-success">$175.43</div>
                <div className="text-sm text-success mt-1">+$7.21</div>
              </div>
            </div>
          </section>

          {/* Your Orders Section - keeping your exact structure */}
          <section className="your-orders mb-12">
            <h2 className="text-2xl font-bold mb-6">Your Orders</h2>
            <div id="orders-summary" className="orders-summary-card trading-card p-6 mb-6 font-semibold">
              {/* Your orders summary will be populated by JS */}
              <div className="flex justify-between items-center">
                <span>Total Portfolio Value:</span>
                <span className="text-2xl text-primary">$234,567.89</span>
              </div>
            </div>
            <div id="orders-list" className="orders-list space-y-4">
              {/* Your orders list will be populated by JS - these are example items */}
              <div className="order-item trading-card p-4 flex justify-between items-center">
                <div>
                  <span className="font-medium">TSLA - 50 shares</span>
                  <div className="text-sm text-muted-foreground">Bought at $240.00</div>
                </div>
                <div className="text-right">
                  <div className="profit text-success font-bold">+$1,250.00</div>
                  <div className="text-sm text-muted-foreground">+5.2%</div>
                </div>
              </div>
              <div className="order-item trading-card p-4 flex justify-between items-center">
                <div>
                  <span className="font-medium">NVDA - 25 shares</span>
                  <div className="text-sm text-muted-foreground">Bought at $850.00</div>
                </div>
                <div className="text-right">
                  <div className="loss text-loss font-bold">-$875.00</div>
                  <div className="text-sm text-muted-foreground">-4.1%</div>
                </div>
              </div>
            </div>
          </section>

          {/* Browse Stocks Section - keeping your exact structure */}
          <section className="browse-stocks text-center">
            <h2 className="text-2xl font-bold mb-6">Browse Stocks</h2>
            <div className="browse-stock-list flex flex-col items-center gap-3 mb-8">
              {/* Your stock list will be populated by JS - these are example rows */}
              <div className="stock-row w-4/5 flex justify-between items-center trading-card p-4 rounded-lg">
                <div className="stock-symbol font-bold text-lg">MSFT</div>
                <div className="stock-price text-success font-medium">$412.89</div>
              </div>
              <div className="stock-row w-4/5 flex justify-between items-center trading-card p-4 rounded-lg">
                <div className="stock-symbol font-bold text-lg">GOOGL</div>
                <div className="stock-price text-success font-medium">$152.34</div>
              </div>
              <div className="stock-row w-4/5 flex justify-between items-center trading-card p-4 rounded-lg">
                <div className="stock-symbol font-bold text-lg">META</div>
                <div className="stock-price text-loss font-medium">$398.45</div>
              </div>
            </div>
            <div className="browse-button-wrapper">
              <a href="#">
                <Button className="browse-btn px-8 py-3 bg-primary hover:bg-primary/90 font-medium">
                  Browse All Stocks
                </Button>
              </a>
            </div>
          </section>
        </main>
      </div>

      {/* Fullscreen Modal - keeping your exact structure */}
      <div className="fullscreen-stock hidden fixed top-0 left-0 w-screen h-screen bg-background z-50 flex flex-col p-8">
        <h1 className="text-3xl font-bold mb-6">Stock Details</h1>
        <Button className="self-end bg-primary hover:bg-primary/90">Close</Button>
        {/* Your fullscreen content will go here */}
      </div>
    </div>
  );
}
