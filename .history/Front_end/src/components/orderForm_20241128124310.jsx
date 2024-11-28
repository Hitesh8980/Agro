import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function OrderForm() {
  const location = useLocation();
  const product = location.state?.product; // Access the passed product details from the location state

  const [quantity, setQuantity] = useState('');
  const [buyerName, setBuyerName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [orderId, setOrderId] = useState(null); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!product) {
      alert('No product selected');
      return;
    }

    try {
      const response = await axios.post('https://agro-octr.onrender.com/orders', {
        productId: product._id, 
        quantity,
        buyerName,
        contactInfo,
        deliveryAddress,
      });
      setOrderId(response.data._id); 
      alert('Order placed successfully!');
    } catch (error) {
      alert('Error placing order');
      console.error(error.response?.data); 
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
          <div style={{ marginBottom: '10px' }}>
            <label>Buyer Name: </label>
            <input
              type="text"
              value={buyerName}
              onChange={(e) => setBuyerName(e.target.value)}
              style={{ padding: '10px', width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Contact Info: </label>
            <input
              type="text"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              style={{ padding: '10px', width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Delivery Address: </label>
            <textarea
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              style={{ padding: '10px', width: '100%' }}
            />
          </div>
          <button type="submit" style={{ padding: '10px 20px' }}>Submit Order</button>
        </form>
      ) : (
        <p>No product selected</p>
      )}
      {orderId && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd', backgroundColor: '#f9f9f9' }}>
          <h3>Order Placed Successfully!</h3>
          <p>Your reference number is: <strong>{_id}</strong></p>
        </div>
      )}
    </div>
  );
}

export default OrderForm;
