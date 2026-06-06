import Navbar from '../../components/layout/Navbar'
import Hero from './Hero'
import Servicios from './Servicios'
import Cotizador from './Cotizador'
import Testimonios from './Testimonios'
import Contacto from './Contacto'
import Footer from '../../components/layout/Footer'

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Servicios />
      <Cotizador />
      <Testimonios />
      <Contacto />
      <Footer />
    </main>
  )
}