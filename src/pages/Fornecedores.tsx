import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Truck, Plus, Search, Edit, Trash2, Phone, Mail } from "lucide-react"

export default function Fornecedores() {
  const fornecedores = [
    { 
      id: 1, 
      nome: "Distribuidora Brahma SP", 
      cnpj: "12.345.678/0001-90", 
      telefone: "(11) 99999-9999",
      email: "vendas@brahmasp.com.br",
      cidade: "São Paulo - SP",
      produtos: 25
    },
    { 
      id: 2, 
      nome: "Coca-Cola FEMSA", 
      cnpj: "98.765.432/0001-10", 
      telefone: "(11) 88888-8888",
      email: "pedidos@cocacola.com.br",
      cidade: "São Paulo - SP",
      produtos: 18
    },
    { 
      id: 3, 
      nome: "Crystal Águas", 
      cnpj: "45.678.912/0001-33", 
      telefone: "(11) 77777-7777",
      email: "comercial@crystal.com.br",
      cidade: "Ribeirão Preto - SP",
      produtos: 8
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Fornecedores</h1>
          <p className="text-muted-foreground">Gerencie seus fornecedores</p>
        </div>
        <Button className="gap-2 bg-gradient-primary">
          <Plus className="w-4 h-4" />
          Novo Fornecedor
        </Button>
      </div>

      <Card className="shadow-medium">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Truck className="w-5 h-5" />
              Lista de Fornecedores
            </CardTitle>
            <div className="flex gap-2">
              <Input placeholder="Buscar fornecedor..." className="w-64" />
              <Button variant="outline">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {fornecedores.map((fornecedor) => (
              <Card key={fornecedor.id} className="shadow-soft hover:shadow-medium transition-all">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground text-lg">{fornecedor.nome}</h3>
                        <p className="text-sm text-muted-foreground font-mono">{fornecedor.cnpj}</p>
                      </div>
                      <div className="flex gap-1">
                        <Button size="sm" variant="ghost">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span>{fornecedor.telefone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{fornecedor.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Truck className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{fornecedor.cidade}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2 border-t">
                      <div className="px-3 py-1 bg-primary/10 rounded-md">
                        <span className="text-sm font-medium text-primary">{fornecedor.produtos} produtos</span>
                      </div>
                      <Button size="sm" variant="outline">
                        Ver Produtos
                      </Button>
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