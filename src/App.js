import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

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

  return (
    <div>
      {cartItems.length > 0 && <Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default App;
