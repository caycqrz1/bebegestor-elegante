import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tags, Plus, Search, Edit, Trash2 } from "lucide-react"

export default function Categorias() {
  const categorias = [
    { id: 1, nome: "Cervejas", descricao: "Bebidas alcoólicas fermentadas", produtos: 45 },
    { id: 2, nome: "Refrigerantes", descricao: "Bebidas não alcoólicas gaseificadas", produtos: 28 },
    { id: 3, nome: "Águas", descricao: "Águas minerais e com sabor", produtos: 12 },
    { id: 4, nome: "Energéticos", descricao: "Bebidas energéticas", produtos: 8 },
    { id: 5, nome: "Sucos", descricao: "Sucos naturais e industrializados", produtos: 18 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Categorias</h1>
          <p className="text-muted-foreground">Organize seus produtos por categoria</p>
        </div>
        <Button className="gap-2 bg-gradient-primary">
          <Plus className="w-4 h-4" />
          Nova Categoria
        </Button>
      </div>

      <Card className="shadow-medium">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Tags className="w-5 h-5" />
              Lista de Categorias
            </CardTitle>
            <div className="flex gap-2">
              <Input placeholder="Buscar categoria..." className="w-64" />
              <Button variant="outline">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categorias.map((categoria) => (
              <Card key={categoria.id} className="shadow-soft hover:shadow-medium transition-all">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-foreground">{categoria.nome}</h3>
                      <div className="flex gap-1">
                        <Button size="sm" variant="ghost">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{categoria.descricao}</p>
                    <div className="flex items-center gap-2">
                      <div className="px-2 py-1 bg-primary/10 rounded-md">
                        <span className="text-sm font-medium text-primary">{categoria.produtos} produtos</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}