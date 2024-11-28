// src/pages/UserDashboardPage.js
import React from 'react';
import ProductCatalogue from '../components/ProductCatalogue';
import OrderTracking from '../components/OrderTracking';

function UserDashboardPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>User Dashboard</h2>
      <ProductCatalogue /> {/* Display products */}
      <OrderTracking /> {/* Allow users to track orders */}
    </div>
  );
}

export default UserDashboardPage;
