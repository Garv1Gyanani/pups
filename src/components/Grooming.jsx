import React from 'react';
import { Scissors, Star, Sparkles, Calendar, MessageSquare } from 'lucide-react';

export default function Grooming({ onBookClick }) {
  const packages = [
    { name: "Basic Bath & Blow Dry", price: "Starting ₹399" },
    { name: "Bath + Trim Package", price: "Starting ₹699" },
    { name: "Full Groom (Breed-Specific)", price: "Starting ₹999" },
    { name: "Spa Package (All Inclusive)", price: "Starting ₹1,499" }
  ];

  const benefits = [
    { title: "Medicated Baths", desc: "For skin allergies, tick/flea prevention, and deep coat conditioning." },
    { title: "Breed-Specific Cuts", desc: "Custom clips styled for Poodles, Shihtzus, Persians, Lhasa Apsos." },
    { title: "Hygiene Sanitization", desc: "Gentle ear wax cleanout, nail clipping, and paw pad moisturizing." }
  ];

  return (
    <section id="grooming">
      <div className="container">
        <span className="section-eyebrow">
          <Scissors size={12} /> Grooming Studio
        </span>
        <h2 className="section-title">
          Lucknow's finest <em>pet salon</em>
        </h2>

        <div className="grooming-hero">
          <div className="gh-content">
            <h2>Gomti Nagar Grooming Studio</h2>
            <p>
              Pamper your pets in a hygiene-first environment. Our professional groomers are trained in stress-free handling, breed-specific styling, and wellness checks. We use premium, pet-safe organic shampoos and conditioners.
            </p>
            <button className="btn btn-white btn-lg" onClick={onBookClick}>
              <Calendar size={18} style={{ marginRight: '4px' }} /> Book an Appointment
            </button>
            <div className="gh-stats">
              <div>
                <div className="ghs-val">5,000+</div>
                <div className="ghs-lbl">Pets Groomed</div>
              </div>
              <div>
                <div className="ghs-val">8+ Years</div>
                <div className="ghs-lbl">Expert Stylists</div>
              </div>
              <div>
                <div className="ghs-val">100%</div>
                <div className="ghs-lbl">Pet-Safe Products</div>
              </div>
            </div>
          </div>
          <div className="gh-packages">
            <h3 style={{ color: '#fff', marginBottom: '16px', fontFamily: 'Playfair Display, serif', fontSize: '1.2rem' }}>
              Studio Packages
            </h3>
            {packages.map((pkg, idx) => (
              <div key={idx} className="gh-package">
                <span className="ghp-name">
                  <Sparkles size={14} /> {pkg.name}
                </span>
                <span className="ghp-price">{pkg.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grooming-grid">
          {benefits.map((b, idx) => (
            <div key={idx} className="grooming-card">
              <span className="gc-icon">
                <Scissors size={28} />
              </span>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
