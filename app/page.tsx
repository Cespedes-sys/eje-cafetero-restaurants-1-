import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedRestaurants } from "@/components/featured-restaurants"
import { HowItWorks } from "@/components/how-it-works"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedRestaurants />
      <HowItWorks />
      <Footer />
    </main>
  )
}
