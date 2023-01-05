import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartIsVisible: false,
  },
  reducers: {
    toggle(state) {
      state.cartIsVisible
        ? (state.cartIsVisible = false)
        : (state.cartIsVisible = true);
    },
  },
});

// these exports should stay the way they are
export const cartActions = cartSlice.actions;
export const { toggle } = cartSlice.actions;
export default cartSlice.reducer;
