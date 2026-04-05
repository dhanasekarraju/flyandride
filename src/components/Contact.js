import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  // Social media links - replace with actual links when available
  const socialLinks = {
    facebook: "https://www.facebook.com/groups/cyclingyogis",
    instagram: "https://www.instagram.com/ramanujarmoulana/",
    youtube: "https://www.youtube.com/@RamanujarMoulana",
    strava: "https://www.strava.com/athletes/17978156"
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1 className="fade-in">Contact Us</h1>
        <p className="fade-in">Get in touch with us for your next cycling adventure</p>
      </div>

      <div className="container">
        <div className="contact-wrapper">
          {/* Contact Info */}
          <div className="contact-info-section slide-in-left">
            <h2>Let's Connect</h2>
            <p>Have questions about our tours? Want to join our next expedition? Reach out to us!</p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-content">
                  <h3>Email</h3>
                  <a href="mailto:info@flyandride.co">info@flyandride.co</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div className="info-content">
                  <h3>WhatsApp</h3>
                  <a href="https://wa.me/918056272736">+91 80562 72736</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <div className="info-content">
                  <h3>Website</h3>
                  <a href="https://www.flyandride.co" target="_blank" rel="noopener noreferrer">www.flyandride.co</a>
                </div>
              </div>
            </div>

            <div className="social-connect">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a 
                  href={socialLinks.facebook} 
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a 
                  href={socialLinks.instagram} 
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a 
                  href={socialLinks.youtube} 
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe to our YouTube channel"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a 
                  href={socialLinks.strava} 
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Strava"
                >
                  <i className="fab fa-strava"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section slide-in-right">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn submit-btn">
                Send Message
                <i className="fas fa-paper-plane"></i>
              </button>

              {submitted && (
                <div className="success-message">
                  <i className="fas fa-check-circle"></i>
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
