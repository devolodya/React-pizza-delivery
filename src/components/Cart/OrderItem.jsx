import React from 'react'
import '../../scss/Cart/OrderItem.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addItem,
  removeItem,
} from "../../store/pizza_slice";

const OrderItem = (props) => {

  const [count, setCount] = useState(props.count);
  const dispatch = useDispatch();

  const plus = () => {
    setCount(count + 1);
    dispatch(addItem(props));
  };
  const minus = () => {
    if (count > 0) setCount(count - 1);
    dispatch(removeItem(props));
  };
  return (
    <div id='orderItem'>
      <div id='orderItemPhoto'><img src={props.photo} alt="pizza" /></div>
      <div>
      <div id='orderItemName'>{props.name}</div>
      <div id='orderItemDesc'>{props.ingredients}</div>
      <div id="orderInfo">
          <span>{props.price} грн</span>
          <div id='orderButtons'>
              <button id="pizzaMinus" onClick={minus}>
                -
              </button>
              <div id="pizzaCount">{count}</div>
              <button id="pizzaPlus" onClick={plus}>
                +
              </button>
          </div>
        </div>
      </div>
    </div>
)}

export default OrderItem;
