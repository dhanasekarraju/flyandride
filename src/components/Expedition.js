import React, { useState } from 'react';
import './Expedition.css';

const Expedition = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      alert('Itinerary download started!');
    }, 1000);
  };

  const testimonials = [
    {
      name: "Chandana Jayaram",
      role: "Sports Influencer",
      quote: "Crossing from Thailand to Malaysia on a cycle was unforgettable.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Arun Thangamuthu",
      role: "Chennai Cyclist Admin",
      quote: "Best cycling experience of my life — international riding made easy.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const routeHighlights = [
    { name: "Singapore", desc: "Start your journey", icon: "fas fa-city" },
    { name: "Johor", desc: "Cross the border", icon: "fas fa-passport" },
    { name: "Malacca", desc: "Historic UNESCO heritage", icon: "fas fa-landmark" },
    { name: "Port Dickson", desc: "Beautiful beachfront", icon: "fas fa-umbrella-beach" },
    { name: "KL City", desc: "Urban adventure", icon: "fas fa-building" },
    { name: "Lekas Highway", desc: "Challenging ride", icon: "fas fa-mountain" }
  ];

  const inclusions = [
    "Airport transfers",
    "Hotel accommodation",
    "Route planning & GPX support",
    "Ride support vehicle",
    "Nutrition & hydration support",
    "Border crossing assistance",
    "Local cycling coordination"
  ];

  return (
    <div className="expedition-page">
      {/* Hero Section */}
      <section className="expedition-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="container">
            <h1 className="fade-in">
              Ride from Singapore to Malaysia — <br />
              <span className="gradient-text">The Ultimate Cycling Expedition</span>
            </h1>
            <p className="fade-in">
              Join an exclusive international cycling journey designed for Indian riders to explore scenic coastal routes, 
              cross borders, and ride with a global community.
            </p>
            
            <div className="hero-stats">
              <div className="stat">
                <i className="fas fa-flag-checkered"></i>
                <span>2 Countries</span>
              </div>
              <div className="stat">
                <i className="fas fa-road"></i>
                <span>Coastal Route</span>
              </div>
              <div className="stat">
                <i className="fas fa-tools"></i>
                <span>Fully Supported Ride</span>
              </div>
              <div className="stat">
                <i className="fas fa-globe"></i>
                <span>International Experience</span>
              </div>
            </div>

            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                <i className="fas fa-calendar-check"></i> Book Your Slot Now
              </button>
              <button className="btn btn-outline" onClick={handleDownload}>
                <i className="fas fa-download"></i> {isDownloading ? 'Downloading...' : 'Download Itinerary'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <div className="container">
          <div className="section-title">
            <h2>
              <img src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" alt="icon" />
              Experience
            </h2>
            <p>This is not just a ride — it's an international cycling experience.</p>
          </div>
          
          <div className="experience-content">
            <div className="experience-text slide-in-left">
              <p>Ride through Singapore's cycling infrastructure, cross into Malaysia, enjoy coastal highways, and experience new cultures and cycling communities.</p>
            </div>
            <div className="experience-image slide-in-right">
              <img src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Cycling Experience" />
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="what-you-get">
        <div className="container">
          <div className="section-title">
            <h2>
              <img src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" alt="icon" />
              What You Get
            </h2>
          </div>

          <div className="inclusions-box">
            <div className="inclusions-grid">
              {inclusions.map((item, index) => (
                <div key={index} className="inclusion-item">
                  <i className="fas fa-check-circle"></i>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Route Highlights */}
      <section className="route-section">
        <div className="container">
          <div className="section-title">
            <h2>
              <img src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" alt="icon" />
              Route Highlights
            </h2>
            <p>Singapore → Johor → Malacca → Port Dickson → KL city → Lekas Highway ride</p>
          </div>

          <div className="route-timeline">
            {routeHighlights.map((route, index) => (
              <div key={index} className="route-point">
                <div className="point-marker">
                  <i className={route.icon}></i>
                </div>
                <div className="point-content">
                  <h4>{route.name}</h4>
                  <p>{route.desc}</p>
                </div>
                {index < routeHighlights.length - 1 && <div className="point-line"></div>}
              </div>
            ))}
          </div>

          <div className="ride-details">
            <div className="detail-card">
              <i className="fas fa-tachometer-alt"></i>
              <h3>Ride Type</h3>
              <p>Endurance + Adventure + Challenges</p>
            </div>
            <div className="detail-card">
              <i className="fas fa-chart-line"></i>
              <h3>Difficulty Level</h3>
              <p>Moderate to Challenging</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Ride is Special */}
      <section className="special-section">
        <div className="container">
          <div className="special-content">
            <div className="special-text slide-in-left">
              <h2>Why This Ride is Special</h2>
              <ul>
                <li><i className="fas fa-globe-asia"></i> Cross-country cycling experience</li>
                <li><i className="fas fa-handshake"></i> Ride with international cyclists</li>
                <li><i className="fas fa-heartbeat"></i> Ideal for endurance riders</li>
                <li><i className="fas fa-shield-alt"></i> Safe and professionally managed</li>
                <li><i className="fas fa-ticket-alt"></i> Limited slots</li>
              </ul>
            </div>
            <div className="special-image slide-in-right">
              <img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Special Ride" />
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Join */}
      <section className="who-join">
        <div className="container">
          <div className="section-title">
            <h2>
              <img src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" alt="icon" />
              Who Should Join
            </h2>
          </div>

          <div className="join-grid">
            <div className="join-card">
              <i className="fas fa-users"></i>
              <h3>Cycling clubs</h3>
              <p>Perfect for group expeditions</p>
            </div>
            <div className="join-card">
              <i className="fas fa-trophy"></i>
              <h3>Audax riders</h3>
              <p>Challenge yourself internationally</p>
            </div>
            <div className="join-card">
              <i className="fas fa-suitcase-rolling"></i>
              <h3>Adventure travelers</h3>
              <p>Combine cycling with exploration</p>
            </div>
            <div className="join-card">
              <i className="fas fa-bicycle"></i>
              <h3>First-time international riders</h3>
              <p>Fully supported experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-title">
            <h2>
              <img src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" alt="icon" />
              Testimonials
            </h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card scale-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="testimonial-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="testimonial-content">
                  <i className="fas fa-quote-left"></i>
                  <p>"{testimonial.quote}"</p>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Details */}
      <section className="tour-details" id="booking">
        <div className="container">
          <div className="details-card">
            <h2>Tour Details</h2>
            <div className="details-grid">
              <div className="detail-item">
                <i className="fas fa-clock"></i>
                <div>
                  <h4>Duration</h4>
                  <p>To be announced</p>
                </div>
              </div>
              <div className="detail-item">
                <i className="fas fa-calendar-alt"></i>
                <div>
                  <h4>Dates</h4>
                  <p>To be announced</p>
                </div>
              </div>
              <div className="detail-item">
                <i className="fas fa-users"></i>
                <div>
                  <h4>Group Size</h4>
                  <p>Limited</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-expedition">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to ride beyond borders?</h2>
            <p>Book your slot now.</p>
            <button className="btn btn-large" onClick={() => window.location.href = 'mailto:info@flyandride.co'}>
              <i className="fas fa-envelope"></i> Book Your Slot Now
            </button>
            <div className="contact-info">
              <p><i className="fas fa-envelope"></i> info@flyandride.co</p>
              <p><i className="fas fa-globe"></i> www.flyandride.co</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expedition;
