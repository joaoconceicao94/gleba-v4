import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "./CartContext";

const CartPage = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();

  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const handlePlaceOrder = async () => {
    try {
      const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart.map((product) => ({
            productId: product._id,
            quantity: product.quantity,
            price: product.price,
          })),
          status: "pending",
          createdAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        clearCart();
        alert("Encomenda feita com sucesso!");
      } else {
        alert("Ocorreu um erro. Tente novamente.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("An error occurred while placing the order.");
    }
  };

  return (
    <Container
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        marginTop: "60px",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        align="left"
        gutterBottom
        style={{ fontSize: "24px" }}
      >
        Cesto
      </Typography>
      <List>
        {cart.map((product, index) => (
          <ListItem
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <ListItemText
              primary={product.name}
              secondary={`€${product.price.toFixed(2)} x ${product.quantity}`}
              style={{ marginBottom: "10px" }}
            />
            <div>
              <IconButton
                edge="start"
                aria-label="increase"
                onClick={() => increaseQuantity(product._id)}
              >
                <AddIcon />
              </IconButton>
              <IconButton
                edge="start"
                aria-label="decrease"
                onClick={() => decreaseQuantity(product._id)}
              >
                <RemoveIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => removeFromCart(product._id)}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </ListItem>
        ))}
      </List>
      <Divider style={{ margin: "20px 0" }} />
      <Typography
        variant="h6"
        component="div"
        align="right"
        gutterBottom
        style={{ fontSize: "20px" }}
      >
        Total: {total.toFixed(2)}€
      </Typography>
      {cart.length > 0 && (
        <Button
          variant="contained"
          color="primary"
          onClick={handlePlaceOrder}
          style={{
            marginTop: "20px",
            width: "100%",
          }}
        >
          Fazer encomenda
        </Button>
      )}
      <style>
        {`
          @media (max-width: 860px) {
            .MuiTypography-h4 {
              font-size: 20px;
            }
            .MuiTypography-h6 {
              font-size: 16px;
            }
            .MuiButton-containedPrimary {
              width: 100%;
              padding: 10px;
            }
          }
        `}
      </style>
    </Container>
  );
};

export default CartPage;

// VERSÃO FINAL_V2

// import React from "react";
// import {
//   Container,
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemSecondaryAction,
//   IconButton,
//   Divider,
//   Button,
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import { useCart } from "./CartContext";

// const CartPage = () => {
//   const {
//     cart,
//     removeFromCart,
//     increaseQuantity,
//     decreaseQuantity,
//     clearCart,
//   } = useCart();

//   const total = cart.reduce(
//     (acc, product) => acc + product.price * product.quantity,
//     0
//   );

//   const handlePlaceOrder = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/orders", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           items: cart.map((product) => ({
//             productId: product._id,
//             quantity: product.quantity,
//             price: product.price,
//           })),
//           status: "pending",
//           createdAt: new Date().toISOString(),
//         }),
//       });

//       if (response.ok) {
//         clearCart();
//         alert("Encomenda feita com sucesso!");
//       } else {
//         alert("Ocorreu um erro. Tente novamente.");
//       }
//     } catch (error) {
//       console.error("Erro a fazer a encomenda:", error);
//       alert("Ocorreu um erro a fazer a encomenda.");
//     }
//   };

