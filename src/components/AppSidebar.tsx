import { NavLink, useLocation } from "react-router-dom"
import {
  BarChart3,
  Package,
  Users,
  Truck,
  ShoppingCart,
  DollarSign,
  Settings,
  Archive,
  BookOpen,
  UserCheck,
  Tags,
  Receipt
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const navigationItems = [
  { 
    title: "Dashboard", 
    url: "/", 
    icon: BarChart3,
    group: "principal"
  },
  { 
    title: "Vendas", 
    url: "/vendas", 
    icon: ShoppingCart,
    group: "vendas"
  },
  { 
    title: "Caixa", 
    url: "/caixa", 
    icon: DollarSign,
    group: "vendas"
  },
  { 
    title: "Clientes", 
    url: "/clientes", 
    icon: Users,
    group: "gestao"
  },
  { 
    title: "Produtos", 
    url: "/produtos", 
    icon: Package,
    group: "gestao"
  },
  { 
    title: "Categorias", 
    url: "/categorias", 
    icon: Tags,
    group: "gestao"
  },
  { 
    title: "Fornecedores", 
    url: "/fornecedores", 
    icon: Truck,
    group: "gestao"
  },
  { 
    title: "Estoque", 
    url: "/estoque", 
    icon: Archive,
    group: "gestao"
  },
  { 
    title: "Relatórios", 
    url: "/relatorios", 
    icon: BookOpen,
    group: "relatorios"
  }
]

const groupedItems = {
  principal: navigationItems.filter(item => item.group === "principal"),
  vendas: navigationItems.filter(item => item.group === "vendas"),
  gestao: navigationItems.filter(item => item.group === "gestao"),
  relatorios: navigationItems.filter(item => item.group === "relatorios")
}

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const collapsed = state === "collapsed"

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/"
    return currentPath.startsWith(path)
  }

  const getNavClassName = (active: boolean) =>
    `flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 ${
      active
        ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium shadow-soft"
        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
    }`

  return (
    <Sidebar className="border-r border-sidebar-border bg-sidebar">
      <SidebarContent className="p-4">
        {/* Logo */}
        <div className="mb-8 px-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-md flex items-center justify-center">
              <Receipt className="w-5 h-5 text-white" />
            </div>
            {!collapsed && (
              <div>
                <h1 className="font-bold text-sidebar-foreground">DistribuidoraPro</h1>
                <p className="text-xs text-sidebar-foreground/60">Sistema de Gestão</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Groups */}
        <div className="space-y-6">
          {/* Principal */}
          <SidebarGroup>
            {!collapsed && (
              <SidebarGroupLabel className="text-xs font-semibold text-sidebar-foreground/80 uppercase tracking-wider mb-2">
                Principal
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                {groupedItems.principal.map((item) => (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to={item.url} 
                        className={getNavClassName(isActive(item.url))}
                      >
                        <item.icon className="w-5 h-5 flex-shrink-0" />
                        {!collapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Vendas */}
          <SidebarGroup>
            {!collapsed && (
              <SidebarGroupLabel className="text-xs font-semibold text-sidebar-foreground/80 uppercase tracking-wider mb-2">
                Vendas
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                {groupedItems.vendas.map((item) => (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to={item.url} 
                        className={getNavClassName(isActive(item.url))}
                      >
                        <item.icon className="w-5 h-5 flex-shrink-0" />
                        {!collapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Gestão */}
          <SidebarGroup>
            {!collapsed && (
              <SidebarGroupLabel className="text-xs font-semibold text-sidebar-foreground/80 uppercase tracking-wider mb-2">
                Gestão
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                {groupedItems.gestao.map((item) => (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to={item.url} 
                        className={getNavClassName(isActive(item.url))}
                      >
                        <item.icon className="w-5 h-5 flex-shrink-0" />
                        {!collapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Relatórios */}
          <SidebarGroup>
            {!collapsed && (
              <SidebarGroupLabel className="text-xs font-semibold text-sidebar-foreground/80 uppercase tracking-wider mb-2">
                Relatórios
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                {groupedItems.relatorios.map((item) => (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to={item.url} 
                        className={getNavClassName(isActive(item.url))}
                      >
                        <item.icon className="w-5 h-5 flex-shrink-0" />
                        {!collapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}