// src/pages/UserDashboardPage.js
import React from 'react';
import ProductCatalogue from '../components/productCatalouge';
import OrderTracking from '../components/orderTracking';

function UserDashboardPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>User Dashboard</h2>
      <ProductCatalogue /> 
      <OrderTracking /> 
    </div>
  );
}

export default UserDashboardPage;
