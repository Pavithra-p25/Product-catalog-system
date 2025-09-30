import React, { useEffect, useState } from "react";
import axios from "axios";
import EditProduct from "./EditProduct";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      await axios.delete(`http://localhost:8080/api/products/${id}`);
      fetchProducts();
    }
  };

  const filteredProducts = products
    .filter((p) =>
      filter ? p.category.toLowerCase().includes(filter.toLowerCase()) : true
    )
    .filter((p) =>
      search ? p.name.toLowerCase().includes(search.toLowerCase()) : true
    );

  return (
    <div>
      <h2>Product List</h2>
      <input
        placeholder="Filter by category"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <input
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {editProductId ? (
        <EditProduct
          productId={editProductId}
          onClose={() => {
            setEditProductId(null);
            fetchProducts();
          }}
        />
      ) : (
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Supplier</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>{p.description}</td>
                <td>{p.price}</td>
                <td>{p.stockQuantity}</td>
                <td>{p.supplier}</td>
                <td>
                  <button onClick={() => setEditProductId(p.id)}>Edit</button>
                  <button onClick={() => handleDelete(p.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProductList;
