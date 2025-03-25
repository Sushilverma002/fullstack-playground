import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addtoCart: (state, action) => {
      state.push(action.payload);
    },
    removeCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addtoCart, removeCart } = CartSlice.actions;
export default createSlice.reducer;
