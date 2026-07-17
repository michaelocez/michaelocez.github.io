import './App.css'

import AboutSection from './components/AboutSection'
import BackgroundEffects from './components/BackgroundEffects'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import usePointerGlow from './hooks/usePointerGlow'

function App() {
  const handlePointerMove = usePointerGlow()

  return (
    <div
      className="site-shell min-h-screen overflow-x-hidden"
      onPointerMove={handlePointerMove}
    >
      <BackgroundEffects />
      <Header />

      <main id="top">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
