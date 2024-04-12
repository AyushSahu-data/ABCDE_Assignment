
import React, { useState } from 'react';
import Login from './components/Login';
import ItemList from './components/ItemList';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const items = [
    { id: 1, name: 'Undercity Nike Sack Edition', price: 249, image: 'images/item1.png' },
    { id: 2, name: 'Elite Football Ronaldo Spikes', price: 339, image: 'images/item2.jpg' },
    { id: 3, name: 'Jordan White Jean Edition', price: 241, image: 'images/item3.png' },
  ];
  

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="title">ABCDE Shopping Arena</h1>
      </header>
      <br></br>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <ItemList items={items} addToCart={addToCart} />
          <Cart cartItems={cartItems} />
        </div>
      )}
    </div>
  );
}

export default App;
