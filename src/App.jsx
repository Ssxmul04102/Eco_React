import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <main className="min-h-dvh bg-gradient-to-r from-[#0072ff] via-[#7d5fff] to-[#00c9a7] bg-[length:200%_200%] animate-gradient flex flex-col items-center">
      <Navbar />

      {/* Secciones en orden */}
      <section id="inicio" className="w-full flex items-center justify-center py-20">
        <Hero />
      </section>

      <section id="servicios" className="w-full flex items-center justify-center py-24">
        <Services />
      </section>

      <section id="nosotros" className="w-full flex items-center justify-center py-24">
        <About />
      </section>

      <section id="contacto" className="w-full flex items-center justify-center py-24">
        <Contact />
      </section>

      <Footer />
    </main>
  )
}
