import { configureStore } from "@reduxjs/toolkit";
import { toggleMenu } from "./menuSlice";
const appStore = configureStore({
  reducer: {
    toggle: toggleMenu,
  },
});

export default appStore;
