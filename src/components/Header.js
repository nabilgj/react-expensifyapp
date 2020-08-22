import React from "react";

import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1> Expensify App</h1>
    <NavLink to="/" activeClassName="is-active" exact>
      Dashboard
    </NavLink>
    &nbsp;
    <NavLink to="/create" activeClassName="is-active">
      Create Expense
    </NavLink>
    &nbsp; &nbsp;
  </header>
);

export default Header;
