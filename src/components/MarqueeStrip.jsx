import React from 'react';
import { Dot } from 'lucide-react';

export default function MarqueeStrip() {
  const items = [
    "Premium Pet Food",
    "Expert Grooming",
    "Health Supplements",
    "Pet Accessories",
    "Home Delivery",
    "Two Lucknow Locations",
    "Women-Owned Business",
    "4.6 ★ Google Rating"
  ];

  // Repeat items to ensure smooth scrolling infinite loop
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div className="marquee-strip">
      <div className="marquee-inner">
        {repeatedItems.map((item, index) => (
          <span key={index} className="marquee-item">
            {item}
            <span className="marquee-dot">
              <Dot size={18} />
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
