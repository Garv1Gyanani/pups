import React from 'react';
import { Sparkles, Beef, Check, Scissors, ShoppingBag, Pill, Activity, Home, Truck } from 'lucide-react';

export default function Services() {
  const mainServices = [
    {
      title: "Premium Pet Food",
      desc: "Dry food, wet food, and healthy treats from the world's most trusted pet nutrition brands.",
      icon: <Beef size={28} />,
      feats: ["Breed-specific nutrition", "Puppy, adult & senior formulas", "Grain-free & sensitive diets"],
      tags: "Dogs · Cats · Birds · Fish"
    },
    {
      title: "Professional Grooming",
      desc: "Full-service grooming by trained professionals — from basic baths to breed-specific cuts.",
      icon: <Scissors size={28} />,
      feats: ["Bath, trim & full groom", "Nail clipping & ear cleaning", "Coat conditioning & spa"],
      tags: "Gomti Nagar Location"
    },
    {
      title: "Pet Accessories",
      desc: "Stylish collars, comfy beds, travel carriers, and enrichment toys that combine quality and fun.",
      icon: <ShoppingBag size={28} />,
      feats: ["Collars, leashes & harnesses", "Beds, crates & carriers", "Toys & seasonal apparel"],
      tags: "All Pet Sizes"
    }
  ];

  return (
    <section id="services">
      <div className="container">
        <div className="services-header">
          <div>
            <span className="section-eyebrow">
              <Sparkles size={12} /> What We Offer
            </span>
            <h2 className="section-title">
              Complete <em>pet care</em> under one roof
            </h2>
          </div>
          <p className="section-lead">From daily nutrition to special pampering — if your pet needs it, we have it.</p>
        </div>
        <div className="services-grid">
          {mainServices.map((s, idx) => (
            <div key={idx} className="service-card reveal visible">
              <div className="sc-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="sc-features">
                {s.feats.map((f, fIdx) => (
                  <div key={fIdx} className="sc-feat">
                    <Check size={12} /> {f}
                  </div>
                ))}
              </div>
              <span className="tag tag-honey">{s.tags}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Panels */}
      <div className="service-detail-section">
        <div className="container">
          <div className="sd-grid">
            <div className="sd-visual" style={{ overflow: 'hidden', padding: 0 }}>
              <img 
                src="/images/service_pet_foods.png" 
                alt="Premium Pet Foods" 
                style={{ width: '100%', height: '100%', minHeight: '320px', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div className="sd-content">
              <h2>Expertly Formulated <em>Nutrition</em></h2>
              <p>We stock Lucknow's widest selection of premium veterinary and daily diets. Our staff will help map the exact nutrition plans matching your pet's life stage, breed size, and active requirements.</p>
              <div className="sd-list">
                <div className="sd-list-item">
                  <span className="sdi-icon"><Check size={16} /></span>
                  <div className="sdi-text">
                    <h4>Clinical & Prescription Diets</h4>
                    <p>Supportive nutrition formulas for renal, hepatic, diabetic, and cardiac conditions.</p>
                  </div>
                </div>
                <div className="sd-list-item">
                  <span className="sdi-icon"><Check size={16} /></span>
                  <div className="sdi-text">
                    <h4>Natural & Grain-Free Alternatives</h4>
                    <p>High protein meals for sensitive stomachs and hypoallergenic dogs and cats.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-detail-section">
        <div className="container">
          <div className="sd-grid reverse">
            <div className="sd-visual" style={{ overflow: 'hidden', padding: 0 }}>
              <img 
                src="/images/service_grooming_studio.png" 
                alt="Grooming & Hygiene Studio" 
                style={{ width: '100%', height: '100%', minHeight: '320px', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div className="sd-content">
              <h2>Professional <em>Hygiene Studio</em></h2>
              <p>Our Gomti Nagar store houses a luxury grooming salon equipped with specialized baths, standard trim tables, and organic grooming products. Our certified stylists prioritize your pet's safety and stress-free state.</p>
              <div className="sd-list">
                <div className="sd-list-item">
                  <span className="sdi-icon"><Check size={16} /></span>
                  <div className="sdi-text">
                    <h4>Coat Therapy & Conditioning</h4>
                    <p>Shedding control treatments, medicated baths, and professional blow drying.</p>
                  </div>
                </div>
                <div className="sd-list-item">
                  <span className="sdi-icon"><Check size={16} /></span>
                  <div className="sdi-text">
                    <h4>Essential Care Operations</h4>
                    <p>Nail trimming, ear canal cleaning, sanitary clipping, and dental sprays.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
