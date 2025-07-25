import { ReactNode } from "react"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { UserCheck, Bell, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 shadow-soft">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="p-2 hover:bg-muted rounded-md transition-colors" />
              <div>
                <h2 className="font-semibold text-foreground">Sistema de Gestão</h2>
                <p className="text-sm text-muted-foreground">Distribuidora de Bebidas</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="p-2">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Settings className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2 ml-4 pl-4 border-l border-border">
                <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="text-sm">
                  <p className="font-medium">Administrador</p>
                  <p className="text-muted-foreground">Online</p>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}