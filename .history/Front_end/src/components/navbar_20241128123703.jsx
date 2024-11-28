import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <img
          src="https://via.placeholder.com/50x50?text=LOGO" // Replace with your logo URL
          alt="Logo"
          style={{ height: '40px' }}
        />
        <span style={styles.brandName}>AgroMart</span>
      </div>
      <div style={styles.links}>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/admin-dashboard" style={styles.link}>Admin Dashboard</Link>
        <Link to="/user-dashboard" style={styles.link}>User Dashboard</Link>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2E7D32', 
    padding: '10px 20px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    color: 'white',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  brandName: {
    marginLeft: '10px',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#FFD600', 
  },
  links: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1rem',
    fontWeight: '600',
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
  linkHover: {
    backgroundColor: '#43A047', 
  },
};

export default Navbar;
