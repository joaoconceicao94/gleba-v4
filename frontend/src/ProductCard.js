// VERSÃO 2

import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product); // Call addToCart with the product
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Link
        to={`/products/${product._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardMedia
          component="img"
          height="140"
          image={product.imageUrl}
          alt={product.name}
          sx={{ cursor: "pointer" }}
        />
      </Link>
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="h6" component="div">
            {product.price}€
          </Typography>
        </Box>
        <Box mt="auto">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFC300",
              "&:hover": { backgroundColor: "#e6b800" },
            }}
            onClick={handleAddToCart}
          >
            Comprar
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

// VERSÃO 1
// src/ProductCard.js
// import React from "react";
// import {
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   Button,
//   Box,
// } from "@mui/material";

// const ProductCard = ({ product, addToCart }) => {
//   const handleAddToCart = () => {
//     addToCart(product); // Call addToCart with the product
//   };

//   return (
//     <Card
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         height: "100%",
//       }}
//     >
//       <CardMedia
//         component="img"
//         height="140"
//         image={product.imageUrl}
//         alt={product.name}
//       />
//       <CardContent
//         sx={{
//           flexGrow: 1,
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//         }}
//       >
//         <Box>
//           <Typography gutterBottom variant="h5" component="div">
//             {product.name}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             {product.description}
//           </Typography>
//           <Typography variant="h6" component="div">
//             €{product.price}
//           </Typography>
//         </Box>
//         <Box mt="auto">
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: "#FFC300",
//               "&:hover": { backgroundColor: "#e6b800" },
//             }}
//             onClick={handleAddToCart}
//           >
//             Comprar
//           </Button>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// export default ProductCard;
