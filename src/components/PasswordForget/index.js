import React from "react";

import PasswordForgetForm from "./PasswordForgetForm";
import PasswordForgetLink from "./PasswordForgetLink";

const PasswordForgetPage = () => (
   <div className="container">
      <h2 className="is-size-2 has-text-centered">Reset Password</h2>
      <PasswordForgetForm />
   </div>
);

export default PasswordForgetPage;

export { PasswordForgetLink };
