import Navigation from './sections/Navigation'
import Hero from './sections/Hero'
import Services from './sections/Services'
import CaseStudies from './sections/CaseStudies'
import Process from './sections/Process'
import Blog from './sections/Blog'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-ascend-black transition-colors duration-300">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <Process />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}

export default App
