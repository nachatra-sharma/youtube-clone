import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    toggle: true,
  },
  reducers: {
    toggleMenu: (state) => (state.toggle = !state.toggle),
  },
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
