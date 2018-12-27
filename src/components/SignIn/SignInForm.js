import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import { HOME } from "../../constants/routes";

const INITIAL_STATE = {
   email: "",
   password: "",
   error: null,
   loading: false
};

class SignInForm extends Component {
   state = { ...INITIAL_STATE };

   onSubmit = e => {
      e.preventDefault();

      this.setState({
         loading: true
      });
      const { email, password } = this.state;

      // authenticate user with firebase via & password
      this.props.firebase
         .doSignInWithEmailAndPassword(email, password)
         .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(HOME);
         })
         .catch(error => {
            this.setState({ error, loading: false });
         });
   };

   onChange = e => {
      this.setState({
         [e.target.name]: e.target.value
      });
   };

   render() {
      // destructure state object
      const { loading, email, password, error } = this.state;

      // Validate form fields
      const isInvalid = password === "" || email === "";

      const buttons = loading ? (
         <button class="button is-primary is-loading">Submit</button>
      ) : (
         <button disabled={isInvalid} class="button is-primary">
            Submit
         </button>
      );

      return (
         <form onSubmit={this.onSubmit}>
            <div class="field">
               <label class="label">Email</label>
               <div class="control">
                  <input
                     class="input"
                     name="email"
                     type="email"
                     placeholder="Email"
                     value={email}
                     onChange={this.onChange}
                  />
               </div>
            </div>
            <div class="field">
               <label class="label">Password</label>
               <div class="control">
                  <input
                     class="input"
                     name="password"
                     type="password"
                     placeholder="Password"
                     value={password}
                     onChange={this.onChange}
                  />
               </div>
            </div>
            <div class="field">
               <div class="control">{buttons}</div>
            </div>
            {error && (
               <p class="is-size-4 has-text-centered has-text-danger">
                  {error.message}
               </p>
            )}
         </form>
      );
   }
}

export default compose(
   withRouter,
   withFirebase
)(SignInForm);
