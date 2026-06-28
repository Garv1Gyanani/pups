import React from 'react';
import { Award, Heart, Shield, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const cards = [
    {
      title: "Compassionate & Nurturing",
      desc: "Nurturing touch, detail-focused service, and family-first care patterns in how we treat every single pet.",
      icon: <Heart size={28} />
    },
    {
      title: "Certified Pet Nutritionists",
      desc: "Our team stays certified on animal wellness, offering honest nutritional maps tailored for individual breeds.",
      icon: <Award size={28} />
    },
    {
      title: "Clean Grooming Protocols",
      desc: "Clean waters, sanitized tables, organic soaps, and safety parameters that ensure stress-free sessions.",
      icon: <Shield size={28} />
    },
    {
      title: "Lucknow Community Trust",
      desc: "A decade of building friendships. We know your pet's name, their allergies, and their favorite treats.",
      icon: <Sparkles size={28} />
    }
  ];

  return (
    <section id="why">
      <div className="container">
        <div className="why-header">
          <span className="section-eyebrow">Why Choose Us</span>
          <h2 className="section-title">The PUPS difference</h2>
          <p className="section-lead">
            We don't sell products; we build wellness patterns for the companions who bring light to your homes.
          </p>
        </div>
        <div className="why-grid">
          {cards.map((c, idx) => (
            <div key={idx} className="why-card">
              <span className="wc-icon">{c.icon}</span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="why-big">
          <h3>Your pet's second family is waiting</h3>
          <p>Visit our stores or connect with us on WhatsApp to order premium supplies directly to your doorstep.</p>
          <a href="#contact" className="btn btn-white btn-lg">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}
