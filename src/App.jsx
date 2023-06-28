import { useState } from 'react'
import './App.css'
import GlobalProvider, { GlobalContext } from './context/GlobalContext'
import { Route, Routes } from 'react-router-dom'
import Contacto from './routes/Contacto'
import Favoritos from './routes/Favoritos'
import Home from './routes/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Odontologo from './routes/Odontologo'


function App() {

  return (
    <>
      <GlobalProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dentist/:id" element={<Odontologo />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </GlobalProvider>
    </>
  )
}

export default App
