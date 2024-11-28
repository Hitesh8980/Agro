// src/pages/AdminDashboardPage.js
import React from 'react';
import AdminDashboard from '../components/AdminDashboard';

function AdminDashboardPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Admin Dashboard</h2>
      <AdminDashboard /> {/* Display admin-specific tools */}
    </div>
  );
}

export default AdminDashboardPage;
