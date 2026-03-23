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
    // Handle form submission here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
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
            <p>Have questions about our rides? Want to join our next adventure? Reach out to us!</p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="info-content">
                  <h3>Phone</h3>
                  <a href="tel:8056272736">+91 80562 72736</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div className="info-content">
                  <h3>WhatsApp</h3>
                  <a href="https://wa.me/90039 95909">+91 90039 95909</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-content">
                  <h3>Address</h3>
                  <p>125, Sathya Nagar, Padi,<br />Moggapair Road, Chennai-600050</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="info-content">
                  <h3>Office Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            <div className="social-connect">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="/" className="social-link"><i className="fab fa-facebook-f"></i></a>
                <a href="/" className="social-link"><i className="fab fa-instagram"></i></a>
                <a href="/" className="social-link"><i className="fab fa-youtube"></i></a>
                <a href="/" className="social-link"><i className="fab fa-strava"></i></a>
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

        {/* Map Section */}
        <div className="map-section scale-in">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.5262397046938!2d80.17756771962404!3d13.092534105445726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263f0422dd895%3A0x5fff908f87307fa0!2sSathya%20Nagar%2C%20Padi%2C%20Chennai%2C%20Tamil%20Nadu%20600050!5e0!3m2!1sen!2sin!4v1774258459432!5m2!1sen!2sin"
            title="Location Map"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;