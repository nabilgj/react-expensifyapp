import moment from "moment";

import filterReducer from "../../reducers/filters";

test("should setup default filter values", () => {
  const state = filterReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("should set sortBy to amount", () => {
  const state = filterReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sortBy to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };

  const action = { type: "SORT_BY_DATE" };
  const state = filterReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

// should set text filter
test("should set text filter", () => {
  const text = "this is my filter";
  const action = {
    type: "SET_TEXT_FILTER",
    text: text,
  };

  const state = filterReducer(undefined, action);
  expect(state.text).toBe(text);
});

// should set start date filter
test("should set start date filter", () => {
  const startDate = moment();
  const action = {
    type: "SET_START_DATE",
    startDate: startDate,
  };

  const state = filterReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

// should set endDate
test("should set end date filter", () => {
  const endDate = moment();
  const action = {
    type: "SET_END_DATE",
    endDate: endDate,
  };

  const state = filterReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
