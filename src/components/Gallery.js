import React, { useState } from 'react';
import './Gallery.css';
import { galleryCategories, galleryImages } from '../data/season1Images';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('season1');
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-page">
      <div className="page-header">
        <h1 className="fade-in">Our Gallery</h1>
        <p className="fade-in">Capturing moments from Fly & Ride Season 1 — Malaysia & Thailand</p>
      </div>

      <div className="container">
        <div className="category-filter">
          {galleryCategories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <i className={category.icon}></i> {category.name}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {galleryImages[activeCategory].map((image, index) => (
            <div
              key={image.id}
              className={`gallery-item scale-in${image.orientation === 'portrait' ? ' portrait' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.url} alt={image.title} />
              <div className="gallery-overlay">
                <h3>{image.title}</h3>
                <p>{image.location}</p>
                <span className="view-btn">
                  <i className="fas fa-bicycle"></i>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className={`lightbox-content${selectedImage.orientation === 'portrait' ? ' portrait' : ''}`} onClick={e => e.stopPropagation()}>
            <img src={selectedImage.url} alt={selectedImage.title} />
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.location}</p>
            </div>
            <button className="close-btn" onClick={() => setSelectedImage(null)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
