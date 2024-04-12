import React from 'react';
import './Checkout.css'; 

function Checkout({ onCheckout, onShowCart, onShowOrderHistory }) {
  const handleCheckout = () => {
    
    onCheckout(); 
  };

  const handleShowCart = () => {
    
    onShowCart();
  };

  const handleShowOrderHistory = () => {
    
    onShowOrderHistory();
  };

  return (
    <div className="checkout-container">
      <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
      <button className="cart-button" onClick={handleShowCart}>Cart</button>
      <button className="order-history-button" onClick={handleShowOrderHistory}>Order History</button>
    </div>
  );
}

export default Checkout;
