import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Tours.css';

const Tours = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedTour, setSelectedTour] = useState(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const upcomingTours = [
    {
      id: 1,
      title: "Singapore to Malaysia Coastal Cycling Expedition",
      subtitle: "The Ultimate Cycling Expedition",
      dates: "December 15–20, 2024",
      duration: "6 Days / 5 Nights",
      price: "On Request",
      difficulty: "Moderate to Challenging",
      distance: "450+ km",
      route: "Singapore → Johor → Malacca → Port Dickson → KL City → Lekas Highway",
      rideType: "Endurance + Adventure + Challenges",
      highlights: [
        "2 Countries Expedition",
        "Coastal Route",
        "Fully Supported Ride",
        "International Experience",
        "Border Crossing Assistance"
      ],
      whySpecial: [
        "Cross-country cycling experience",
        "Ride with international cyclists",
        "Ideal for endurance riders",
        "Safe and professionally managed",
        "Limited slots"
      ],
      whoShouldJoin: [
        "Cycling clubs",
        "Audax riders",
        "Adventure travelers",
        "First-time international riders"
      ],
      whatYouGet: [
        "Airport transfers",
        "Hotel accommodation",
        "Route planning & GPX support",
        "Ride support vehicle",
        "Nutrition & hydration support",
        "Border crossing assistance",
        "Local cycling coordination"
      ],
      routeStops: [
        { name: "Singapore", desc: "Start your journey with world-class cycling infrastructure", distance: "0 km" },
        { name: "Johor", desc: "Cross the border into Malaysia's southern gateway", distance: "35 km" },
        { name: "Malacca", desc: "UNESCO World Heritage city with rich colonial history", distance: "210 km" },
        { name: "Port Dickson", desc: "Beautiful beachfront roads and coastal views", distance: "90 km" },
        { name: "KL City", desc: "Urban adventure through Malaysia's vibrant capital", distance: "100 km" },
        { name: "Lekas Highway", desc: "Challenging climbs and breathtaking mountain views", distance: "50 km" }
      ],
      image: "https://images.unsplash.com/photo-1681295686960-47d87abb484c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80",
      tag: "Limited Slots Available",
      featured: true
    },
    {
      id: 2,
      title: "Cauvery River Trail Heritage Ride",
      subtitle: "Explore Ancient Heritage",
      dates: "24th - 26th January 2026",
      duration: "3 Days / 2 Nights",
      price: "On Request",
      difficulty: "Moderate",
      distance: "200+ km",
      route: "Tiruchirappalli → Srirangam → Kallanai Dam → Poondi → Mukkombu",
      highlights: [
        "Heritage Trail",
        "River Route",
        "Temple Visits",
        "Cultural Experience"
      ],
      image: "https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tag: "Republic Day Special",
      featured: false
    },
    {
      id: 3,
      title: "Bali International Cycling Tour",
      subtitle: "Island Paradise Ride",
      dates: "11th - 16th September 2025",
      duration: "6 Days / 5 Nights",
      price: "On Request",
      difficulty: "Moderate",
      distance: "300+ km",
      route: "Munggu Beach → Jatiluwih → Ubud → Mount Batur",
      highlights: [
        "International Tour",
        "Volcano Climb",
        "Rice Terraces",
        "Cultural Experience"
      ],
      image: "https://images.unsplash.com/photo-1541625810516-44f1ce894bcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80",
      tag: "International Tour",
      featured: false
    }
  ];

  const pastTours = [
    {
      id: 4,
      title: "Sri Lanka Cycling Tour",
      subtitle: "Ponniyin Selvan Trail",
      dates: "September 2023",
      duration: "4 Days",
      distance: "250+ km",
      route: "Anuradhapura → Sigiriya → Polonnaruwa",
      image: "https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      completed: true
    },
    {
      id: 5,
      title: "Tour of Cape Comorin",
      subtitle: "Land's End Expedition",
      dates: "January 2024",
      duration: "3 Days",
      distance: "180+ km",
      route: "Kanniyakumari Coastal Trail",
      image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      completed: true
    },
    {
      id: 6,
      title: "Cambodia Cycling Tour",
      subtitle: "Angkor Wat Heritage Ride",
      dates: "September 2024",
      duration: "6 Days",
      distance: "350+ km",
      route: "Siem Reap → Angkor Wat → Tonle Sap",
      image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      completed: true
    }
  ];

  return (
    <div className="tours-page">
      {/* Hero Section */}
      <section className="tours-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="fade-in">Explore Our Tours</h1>
          <p className="fade-in">Discover the world on two wheels with FLY&RIDE's curated cycling expeditions</p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="tabs-container">
        <div className="container">
          <div className="tabs-nav">
            <button 
              className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
              onClick={() => setActiveTab('upcoming')}
            >
              <i className="fas fa-bicycle"></i> Upcoming Tours
            </button>
            <button 
              className={`tab-btn ${activeTab === 'past' ? 'active' : ''}`}
              onClick={() => setActiveTab('past')}
            >
              <i className="fas fa-history"></i> Past Tours
            </button>
          </div>
        </div>
      </div>

      {/* Upcoming Tours Section */}
      {activeTab === 'upcoming' && (
        <section className="upcoming-tours">
          <div className="container">
            <div className="tours-grid">
              {upcomingTours.map((tour, index) => (
                <div 
                  key={tour.id} 
                  className={`tour-card ${tour.featured ? 'featured-card' : ''} scale-in`}
                  style={{animationDelay: `${index * 0.2}s`}}
                  onClick={() => setSelectedTour(tour)}
                >
                  {tour.tag && <div className="tour-tag">{tour.tag}</div>}
                  <div className="tour-image">
                    <img src={tour.image} alt={tour.title} />
                    {tour.featured && (
                      <div className="featured-badge">
                        <i className="fas fa-star"></i> Featured Expedition
                      </div>
                    )}
                  </div>
                  <div className="tour-content">
                    <h3>{tour.title}</h3>
                    <p className="tour-subtitle">{tour.subtitle}</p>
                    
                    <div className="tour-meta">
                      <div className="meta-item">
                        <i className="fas fa-calendar"></i>
                        <span>{tour.dates}</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-clock"></i>
                        <span>{tour.duration}</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-route"></i>
                        <span>{tour.distance}</span>
                      </div>
                      <div className="meta-item">
                        <i className="fas fa-chart-line"></i>
                        <span>{tour.difficulty}</span>
                      </div>
                    </div>

                    <div className="tour-route">
                      <i className="fas fa-map-marked-alt"></i>
                      <p>{tour.route}</p>
                    </div>

                    <div className="tour-highlights">
                      {tour.highlights.slice(0, 3).map((highlight, i) => (
                        <span key={i} className="highlight-tag">
                          <i className="fas fa-check-circle"></i> {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="tour-actions">
                      <button className="btn-view" onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTour(tour);
                      }}>
                        View Details <i className="fas fa-arrow-right"></i>
                      </button>
                      <Link to="/contact" className="btn-book">
                        Book Now <i className="fas fa-calendar-check"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Tours Section */}
      {activeTab === 'past' && (
        <section className="past-tours">
          <div className="container">
            <div className="past-tours-grid">
              {pastTours.map((tour, index) => (
                <div key={tour.id} className="past-tour-card scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="past-tour-image">
                    <img src={tour.image} alt={tour.title} />
                    <div className="completed-badge">
                      <i className="fas fa-check-circle"></i> Completed
                    </div>
                  </div>
                  <div className="past-tour-content">
                    <h3>{tour.title}</h3>
                    <p>{tour.subtitle}</p>
                    <div className="past-meta">
                      <span><i className="fas fa-calendar"></i> {tour.dates}</span>
                      <span><i className="fas fa-clock"></i> {tour.duration}</span>
                      <span><i className="fas fa-route"></i> {tour.distance}</span>
                    </div>
                    <p className="past-route">{tour.route}</p>
                    <Link to="/gallery" className="btn-gallery">
                      View Gallery <i className="fas fa-images"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tour Details Modal */}
      {selectedTour && (
        <div className="tour-modal" onClick={() => setSelectedTour(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedTour(null)}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="modal-header">
              <h2>{selectedTour.title}</h2>
              <p className="subtitle">{selectedTour.subtitle}</p>
            </div>

            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedTour.image} alt={selectedTour.title} />
              </div>

              <div className="modal-details">
                {/* Canon Section */}
                <div className="canon-modal">
                  <div className="canon-grid-modal">
                    <div className="canon-item">
                      <i className="fas fa-calendar-alt"></i>
                      <div>
                        <span>Dates</span>
                        <strong>{selectedTour.dates}</strong>
                      </div>
                    </div>
                    <div className="canon-item">
                      <i className="fas fa-clock"></i>
                      <div>
                        <span>Duration</span>
                        <strong>{selectedTour.duration}</strong>
                      </div>
                    </div>
                    <div className="canon-item">
                      <i className="fas fa-route"></i>
                      <div>
                        <span>Distance</span>
                        <strong>{selectedTour.distance}</strong>
                      </div>
                    </div>
                    <div className="canon-item">
                      <i className="fas fa-chart-line"></i>
                      <div>
                        <span>Difficulty</span>
                        <strong>{selectedTour.difficulty}</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div className="experience-modal">
                  <h4><i className="fas fa-bicycle"></i> Experience</h4>
                  <p>This is not just a ride — it's an international cycling experience. Ride through Singapore's cycling infrastructure, cross into Malaysia, enjoy coastal highways, and experience new cultures and cycling communities.</p>
                </div>

                {/* Route Highlights with Stops */}
                {selectedTour.routeStops && (
                  <div className="route-stops-modal">
                    <h4><i className="fas fa-map-marked-alt"></i> Route Highlights</h4>
                    <div className="route-stops-list">
                      {selectedTour.routeStops.map((stop, idx) => (
                        <div key={idx} className="route-stop">
                          <div className="stop-marker">{idx + 1}</div>
                          <div className="stop-info">
                            <strong>{stop.name}</strong>
                            <p>{stop.desc}</p>
                            <span>{stop.distance}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Ride Type & Difficulty */}
                {selectedTour.rideType && (
                  <div className="ride-type-modal">
                    <h4><i className="fas fa-tachometer-alt"></i> Ride Type</h4>
                    <p>{selectedTour.rideType}</p>
                  </div>
                )}

                {/* What You Get */}
                {selectedTour.whatYouGet && (
                  <div className="whatyouget-modal">
                    <h4><i className="fas fa-gift"></i> What You Get</h4>
                    <div className="inclusions-list">
                      {selectedTour.whatYouGet.map((item, idx) => (
                        <span key={idx}><i className="fas fa-check-circle"></i> {item}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Why This Ride is Special */}
                {selectedTour.whySpecial && (
                  <div className="whyspecial-modal">
                    <h4><i className="fas fa-star"></i> Why This Ride is Special</h4>
                    <div className="special-list">
                      {selectedTour.whySpecial.map((item, idx) => (
                        <span key={idx}><i className="fas fa-heart"></i> {item}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Who Should Join */}
                {selectedTour.whoShouldJoin && (
                  <div className="whojoin-modal">
                    <h4><i className="fas fa-users"></i> Who Should Join</h4>
                    <div className="join-list">
                      {selectedTour.whoShouldJoin.map((item, idx) => (
                        <span key={idx}><i className="fas fa-user-check"></i> {item}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Regular Highlights */}
                <div className="highlights-detail">
                  <h4><i className="fas fa-star"></i> Highlights</h4>
                  <div className="highlights-list">
                    {selectedTour.highlights.map((highlight, i) => (
                      <span key={i}><i className="fas fa-check"></i> {highlight}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  <Link to="/contact" className="btn-book-large">
                    Book Your Slot <i className="fas fa-arrow-right"></i>
                  </Link>
                  <button className="btn-download" onClick={() => alert('Itinerary download started!')}>
                    <i className="fas fa-download"></i> Download Itinerary
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tours;
