// VERSÃO 3

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
    console.error("Error fetching orders:", error);
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
    console.error("Error fetching order by ID:", error);
  }
};

// Create a new order
const createOrder = async (newOrder) => {
  try {
    const db = await dbService.getDb();
    const result = await db.collection(ordersCollection).insertOne(newOrder);
    return result;
  } catch (error) {
    console.error("Error creating order:", error);
  }
};

// Update an existing order
const updateOrder = async (id, orderUpdates) => {
  try {
    const db = await dbService.getDb();
    const result = await db.collection(ordersCollection).updateOne(
      { _id: new ObjectId(id) },
      {
        $set: orderUpdates, // Update the fields specified in orderUpdates
      }
    );
    return result;
  } catch (error) {
    console.error("Error updating order:", error);
  }
};

// Update an order's status (for completing or cancelling)
const updateOrderStatus = async (id, status) => {
  try {
    const db = await dbService.getDb();
    const result = await db.collection(ordersCollection).updateOne(
      { _id: new ObjectId(id) },
      {
        $set: { status }, // Set the status field to the given value
      }
    );
    return result;
  } catch (error) {
    console.error("Error updating order status:", error);
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
    console.error("Error deleting order:", error);
  }
};

export default {
  getOrders,
  getOrderById,
  createOrder,
  updateOrder,
  updateOrderStatus, // Export the method to update order status
  deleteOrder,
};

// VERSÃO 2

// import { ObjectId } from "mongodb";
// import dbService from "../db/mongo.js";

// const ordersCollection = "orders";

// // Get all orders
// const getOrders = async () => {
//   try {
//     const db = await dbService.getDb();
//     const orders = await db.collection(ordersCollection).find().toArray();
//     return orders;
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Get order by ID
// const getOrderById = async (orderId) => {
//   try {
//     const db = await dbService.getDb();
//     const order = await db
//       .collection(ordersCollection)
//       .findOne({ _id: new ObjectId(orderId) });
//     return order;
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Create a new order
// const createOrder = async (newOrder) => {
//   try {
//     const db = await dbService.getDb();
//     const result = await db.collection(ordersCollection).insertOne(newOrder);
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Update an existing order
// const updateOrder = async (id, orderUpdates) => {
//   try {
//     const db = await dbService.getDb();
//     const result = await db.collection(ordersCollection).updateOne(
//       { _id: new ObjectId(id) },
//       {
//         $set: orderUpdates, // This will set the fields specified in orderUpdates
//       }
//     );
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Update an order's status to 'completed'
// const updateOrderStatus = async (id, status) => {
//   try {
//     const db = await dbService.getDb();
//     const result = await db.collection(ordersCollection).updateOne(
//       { _id: new ObjectId(id) },
//       {
//         $set: { status }, // This sets only the status field to the given value
//       }
//     );
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Delete an order
// const deleteOrder = async (id) => {
//   try {
//     const db = await dbService.getDb();
//     const result = await db
//       .collection(ordersCollection)
//       .deleteOne({ _id: new ObjectId(id) });
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export default {
//   getOrders,
//   getOrderById,
//   createOrder,
//   updateOrder,
//   updateOrderStatus, // Export the new method
//   deleteOrder,
// };

// VERSÃO 1
// import { ObjectId } from "mongodb";
// import dbService from "../db/mongo.js";

// const ordersCollection = "orders";

// // Get all orders
// const getOrders = async () => {
//   try {
//     const db = await dbService.getDb();
//     const orders = await db.collection(ordersCollection).find().toArray();
//     return orders;
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Get order by ID
// const getOrderById = async (orderId) => {
//   try {
//     const db = await dbService.getDb();
//     const order = await db
//       .collection(ordersCollection)
//       .findOne({ _id: new ObjectId(orderId) });
//     return order;
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Create a new order
// const createOrder = async (newOrder) => {
//   try {
//     const db = await dbService.getDb();
//     const result = await db.collection(ordersCollection).insertOne(newOrder);
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Update an existing order
// const updateOrder = async (id, orderUpdates) => {
//   try {
//     const db = await dbService.getDb();
//     const result = await db.collection(ordersCollection).updateOne(
//       { _id: new ObjectId(id) },
//       {
//         $set: orderUpdates,
//       }
//     );
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Delete an order
// const deleteOrder = async (id) => {
//   try {
//     const db = await dbService.getDb();
//     const result = await db
//       .collection(ordersCollection)
//       .deleteOne({ _id: new ObjectId(id) });
//     return result;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export default {
//   getOrders,
//   getOrderById,
//   createOrder,
//   updateOrder,
//   deleteOrder,
// };
