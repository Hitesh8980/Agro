// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: 'white' }}>
      <Link to="/login" style={{ color: 'white', marginRight: '10px' }}>Login</Link>
      <Link to="/admin-dashboard" style={{ color: 'white', marginRight: '10px' }}>Admin Dashboard</Link>
      <Link to="/user-dashboard" style={{ color: 'white' }}>User Dashboard</Link>
    </nav>
  );
}

export default Navbar;
