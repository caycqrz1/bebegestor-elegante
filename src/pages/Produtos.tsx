import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Package, Plus, Search, Eye, Edit, Printer, QrCode, BarChart } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Produtos() {
  const produtos = [
    { 
      id: 1, 
      nome: "Cerveja Brahma 350ml", 
      categoria: "Cervejas", 
      preco: 4.50, 
      estoque: 120, 
      codigo: "7891149105465",
      custo: 2.80,
      fornecedor: "Ambev Distribuidora",
      vendas30d: 89
    },
    { 
      id: 2, 
      nome: "Refrigerante Coca-Cola 2L", 
      categoria: "Refrigerantes", 
      preco: 7.50, 
      estoque: 45, 
      codigo: "7894900011517",
      custo: 4.20,
      fornecedor: "Coca-Cola FEMSA",
      vendas30d: 34
    },
    { 
      id: 3, 
      nome: "Água Mineral Crystal 500ml", 
      categoria: "Águas", 
      preco: 2.50, 
      estoque: 200, 
      codigo: "7891000100127",
      custo: 1.20,
      fornecedor: "Crystal Distribuidora",
      vendas30d: 156
    },
    { 
      id: 4, 
      nome: "Energético Red Bull 250ml", 
      categoria: "Energéticos", 
      preco: 12.90, 
      estoque: 15, 
      codigo: "9002490100016",
      custo: 7.80,
      fornecedor: "Red Bull Brasil",
      vendas30d: 12
    },
  ]

  const getEstoqueStatus = (quantidade: number) => {
    if (quantidade <= 20) return { label: "Baixo", variant: "destructive" as const }
    if (quantidade <= 50) return { label: "Médio", variant: "secondary" as const }
    return { label: "Alto", variant: "default" as const }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Produtos</h1>
          <p className="text-muted-foreground">Gerencie seu catálogo de produtos</p>
        </div>
        <Button className="gap-2 bg-gradient-primary">
          <Plus className="w-4 h-4" />
          Novo Produto
        </Button>
      </div>

      <Card className="shadow-medium">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Package className="w-5 h-5" />
              Lista de Produtos
            </CardTitle>
            <div className="flex gap-2">
              <Button variant="outline">
                <Printer className="w-4 h-4" />
                Imprimir Lista
              </Button>
              <Input placeholder="Buscar produto..." className="w-64" />
              <Button variant="outline">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Produto</th>
                  <th className="text-left p-2">Código</th>
                  <th className="text-left p-2">Custo/Venda</th>
                  <th className="text-left p-2">Estoque</th>
                  <th className="text-left p-2">Vendas 30d</th>
                  <th className="text-left p-2">Status</th>
                  <th className="text-left p-2">Ações</th>
                </tr>
              </thead>
              <tbody>
                {produtos.map((produto) => {
                  const estoqueStatus = getEstoqueStatus(produto.estoque)
                  const margem = ((produto.preco - produto.custo) / produto.custo * 100).toFixed(1)
                  return (
                    <tr key={produto.id} className="border-b hover:bg-muted/30">
                      <td className="p-2">
                        <div>
                          <p className="font-medium">{produto.nome}</p>
                          <p className="text-xs text-muted-foreground">{produto.categoria} • {produto.fornecedor}</p>
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="flex items-center gap-2">
                          <code className="text-xs bg-muted px-2 py-1">{produto.codigo}</code>
                          <Button size="sm" variant="outline" className="h-6 w-6 p-0">
                            <QrCode className="w-3 h-3" />
                          </Button>
                        </div>
                      </td>
                      <td className="p-2">
                        <div>
                          <p className="text-sm text-muted-foreground">R$ {produto.custo.toFixed(2)}</p>
                          <p className="font-semibold">R$ {produto.preco.toFixed(2)}</p>
                          <p className="text-xs text-success">+{margem}%</p>
                        </div>
                      </td>
                      <td className="p-2">
                        <span className={`font-medium ${produto.estoque < 20 ? 'text-warning' : 'text-foreground'}`}>
                          {produto.estoque} un
                        </span>
                      </td>
                      <td className="p-2">
                        <div className="flex items-center gap-1">
                          <BarChart className="w-3 h-3 text-muted-foreground" />
                          <span className="text-sm font-medium">{produto.vendas30d}</span>
                        </div>
                      </td>
                      <td className="p-2">
                        <Badge variant={estoqueStatus.variant}>
                          {estoqueStatus.label}
                        </Badge>
                      </td>
                      <td className="p-2">
                        <div className="flex gap-1">
                          <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                            <Eye className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                            <Printer className="w-3 h-3" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}