//   return (
//     <Container
//       style={{
//         padding: "20px",
//         maxWidth: "600px",
//         margin: "auto",
//         marginTop: "60px",
//       }}
//     >
//       <Typography
//         variant="h4"
//         component="h2"
//         align="left"
//         gutterBottom
//         style={{ fontSize: "24px" }}
//       >
//         Cesto
//       </Typography>
//       <List>
//         {cart.map((product, index) => (
//           <ListItem
//             key={index}
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "flex-start",
//             }}
//           >
//             <ListItemText
//               primary={product.name}
//               secondary={`€${product.price.toFixed(2)} x ${product.quantity}`}
//               style={{ marginBottom: "10px" }}
//             />
//             <div>
//               <IconButton
//                 edge="start"
//                 aria-label="increase"
//                 onClick={() => increaseQuantity(product._id)}
//               >
//                 <AddIcon />
//               </IconButton>
//               <IconButton
//                 edge="start"
//                 aria-label="decrease"
//                 onClick={() => decreaseQuantity(product._id)}
//               >
//                 <RemoveIcon />
//               </IconButton>
//               <IconButton
//                 edge="end"
//                 aria-label="delete"
//                 onClick={() => removeFromCart(product._id)}
//               >
//                 <DeleteIcon />
//               </IconButton>
//             </div>
//           </ListItem>
//         ))}
//       </List>
//       <Divider style={{ margin: "20px 0" }} />
//       <Typography
//         variant="h6"
//         component="div"
//         align="right"
//         gutterBottom
//         style={{ fontSize: "20px" }}
//       >
//         Total: {total.toFixed(2)}€
//       </Typography>
//       {cart.length > 0 && (
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handlePlaceOrder}
//           style={{
//             marginTop: "20px",
//             width: "100%",
//           }}
//         >
//           Fazer encomenda
//         </Button>
//       )}
//       <style>
//         {`
//           @media (max-width: 860px) {
//             .MuiTypography-h4 {
//               font-size: 20px;
//             }
//             .MuiTypography-h6 {
//               font-size: 16px;
//             }
//             .MuiButton-containedPrimary {
//               width: 100%;
//               padding: 10px;
//             }
//           }
//         `}
//       </style>
//     </Container>
//   );
// };

// export default CartPage;

// VERSÃO FINAL_V1

// import React from "react";
// import {
//   Container,
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemSecondaryAction,
//   IconButton,
//   Divider,
//   Button,
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { useCart } from "./CartContext";

// const CartPage = () => {
//   const { cart, removeFromCart, clearCart } = useCart();

//   const total = cart.reduce((acc, product) => acc + product.price, 0);

//   const handlePlaceOrder = async () => {
//     try {
//       const response = await fetch("http://localhost:3000/orders", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           items: cart.map((product) => ({
//             productId: product._id,
//             quantity: 1,
//             price: product.price,
//           })),
//           status: "pending",
//           createdAt: new Date().toISOString(),
//         }),
//       });

//       if (response.ok) {
//         clearCart();
//         alert("Encomenda feita com sucesso!");
//       } else {
//         alert("Ocorreu um erro. Tente novamente ");
//       }
//     } catch (error) {
//       console.error("Error placing order:", error);
//       alert("An error occurred while placing the order.");
//     }
//   };

//   return (
//     <Container
//       style={{
//         padding: "20px",
//         maxWidth: "600px",
//         margin: "auto",
//         marginTop: "60px",
//       }}
//     >
//       <Typography
//         variant="h4"
//         component="h2"
//         align="left"
//         gutterBottom
//         style={{ fontSize: "24px" }}
//       >
//         Cesto
//       </Typography>
//       <List>
//         {cart.map((product, index) => (
//           <ListItem
//             key={index}
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "flex-start",
//             }}
//           >
//             <ListItemText
//               primary={product.name}
//               secondary={`€${product.price.toFixed(2)}`}
//               style={{ marginBottom: "10px" }}
//             />
//             <ListItemSecondaryAction>
//               <IconButton
//                 edge="end"
//                 aria-label="delete"
//                 onClick={() => removeFromCart(product._id)}
//               >
//                 <DeleteIcon />
//               </IconButton>
//             </ListItemSecondaryAction>
//           </ListItem>
//         ))}
//       </List>
//       <Divider style={{ margin: "20px 0" }} />
//       <Typography
//         variant="h6"
//         component="div"
//         align="right"
//         gutterBottom
//         style={{ fontSize: "20px" }}
//       >
//         Total: {total.toFixed(2)}€
//       </Typography>
//       {cart.length > 0 && (
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handlePlaceOrder}
//           style={{
//             marginTop: "20px",
//             width: "100%",
//           }}
//         >
//           Fazer encomenda
//         </Button>
//       )}
//       <style>
//         {`
//           @media (max-width: 860px) {
//             .MuiTypography-h4 {
//               font-size: 20px;
//             }
//             .MuiTypography-h6 {
//               font-size: 16px;
//             }
//             .MuiButton-containedPrimary {
//               width: 100%;
//               padding: 10px;
//             }
//           }
//         `}
//       </style>
//     </Container>
//   );
// };

// export default CartPage;
