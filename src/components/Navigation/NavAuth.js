import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { HOME, ACCOUNT } from "../../constants/routes";
import SignOutButon from "../SignOut";

const NavAuth = () => (
   <Fragment>
      <span className="navbar-item">
         <NavLink to={HOME}>Home</NavLink>
      </span>
      <span className="navbar-item">
         <NavLink to={ACCOUNT}>Account</NavLink>
      </span>
      <span className="navbar-item">
         <SignOutButon />
      </span>
   </Fragment>
);

export default NavAuth;
