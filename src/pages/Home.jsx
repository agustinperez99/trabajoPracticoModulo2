import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="container">
      <h1>Productos</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
