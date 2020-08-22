import { v4 as uuidv4 } from "uuid";

// ADD EXPENSE
export const addExpense = ({
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
export const removeExpense = ({ id } = {}) => {
  return {
    type: "REMOVE_EXPENSE",
    id: id,
  };
};

// EDIT EXPENSE
export const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id: id,
    updates: updates,
  };
};
