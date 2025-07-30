import { useState } from "react";
import { TradingLayout } from "@/components/layout/TradingLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, TrendingUp, TrendingDown, DollarSign } from "lucide-react";

export default function PlaceOrder() {
  const [orderType, setOrderType] = useState<"buy" | "sell">("buy");
  const [symbol, setSymbol] = useState("AAPL");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [orderStyle, setOrderStyle] = useState<"market" | "limit">("market");

  const currentPrice = 175.43;
  const estimatedTotal = parseFloat(quantity || "0") * (orderStyle === "market" ? currentPrice : parseFloat(price || "0"));

  return (
    <TradingLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Place Order</h1>
            <p className="text-muted-foreground mt-1">
              Execute trades with straight-through processing
            </p>
          </div>
          
          <Badge variant="outline" className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span>Market Open</span>
          </Badge>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Order Form */}
          <div className="lg:col-span-2">
            <Card className="trading-card-elevated">
              <CardHeader>
                <CardTitle>Order Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Stock Search */}
                <div className="space-y-2">
                  <Label htmlFor="symbol">Symbol</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="symbol"
                      placeholder="Search symbol..."
                      value={symbol}
                      onChange={(e) => setSymbol(e.target.value.toUpperCase())}
                      className="pl-10"
                    />
                  </div>
                  {symbol && (
                    <div className="p-3 bg-accent/50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{symbol}</div>
                          <div className="text-sm text-muted-foreground">Apple Inc.</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">${currentPrice}</div>
                          <div className="text-sm text-success">+2.34%</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Buy/Sell Toggle */}
                <Tabs value={orderType} onValueChange={(value) => setOrderType(value as "buy" | "sell")}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger 
                      value="buy" 
                      className="data-[state=active]:bg-success data-[state=active]:text-white"
                    >
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Buy
                    </TabsTrigger>
                    <TabsTrigger 
                      value="sell"
                      className="data-[state=active]:bg-loss data-[state=active]:text-white"
                    >
                      <TrendingDown className="w-4 h-4 mr-2" />
                      Sell
                    </TabsTrigger>
                  </TabsList>
                </Tabs>

                {/* Order Type */}
                <Tabs value={orderStyle} onValueChange={(value) => setOrderStyle(value as "market" | "limit")}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="market">Market Order</TabsTrigger>
                    <TabsTrigger value="limit">Limit Order</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="market" className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Quantity</Label>
                      <Input
                        id="quantity"
                        type="number"
                        placeholder="Number of shares"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                    </div>
                    
                    <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <div className="text-sm text-muted-foreground">
                        Market orders execute immediately at the current market price
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="limit" className="space-y-4 mt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="quantity-limit">Quantity</Label>
                        <Input
                          id="quantity-limit"
                          type="number"
                          placeholder="Shares"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="limit-price">Limit Price</Label>
                        <Input
                          id="limit-price"
                          type="number"
                          placeholder="Price per share"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                      <div className="text-sm text-muted-foreground">
                        Limit orders execute only at your specified price or better
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Action Button */}
                <Button 
                  className={`w-full ${orderType === "buy" ? "bg-success hover:bg-success/90" : "bg-loss hover:bg-loss/90"}`}
                  disabled={!quantity || (orderStyle === "limit" && !price)}
                >
                  <DollarSign className="w-4 h-4 mr-2" />
                  {orderType === "buy" ? "Place Buy Order" : "Place Sell Order"}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="trading-card">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Symbol:</span>
                    <span className="font-medium">{symbol || "—"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Action:</span>
                    <Badge variant={orderType === "buy" ? "default" : "destructive"}>
                      {orderType.toUpperCase()}
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Quantity:</span>
                    <span className="font-medium">{quantity || "0"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Price:</span>
                    <span className="font-medium">
                      ${orderStyle === "market" ? `${currentPrice} (Market)` : price || "—"}
                    </span>
                  </div>
                  <div className="border-t border-border/50 pt-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Estimated Total:</span>
                      <span className="font-bold text-lg">
                        ${estimatedTotal ? estimatedTotal.toLocaleString() : "—"}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="trading-card">
              <CardHeader>
                <CardTitle>Account Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Buying Power:</span>
                  <span className="font-medium text-success">$45,789.12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Day Trades Left:</span>
                  <span className="font-medium">2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Margin Used:</span>
                  <span className="font-medium">$12,340.00</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </TradingLayout>
  );
}