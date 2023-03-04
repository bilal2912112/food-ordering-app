import React from "react";
import { useReducer } from "react";
import CartContext from "./cart-context";
const defualtCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, aciton) => {
  if (aciton.type === "ADD") {
    const updateTotalAmount =
      state.totalAmount + aciton.item.price * aciton.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === aciton.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + aciton.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(aciton.item);
    }

    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  }
  return defualtCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, defualtCartState);
  const addItemCartHAndler = (item) => {
    console.log(`${item}`);
    dispatch({
      type: "ADD",
      item: item,
    });
  };
  const removeItemFromCartHandler = (id) => {
    dispatch({
      type: "REMOVE",
      id: id,
    });
  };
  const cartContext = {
    item: cartState.items,
    totalAmount: cartState.totalAmount,
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
