//VERSÃO 2

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
} from "@mui/material";

const handleAddToCart = (product) => {
  // Logic to add product to cart
  console.log("Product added to cart:", product);
};

const ProductDetailPage = ({ addToCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/products/${productId}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h6" color="error">
          Error: {error}
        </Typography>
      </Box>
    );
  }

  return (
    product && (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
          p: 2,
        }}
      >
        <Card sx={{ maxWidth: 600, width: "100%" }}>
          <CardMedia
            component="img"
            height="300"
            image={product.imageUrl}
            alt={product.name || "Product image"}
            sx={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography variant="h4" component="div" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              {product.description}
            </Typography>
            <Typography variant="h5" component="div" gutterBottom>
              {product.price.toFixed(2)}€
            </Typography>
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
          </CardContent>
        </Card>
      </Box>
    )
  );
};

export default ProductDetailPage;

// VERSÃO 1
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import {
//   Box,
//   Typography,
//   Button,
//   Card,
//   CardContent,
//   CardMedia,
// } from "@mui/material";

// const ProductDetailPage = ({ addToCart }) => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:3000/products/${productId}`
//         );
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//         setError("Failed to fetch product");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   const handleAddToCart = () => {
//     if (product) {
//       addToCart(product);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     product && (
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           mt: 4,
//         }}
//       >
//         <Card sx={{ maxWidth: 600 }}>
//           <CardMedia
//             component="img"
//             height="300"
//             image={product.imageUrl}
//             alt={product.name || "Product image"}
//           />
//           <CardContent>
//             <Typography variant="h4" component="div" gutterBottom>
//               {product.name}
//             </Typography>
//             <Typography variant="body1" color="text.secondary" paragraph>
//               {product.description}
//             </Typography>
//             <Typography variant="h5" component="div" gutterBottom>
//               {product.price.toFixed(2)}€
//             </Typography>
//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: "#FFC300",
//                 "&:hover": { backgroundColor: "#e6b800" },
//               }}
//               onClick={handleAddToCart}
//             >
//               Comprar
//             </Button>
//           </CardContent>
//         </Card>
//       </Box>
//     )
//   );
// };

// export default ProductDetailPage;
