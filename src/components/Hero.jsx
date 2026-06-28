import React from 'react';
import { Award, Star, Heart, Beef, Scissors, Home, Pill, Truck, PawPrint } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-blob"></div>
      <div className="hero-paw-bg">
        <PawPrint size={400} />
      </div>
      <div className="hero-inner container">
        <div className="hero-content">
          <div className="hero-badge">
            <Award size={16} style={{ marginRight: '4px' }} /> Lucknow's Most Loved Pet Store
          </div>
          <h1 className="hero-h1">
            Your Pet Deserves
            <em>The Very Best</em>
          </h1>
          <p className="hero-p">
            Premium pet food, accessories, grooming & expert care — all under one roof. Trusted by over 1,200 pet families
            across Lucknow since our founding. Two convenient locations in Indira Nagar & Gomti Nagar.
          </p>
          <div className="hero-actions">
            <a href="#locations" className="btn btn-red btn-lg">Find a Store Near You</a>
            <a href="#services" className="btn btn-outline-brown btn-lg">Explore Services</a>
          </div>
          <div className="hero-stats">
            <div className="h-stat">
              <div className="h-stat-val">
                4.6 <Star size={16} fill="currentColor" style={{ marginBottom: '4px', verticalAlign: 'middle' }} />
              </div>
              <div className="h-stat-lbl">Google Rating</div>
            </div>
            <div className="h-stat">
              <div className="h-stat-val">1,200+</div>
              <div className="h-stat-lbl">Happy Pet Families</div>
            </div>
            <div className="h-stat">
              <div className="h-stat-val">2</div>
              <div className="h-stat-lbl">Stores in Lucknow</div>
            </div>
            <div className="h-stat">
              <div className="h-stat-val">50+</div>
              <div className="h-stat-lbl">Premium Brands</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card-main">
            <div className="hc-icon-banner">
              <Heart size={32} />
            </div>
            <div className="hc-title">Everything your pet loves</div>
            <div className="hc-sub">Curated with care, priced with love</div>
            <div className="hc-items">
              <div className="hc-item">
                <span className="hc-item-icon"><Beef size={18} /></span>
                <span className="hc-item-text">Premium Pet Nutrition</span>
              </div>
              <div className="hc-item">
                <span className="hc-item-icon"><Scissors size={18} /></span>
                <span className="hc-item-text">Professional Grooming</span>
              </div>
              <div className="hc-item">
                <span className="hc-item-icon"><Home size={18} /></span>
                <span className="hc-item-text">Pet Accessories & Habitat</span>
              </div>
              <div className="hc-item">
                <span className="hc-item-icon"><Pill size={18} /></span>
                <span className="hc-item-text">Health & Wellness Products</span>
              </div>
            </div>
          </div>
          <div className="hero-float-card fc1">
            <span className="fc-icon"><Star size={14} fill="currentColor" /></span>
            <div className="fc-text"><strong>4.6 / 5.0</strong><span>1,200+ reviews</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
