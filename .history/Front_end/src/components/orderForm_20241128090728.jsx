import React, { useState } from 'react';
import axios from 'axios';

function OrderForm() {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://agro-octr.onrender.com/orders', { productId, quantity });
      alert('Order placed successfully!');
    } catch (error) {
      alert('Error placing order');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Place Order</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Product ID: </label>
          <input
            type="text"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
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
    </div>
  );
}

export default OrderForm;
