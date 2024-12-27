import React from 'react'
import Landing from './pages/landing'
import About from './pages/about'
import Options from './pages/options'
import {MemoryRouter as Router, Routes, Route} from 'react-router-dom'


export default function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/index.html" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/options" element={<Options />} />
      </Routes>
    </Router>
  )
}