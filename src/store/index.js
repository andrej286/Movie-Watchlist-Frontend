import { configureStore } from "@reduxjs/toolkit";
import { movieRootReducer } from "../components/redux";
// import reducers from "../components/redux";

const store = configureStore({
  reducer: movieRootReducer,
});

export default store;
