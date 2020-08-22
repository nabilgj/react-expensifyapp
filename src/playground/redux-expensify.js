import { createStore, combineReducers } from "redux";

import { v4 as uuidv4 } from "uuid";

// ADD EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => {
  return {
    type: "ADD_EXPENSE",
    expense: {
      id: uuidv4(),
      description: description,
      note: note,
      amount: amount,
      createdAt: createdAt,
    },
  };
};

// REMOVE EXPENSE
const removeExpense = ({ id } = {}) => {
  return {
    type: "REMOVE_EXPENSE",
    id: id,
  };
};

// EDIT EXPENSE
const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id: id,
    updates: updates,
  };
};

// SET TEXT FILTER
const setTextFilter = (text = "") => {
  return {
    type: "SET_TEXT_FILTER",
    text: text,
  };
};

// SORT BY DATE
const sortByDate = () => {
  return {
    type: "SORT_BY_DATE",
  };
};

// SORT BY AMOUNT
const sortByAmount = () => {
  return {
    type: "SORT_BY_AMOUNT",
  };
};

// SET START DATE
const setStartDate = (startDate) => {
  return {
    type: "SET_START_DATE",
    startDate: startDate,
  };
};

// SET END DATE
const setEndDate = (endDate) => {
  return {
    type: "SET_END_DATE",
    endDate: endDate,
  };
};

// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReduer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];

    case "REMOVE_EXPENSE":
      return state.filter((expId) => expId.id !== action.id);

    case "EDIT_EXPENSE":
      return state.map((exp) => {
        if (exp.id === action.id) {
          return {
            ...exp,
            ...action.updates,
          };
        } else {
          return exp;
        }
      });

    default:
      return state;
  }
};

// filters Reducer
const filterReducerDefaultState = {
  text: "",
  sortBy: new Date(),
  startDate: undefined,
  endDate: undefined,
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };

    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };

    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };

    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };

    case "SET_END_DATE": {
      return {
        ...state,
        endDate: action.endDate,
      };
    }

    default:
      return state;
  }
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      // figured out if exp.description as the text variable inside of it
      // includes method
      // convert both strings to lower case

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

// store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReduer,
    filters: filterReducer,
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 1, createdAt: 21000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 10, createdAt: -1000 })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { description: "tea" }));

// store.dispatch(setTextFilter("coffee"));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

const demoState = {
  expenses: [
    {
      id: "poja",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: 54500,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined,
  },
};
