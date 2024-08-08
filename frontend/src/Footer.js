import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "@mui/material"; // Import MUI components

const Footer = () => {
  return (
    <footer
      style={{
        padding: "20px",
        backgroundColor: "#f8f9fa",
        textAlign: "center",
        position: "fixed",
        bottom: "0",
        width: "100%",
        borderTop: "1px solid #ddd",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <Link to="/padaria" style={{ textDecoration: "none" }}>
          <Button variant="outlined">Padaria</Button>
        </Link>
        <Link to="/pastelaria" style={{ textDecoration: "none" }}>
          <Button variant="outlined">Pastelaria</Button>
        </Link>
        <Link to="/mercearia" style={{ textDecoration: "none" }}>
          <Button variant="outlined">Mercearia</Button>
        </Link>
        <Link to="/sobre-nos" style={{ textDecoration: "none" }}>
          <Button variant="outlined">Sobre nós</Button>
        </Link>
      </div>
      <Typography
        variant="body2"
        color="textSecondary"
        style={{ marginTop: "20px" }}
      >
        &copy; 2024 Gleba. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
