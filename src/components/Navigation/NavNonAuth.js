import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { SIGN_IN } from "../../constants/routes";

const NavNonAuth = () => (
   <Fragment>
      <span className="navbar-item">
         <NavLink to={SIGN_IN}>Sign In</NavLink>
      </span>
   </Fragment>
);

export default NavNonAuth;
