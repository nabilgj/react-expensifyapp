import React from "react";

import moment from "moment";
import { SingleDatePicker } from "react-dates";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      note: props.expense ? props.expense.note : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: "",
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => {
      return {
        description: description,
      };
    });
  };

  onNoteChange = (e) => {
    const textNote = e.target.value;
    this.setState(() => {
      return {
        note: textNote,
      };
    });
  };

  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => {
        return { amount: amount };
      });
    }
  };

  onDateChanged = (createdAt) => {
    if (createdAt) {
      this.setState(() => {
        return {
          createdAt: createdAt,
        };
      });
    }
  };

  onSubmitted = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      // set error state = pls provide desc and amount
      this.setState(() => {
        return {
          error: "Please provide the description and amount",
        };
      });
    } else {
      // clear the error
      this.setState(() => {
        return {
          error: "",
        };
      });
      console.log("submitted");
      this.props.onSubmitForm({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmitted}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChanged}
            focused={this.state.calendarFocused}
            onFocusChange={({ focused }) => {
              this.setState(() => {
                return {
                  calendarFocused: focused,
                };
              });
            }}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />

          <textarea
            placeholder="Add a note for your expense"
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>

          <button> Add Expense </button>
        </form>
      </div>
    );
  }
}

// go into AddExpensePage, EditExpensePage
export default ExpenseForm;
