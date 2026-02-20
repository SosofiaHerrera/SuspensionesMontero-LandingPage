import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Servicios } from './components/Servicios'
import { Clientes } from './components/Clientes'
import { Nosotros } from './components/Nosotros'
import { Contacto } from './components/Contacto'
import { Preguntas } from './components/Preguntas'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { FlotanteWhatsapp } from './components/FlotanteWhatsapp'


const App: React.FC = () => {
  return (
    <div className="bg-[#0e0e0e]">
      <Header />
      <main className="md:pt-24">
        <Hero />
        <Servicios />
        <Clientes />
        <Nosotros />
        <Contacto />
        <Preguntas />
        <FinalCTA />
        <Footer />
        <FlotanteWhatsapp />
      </main>
    </div>
  )
}

export default App
