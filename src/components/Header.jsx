import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { LuArrowRightCircle } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="menu-toggle col-2 " onClick={toggleMenu}>
        <span className="icon px-3">☰</span>
      </div>
      <a href='#/#home' className="d-flex align-items-center justify-content-center gap-2 col-8  text-decoration-none">
        <img src={logo} alt="Logo" width="30px" height="30px" />
        <h1 className='logo-title button-text'>
          Housing Quest
        </h1>
      </a>
      <div className="button col-2 px-3 d-flex justify-content-end">
        <button className='button-primary '><div className='button-text'>Enquire Now</div> <LuArrowRightCircle size={25} /></button>
      </div>
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#/#home"> Home</a></li>
          <li><a href="#/#about">About Us</a></li>
          <li><a href="#/#property"> Property</a></li>
          <li><Link to="/service"> Service</Link></li>
          <li><a href="#/#contact"> Contact</a></li>

        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
