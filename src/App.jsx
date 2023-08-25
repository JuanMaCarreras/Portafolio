import Nav from './components/Nav'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import './App.css'

function App () {
  return (
    <div className=' bg-bg dark:bg-dark'>
      <Nav />
      <div className='pt-16'>
        <Home />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </div>

  )
}

export default App
