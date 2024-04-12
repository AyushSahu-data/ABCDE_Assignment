import React from 'react';

function Cart({ cartItems }) {
  return (
    <div>
      
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
