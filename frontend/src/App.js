// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ProductsList from "./ProductsList";
import SobreNos from "./SobreNos";
import Footer from "./Footer";
import logo from "./logo.png";
import { CartProvider } from "./CartContext";
import SearchBar from "./SearchBar"; // Import the SearchBar
import CartPage from "./Cart";
import Perks from "./Perks";

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Padaria", path: "/padaria" },
    { text: "Pastelaria", path: "/pastelaria" },
    { text: "Mercearia", path: "/mercearia" },
    { text: "Sobre nós", path: "/sobre-nos" },
  ];

  const drawer = (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      style={{ width: 250 }}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem button component={Link} to={item.path} key={index}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <ListItem button component={Link} to="/cart">
          <ShoppingCartIcon />
          <ListItemText primary="Cart" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <CartProvider>
      <Router>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            margin: "0",
            padding: "0",
            overflowX: "hidden", // Prevent horizontal overflow
          }}
        >
          <nav
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              backgroundColor: "#FFD700", // Dark yellow color
              position: "fixed",
              width: "100%",
              top: "0",
              zIndex: "1000",
              boxSizing: "border-box", // Ensure padding and borders are included in width calculation
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={logo} alt="Home" style={{ height: "40px" }} />
            </Link>
            <SearchBar /> {/* Add SearchBar here */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px", // Add spacing between menu items
              }}
            >
              <div
                className="desktop-menu"
                style={{ display: "flex", gap: "10px" }}
              >
                {menuItems.map((item, index) => (
                  <Link
                    to={item.path}
                    key={index}
                    style={{ textDecoration: "none" }}
                  >
                    <Button variant="outlined">{item.text}</Button>
                  </Link>
                ))}
                <Link to="/cart" style={{ textDecoration: "none" }}>
                  <IconButton>
                    <ShoppingCartIcon />
                  </IconButton>
                </Link>
              </div>
              <div className="mobile-menu" style={{ display: "none" }}>
                <IconButton onClick={toggleDrawer(true)}>
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={toggleDrawer(false)}
                >
                  {drawer}
                </Drawer>
              </div>
            </div>
          </nav>
          <main
            style={{
              flex: "1",
              marginTop: "60px", // Adjust according to navbar height
              marginBottom: "200px", // Add margin-bottom for spacing
              padding: "0",
            }}
          >
            <Routes>
              <Route path="/" element={<div>Welcome to our store</div>} />
              <Route
                path="/padaria"
                element={<ProductsList category="padaria" />}
              />
              <Route
                path="/pastelaria"
                element={<ProductsList category="pastelaria" />}
              />
              <Route
                path="/mercearia"
                element={<ProductsList category="mercearia" />}
              />
              <Route path="/sobre-nos" element={<SobreNos />} />
              <Route path="/cart" element={<CartPage />} />{" "}
              {/* Add CartPage route */}
            </Routes>
          </main>
          <Footer
            style={{
              position: "fixed",
              bottom: "0",
              width: "100%",
              boxSizing: "border-box", // Ensure padding and borders are included in width calculation
            }}
          />
        </div>
        <style>
          {`
            @media (max-width: 768px) {
              .desktop-menu {
                display: none;
              }
              .mobile-menu {
                display: block;
              }
            }
          `}
        </style>
      </Router>
      <Perks />
    </CartProvider>
  );
};

export default App;
