import React, { createContext, useContext, useReducer, useEffect } from "react";

// Define the initial state and the reducer function
const initialState = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProductIndex = state.findIndex(
        (product) => product._id === action.payload._id
      );
      if (existingProductIndex !== -1) {
        const updatedState = [...state];
        updatedState[existingProductIndex].quantity += 1;
        return updatedState;
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case "REMOVE_FROM_CART":
      return state.filter((product) => product._id !== action.payload._id);

    case "INCREASE_QUANTITY":
      return state.map((product) =>
        product._id === action.payload._id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );

    case "DECREASE_QUANTITY":
      return state
        .map((product) =>
          product._id === action.payload._id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0);

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

// Create the context
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { _id: productId } });
  };

  const increaseQuantity = (productId) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: { _id: productId } });
  };

  const decreaseQuantity = (productId) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: { _id: productId } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

// VERSÃO 3
// import React, { createContext, useContext, useReducer, useEffect } from "react";

// // Define the initial state and the reducer function
// const initialState = JSON.parse(localStorage.getItem("cart")) || [];

// const cartReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       const existingProductIndex = state.findIndex(
//         (product) => product._id === action.payload._id
//       );
//       if (existingProductIndex !== -1) {
//         const updatedState = [...state];
//         updatedState[existingProductIndex].quantity += 1;
//         return updatedState;
//       } else {
//         return [...state, { ...action.payload, quantity: 1 }];
//       }

//     case "REMOVE_FROM_CART":
//       return state.filter((product) => product._id !== action.payload._id);

//     case "INCREASE_QUANTITY":
//       return state.map((product) =>
//         product._id === action.payload._id
//           ? { ...product, quantity: product.quantity + 1 }
//           : product
//       );

//     case "DECREASE_QUANTITY":
//       return state
//         .map((product) =>
//           product._id === action.payload._id
//             ? { ...product, quantity: product.quantity - 1 }
//             : product
//         )
//         .filter((product) => product.quantity > 0);

//     case "CLEAR_CART":
//       return [];

//     default:
//       return state;
//   }
// };

// // Create the context
// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, dispatch] = useReducer(cartReducer, initialState);

//   // Save cart to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (product) => {
//     dispatch({ type: "ADD_TO_CART", payload: product });
//   };

//   const removeFromCart = (productId) => {
//     dispatch({ type: "REMOVE_FROM_CART", payload: { _id: productId } });
//   };

//   const increaseQuantity = (productId) => {
//     dispatch({ type: "INCREASE_QUANTITY", payload: { _id: productId } });
//   };

//   const decreaseQuantity = (productId) => {
//     dispatch({ type: "DECREASE_QUANTITY", payload: { _id: productId } });
//   };

//   const clearCart = () => {
//     dispatch({ type: "CLEAR_CART" });
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         increaseQuantity,
//         decreaseQuantity,
//         clearCart,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

// src/CartContext.js
// import React, { createContext, useState, useContext } from "react";

// const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product, quantity = 1) => {
//     setCart((prevCart) => {
//       const existingProduct = prevCart.find((item) => item._id === product._id);
//       if (existingProduct) {
//         return prevCart.map((item) =>
//           item._id === product._id
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         );
//       }
//       return [...prevCart, { ...product, quantity }];
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };
