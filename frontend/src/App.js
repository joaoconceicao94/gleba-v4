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
import SearchBar from "./SearchBar";
import CartPage from "./Cart";
import Perks from "./Perks";
import Banner from "./Banner";
import WelcomeBanner from "./WelcomeBanner";
import "./output.css";
import MelhorPao from "./MelhorPao";
import AdminDashboard from "./AdminDashboard";

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
            overflowX: "hidden",
          }}
        >
          <nav
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              backgroundColor: "#FFD700",
              position: "fixed",
              width: "100%",
              top: "0",
              zIndex: "1000",
              boxSizing: "border-box",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={logo} alt="Home" style={{ height: "40px" }} />
            </Link>
            <div
              className="nav-content"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <SearchBar />
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
              marginTop: "60px",
              marginBottom: "200px",
              padding: "0",
            }}
          >
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <MelhorPao />
                    <Banner />
                    &nbsp;
                    <Perks />
                    {/* Other components that should be shown on the home page */}
                  </>
                }
              />
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
              <Route path="/cart" element={<CartPage />} />

              {/* Admin dashboard route */}
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </main>

          <Footer
            style={{
              position: "fixed",
              bottom: "0",
              width: "100%",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Discrete Admin Button */}
        <Link
          to="/admin"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#333",
            color: "#fff",
            padding: "10px 15px",
            borderRadius: "5px",
            textDecoration: "none",
            fontSize: "14px",
            zIndex: "1000",
          }}
        >
          Admin
        </Link>

        <style>
          {`
            @media (max-width: 860px) {
              nav {
                flex-direction: column;
                align-items: flex-start;
              }
              .desktop-menu {
                display: none;
              }
              .mobile-menu {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 10px;
              }
              .nav-content {
                flex-direction: column;
                align-items: flex-start;
                width: 100%;
              }
              .nav-content .search-bar {
                width: 100%;
                margin-bottom: 10px;
              }
              .banner {
                height: 200px;
                font-size: 18px;
              }
            }
          `}
        </style>
      </Router>
    </CartProvider>
  );
};

export default App;
