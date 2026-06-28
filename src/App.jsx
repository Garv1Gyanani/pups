import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeStrip from './components/MarqueeStrip';
import About from './components/About';
import Services from './components/Services';
import PetTypes from './components/PetTypes';
import Products from './components/Products';
import Grooming from './components/Grooming';
import WhyChooseUs from './components/WhyChooseUs';
import Locations from './components/Locations';
import Reviews from './components/Reviews';
import Tips from './components/Tips';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import BookingModal from './components/BookingModal';
import BlogDetails from './components/BlogDetails';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [cartState, setCartState] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeBlog, setActiveBlog] = useState(null);

  // Cart Handlers
  const handleAddToCart = (product) => {
    setCartState(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQty = (productId, change) => {
    setCartState(prev => {
      return prev
        .map(item => {
          if (item.id === productId) {
            const nextQty = item.qty + change;
            return { ...item, qty: nextQty };
          }
          return item;
        })
        .filter(item => item.qty > 0);
    });
  };

  const handleRemoveItem = (productId) => {
    setCartState(prev => prev.filter(item => item.id !== productId));
  };

  const handleScroll = () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }
    setShowBackToTop(window.scrollY > 500);

    // Section scroll highlighting logic
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(s => {
      const offsetTop = s.offsetTop - 120;
      if (window.scrollY >= offsetTop) {
        current = s.id;
      }
    });

    document.querySelectorAll('.nav-links a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const totalCartCount = cartState.reduce((sum, item) => sum + item.qty, 0);

  const resetToHome = () => {
    setActiveBlog(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar
        cartCount={totalCartCount}
        onCartClick={() => setIsCartOpen(true)}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onLinkClick={() => setActiveBlog(null)}
        onBookClick={() => {
          setIsBookingOpen(true);
          setMobileMenuOpen(false);
        }}
      />
      
      {activeBlog ? (
        <BlogDetails 
          blog={activeBlog} 
          onBack={resetToHome} 
          onNavigateBlog={setActiveBlog}
        />
      ) : (
        <main>
          <Hero />
          <MarqueeStrip />
          <About />
          <Services />
          <PetTypes />
          <Products onAddToCart={handleAddToCart} />
          <Grooming onBookClick={() => setIsBookingOpen(true)} />
          <WhyChooseUs />
          <Locations />
          <Reviews />
          <Tips onBlogClick={setActiveBlog} />
          <Faq />
          <Contact />
        </main>
      )}

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartState}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      <button
        id="back-top"
        className={showBackToTop ? 'show' : ''}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
