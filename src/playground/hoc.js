// hoc is a component that return a component
// and the component that get returned its hoc
// resuse code
// render hijacking
// prop manipulation
// abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
  <div>
    <h1> Info </h1>
    <p> the info is: {props.info} </p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated && <p>This is private info pls do not share</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p> Please log in to view the info </p>
      )}
    </div>
  );
};

// requireAuthentication

// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="this is some details " />,
//   document.getElementById("app")
// );
ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="this are some details " />,
  document.getElementById("app")
);
