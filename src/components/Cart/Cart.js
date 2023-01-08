import { useSelector } from "react-redux";
import "../../scss/Cart.scss";
import CartItem from "./CartItem";
const Cart = () => {
  const cartSelector = useSelector((state) => state.cartSlice);
  const pizzaSelector = useSelector((state) => state.pizzaSlice);
  if (!cartSelector.cartIsVisible) return false;
  else
    return (
      <div id="cartContainer">
        <div id="cart">
          {pizzaSelector.cart.map((item) => (
            <CartItem key={item.id + Math.random(222)} {...item} />
          ))}
          <button>Замовити</button>
        </div>
      </div>
    );
};

export default Cart;
