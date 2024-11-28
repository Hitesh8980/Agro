import React, { useState } from 'react';
import axios from 'axios';

function OrderTracking() {
  const [orderId, setOrderId] = useState('');
  const [orderDetails, setOrderDetails] = useState(null);

  const handleTrackOrder = async () => {
    try {
      const response = await axios.get(`https://agro-octr.onrender.com/orders/${orderId}`);
      setOrderDetails(response.data);
    } catch (error) {
      console.error('Error fetching order details:', error);
      alert('Failed to track the order. Please check the order ID.');
    }
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
        <div style={{ marginTop: '20px', border: '1px solid #ddd', padding: '20px' }}>
          <h3>Order Details</h3>
          <p>Status: {orderDetails.status || 'Unknown'}</p>
          <p>Buyer Name: {orderDetails.buyerName}</p>
          <p>Contact Info: {orderDetails.contactInfo}</p>
          <p>Delivery Address: {orderDetails.deliveryAddress}</p>

          <h4>Items:</h4>
          {orderDetails.items && orderDetails.items.length > 0 ? (
            <ul>
              {orderDetails.items.map((item, index) => (
                <li key={index}>
                  Product: {item.product.name} | Quantity: {item.quantity}
                </li>
              ))}
            </ul>
          ) : (
            <p>No items in the order.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default OrderTracking;
