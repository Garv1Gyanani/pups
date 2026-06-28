import React from 'react';
import { MapPin, Phone, Clock, Star, Navigation } from 'lucide-react';

export default function Locations() {
  const stores = [
    {
      id: "indira-nagar",
      num: "Store #1",
      name: "Indira Nagar Store",
      area: "Block A, Near Indira Nagar Metro Station",
      address: "A-967/23, Block A, Indira Nagar, Lucknow – 226016",
      phone: "094150 08457",
      mapUrl: "https://maps.google.com/?q=A-967/23+Indira+Nagar+Lucknow",
      reviews: "600+ happy reviews",
      rating: "4.6",
      chips: ["Premium Nutrition", "Accessories Hub", "Wellness Supps", "Home Delivery"],
      hours: [
        { days: "Monday - Saturday", time: "11:00 AM - 09:00 PM" },
        { days: "Sunday", time: "11:00 AM - 09:00 PM" }
      ]
    },
    {
      id: "gomti-nagar",
      num: "Store #2 & Studio",
      name: "Gomti Nagar Store",
      area: "Viram Khand, Near Patrakarpuram Crossing",
      address: "2/313-B, Viram Khand-2, Gomti Nagar, Lucknow – 226010",
      phone: "077050 64481",
      mapUrl: "https://maps.google.com/?q=2/313-B+Viram+Khand-2+Gomti+Nagar+Lucknow",
      reviews: "620+ happy reviews",
      rating: "4.6",
      chips: ["Grooming Studio", "Premium Food", "Toys & Accessories", "Home Delivery"],
      hours: [
        { days: "Monday - Saturday", time: "11:00 AM - 09:00 PM" },
        { days: "Sunday (Grooming Active)", time: "11:00 AM - 08:00 PM" }
      ]
    }
  ];

  return (
    <section id="locations">
      <div className="container">
        <div className="locations-intro">
          <span className="section-eyebrow">
            <MapPin size={12} /> Locations
          </span>
          <h2 className="section-title">
            Visit us in <em>Lucknow</em>
          </h2>
          <p className="section-lead">
            Two beautiful locations stacked with premium pet ranges, treats, and friendly advice.
          </p>
        </div>

        <div className="locations-grid">
          {stores.map(store => (
            <div key={store.id} className="location-card">
              <div className="lc-header">
                <div className="lc-num">{store.num}</div>
                <h3>{store.name}</h3>
                <div className="lc-area">{store.area}</div>
                <div className="lc-rating">
                  <span className="lc-stars">★★★★★</span>
                  <span className="lc-rating-text">
                    {store.rating} ★ ({store.reviews})
                  </span>
                </div>
              </div>
              <div className="lc-body">
                <div className="lc-info-rows">
                  <div className="lc-row">
                    <span className="lc-row-icon"><MapPin size={18} /></span>
                    <div className="lc-row-content">
                      <p>{store.address}</p>
                    </div>
                  </div>
                  <div className="lc-row">
                    <span className="lc-row-icon"><Phone size={18} /></span>
                    <div className="lc-row-content">
                      <p>
                        <strong>Call Store:</strong> <a href={`tel:${store.phone.replace(/\s+/g, '')}`}>{store.phone}</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lc-chips">
                  {store.chips.map((c, cIdx) => (
                    <span key={cIdx} className="tag tag-brown">{c}</span>
                  ))}
                </div>

                <div className="lc-actions">
                  <a href={store.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-red btn-sm" style={{ flex: 1 }}>
                    <Navigation size={14} style={{ marginRight: '4px' }} /> Directions
                  </a>
                  <a href={`tel:${store.phone.replace(/\s+/g, '')}`} className="btn btn-outline-brown btn-sm" style={{ flex: 1 }}>
                    <Phone size={14} style={{ marginRight: '4px' }} /> Call Now
                  </a>
                </div>

                <div className="lc-divider"></div>

                <div className="lc-hours">
                  <h4>Operating Hours</h4>
                  {store.hours.map((h, hIdx) => (
                    <div key={hIdx} className="hours-row">
                      <span>{h.days}</span>
                      <strong>{h.time}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
