// Updated Navbar.jsx with responsive design and centered links
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import '../../assets/style.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 classic-font">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="PikFusion" style={{ height: '30px', marginRight: '10px' }} />
          
        </Link>

        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse justify-content-center ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav text-center gap-lg-4 gap-2">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="d-none d-lg-block">
          <Link to="/contact" className="btn btn-primary">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
