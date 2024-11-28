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
    <div style={{ padding: '20px' }}>
      <h2>Product Catalogue</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div key={product._id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', width: '30%' }}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button  style={{ padding: '10px 20px' }}>Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCatalogue;
