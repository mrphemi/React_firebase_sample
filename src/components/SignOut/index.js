import React from "react";
import { withFirebase } from "../Firebase";

const SignOutButton = ({ firebase }) => (
   <span onClick={firebase.doSignOut}>SignOut</span>
);

export default withFirebase(SignOutButton);
