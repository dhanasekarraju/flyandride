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

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    const interval = setInterval(nextSlide, 5000);
    return () => {
      clearInterval(interval);
      nextBtn.removeEventListener('click', nextSlide);
      prevBtn.removeEventListener('click', prevSlide);
    };
  }, []);

  const highlights = [
    {
      title: 'Singapore to Malaysia Coastal Expedition',
      date: 'December 15-20, 2024',
      description: 'Ride across borders - Singapore → Johor → Malacca → Port Dickson → KL City. Join the ultimate international cycling expedition!',
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: '/expedition'
    },
    {
      title: 'Cauvery River Trail Ride',
      date: '24th - 26th January 2026',
      description: 'Explore the ancient heritage along the Cauvery river with 40+ cyclists',
      image: 'https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: '/gallery'
    },
    {
      title: 'Bali International Tour',
      date: '11th - 16th September 2025',
      description: 'Experience the fusion of Balinese and Indian heritage',
      image: 'https://images.unsplash.com/photo-1539367625300-6162c8a5c4c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: '/gallery'
    }
  ];

  return (
    <div className="home">
      {/* Hero Slider */}
      <div className="hero-slider" ref={sliderRef}>
        <div className="slide active" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")'
        }}>
          <div className="slide-content fade-in">
            <h1>Tour of Cape Comorin</h1>
            <p>Discover the southern tip of India on two wheels</p>
            <Link to="/gallery" className="btn">Explore Rides</Link>
          </div>
        </div>

        <div className="slide" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")'
        }}>
          <div className="slide-content fade-in">
            <h1>International Cycling Tour</h1>
            <p>Cambodia - Angkor Wat Heritage Ride</p>
            <Link to="/gallery" className="btn">Explore Rides</Link>
          </div>
        </div>

        <div className="slide" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")'
        }}>
          <div className="slide-content fade-in">
            <h1>Republic Day Heritage Ride</h1>
            <p>Celebrate 77th Republic Day with heritage cycling</p>
            <Link to="/gallery" className="btn">Explore Rides</Link>
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
              <img src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" alt="icon" />
              About FLY&RIDE
            </h1>
            <p>Pedal through history, culture, and adventure</p>
          </div>

          <div className="about-content">
            <div className="about-text slide-in-left">
              <p>FLY&RIDE is an initiative comprising of passionate cyclists and heritage enthusiasts from various walks of life. Since 2012, we've been organizing heritage rides, publishing books, and curating vintage bicycle exhibitions that celebrate the rich cultural tapestry of our regions.</p>
              <p>Our rides take you through historic trails, ancient temples, colonial architecture, and scenic landscapes - all while promoting sustainable tourism and healthy living.</p>
              <Link to="/about" className="btn">Know More</Link>
            </div>
            <div className="about-stats slide-in-right">
              <div className="stat-item">
                <i className="fas fa-trophy"></i>
                <h3>5+</h3>
                <p>Awards Won</p>
              </div>
              <div className="stat-item">
                <i className="fas fa-bicycle"></i>
                <h3>50+</h3>
                <p>Memorable Rides</p>
              </div>
              <div className="stat-item">
                <i className="fas fa-book"></i>
                <h3>8</h3>
                <p>Publications</p>
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
              <img src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" alt="icon" />
              Featured Highlights
            </h1>
            <p>Experience our most memorable journeys</p>
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
                  <Link to="/gallery" className="btn-small">View Gallery</Link>
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
            <h2>Ready for an Adventure?</h2>
            <p>Join our next heritage ride and discover the beauty of cycling through history</p>
            <Link to="/contact" className="btn">Book Your Ride</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;