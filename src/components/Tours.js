import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Tours.css';

const Tours = () => {
  const [activeTab, setActiveTab] = useState('all');

  const signatureTours = [
    {
      id: 1,
      title: "Malaysia — Thailand — Malaysia Expedition 2025",
      description: "A cross-border cycling adventure through Malaysia and Thailand.",
      highlights: [
        "Cross-country experience",
        "Scenic routes",
        "Cultural immersion",
        "Fully supported ride"
      ],
      idealFor: "Intermediate to advanced cyclists",
      image: "https://images.unsplash.com/photo-1563990308267-cd6d3cc09318?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=compress&cs=tinysrgb&w=1350",
      date: "2025",
      duration: "8 Days"
    },
    {
      id: 2,
      title: "Malaysia Lekas Highway Ride 2024",
      description: "Ride on the iconic LEKAS Highway.",
      highlights: [
        "Closed-road cycling",
        "Smooth riding conditions",
        "Strong community vibe"
      ],
      idealFor: "All levels",
      image: "https://images.unsplash.com/photo-1629107953246-944554aa9741?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2024",
      duration: "2 Days"
    },
    {
      id: 3,
      title: "Malaysia Lekas Highway Ride 2025",
      description: "A bigger and improved edition of the LEKAS ride.",
      highlights: [
        "Enhanced organization",
        "Larger participation",
        "Professional support"
      ],
      idealFor: "All riders",
      image: "https://images.unsplash.com/photo-1623756584910-a59444f25614?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2025",
      duration: "2 Days"
    },
    {
      id: 4,
      title: "Penang Heritage Ride & Sea Bridge Ride 2026",
      description: "Explore heritage streets and ride across a massive sea bridge.",
      highlights: [
        "Penang bridge ride",
        "UNESCO heritage streets",
        "Coastal views"
      ],
      idealFor: "Leisure and scenic riders",
      image: "https://plus.unsplash.com/premium_photo-1684274186190-92c72bc48130?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2026",
      duration: "3 Days"
    },
    {
      id: 5,
      title: "Sabah Cycling Paradise 2026",
      description: "Discover Sabah's natural beauty.",
      highlights: [
        "Mount Kinabalu views",
        "Rainforest routes",
        "Low traffic roads"
      ],
      idealFor: "Nature lovers",
      image: "https://images.unsplash.com/photo-1759503614480-ea2b140bda2e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2026",
      duration: "5 Days"
    }
  ];

  const upcomingEvents = [
    {
      id: 6,
      title: "Singapore to Malaysia Coastal Cycling Expedition",
      date: "September 2026",
      description: "A coastal cross-border ride with scenic routes and full support.",
      image: "https://plus.unsplash.com/premium_photo-1748191472214-757549cdfa65?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      duration: "6 Days",
      highlights: ["Coastal route", "Cross-border", "Full support"]
    },
    {
      id: 7,
      title: "Malaysia Pink Ride Audax 200BRM",
      date: "2027",
      description: "A 200km endurance ride with checkpoints and community participation.",
      image: "https://images.unsplash.com/photo-1761796995655-bef1f14fc8c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      duration: "1 Day",
      highlights: ["200km endurance", "Checkpoints", "Community event"]
    }
  ];

  const allTours = [...signatureTours, ...upcomingEvents];

  const whyRide = [
    "Professionally curated tours",
    "Full logistics support",
    "Strong partnerships",
    "Unique routes",
    "Community-driven experiences"
  ];

  const renderTourCard = (tour) => (
    <div key={tour.id} className="tour-card">
      <div className="tour-card-image">
        <img src={tour.image} alt={tour.title} />
        <div className="tour-card-date">{tour.date}</div>
      </div>
      <div className="tour-card-content">
        <h3>{tour.title}</h3>
        <p className="tour-card-desc">{tour.description}</p>
        <div className="tour-card-meta">
          <span><i className="fas fa-clock"></i> {tour.duration}</span>
        </div>
        <div className="tour-card-highlights">
          {tour.highlights && tour.highlights.slice(0, 2).map((h, i) => (
            <span key={i}><i className="fas fa-check-circle"></i> {h}</span>
          ))}
        </div>
        <Link to="/contact" className="btn-small">Book Now</Link>
      </div>
    </div>
  );

  return (
    <div className="tours-page">
      {/* Hero Section */}
      <div className="page-header">
        <h1 className="fade-in">Our Tours</h1>
        <p className="fade-in">At Fly & Ride, every tour is more than just a ride — it's an experience that blends adventure, culture, endurance, and unforgettable landscapes.</p>
      </div>

      <div className="container">
        {/* Intro Text */}
        <div className="tours-intro">
          <p>From iconic highways and coastal routes to heritage cities and tropical cycling paradises, our tours are carefully designed for passionate riders who want to explore the world on two wheels.</p>
        </div>

        {/* Tab Navigation */}
        <div className="tabs-container">
          <button 
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            <i className="fas fa-globe"></i> All Tours
          </button>
          <button 
            className={`tab-btn ${activeTab === 'signature' ? 'active' : ''}`}
            onClick={() => setActiveTab('signature')}
          >
            <i className="fas fa-star"></i> Signature Tours
          </button>
          <button 
            className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            <i className="fas fa-calendar-alt"></i> Upcoming Events
          </button>
        </div>

        {/* All Tours Tab */}
        {activeTab === 'all' && (
          <div className="tours-grid">
            {allTours.map(renderTourCard)}
          </div>
        )}

        {/* Signature Tours Tab */}
        {activeTab === 'signature' && (
          <div className="tours-grid">
            {signatureTours.map(renderTourCard)}
          </div>
        )}

        {/* Upcoming Events Tab */}
        {activeTab === 'upcoming' && (
          <div className="tours-grid">
            {upcomingEvents.map(renderTourCard)}
          </div>
        )}

        {/* Why Ride With Fly & Ride */}
        <section className="whyride-section">
          <h2 className="section-heading">Why Ride With Fly & Ride?</h2>
          
          <div className="whyride-list">
            {whyRide.map((item, index) => (
              <div key={index} className="whyride-item">
                <i className="fas fa-check-circle"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Join the Ride CTA */}
        <section className="join-ride-section">
          <div className="join-ride-content">
            <h2>Join the Ride</h2>
            <p>Book your next cycling adventure with Fly & Ride and explore the world on two wheels.</p>
            <Link to="/contact" className="btn">Book Your Adventure <i className="fas fa-bicycle"></i></Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tours;
