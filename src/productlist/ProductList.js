import React from 'react';
import Card from '../UI/Card';

const ProductList = ({ products, onDeleteProduct }) => {
  const handleDelete = (productId) => {
    onDeleteProduct(productId);
  };

  return (<Card className="product-list">
    <div >
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.productId} >
       <li className="product-item">{product.productPrice}(-{product.productName})
          
          <button onClick={() => handleDelete(product.productId)}>Delete</button></li> 
        </div>
      ))}
    </div>
    </Card>
  );
};

export default ProductList;
