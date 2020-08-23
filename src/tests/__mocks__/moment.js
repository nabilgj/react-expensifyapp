// import moment from "moment";

const mymoment = require.requireActual("moment");

export default (timestamp = 0) => {
  return mymoment(timestamp);
};
