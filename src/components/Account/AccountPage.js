import React from "react";

import PasswordChangeForm from "../PasswordChange";

const AccountPage = ({ authUser }) => (
   <div className="container">
      <h2 className="is-size-2">Account: {authUser.email}</h2>
      <br />
      <PasswordChangeForm />
   </div>
);

export default AccountPage;
