import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'nep-css-framework';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
