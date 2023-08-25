import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Pdf from './components/Pdf'
import App from './App'

function Rutas () {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<App />} />
          <Route exact path='/curriculum_PDF' element={<Pdf />} />

        </Routes>
      </Router>

    </>
  )
}

export default Rutas
