import { StatsCard } from "@/components/StatsCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Package, 
  TrendingUp,
  Calendar,
  Clock,
  AlertTriangle
} from "lucide-react"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Visão geral do seu negócio</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Calendar className="w-4 h-4" />
            Hoje
          </Button>
          <Button className="gap-2 bg-gradient-primary">
            <ShoppingCart className="w-4 h-4" />
            Nova Venda
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Vendas Hoje"
          value="R$ 12.450,00"
          subtitle="23 vendas realizadas"
          icon={DollarSign}
          trend={{ value: "12%", isPositive: true }}
        />
        <StatsCard
          title="Produtos Vendidos"
          value="156"
          subtitle="Unidades"
          icon={Package}
          trend={{ value: "8%", isPositive: true }}
        />
        <StatsCard
          title="Clientes Ativos"
          value="89"
          subtitle="Este mês"
          icon={Users}
          trend={{ value: "5%", isPositive: true }}
        />
        <StatsCard
          title="Ticket Médio"
          value="R$ 85,40"
          subtitle="Por venda"
          icon={TrendingUp}
          trend={{ value: "3%", isPositive: false }}
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Sales */}
        <Card className="lg:col-span-2 shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Vendas Recentes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: "#001234", cliente: "João Silva", valor: "R$ 245,80", tempo: "5 min atrás", status: "Concluída" },
                { id: "#001233", cliente: "Maria Santos", valor: "R$ 180,50", tempo: "12 min atrás", status: "Concluída" },
                { id: "#001232", cliente: "Pedro Costa", valor: "R$ 95,20", tempo: "18 min atrás", status: "Concluída" },
                { id: "#001231", cliente: "Ana Oliveira", valor: "R$ 320,15", tempo: "25 min atrás", status: "Concluída" },
              ].map((venda) => (
                <div key={venda.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-md">
                  <div className="space-y-1">
                    <p className="font-medium">{venda.cliente}</p>
                    <p className="text-sm text-muted-foreground">{venda.id} • {venda.tempo}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-success">{venda.valor}</p>
                    <p className="text-sm text-muted-foreground">{venda.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions & Alerts */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Ações Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-start gap-3 bg-gradient-primary">
                <ShoppingCart className="w-4 h-4" />
                Nova Venda
              </Button>
              <Button variant="outline" className="w-full justify-start gap-3">
                <Users className="w-4 h-4" />
                Cadastrar Cliente
              </Button>
              <Button variant="outline" className="w-full justify-start gap-3">
                <Package className="w-4 h-4" />
                Adicionar Produto
              </Button>
              <Button variant="outline" className="w-full justify-start gap-3">
                <DollarSign className="w-4 h-4" />
                Abrir Caixa
              </Button>
            </CardContent>
          </Card>

          {/* Alerts */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-warning" />
                Alertas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-warning/10 border border-warning/20 rounded-md">
                <p className="text-sm font-medium text-warning-foreground">Estoque Baixo</p>
                <p className="text-sm text-muted-foreground">5 produtos com estoque crítico</p>
              </div>
              <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                <p className="text-sm font-medium text-destructive-foreground">Produtos Vencidos</p>
                <p className="text-sm text-muted-foreground">2 produtos próximos ao vencimento</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Status do Caixa */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Status do Caixa
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-success/10 border border-success/20 rounded-md text-center">
              <p className="text-sm text-success-foreground">Status</p>
              <p className="text-lg font-semibold text-success">Aberto</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-md text-center">
              <p className="text-sm text-muted-foreground">Abertura</p>
              <p className="text-lg font-semibold">08:00</p>
            </div>
            <div className="p-4 bg-muted/30 rounded-md text-center">
              <p className="text-sm text-muted-foreground">Valor Inicial</p>
              <p className="text-lg font-semibold">R$ 200,00</p>
            </div>
            <div className="p-4 bg-primary/10 border border-primary/20 rounded-md text-center">
              <p className="text-sm text-primary-foreground">Total Atual</p>
              <p className="text-lg font-semibold text-primary">R$ 12.650,00</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}