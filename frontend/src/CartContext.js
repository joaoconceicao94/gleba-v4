import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orderId, setOrderId] = useState(null);

  const addToCart = async (product) => {
    setCart((prevCart) => [...prevCart, product]);
    if (!orderId) {
      // Create a new order
      const newOrder = await createOrder([{ ...product, quantity: 1 }]);
      setOrderId(newOrder._id);
    } else {
      // Update the existing order
      await updateOrder(orderId, [...cart, product]);
    }
  };

  const removeFromCart = async (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product._id !== productId)
    );
    if (orderId) {
      await updateOrder(
        orderId,
        cart.filter((product) => product._id !== productId)
      );
    }
  };

  const clearCart = () => {
    setCart([]);
    setOrderId(null);
  };

  const createOrder = async (items) => {
    const response = await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items,
        status: "pending",
        createdAt: new Date().toISOString(),
      }),
    });
    return response.json();
  };

  const updateOrder = async (orderId, items) => {
    await fetch(`http://localhost:3000/orders/${orderId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items,
        status: "pending",
        updatedAt: new Date().toISOString(),
      }),
    });
  };

  useEffect(() => {
    // Optionally, you could load an existing order from local storage or session here
  }, []);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
