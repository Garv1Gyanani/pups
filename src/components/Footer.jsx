import React from 'react';
import { PawPrint, Heart, MapPin, Phone } from 'lucide-react';

const FacebookIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo-mark">
                <PawPrint size={22} fill="currentColor" />
              </div>
              <div className="footer-brand-name">PUPS<span>.</span></div>
              <p>Lucknow's trusted pet care destination. Premium products, expert grooming, and genuine love for animals — at every visit since our founding. Proudly women-owned and community-focused.</p>
              <div className="footer-social">
                <a href="https://facebook.com/pups4pets" target="_blank" rel="noopener noreferrer" className="f-social-btn" title="Facebook">
                  <FacebookIcon />
                </a>
              </div>
              <span className="footer-badge">♀ Women-Owned Business</span>
            </div>
            <div className="footer-col">
              <h4>Navigate</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Our Services</a></li>
                <li><a href="#pet-types">Pet Types</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#grooming">Grooming</a></li>
                <li><a href="#locations">Locations</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Premium Pet Food</a></li>
                <li><a href="#grooming">Professional Grooming</a></li>
                <li><a href="#services">Pet Accessories</a></li>
                <li><a href="#services">Health & Wellness</a></li>
                <li><a href="#services">Habitat & Comfort</a></li>
                <li><a href="#services">Home Delivery</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Our Stores</h4>
              <div className="footer-contact-item">
                <span className="fci-icon"><MapPin size={18} /></span>
                <div className="fci-text">
                  <p><strong style={{ color: 'var(--honey-dk)' }}>Indira Nagar</strong><br />A-967/23, Block A, Indira Nagar, Lucknow – 226016</p>
                  <a href="tel:09415008457">094150 08457</a>
                </div>
              </div>
              <div className="footer-contact-item" style={{ marginTop: '16px' }}>
                <span className="fci-icon"><MapPin size={18} /></span>
                <div className="fci-text">
                  <p><strong style={{ color: 'var(--honey-dk)' }}>Gomti Nagar</strong><br />2/313-B, Viram Khand-2, Gomti Nagar, Lucknow – 226010</p>
                  <a href="tel:07705064481">077050 64481</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="container">
        <div className="footer-bottom">
          <p>© 2025 PUPS – Pet Care Store. All rights reserved. Lucknow, Uttar Pradesh.</p>
          <div className="footer-bottom-links">
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
            <a href="#locations">Store Locations</a>
          </div>
          <p>Made with <Heart size={12} style={{ color: 'var(--red)', fill: 'var(--red)', display: 'inline' }} /> for Lucknow's pet families</p>
        </div>
      </div>
    </footer>
  );
}
