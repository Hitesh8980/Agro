import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OrderTracking() {
  const [orderId, setOrderId] = useState('');
  const [orderDetails, setOrderDetails] = useState(null);

  const handleTrackOrder = async () => {
    const response = await axios.get(`https://agro-octr.onrender.com/orders/${orderId}`);
    setOrderDetails(response.data);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Track Your Order</h2>
      <input
        type="text"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        style={{ padding: '10px', width: '100%' }}
        placeholder="Enter Order ID"
      />
      <button onClick={handleTrackOrder} style={{ padding: '10px 20px' }}>Track Order</button>

      {orderDetails && (
        <div style={{ marginTop: '20px' }}>
          <h3>Order Details</h3>
          <p>Status: {orderDetails.status}</p>
          <p>Product: {orderDetails.productName}</p>
          <p>Quantity: {orderDetails.quantity}</p>
        </div>
      )}
    </div>
  );
}

export default OrderTracking;
