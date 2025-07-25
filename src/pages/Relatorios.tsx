import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Download, TrendingUp, DollarSign, ShoppingCart, Users, Calendar } from "lucide-react"

export default function Relatorios() {
  const relatorios = [
    {
      titulo: "Vendas por Período",
      descricao: "Relatório detalhado de vendas com filtro por data",
      icon: ShoppingCart,
      tipo: "vendas"
    },
    {
      titulo: "Faturamento Mensal",
      descricao: "Análise de faturamento e lucro por mês",
      icon: DollarSign,
      tipo: "financeiro"
    },
    {
      titulo: "Produtos Mais Vendidos",
      descricao: "Ranking dos produtos com melhor desempenho",
      icon: TrendingUp,
      tipo: "produtos"
    },
    {
      titulo: "Clientes Ativos",
      descricao: "Lista de clientes com histórico de compras",
      icon: Users,
      tipo: "clientes"
    },
    {
      titulo: "Movimentação de Estoque",
      descricao: "Entradas e saídas de produtos do estoque",
      icon: BookOpen,
      tipo: "estoque"
    },
    {
      titulo: "Fechamento de Caixa",
      descricao: "Histórico completo de fechamentos diários",
      icon: Calendar,
      tipo: "caixa"
    }
  ]

  const metricas = [
    { titulo: "Vendas Hoje", valor: "R$ 12.450,00", crescimento: "+12%" },
    { titulo: "Faturamento Mensal", valor: "R$ 285.000,00", crescimento: "+8%" },
    { titulo: "Ticket Médio", valor: "R$ 85,40", crescimento: "-3%" },
    { titulo: "Produtos Vendidos", valor: "1.245", crescimento: "+15%" }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Relatórios</h1>
          <p className="text-muted-foreground">Análises e relatórios do seu negócio</p>
        </div>
        <Button className="gap-2 bg-gradient-primary">
          <Download className="w-4 h-4" />
          Exportar Dados
        </Button>
      </div>

      {/* Métricas Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricas.map((metrica, index) => (
          <Card key={index} className="shadow-medium">
            <CardContent className="p-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{metrica.titulo}</p>
                <p className="text-2xl font-bold">{metrica.valor}</p>
                <div className="flex items-center gap-1">
                  <span className={`text-sm font-medium ${
                    metrica.crescimento.startsWith('+') ? 'text-success' : 'text-destructive'
                  }`}>
                    {metrica.crescimento}
                  </span>
                  <span className="text-sm text-muted-foreground">vs período anterior</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Lista de Relatórios */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Relatórios Disponíveis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatorios.map((relatorio, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-all cursor-pointer">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <relatorio.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{relatorio.titulo}</h3>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">
                          {relatorio.tipo}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">{relatorio.descricao}</p>
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        Visualizar
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Gráfico Placeholder */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Vendas dos Últimos 30 Dias
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-muted/30 rounded-md flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 mx-auto text-muted-foreground mb-2" />
              <p className="text-muted-foreground">Gráfico de vendas será exibido aqui</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}