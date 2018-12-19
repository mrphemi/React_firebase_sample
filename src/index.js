import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import App from "./components/App";
import Firebase, { FirebaseContext } from "./components/Firebase";

ReactDOM.render(
   <FirebaseContext.provider value={new Firebase()}>
      <App />
   </FirebaseContext.provider>,
   document.getElementById("root")
);

serviceWorker.unregister();
