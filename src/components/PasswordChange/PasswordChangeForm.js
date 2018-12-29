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

      this.setState({ loading: true });

      this.props.firebase
         .doPasswordUpdate(passwordOne)
         .then(() => {
            this.setState({ ...INITIAL_STATE });
         })
         .catch(error => {
            this.setState({ error, loading: false });
         });
   };

   onChange = event => {
      this.setState({ [event.target.name]: event.target.value });
   };

   render() {
      const { passwordOne, passwordTwo, loading, error } = this.state;

      const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

      const buttons = loading ? (
         <button className="button is-primary is-loading">Submit</button>
      ) : (
         <button disabled={isInvalid} className="button is-primary">
            Submit
         </button>
      );

      return (
         <form onSubmit={this.onSubmit}>
            <div classNameName="field">
               <label className="label">Password</label>
               <div className="control">
                  <input
                     class="input"
                     name="passwordOne"
                     value={passwordOne}
                     onChange={this.onChange}
                     type="password"
                     placeholder="New Password"
                  />
               </div>
            </div>
            <div className="field">
               <label className="label">Confirm Password</label>
               <div className="control">
                  <input
                     class="input"
                     name="passwordTwo"
                     value={passwordTwo}
                     onChange={this.onChange}
                     type="password"
                     placeholder="Confirm New Password"
                  />
               </div>
            </div>
            <div className="field">
               <div className="control">{buttons}</div>
            </div>
            {error && (
               <p className="is-size-4 has-text-centered has-text-danger">
                  {error.message}
               </p>
            )}
         </form>
      );
   }
}

export default withFirebase(PasswordChangeForm);
