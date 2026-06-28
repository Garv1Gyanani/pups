import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

export default function Reviews() {
  const reviewsList = [
    {
      initials: "PG",
      name: "Priyal Gupta",
      loc: "Lucknow Resident",
      stars: "★★★★★",
      date: "2 days ago",
      quote: "The only store in Indira Nagar I trust for my Golden Retriever's food. The owners are extremely friendly, and they always have fresh stock of Royal Canin in. Delivery is fast too!",
      store: "Indira Nagar Store"
    },
    {
      initials: "AS",
      name: "Amit Singh",
      loc: "Pet Parent",
      stars: "★★★★★",
      date: "2 weeks ago",
      quote: "Outstanding grooming experience at their Gomti Nagar Studio! The stylist was gentle with my nervous Persian cat. She came out smelling amazing and looked so beautiful. Highly recommended!",
      store: "Gomti Nagar Store"
    },
    {
      initials: "ND",
      name: "Nupur Dwivedi",
      loc: "Gomti Nagar",
      stars: "★★★★★",
      date: "3 weeks ago",
      quote: "Such a warm and welcoming store! Great range of products at fair prices. I love that it's women-owned — you can feel the personal touch in how they run the place. My puppy goes absolutely mad with excitement!",
      store: "Indira Nagar Store"
    }
  ];

  return (
    <section id="reviews">
      <div className="container">
        <div className="reviews-header">
          <span className="section-eyebrow">
            <Star size={12} fill="currentColor" /> Testimonials
          </span>
          <h2 className="section-title">
            Loved by <em>Lucknow's pet parents</em>
          </h2>

          <div className="reviews-aggregate">
            <div className="ra-score">4.6</div>
            <div className="ra-right">
              <div className="ra-stars">★★★★★</div>
              <div className="ra-count">Based on 1,200+ reviews on Google Maps</div>
            </div>
          </div>
        </div>

        <div className="reviews-grid">
          {reviewsList.map((r, idx) => (
            <div key={idx} className="review-card">
              <div className="rc-top">
                <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <div className="rc-avatar">{r.initials}</div>
                  <div>
                    <div className="rc-name">{r.name}</div>
                    <div className="rc-loc">{r.loc}</div>
                  </div>
                </div>
                <div>
                  <div className="rc-stars">{r.stars}</div>
                  <div className="rc-date">{r.date}</div>
                </div>
              </div>
              <div className="rc-quote">"{r.quote}"</div>
              <div className="rc-store">
                <span className="tag tag-honey">{r.store}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="reviews-more">
          <p>Read all 1,200+ reviews on Google Maps</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-red">
              Read Indira Nagar Reviews
            </a>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-brown">
              Read Gomti Nagar Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
