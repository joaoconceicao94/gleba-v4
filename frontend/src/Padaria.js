import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Grid } from "@mui/material";

const Padaria = () => {
  return (
    <Container
      sx={{
        pt: "200px", // Directly set padding-top in pixels
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
      >
        Padaria
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Link
            to="/padaria/edicoes-especiais"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              fullWidth
              sx={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
            >
              Edições Especiais
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/padaria/paes-grandes" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              fullWidth
              sx={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
            >
              Pães Grandes
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/padaria/paes-pequenos" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              fullWidth
              sx={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
            >
              Pães Pequenos
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/padaria/paes-forma" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              fullWidth
              sx={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
            >
              Pães de Forma
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/padaria/focaccia" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              fullWidth
              sx={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
            >
              Focaccia
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/padaria/tostas" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              fullWidth
              sx={{ fontFamily: "Calibri, sans-serif", fontWeight: "bold" }}
            >
              Tostas
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Padaria;
