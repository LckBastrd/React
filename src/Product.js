import React, { useState } from 'react';

const Product = ({ product, addToCart }) => {
  const { title, price, image, description } = product;
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const productStyle = {
    textAlign: 'center',
    border: '1px solid #000',
    borderRadius: '4px',
    padding: '10px',
    margin: '10px',
    backgroundColor: '#FFB6C1',
    color: '#000',
  };

  const imageStyle = {
    width: '250px',
    height: '250px',
    cursor: 'pointer',
    objectFit: 'cover',
    marginBottom: '10px',
  };

  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#f2f2f2',
    border: '1px solid #000',
    padding: '50px',
    maxWidth: '80%',
    maxHeight: '80%',
    overflow: 'auto',
  };

  const buttonStyle = {
    backgroundColor: '#000',
    color: '#FFB6C1',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={productStyle}>
      <h2>{title}</h2>
      <img 
        src={image} 
        alt={title} 
        style={imageStyle} 
        onClick={handleImageClick}
      />
      {showModal && 
        <div style={modalStyle}>
          <h2>{title}</h2>
          <img 
            src={image} 
            alt={title} 
            style={imageStyle}
          />
          <p>{description}</p>
          <p>${price}</p>
          <button style={buttonStyle} onClick={closeModal}>Close</button>
        </div>
      }
      <p>${price}</p>
      <button style={buttonStyle} onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
};

export default Product;
