import React, { useState } from "react";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import "./Dashboard.css"; // separate CSS for dashboard

function Dashboard() {
  const [view, setView] = useState("list");

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <button onClick={() => setView("list")}>List Products</button>
        <button onClick={() => setView("add")}>Add Product</button>
        <button onClick={() => window.location.reload()}>Logout</button>
      </aside>

      <main className="main-content">
        {view === "add" && <AddProduct />}
        {view === "list" && <ProductList />}
      </main>
    </div>
  );
}

export default Dashboard;
