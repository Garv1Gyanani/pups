import React from 'react';
import { ShoppingBasket, X, Trash2, MessageSquare } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQty, onRemoveItem }) {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const submitWhatsAppOrder = () => {
    if (cartItems.length === 0) {
      alert("Your basket is empty. Please add items to complete an order.");
      return;
    }

    let orderText = "Hello PUPS Pet Care Store, I would like to order the following items:\n\n";
    let grandTotal = 0;
    cartItems.forEach((item, i) => {
      const itemSubtotal = item.price * item.qty;
      grandTotal += itemSubtotal;
      orderText += `${i + 1}. ${item.name} (Qty: ${item.qty}) - ₹${itemSubtotal}\n`;
    });
    orderText += `\n*Grand Total: ₹${grandTotal}*\n\nPlease confirm availability and deliver to my address.`;

    const encodedText = encodeURIComponent(orderText);
    // Default to main store contact
    window.open(`https://wa.me/919415008457?text=${encodedText}`, "_blank");
  };

  return (
    <>
      <div 
        className={`cart-drawer-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
      ></div>
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`} id="cartDrawer">
        <div className="cart-header">
          <h3><ShoppingBasket /> Your Basket</h3>
          <button className="close-cart-btn" onClick={onClose} aria-label="Close Cart">
            <X size={20} />
          </button>
        </div>
        <div className="cart-items-container" id="cartItemsContainer">
          {cartItems.length === 0 ? (
            <div className="cart-empty-state">
              <ShoppingBasket size={48} style={{ color: 'var(--light)' }} />
              <p>Your basket is currently empty.</p>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">₹{item.price}</div>
                  <div className="cart-item-ctrl">
                    <button className="qty-btn" onClick={() => onUpdateQty(item.id, -1)}>-</button>
                    <span className="qty-val">{item.qty}</span>
                    <button className="qty-btn" onClick={() => onUpdateQty(item.id, 1)}>+</button>
                  </div>
                </div>
                <button 
                  className="remove-item-btn" 
                  onClick={() => onRemoveItem(item.id)} 
                  aria-label="Remove item"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))
          )}
        </div>
        <div className="cart-footer">
          <div className="cart-summary-row">
            <span>Total Estimated Price:</span>
            <span id="cartTotalPrice">₹{total}</span>
          </div>
          <button 
            className="btn btn-red" 
            style={{ width: '100%', borderRadius: 'var(--radius-sm)' }} 
            onClick={submitWhatsAppOrder}
          >
            <MessageSquare size={16} style={{ marginRight: '4px' }} /> Order via WhatsApp
          </button>
        </div>
      </div>
    </>
  );
}
