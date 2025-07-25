import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Plus, Minus, Printer, CreditCard } from "lucide-react"

interface Product {
  id: string
  name: string
  price: number
  category: string
  image: string
  stock: number
}

interface CartItem extends Product {
  quantity: number
}

// Mock data - em produção viria de uma API
const categories = ["Refrigerantes", "Cervejas", "Águas", "Sucos", "Energéticos"]

const products: Product[] = [
  { id: "1", name: "Coca-Cola 350ml", price: 4.50, category: "Refrigerantes", image: "🥤", stock: 50 },
  { id: "2", name: "Pepsi 350ml", price: 4.00, category: "Refrigerantes", image: "🥤", stock: 30 },
  { id: "3", name: "Brahma 350ml", price: 3.50, category: "Cervejas", image: "🍺", stock: 100 },
  { id: "4", name: "Skol 350ml", price: 3.20, category: "Cervejas", image: "🍺", stock: 80 },
  { id: "5", name: "Água Crystal 500ml", price: 2.00, category: "Águas", image: "💧", stock: 200 },
  { id: "6", name: "Suco Del Valle", price: 5.50, category: "Sucos", image: "🧃", stock: 25 },
  { id: "7", name: "Red Bull", price: 12.00, category: "Energéticos", image: "⚡", stock: 15 },
  { id: "8", name: "Monster", price: 10.50, category: "Energéticos", image: "⚡", stock: 20 },
]

export default function VendaRapida() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [cart, setCart] = useState<CartItem[]>([])

  const filteredProducts = selectedCategory 
    ? products.filter(p => p.category === selectedCategory)
    : products

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: Math.min(item.quantity + 1, product.stock) }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === productId)
      if (existing && existing.quantity > 1) {
        return prev.map(item => 
          item.id === productId 
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      }
      return prev.filter(item => item.id !== productId)
    })
  }

  const getQuantityInCart = (productId: string) => {
    return cart.find(item => item.id === productId)?.quantity || 0
  }

  const getTotalValue = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const clearCart = () => {
    setCart([])
  }

  const processPayment = () => {
    // Aqui seria implementado o processamento do pagamento
    console.log("Processando venda:", cart)
    // Após processar, limpar carrinho
    clearCart()
  }

  const printReceipt = () => {
    // Aqui seria implementada a impressão térmica
    console.log("Imprimindo cupom fiscal...")
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Área de Produtos */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b bg-card">
          <h1 className="text-2xl font-bold text-foreground">Venda Rápida</h1>
          <p className="text-muted-foreground">Selecione os produtos para venda</p>
        </div>

        {/* Categorias */}
        <div className="p-4 border-b bg-muted/30">
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className="touch-friendly h-12"
            >
              Todos
            </Button>
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="touch-friendly h-12"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Grid de Produtos */}
        <div className="flex-1 p-4 overflow-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredProducts.map(product => {
              const quantityInCart = getQuantityInCart(product.id)
              return (
                <Card key={product.id} className="touch-friendly shadow-medium">
                  <CardContent className="p-4 text-center">
                    <div className="text-4xl mb-2">{product.image}</div>
                    <h3 className="font-medium text-sm mb-1">{product.name}</h3>
                    <Badge variant="outline" className="mb-2 text-xs">
                      {product.category}
                    </Badge>
                    <p className="font-bold text-primary mb-3">
                      R$ {product.price.toFixed(2)}
                    </p>
                    <p className="text-xs text-muted-foreground mb-3">
                      Estoque: {product.stock}
                    </p>
                    
                    {quantityInCart === 0 ? (
                      <Button
                        onClick={() => addToCart(product)}
                        className="w-full h-12 bg-gradient-primary"
                        disabled={product.stock === 0}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    ) : (
                      <div className="flex items-center justify-between gap-1">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeFromCart(product.id)}
                          className="h-10 w-10"
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="font-bold text-lg px-2">
                          {quantityInCart}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => addToCart(product)}
                          className="h-10 w-10"
                          disabled={quantityInCart >= product.stock}
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      {/* Carrinho Lateral */}
      <div className="w-80 bg-card border-l flex flex-col">
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Carrinho ({getTotalItems()})
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 p-4 overflow-auto">
          {cart.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <ShoppingCart className="w-12 h-12 mx-auto mb-2" />
              <p>Carrinho vazio</p>
            </div>
          ) : (
            <div className="space-y-3">
              {cart.map(item => (
                <div key={item.id} className="flex items-center justify-between p-3 bg-muted/30">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground">
                      R$ {item.price.toFixed(2)} x {item.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>

        <div className="border-t p-4 space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>R$ {getTotalValue().toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span className="text-primary">R$ {getTotalValue().toFixed(2)}</span>
            </div>
          </div>

          <div className="space-y-2">
            <Button
              onClick={processPayment}
              disabled={cart.length === 0}
              className="w-full h-12 bg-gradient-primary"
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Finalizar Venda
            </Button>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={printReceipt}
                disabled={cart.length === 0}
                className="flex-1 h-10"
              >
                <Printer className="w-4 h-4 mr-2" />
                Imprimir
              </Button>
              
              <Button
                variant="outline"
                onClick={clearCart}
                disabled={cart.length === 0}
                className="flex-1 h-10"
              >
                Limpar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}