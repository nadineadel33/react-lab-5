import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    fetch('http://localhost:8000/products/' + id, {
      method: 'DELETE'
    }).then(() => navigate('/'));
  };

  return (
    <div>
      <h2>Product Details</h2>
      {/* Product details */}
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default ProductDetails;
