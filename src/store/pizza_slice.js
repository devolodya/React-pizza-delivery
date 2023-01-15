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
      state.money += Number(action.payload.price);
      console.log(action.payload);
    },
    removeItem(state, action) {
      state.count -= 1;
      state.money -= action.payload;
    },
  },
});

export const pizzaActions = pizzaSlice.actions;
export const { addItem, removeItem } = pizzaSlice.actions;
export default pizzaSlice.reducer;
