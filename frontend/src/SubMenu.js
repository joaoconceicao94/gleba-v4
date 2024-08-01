import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Typography, Grid } from "@mui/material";

const SubMenu = () => {
  return (
    <Container>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Link
            to="/padaria/edicoes-especiais"
            style={{ textDecoration: "none" }}
          >
            <Button variant="outlined" color="primary">
              Edições Especiais
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/padaria/paes-grandes" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="primary">
              Pães Grandes
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/padaria/paes-pequenos" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="primary">
              Pães Pequenos
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/padaria/paes-de-forma" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="primary">
              Pães de Forma
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/padaria/focaccia" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="primary">
              Focaccia
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/padaria/tostas" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="primary">
              Tostas
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SubMenu;
