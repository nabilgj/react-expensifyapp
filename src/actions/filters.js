// SET TEXT FILTER
export const setTextFilter = (text = "") => {
  return {
    type: "SET_TEXT_FILTER",
    text: text,
  };
};

// SORT BY DATE
export const sortByDate = () => {
  return {
    type: "SORT_BY_DATE",
  };
};

// SORT BY AMOUNT
export const sortByAmount = () => {
  return {
    type: "SORT_BY_AMOUNT",
  };
};

// SET START DATE
export const setStartDate = (startDate) => {
  return {
    type: "SET_START_DATE",
    startDate: startDate,
  };
};

// SET END DATE
export const setEndDate = (endDate) => {
  return {
    type: "SET_END_DATE",
    endDate: endDate,
  };
};
