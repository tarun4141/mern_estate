import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'


const App = () => {
  return (
  <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={< Profile/>} />
        <Route path="/" element={<SignIn />} />
        <Route path="/" element={<SignOu />} />
      </Routes>
  
  
  </BrowserRouter>
  )
}

export default App
