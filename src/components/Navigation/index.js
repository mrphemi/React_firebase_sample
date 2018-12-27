import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import SignOutButon from "../SignOut";

const Navigation = () => (
   <div>
      <nav className="navbar is-primary">
         <div className="navbar-brand">
            <span className="navbar-item">
               <Link to={ROUTES.LANDING}>RFB</Link>
            </span>
            <span
               role="button"
               className="navbar-burger burger"
               aria-label="menu"
               aria-expanded="false"
               data-target="mainMenu"
            >
               <span aria-hidden="true" />
               <span aria-hidden="true" />
               <span aria-hidden="true" />
            </span>
         </div>
         <div id="mainMenu" className="navbar-menu">
            <div className="navbar-end">
               <span className="navbar-item">
                  <Link to={ROUTES.SIGN_IN}>Sign In</Link>
               </span>
               <span className="navbar-item">
                  <Link to={ROUTES.HOME}>Home</Link>
               </span>
               <span className="navbar-item">
                  <Link to={ROUTES.ACCOUNT}>Account</Link>
               </span>
               <span className="navbar-item">
                  <Link to={ROUTES.ADMIN}>Admin</Link>
               </span>
               <span className="navbar-item">
                  <SignOutButon />
               </span>
            </div>
         </div>
      </nav>
   </div>
);

export default Navigation;
