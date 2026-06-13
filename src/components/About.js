import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import { aboutTourImages, season1 } from '../data/season1Images';

const About = () => {
  const whatWeDo = [
    { icon: "fas fa-bicycle", title: "International Cycling Tours", desc: "Curated cycling experiences across Asia and beyond" },
    { icon: "fas fa-handshake", title: "Global Cycling Connections", desc: "Connect with cycling communities worldwide" },
    { icon: "fas fa-trophy", title: "Event Participation", desc: "Join international cycling events and challenges" },
    { icon: "fas fa-route", title: "Cross-Country Collaboration", desc: "Partner with global cycling organizations" }
  ];

  const completedTours = [
    { title: "Thailand to Malaysia Expedition", year: "2023", image: aboutTourImages[0].image },
    { title: "Kuala Lumpur to Penang Ride", year: "2023", image: aboutTourImages[1].image },
    { title: "Malaysia Multi-City Cycling Tours", year: "2024", image: aboutTourImages[2].image },
    { title: "Asian Cycling Experiences", year: "2024", image: aboutTourImages[3].image }
  ];

  const whyChooseUs = [
    "International cycling expertise",
    "Seamless travel + cycling integration",
    "Proven track record",
    "Strong global cycling network",
    "Professional planning and safety"
  ];

  const whoItsFor = [
    { icon: "fas fa-users", title: "Cycling clubs in India", desc: "Group expeditions and team building" },
    { icon: "fas fa-trophy", title: "Endurance riders & Audax cyclists", desc: "Challenge yourself internationally" },
    { icon: "fas fa-compass", title: "Adventure seekers", desc: "Explore new frontiers on two wheels" },
    { icon: "fas fa-bicycle", title: "Travel enthusiasts who love cycling", desc: "Combine travel with your passion" }
  ];

  // Function to handle navigation with scroll to top
  const handleTourClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="fade-in">About Fly & Ride</h1>
          <p className="fade-in">Global cycling travel platform for passionate riders who want to take their cycling journeys beyond India</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>To help cyclists explore the world on two wheels while building meaningful global connections.</p>
              <p className="mission-desc">Fly & Ride is a global cycling travel platform designed for passionate riders who want to take their cycling journeys beyond India. We specialize in international cycling tours, cross-border cycling expeditions, connecting Indian cyclists with global cycling communities, and participating in international cycling events.</p>
            </div>
            <div className="mission-stats">
              <div className="stat-card">
                <i className="fas fa-bicycle"></i>
                <h3>4+</h3>
                <p>International Tours</p>
              </div>
              <div className="stat-card">
                <i className="fas fa-users"></i>
                <h3>100+</h3>
                <p>Happy Riders</p>
              </div>
              <div className="stat-card">
                <i className="fas fa-route"></i>
                <h3>2000+</h3>
                <p>Kilometers Covered</p>
              </div>
              <div className="stat-card">
                <i className="fas fa-handshake"></i>
                <h3>5+</h3>
                <p>Global Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="whatwedo-section">
        <div className="container">
          <div className="section-title">
            <h2>
              <img src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" alt="icon" />
              What We Do
            </h2>
            <p>Creating unforgettable cycling experiences across borders</p>
          </div>

          <div className="whatwedo-grid">
            {whatWeDo.map((item, index) => (
              <div key={index} className="whatwedo-card scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="card-icon">
                  <i className={item.icon}></i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="journey-section">
        <div className="container">
          <div className="section-title">
            <h2>
              <img src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" alt="icon" />
              Our Journey So Far
            </h2>
            <p>Successfully completed 4 international cycling tours across Asia</p>
          </div>

          <div className="journey-grid">
            {completedTours.map((tour, index) => (
              <div key={index} className="journey-card">
                <div className={`journey-image${tour.orientation === 'portrait' ? ' journey-image-portrait' : ''}`}>
                  <img src={tour.image} alt={tour.title} />
                  <div className="journey-year">{tour.year}</div>
                </div>
                <div className="journey-content">
                  <h3>{tour.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Tour Highlight */}
      <section className="upcoming-highlight">
        <div className="container">
          <div className="highlight-content">
            <div className="highlight-text">
              <h2>Upcoming Tour</h2>
              <h3>Singapore to Malaysia Coastal Expedition</h3>
              <div className="highlight-features">
                <div className="feature"><i className="fas fa-bicycle"></i> Ride through Singapore's cycling infrastructure</div>
                <div className="feature"><i className="fas fa-passport"></i> Cross borders into Malaysia</div>
                <div className="feature"><i className="fas fa-road"></i> Coastal road cycling experience</div>
                <div className="feature"><i className="fas fa-handshake"></i> Connect with international cyclists</div>
                <div className="feature"><i className="fas fa-tools"></i> Fully supported ride with logistics and accommodation</div>
              </div>
              <Link to="/tours" className="btn" onClick={handleTourClick}>View Tour Details <i className="fas fa-arrow-right"></i></Link>
            </div>
            <div className="highlight-image">
              <img src={season1('img_1224', 'full')} alt="Singapore to Malaysia Cycling Expedition" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="whyus-section">
        <div className="container">
          <div className="section-title">
            <h2>
              <img src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" alt="icon" />
              Why Choose Fly & Ride
            </h2>
          </div>

          <div className="whyus-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="whyus-card">
                <i className="fas fa-check-circle"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="who-section">
        <div className="container">
          <div className="section-title">
            <h2>
              <img src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" alt="icon" />
              Who Is This For
            </h2>
          </div>

          <div className="who-grid">
            {whoItsFor.map((item, index) => (
              <div key={index} className="who-card">
                <i className={item.icon}></i>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner With Us Section */}
      <section className="partner-section">
        <div className="container">
          <div className="partner-content">
            <h2>Partner With Us</h2>
            <p>We collaborate with international cycling clubs, event organizers, tourism boards, and global cycling communities.</p>
            <Link to="/contact" className="btn btn-outline-light">Become a Partner <i className="fas fa-handshake"></i></Link>
          </div>
        </div>
      </section>

      {/* Join The Movement Section */}
      <section className="movement-section">
        <div className="container">
          <div className="movement-content">
            <h2>Join The Movement</h2>
            <p>This is more than a cycling tour. This is a global cycling lifestyle.</p>
            <p className="movement-desc">Explore new countries, ride new routes, and meet global cyclists.</p>
            <Link to="/contact" className="btn btn-large">Start Your Journey <i className="fas fa-bicycle"></i></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
