import { createStore, combineReducers } from "redux";

import expensesReduer from "../reducers/expenses";
import filterReducer from "../reducers/filters";

export default () =>
  createStore(
    combineReducers({
      expenses: expensesReduer,
      filters: filterReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

// go into app js
