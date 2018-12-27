import app from "firebase/app";
import "firebase/auth";

const config = {
   apiKey: process.env.REACT_APP_API_KEY,
   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
   databaseURL: process.env.REACT_APP_DATABASE_URL,
   projectId: process.env.REACT_APP_PROJECT_ID,
   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

class Firebase {
   constructor() {
      app.initializeApp(config);
      this.auth = app.auth();
   }

   // Firebase Auth Signup method(Create new user)
   doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);

   // Firebase Auth Signin method(Login with email and password)
   doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);

   // Firebase Auth Signout method(Logout current user)
   doSignOut = () => this.auth.signOut();

   // Firebase Auth password reset method(Reset user password)
   doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

   // Firebase Auth update password method(Update user password)
   doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
}

export default Firebase;
