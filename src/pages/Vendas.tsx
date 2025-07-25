import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Scan, Plus, Search } from "lucide-react"

export default function Vendas() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Vendas</h1>
          <p className="text-muted-foreground">Sistema de vendas rápido e intuitivo</p>
        </div>
        <Button className="gap-2 bg-gradient-primary">
          <Plus className="w-4 h-4" />
          Nova Venda
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Produto Scanner */}
        <Card className="lg:col-span-2 shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scan className="w-5 h-5" />
              Adicionar Produtos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input placeholder="Código de barras ou nome do produto" className="flex-1" />
              <Button className="px-6">
                <Search className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="bg-muted/30 rounded-md p-4 text-center">
              <Scan className="w-12 h-12 mx-auto text-muted-foreground mb-2" />
              <p className="text-muted-foreground">Use o leitor de código de barras ou digite o produto</p>
            </div>
          </CardContent>
        </Card>

        {/* Carrinho */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Carrinho
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center py-8">
                <ShoppingCart className="w-12 h-12 mx-auto text-muted-foreground mb-2" />
                <p className="text-muted-foreground">Carrinho vazio</p>
              </div>
              
              <div className="space-y-2 pt-4 border-t">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>R$ 0,00</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Total:</span>
                  <span>R$ 0,00</span>
                </div>
              </div>
              
              <Button className="w-full bg-gradient-primary" disabled>
                Finalizar Venda
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}