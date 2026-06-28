import React from 'react';
import { Heart, Smile, Award, MapPin, Check, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <span className="section-eyebrow">
          <Heart size={12} fill="currentColor" /> Our Story
        </span>
        <div className="about-grid">
          <div className="about-visual-wrap reveal visible">
            <div className="about-img-box">
              <div className="about-main-icon" style={{ display: 'inline-flex', width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--white)', boxShadow: 'var(--shadow-md)', marginBottom: '20px' }}>
                <img 
                  src="/images/about_dog_smiling.png" 
                  alt="Smiling Golden Retriever" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="about-img-title">"Every pet deserves care as pure as their love."</div>
              <div className="about-chips">
                <span className="tag tag-honey">
                  <MapPin size={12} style={{ marginRight: '2px' }} /> Est. in Lucknow
                </span>
                <span className="tag tag-brown">
                  <Check size={12} style={{ marginRight: '2px' }} /> Pet Experts
                </span>
              </div>
            </div>
            <div className="about-float af1">
              <div className="af-val">1,200+</div>
              <div className="af-lbl">Satisfied Customers</div>
            </div>
            <div className="about-float af2">
              <div className="af-val">50+</div>
              <div className="af-lbl">Premium Brands</div>
            </div>
          </div>
          <div className="about-text reveal visible">
            <h2 className="section-title">
              A store built on <em>love</em> for animals
            </h2>
            <p className="section-lead">
              PUPS – Pet Care Store was born from a single conviction: pets aren't just animals, they're family. We set
              out to create a space in Lucknow where every pet parent could find the highest quality products, honest
              advice, and genuine warmth.
            </p>
            <p className="section-lead" style={{ marginTop: '12px' }}>
              We bring a nurturing touch to everything we do — from the way we curate
              our product range to the way we serve our community. Our stores in Indira Nagar and Gomti Nagar have become
              trusted second homes for hundreds of pet families.
            </p>
            <div className="about-points">
              <div className="about-point">
                <div className="ap-icon">
                  <Award size={20} />
                </div>
                <div className="ap-text">
                  <h4>Carefully Curated Products</h4>
                  <p>
                    Every product on our shelves has been vetted for quality, safety, and nutritional value. We carry
                    only what we'd trust for our own pets.
                  </p>
                </div>
              </div>
              <div className="about-point">
                <div className="ap-icon">
                  <Heart size={20} />
                </div>
                <div className="ap-text">
                  <h4>Knowledgeable, Passionate Team</h4>
                  <p>
                    Our staff are genuine animal lovers who stay updated on pet nutrition, health, and care trends to
                    give you the best advice.
                  </p>
                </div>
              </div>
              <div className="about-point">
                <div className="ap-icon">
                  <Users size={20} />
                </div>
                <div className="ap-text">
                  <h4>Community-Rooted</h4>
                  <p>
                    We're part of the Lucknow community. We know our customers by name — and often their pets by name
                    too.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
