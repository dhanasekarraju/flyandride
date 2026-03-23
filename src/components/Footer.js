// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
                alt="FLY&RIDE"
              />
              <span>FLY&RIDE</span>
            </div>
            <p>Pedal through history, culture, and adventure with FLY&RIDE - where cycling meets heritage.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://wa.me/8220676765" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://strava.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-strava"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/achievements">Achievements</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/expedition">Expedition</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul className="contact-info">
              {/*<li>
                <i className="fas fa-phone-alt"></i>
                <a href="tel:8220676765">+91 82206 76765</a>
              </li>*/}
              <li>
                <i className="fab fa-whatsapp"></i>
                <a href="https://wa.me/8220676765">+91 82206 76765</a>
              </li>
              {/*<li>
                <i className="fas fa-map-marker-alt"></i>
                <p>1/451, Anna Street, NATCO COLONY,<br/>Kottivakkam, Chennai-600041</p>
              </li>*/}
            </ul>
          </div>

          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe for updates on upcoming rides</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your Email" />
              <button type="submit">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} FLY&RIDE. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;