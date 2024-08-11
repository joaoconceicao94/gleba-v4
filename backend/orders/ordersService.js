//VERSÃO 3
import ordersData from "./ordersData.js";

// Get all orders
const getOrders = async () => {
  try {
    const orders = await ordersData.getOrders();
    return orders;
  } catch (error) {
    throw new Error(`Failed to get orders: ${error.message}`);
  }
};

// Get a specific order by ID
const getOrderById = async (orderId) => {
  try {
    const order = await ordersData.getOrderById(orderId);
    if (!order) {
      throw new Error("Order not found");
    }
    return order;
  } catch (error) {
    throw new Error(`Failed to get order by ID: ${error.message}`);
  }
};

// Get orders by status
const getOrdersByStatus = async (status) => {
  try {
    const orders = await ordersData.getOrdersByStatus(status);
    return orders;
  } catch (error) {
    throw new Error(`Failed to get orders by status: ${error.message}`);
  }
};

// Get orders by creation date
const getOrdersByDate = async (createdAt) => {
  try {
    const orders = await ordersData.getOrdersByDate(createdAt);
    return orders;
  } catch (error) {
    throw new Error(`Failed to get orders by date: ${error.message}`);
  }
};

// Create a new order
const createOrder = async (newOrder) => {
  try {
    const result = await ordersData.createOrder(newOrder);
    const order = await ordersData.getOrderById(result.insertedId);
    return order;
  } catch (error) {
    throw new Error(`Failed to create order: ${error.message}`);
  }
};

// Update an existing order
const updateOrder = async (id, orderUpdates) => {
  try {
    const result = await ordersData.updateOrder(id, orderUpdates);
    return result;
  } catch (error) {
    throw new Error(`Failed to update order: ${error.message}`);
  }
};

// Update an order's status
const updateOrderStatus = async (id, status) => {
  try {
    // Ensure status is set to the given value (e.g., 'completed' or 'cancelled')
    const result = await ordersData.updateOrderStatus(id, status);
    return result;
  } catch (error) {
    throw new Error(`Failed to update order status: ${error.message}`);
  }
};

// Delete an order
const deleteOrder = async (id) => {
  try {
    const result = await ordersData.deleteOrder(id);
    return result;
  } catch (error) {
    throw new Error(`Failed to delete order: ${error.message}`);
  }
};

export default {
  getOrders,
  getOrderById,
  getOrdersByStatus,
  getOrdersByDate,
  createOrder,
  updateOrder,
  updateOrderStatus, // Export the method to update order status
  deleteOrder,
};

// VERSÃO 2

// import ordersData from "./ordersData.js";

// // Get all orders
// const getOrders = async () => {
//   const orders = await ordersData.getOrders();
//   return orders;
// };

// // Get a specific order by ID
// const getOrderById = async (orderId) => {
//   const order = await ordersData.getOrderById(orderId);
//   return order;
// };

// // Get orders by status
// const getOrdersByStatus = async (status) => {
//   const orders = await ordersData.getOrdersByStatus(status);
//   return orders;
// };

// // Get orders by creation date
// const getOrdersByDate = async (createdAt) => {
//   const orders = await ordersData.getOrdersByDate(createdAt);
//   return orders;
// };

// // Create a new order
// const createOrder = async (newOrder) => {
//   const result = await ordersData.createOrder(newOrder);
//   // Return the specific order
//   const order = await ordersData.getOrderById(result.insertedId);
//   return order;
// };

// // Update an existing order
// const updateOrder = async (id, orderUpdates) => {
//   const result = await ordersData.updateOrder(id, orderUpdates);
//   return result;
// };

// // Update an order's status to 'completed'
// const updateOrderStatus = async (id, status) => {
//   // Ensure status is set to 'completed'
//   const result = await ordersData.updateOrder(id, { status });
//   return result;
// };

// // Delete an order
// const deleteOrder = async (id) => {
//   const result = await ordersData.deleteOrder(id);
//   return result;
// };

// export default {
//   getOrders,
//   getOrderById,
//   getOrdersByStatus,
//   getOrdersByDate,
//   createOrder,
//   updateOrder,
//   updateOrderStatus, // Export the new method
//   deleteOrder,
// };

// VERSÃO 1
// import ordersData from "./ordersData.js";

// const getOrders = async () => {
//   const orders = await ordersData.getOrders();
//   return orders;
// };

// const getOrderById = async (orderId) => {
//   const order = await ordersData.getOrderById(orderId);
//   return order;
// };

// const getOrdersByStatus = async (status) => {
//   const orders = await ordersData.getOrdersByStatus(status);
//   return orders;
// };

// const getOrdersByDate = async (createdAt) => {
//   const orders = await ordersData.getOrdersByDate(createdAt);
//   return orders;
// };

// const createOrder = async (newOrder) => {
//   const result = await ordersData.createOrder(newOrder);
//   // OPTION 1: - Return all orders
//   // const allOrders = await getOrders();
//   // return allOrders;
//   // OPTION 2: - Return the specific order
//   const order = await ordersData.getOrderById(result.insertedId);
//   return order;
// };

// const updateOrder = async (id, orderUpdates) => {
//   const result = await ordersData.updateOrder(id, orderUpdates);
//   return result;
// };

// const deleteOrder = async (id) => {
//   const result = await ordersData.deleteOrder(id);
//   return result;
//   // OPTION 1: Return all orders
//   // const allOrders = await getOrders();
//   // return allOrders;
// };

// export default {
//   getOrders,
//   getOrderById,
//   getOrdersByStatus,
//   getOrdersByDate,
//   createOrder,
//   updateOrder,
//   deleteOrder,
// };
