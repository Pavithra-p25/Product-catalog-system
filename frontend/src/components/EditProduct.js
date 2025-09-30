import React, { useEffect, useState } from "react";
import axios from "axios";

function EditProduct({ productId, onClose }) {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    stockQuantity: "",
    supplier: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`http://localhost:8080/api/products/${productId}`);
      setProduct(res.data);
    };
    fetchProduct();
  }, [productId]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/products/${productId}`, product);
    alert("Product updated successfully!");
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Product</h2>
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
      <button type="submit">Update Product</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
}

export default EditProduct;
