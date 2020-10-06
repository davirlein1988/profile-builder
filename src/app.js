import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, SignIn, SignUp } from "./pages";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}
