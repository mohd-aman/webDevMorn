import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import loaderReducer from "./loaderSlice";

const store = configureStore({
  reducer: {
    loaders: loaderReducer,
    users: userReducer,
  }
});

export default store;