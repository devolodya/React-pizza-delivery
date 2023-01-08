import { useState } from "react";
import { useDispatch } from "react-redux";
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
  const [count, setCount] = useState(Number(props.count));
  const dispatch = useDispatch();
  // написати зміну ціни залежно від борта

  const plus = () => {
    setCount(count + 1);
    dispatch(addItem(Number(props.price)));
    dispatch(cartAdd(props));
    dispatch(cartCountPlus(props));
  };
  const minus = () => {
    if (count > 0) setCount(count - 1);
    dispatch(removeItem(Number(props.price)));
    if (count === 1) dispatch(cartRemove(props));
    dispatch(cartCountMinus(props));
  };
  return (
    <div id="pizzaWrapper">
      <div id="pizzaModule">
        <img src={props.photo} alt="pizza" id="pizzaPhoto" />
        <div id="pizzaName">{props.name}</div>
        <div id="pizzaIngredients">{props.ingredients}</div>
        <div id="pizzaInfo">
          <span>{props.price} грн</span>
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
