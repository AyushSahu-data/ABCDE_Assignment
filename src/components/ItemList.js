import React, { useState } from 'react';
import './itemList.css';
import Checkout from './Checkout';

function ItemList({ items}) {
    const [cartItems, setCartItems] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  alert(`${item.name} added to cart`);
  };

  const handleShowCart = () => {
    if (cartItems.length === 0) {
      alert('Cart is empty!');
    } else {
      const cartItemNames = cartItems.map(item => item.name).join(', ');
      alert(`Cart Items: ${cartItemNames}`);
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Cart is empty! Please add items to the cart before checking out.');
    } else {
      setOrderHistory([...orderHistory, cartItems]);
      setCartItems([]);
      const itemNames = cartItems.map(item => item.name).join(', ');
      alert(`Order placed successfully! Items: ${itemNames}`);
    }
  };

  const handleShowOrderHistory = () => {
    if (orderHistory.length === 0) {
      alert('No orders placed yet!');
    } else {
      const orderHistoryDetails = orderHistory.map((order, index) => `Order ${index + 1}: ${order.map(item => item.name).join(', ')}`).join('\n');
      alert(`Order History:\n${orderHistoryDetails}`);
    }
  };
      
  return (
    <div>
        <Checkout 
        onCheckout={handleCheckout} 
        onShowCart={handleShowCart} 
        onShowOrderHistory={handleShowOrderHistory} // Make sure to pass the onShowCart function
      />
      <h2>Items</h2>
      <div className="item-container">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <img src={`${process.env.PUBLIC_URL}/${item.image}`} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
