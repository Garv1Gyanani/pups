import React, { useState } from 'react';
import { Phone, MapPin, Send } from 'lucide-react';

const FacebookIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    petInfo: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, petInfo, subject, message } = formData;

    if (!name || !phone || !message) {
      alert("Please fill in your Name, Phone Number, and Message details.");
      return;
    }

    const queryText = `Hello PUPS team, I have an enquiry:\n\n` +
      `• Name: ${name}\n` +
      `• Phone: ${phone}\n` +
      `• Pet: ${petInfo || 'N/A'}\n` +
      `• Category: ${subject || 'General'}\n` +
      `• Message: ${message}`;

    const encodedText = encodeURIComponent(queryText);
    window.open(`https://wa.me/919415008457?text=${encodedText}`, "_blank");
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-left reveal visible">
            <h2>Get in Touch With PUPS</h2>
            <p>
              Whether you have a question about a product, want to book a grooming session, or need help choosing the
              right food for your pet — we're just a call or message away.
            </p>
            <div className="contact-options">
              <a href="tel:09415008457" className="contact-option">
                <span className="co-icon"><Phone size={20} /></span>
                <div>
                  <div className="co-label">Indira Nagar Store</div>
                  <div className="co-val">094150 08457</div>
                </div>
              </a>
              <a href="tel:07705064481" className="contact-option">
                <span className="co-icon"><Phone size={20} /></span>
                <div>
                  <div className="co-label">Gomti Nagar Store</div>
                  <div className="co-val">077050 64481</div>
                </div>
              </a>
              <a href="https://facebook.com/pups4pets" target="_blank" rel="noopener noreferrer" className="contact-option">
                <span className="co-icon"><FacebookIcon /></span>
                <div>
                  <div className="co-label">Facebook</div>
                  <div className="co-val">facebook.com/pups4pets</div>
                </div>
              </a>
              <a href="https://maps.google.com/?q=A-967/23+Indira+Nagar+Lucknow" target="_blank" rel="noopener noreferrer" className="contact-option">
                <span className="co-icon"><MapPin size={20} /></span>
                <div>
                  <div className="co-label">Find Us On Maps</div>
                  <div className="co-val">Get Directions</div>
                </div>
              </a>
            </div>
          </div>
          <div className="contact-right reveal visible">
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                className="cf-input"
                id="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className="cf-input"
                id="phone"
                type="tel"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                className="cf-input"
                id="petInfo"
                type="text"
                placeholder="Your Pet's Name & Type"
                value={formData.petInfo}
                onChange={handleChange}
              />
              <select
                className="cf-input"
                id="subject"
                style={{ color: 'rgba(255,255,255,0.7)' }}
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="" disabled style={{ color: '#333' }}>What Can We Help With?</option>
                <option value="Pet Food Recommendation" style={{ color: '#333' }}>Pet Food Recommendation</option>
                <option value="Grooming Booking (Gomti Nagar)" style={{ color: '#333' }}>Grooming Booking (Gomti Nagar)</option>
                <option value="Home Delivery Order" style={{ color: '#333' }}>Home Delivery Order</option>
                <option value="Product Availability Query" style={{ color: '#333' }}>Product Availability Query</option>
                <option value="General Enquiry" style={{ color: '#333' }}>General Enquiry</option>
              </select>
              <textarea
                className="cf-input cf-textarea"
                id="message"
                placeholder="Tell us more about your pet or enquiry..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="cf-submit">
                <Send size={16} /> Send Message
              </button>
              <p className="cf-note">
                We typically respond within a few hours during store hours (11 AM onwards daily). For urgent queries please call us directly.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
