import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/pages/home'
import About from './components/pages/about'
import Portfolio from './components/pages/portfolio'
import Contact from './components/pages/contact'

import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/portfolio' element={<Portfolio />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
