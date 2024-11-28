import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function OrderForm() {
  const location = useLocation();
  const product = location.state?.product; // Access the passed product details from the location state

  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!product) {
      alert('No product selected');
      return;
    }
    
    try {
      const response = await axios.post('https://agro-octr.onrender.com/orders', {
        productId: product._id, // Send the product ID to the backend
        quantity
      });
      alert('Order placed successfully!');
    } catch (error) {
      alert('Error placing order');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Place Order</h2>
      {product ? (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>Product Name: </label>
            <input
              type="text"
              value={product.name}  
              readOnly  
              style={{ padding: '10px', width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Quantity: </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              style={{ padding: '10px', width: '100%' }}
            />
          </div>
          <button type="submit" style={{ padding: '10px 20px' }}>Submit Order</button>
        </form>
      ) : (
        <p>No product selected</p>
      )}
    </div>
  );
}

export default OrderForm;
