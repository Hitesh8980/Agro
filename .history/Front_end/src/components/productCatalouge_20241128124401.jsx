import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProductCatalogue() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://agro-octr.onrender.com/products/');
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  const handleOrderNow = (product) => {
    navigate('/order-form', { state: { product } });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Product Catalogue</h2>
      <div style={styles.productGrid}>
        {products.map((product) => (
          <div key={product._id} style={styles.productCard}>
            <img
              src={product.image || 'https://via.placeholder.com/150x150'} 
              alt={product.name}
              style={styles.productImage}
            />
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productPrice}>Price: ₹{product.price}</p>
            <button onClick={() => handleOrderNow(product)} style={styles.orderButton}>
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#F1F8E9', 
    minHeight: '100vh',
  },
  heading: {
    textAlign: 'center',
    color: '#2E7D32', 
    marginBottom: '20px',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  productGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: '20px',
  },
  productCard: {
    backgroundColor: 'white',
    border: '1px solid #C5E1A5', 
    borderRadius: '8px',
    padding: '15px',
    width: '250px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
  },
  productCardHover: {
    transform: 'scale(1.05)', 
  },
  productImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  productName: {
    color: '#33691E', 
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  productPrice: {
    color: '#558B2F', 
    fontSize: '1rem',
    marginBottom: '15px',
  },
  orderButton: {
    padding: '10px 15px',
    backgroundColor: '#43A047', 
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
  orderButtonHover: {
    backgroundColor: '#2E7D32', 
  },
};

export default ProductCatalogue;
