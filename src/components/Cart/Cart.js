import { useSelector } from "react-redux";
import "../../scss/Cart/Cart.scss";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartSelector = useSelector((state) => state.cartSlice);
  const pizzaSelector = useSelector((state) => state.pizzaSlice);
  if (!cartSelector.cartIsVisible) return false;
  else
    return (
      <div id="cartContainer">
        <div id="cart">
          <div id="cartItems">
            {pizzaSelector.cart.map((item) => (
              <CartItem key={item.id + Math.random(222)} {...item} />
            ))}
          </div>
          <div id="cartSum">Сума: {pizzaSelector.money} грн</div>
          <button>{/* <Link to="/order">Замовити</Link> */}</button>
        </div>
      </div>
    );
};

export default Cart;
