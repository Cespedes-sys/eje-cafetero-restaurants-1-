import { Button } from "@/components/ui/button"
import { MapPin, Star, Coffee } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                <Coffee className="h-4 w-4" />
                Descubre el Eje Cafetero
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                Encuentra los mejores <span className="text-primary">restaurantes</span> del{" "}
                <span className="text-secondary">Eje Cafetero</span> con{" "}
                <span className="text-primary">A Puebliar</span>
              </h1>
              <p className="text-lg text-muted-foreground text-pretty max-w-lg">
                Descubre sabores auténticos en Caldas, Quindío y Risaralda. Conecta con la cultura local a través de
                experiencias gastronómicas únicas en nuestra plataforma web.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <MapPin className="mr-2 h-5 w-5" />
                Explorar Restaurantes
              </Button>
              <Button size="lg" variant="outline">
                Ver Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Restaurantes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">50K+</div>
                <div className="text-sm text-muted-foreground">Usuarios</div>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-bold text-accent">4.8</span>
                  <Star className="h-5 w-5 fill-accent text-accent" />
                </div>
                <div className="text-sm text-muted-foreground">Calificación</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-2xl bg-card border shadow-2xl overflow-hidden">
              <img
                src="/colombian-coffee-region-restaurant-with-traditiona.jpg"
                alt="Restaurante típico del Eje Cafetero"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">4.9 • 127 reseñas</span>
                </div>
                <h3 className="text-xl font-bold mb-1">La Fonda Paisa</h3>
                <p className="text-sm opacity-90">Manizales, Caldas</p>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -top-4 -right-4 bg-card border rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                  <Coffee className="h-4 w-4 text-secondary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-medium">Bandeja Paisa</div>
                  <div className="text-xs text-muted-foreground">$25.000</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-card border rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <div className="text-sm font-medium">A 2.5 km de ti</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
