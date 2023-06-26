import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  // Removed the 'key' prop from the div as it is not required here
  return (
    <div>
      <h4>{item.title}</h4>
      <button onClick={() => removeFromCart(item)}>Remove</button>
    </div>
  );
};

export default CartItem;
