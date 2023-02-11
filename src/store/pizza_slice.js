import { createSlice } from "@reduxjs/toolkit";

const pizzaSlice = createSlice({
  name: "pizzaSlice",
  initialState: {
    count: 0,
    money: 0,
    cart: [],
  },
  reducers: {
    addItem(state, action) {
      state.count += 1;
      state.money += action.payload.price;
      let valueID = state.cart.findIndex((el) => el.id === action.payload.id);
      if (valueID !== -1) {
        state.cart[valueID].count += 1;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      } else {
        state.cart.push({ ...action.payload, count: 1 });
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    removeItem(state, action) {
      state.count -= 1;
      state.money -= action.payload.price;

      let valueID = state.cart.findIndex((el) => el.id === action.payload.id);
      if (state.cart[valueID].count === 1) {
        state.cart.splice(valueID, 1);
        localStorage.setItem("cart", JSON.stringify(state.cart));
      } else {
        state.cart[valueID].count -= 1;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
  },
});

export const pizzaActions = pizzaSlice.actions;
export const { addItem, removeItem } = pizzaSlice.actions;
export default pizzaSlice.reducer;
