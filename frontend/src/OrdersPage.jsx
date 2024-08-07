import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:3000/orders");
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <Container
        style={{
          padding: "20px",
          maxWidth: "600px",
          margin: "auto",
          marginTop: "60px",
        }}
      >
        <Typography variant="h4" component="h2" align="left" gutterBottom>
          Orders
        </Typography>
        <Typography variant="body1">Loading...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container
        style={{
          padding: "20px",
          maxWidth: "600px",
          margin: "auto",
          marginTop: "60px",
        }}
      >
        <Typography variant="h4" component="h2" align="left" gutterBottom>
          Orders
        </Typography>
        <Typography variant="body1" color="error">
          Error: {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "auto",
        marginTop: "60px",
      }}
    >
      <Typography variant="h4" component="h2" align="left" gutterBottom>
        Orders
      </Typography>
      <List>
        {orders.map((order) => (
          <React.Fragment key={order._id}>
            <ListItem>
              <ListItemText
                primary={`Order ID: ${order._id}`}
                secondary={`Status: ${order.status} | Created At: ${new Date(
                  order.createdAt
                ).toLocaleString()}`}
              />
            </ListItem>
            <List component="div" disablePadding>
              {order.items.map((item) => (
                <ListItem key={item.productId} style={{ paddingLeft: "30px" }}>
                  <ListItemText
                    primary={`Product ID: ${item.productId}`}
                    secondary={`Quantity: ${
                      item.quantity
                    } | Price: €${item.price.toFixed(2)}`}
                  />
                </ListItem>
              ))}
            </List>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
};

export default OrdersPage;
