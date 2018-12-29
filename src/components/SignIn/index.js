import React from "react";
import SignInForm from "./SignInForm";
import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";

const SignInPage = () => (
   <div className="container">
      <h2 className="is-size-2 has-text-centered">SignIn</h2>
      <SignInForm />
      <br />
      <PasswordForgetLink />
      <SignUpLink />
   </div>
);

export default SignInPage;
