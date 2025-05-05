import React from 'react'
import Index from './Pages/Index'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PNF from './Pages/PNF'



function Route_app() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="*" element={<PNF />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Route_app
