import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log("A problem occurred with the fetch operation: " + error.message);
    }
  };

  const addToCart = (product) => {
    console.log("Adding product: ", product);
    const productWithUniqueId = { ...product, uniqueId: Math.random().toString() };
    setCartItems([...cartItems, productWithUniqueId]);
  };

  const removeFromCart = (product) => {
    console.log("Removing product: ", product);
    setCartItems(cartItems.filter((item) => item.uniqueId !== product.uniqueId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const openCart = () => {
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  const buttonStyle = {
    backgroundColor: '#000',
    color: '#FFB6C1',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    margin: '10px 0',
  };

  return (
    <div>
      {showCart && <Cart cartItems={cartItems} removeFromCart={removeFromCart} clearCart={clearCart} closeCart={closeCart} />}
      <button style={buttonStyle} onClick={openCart}>Open Cart</button>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default App;
