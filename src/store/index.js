import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "../components/redux";
// import reducers from "../components/redux";

const store = configureStore({
  reducer: movieReducer,
});

export default store;
