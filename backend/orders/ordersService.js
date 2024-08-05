import ordersData from "./ordersData.js";

const getOrders = async () => {
  const orders = await ordersData.getOrders();
  return orders;
};

const getOrderById = async (orderId) => {
  const order = await ordersData.getOrderById(orderId);
  return order;
};

const getOrdersByStatus = async (status) => {
  const orders = await ordersData.getOrdersByStatus(status);
  return orders;
};

const getOrdersByDate = async (createdAt) => {
  const orders = await ordersData.getOrdersByDate(createdAt);
  return orders;
};

const createOrder = async (newOrder) => {
  const result = await ordersData.createOrder(newOrder);
  // OPTION 1: - Return all orders
  // const allOrders = await getOrders();
  // return allOrders;
  // OPTION 2: - Return the specific order
  const order = await ordersData.getOrderById(result.insertedId);
  return order;
};

const updateOrder = async (id, orderUpdates) => {
  const result = await ordersData.updateOrder(id, orderUpdates);
  return result;
};

const deleteOrder = async (id) => {
  const result = await ordersData.deleteOrder(id);
  return result;
  // OPTION 1: Return all orders
  // const allOrders = await getOrders();
  // return allOrders;
};

export default {
  getOrders,
  getOrderById,
  getOrdersByStatus,
  getOrdersByDate,
  createOrder,
  updateOrder,
  deleteOrder,
};
