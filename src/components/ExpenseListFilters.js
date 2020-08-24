import React from "react";

import { connect } from "react-redux";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../actions/filters";

import { DateRangePicker } from "react-dates";

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };

  onDatesChanged = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusedChanged = (calendarFocused) => {
    this.setState(() => {
      return {
        calendarFocused: calendarFocused,
      };
    });
  };

  render() {
    return (
      <div>
        {/* input field */}
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => this.props.dispatch(setTextFilter(e.target.value))}
        />

        {/* date and amount select option */}
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === "date") {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === "amount") {
              this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        {/* date picker */}
        <DateRangePicker
          startDateId={this.props.filters.startDate}
          endDateId={this.props.filters.endDate}
          onDatesChange={this.onDatesChanged}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusedChanged}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

// go into ExpenseDashboardPage
export default connect(mapStateToProps)(ExpenseListFilters);
