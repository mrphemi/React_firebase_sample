import React from "react";
import { AuthUserContext } from "../Session";
import AccountPage from "./AccountPage";

const Account = () => (
   <AuthUserContext.Consumer>
      {authUser => <AccountPage authUser={authUser} />}
   </AuthUserContext.Consumer>
);

export default Account;
