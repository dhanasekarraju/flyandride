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

  const inclusions = [
    "Airport transfers",
    "Hotel accommodation",
    "Route planning & GPX support",
    "Ride support vehicle",
    "Nutrition & hydration support",
    "Border crossing assistance",
    "Local cycling coordination"
  ];

  const whySpecial = [
    "Cross-country cycling experience",
    "Ride with international cyclists",
    "Ideal for endurance riders",
    "Safe and professionally managed",
    "Limited slots"
  ];

  const whoShouldJoin = [
    "Cycling clubs",
    "Audax riders",
    "Adventure travelers",
    "First-time international riders"
  ];

  const routeStops = [
    { name: "Singapore", desc: "Start your journey with world-class cycling infrastructure", km: "0 km" },
    { name: "Johor", desc: "Cross the border into Malaysia's southern gateway", km: "35 km" },
    { name: "Malacca", desc: "UNESCO World Heritage city with rich colonial history", km: "210 km" },
    { name: "Port Dickson", desc: "Beautiful beachfront roads and coastal views", km: "90 km" },
    { name: "KL City", desc: "Urban adventure through Malaysia's vibrant capital", km: "100 km" },
    { name: "Lekas Highway", desc: "Challenging climbs and breathtaking mountain views", km: "50 km" }
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

      {/* Canon Section - Tour Details Card */}
      <section className="canon-section">
        <div className="container">
          <div className="canon-grid">
            <div className="canon-card">
              <i className="fas fa-calendar-alt"></i>
              <h3>Dates</h3>
              <p>December 15–20, 2024</p>
            </div>
            <div className="canon-card">
              <i className="fas fa-clock"></i>
              <h3>Duration</h3>
              <p>6 Days / 5 Nights</p>
            </div>
            <div className="canon-card">
              <i className="fas fa-route"></i>
              <h3>Distance</h3>
              <p>450+ km</p>
            </div>
            <div className="canon-card">
              <i className="fas fa-chart-line"></i>
              <h3>Difficulty</h3>
              <p>Moderate to Challenging</p>
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
            <div className="experience-text">
              <p>Ride through Singapore's cycling infrastructure, cross into Malaysia, enjoy coastal highways, and experience new cultures and cycling communities.</p>
            </div>
            <div className="experience-image">
              <img src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Cycling Experience" />
            </div>
          </div>
        </div>
      </section>

      {/* Route Highlights Section */}
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
            {routeStops.map((stop, index) => (
              <div key={index} className="route-point">
                <div className="point-marker">
                  <span>{index + 1}</span>
                </div>
                <div className="point-content">
                  <h4>{stop.name}</h4>
                  <p>{stop.desc}</p>
                  <span className="point-distance">{stop.km}</span>
                </div>
                {index < routeStops.length - 1 && <div className="point-line"></div>}
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

      {/* Why This Ride is Special Section */}
      <section className="special-section">
        <div className="container">
          <div className="section-title">
            <h2>
              <img src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" alt="icon" />
              Why This Ride is Special
            </h2>
          </div>

          <div className="special-grid">
            {whySpecial.map((item, index) => (
              <div key={index} className="special-card">
                <i className="fas fa-star"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Join Section */}
      <section className="who-join-section">
        <div className="container">
          <div className="section-title">
            <h2>
              <img src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" alt="icon" />
              Who Should Join
            </h2>
          </div>

          <div className="who-join-grid">
            {whoShouldJoin.map((item, index) => (
              <div key={index} className="who-join-card">
                <i className="fas fa-user-check"></i>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Details Section */}
      <section className="tour-details-section" id="booking">
        <div className="container">
          <div className="section-title">
            <h2>
              <img src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" alt="icon" />
              Tour Details
            </h2>
          </div>

          <div className="tour-details-grid">
            <div className="tour-detail-card">
              <i className="fas fa-clock"></i>
              <h4>Duration</h4>
              <p>6 Days / 5 Nights</p>
            </div>
            <div className="tour-detail-card">
              <i className="fas fa-calendar-alt"></i>
              <h4>Dates</h4>
              <p>December 15–20, 2024</p>
            </div>
            <div className="tour-detail-card">
              <i className="fas fa-users"></i>
              <h4>Group Size</h4>
              <p>Limited (Max 30 Riders)</p>
            </div>
            <div className="tour-detail-card">
              <i className="fas fa-route"></i>
              <h4>Total Distance</h4>
              <p>450+ km</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              <div key={index} className="testimonial-card">
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

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to ride beyond borders?</h2>
            <p>Book your slot now.</p>
            <div className="cta-buttons">
              <button className="btn btn-large" onClick={() => window.location.href = 'mailto:info@flyandride.co'}>
                <i className="fas fa-envelope"></i> Book Your Slot Now
              </button>
              <button className="btn btn-outline-light" onClick={handleDownload}>
                <i className="fas fa-download"></i> Download Itinerary
              </button>
            </div>
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
