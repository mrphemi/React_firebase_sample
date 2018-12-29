import React, { Component } from "react";

import { withFirebase } from "../Firebase";

const INITIAL_STATE = {
   email: "",
   error: null
};

class PasswordForgetForm extends Component {
   state = { ...INITIAL_STATE };

   onChange = e => {
      this.setState({
         [e.target.name]: e.target.value
      });
   };

   onSubmit = event => {
      event.preventDefault();
      const { email } = this.state;

      this.props.firebase
         .doPasswordReset(email)
         .then(() => {
            this.setState({ ...INITIAL_STATE });
         })
         .catch(error => {
            this.setState({ error });
         });
   };

   render() {
      const { email, error } = this.state;

      const isInvalid = email === "";

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
               <div class="control">
                  <button disabled={isInvalid} class="button is-primary">
                     Submit
                  </button>
               </div>
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

export default withFirebase(PasswordForgetForm);
