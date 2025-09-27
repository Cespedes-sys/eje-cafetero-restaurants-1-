import { MapPin, Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacto" className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/logo-a-puebliar.jpg" alt="A Puebliar Logo" className="h-8 w-8" />
              <span className="text-xl font-bold text-primary">A Puebliar</span>
            </div>
            <p className="text-muted-foreground text-pretty">
              Conectando viajeros y locales con los mejores sabores del Eje Cafetero colombiano a través de nuestra
              plataforma web.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Explora</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Restaurantes en Caldas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Restaurantes en Quindío
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Restaurantes en Risaralda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Cafeterías Especiales
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Soporte</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contacto</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hola@apuebliar.co</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+57 300 123 4567</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-sm">
                  Manizales, Caldas
                  <br />
                  Colombia
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 A Puebliar. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
