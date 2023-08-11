import Nav from './components/Nav'
import Inicio from './components/Inicio'
import Proyectos from './components/Proyectos'
import Skills from './components/Skills'
import './App.css'

function App () {
  return (
    <div className=' bg-bg dark:bg-dark'>
      <Nav />
      <div className='pt-16'>
        <Inicio />
        <Proyectos />
        <Skills />
      </div>
    </div>

  )
}

export default App
