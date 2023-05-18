import React, { useState, useEffect } from "react";
import ProductList from "./productlist/ProductList";
import ProductInput from "./product-details/ProductInput";
import Card from "./UI/Card";

const App = () => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Load products from local storage on initial render
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const storedTotalPrice =
      parseFloat(localStorage.getItem("totalPrice")) || 0;

    setProducts(storedProducts);
    setTotalPrice(storedTotalPrice);
  }, []);

  // Save products to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("totalPrice", totalPrice);
  }, [products, totalPrice]);

  const handleAddProduct = (newProduct) => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    setTotalPrice(totalPrice + parseFloat(newProduct.productPrice));
  };

  const handleDeleteProduct = (productId) => {
    const deletedProduct = products.find(
      (product) => product.productId === productId
    );
    if (deletedProduct) {
      const updatedProducts = products.filter(
        (product) => product.productId !== productId
      );
      setProducts(updatedProducts);
      setTotalPrice(totalPrice - parseFloat(deletedProduct.productPrice));
    }
  };

  return (
    <React.Fragment>
      <Card>
        <h1>Ecommerce App</h1>
        <ProductInput onAddProduct={handleAddProduct} />
      </Card>
      <Card>
        <ProductList
          products={products}
          onDeleteProduct={handleDeleteProduct}
        />
      </Card>
      <Card>
        <div>Total Price: Rs{totalPrice.toFixed(2)}</div>
      </Card>
    </React.Fragment>
  );
};

export default App;
