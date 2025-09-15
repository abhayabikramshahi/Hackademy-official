import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'nep-css-framework';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import PopupModal from './components/PopupModel';
import About from './pages/About';
import Community from './pages/Community';
import './App.css'

function App() {
  const [isAllowed, setIsAllowed] = useState(false); // access control

  useEffect(() => {
    // Check if user has joined Discord before
    const joined = localStorage.getItem('hackademyJoined');
    if (joined === 'true') {
      setIsAllowed(true);
    }
  }, []);

  const handleJoined = () => {
    localStorage.setItem('hackademyJoined', 'true'); // persist user action
    setIsAllowed(true);
  };

  return (
    <Router>
      {!isAllowed ? null : <Navbar />}
      {!isAllowed ? null : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
            <Route path="/community" element={<Community />} />
        </Routes>
      )}

      <PopupModal isOpen={!isAllowed} onJoined={handleJoined} />
    </Router>
  );
}

export default App;
