import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddtoCart: (state) => {},
    RemoveCart: (state) => {},
  },
});
export const { AddtoCart, RemoveCart } = CartSlice.actions;
export default createSlice.reducer;
