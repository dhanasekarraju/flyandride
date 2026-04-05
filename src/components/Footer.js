import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social media links - replace with actual links when available
  const socialLinks = {
    facebook: "https://www.facebook.com/groups/cyclingyogis",
    instagram: "https://www.instagram.com/ramanujarmoulana/",
    youtube: "https://www.youtube.com/@RamanujarMoulana",
    whatsapp: "https://wa.me/918056272736",
    strava: "https://www.strava.com/athletes/17978156"
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
                alt="FLY&RIDE Logo"
              />
              <span>FLY&RIDE</span>
            </div>
            <p>Global cycling travel platform for passionate riders who want to take their cycling journeys beyond India.</p>
            <div className="social-links">
              <a 
                href={socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href={socialLinks.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Subscribe to our YouTube channel"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a 
                href={socialLinks.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a 
                href={socialLinks.strava} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow us on Strava"
              >
                <i className="fab fa-strava"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/tours">Tours</Link></li>
              <li><Link to="/achievements">Achievements</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul className="contact-info">
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:info@flyandride.co">info@flyandride.co</a>
              </li>
              <li>
                <i className="fab fa-whatsapp"></i>
                <a href="https://wa.me/918056272736" target="_blank" rel="noopener noreferrer">+91 80562 72736</a>
              </li>
              <li>
                <i className="fas fa-globe"></i>
                <a href="https://www.flyandride.co" target="_blank" rel="noopener noreferrer">www.flyandride.co</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe for updates on upcoming tours</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your Email" aria-label="Email for newsletter" />
              <button type="submit" aria-label="Subscribe">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Fly & Ride. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
