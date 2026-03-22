import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <h1>About FLY&RIDE</h1>
      </div>

      <div className="container">
        <div className="about-content">
          <div className="about-text fade-in">
            <h2>Who We Are</h2>
            <p>Started in 2012, FLY&RIDE is a community of passionate cyclists and heritage enthusiasts. We organize heritage rides, publish books on historical trails, and curate vintage bicycle exhibitions.</p>

            <h2>Our Mission</h2>
            <p>To promote sustainable tourism and heritage awareness through cycling, while creating unforgettable experiences for riders of all levels.</p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <i className="fas fa-calendar-alt"></i>
              <h3>10+</h3>
              <p>Years of Excellence</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-users"></i>
              <h3>500+</h3>
              <p>Happy Riders</p>
            </div>
            <div className="stat-card">
              <i className="fas fa-route"></i>
              <h3>100+</h3>
              <p>Unique Trails</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;