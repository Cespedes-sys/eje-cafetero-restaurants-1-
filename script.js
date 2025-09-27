// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Efecto de scroll para el header
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(255, 255, 255, 0.98)"
    header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.background = "rgba(255, 255, 255, 0.95)"
    header.style.boxShadow = "none"
  }
})

// Animación de entrada para las tarjetas de restaurantes
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Aplicar animación a las tarjetas cuando se cargan
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".restaurant-card, .step")
  cards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(card)
  })
})

// Funcionalidad para los botones de restaurantes
document.querySelectorAll(".restaurant-button").forEach((button) => {
  button.addEventListener("click", function () {
    const restaurantName = this.closest(".restaurant-card").querySelector("h3").textContent
    alert(`¡Próximamente podrás ver más detalles de ${restaurantName}!`)
  })
})

// Funcionalidad para los botones principales
document.querySelectorAll(".primary-button, .secondary-button").forEach((button) => {
  button.addEventListener("click", function () {
    if (this.textContent.includes("Explorar")) {
      document.querySelector("#restaurantes").scrollIntoView({
        behavior: "smooth",
      })
    } else if (this.textContent.includes("Demo")) {
      alert("¡Demo de A Publiar próximamente disponible!")
    }
  })
})
