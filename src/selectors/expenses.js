import moment from "moment";

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      // const startDateMatch =
      //   typeof startDate !== "number" || expense.createdAt >= startDate;
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "day")
        : true;

      // const endDateMatch =
      //   typeof endDate !== "number" || expense.createdAt <= endDate;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, "day")
        : true;

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

// go into app js
export default getVisibleExpenses;
