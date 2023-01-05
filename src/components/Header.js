import "../scss/Header.scss";
import Cart from "./Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../store/cart_slice";

const Header = (props) => {
  const pizzaSelector = useSelector((state) => state.pizzaSlice);
  const dispatch = useDispatch();

  return (
    <header>
      <div id="headerItems">
        <div>
          <img
            src="https://www.svgrepo.com/show/202539/pizza.svg"
            alt="pizza"
          />
          Pizza Delivery
        </div>

        <button onClick={() => dispatch(toggle())}>
          {pizzaSelector.count === 0
            ? "Кошик порожній"
            : `${pizzaSelector.count} шт на суму ${pizzaSelector.money} грн 🔽`}
        </button>
        <Cart info={pizzaSelector.cart} />
      </div>
    </header>
  );
};

export default Header;
