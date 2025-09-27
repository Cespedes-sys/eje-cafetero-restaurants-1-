import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <img src="/logo-a-puebliar.jpg" alt="A Puebliar Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-primary">A Puebliar</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#inicio" className="text-sm font-medium hover:text-primary transition-colors">
            Inicio
          </a>
          <a href="#restaurantes" className="text-sm font-medium hover:text-primary transition-colors">
            Restaurantes
          </a>
          <a href="#como-funciona" className="text-sm font-medium hover:text-primary transition-colors">
            Cómo Funciona
          </a>
          <a href="#contacto" className="text-sm font-medium hover:text-primary transition-colors">
            Contacto
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:inline-flex bg-transparent">
            Iniciar Sesión
          </Button>
          <Button className="bg-secondary hover:bg-secondary/90">Explorar Ahora</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
