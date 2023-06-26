import React, { useState } from 'react';

const Product = ({ product, addToCart }) => {
  const { title, price, image, description } = product;
  const [showDescription, setShowDescription] = useState(false);

  const handleImageClick = () => {
    setShowDescription(true);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{title}</h2>
      <img 
        src={image} 
        alt={title} 
        style={{width: '250px', height: '250px', cursor: 'pointer'}} 
        onClick={handleImageClick}
      />
      {showDescription && <p>{description}</p>}
      <p>${price}</p>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
};

export default Product;
