
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import CatalogoProducts from './pages/CatalogoProducts'

import ContactoPage from './pages/ContactoPage'
import CatalogoId from './pages/CatalogoId'
import HeaderNav from './components/shared/HeaderNav'

function App() {
 

  return (
    <>
     <h1>GASTRONOMIA</h1>
     <HeaderNav/>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/catalogo-de-productos' element={<CatalogoProducts/>}/>
      <Route path='/catalogo-de-productos/:id' element={<CatalogoId/>}/>
      <Route path='/contacto' element={<ContactoPage/>}/>
     </Routes>
    </>
  )
}

export default App
