// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Vincent Logo" className="logo" />
      </Link>
      <div className="nav-links">
        <Link to="/vini">Carta dei Vini</Link> {/* Aggiungi solo il pulsante per la carta dei vini */}
      </div>
    </nav>
  );
};

export default Navbar;
