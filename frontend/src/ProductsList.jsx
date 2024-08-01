// src/ProductsList.js
import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard"; // Import ProductCard component
import { useCart } from "./CartContext";

const ProductsList = ({ category }) => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/products?category=${category}`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <Container>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product._id}>
            <div style={{ height: "100%" }}>
              <ProductCard product={product} addToCart={addToCart} />
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsList;
