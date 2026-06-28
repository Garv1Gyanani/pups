import React, { useState } from 'react';
import { ShoppingBasket, Search, Frown, Bone, Cat, Beef, Pill, Scissors, Home, Sparkles, Activity } from 'lucide-react';

export const productsData = [
  { id: 1, name: "Royal Canin Golden Retriever Adult Dog Food", desc: "Tailored nutrition with specific kibble shape, size and nutrient profile for adult Golden Retrievers.", cat: "nutrition", price: 1200, img: "/images/royal_canin_dog.png" },
  { id: 2, name: "Purina Pro Plan Sterilised Adult Cat Salmon", desc: "High-protein premium diet containing essential nutrients including OPTIRENAL for kidney health.", cat: "nutrition", price: 950, img: "/images/purina_cat_food.png" },
  { id: 3, name: "Farmina N&D Ancestral Grain Chicken & Pomegranate", desc: "Low ancestral grain recipe containing 90% premium animal ingredients with chicken and pomegranate.", cat: "nutrition", price: 1450, img: "/images/farmina_pet_food.png" },
  { id: 4, name: "Himalaya Liv.52 PET Liver Support Supplement", desc: "Clinically proven herbal formula that protects the liver against toxins and promotes appetite.", cat: "health", price: 350, img: "/images/himalaya_liv52.png" },
  { id: 5, name: "Trixie Professional Pet Grooming Scissors", desc: "Precision stainless steel styling shears with adjustable tension screw for smooth, safe trimming.", cat: "grooming", price: 1500, img: "/images/trixie_scissors.png" },
  { id: 6, name: "Heads Up For Tails Orthopedic Memory Foam Dog Bed", desc: "High-density pressure-relieving foam core that supports aching joints and ensures restful sleep.", cat: "accessories", price: 2400, img: "/images/hutf_dog_bed.png" },
  { id: 7, name: "Outward Hound Fun Feeder Interactive Puzzle Bowl", desc: "Promotes slow feeding up to 10x, helping to prevent bloating, regurgitation, and canine obesity.", cat: "accessories", price: 600, img: "/images/puzzle_bowl.png" },
  { id: 8, name: "Heads Up For Tails Reflective Active Dog Harness", desc: "Ergonomic, padded no-pull safety harness with high-visibility reflective stitching for evening walks.", cat: "accessories", price: 850, img: "/images/reflective_harness.png" }
];

export default function Products({ onAddToCart }) {
  const [currentCategory, setCurrentCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'nutrition', label: 'Nutrition' },
    { id: 'health', label: 'Health' },
    { id: 'grooming', label: 'Grooming Tools' },
    { id: 'accessories', label: 'Accessories' }
  ];

  const filtered = productsData.filter(p => {
    const matchesCategory = currentCategory === 'all' || p.cat === currentCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products">
      <div className="container">
        <span className="section-eyebrow">
          <ShoppingBasket size={12} /> Product Catalog
        </span>
        <h2 className="section-title">
          Explore our <em>premium ranges</em>
        </h2>

        <div className="catalog-controls">
          <div className="catalog-filters" id="catalogFilters">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${currentCategory === cat.id ? 'active' : ''}`}
                onClick={() => setCurrentCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="catalog-search-wrap">
            <input
              type="text"
              placeholder="Search products..."
              className="catalog-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="catalog-search-icon" size={16} />
          </div>
        </div>

        <div className="products-grid" id="productsGrid">
          {filtered.length === 0 ? (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: 'var(--mid)' }}>
              <Frown size={48} style={{ marginBottom: '12px' }} />
              <p>No products match your search or filter options.</p>
            </div>
          ) : (
            filtered.map(p => (
              <div key={p.id} className="product-card reveal visible">
                <div className="product-img-panel" style={{ overflow: 'hidden' }}>
                  <img 
                    src={p.img} 
                    alt={p.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} 
                    className="product-card-img"
                  />
                </div>
                <div className="product-body">
                  <div className="product-name">{p.name}</div>
                  <div className="product-desc">{p.desc}</div>
                  <div className="product-price">₹{p.price}</div>
                  <div className="product-action">
                    <button
                      className="btn btn-red btn-sm"
                      style={{ flexGrow: 1, borderRadius: 'var(--radius-sm)' }}
                      onClick={() => onAddToCart(p)}
                    >
                      <ShoppingBasket size={14} style={{ marginRight: '4px' }} /> Add to Basket
                    </button>
                  </div>
                  <div className="product-tags">
                    <span className="tag tag-brown">{p.cat}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
