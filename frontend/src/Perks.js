import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material"; // Import MUI components

const perks = [
  {
    name: "CEREAIS 100% LOCAIS",
    Icon: "🌾", // Emoji for grains
    description:
      "Gleba é o regresso às origens e aos cereais cultivados nos nossos solos, com variedades antigas e sustentáveis.",
  },
  {
    name: "MOAGEM EM MÓS DE PEDRA",
    Icon: "🔄", // Emoji for rotation (symbolizing the grinding process)
    description:
      "Moer a nossa própria farinha permite-nos usá-la no pico máximo da sua qualidade, sem recurso a quaisquer corantes e conservantes.",
  },
  {
    name: "FERMENTAÇÃO NATURAL",
    Icon: "☁️", // Emoji for cloud (symbolizing natural fermentation)
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
        marginBottom: "80px", // Add margin bottom to ensure spacing from the footer
      }}
    >
      <Container>
        <Grid container spacing={3}>
          {perks.map((perk, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper style={{ padding: "20px", textAlign: "center" }}>
                <Typography
                  variant="h3"
                  component="div"
                  style={{ marginBottom: "10px" }}
                >
                  {perk.Icon} {/* Display emoji icon */}
                </Typography>
                <Typography
                  variant="h6"
                  component="h3"
                  style={{ fontWeight: "bold" }}
                >
                  {perk.name}
                </Typography>
                <Typography variant="body1">{perk.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Perks;
