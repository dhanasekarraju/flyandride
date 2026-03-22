import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('republic');

  const categories = [
    { id: 'republic', name: 'Republic Day Rides' },
    { id: 'world', name: 'World Heritage Day' },
    { id: 'madras', name: 'Madras Day' },
    { id: 'books', name: 'Book Launches' }
  ];

  const galleryImages = {
    republic: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: 'Republic Day Ride 2023',
        location: 'Ponniyin Selvan Trail, Thanjavur'
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: 'Republic Day Ride 2022',
        location: 'Sethunadu Heritage Trail'
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: 'Republic Day Ride 2021',
        location: 'Tirunelveli Temple Trail'
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: 'Republic Day Ride 2020',
        location: 'Navagraha Temples, Kumbakonam'
      },
      {
        id: 5,
        url: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: 'Republic Day Ride 2019',
        location: 'Kanchipuram Heritage Ride'
      },
      {
        id: 6,
        url: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: 'Republic Day Ride 2018',
        location: 'Gingee Fort Expedition'
      }
    ],
    world: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: 'World Heritage Day 2022',
        location: 'Dakshinachitra Museum'
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: '10th Anniversary Ride',
        location: 'Dakshinachitra Heritage Museum'
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: 'OMR ECR Book Launch 2019',
        location: 'Dakshinachitra'
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: 'World Heritage Day 2018',
        location: 'Dakshinachitra Museum'
      }
    ],
    madras: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: 'Madras Day 2018',
        location: 'Thirukazhukundram'
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: 'Madras Day 2017',
        location: 'Adyar River Trail'
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: 'Madras Day 2016',
        location: 'Sadras Fort'
      }
    ],
    books: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: 'Book Release by V. Kalyanam',
        location: 'Personal Secretary to Mahatma Gandhi'
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: 'Book Release by Saraswati Rajamani',
        location: 'INA Veteran'
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: 'Book Release by Dr. Sylendra Babu IPS',
        location: 'Former ADGP'
      }
    ]
  };

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-page">
      <div className="page-header">
        <h1 className="fade-in">Our Gallery</h1>
        <p className="fade-in">Capturing moments from our memorable rides</p>
      </div>

      <div className="container">
        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryImages[activeCategory].map((image, index) => (
            <div
              key={image.id}
              className="gallery-item scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <img src={image.url} alt={image.title} />
              <div className="gallery-overlay">
                <h3>{image.title}</h3>
                <p>{image.location}</p>
                <span className="view-btn">
                  <i className="fas fa-search-plus"></i>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
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