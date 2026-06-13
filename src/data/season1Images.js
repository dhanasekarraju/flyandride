const BASE = '/images/season1';

export const season1 = (name, size = 'card') => `${BASE}/${name}-${size}.jpg`;

export const heroSlides = [
  { image: season1('img_1818', 'full'), title: 'Singapore to Malaysia', subtitle: 'The Ultimate Coastal Cycling Expedition', orientation: 'landscape' },
  { image: season1('img_0304', 'full'), title: 'Global Cycling Connections', subtitle: 'Connect with cycling communities worldwide', orientation: 'landscape' },
  { image: season1('img_0752', 'full'), title: 'Ride Beyond Borders', subtitle: 'Explore new countries, ride new routes, meet global cyclists', orientation: 'portrait' },
];

export const featuredExpeditions = [
  { image: season1('img_1224'), title: 'Singapore to Malaysia Coastal Expedition', orientation: 'landscape' },
  { image: season1('img_0752'), title: 'Thailand to Malaysia Expedition', orientation: 'portrait' },
  { image: season1('img_0304'), title: 'Kuala Lumpur to Penang Ride', orientation: 'landscape' },
];

export const tourImages = {
  malaysiaThailand2025: season1('img_1924'),
  lekas2024: season1('img_1818'),
  lekas2025: season1('img_1223'),
  penang2026: season1('img_0304'),
  sabah2026: season1('img_1137'),
  singaporeMalaysia2026: season1('img_1224'),
  pinkRide2027: season1('img_0763'),
};

export const aboutTourImages = [
  { image: season1('img_0752'), title: 'Thailand to Malaysia Expedition', orientation: 'portrait' },
  { image: season1('img_0304'), title: 'Kuala Lumpur to Penang Ride', orientation: 'landscape' },
  { image: season1('img_1924'), title: 'Malaysia Multi-City Cycling Tours', orientation: 'landscape' },
  { image: season1('img_1818'), title: 'Asian Cycling Experiences', orientation: 'landscape' },
];

export const galleryCategories = [
  { id: 'season1', name: 'Fly & Ride Season 1', icon: 'fas fa-bicycle' },
  { id: 'rides', name: 'On the Road', icon: 'fas fa-road' },
  { id: 'culture', name: 'Culture & Community', icon: 'fas fa-users' },
  { id: 'partners', name: 'Partners & Events', icon: 'fas fa-handshake' },
];

export const galleryImages = {
  season1: [
    { id: 1, url: season1('img_0124', 'full'), title: 'Welcome to Malaysia', location: 'International Arrival, Kuala Lumpur' },
    { id: 2, url: season1('img_1924', 'full'), title: 'Season 1 Kickoff', location: 'Malaysia & Thailand Expedition' },
    { id: 3, url: season1('img_1818', 'full'), title: 'Group Ride', location: 'Malaysia Highway' },
    { id: 4, url: season1('img_1224', 'full'), title: 'Tourism Malaysia Ride', location: 'Malaysia' },
    { id: 5, url: season1('img_0752', 'full'), title: 'Songkhla, Thailand', location: 'Thailand Border Crossing', orientation: 'portrait' },
    { id: 6, url: season1('img_0304', 'full'), title: 'Penang Welcome', location: 'Tourism Malaysia, Penang' },
    { id: 7, url: season1('img_1406', 'full'), title: 'KTM Railway Journey', location: 'Malaysia Railways' },
    { id: 8, url: season1('img_1137', 'full'), title: 'Celebration Ride', location: 'Malaysia' },
    { id: 9, url: season1('img_0854', 'full'), title: 'Local Cuisine', location: 'Malaysia Food Stop' },
    { id: 10, url: season1('img_0164', 'full'), title: 'Team Spirit', location: 'Fly & Ride Vol. 1' },
    { id: 11, url: season1('img_0191', 'full'), title: 'Expedition Moment', location: 'Malaysia & Thailand' },
    { id: 12, url: season1('img_0763', 'full'), title: 'Scenic Route', location: 'Malaysia Countryside' },
  ],
  rides: [
    { id: 1, url: season1('img_1818', 'full'), title: 'Peloton Formation', location: 'Malaysia Highway' },
    { id: 2, url: season1('img_1224', 'full'), title: 'Tourism Malaysia Jerseys', location: 'Group Ride' },
    { id: 3, url: season1('img_1223', 'full'), title: 'Road Cycling', location: 'Malaysia' },
    { id: 4, url: season1('img_0763', 'full'), title: 'Countryside Ride', location: 'Malaysia' },
    { id: 5, url: season1('img_0786', 'full'), title: 'Coastal Route', location: 'Malaysia' },
    { id: 6, url: season1('img_0802', 'full'), title: 'Highway Cycling', location: 'Malaysia' },
    { id: 7, url: season1('img_0808', 'full'), title: 'Group Expedition', location: 'Malaysia & Thailand' },
    { id: 8, url: season1('img_1111', 'full'), title: 'Endurance Ride', location: 'Cross-Border Route' },
    { id: 9, url: season1('img_1468', 'full'), title: 'Riders on the Move', location: 'Malaysia' },
    { id: 10, url: season1('img_1859', 'full'), title: 'Scenic Cycling', location: 'Southeast Asia' },
  ],
  culture: [
    { id: 1, url: season1('img_0854', 'full'), title: 'Local Seafood Feast', location: 'Malaysia Food Market' },
    { id: 2, url: season1('img_0850', 'full'), title: 'Community Gathering', location: 'Malaysia' },
    { id: 3, url: season1('img_0855', 'full'), title: 'Cultural Experience', location: 'Malaysia' },
    { id: 4, url: season1('img_0864', 'full'), title: 'Rider Camaraderie', location: 'Expedition Stop' },
    { id: 5, url: season1('img_1406', 'full'), title: 'Train Journey', location: 'KTM Malaysia Railways' },
    { id: 6, url: season1('img_0191', 'full'), title: 'Team Bonding', location: 'Fly & Ride Season 1' },
  ],
  partners: [
    { id: 1, url: season1('img_0304', 'full'), title: 'Tourism Malaysia Penang', location: 'Penang State Office' },
    { id: 2, url: season1('img_0124', 'full'), title: 'Airport Welcome', location: 'Kuala Lumpur International Arrival' },
    { id: 3, url: season1('img_1924', 'full'), title: 'Official Kickoff', location: 'Fly & Ride Vol. 1 Banner' },
    { id: 4, url: season1('img_1137', 'full'), title: 'Flag Celebration', location: 'Malaysia' },
    { id: 5, url: season1('img_0752', 'full'), title: 'Thailand Partnership', location: 'Songkhla City, Thailand', orientation: 'portrait' },
    { id: 6, url: season1('img_0164', 'full'), title: 'Expedition Launch', location: 'Malaysia & Thailand' },
  ],
};

export const pageBackground = season1('img_1818', 'full');
