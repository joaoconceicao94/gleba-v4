import React from "react";
import { Container, Typography, Box } from "@mui/material";

// Example data for the image and text
const largeImage = {
  url: "https://mygleba.com/images/products/oomiai-malte03.jpg", // Replace with your image URL
  text: "A nossa farinha é moída no nosso moinho de pedra e o nosso pão levedado com fermento natural.",
};

const footerImageUrl =
  "https://offloadmedia.feverup.com/lisboasecreta.co/wp-content/uploads/2018/07/16111546/31693080_2032168960377301_1652260922200162304_o-1024x683.jpg"; // Image to be displayed at the footer

const SobreNos = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh" // Ensure the Box takes at least the full viewport height
    >
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
            A unicidade da nossa padaria começa com a matéria-prima de origem
            100% portuguesa.
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

      {/* Footer Image */}
      <Box
        component="footer"
        sx={{
          mt: "auto", // Push footer to the bottom of the page
          backgroundImage: `url(${footerImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          height: "800px", // Adjust height as needed
          backgroundColor: "transparent", // Ensure no background color interferes with image
        }}
      />
    </Box>
  );
};

export default SobreNos;

// import React from "react";
// import { Container, Typography, Box, Grid } from "@mui/material";

// // Example data for the images and text
// const largeImage = {
//   url: "https://mygleba.com/images/products/8yaycn-jorge03.png", // Replace with your image URL
//   text: "A nossa farinha é moída no nosso moinho de pedra e o nosso pão levedado com fermento natural.",
// };

// const backgroundImageUrl =
//   "https://e7.pngegg.com/pngimages/610/66/png-clipart-rye-bread-soda-bread-sourdough-recipe-bread.png"; // Correctly define the background image URL

// const SobreNos = () => {
//   return (
//     <Container>
//       <Typography variant="h4" component="h2" align="center" gutterBottom>
//         {/* You can add a title here if needed */}
//       </Typography>

//       {/* Large Image with Text */}
//       <Box position="relative" height="500px" mb={4}>
//         <Box
//           height="100%"
//           sx={{
//             backgroundImage: `url(${largeImage.url})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             position: "relative",
//             borderRadius: "8px", // Optional: Add border-radius if needed
//           }}
//         >
//           <Typography
//             variant="h4"
//             sx={{
//               fontWeight: "bold",
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               color: "white",
//               textAlign: "center",
//               width: "80%", // Adjust width if needed
//             }}
//           >
//             {largeImage.text}
//           </Typography>
//         </Box>
//       </Box>

//       {/* Additional Information */}
//       <Box my={4} textAlign="center">
//         <Typography
//           variant="h6"
//           component="p"
//           sx={{ fontWeight: "bold", fontSize: "1.5rem", mb: 3 }}
//         >
//           A unicidade da nossa padaria começa com a matéria-prima de origem 100%
//           portuguesa.
//         </Typography>
//         <Typography
//           variant="h6"
//           component="p"
//           sx={{ fontWeight: "bold", fontSize: "1.5rem", mb: 3 }}
//         >
//           Na Gleba, favorecemos cereais provenientes de pequenos agricultores
//           com práticas de agricultura sustentáveis.
//         </Typography>
//         <Typography
//           variant="h6"
//           component="p"
//           sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
//         >
//           A nossa farinha é moída no nosso moinho de pedra e o nosso pão
//           levedado com fermento natural.
//         </Typography>
//       </Box>

//       {/* Two blocks of text with multiple paragraphs */}
//       <Box my={4}>
//         <Grid container spacing={4} my={4}>
//           {/* First three paragraphs */}
//           <Grid item xs={12} md={6}>
//             <Typography variant="body1" paragraph>
//               É uma palavra que simboliza a relação próxima que a nossa padaria
//               tem e quer celebrar com a terra. É o regresso às origens, aos
//               cereais cultivados nos nossos solos, com variedades antigas e
//               sustentáveis.
//             </Typography>
//             <Typography variant="body1" paragraph>
//               A qualidade do pão em Portugal tem vindo a decrescer,
//               principalmente nos grandes centros urbanos. Daí, surgiu a
//               necessidade de abrir a padaria Gleba com o objetivo de fazer o
//               melhor pão.
//             </Typography>
//             <Typography variant="body1" paragraph>
//               Em Portugal, o pão não é feito a partir de cereais locais e
//               sustentáveis. Consome-se, principalmente, trigo que vem de todo o
//               mundo, comercializado num mercado extremamente globalizado e com
//               uma imensa pegada ecológica.
//             </Typography>
//           </Grid>

//           {/* Last three paragraphs */}
//           <Grid item xs={12} md={6}>
//             <Typography variant="body1" paragraph>
//               Resumindo, pode estar a comprar pão de Mafra, feito a partir de
//               trigo Ucraniano, Polaco, Espanhol ou o que quer que esteja mais
//               barato.
//             </Typography>
//             <Typography variant="body1" paragraph>
//               O fator que impera é, portanto, o preço e, infelizmente, devido às
//               suas dimensões, solo e clima, o nosso país não é competitivo no
//               grande mercado cerealífero. No entanto, tal como no vinho temos
//               inúmeras castas, também nos cereais somos riquíssimos em variedade
//               e qualidade.
//             </Typography>
//             <Typography variant="body1" paragraph>
//               Apesar de não sermos tão produtivos como outros países, podemos
//               apostar em produtos de excelência, baseados na nossa riquíssima
//               tradição.
//             </Typography>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* High Huge Lettering with Background Image */}
//       <Box
//         position="relative"
//         height="500px"
//         mb={4}
//         textAlign="center"
//         my={8}
//         sx={{
//           backgroundImage: `url(${backgroundImageUrl})`,
//           backgroundSize: "cover",
//           backgroundPosition: "top",
//           padding: "100px 20px", // Adjust padding to give space around the text
//           color: "white", // Change text color to white for contrast
//           borderRadius: "80px", // Optional: Add border-radius if needed
//         }}
//       >
//         <Typography
//           variant="h1"
//           component="div"
//           sx={{
//             fontWeight: "bold",
//             fontSize: "4rem", // Adjust the size as needed
//             letterSpacing: "0.1em", // Optional: add some spacing between letters
//             marginBottom: "1rem", // Space between the words
//           }}
//         >
//           Artesanal
//         </Typography>
//         <Typography
//           variant="h1"
//           component="div"
//           sx={{
//             fontWeight: "bold",
//             fontSize: "4rem", // Adjust the size as needed
//             letterSpacing: "0.1em", // Optional: add some spacing between letters
//             marginBottom: "1rem", // Space between the words
//           }}
//         >
//           Natural
//         </Typography>
//         <Typography
//           variant="h1"
//           component="div"
//           sx={{
//             fontWeight: "bold",
//             fontSize: "4rem", // Adjust the size as needed
//             letterSpacing: "0.1em", // Optional: add some spacing between letters
//             marginBottom: "1rem", // Space between the words
//           }}
//         >
//           Saboroso
//         </Typography>
//         <Typography
//           variant="h1"
//           component="div"
//           sx={{
//             fontWeight: "bold",
//             fontSize: "4rem", // Adjust the size as needed
//             letterSpacing: "0.1em", // Optional: add some spacing between letters
//           }}
//         >
//           Fresco
//         </Typography>
//       </Box>
//     </Container>
//   );
// };

// export default SobreNos;
