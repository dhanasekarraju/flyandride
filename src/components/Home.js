import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let currentSlide = 0;
    const slides = slider.querySelectorAll('.slide');
    const totalSlides = slides.length;

    const showSlide = (index) => {
      slides.forEach(slide => slide.classList.remove('active'));
      slides[index].classList.add('active');
    };

    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    };

    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
    };

    const nextBtn = slider.querySelector('.next');
    const prevBtn = slider.querySelector('.prev');

    if (nextBtn && prevBtn) {
      nextBtn.addEventListener('click', nextSlide);
      prevBtn.addEventListener('click', prevSlide);
    }

    const interval = setInterval(nextSlide, 5000);
    return () => {
      clearInterval(interval);
      if (nextBtn && prevBtn) {
        nextBtn.removeEventListener('click', nextSlide);
        prevBtn.removeEventListener('click', prevSlide);
      }
    };
  }, []);

  const highlights = [
    {
      title: 'Singapore to Malaysia Coastal Expedition',
      date: 'December 15-20, 2024',
      description: 'Ride across borders - Singapore → Johor → Malacca → Port Dickson → KL City. Join the ultimate international cycling expedition!',
      image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1350',
      link: '/tours'
    },
    {
      title: 'Thailand to Malaysia Expedition',
      date: 'Completed 2023',
      description: 'Cross-country cycling experience through Southeast Asia',
      image: 'https://images.unsplash.com/photo-1541625810516-44f1ce894bcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=compress&cs=tinysrgb&w=1350',
      link: '/gallery'
    },
    {
      title: 'Kuala Lumpur to Penang Ride',
      date: 'Completed 2023',
      description: 'Experience Malaysia\'s west coast on two wheels',
      image: 'https://images.unsplash.com/photo-1631087516911-51579e7fc1ba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=compress&cs=tinysrgb&w=1350',
      link: '/gallery'
    }
  ];

  return (
    <div className="home">
      {/* Hero Slider */}
      <div className="hero-slider" ref={sliderRef}>
        <div className="slide active" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://plus.unsplash.com/premium_photo-1661963485383-223be0058b07?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=compress&cs=tinysrgb&w=1350")'
        }}>
          <div className="slide-content fade-in">
            <h1>Singapore to Malaysia</h1>
            <p>The Ultimate Coastal Cycling Expedition</p>
            <Link to="/tours" className="btn">Explore Tour</Link>
          </div>
        </div>

        <div className="slide" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1654091615752-7a6c4ab49856?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=compress&cs=tinysrgb&w=1350")'
        }}>
          <div className="slide-content fade-in">
            <h1>Global Cycling Connections</h1>
            <p>Connect with cycling communities worldwide</p>
            <Link to="/about" className="btn">Learn More</Link>
          </div>
        </div>

        <div className="slide" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1541584285245-c83a93cce0e8?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=compress&cs=tinysrgb&w=1350")'
        }}>
          <div className="slide-content fade-in">
            <h1>Ride Beyond Borders</h1>
            <p>Explore new countries, ride new routes, meet global cyclists</p>
            <Link to="/tours" className="btn">View Tours</Link>
          </div>
        </div>

        <div className="slider-nav">
          <button className="prev"><i className="fas fa-chevron-left"></i></button>
          <button className="next"><i className="fas fa-chevron-right"></i></button>
        </div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="section-title fade-in">
            <h1>
              <img src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" alt="bicycle icon" />
              About Fly & Ride
            </h1>
            <p>Global cycling travel platform for passionate riders</p>
          </div>

          <div className="about-content">
            <div className="about-text slide-in-left">
              <p>Fly & Ride is a global cycling travel platform designed for passionate riders who want to take their cycling journeys beyond India. We specialize in international cycling tours, cross-border cycling expeditions, connecting Indian cyclists with global cycling communities, and participating in international cycling events.</p>
              <p>Our mission is simple: To help cyclists explore the world on two wheels while building meaningful global connections.</p>
              <Link to="/about" className="btn">Know More</Link>
            </div>
            <div className="about-stats slide-in-right">
              <div className="stat-item">
                <i className="fas fa-bicycle"></i>
                <h3>4+</h3>
                <p>International Tours</p>
              </div>
              <div className="stat-item">
                <i className="fas fa-users"></i>
                <h3>100+</h3>
                <p>Happy Riders</p>
              </div>
              <div className="stat-item">
                <i className="fas fa-handshake"></i>
                <h3>5+</h3>
                <p>Global Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights-section">
        <div className="container">
          <div className="section-title fade-in">
            <h1>
              <img src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" alt="bicycle icon" />
              Featured Expeditions
            </h1>
            <p>Experience the world on two wheels</p>
          </div>

          <div className="highlights-grid">
            {highlights.map((highlight, index) => (
              <div key={index} className="highlight-card scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="card-image">
                  <img src={highlight.image} alt={highlight.title} />
                </div>
                <div className="card-content">
                  <h3>{highlight.title}</h3>
                  <p className="date">{highlight.date}</p>
                  <p className="description">{highlight.description}</p>
                  <Link to={highlight.link} className="btn-small">Learn More <i className="fas fa-bicycle"></i></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content scale-in">
            <h2>Ready to ride beyond borders?</h2>
            <p>Join the global cycling movement. Explore new countries, ride new routes, and meet cyclists from around the world.</p>
            <Link to="/contact" className="btn">Start Your Journey <i className="fas fa-bicycle"></i></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
