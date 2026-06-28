import React from 'react';
import { PawPrint, Phone, ShoppingBasket, User, Sparkles, Smile, ShoppingBag, Scissors, MapPin, Star, BookOpen, HelpCircle, Mail } from 'lucide-react';

export default function Navbar({ cartCount, onCartClick, mobileMenuOpen, setMobileMenuOpen, onBookClick, onLinkClick }) {
  const handleNavClick = () => {
    if (onLinkClick) onLinkClick();
  };

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
    if (onLinkClick) onLinkClick();
  };

  return (
    <nav id="navbar">
      <div className="nav-inner">
        <a href="#hero" className="nav-logo" onClick={handleNavClick}>
          <div className="nav-logo-mark">
            <PawPrint size={22} fill="currentColor" />
          </div>
          <div>
            <div className="nav-logo-text">PUPS<span>.</span></div>
            <div className="nav-logo-sub">Pet Care Store</div>
          </div>
        </a>
        <div className="nav-links">
          <a href="#about" onClick={handleNavClick}>About</a>
          <a href="#services" onClick={handleNavClick}>Services</a>
          <a href="#pet-types" onClick={handleNavClick}>Our Pets</a>
          <a href="#products" onClick={handleNavClick}>Products</a>
          <a href="#grooming" onClick={handleNavClick}>Grooming</a>
          <a href="#locations" onClick={handleNavClick}>Locations</a>
          <a href="#reviews" onClick={handleNavClick}>Reviews</a>
          <a href="#contact" onClick={handleNavClick}>Contact</a>
        </div>
        <div className="nav-actions">
          <span className="nav-phone">
            <Phone size={14} /> 094150 08457
          </span>
          <button className="nav-cart-btn" onClick={onCartClick} aria-label="Open Cart">
            <ShoppingBasket size={22} />
            <span className="cart-badge" id="cartBadgeCount">{cartCount}</span>
          </button>
          <a href="tel:09415008457" className="btn btn-red btn-sm">Call Now</a>
        </div>
        <button 
          className="hamburger" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          aria-label="Menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} id="mobileMenu">
        <a href="#about" onClick={handleMobileNavClick}><User size={16} /> About</a>
        <a href="#services" onClick={handleMobileNavClick}><Sparkles size={16} /> Services</a>
        <a href="#pet-types" onClick={handleMobileNavClick}><Smile size={16} /> Our Pets</a>
        <a href="#products" onClick={handleMobileNavClick}><ShoppingBag size={16} /> Products</a>
        <a href="#grooming" onClick={handleMobileNavClick}><Scissors size={16} /> Grooming</a>
        <a href="#locations" onClick={handleMobileNavClick}><MapPin size={16} /> Locations</a>
        <a href="#reviews" onClick={handleMobileNavClick}><Star size={16} /> Reviews</a>
        <a href="#tips" onClick={handleMobileNavClick}><BookOpen size={16} /> Pet Tips</a>
        <a href="#faq" onClick={handleMobileNavClick}><HelpCircle size={16} /> FAQ</a>
        <a href="#contact" onClick={handleMobileNavClick}><Mail size={16} /> Contact</a>
        <a href="tel:09415008457" style={{ color: 'var(--red)', fontWeight: 700 }}><Phone size={16} /> 094150 08457</a>
        <a href="tel:07705064481" style={{ color: 'var(--red)', fontWeight: 700 }}><Phone size={16} /> 077050 64481</a>
      </div>
    </nav>
  );
}
