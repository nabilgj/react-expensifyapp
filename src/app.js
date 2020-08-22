// install --> import -> use

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";

import "normalize.css/normalize.css";
import "./styles/style.scss";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";

import myStore from "./store/configureStore";

import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";

import getVisibleExpenses from "./selectors/expenses";

const store = myStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
