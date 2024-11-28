// src/components/ProductCatalogue.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductCatalogue() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://localhost:5003/products'); // Fetch products
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Product Catalogue</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div key={product._id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', width: '30%' }}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button style={{ padding: '10px 20px' }}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCatalogue;
