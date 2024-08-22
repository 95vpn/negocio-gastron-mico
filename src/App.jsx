
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import CatalogoProducts from './pages/CatalogoProducts'

import ContactoPage from './pages/ContactoPage'
import CatalogoId from './pages/CatalogoId'
import HeaderNav from './components/shared/HeaderNav'
import Footer from './components/shared/Footer'

function App() {
 

  return (
    <div className='container'>
      <div class="envoltura">
                <div></div> 
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
     <HeaderNav/>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/catalogo-de-productos' element={<CatalogoProducts/>}/>
      <Route path='/catalogo-de-productos/:id' element={<CatalogoId/>}/>
      <Route path='/contacto' element={<ContactoPage/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
