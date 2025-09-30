import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Discord from './pages/Discord';
import Join from './pages/Join';
import Term from './pages/Term';
import './App.css';

function AppContent() {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === '/invest';

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      {!hideNavAndFooter && <Navbar />}

      {/* Main Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
            <Route path="/discord" element={<Discord />} />
            <Route path="/join" element={<Join />} />
            <Route path="/terms" element={<Term />} />
        </Routes>
      </main>

      {/* Footer */}
      {!hideNavAndFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
