import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, removeFromCart, clearCart, closeCart }) => {
  const cartStyle = {
    background: '#FFB6C1',
    border: '1px solid #000',
    padding: '20px',
    maxWidth: '80%',
    margin: '20px auto',
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

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={cartStyle}>
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <CartItem key={item.uniqueId} item={item} removeFromCart={removeFromCart} />
      ))}
      <p>Total: ${total.toFixed(2)}</p>
      <button style={buttonStyle} onClick={clearCart}>Clear Cart</button>
      <button style={buttonStyle} onClick={closeCart}>Close Cart</button>
    </div>
  );
};

export default Cart;
