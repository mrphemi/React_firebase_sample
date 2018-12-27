import React from "react";
import { AuthUserContext } from "../Session";
import Nav from "./Nav";

const Navigation = () => (
   <div>
      <AuthUserContext.Consumer>
         {authUser => <Nav authUser={authUser} />}
      </AuthUserContext.Consumer>
   </div>
);

export default Navigation;
