import React, { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    stockQuantity: "",
    supplier: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/products", product);
      alert("Product added successfully!");
      setProduct({
        name: "",
        category: "",
        description: "",
        price: "",
        stockQuantity: "",
        supplier: "",
      });
    } catch (err) {
      console.error(err);
      alert("Error adding product");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <input
        name="name"
        placeholder="Product Name"
        value={product.name}
        onChange={handleChange}
        required
      />
      <input
        name="category"
        placeholder="Category"
        value={product.category}
        onChange={handleChange}
        required
      />
      <input
        name="description"
        placeholder="Description"
        value={product.description}
        onChange={handleChange}
        required
      />
      <input
        name="price"
        type="number"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
        required
      />
      <input
        name="stockQuantity"
        type="number"
        placeholder="Stock Quantity"
        value={product.stockQuantity}
        onChange={handleChange}
        required
      />
      <input
        name="supplier"
        placeholder="Supplier"
        value={product.supplier}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;
