import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap-icons/font/bootstrap-icons.css';
import MovieModule from "./components/MoviesModule";
import store from "./store";
import {Provider} from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <MovieModule />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
