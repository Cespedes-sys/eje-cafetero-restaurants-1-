import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Clock, DollarSign } from "lucide-react"

const restaurants = [
  {
    id: 1,
    name: "El Rincón Caldense",
    location: "Manizales, Caldas",
    rating: 4.8,
    reviews: 234,
    distance: "1.2 km",
    image: "/traditional-colombian-restaurant-interior-with-woo.jpg",
    specialties: ["Sancocho", "Arepa de Chócolo", "Café Especial"],
    prices: ["$18.000", "$12.000", "$8.000"],
    category: "Tradicional",
    openTime: "7:00 AM - 10:00 PM",
  },
  {
    id: 2,
    name: "Café de la Montaña",
    location: "Armenia, Quindío",
    rating: 4.9,
    reviews: 189,
    distance: "3.5 km",
    image: "/modern-coffee-shop-in-colombian-mountains-with-spe.jpg",
    specialties: ["Trucha al Ajillo", "Patacones", "Café de Origen"],
    prices: ["$32.000", "$15.000", "$12.000"],
    category: "Gourmet",
    openTime: "6:00 AM - 11:00 PM",
  },
  {
    id: 3,
    name: "La Hacienda Risaraldense",
    location: "Pereira, Risaralda",
    rating: 4.7,
    reviews: 156,
    distance: "5.1 km",
    image: "/rustic-colombian-hacienda-restaurant-with-traditio.jpg",
    specialties: ["Lechona", "Tamales", "Mazamorra"],
    prices: ["$28.000", "$16.000", "$10.000"],
    category: "Regional",
    openTime: "8:00 AM - 9:00 PM",
  },
]

export function FeaturedRestaurants() {
  return (
    <section id="restaurantes" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Restaurantes Destacados
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Sabores auténticos del <span className="text-primary">Eje Cafetero</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Descubre los restaurantes más recomendados por locales y viajeros. Cada lugar cuenta una historia a través
            de sus sabores únicos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
            <Card key={restaurant.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={restaurant.image || "/placeholder.svg"}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-background/90 text-foreground hover:bg-background/90">
                  {restaurant.category}
                </Badge>
                <div className="absolute top-3 right-3 bg-background/90 rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium">{restaurant.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{restaurant.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {restaurant.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {restaurant.distance}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2 text-sm">Especialidades Recomendadas:</h4>
                    <div className="space-y-2">
                      {restaurant.specialties.map((specialty, index) => (
                        <div key={index} className="flex items-center justify-between text-sm">
                          <span className="text-foreground">{specialty}</span>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <DollarSign className="h-3 w-3" />
                            <span className="font-medium">{restaurant.prices[index]}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t">
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{restaurant.rating}</span>
                      <span className="text-muted-foreground">({restaurant.reviews} reseñas)</span>
                    </div>
                    <Button size="sm" variant="outline">
                      Ver Menú
                    </Button>
                  </div>

                  <div className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    Abierto: {restaurant.openTime}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90">
            Ver Todos los Restaurantes
          </Button>
        </div>
      </div>
    </section>
  )
}
