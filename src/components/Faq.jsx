import React, { useState } from 'react';
import { HelpCircle, Plus } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Do you offer home delivery?",
      a: "Yes! We offer home delivery across Lucknow from both our stores. You can place your order by calling us directly or messaging us on WhatsApp. Our team will confirm your order and arrange a convenient delivery time."
    },
    {
      q: "Do I need to book an appointment for grooming?",
      a: "Grooming services are available at our Gomti Nagar store. We recommend calling ahead to book a slot, especially on weekends, as grooming appointments can fill up quickly. Walk-ins are welcome subject to availability."
    },
    {
      q: "Which brands of pet food do you carry?",
      a: "We carry a wide range of trusted brands including Royal Canin, Purina Pro Plan, Drools, Pedigree, Whiskas, Me-O, Farmina, Himalaya, Heads Up For Tails, Beaphar, and many more. Our range covers dogs, cats, birds, fish, and small animals. Call us to check if we have a specific brand or product."
    },
    {
      q: "Can you help me choose the right food for my pet?",
      a: "Absolutely! Our staff is trained in pet nutrition and loves helping pet parents find the best food for their animals. Just visit us in store, call us, or message us on WhatsApp and tell us about your pet — breed, age, weight, any health concerns — and we'll guide you to the best options."
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq">
      <div className="container">
        <div className="faq-grid">
          <div className="faq-intro">
            <span className="section-eyebrow">
              <HelpCircle size={12} /> FAQ
            </span>
            <h2 className="section-title">
              Common questions from <em>pet parents</em>
            </h2>
            <p className="section-lead">Can't find your answer here? Just call us — our team is always happy to help.</p>
            <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="tel:09415008457" className="btn btn-red">📞 Indira Nagar: 094150 08457</a>
              <a href="tel:07705064481" className="btn btn-outline-brown">📞 Gomti Nagar: 077050 64481</a>
            </div>
          </div>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openIndex === idx ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => handleToggle(idx)}>
                  {faq.q}
                  <span className="faq-toggle">
                    <Plus size={16} style={{ transform: openIndex === idx ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s' }} />
                  </span>
                </button>
                <div className="faq-a">
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
