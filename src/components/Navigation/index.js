import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const Navigation = () => (
   <div>
      <nav className="navbar is-primary">
         <div className="navbar-brand">
            <span className="navbar-item">
               <Link to={ROUTES.LANDING}>RFB</Link>
            </span>
            <a
               role="button"
               class="navbar-burger burger"
               aria-label="menu"
               aria-expanded="false"
               data-target="mainMenu"
               href
            >
               <span aria-hidden="true" />
               <span aria-hidden="true" />
               <span aria-hidden="true" />
            </a>
         </div>
         <div id="mainMenu" class="navbar-menu">
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
            </div>
         </div>
      </nav>
   </div>
);

export default Navigation;
