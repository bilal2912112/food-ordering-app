import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const { item } = cartCtx;
  const [btnHighlighted, setbtnHighlighted] = useState(false);
  const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ""}`;
  useEffect(() => {
    if (item.length === 0) {
      return;
    } else {
      setbtnHighlighted(true);
      const timer = setTimeout(() => {
        setbtnHighlighted(false);
      }, 300);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [item]);

  const numberOfCartItems = item.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);
  return (
    <button onClick={props.onClick} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> {numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
