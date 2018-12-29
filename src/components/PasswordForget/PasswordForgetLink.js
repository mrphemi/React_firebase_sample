import React from "react";
import { Link } from "react-router-dom";

import { PASSWORD_FORGET } from "../../constants/routes";

const PasswordForgetLink = () => {
   return (
      <p className="has-text-centered">
         <Link to={PASSWORD_FORGET}> Forgot Password?</Link>
      </p>
   );
};

export default PasswordForgetLink;
