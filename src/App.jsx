import React from 'react'
import Landing from './pages/landing'

import './App.css'

import {HashRouter as Router, Routes, Route} from 'react-router-dom'


export default function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/index.html" element={<Landing />} />
      </Routes>
    </Router>
  )
}