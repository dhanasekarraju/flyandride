import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About Us' },
    { path: '/expedition', name: 'Expedition' },
    { path: '/achievements', name: 'Achievements' },
    { path: '/gallery', name: 'Gallery' },
    { path: '/contact', name: 'Contact' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <NavLink to="/" className="logo">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" 
              alt="FLY&RIDE Logo"
            />
            <span>FLY&RIDE</span>
          </NavLink>

          <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  isActive ? 'nav-link active' : 'nav-link'
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="nav-right">
            <button className="theme-toggle-btn" onClick={toggleTheme}>
              <i className={`fas fa-${theme === 'light' ? 'moon' : 'sun'}`}></i>
            </button>
            
            <button 
              className="hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className={`bar ${mobileMenuOpen ? 'active' : ''}`}></span>
              <span className={`bar ${mobileMenuOpen ? 'active' : ''}`}></span>
              <span className={`bar ${mobileMenuOpen ? 'active' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      <div className="navbar-spacer"></div>
    </>
  );
};

export default Navbar;
