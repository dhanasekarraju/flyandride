import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('republic');

  const categories = [
    { id: 'republic', name: 'Republic Day Rides', icon: 'fas fa-bicycle' },
    { id: 'world', name: 'World Heritage Day', icon: 'fas fa-bicycle' },
    { id: 'madras', name: 'Madras Day', icon: 'fas fa-bicycle' },
    { id: 'books', name: 'Book Launches', icon: 'fas fa-book' }
  ];

  const galleryImages = {
    republic: [
      {
        id: 1,
        url: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1350',
        title: 'Republic Day Ride 2023',
        location: 'Ponniyin Selvan Trail, Thanjavur'
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1643603424193-9096f539e1ff?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=compress&cs=tinysrgb&w=1350',
        title: 'Republic Day Ride 2022',
        location: 'Sethunadu Heritage Trail'
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1643603423897-d42054c25c84?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=compress&cs=tinysrgb&w=1350',
        title: 'Republic Day Ride 2021',
        location: 'Tirunelveli Temple Trail'
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1659453851872-1a46077b0249?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=compress&cs=tinysrgb&w=1350',
        title: 'Republic Day Ride 2020',
        location: 'Navagraha Temples, Kumbakonam'
      },
      {
        id: 5,
        url: 'https://images.unsplash.com/photo-1739461226207-4351ca1485ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=compress&cs=tinysrgb&w=1350',
        title: 'Republic Day Ride 2019',
        location: 'Kanchipuram Heritage Ride'
      },
      {
        id: 6,
        url: 'https://images.pexels.com/photos/1210644/pexels-photo-1210644.jpeg?auto=compress&cs=tinysrgb&w=1350',
        title: 'Republic Day Ride 2018',
        location: 'Gingee Fort Expedition'
      }
    ],
    world: [
      {
        id: 1,
        url: 'https://images.pexels.com/photos/1591160/pexels-photo-1591160.jpeg?auto=compress&cs=tinysrgb&w=1350',
        title: 'World Heritage Day 2022',
        location: 'Dakshinachitra Museum'
      },
      {
        id: 2,
        url: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAwerwNAD2BTERg7TT0aD8SfU-_czp3Pg9Mk7nKoXBXG4G5gLSTbjqrhFUsbHVAGvdj-XWqJmAmdbST70pCFRkh5IU0aoXDIrKpdXW5H5zDe4yQ6PtLMKy61GWs5GQivegSsEfbB0S=s680-w680-h510-rw?auto=compress&cs=tinysrgb&w=1350',
        title: '10th Anniversary Ride',
        location: 'Dakshinachitra Heritage Museum'
      },
      {
        id: 3,
        url: 'https://images.timesproperty.com/blog/5271/TP_iStock_1256834892_ss_4.jpg?auto=compress&cs=tinysrgb&w=1350',
        title: 'OMR ECR Book Launch 2019',
        location: 'Dakshinachitra'
      },
      {
        id: 4,
        url: 'https://images.pexels.com/photos/1267449/pexels-photo-1267449.jpeg?auto=compress&cs=tinysrgb&w=1350',
        title: 'World Heritage Day 2018',
        location: 'Dakshinachitra Museum'
      }
    ],
    madras: [
      {
        id: 1,
        url: 'https://www.tamilnadutourism.com/images/chennai/card/marina-beach.webp?auto=compress&cs=tinysrgb&w=1350',
        title: 'Madras Day 2018',
        location: 'Thirukazhukundram'
      },
      {
        id: 2,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmo3g0ZoJsWRmx6OHGBdgn-B9xVkunICWAtQ&s?auto=compress&cs=tinysrgb&w=1350',
        title: 'Madras Day 2017',
        location: 'Adyar River Trail'
      },
      {
        id: 3,
        url: 'https://img-cdn.publive.online/fit-in/1000x675/local-samosal/media/media_files/pfFFVLpBH6L4BBr5QGiH.png?auto=compress&cs=tinysrgb&w=700',
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
        <p className="fade-in">Capturing moments from our memorable cycling journeys</p>
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
              <i className={category.icon}></i> {category.name}
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
                  <i className="fas fa-bicycle"></i>
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
