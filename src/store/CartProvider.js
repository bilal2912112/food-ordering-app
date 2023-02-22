import React from "react";
import CartContext from "./cart-context.js";
const CartProvider = (props) => {
  const addItemCartHAndler = (item) => {};
  const removeItemFromCartHandler = (id) => {};
  const cartContext = {
    item: [],
    totalAmount: 0,
    addItem: addItemCartHAndler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
