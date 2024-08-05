import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import ordersSchemas from "./ordersSchemas";

dotenv.config();

const app = express();
const PORT = process.env.ORDERS_PORT || 3000; // Use port 4000 for the orders service

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.ORDERS_MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Order Schema and Model
const orderSchema = new mongoose.Schema({
  items: [
    {
      productId: String,
      quantity: Number,
      price: Number,
    },
  ],
  status: String,
  createdAt: Date,
});

const Order = mongoose.model("Order", ordersSchemas);

// Routes
app.post("/orders", async (req, res) => {
  const { items, status, createdAt } = req.body;

  try {
    const order = new Order({ items, status, createdAt });
    await order.save();
    res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Failed to place the order" });
  }
});

app.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find(); // Fetch all orders
    res.status(200).json(orders); // Return all orders
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Orders service is running on port ${PORT}`);
});

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const Order = require("./models/Order"); // Import Order model
// const app = express();

// // Set default port to 4000
// const port = 4000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB Connection
// const mongoURI =
//   "mongodb+srv://joao:VolcanoChoir2024@cluster0.eteegfe.mongodb.net/orders?retryWrites=true&w=majority&appName=Cluster0";
// mongoose
//   .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected successfully"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // Routes
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// // CRUD operations
// app.post("/orders", async (req, res) => {
//   try {
//     const { items, status, createdAt } = req.body;
//     const newOrder = new Order({
//       items,
//       status,
//       createdAt: new Date(createdAt),
//     });
//     await newOrder.save();
//     res.status(201).json(newOrder);
//   } catch (error) {
//     console.error("Error creating order:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.get("/orders", async (req, res) => {
//   try {
//     const orders = await Order.find();
//     res.status(200).json(orders);
//   } catch (error) {
//     console.error("Error fetching orders:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.get("/orders/:id", async (req, res) => {
//   try {
//     const order = await Order.findById(req.params.id);
//     if (order) {
//       res.status(200).json(order);
//     } else {
//       res.status(404).json({ error: "Order not found" });
//     }
//   } catch (error) {
//     console.error("Error fetching order:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.put("/orders/:id", async (req, res) => {
//   try {
//     const { items, status } = req.body;
//     const order = await Order.findByIdAndUpdate(
//       req.params.id,
//       { items, status },
//       { new: true }
//     );
//     if (order) {
//       res.status(200).json(order);
//     } else {
//       res.status(404).json({ error: "Order not found" });
//     }
//   } catch (error) {
//     console.error("Error updating order:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.delete("/orders/:id", async (req, res) => {
//   try {
//     const order = await Order.findByIdAndDelete(req.params.id);
//     if (order) {
//       res.status(200).json({ message: "Order deleted successfully" });
//     } else {
//       res.status(404).json({ error: "Order not found" });
//     }
//   } catch (error) {
//     console.error("Error deleting order:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
