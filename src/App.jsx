import './App.css'
import { Card } from './components/Card/index.jsx'
import CardWrapper from './components/CardWrapper/index.jsx'
import { useFetch } from './hook/useFetchData.jsx'
import { Layout } from './Layout/Layout/Layot.jsx'
import { Autos } from './pages/Autos/index.jsx'
import Home from './pages/Home/index.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path="/autos/:id" element={<Autos />} />
          <Route path='/autos' element={<CardWrapper />} />
        </Route>
        <Route path='/*' element={<><p>404Not Found</p></>} />

      </Routes>
    </Router>

  )
}

export default App
