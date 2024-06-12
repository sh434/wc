import { configureStore } from "@reduxjs/toolkit";

import dropDownSlice from "./slice/dropDownSlice";
import hamBurgerSlice from "./slice/hamBurger";
import wishListSlice from "./slice/wishListSlice";

// const preloadedState = loadStateInLocalStorage();
export const store = configureStore({
  reducer: {
    dropDowns: dropDownSlice,
    hamBurger: hamBurgerSlice,
    wishlist: wishListSlice,
  },
  // preloadedState,
});

// function saveStateInLocalStorage(state) {
//   const serializedState = JSON.stringify(state.wishlist);
//   localStorage.setItem("wishlistState", serializedState);
// }

// function loadStateInLocalStorage() {
//   const serializedState = localStorage.getItem("wishlistState");
//   if (serializedState === null) return undefined;
//   return { wishlist: JSON.parse(serializedState) };
// }

// store.subscribe(() => saveStateInLocalStorage(store.getState()));
