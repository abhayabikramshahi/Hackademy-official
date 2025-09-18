import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'  // ✅ added
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageNotFound from './pages/PageNotFound'
import Community from './pages/Community'
import Staffs from './pages/Staffs'
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
          <Route path="/community" element={<Community />} />
          <Route path="/staffs" element={<Staffs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
  )
}

export default App
