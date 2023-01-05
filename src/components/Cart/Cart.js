import { useSelector, useDispatch } from "react-redux";
import "../../scss/Cart.scss";
import CartItem from "./CartItem";
import { clearCart } from "../../store/pizza_slice";
const Cart = (props) => {
  const cartSelector = useSelector((state) => state.cartSlice);
  const pizzaSelector = useSelector((state) => state.pizzaSlice);
  const dispatch = useDispatch();
  if (!cartSelector.cartIsVisible) return false;
  else
    return (
      <div id="cartContainer">
        <div id="cart">
          {pizzaSelector.cart.map((item) => (
            <CartItem key={item.id + Math.random(222)} {...item} />
          ))}
          <div id="cartButtons">
            <button onClick={() => dispatch(clearCart())}>Очистити</button>
            <button>Замовити</button>
          </div>
        </div>
      </div>
    );
};

export default Cart;
