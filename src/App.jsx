import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-primary text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
