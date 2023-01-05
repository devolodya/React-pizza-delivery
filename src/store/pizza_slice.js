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
      state.money += action.payload;
    },
    removeItem(state, action) {
      state.count -= 1;
      state.money -= action.payload;
    },
    cartAdd(state, action) {
      if (state.cart.find((element) => element.name === action.payload.name)) {
        console.log("exist");
      } else state.cart.push(action.payload);
    },
    cartCountPlus(state, action) {
      state.cart.forEach((element) => {
        if (element.name === action.payload.name) {
          element.count = Number(element.count) + 1;
        }
      });
    },
    cartRemove(state, action) {
      state.cart = state.cart.filter(
        (item) => item.name !== action.payload.name
      );
    },
    cartCountMinus(state, action) {
      state.cart.forEach((element) => {
        if (element.name === action.payload.name) {
          element.count = Number(element.count) - 1;
        }
      });
    },
    clearCart(state) {
      if (state.cart) {
        state.cart = [];
        state.count = 0;
        state.money = 0;
      }
    },
  },
});

// these exports should stay the way they are
export const pizzaActions = pizzaSlice.actions;
export const {
  addItem,
  removeItem,
  cartAdd,
  cartRemove,
  cartCountPlus,
  cartCountMinus,
  clearCart,
} = pizzaSlice.actions;
export default pizzaSlice.reducer;
