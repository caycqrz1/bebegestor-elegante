import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Users, Plus, Search, Edit, Trash2 } from "lucide-react"

export default function Clientes() {
  const clientes = [
    { id: 1, nome: "João Silva", email: "joao@email.com", telefone: "(11) 99999-9999", cidade: "São Paulo" },
    { id: 2, nome: "Maria Santos", email: "maria@email.com", telefone: "(11) 88888-8888", cidade: "São Paulo" },
    { id: 3, nome: "Pedro Costa", email: "pedro@email.com", telefone: "(11) 77777-7777", cidade: "Rio de Janeiro" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Clientes</h1>
          <p className="text-muted-foreground">Gerencie seus clientes</p>
        </div>
        <Button className="gap-2 bg-gradient-primary">
          <Plus className="w-4 h-4" />
          Novo Cliente
        </Button>
      </div>

      <Card className="shadow-medium">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Lista de Clientes
            </CardTitle>
            <div className="flex gap-2">
              <Input placeholder="Buscar cliente..." className="w-64" />
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
                  <th className="text-left p-2">Nome</th>
                  <th className="text-left p-2">E-mail</th>
                  <th className="text-left p-2">Telefone</th>
                  <th className="text-left p-2">Cidade</th>
                  <th className="text-left p-2">Ações</th>
                </tr>
              </thead>
              <tbody>
                {clientes.map((cliente) => (
                  <tr key={cliente.id} className="border-b hover:bg-muted/30">
                    <td className="p-2 font-medium">{cliente.nome}</td>
                    <td className="p-2 text-muted-foreground">{cliente.email}</td>
                    <td className="p-2">{cliente.telefone}</td>
                    <td className="p-2">{cliente.cidade}</td>
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
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}