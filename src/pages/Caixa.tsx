import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DollarSign, Clock, TrendingUp, Calculator, Mail, FileDown, Printer, Eye } from "lucide-react"

export default function Caixa() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Caixa</h1>
          <p className="text-muted-foreground">Controle de abertura e fechamento</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2">
            <Mail className="w-4 h-4" />
            Enviar por Email
          </Button>
          <Button variant="outline" className="gap-2">
            <FileDown className="w-4 h-4" />
            Exportar Relatório
          </Button>
          <Button variant="outline" className="gap-2">
            <Calculator className="w-4 h-4" />
            Sangria
          </Button>
          <Button className="gap-2 bg-gradient-primary">
            <DollarSign className="w-4 h-4" />
            Abrir Caixa
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-medium">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="w-5 h-5 text-success" />
              Status do Caixa
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-success/10 border border-success/20 rounded-md text-center">
                <p className="text-2xl font-bold text-success">ABERTO</p>
                <p className="text-sm text-muted-foreground">Desde 08:00</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Abertura:</span>
                  <span className="text-sm font-medium">R$ 200,00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Vendas:</span>
                  <span className="text-sm font-medium">R$ 12.450,00</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span className="font-medium">Total:</span>
                  <span className="font-bold text-primary">R$ 12.650,00</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-medium">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Resumo do Dia
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-muted/30 rounded-md">
                <span className="text-sm">Vendas realizadas</span>
                <span className="font-semibold">23</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/30 rounded-md">
                <span className="text-sm">Ticket médio</span>
                <span className="font-semibold">R$ 85,40</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/30 rounded-md">
                <span className="text-sm">Dinheiro</span>
                <span className="font-semibold">R$ 8.200,00</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted/30 rounded-md">
                <span className="text-sm">Cartão</span>
                <span className="font-semibold">R$ 4.250,00</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-medium">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Fechamento de Caixa</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Valor em caixa (contagem)</label>
                <Input placeholder="R$ 0,00" className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">Observações</label>
                <Input placeholder="Observações do fechamento" className="mt-1" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Diferença:</span>
                  <span className="font-medium">R$ 0,00</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-primary">
                Fechar Caixa
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Histórico de Caixas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Data</th>
                  <th className="text-left p-2">Abertura</th>
                  <th className="text-left p-2">Fechamento</th>
                  <th className="text-left p-2">Valor Inicial</th>
                  <th className="text-left p-2">Vendas</th>
                  <th className="text-left p-2">Total Final</th>
                  <th className="text-left p-2">Diferença</th>
                  <th className="text-left p-2">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-muted/30">
                  <td className="p-2">23/07/2024</td>
                  <td className="p-2">08:00</td>
                  <td className="p-2">18:00</td>
                  <td className="p-2">R$ 200,00</td>
                  <td className="p-2">R$ 11.580,00</td>
                  <td className="p-2">R$ 11.780,00</td>
                  <td className="p-2 text-success">R$ 0,00</td>
                  <td className="p-2">
                    <div className="flex gap-1">
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                        <Eye className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                        <Printer className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                        <Mail className="w-3 h-3" />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/30">
                  <td className="p-2">22/07/2024</td>
                  <td className="p-2">08:00</td>
                  <td className="p-2">18:30</td>
                  <td className="p-2">R$ 200,00</td>
                  <td className="p-2">R$ 9.650,00</td>
                  <td className="p-2">R$ 9.850,00</td>
                  <td className="p-2 text-success">R$ 0,00</td>
                  <td className="p-2">
                    <div className="flex gap-1">
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                        <Eye className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                        <Printer className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                        <Mail className="w-3 h-3" />
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}