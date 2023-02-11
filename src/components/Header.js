import "../scss/Header.scss";
import Cart from "./Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../store/cart_slice";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Header = () => {
  const pizzaSelector = useSelector((state) => state.pizzaSlice);
  const dispatch = useDispatch();
  const cartRef = useRef();

  const burgerOpen = () => {
    const burgerSelector = document.querySelector(".headerItem2");
    burgerSelector.classList.toggle("open");
  };
  return (
    <header>
      <div id="headerItems">
        <div id="headerItem1">
          <img
            src="https://www.svgrepo.com/show/202539/pizza.svg"
            alt="pizza"
          />
          <Link to="/">Delivery</Link>
        </div>
        <nav className="headerItem2">
          <Link to="/sale">Акції</Link>
          <Link to="/delivery">Доставка та оплата</Link>
          <Link to="/contacts">Контакти</Link>
        </nav>
        <button onClick={() => dispatch(toggle())}>
          {pizzaSelector.count === 0 ? (
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Font_Awesome_5_solid_shopping-cart.svg/1152px-Font_Awesome_5_solid_shopping-cart.svg.png" />
              <span className="emptyCount">{pizzaSelector.count}</span>
            </div>
          ) : (
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Font_Awesome_5_solid_shopping-cart.svg/1152px-Font_Awesome_5_solid_shopping-cart.svg.png" />
              <span className="emptyCount notEmptyCount">
                {pizzaSelector.count}
              </span>
            </div>
          )}
          <div>
            <Cart info={pizzaSelector.cart} />
          </div>
        </button>

        <div className="burgerMenu" onClick={burgerOpen}>
          <img
            src="https://static.thenounproject.com/png/659805-200.png"
            alt="burger"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
