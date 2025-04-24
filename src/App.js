import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './assets/logo.png';

import Navbar from './app/components/Navbar';
import Home  from './app/pages/Home';
import { About } from './app/pages/About';
import { Services } from './app/pages/Services';
import { Contact } from './app/pages/Contact';
import { Footer } from './app/components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;