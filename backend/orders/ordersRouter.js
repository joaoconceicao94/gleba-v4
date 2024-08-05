import express from "express";
import ordersService from "./ordersService.js";
import ordersSchemas from "./ordersSchemas.js";

const router = express.Router();

// Get all orders or filter by query parameters
router.get("/orders", async (req, res) => {
  try {
    const orderId = req.query.id;
    const status = req.query.status;
    const createdAt = req.query.createdAt;

    if (orderId) {
      const order = await ordersService.getOrderById(orderId);
      if (order) {
        return res.status(200).json(order);
      } else {
        return res.status(404).json({ message: "Order not found" });
      }
    }

    // Optionally filter by status or createdAt if needed
    const query = {};
    if (status) query.status = status;
    if (createdAt) query.createdAt = new Date(createdAt);

    const orders = await ordersService.getOrders(query);
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new order
router.post("/orders", async (req, res) => {
  const { error, value } = ordersSchemas.createOrderSchema.validate(req.body);

  if (error) {
    return res.status(400).send({ message: error.message });
  }

  try {
    const createdOrder = await ordersService.createOrder(value);
    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update an existing order
router.put("/orders/:id", async (req, res) => {
  try {
    const result = await ordersService.updateOrder(req.params.id, req.body);
    if (!result || result.modifiedCount === 0) {
      return res
        .status(404)
        .json({ message: "The order you tried to update was not found." });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete an order
router.delete("/orders/:id", async (req, res) => {
  try {
    const result = await ordersService.deleteOrder(req.params.id);
    if (!result || result.deletedCount === 0) {
      return res.status(404).send({ message: "Order not found." });
    }
    res.status(200).json({ message: "Order deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
