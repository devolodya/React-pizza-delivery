import React from 'react'
import '../../scss/Cart/OrderItem.scss'
const OrderItem = (props) => {
  return (
    <div id='orderItem'>
      <div id='orderItemPhoto'><img src={props.photo} alt="pizza" /></div>
      <div>
      <div id='orderItemName'>{props.name}</div>
      <div id='orderItemDesc'>{props.ingredients}</div>
      <div id="orderItemCount">Кількість: {Number(props.count)} шт</div>
      </div>
    </div>
  )
}

export default OrderItem;
