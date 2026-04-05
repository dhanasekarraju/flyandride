import React, { useState } from 'react';
import './Achievements.css';

const Achievements = () => {
  const [showMore, setShowMore] = useState(false);

  const publications = [
    {
      title: "Sufi Trail of Madras",
      image: "https://images.unsplash.com/photo-1661366698983-3cb843219300?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80",
      link: "#"
    },
    {
      title: "Cycling in Madras (1877-1977)",
      image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#"
    },
    {
      title: "Madras by Cycle 40 Trails",
      image: "https://images.unsplash.com/photo-1681617819600-70ae9ab1a8eb?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1350&q=80",
      link: "#"
    },
    {
      title: "George Town Book",
      image: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#"
    },
    {
      title: "OMR ECR Bicycle Trails",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#"
    },
    {
      title: "North Chennai Bicycle Trails",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#"
    }
  ];

  const morePublications = [
    {
      title: "Medical Heritage Trails of Chennai",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#"
    },
    {
      title: "Global Heritage of Madras",
      image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#"
    },
    {
      title: "Water Heritage of Madras",
      image: "https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: "#"
    }
  ];

  const awards = [
    {
      title: "Tamil Nadu Tourism Award",
      year: "2022",
      description: "Outstanding Contribution to Promotion of Cycling Tourism",
      icon: "fas fa-trophy"
    },
    {
      title: "Heritage Cycling Award",
      year: "2021",
      description: "For preserving cycling heritage through vintage bicycle exhibitions",
      icon: "fas fa-award"
    },
    {
      title: "Best Cycling Community",
      year: "2020",
      description: "Recognized by Department of Tourism for promoting cycling culture",
      icon: "fas fa-medal"
    }
  ];

  const exhibitions = [
    {
      year: "2022",
      image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Vintage Bicycle Exhibition"
    },
    {
      year: "2019",
      image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Vintage Bicycle Exhibition"
    },
    {
      year: "2018",
      image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Vintage Bicycle Exhibition"
    }
  ];

  return (
    <div className="achievements-page">
      <div className="page-header">
        <h1 className="fade-in">Achievements & Books</h1>
        <p className="fade-in">Celebrating our journey through publications and recognition</p>
      </div>

      <div className="container">
        {/* Awards Section */}
        <section className="awards-section">
          <div className="section-title">
            <h2>
              <img src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" alt="bicycle icon" />
              Our Awards
            </h2>
          </div>
          <div className="awards-grid">
            {awards.map((award, index) => (
              <div key={index} className="award-card scale-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="award-icon">
                  <i className={award.icon}></i>
                </div>
                <h3>{award.title}</h3>
                <span className="year">{award.year}</span>
                <p>{award.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Publications Section */}
        <section className="publications-section">
          <div className="section-title">
            <h2>
              <img src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" alt="bicycle icon" />
              Our Publications
            </h2>
          </div>
          <div className="publications-grid">
            {publications.map((pub, index) => (
              <div key={index} className="publication-card scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="card-image">
                  <img src={pub.image} alt={pub.title} />
                  <div className="card-actions">
                    <a href={pub.link} className="btn-small">Buy Now <i className="fas fa-bicycle"></i></a>
                  </div>
                </div>
                <div className="card-content">
                  <h3>{pub.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {showMore && (
            <div className="publications-grid more-publications">
              {morePublications.map((pub, index) => (
                <div key={index} className="publication-card scale-in">
                  <div className="card-image">
                    <img src={pub.image} alt={pub.title} />
                    <div className="card-actions">
                      <a href={pub.link} className="btn-small">Buy Now <i className="fas fa-bicycle"></i></a>
                    </div>
                  </div>
                  <div className="card-content">
                    <h3>{pub.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="load-more">
            <button className="btn" onClick={() => setShowMore(!showMore)}>
              {showMore ? 'Show Less' : 'Read More'} <i className="fas fa-bicycle"></i>
            </button>
          </div>
        </section>

        {/* Vintage Exhibition Section */}
        <section className="exhibition-section">
          <div className="section-title">
            <h2>
              <img src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" alt="bicycle icon" />
              Vintage Bicycle Exhibitions
            </h2>
          </div>
          <div className="exhibition-grid">
            {exhibitions.map((expo, index) => (
              <div key={index} className="exhibition-card scale-in" style={{animationDelay: `${index * 0.2}s`}}>
                <img src={expo.image} alt={expo.title} />
                <div className="exhibition-content">
                  <h3>{expo.title} {expo.year}</h3>
                  <p>Discover the beauty of vintage bicycles from the {expo.year} edition</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Achievements;
