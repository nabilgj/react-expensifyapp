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

// go into configureStore
export default expensesReduer;
