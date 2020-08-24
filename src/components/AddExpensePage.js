import React from "react";

import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenses";

import ExpenseForm from "./ExpenseForm";

class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmitForm={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startAddExpense: (expense) => dispatch(startAddExpense(expense)),
  };
};

// go into AppRouter
export default connect(null, mapDispatchToProps)(AddExpensePage);
