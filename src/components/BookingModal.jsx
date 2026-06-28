import React, { useState } from 'react';
import { Calendar, X, MessageSquare } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [bookingForm, setBookingForm] = useState({
    ownerName: '',
    ownerPhone: '',
    petBreed: '',
    groomingPackage: 'Basic Bath & Blow Dry',
    bookingDate: '',
    bookingTime: 'Morning (11:00 AM - 1:00 PM)'
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setBookingForm(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const submitGroomingBooking = (e) => {
    e.preventDefault();
    const { ownerName, ownerPhone, petBreed, groomingPackage, bookingDate, bookingTime } = bookingForm;

    if (!ownerName || !ownerPhone || !petBreed || !bookingDate) {
      alert("Please complete all requested registration details.");
      return;
    }

    const bookingText = `Hello PUPS Gomti Nagar, I would like to book a grooming slot:\n\n` +
      `• Owner Name: ${ownerName}\n` +
      `• Phone: ${ownerPhone}\n` +
      `• Pet Details: ${petBreed}\n` +
      `• Package Selected: ${groomingPackage}\n` +
      `• Preferred Date: ${bookingDate}\n` +
      `• Time Window: ${bookingTime}\n\nPlease confirm my slot availability.`;

    const encodedText = encodeURIComponent(bookingText);
    // Gomti Nagar phone line
    window.open(`https://wa.me/917705064481?text=${encodedText}`, "_blank");
    onClose();
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} id="bookingModalOverlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3><Calendar size={18} /> Gomti Nagar Grooming Studio</h3>
          <button className="close-modal-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={submitGroomingBooking} className="booking-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="ownerName">Your Name</label>
                <input 
                  type="text" 
                  id="ownerName" 
                  className="form-input" 
                  placeholder="e.g. Priyal Gupta"
                  value={bookingForm.ownerName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="ownerPhone">Phone Number</label>
                <input 
                  type="tel" 
                  id="ownerPhone" 
                  className="form-input" 
                  placeholder="e.g. 094150 08457"
                  value={bookingForm.ownerPhone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="petBreed">Pet Breed & Type</label>
                <input 
                  type="text" 
                  id="petBreed" 
                  className="form-input" 
                  placeholder="e.g. Persian Cat, Golden Retriever"
                  value={bookingForm.petBreed}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="groomingPackage">Select Package</label>
                <select 
                  id="groomingPackage" 
                  className="form-input"
                  value={bookingForm.groomingPackage}
                  onChange={handleChange}
                >
                  <option value="Basic Bath & Blow Dry">Basic Bath & Blow Dry (Starting ₹399)</option>
                  <option value="Bath + Trim Package">Bath + Trim Package (Starting ₹699)</option>
                  <option value="Full Groom (Breed-Specific)">Full Groom (Starting ₹999)</option>
                  <option value="Spa Package (All Inclusive)">Spa Package (Starting ₹1,499)</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="bookingDate">Preferred Date</label>
                <input 
                  type="date" 
                  id="bookingDate" 
                  className="form-input"
                  value={bookingForm.bookingDate}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="bookingTime">Preferred Time Window</label>
                <select 
                  id="bookingTime" 
                  className="form-input"
                  value={bookingForm.bookingTime}
                  onChange={handleChange}
                >
                  <option value="Morning (11:00 AM - 1:00 PM)">Morning (11:00 AM - 1:00 PM)</option>
                  <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                  <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM - 7:00 PM)</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-red" style={{ marginTop: '10px', borderRadius: 'var(--radius-sm)' }}>
              <MessageSquare size={16} style={{ marginRight: '4px' }} /> Book Session on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
