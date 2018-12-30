import React from "react";
import { AuthUserContext, withAuthorization } from "../Session";
import AccountPage from "./AccountPage";

const Account = () => (
   <AuthUserContext.Consumer>
      {authUser => <AccountPage authUser={authUser} />}
   </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Account);
