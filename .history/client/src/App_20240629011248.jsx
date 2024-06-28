import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


const App = () => {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hom />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  
  
  </BrowserRouter>
  )
}

export default App
