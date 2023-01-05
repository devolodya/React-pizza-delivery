import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  cartAdd,
  cartRemove,
  cartCountPlus,
  cartCountMinus,
} from "../../store/pizza_slice";
import "../../scss/Pizza.scss";

const Pizza = (props) => {
  const [price, setPrice] = useState(Number(props.price));
  const [count, setCount] = useState(Number(props.count));
  const pizzaSelector = useSelector((state) => state.pizzaSlice);
  const dispatch = useDispatch();
  // написати зміну ціни залежно від борта

  const plus = () => {
    setCount(count + 1);
    dispatch(addItem(price));
    dispatch(cartAdd(props));
    dispatch(cartCountPlus(props));
  };
  const minus = () => {
    if (count > 0) setCount(count - 1);
    dispatch(removeItem(price));
    if (count === 1) dispatch(cartRemove(props));
    dispatch(cartCountMinus(props));
  };
  return (
    <div id="pizzaWrapper">
      <div id="pizzaModule">
        <img src={props.photo} alt="pizza" id="pizzaPhoto" />
        <div id="pizzaName">{props.name}</div>
        <div id="pizzaBort">
          <span>
            <span id="pizzaBortHeader">Бортик: </span>
            <input type="radio" name="bort" id="pizzaCheese" />
            <label htmlFor="pizzaCheese"> Сирний</label>
          </span>
          <span>
            <input type="radio" name="bort" id="pizzaSausage" />
            <label htmlFor="pizzaSausage"> Мисливський</label>
          </span>
        </div>
        <div id="pizzaInfo">
          <span>{price} грн</span>
          {count === 0 ? (
            <button id="pizzaDelivery" onClick={plus}>
              + Додати
            </button>
          ) : (
            <div id="pizzaAddition">
              <button id="pizzaMinus" onClick={minus}>
                -
              </button>
              <div id="pizzaCount">{count}</div>
              <button id="pizzaPlus" onClick={plus}>
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pizza;
