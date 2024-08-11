import React from "react";
import { Container, Typography, Grid, Paper, Box } from "@mui/material";

const perks = [
  {
    name: "CEREAIS 100% LOCAIS",
    Icon: "🌾",
    description:
      "Gleba é o regresso às origens e aos cereais cultivados nos nossos solos, com variedades antigas e sustentáveis.",
  },
  {
    name: "MOAGEM EM MÓS DE PEDRA",
    Icon: "🔄",
    description:
      "Moer a nossa própria farinha permite-nos usá-la no pico máximo da sua qualidade, sem recurso a quaisquer corantes e conservantes.",
  },
  {
    name: "FERMENTAÇÃO NATURAL",
    Icon: "☁️",
    description:
      "O nosso pão é fermentado lentamente com massa velha, durante cerca de 24 horas. Este processo facilita enormemente a sua digestão.",
  },
];

const Perks = () => {
  return (
    <section
      style={{
        padding: "20px",
        backgroundColor: "#e9ecef",
        textAlign: "center",
        marginBottom: "80px",
      }}
    >
      <Container>
        <Grid container spacing={3}>
          {perks.map((perk, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                style={{
                  padding: "20px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Typography
                  variant="h3"
                  component="div"
                  style={{ marginBottom: "10px", fontSize: "2.5rem" }}
                >
                  {perk.Icon}
                </Typography>
                <Typography
                  variant="h6"
                  component="h3"
                  style={{ fontWeight: "bold", fontSize: "1.25rem" }}
                >
                  {perk.name}
                </Typography>
                <Box mt={2}>
                  <Typography variant="body1" style={{ fontSize: "1rem" }}>
                    {perk.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Perks;
