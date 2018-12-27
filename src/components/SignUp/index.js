import React from "react";
import SignUpForm from "./SignUpForm";
import SignUpLink from "./SignUpLink";

const SignUpPage = () => (
   <div className="container">
      <h2 className="is-size-2 has-text-centered">SignUp</h2>
      <SignUpForm />
   </div>
);

export default SignUpPage;

export { SignUpLink };
