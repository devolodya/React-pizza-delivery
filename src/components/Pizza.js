import { useState } from "react";
import "../scss/Pizza.scss";

const Pizza = (props) => {
  const [price, setPrice] = useState(Number(props.price));
  const [checked, setChecked] = useState(false);
  const [count, setCount] = useState(0);
  // написати зміну ціни залежно від борта
  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    if (count > 0) setCount(count - 1);
  };
  return (
    <div id="pizzaWrapper">
      <div id="pizzaModule">
        <img src={props.photo} alt="pizza" id="pizzaPhoto" />
        <div id="pizzaName">{props.name}</div>
        <div id="pizzaBort">
          <span>
            <span id="pizzaBortHeader">Бортик: </span>
            <input
              type="radio"
              name="bort"
              id="pizzaCheese"
              checked={checked}
              onClick={() => {
                if (checked) {
                  setPrice(price - 20);
                  setChecked(false);
                } else {
                  setPrice(price + 20);
                  setChecked(true);
                }
              }}
            />
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
