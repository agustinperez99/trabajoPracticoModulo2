import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`/products.json`)
      .then(response => response.json())
      .then(data => {
        const product = data.find(p => p.id === parseInt(id));
        setProduct(product);
      });
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="product-image" />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button>Comprar</button>
    </div>
  );
};

export default ProductDetail;
