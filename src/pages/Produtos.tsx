import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Package, Plus, Search, Edit, Trash2, Filter } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Produtos() {
  const produtos = [
    { id: 1, nome: "Cerveja Brahma 350ml", categoria: "Cervejas", preco: 4.50, estoque: 120, codigo: "7891991010016" },
    { id: 2, nome: "Refrigerante Coca-Cola 2L", categoria: "Refrigerantes", preco: 8.90, estoque: 45, codigo: "7894900011517" },
    { id: 3, nome: "Água Mineral Crystal 500ml", categoria: "Águas", preco: 2.50, estoque: 200, codigo: "7891991234567" },
    { id: 4, nome: "Energético Red Bull 250ml", categoria: "Energéticos", preco: 12.90, estoque: 15, codigo: "9002490100016" },
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
                <Filter className="w-4 h-4" />
                Filtros
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
                  <th className="text-left p-2">Código</th>
                  <th className="text-left p-2">Produto</th>
                  <th className="text-left p-2">Categoria</th>
                  <th className="text-left p-2">Preço</th>
                  <th className="text-left p-2">Estoque</th>
                  <th className="text-left p-2">Status</th>
                  <th className="text-left p-2">Ações</th>
                </tr>
              </thead>
              <tbody>
                {produtos.map((produto) => {
                  const estoqueStatus = getEstoqueStatus(produto.estoque)
                  return (
                    <tr key={produto.id} className="border-b hover:bg-muted/30">
                      <td className="p-2 font-mono text-sm">{produto.codigo}</td>
                      <td className="p-2 font-medium">{produto.nome}</td>
                      <td className="p-2 text-muted-foreground">{produto.categoria}</td>
                      <td className="p-2 font-semibold">R$ {produto.preco.toFixed(2)}</td>
                      <td className="p-2">{produto.estoque} un</td>
                      <td className="p-2">
                        <Badge variant={estoqueStatus.variant}>
                          {estoqueStatus.label}
                        </Badge>
                      </td>
                      <td className="p-2">
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Trash2 className="w-4 h-4" />
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