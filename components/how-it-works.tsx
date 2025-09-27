import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Search, Star, Coffee } from "lucide-react"

const steps = [
  {
    icon: MapPin,
    title: "Explora tu ubicación",
    description: "Descubre restaurantes cerca de ti en el Eje Cafetero. Filtra por distancia, tipo de comida y precio.",
    color: "text-primary",
  },
  {
    icon: Search,
    title: "Encuentra tu sabor",
    description:
      "Navega por menús auténticos con recomendaciones locales. Ve precios, calificaciones y especialidades.",
    color: "text-secondary",
  },
  {
    icon: Star,
    title: "Lee experiencias reales",
    description: "Conoce las opiniones de otros viajeros y locales. Encuentra los platos más recomendados.",
    color: "text-accent",
  },
  {
    icon: Coffee,
    title: "Vive la experiencia",
    description: "Disfruta de sabores únicos y conecta con la cultura cafetera a través de cada comida.",
    color: "text-primary",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Cómo Funciona
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Tu guía gastronómica del <span className="text-secondary">Eje Cafetero</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Descubre nuevos sabores y lugares auténticos en cuatro simples pasos. La comida como puente hacia la cultura
            local.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card key={index} className="relative text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <div
                      className={`inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted ${step.color}`}
                    >
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-pretty">{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
            ¿Listo para descubrir los sabores del Eje Cafetero?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Únete a miles de personas que ya han descubierto lugares increíbles y han vivido experiencias gastronómicas
            únicas en nuestra región.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors">
              Comenzar Ahora
            </button>
            <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 rounded-lg font-medium transition-colors">
              Ver Restaurantes
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
