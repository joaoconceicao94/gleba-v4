import React from "react";
import { Container, Typography, Box } from "@mui/material";

// Example data for the image and text
const largeImage = {
  url: "https://mygleba.com/images/products/8yaycn-jorge03.png", // Replace with your image URL
  text: "A nossa farinha é moída no nosso moinho de pedra e o nosso pão levedado com fermento natural.",
};

// Slider settings (customize as needed)
// const sliderSettings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

const SobreNos = () => {
  return (
    <Container>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
      ></Typography>

      {/* Large Image with Text */}
      <Box position="relative" height="500px" mb={4}>
        <Box
          height="100%"
          sx={{
            backgroundImage: `url(${largeImage.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            borderRadius: "8px", // Optional: Add border-radius if needed
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              textAlign: "center",
              width: "80%", // Adjust width if needed
            }}
          >
            {largeImage.text}
          </Typography>
        </Box>
      </Box>

      {/* Additional Information */}
      <Box my={4} textAlign="center">
        <Typography
          variant="h6"
          component="p"
          sx={{ fontWeight: "bold", fontSize: "1.5rem", mb: 3 }}
        >
          A unicidade da nossa padaria começa com a matéria-prima de origem 100%
          portuguesa.
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{ fontWeight: "bold", fontSize: "1.5rem", mb: 3 }}
        >
          Na Gleba, favorecemos cereais provenientes de pequenos agricultores
          com práticas de agricultura sustentáveis.
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
        >
          A nossa farinha é moída no nosso moinho de pedra e o nosso pão
          levedado com fermento natural.
        </Typography>
      </Box>
    </Container>
  );
};

export default SobreNos;
