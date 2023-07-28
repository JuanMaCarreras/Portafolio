import Nav from './components/Nav'
import Inicio from './components/Inicio'
// import Redes from './components/Redes'
import Proyectos from './components/Proyectos'
import Skills from './components/Skills'
import './App.css'

function App () {
  return (
    <>

      <Nav />
      <div className='pt-16'>
        <Inicio />
        {/* <Redes /> */}
        <Proyectos />
        <Skills />
      </div>
    </>
  )
}

export default App
