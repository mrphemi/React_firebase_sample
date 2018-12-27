import React from "react";
import { Link } from "react-router-dom";

import { SIGN_UP } from "../../constants/routes";

const SignUpLink = () => (
   <p className="has-text-centered">
      Don't have an account? Sign up <Link to={SIGN_UP}>here</Link>
   </p>
);

export default SignUpLink;
