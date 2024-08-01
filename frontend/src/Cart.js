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
import { useCart } from "./CartContext";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart(); // Add clearCart from context

  const total = cart.reduce((acc, product) => acc + product.price, 0);

  const handleMakeOrder = async () => {
    try {
      const response = await fetch("https://your-api-endpoint/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart.map((product) => ({
            productId: product._id,
            quantity: 1, // Or use actual quantity if available
            price: product.price,
          })),
          status: "pending",
          createdAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        // Clear the cart after a successful order
        clearCart();
        alert("Order placed successfully!");
      } else {
        alert("Failed to place the order.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("An error occurred while placing the order.");
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="h2" align="left" gutterBottom>
        Cesto
      </Typography>
      <List>
        {cart.map((product, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={product.name}
              secondary={`€${product.price.toFixed(2)}`}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => removeFromCart(product._id)} // Pass the product ID to remove
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Typography variant="h6" component="div" align="right" gutterBottom>
        Total: €{total.toFixed(2)}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleMakeOrder}
        style={{ marginTop: "20px" }}
      >
        Make Order
      </Button>
    </Container>
  );
};

export default CartPage;
