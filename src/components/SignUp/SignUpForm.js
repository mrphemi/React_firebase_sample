import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import { HOME } from "../../constants/routes";

const INITIAL_STATE = {
   username: "",
   email: "",
   passwordOne: "",
   passwordTwo: "",
   error: null,
   loading: false
};

class SignUpForm extends Component {
   state = { ...INITIAL_STATE };

   onSubmit = e => {
      e.preventDefault();
      this.setState({
         loading: true
      });
      const { username, email, passwordOne } = this.state;

      this.props.firebase
         .doCreateUserWithEmailAndPassword(email, passwordOne)
         .then(authUser => {
            // Create a new user in your Firebase realtime database
            return this.props.firebase.user(authUser.user.uid).set({
               username,
               email
            });
         })
         .then(() => {
            // Empty input fields
            this.setState({ ...INITIAL_STATE });
            // Redirect to home page
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
      const {
         loading,
         username,
         email,
         passwordOne,
         passwordTwo,
         error
      } = this.state;

      // Validate form fields
      const isInvalid =
         passwordOne !== passwordTwo ||
         passwordOne === "" ||
         email === "" ||
         username === "";

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
               <label class="label">Username</label>
               <div class="control">
                  <input
                     class="input"
                     name="username"
                     type="text"
                     placeholder="Username"
                     value={username}
                     onChange={this.onChange}
                  />
               </div>
            </div>
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
                     name="passwordOne"
                     type="password"
                     placeholder="Email"
                     value={passwordOne}
                     onChange={this.onChange}
                  />
               </div>
            </div>
            <div class="field">
               <label class="label">Confirm password</label>
               <div class="control">
                  <input
                     class="input"
                     name="passwordTwo"
                     type="password"
                     placeholder="Confirm password"
                     value={passwordTwo}
                     onChange={this.onChange}
                  />
               </div>
               <p class="help">Confirm above password</p>
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
)(SignUpForm);
