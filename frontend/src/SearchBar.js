import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  MenuItem,
  Menu,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// utils/debounce.js
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [sortedResults, setSortedResults] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [sortOption, setSortOption] = useState(""); // State for sorting option
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (event) => {
    setQuery(event.target.value);
    debouncedFetchResults(event.target.value);
  };

  // Fetch and filter products based on the query
  const fetchResults = async (query) => {
    if (query.length > 0) {
      try {
        const response = await fetch(`http://localhost:3000/products`);
        const data = await response.json();
        const filteredResults = data.filter(
          (product) =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredResults);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    } else {
      setResults([]);
    }
  };

  // Debounced fetch results function
  const debouncedFetchResults = useCallback(debounce(fetchResults, 300), []);

  // Sort the results based on selected criteria
  useEffect(() => {
    let sorted = [...results];
    if (sortOption === "alphabetical") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "price-low-high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high-low") {
      sorted.sort((a, b) => b.price - a.price);
    }
    setSortedResults(sorted);
  }, [sortOption, results]);

  // Open or close the results menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Navigate to product details when a result is clicked
  const handleResultClick = (productId) => {
    navigate(`/product/${productId}`);
    handleClose();
  };

  return (
    <div style={{ position: "relative" }}>
      <TextField
        value={query}
        onChange={handleChange}
        onClick={handleClick}
        placeholder="Search products..."
        variant="outlined"
        size="small"
        style={{ width: "300px" }}
        InputProps={{
          endAdornment: (
            <IconButton edge="end" onClick={handleClick}>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl) && results.length > 0}
        onClose={handleClose}
        style={{ maxHeight: "300px", overflowY: "auto" }}
      >
        <div style={{ padding: "10px" }}>
          <Button
            variant="outlined"
            onClick={() => setSortOption("alphabetical")}
            style={{ marginRight: "5px" }}
          >
            Ordem Alfabética
          </Button>
          <Button
            variant="outlined"
            onClick={() => setSortOption("price-low-high")}
            style={{ marginRight: "5px" }}
          >
            Preço mais baixo
          </Button>
          <Button
            variant="outlined"
            onClick={() => setSortOption("price-high-low")}
            style={{ marginRight: "5px" }}
          >
            Preço mais alto
          </Button>
        </div>
        <Divider />
        {sortedResults.length > 0 ? (
          sortedResults.map((product) => (
            <MenuItem
              key={product._id}
              onClick={() => handleResultClick(product._id)}
            >
              <div>
                <strong>{product.name}</strong>
                <div>{product.description}</div>
                <div>{product.price}€</div>
              </div>
            </MenuItem>
          ))
        ) : (
          <MenuItem>Sem resultados</MenuItem>
        )}
      </Menu>
    </div>
  );
};

export default SearchBar;
