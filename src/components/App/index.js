import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";

import * as ROUTES from "../../constants/routes";
import { withFirebase } from "../Firebase";

class App extends Component {
   state = {
      authUser: true
   };

   componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
         authUser
            ? this.setState({ authUser })
            : this.setState({ authUser: null });
      });
   }

   componentWillUnmount() {
      this.listener();
   }

   render() {
      return (
         <Router>
            <Fragment>
               <Navigation authUser={this.state.authUser} />
               <br />
               <Switch>
                  <Route exact path={ROUTES.LANDING} component={LandingPage} />
                  <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                  <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                  <Route
                     path={ROUTES.PASSWORD_FORGET}
                     component={PasswordForgetPage}
                  />
                  <Route path={ROUTES.HOME} component={HomePage} />
                  <Route path={ROUTES.ACCOUNT} component={AccountPage} />
                  <Route path={ROUTES.ADMIN} component={AdminPage} />
               </Switch>
            </Fragment>
         </Router>
      );
   }
}

export default withFirebase(App);
