import React from 'react';
import { Smile, Cat, Bird, Fish, Heart, Shield } from 'lucide-react';

export default function PetTypes() {
  const petTypes = [
    {
      name: "Dogs",
      desc: "From tiny Chihuahua pups to large Mastiffs. Foods, toys, beds, and harnesses.",
      icon: <Smile size={28} />,
      tags: ["Puppy", "Adult", "Senior"]
    },
    {
      name: "Cats",
      desc: "Premium wet meals, litter kits, scratching posts, and hairball support remedies.",
      icon: <Cat size={28} />,
      tags: ["Kitten", "Indoor", "Persian"]
    },
    {
      name: "Birds",
      desc: "Seeds mix, breeding foods, mineral blocks, swings, and spacious bird cages.",
      icon: <Bird size={28} />,
      tags: ["Budgie", "Cockatiel", "Finches"]
    },
    {
      name: "Fishes",
      desc: "Water conditioners, bio-filters, LED tanks, and high protein fish flakes.",
      icon: <Fish size={28} />,
      tags: ["Goldfish", "Betta", "Tetra"]
    },
    {
      name: "Small Pets",
      desc: "Healthy pellets, hay stacks, wood shavings, and interactive tunnels.",
      icon: <Heart size={28} />,
      tags: ["Hamsters", "Rabbits", "Guinea Pigs"]
    }
  ];

  return (
    <section id="pet-types">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="section-eyebrow">
            <Shield size={12} /> We Care For All
          </span>
          <h2 className="section-title">
            Tailored care for <em>every pet parent</em>
          </h2>
          <p className="section-lead" style={{ margin: '0 auto' }}>
            We carry dedicated sections for all major pet families, ensuring you find specialized formulas and fit-for-purpose accessories.
          </p>
        </div>
        <div className="pet-types-grid">
          {petTypes.map((p, idx) => (
            <div key={idx} className="pet-type-card">
              <span className="ptc-icon">{p.icon}</span>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="ptc-tags">
                {p.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="ptc-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
