import { useContext } from "react";
import Modal from "../Ui/Model";
import classes from "./Cart.module.css";

import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasIt = cartCtx.totalAmount.lenght > 0;
  const cartItemRemoveHandler = (id) => {};
  const cartItemAddHandler = (item) => {};
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.item.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasIt && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
