import React from "react";

const Action = (props) => (
  <div>
    <button
      disabled={!props.hasOptions}
      onClick={props.handlePicked}
      className="big-button"
    >
      What should i do?
    </button>
  </div>
);

// go into app.js
export default Action;
