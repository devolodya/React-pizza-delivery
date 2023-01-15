import React from "react";
import "../../scss/Cart/CartItem.scss";

const CartItem = (props) => {
  return (
    <div id="cartItem">
      <div id="cartPhoto">
        <img src={props.photo} alt="pizza" />
      </div>
      <div id="cartText">
        <div id="cartName">{props.name}</div>
        <div id="cartPrice">Сума: {props.price * props.count} грн</div>
        <div id="cartCount">Кількість: {Number(props.count)} шт</div>
      </div>
    </div>
  );
};

export default CartItem;
