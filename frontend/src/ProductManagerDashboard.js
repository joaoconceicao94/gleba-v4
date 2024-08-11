import React from "react";
import ProductManager from "./ProductManager"; // Import the ProductManager component
import "./output.css"; // Import your styles

const ProductManagerDashboard = () => {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold mb-6"></h1>
      <ProductManager />
    </div>
  );
};

export default ProductManagerDashboard;
