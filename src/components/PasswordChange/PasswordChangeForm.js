import React, { Component } from "react";

import { withFirebase } from "../Firebase";

const INITIAL_STATE = {
   passwordOne: "",
   passwordTwo: "",
   loading: false,
   error: null
};

class PasswordChangeForm extends Component {
   state = { ...INITIAL_STATE };

   onSubmit = event => {
      const { passwordOne } = this.state;

      event.preventDefault();

      this.props.firebase
         .doPasswordUpdate(passwordOne)
         .then(() => {
            this.setState({ ...INITIAL_STATE });
         })
         .catch(error => {
            this.setState({ error });
         });
   };

   onChange = event => {
      this.setState({ [event.target.name]: event.target.value });
   };

   render() {
      const { passwordOne, passwordTwo, loading, error } = this.state;

      const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

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
                     name="passwordOne"
                     value={passwordOne}
                     onChange={this.onChange}
                     type="password"
                     placeholder="New Password"
                  />
               </div>
            </div>
            <div class="field">
               <label class="label">Email</label>
               <div class="control">
                  <input
                     name="passwordTwo"
                     value={passwordTwo}
                     onChange={this.onChange}
                     type="password"
                     placeholder="Confirm New Password"
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

export default withFirebase(PasswordChangeForm);
