import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  const itemStyle = {
    background: '#000',
    color: '#FFB6C1',
    border: '1px solid #000',
    padding: '10px',
    margin: '10px 0',
  };

  const buttonStyle = {
    backgroundColor: '#FFB6C1',
    color: '#000',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '14px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={itemStyle}>
      <h4>{item.title}</h4>
      <p>Price: ${item.price}</p>
      <button style={buttonStyle} onClick={() => removeFromCart(item)}>Remove</button>
    </div>
  );
};

export default CartItem;
