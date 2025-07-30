import { useState } from "react";
import { Sidebar, SidebarContent, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TradingSidebar } from "./TradingSidebar";
import { TradingHeader } from "./TradingHeader";

interface TradingLayoutProps {
  children: React.ReactNode;
}

export function TradingLayout({ children }: TradingLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <TradingSidebar />
        
        <div className="flex-1 flex flex-col">
          <TradingHeader />
          
          <main className="flex-1 p-6 trading-surface">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}