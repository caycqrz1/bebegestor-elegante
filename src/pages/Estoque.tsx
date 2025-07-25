import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Archive, Plus, Search, TrendingDown, AlertTriangle, Package } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Estoque() {
  const produtos = [
    { id: 1, nome: "Cerveja Brahma 350ml", categoria: "Cervejas", estoque: 120, minimo: 50, maximo: 200, status: "normal" },
    { id: 2, nome: "Refrigerante Coca-Cola 2L", categoria: "Refrigerantes", estoque: 45, minimo: 30, maximo: 100, status: "normal" },
    { id: 3, nome: "Água Mineral Crystal 500ml", categoria: "Águas", estoque: 200, minimo: 100, maximo: 300, status: "normal" },
    { id: 4, nome: "Energético Red Bull 250ml", categoria: "Energéticos", estoque: 15, minimo: 20, maximo: 80, status: "baixo" },
    { id: 5, nome: "Cerveja Skol 350ml", categoria: "Cervejas", estoque: 8, minimo: 30, maximo: 150, status: "critico" },
  ]

  const getStatusBadge = (status: string, estoque: number, minimo: number) => {
    if (status === "critico" || estoque < minimo * 0.5) {
      return <Badge variant="destructive">Crítico</Badge>
    }
    if (status === "baixo" || estoque < minimo) {
      return <Badge variant="secondary">Baixo</Badge>
    }
    return <Badge variant="default">Normal</Badge>
  }

  const produtosBaixoEstoque = produtos.filter(p => p.estoque < p.minimo).length
  const produtosCriticos = produtos.filter(p => p.estoque < p.minimo * 0.5).length

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Estoque</h1>
          <p className="text-muted-foreground">Controle e monitoramento de estoque</p>
        </div>
        <Button className="gap-2 bg-gradient-primary">
          <Plus className="w-4 h-4" />
          Entrada de Estoque
        </Button>
      </div>

      {/* Alertas */}
      {(produtosBaixoEstoque > 0 || produtosCriticos > 0) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {produtosCriticos > 0 && (
            <Card className="border-destructive bg-destructive/5 shadow-medium">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                  <div>
                    <h3 className="font-semibold text-destructive">Estoque Crítico</h3>
                    <p className="text-sm text-muted-foreground">{produtosCriticos} produtos com estoque muito baixo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          {produtosBaixoEstoque > 0 && (
            <Card className="border-warning bg-warning/5 shadow-medium">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <TrendingDown className="w-8 h-8 text-warning" />
                  <div>
                    <h3 className="font-semibold text-warning">Estoque Baixo</h3>
                    <p className="text-sm text-muted-foreground">{produtosBaixoEstoque} produtos abaixo do mínimo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      <Card className="shadow-medium">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Archive className="w-5 h-5" />
              Controle de Estoque
            </CardTitle>
            <div className="flex gap-2">
              <Button variant="outline">
                <Package className="w-4 h-4" />
                Relatório
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
                  <th className="text-left p-2">Categoria</th>
                  <th className="text-left p-2">Estoque Atual</th>
                  <th className="text-left p-2">Mínimo</th>
                  <th className="text-left p-2">Máximo</th>
                  <th className="text-left p-2">Status</th>
                  <th className="text-left p-2">Ações</th>
                </tr>
              </thead>
              <tbody>
                {produtos.map((produto) => (
                  <tr key={produto.id} className="border-b hover:bg-muted/30">
                    <td className="p-2 font-medium">{produto.nome}</td>
                    <td className="p-2 text-muted-foreground">{produto.categoria}</td>
                    <td className="p-2">
                      <span className={`font-semibold ${
                        produto.estoque < produto.minimo * 0.5 ? 'text-destructive' :
                        produto.estoque < produto.minimo ? 'text-warning' : 'text-foreground'
                      }`}>
                        {produto.estoque} un
                      </span>
                    </td>
                    <td className="p-2 text-muted-foreground">{produto.minimo} un</td>
                    <td className="p-2 text-muted-foreground">{produto.maximo} un</td>
                    <td className="p-2">
                      {getStatusBadge(produto.status, produto.estoque, produto.minimo)}
                    </td>
                    <td className="p-2">
                      <Button size="sm" variant="outline">
                        Ajustar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}