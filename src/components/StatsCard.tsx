import { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string
  subtitle?: string
  icon: LucideIcon
  trend?: {
    value: string
    isPositive: boolean
  }
  className?: string
}

export function StatsCard({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  trend, 
  className = "" 
}: StatsCardProps) {
  return (
    <Card className={`bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-300 ${className}`}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground font-medium">{title}</p>
            <p className="text-2xl font-bold text-foreground">{value}</p>
            {subtitle && (
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            )}
            {trend && (
              <div className="flex items-center gap-1">
                <span className={`text-sm font-medium ${
                  trend.isPositive ? 'text-success' : 'text-destructive'
                }`}>
                  {trend.isPositive ? '+' : ''}{trend.value}
                </span>
                <span className="text-sm text-muted-foreground">vs ontem</span>
              </div>
            )}
          </div>
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-soft">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}