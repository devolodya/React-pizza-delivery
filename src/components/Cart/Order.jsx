import React from 'react'
import '../../scss/Cart/Order.scss'
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';
const Order = () => {

    const pizzaSelector = useSelector((state) => state.pizzaSlice);

  return (
    <div id='order'>
      {pizzaSelector.cart.map((item) => (
              <OrderItem key={item.id + Math.random(222)} {...item} />
            ))}
            <div id='confirm'>
                <span id='orderInfo'>Сума замовлення: {pizzaSelector.money} грн</span>
                <button className='orderButton'>Замовити</button>
            </div>
    </div>
  )
}

export default Order;
