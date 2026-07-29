import Header from './components/Header'
import Hero from './components/Hero'
import TrustMarquee from './components/TrustMarquee'
import About from './components/About'
import Differentiators from './components/Differentiators'
import Treatments from './components/Treatments'
import Gallery from './components/Gallery'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Location from './components/Location'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustMarquee />
        <About />
        <Differentiators />
        <Treatments />
        <Gallery />
        <Team />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
