import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import './productinput.css'
const ProductForm = ({ onAddProduct }) => {
  const [productId, setProductId] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productName, setProductName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (productId && productPrice && productName) {
      const newProduct = {
        productId,
        productPrice,
        productName,
      };

      onAddProduct(newProduct);

      setProductId('');
      setProductPrice('');
      setProductName('');
    }
  };

  return (<Card>
    <form className='form' onSubmit={handleSubmit}>
      <div className="input" >
        <label>Product ID:</label>
        <input
          type="number"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
      </div>
      <div className="input" >
        <label>Product Price:</label>
        <input
          type="number"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
      </div>
      <div className="input" >
        <label>Product Name:</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <Button type="submit">Add Product</Button>
    </form>
    </Card>
  );
};

export default ProductForm;
