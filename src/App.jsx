import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Java from './pages/Java'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      {/* Common layout */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/java" element={<Java />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
