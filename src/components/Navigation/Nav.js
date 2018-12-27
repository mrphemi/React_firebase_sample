import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import LinksAuth from "./LinksAuth";
import LinksNonAuth from "./LinksNonAuth";

const Nav = ({ authUser }) => (
   <div>
      <nav className="navbar is-primary">
         <div className="container">
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
                  {authUser ? <LinksAuth /> : <LinksNonAuth />}
               </div>
            </div>
         </div>
      </nav>
   </div>
);

export default Nav;
