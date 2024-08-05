import { ObjectId } from "mongodb";
import dbService from "../db/mongo.js";

const ordersCollection = "orders";

// Get all orders
const getOrders = async () => {
  try {
    const db = await dbService.getDb();
    const orders = await db.collection(ordersCollection).find().toArray();
    return orders;
  } catch (error) {
    console.error(error);
  }
};

// Get order by ID
const getOrderById = async (orderId) => {
  try {
    const db = await dbService.getDb();
    const order = await db
      .collection(ordersCollection)
      .findOne({ _id: new ObjectId(orderId) });
    return order;
  } catch (error) {
    console.error(error);
  }
};

// Create a new order
const createOrder = async (newOrder) => {
  try {
    const db = await dbService.getDb();
    const result = await db.collection(ordersCollection).insertOne(newOrder);
    return result;
  } catch (error) {
    console.error(error);
  }
};

// Update an existing order
const updateOrder = async (id, orderUpdates) => {
  try {
    const db = await dbService.getDb();
    const result = await db.collection(ordersCollection).updateOne(
      { _id: new ObjectId(id) },
      {
        $set: orderUpdates,
      }
    );
    return result;
  } catch (error) {
    console.error(error);
  }
};

// Delete an order
const deleteOrder = async (id) => {
  try {
    const db = await dbService.getDb();
    const result = await db
      .collection(ordersCollection)
      .deleteOne({ _id: new ObjectId(id) });
    return result;
  } catch (error) {
    console.error(error);
  }
};

export default {
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
