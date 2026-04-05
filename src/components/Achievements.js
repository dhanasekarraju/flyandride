import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Achievements.css';

const Achievements = () => {
  const [activeTab, setActiveTab] = useState('collaborations');

  const tourismPartners = [
    { name: "Tourism Malaysia", description: "National tourism organization of Malaysia" },
    { name: "Visit Malaysia 2026", description: "National Tourism Campaign" },
    { name: "Tourism Authority of Thailand (TAT)", description: "Thai government tourism agency" },
    { name: "PDRM - Royal Malaysia Police", description: "Safety & operational support" },
    { name: "KTM Railways Malaysia", description: "Integrated travel & logistics" }
  ];

  const cyclingPartners = [
    { name: "Just Buy Cycles", location: "India" },
    { name: "ChooseMyBicycle.com", location: "India" },
    { name: "ProBikers India", location: "India" },
    { name: "Chennai Cyclists", location: "Chennai" },
    { name: "Saddle Buddies", location: "Delhi, India" },
    { name: "Ride and Revive", location: "Chennai" },
    { name: "And many more", location: "Global" }
  ];

  const approachPoints = [
    { icon: "fas fa-chart-line", title: "Mutual Growth & Value Creation" },
    { icon: "fas fa-briefcase", title: "Professional Execution & Reliability" },
    { icon: "fas fa-lightbulb", title: "Innovation in Cycling Tourism" },
    { icon: "fas fa-handshake", title: "Community Engagement & Expansion" }
  ];

  return (
    <div className="achievements-page">
      {/* Hero Section */}
      <div className="page-header">
        <h1 className="fade-in">Our Collaborations & Partnerships</h1>
        <p className="fade-in">Building the future of cycling tourism together</p>
      </div>

      <div className="container">
        {/* Intro Section */}
        <div className="intro-section">
          <p>At Fly & Ride, collaboration is the backbone of every journey we create. Our mission to redefine cycling tourism across borders is powered by strong alliances with tourism boards, government authorities, cycling communities, and industry leaders.</p>
          <p className="mt-2">From planning safe international routes to delivering seamless logistics and unforgettable rider experiences, our partners play a vital role in every pedal stroke.</p>
        </div>

        {/* Tab Navigation */}
        <div className="tabs-container">
          <button 
            className={`tab-btn ${activeTab === 'collaborations' ? 'active' : ''}`}
            onClick={() => setActiveTab('collaborations')}
          >
            <i className="fas fa-handshake"></i> Our Collaborations
          </button>
          <button 
            className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
            onClick={() => setActiveTab('achievements')}
          >
            <i className="fas fa-trophy"></i> Our Approach
          </button>
        </div>

        {activeTab === 'collaborations' && (
          <>
            {/* Strategic Tourism Partners */}
            <section className="partners-section">
              <div className="section-header">
                <h2>Strategic Tourism & Government Collaborations</h2>
                <p>Fly & Ride has proudly worked alongside some of the most respected tourism and government bodies in Southeast Asia, enabling us to design professionally managed, safe, and culturally immersive cycling tours.</p>
              </div>

              <div className="partners-grid">
                {tourismPartners.map((partner, index) => (
                  <div key={index} className="partner-card scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="partner-icon">
                      <i className="fas fa-landmark"></i>
                    </div>
                    <h3>{partner.name}</h3>
                    <p>{partner.description}</p>
                  </div>
                ))}
              </div>

              <div className="benefits-section">
                <h3>What These Partnerships Enable</h3>
                <div className="benefits-grid">
                  <div className="benefit-card">
                    <i className="fas fa-passport"></i>
                    <h4>Seamless Cross-Border Cycling Experiences</h4>
                    <p>Through our close coordination with tourism authorities, we ensure riders experience hassle-free transitions across international borders, especially for flagship routes like Singapore–Malaysia and multi-country tours.</p>
                  </div>
                  <div className="benefit-card">
                    <i className="fas fa-shield-alt"></i>
                    <h4>Safety & Operational Excellence</h4>
                    <p>With the support of PDRM and local authorities, we implement professionally managed cycling convoys, traffic coordination, and on-ground safety protocols—critical for large group rides and international participants.</p>
                  </div>
                  <div className="benefit-card">
                    <i className="fas fa-train"></i>
                    <h4>Integrated Travel & Logistics Support</h4>
                    <p>Our collaboration with KTM Railways Malaysia allows us to offer unique multi-modal cycling journeys, combining train and ride experiences for convenience and adventure.</p>
                  </div>
                  <div className="benefit-card">
                    <i className="fas fa-leaf"></i>
                    <h4>Promotion of Sustainable Tourism</h4>
                    <p>We actively contribute to eco-friendly travel initiatives by promoting cycling as a sustainable way to explore destinations, aligning with national tourism goals.</p>
                  </div>
                  <div className="benefit-card">
                    <i className="fas fa-star"></i>
                    <h4>Exclusive Access & Local Expertise</h4>
                    <p>These partnerships provide us with insider access to scenic routes, hidden gems, and curated experiences that go beyond conventional tourism.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Cycling Community Partners */}
            <section className="community-section">
              <div className="section-header">
                <h2>Cycling Community & Industry Partnerships</h2>
                <p>Cycling is more than a sport—it's a community. At Fly & Ride, we take pride in building and nurturing strong relationships with cycling groups, retailers, and platforms across India and beyond.</p>
              </div>

              <div className="community-grid">
                {cyclingPartners.map((partner, index) => (
                  <div key={index} className="community-card scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <i className="fas fa-bicycle"></i>
                    <h3>{partner.name}</h3>
                    <span>{partner.location}</span>
                  </div>
                ))}
              </div>

              <div className="value-section">
                <h3>How These Collaborations Add Value</h3>
                <div className="value-grid">
                  <div className="value-card">
                    <i className="fas fa-users"></i>
                    <h4>Community-Driven Experiences</h4>
                    <p>We design tours that are built around real riders—working closely with cycling groups to understand their needs, preferences, and aspirations.</p>
                  </div>
                  <div className="value-card">
                    <i className="fas fa-tools"></i>
                    <h4>Access to Quality Gear & Expertise</h4>
                    <p>Through our partnerships with leading cycling retailers and platforms, riders gain access to high-quality equipment, expert advice, and pre-tour support.</p>
                  </div>
                  <div className="value-card">
                    <i className="fas fa-chart-line"></i>
                    <h4>Expanding Cycling Culture</h4>
                    <p>We actively promote cycling as a lifestyle by engaging with communities across cities, encouraging participation in international cycling tours.</p>
                  </div>
                  <div className="value-card">
                    <i className="fas fa-calendar-alt"></i>
                    <h4>Group Tours & Custom Experiences</h4>
                    <p>From club rides to curated international expeditions, our partnerships help us create tailored experiences for diverse cycling groups.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Media Partner */}
            <section className="media-section">
              <div className="section-header">
                <h2>Media & Storytelling Partnership</h2>
                <p>Every ride has a story—and we make sure it is captured, crafted, and shared with impact.</p>
              </div>

              <div className="media-card">
                <div className="media-icon">
                  <i className="fas fa-camera"></i>
                </div>
                <div className="media-content">
                  <h3>Official Media Partner: SKANDA LIFE</h3>
                  <div className="media-features">
                    <div className="media-feature">
                      <i className="fas fa-video"></i>
                      <span>Professional Visual Storytelling</span>
                    </div>
                    <div className="media-feature">
                      <i className="fas fa-camera-retro"></i>
                      <span>High-Quality Content Creation</span>
                    </div>
                    <div className="media-feature">
                      <i className="fas fa-globe"></i>
                      <span>Global Reach & Engagement</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {activeTab === 'achievements' && (
          <>
            {/* Approach Section */}
            <section className="approach-section">
              <div className="section-header">
                <h2>Our Approach to Partnerships</h2>
                <p>At Fly & Ride, we don't just collaborate—we build long-term relationships based on trust, shared passion, and a commitment to excellence.</p>
              </div>

              <div className="approach-grid">
                {approachPoints.map((item, index) => (
                  <div key={index} className="approach-card scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <i className={item.icon}></i>
                    <h3>{item.title}</h3>
                  </div>
                ))}
              </div>
            </section>

            {/* Looking Ahead Section */}
            <section className="looking-ahead">
              <div className="looking-content">
                <h2>Looking Ahead</h2>
                <p>As we expand our footprint across new destinations and experiences, we continue to seek meaningful collaborations with organizations that share our vision for adventure, sustainability, and community.</p>
                <p>Whether it's tourism boards, cycling brands, or local communities—together, we aim to redefine how the world experiences travel on two wheels.</p>
              </div>
            </section>

            {/* Partner CTA */}
            <section className="partner-cta">
              <div className="partner-cta-content">
                <i className="fas fa-envelope-open-text"></i>
                <h2>Partner With Us</h2>
                <p>Are you a tourism board, cycling brand, community, or organization looking to collaborate?</p>
                <p className="highlight">Let's create something extraordinary—together.</p>
                <p>Join us in building the future of cycling tourism.</p>
                <Link to="/contact" className="btn">Get in Touch <i className="fas fa-handshake"></i></Link>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default Achievements;
