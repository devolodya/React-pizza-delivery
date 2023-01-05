import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart_slice";
import pizzaReducer from "./pizza_slice";

const store = configureStore({
  reducer: {
    cartSlice: cartReducer,
    pizzaSlice: pizzaReducer,
  },
});

export default store;
